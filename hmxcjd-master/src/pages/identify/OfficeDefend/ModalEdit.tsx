import React, { useEffect, useState } from 'react';
import { RowFlex, ColFlex, FlexItem } from 'dw-mx-flex';
import { PlusOutlined } from 'dw-mx-icons';
import { Button, Col, Form, Input, message, Row, Select, Table, Space, TreeSelect } from 'dw-mx';
import { DownOutlined, UserOutlined, SearchOutlined } from 'dw-mx-icons';
import { Dropdown, Menu, Popconfirm, Modal } from 'dw-mx';
import { request } from 'dw-mx-request';

const { Column } = Table;
import { Code } from 'dw-mx-extend';

export default function ModalEdit(props) {
    const { Option } = Select;
    const [form] = Form.useForm();

    const formItemLayout = {
        labelCol: { span: 4 },
        wrapperCol: { span: 20 }
    };



    return <Modal
        title="科室信息"
        visible={true}
        width={'600px'}
        onOk={async () => {
            const data = form.getFieldsValue();

            // 可以验证必填项
            try {
                const values = await form.validateFields();
            } catch (errorInfo) {
                return;
            }

            // 检验
            console.log(data);
            // 保存

            const ret = await request('/mx/xcjdwh/saveEditKsInfo', data);
            console.log(ret);

            // 返回
            return props.closeModal(data);
        }}
        onCancel={() => props.closeModal()}
    >
        <div style={{ marginBottom: 10 }}>
            <Form form={form} {...formItemLayout}>
                <Form.Item label="科室编号" name="ksbh" initialValue={props.content.ksbh} rules={[{ required: true }]}>
                    <Input maxLength={30} disabled={true}/>
                </Form.Item>

                <Form.Item label="科室名称" name="ksmc" initialValue={props.content.ksmc} rules={[{ required: true }]}>
                    <Input maxLength={100}/>
                </Form.Item>

                <Form.Item label="所属医院" name="yybh" initialValue={props.content.yybh} rules={[{ required: true }]}>
                    <Select >
                        <Option value="1">济南市第一人民医院</Option>
                        <Option value="2">济南市第二人民医院</Option>
                        <Option value="3">济南市第三人民医院</Option>
                    </Select>
                </Form.Item>

                <Form.Item label="病种类别" name="bzlb" initialValue={props.content.bzlb} rules={[{ required: true }]}>

                    <Select placeholder="请选择"  allowClear={true} options={Code.NAMEDCODE.get("BZ")}>

                    </Select>
                </Form.Item>

            </Form>
        </div>
    </Modal>;
}