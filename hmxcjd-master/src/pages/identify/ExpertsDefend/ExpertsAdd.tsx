import React, { useEffect, useState } from 'react';
import { RowFlex, ColFlex, FlexItem } from 'dw-mx-flex';
import { PlusOutlined } from 'dw-mx-icons';
import { Button, Col, Form, Input, message, Row, Select, Table, Space, TreeSelect } from 'dw-mx';
import { DownOutlined, UserOutlined, SearchOutlined } from 'dw-mx-icons';
import { Dropdown, Menu, Popconfirm, Modal } from 'dw-mx';

const { Column } = Table;

export default function ExpertsAdd(props) {
    // 加载角色类型，多选select
    const [roleChildrens, setRoleChildrens] = useState([]);
    // 设置各组件的disable状态
    const [disabledFlag, setDisabledFlag] = useState(false);
    const [select1, setSelect1] = useState('');
    const [select2, setSelect2] = useState('');
    const { Search } = Input;
    const { Option } = Select;
    const [form] = Form.useForm();
    const onChange1 = (value, option) => {
        setSelect1(option.children);
        //console.log(option);

    };
    const onChange2 = (value, option) => {
        setSelect2(option.children);
        //console.log(option);
    };

    function onChange(value) {
        console.log(`selected ${value}`);
    }

    function onBlur() {
        console.log('blur');
    }

    function onFocus() {
        console.log('focus');
    }

    function onSearch(val) {
        console.log('search:', val);
    }

    return <Modal
        title="新增鉴定专家"
        visible={true}
        width={600}
        onOk={() => {
            const data = form.getFieldsValue(['office_num', 'office_name']);
            data.disease_category = select1;
            data.hospital = select2;
            console.log(data);
            return props.closeModal(data);

        }}
        onCancel={() => props.closeModal()}
    >
        <div style={{ marginBottom: 10 }}>
            <Form form={form} >
                <Form.Item label="身份证号码"  name="experts_card" labelCol={{span:4}} wrapperCol={{span:20}} rules={[{ required: true }]}>
                    <Input maxLength={128} disabled={disabledFlag}/>
                </Form.Item>
                <Form.Item label="姓名" name="experts_name" labelCol={{span:4}} wrapperCol={{span:20}} rules={[{ required: true }]}>
                    <Input maxLength={128} disabled={disabledFlag}/>
                </Form.Item>
                <Form.Item label="性别" name="experts_sex" labelCol={{span:4}} wrapperCol={{span:20}} rules={[{ required: true }]}>
                    <Input maxLength={128} disabled={disabledFlag}/>
                </Form.Item>
                <Form.Item label="联系电话" name="phone" labelCol={{span:4}} wrapperCol={{span:20}} rules={[{ required: true }]}>
                    <Input maxLength={128} disabled={disabledFlag}/>
                </Form.Item>
                <Row>
                    <Col span={'16'}>
                        <Form.Item label="科室编号" name="ksbh" labelCol={{span:6}} wrapperCol={{span:18}}  rules={[{ required: true }]}>
                            <Input maxLength={128} disabled={disabledFlag} placeholder={'请选择'}/>
                        </Form.Item>
                    </Col>
                    <Col span={'8'}>
                        <Form.Item>
                            <Button icon={<SearchOutlined/>}></Button>
                        </Form.Item>
                    </Col>
                </Row>
                <Form.Item label="科室名称" name="ksmc"  labelCol={{span:4}} wrapperCol={{span:20}} rules={[{ required: true }]}>
                    <Input readOnly={true}/>
                </Form.Item>


            </Form>
        </div>
    </Modal>;
}