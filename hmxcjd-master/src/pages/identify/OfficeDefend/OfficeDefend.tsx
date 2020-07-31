import React, { useEffect, useRef, useState } from 'react';
import { RowFlex, ColFlex, FlexItem } from 'dw-mx-flex';
import { PlusOutlined } from 'dw-mx-icons';
import { Button, Col, Form, Input, message, Row, Select, Table, Space, TreeSelect, Pagination } from 'dw-mx';
import { DownOutlined, UserOutlined, SearchOutlined } from 'dw-mx-icons';
import { Dropdown, Menu, Popconfirm, Modal } from 'dw-mx';
import ModalEdit from './ModalEdit';
import ModalAdd from './ModalAdd';
import ModalDelete from './ModalDelete';
import { request } from 'dw-mx-request';
import { Code } from 'dw-mx-extend';
import { SelectCell, StringCell } from 'dw-mx-table';

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

    //新增科室
    const btnKsAddClick = async () => {
        updateKsAddModal({
            open: true,
            props: {}
        });
    };
    const closeKsAddModal = async (data) => {
        updateKsAddModal({
            open: false,
            props: {}
        });
        //查询更新数据
        const ret = await request('/mx/xcjdwh/queryKsInfo', data);
        sessionStorage.setItem('access-token', ret);
        updatePageParam({ pageIndex: pageParam.pageIndex, pageSize: pageParam.pageSize, rowCount: ret.rowCount });
        setReceiveInstanceData(ret.ksinfo);
    };
    //分页设置
    const paginationProps = {};
    // 修改科室
    const btnKsEditClick = async (record) => {
        updateKsEditModal({
            open: true,
            props: record

        });

    };
    const closeKsEditModal = async (data) => {
        updateKsEditModal({
            open: false,
            props: {}
        });
        const ret = await request('/mx/xcjdwh/queryKsInfo', data);
        sessionStorage.setItem('access-token', ret);
        updatePageParam({ pageIndex: pageParam.pageIndex, pageSize: pageParam.pageSize, rowCount: ret.rowCount });
        setReceiveInstanceData(ret.ksinfo);
    };
    // 删除科室
    const btnKsDeleteClick = async (record) => {
        updateKsDeleteModal({
            open: true,
            props: record
        });
    };
    const closeKsDeleteModal = async (data) => {
        updateKsDeleteModal({
            open: false,
            props: {}
        });
        const ret = await request('/mx/xcjdwh/queryKsInfo', data);
        sessionStorage.setItem('access-token', ret);
        updatePageParam({ pageIndex: pageParam.pageIndex, pageSize: pageParam.pageSize, rowCount: ret.rowCount });
        setReceiveInstanceData(ret.ksinfo);
    };


    return (
        <div>
            <Form form={form} {...layout} layout={'horizontal'}>
                <Row>
                    <Col span={6}>
                        <Form.Item name="ksmc" label="科室名称" >
                            <Input placeholder={'请输入科室名称或编码'} ref={inputref}/>
                        </Form.Item>
                    </Col>

                    <Col span={6}>
                        <Form.Item name="bzlb" label="鉴定病种" >
                            <Select ref={inputref}>
                                <Option value="1">内科</Option>
                                <Option value="2">精神科</Option>
                                <Option value="3">外科</Option>
                                <Option value="4">骨科</Option>
                                <Option value="5">五官科</Option>
                            </Select>
                        </Form.Item>
                    </Col>

                    <Col span={1}>
                    </Col>

                    <Col span={11}>
                        <Row justify={'start'}>
                            <Space>
                                <Button type='primary' icon={<SearchOutlined/>}
                                        onClick={queryKsInfo}>查询</Button>
                                <Button onClick={onReset}>清空</Button>
                                <Button type='primary' onClick={() => btnKsAddClick()}
                                        icon={<PlusOutlined/>}>新增</Button>
                            </Space>
                        </Row>
                    </Col>
                </Row>
            </Form>

            {
                KsEditModal.open && <ModalEdit content={KsEditModal.props} closeModal={closeKsEditModal}></ModalEdit>
            }
            {
                KsAddModal.open && <ModalAdd {...KsAddModal.props} closeModal={closeKsAddModal}></ModalAdd>
            }
            {
                KsDeleteModal.open &&
                <ModalDelete content={KsDeleteModal.props} closeModal={closeKsDeleteModal}></ModalDelete>
            }

            <Table scroll={{ x: '100%' }} dataSource={receiveInstanceData} pagination={paginationProps} bordered
                   >
                <Column ellipsis={true} title="序号" key="no" align={'center'} width={'35px'}
                        render={(value, record, index) => {
                            return <StringCell value={index + 1}/>;
                        }}/>
                <Column ellipsis={true} title="科室编码" dataIndex="ksbh" key="ksbh" width={'120px'}
                        align={'center'}
                        render={(value, record, index) => {
                            return <StringCell value={value}/>;
                        }}
                />
                <Column ellipsis={true} title="科室名称" dataIndex="ksmc" key="ksmc" width={'150px'}
                        align={'center'}
                        render={(value, record, index) => {
                            return <StringCell value={value}/>;
                        }}
                />
                <Column ellipsis={true} title="病种类别" dataIndex="bzlb" key="bzlb" width={'120px'}
                        align={'center'}
                        render={(value, record, index) => {
                            return <SelectCell value={value} options={Code.NAMEDCODE.get('BZ')}/>;
                        }}
                />
                <Column ellipsis={true} title="所属医院" dataIndex="yybh" key="yybh" width={'160px'}
                        align={'center'}
                        render={(value, record, index) => {
                            return <SelectCell value={value} options={Code.NAMEDCODE.get('YY')}/>;
                        }}
                />
                <Column ellipsis={true} title="操作" dataIndex="operation" key="operation" width={'150px'}
                        align={'center'}
                        render={(text, record: any, index) => {
                            return (
                                <Space>
                                    <a onClick={() => btnKsEditClick(record) }>修改</a>
                                    <a onClick={() => btnKsDeleteClick(record)}>删除</a>
                                </Space>
                            );
                        }}
                />
            </Table>
        </div>
    );
}
