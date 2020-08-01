import React, { useEffect, useRef, useState } from 'react';
import { Form, Row, Col, Select, Button, Space, Input, Table } from 'dw-mx';
import { Code } from 'dw-mx-extend';
import { SearchOutlined } from 'dw-mx-icons';
import { SelectCell, StringCell } from 'dw-mx-table';
import { ReceiveOfficeDefendTableData } from '../register/PeopleSelect/PeopleSelect';
const { Column } = Table;
const { Option } = Select;
export default function FormDemo() {
    const inputref = useRef(null);
    const [form] = Form.useForm();
    const [pageParam, updatePageParam] = useState({ pageIndex: 1, pageSize: 10, rowCount: 0 });
    const [receiveInstanceData, setReceiveInstanceData] = useState<ReceiveOfficeDefendTableData[]>();
    const layout = {
        labelCol: { span: 6 },
        wrapperCol: { span: 18 }
    };
    const paginationProps = {};
// fenzhitijiaoceshi
    return (
        <div>
            <Form form={form} {...layout} layout={'horizontal'}>
                <Row>
                    <Col span={5}>
                        <Form.Item name="ry" label="编号" >
                            <Input placeholder={'可以输入学生编号'} ref={inputref}/>
                        </Form.Item>
                    </Col>
                    <Col span={1}>
                    </Col>
                    <Col span={2}>
                        <Row justify={'start'}>
                            <Space>
                                <Button type='primary'>读卡</Button>
                            </Space>
                        </Row>
                    </Col>
                    <Col span={5}>
                        <Form.Item name="jddd" label="鉴定地点" >
                            <Select allowClear={true} ref={inputref} options={Code.NAMEDCODE.get('HOSP')}>
                            </Select>
                        </Form.Item>
                    </Col>

                    <Col span={1}>
                    </Col>

                    <Col span={10}>
                        <Row justify={'start'}>
                            <Space>
                                <Button type='primary' icon={<SearchOutlined/>}
                                >查询</Button>
                                <Button >清空</Button>

                            </Space>
                        </Row>
                    </Col>
                </Row>
            </Form>

            <Table scroll={{ x: '100%' }} dataSource={receiveInstanceData} pagination={paginationProps} bordered
            >

                <Column ellipsis={true} title="鉴定计划号" dataIndex="jdjhh" key="jdjhh" width={'150px'}
                        align={'center'}
                        render={(value, record, index) => {
                            return <StringCell value={value}/>;
                        }}
                />
                <Column ellipsis={true} title="社保编号" dataIndex="sbbh" key="sbbh" width={'150px'}
                        align={'center'}
                        render={(value, record, index) => {
                            return <StringCell value={value}/>;
                        }}
                />
                <Column ellipsis={true} title="身份证号" dataIndex="sfzh" key="sfzh" width={'150px'}
                        align={'center'}
                        render={(value, record, index) => {
                            return <StringCell value={value}/>;
                        }}
                />
                <Column ellipsis={true} title="姓名" dataIndex="xm" key="xm" width={'120px'}
                        align={'center'}
                        render={(value, record, index) => {
                            return <StringCell value={value}/>;
                        }}
                />
                <Column ellipsis={true} title="性别" dataIndex="xb" key="xb" width={'100px'}
                        align={'center'}
                        render={(value, record, index) => {
                            return <SelectCell value={value} options={Code.NAMEDCODE.get('XB')}/>;
                        }}
                />
                <Column ellipsis={true} title="鉴定病种" dataIndex="jdbz" key="jdbz" width={'150px'}
                        align={'center'}
                        render={(value, record, index) => {
                            return <StringCell value={value}/>;
                        }}
                />

                <Column ellipsis={true} title="鉴定地点" dataIndex="jddd" key="jddd" width={'100px'}
                        align={'center'}
                        render={(value, record, index) => {
                            return <SelectCell value={value} options={Code.NAMEDCODE.get('HOSP')}/>;
                        }}
                />

                <Column ellipsis={true} title="领取结论地点" dataIndex="jldd" key="jldd" width={'150px'}
                        align={'center'}
                        render={(value, record, index) => {
                            return <StringCell value={value}/>;
                        }}
                />

            </Table>
        </div>
    );
}
