import React, { useEffect, useState } from 'react';
import { RowFlex, ColFlex, FlexItem } from 'dw-mx-flex';
import { PlusOutlined } from 'dw-mx-icons';
import { Button, Col, Form, Input, message, Row, Select, Table, Space, TreeSelect } from 'dw-mx';
import { DownOutlined, UserOutlined, SearchOutlined } from 'dw-mx-icons';
import { Dropdown, Menu, Popconfirm, Modal } from 'dw-mx';

const { Column } = Table;
import { Divider } from 'dw-mx';

const originData = [];


for (let i = 0; i < 100; i++) {
    originData.push({
        key: i.toString(),
        office_id: i.toString(),
        plan_id: i.toString(),
        plan_office: '企划部',
        office_name: '脑科二室',
        office_num: '123',
        experts_name: '小明',
        experts_card: '370281199704235678',
        experts_phone: '130546745637'


    });

}


export default function PlanEdit(props) {
    const [dataSource, updateDataSource] = useState(originData);
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
    const onFinish = values => {
        console.log(values);
    };
    const onChange1 = (value, option) => {
        setSelect1(option.children);
        console.log(option);

    };
    const onChange2 = (value, option) => {
        setSelect2(option.children);
        console.log(option);
    };
    const paginationProps = {};

    //console.log(props.content,'this is content')
    return <Modal
        title="鉴定专家维护"
        visible={true}
        width={1200}
        footer={null}
        onCancel={() => props.closeModal('cancel')}
    >
        <div style={{ marginBottom: 10 }}>
            <FlexItem flexBasic="100%">
                <Form form={form} name="control-hooks" onFinish={onFinish}>

                    <Row>
                        <Col span={8}>
                            <Form.Item labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} name="experts_name"
                                       label="鉴定计划号" rules={[{ required: true }]}>
                                <Input disabled/>
                            </Form.Item>
                        </Col>
                        <Col span={7}>
                            <Form.Item labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} name="experts_name" label="鉴定时间"
                                       rules={[{ required: true }]}>
                                <Input disabled/>
                            </Form.Item>
                        </Col>
                        <Col span={9}>
                            <Form.Item labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} name="experts_name"
                                       label="领取鉴定结论时间" rules={[{ required: true }]}>
                                <Input disabled/>
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row>
                        <Col span={8}>
                            <Form.Item labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} name="experts_name" label="病种大类"
                                       rules={[{ required: true }]}>
                                <Input disabled/>
                            </Form.Item>
                        </Col>
                        <Col span={7}>
                            <Form.Item labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} name="experts_name" label="鉴定月份"
                                       rules={[{ required: true }]}>
                                <Input disabled/>
                            </Form.Item>
                        </Col>
                        <Col span={9}>
                            <Form.Item labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} name="experts_name"
                                       label="本次鉴定人数限制" rules={[{ required: true }]}>
                                <Input disabled/>
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row>
                        <Col span={15}>
                            <Form.Item labelCol={{ span: 4 }} name="experts_name" label="鉴定地点"
                                       rules={[{ required: true }]}>
                                <Input disabled/>
                            </Form.Item>
                        </Col>
                    </Row>

                </Form>
            </FlexItem>
            <Divider/>

            <Table scroll={{ x: '100%' }} dataSource={dataSource} pagination={paginationProps} bordered >
                <Column ellipsis={true} title="序号" dataIndex="plan_id" key="plan_id" width={'15%'}/>
                <Column ellipsis={true} title="病种科室" dataIndex="plan_office" key="plan_office" width={'15%'}
                        align={'center'}/>
                <Column ellipsis={true} title="科室名称" dataIndex="office_name" key="office_name" width={'15%'}
                        align={'center'}/>
                <Column ellipsis={true} title="科室编号" dataIndex="office_num" key="office_num" width={'15%'}
                        align={'center'}/>
                <Column ellipsis={true} title="专家姓名" dataIndex="experts_name" key="experts_name" width={'15%'}
                        align={'center'}/>
                <Column ellipsis={true} title="专家身份证号" dataIndex="experts_card" key="experts_card" width={'20%'}
                        align={'center'}/>
                <Column ellipsis={true} title="专家联系电话" dataIndex="experts_phone" key="experts_phone" width={'20%'}
                        align={'center'}/>
                <Column ellipsis={true} title="操作" dataIndex="operation" key="operation" width={'15%'} align={'center'}
                        render={(text, record: any, index) => {
                            // console.log(text);
                            //console.log(record);
                            // console.log(index);
                            return (
                                <Space>

                                    <a>删除</a>

                                </Space>
                            );
                        }}
                />

            </Table>
            <Divider/>
            <Button type="primary">添加</Button>
        </div>

    </Modal>;
}