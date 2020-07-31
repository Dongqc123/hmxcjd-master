import React, { useEffect, useState } from 'react';
import { RowFlex, ColFlex, FlexItem } from 'dw-mx-flex';
import { PlusOutlined } from 'dw-mx-icons';
import { Button, Col, Form, Input, message, Row, Select, Table, Space, TreeSelect } from 'dw-mx';
import { DownOutlined, UserOutlined, SearchOutlined } from 'dw-mx-icons';
import { Dropdown, Menu, Popconfirm, Modal } from 'dw-mx';

const { Column } = Table;

export default function ExpertsEdit(props) {
    // 加载角色类型，多选select
    const [roleChildrens, setRoleChildrens] = useState([]);
    // 设置各组件的disable状态
    const [disabledFlag, setDisabledFlag] = useState(false);
    const [select1, setSelect1] = useState('');
    const [select2, setSelect2] = useState('');
    const { Search } = Input;
    const { Option } = Select;
    const [form] = Form.useForm();
    const formItemLayout = {
        labelCol: { span: 4 },
        wrapperCol: { span: 20 }
    };
    const onChange1 = (value, option) => {
        setSelect1(option.children);
        console.log(option);

    };
    const onChange2 = (value, option) => {
        setSelect2(option.children);
        console.log(option);
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

    //console.log(props.content,'this is content')
    return <Modal
        title="维护鉴定科室"
        visible={true}
        width={600}
        onOk={() => {
            const data = form.getFieldsValue(['office_num', 'office_name']);
            data.disease_category = select1;
            data.hospital = select2;
            data.key = props.content.key;
            data.office_id = props.content.office_id;

            //console.log(data)
            return props.closeModal(data);

        }

        }
        onCancel={() => props.closeModal('cancel')}
    >
        <div style={{ marginBottom: 10 }}>
            <Form form={form} {...formItemLayout}>
                <Form.Item label="身份证号码" name="experts_card" rules={[{ required: true }]}>
                    <Input maxLength={128} disabled={disabledFlag}/>
                </Form.Item>
                <Form.Item label="姓名" name="experts_name" rules={[{ required: true }]}>
                    <Input maxLength={128} disabled={disabledFlag}/>
                </Form.Item>
                <Form.Item label="性别" name="experts_sex" rules={[{ required: true }]}>
                    <Input maxLength={128} disabled={disabledFlag}/>
                </Form.Item>
                <Form.Item label="联系电话" name="phone" rules={[{ required: true }]}>
                    <Input maxLength={128} disabled={disabledFlag}/>
                </Form.Item>
                <Form.Item name="office_name" label="科室" rules={[{ required: true }]}>
                    <Select
                        showSearch
                        style={{ width: 200 }}
                        placeholder="请选择科室"
                        optionFilterProp="children"
                        onChange={onChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        onSearch={onSearch}
                        filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                    >

                        <Option value="internal">内科</Option>
                        <Option value="mental">精神科</Option>
                        <Option value="other">外科</Option>
                        <Option value="orthopedic">骨科</Option>
                        <Option value="fiveorgans">五官科</Option>
                        <Option value="stomatology">口腔科</Option>
                        <Option value="ophtalmology">眼科</Option>
                        <Option value="ent">耳鼻喉科</Option>
                        <Option value="neurology">神经科</Option>
                    </Select>
                </Form.Item>

            </Form>
        </div>
    </Modal>;
}