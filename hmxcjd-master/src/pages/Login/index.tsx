import React from 'react';

import { Form, Input, Button, Checkbox } from 'dw-mx';
import { UserOutlined, LockOutlined } from 'dw-mx-icons';
import CurrentUser from '../../auth';
import { Code } from 'dw-mx-extend';
import './style';

import { useHistory } from 'dw-mx-router';
import { request } from 'dw-mx-request';
import { md5 } from 'dw-mx-utils';
//在test分支上，我们对index进行了修改，并提交到远程库

export default function Login() {
    const [form] = Form.useForm();
    const history = useHistory();

    const doLogon = async (values) => {
        const { username, password } = values;

        // 登录验证+获取所有code
        // const { uuid, codeinfo } = await request('/mx/common/doLogon', {
        //     'username': username,
        //     'password': md5(md5(password))
        // });

        // 前台user登录
        CurrentUser.logIn(username, password, 1);

        // 设置全局code
        Code.NAMEDCODE.set({
            "BZ":[{value:"1",content:"内科"},{value:"2",content:"精神科"},{value:"3",content:"外科"},{value:"4",content:"骨科"},{value:"5",content:"五官科"}],
            "YY":[{value:"1",content:"济南市第一人民医院"},{value:"2",content:"济南市第二人民医院"},{value:"3",content:"济南市第三人民医院"}],
            "QM":[{value:"1",content:"是"},{value:"2",content:"否"}],
            "QDLX":[{value:"1",content:"网签"},{value: "2",content: "现场签到"},{value: "3",content: "代签"}],
            "XB":[{value:"1",content:"男"},{value:"2",content:"女"}],
            "HOSP":[{value:"1",content:"济南"},{value:"2",content:"青岛"}],
        })
        //Code.NAMEDCODE.set(codeinfo);

        history.push('/');
    };

    // 点击登录的事件
    const handleSubmit = (values) => {
        doLogon(values);
    };

    // 点击回车的事件
    const handleEnter = async (e) => {
        doLogon(form.getFieldsValue());
    };

    // 忘记密码的事件，暂时未实现
    const handleForgot = () => {
        //alert('TODO——忘记密码');
    };

    return (
        <div className={'app-logon'}>
            <div className={'app-logon-title'}/>
            <div className={'app-logon-beltWrapper'}>
                <div className={'app-logon-formWrapper'}>
                    <Form
                        name="normal_login"
                        className="app-logon-formWrapper-form"
                        initialValues={{ remember: true }}
                        onFinish={handleSubmit}
                    >
                        <Form.Item
                            name="username"
                            rules={[{ required: true, message: '请输入用户名!' }]}
                        >
                            <Input prefix={<UserOutlined/>} placeholder="用户名1"
                                   onPressEnter={handleEnter}/>
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: '请输入密码!' }]}
                        >
                            <Input
                                prefix={<LockOutlined/>}
                                type="password"
                                placeholder="密码"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>记住我</Checkbox>
                            </Form.Item>

                            <a className="login-form-forgot" href="###" onClick={handleForgot}>
                                忘记密码
                            </a>
                        </Form.Item>

                        <Form.Item>
                            <Button block={true} type="primary" htmlType="submit">
                                登录
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    );
}