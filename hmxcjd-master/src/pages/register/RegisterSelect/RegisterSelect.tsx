import React, { useEffect, useRef, useState } from 'react';
import { RowFlex, ColFlex, FlexItem } from 'dw-mx-flex';
import { PlusOutlined } from 'dw-mx-icons';
import { Button, Col, Form, Input, message, Row, Select, Table, Space, TreeSelect, Pagination, DatePicker } from 'dw-mx';
import { DownOutlined, UserOutlined, SearchOutlined } from 'dw-mx-icons';
import { Dropdown, Menu, Popconfirm, Modal } from 'dw-mx';
import { request } from 'dw-mx-request';
import { Code } from 'dw-mx-extend';
import { DateCell, SelectCell, StringCell } from 'dw-mx-table';

const { Column } = Table;
const { Option } = Select;

export interface ReceiveOfficeDefendTableData {
    office_name: string;
    ksbh: string;
}

export default function OfficeDefend() {
    const [form] = Form.useForm();
    const inputref = useRef(null);
    const [pageParam, updatePageParam] = useState({ pageIndex: 1, pageSize: 10, rowCount: 0 });
    const [receiveInstanceData, setReceiveInstanceData] = useState<ReceiveOfficeDefendTableData[]>();
    //编辑窗口定义
    const [KsEditModal, updateKsEditModal] = useState({
        open: false,
        props: {}
    });
    //添加窗口定义
    const [KsAddModal, updateKsAddModal] = useState({
        open: false,
        props: {}
    });
    //删除窗口定义
    const [KsDeleteModal, updateKsDeleteModal] = useState({
        open: false,
        props: {}
    });
    // 设置form布局，
    const layout = {
        labelCol: { span: 6 },
        wrapperCol: { span: 18 }
    };
    // 进入页面的方法
    // useEffect(() => {
    //     updatePageParam({
    //         ...pageParam,
    //         rowCount: originData.length
    //     });
    // }, []);
    // 查询科室信息方法
    const queryKsInfo = async () => {
        inputref.current.focus()
        // 可以验证必填项
        try {
            const values = await form.validateFields();
        } catch (errorInfo) {
            return;
        }
        //查询更新数据
        const ret = await request('/mx/xcjdwh/queryKsInfo', {
            'ksmc': form.getFieldsValue().ksmc,
            'bzlb': form.getFieldsValue().bzlb
        });
        sessionStorage.setItem('access-token', ret);
        updatePageParam({ pageIndex: pageParam.pageIndex, pageSize: pageParam.pageSize, rowCount: ret.rowCount });
        setReceiveInstanceData(ret.ksinfo);
    };

    // 点击重置的方法
    const onReset = () => {
        form.resetFields();
        setReceiveInstanceData([]);
    };


    //分页设置
    const paginationProps = {};


    return (
        <div>
            <Form form={form} {...layout} layout={'horizontal'}>
                <Row>
                    <Col span={5}>
                        <Form.Item name="ry" label="人员1111111111111111" >
                            <Input placeholder={'可以输入身份证号'} ref={inputref}/>
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
                        <Form.Item name="qdrq" label="签到日期1111111111111" >
                            <DatePicker ref={inputref}/>
                        </Form.Item>
                    </Col>
                    <Col span={5}>
                        <Form.Item name="qdlx" label="签到类型" >
                            <Select allowClear={true} ref={inputref} options={Code.NAMEDCODE.get('QDLX')}>
                            </Select>
                        </Form.Item>
                    </Col>

                    <Col span={1}>
                    </Col>

                    <Col span={5}>
                        <Row justify={'start'}>
                            <Space>
                                <Button type='primary' icon={<SearchOutlined/>}
                                        onClick={queryKsInfo}>查询</Button>
                                <Button onClick={onReset}>清空</Button>

                            </Space>
                        </Row>
                    </Col>
                </Row>
            </Form>



            <Table scroll={{ x: '100%' }} dataSource={receiveInstanceData} pagination={paginationProps} bordered
            >

                <Column ellipsis={true} title="申报受理单号" dataIndex="sldh" key="sldh" width={'150px'}
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
                <Column ellipsis={true} title="科室" dataIndex="ks" key="ks" width={'150px'}
                        align={'center'}
                        render={(value, record, index) => {
                            return <StringCell value={value}/>;
                        }}
                />
                <Column ellipsis={true} title="签到时间" dataIndex="qdsj" key="qdsj" width={'160px'}
                        align={'center'}
                        render={(value, record, index) => {
                            return <DateCell value={value} mask={"YYYY-MM-DD HH:mm:ss"} sourceMask={"YYYYMMDD"}/>;
                        }}
                />
                <Column ellipsis={true} title="签到类型" dataIndex="qdlx" key="qdlx" width={'100px'}
                        align={'center'}
                        render={(value, record, index) => {
                            return <SelectCell value={value} options={Code.NAMEDCODE.get('QDLX')}/>;
                        }}
                />

            </Table>
        </div>
    );
}
