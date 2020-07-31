import React, { useEffect, useState } from 'react';
import { RowFlex, ColFlex, FlexItem } from 'dw-mx-flex';
import { PlusOutlined } from 'dw-mx-icons';
import { Button, Col, Form, Input, message, Row, Select, Table, Space, TreeSelect, Pagination } from 'dw-mx';
import { SearchOutlined } from 'dw-mx-icons';
import PlanEdit from './PlanEdit';

const { Column } = Table;
const { Option } = Select;
const layout = {
    labelCol: {
        span: 8
    },
    wrapperCol: {
        span: 16
    }
};

const originData = [];


for (let i = 0; i < 100; i++) {
    originData.push({
        key: i.toString(),
        identify_experts: '123',
        identify_office: '工作室',
        identify_address: '济南市',
        conclude_date: '2020-5-23',
        identify_category: '精神科',
        idnetify_date: '2020-7-1',
        identify_month: '7',
        identify_num: '1234',
        identify_id: i.toString()

    });

}

export default function ExpertsDefend() {
    const [dataSource, updateDataSource] = useState(originData);
    const [modal1, updateModal1] = useState({
        open: false,
        props: {}
    });
    const paginationProps = {};
    const [form] = Form.useForm();
    const onReset = () => {
        form.resetFields();
    };
    const onFinish = values => {
        console.log(values);
    };
    // 修改科室
    const openModal1 = async (record) => {
        updateModal1({
            open: true,
            props: record

        });


    };

    const closeModal1 = async (ret) => {

        updateModal1({
            open: false,
            props: {}
        });
        console.log(ret);
        for (let i = 0; i < originData.length; i++) {
            if (ret.key == originData[i].key) {

                originData[i].key = ret.key,
                    originData[i].office_id = ret.office_id,
                    originData[i].office_num = ret.office_num,
                    originData[i].office_name = ret.office_name,
                    originData[i].disease_category = ret.disease_category,
                    originData[i].hospital = ret.hospital,
                    originData[i].address = ret.address;
            }
        }
        alert(ret);
    };
    // 删除科室

    return (
        <div>

            <RowFlex>

                <FlexItem flexBasic="100%">
                    <FlexItem flexBasic="100%">
                        <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
                            <Row>
                                <Col span={6}>
                                    <Form.Item name="identify_plan" label="鉴定计划号" rules={[{ required: true }]}>
                                        <Input placeholder={'请输入鉴定计划号'}/>
                                    </Form.Item>
                                </Col>
                                <Col span={6}>
                                    <Form.Item name="identify_date" label="鉴定日期" rules={[{ required: true }]}>
                                        <Input placeholder={'请输入鉴定日期'}/>
                                    </Form.Item>
                                </Col>
                                <Col span={6}>
                                    <Form.Item name="identify_category" label="鉴定病种" rules={[{ required: true }]}>
                                        <Input placeholder={'请输入鉴定病种'}/>
                                    </Form.Item>
                                </Col>
                                <Col span={1}></Col>
                                <Col span={2}>
                                    <Button type="primary" icon={<SearchOutlined/>}>
                                        查询
                                    </Button>
                                </Col>
                                <Col span={3}>
                                    <Button htmlType="button" onClick={onReset}>
                                        重置
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </FlexItem>
                </FlexItem>
            </RowFlex>
            <div>

                {
                    modal1.open && <PlanEdit content={modal1.props} closeModal={closeModal1}></PlanEdit>
                }

                <Table scroll={{ x: '100%' }} dataSource={dataSource} pagination={paginationProps} bordered
                       >
                    <Column ellipsis={true} title="序号" dataIndex="identify_id" key="identify_id" width={'5%'}
                            align={'center'}/>
                    <Column ellipsis={true} title="鉴定计划号" dataIndex="identify_num" key="identify_num" width={'10%'}
                            align={'center'}/>
                    <Column ellipsis={true} title="鉴定月份" dataIndex="identify_month" key="identify_month" width={'10%'}
                            align={'center'}/>
                    <Column ellipsis={true} title="鉴定日期" dataIndex="idnetify_date" key="idnetify_date" width={'10%'}
                            align={'center'}/>
                    <Column ellipsis={true} title="鉴定病种" dataIndex="identify_category" key="identify_category"
                            width={'10%'} align={'center'}/>
                    <Column ellipsis={true} title="领取鉴定结论日期" dataIndex="conclude_date" key="conclude_date" width={'15%'}
                            align={'center'}/>
                    <Column ellipsis={true} title="鉴定地点" dataIndex="identify_address" key="identify_address"
                            width={'10%'} align={'center'}/>
                    <Column ellipsis={true} title="鉴定科室" dataIndex="identify_office" key="identify_office" width={'10%'}
                            align={'center'}/>
                    <Column ellipsis={true} title="鉴定专家" dataIndex="identify_experts" key="identify_experts"
                            width={'10%'} align={'center'}/>
                    <Column ellipsis={true} title="操作" dataIndex="operation" key="operation" width={'10%'}
                            align={'center'}
                            render={(text, record: any, index) => {
                                // console.log(text);
                                //console.log(record);
                                // console.log(index);
                                return (
                                    <Space>
                                        <a onClick={() => openModal1(record)}>修改</a>

                                    </Space>
                                );
                            }}
                    />

                </Table>
            </div>
        </div>

    );
}
