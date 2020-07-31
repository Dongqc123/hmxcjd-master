import React, { useEffect, useRef, useState } from 'react';
import { RowFlex, ColFlex, FlexItem } from 'dw-mx-flex';
import { PlusOutlined } from 'dw-mx-icons';
import { Button, Col, Form, Input, message, Row, Select, Table, Space, TreeSelect, Pagination, Tooltip } from 'dw-mx';
import { SearchOutlined } from 'dw-mx-icons';
import ExpertsAdd from './ExpertsAdd';
import ExpertsEdit from './ExpertsEidt';
import Lov from './Lov';
import { SelectCell, StringCell } from 'dw-mx-table';
import { Code } from 'dw-mx-extend';
import { request } from 'dw-mx-request';


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


export interface ReceiveExpertsDefendTableData {
    zjmc: string;
    ksbh: string;
}


export default function ExpertsDefend() {

    const [pageParam, updatePageParam] = useState({ pageIndex: 1, pageSize: 10, rowCount: 0 });
    const [receiveInstanceData, setReceiveInstanceData] = useState<ReceiveExpertsDefendTableData[]>();
    const inputref = useRef(null);
    const [modal1, updateModal1] = useState({
        open: false,
        props: {}
    });
    const [modal2, updateModal2] = useState({
        open: false,
        props: {}
    });
    const [modal3, updateModal3] = useState({
        open: false,
        props: {}
    });
    const [receiveLovData, updateReceiveLovData] = useState({ ksmc: '', ksbh: 0 });
    const paginationProps = {};
    const [form] = Form.useForm();

    const onReset = () => {
        form.resetFields();
    };

    // 查询专家信息方法
    const queryExpertsInfo = async () => {
        inputref.current.focus();
        // 可以验证必填项
        try {
            const values = await form.validateFields();
        } catch (errorInfo) {
            return;
        }
        console.log(form.getFieldsValue().ksbh);
        console.log(form.getFieldsValue().zjmc);
        //查询更新数据
        const ret = await request('/mx/xcjdwh/queryExportInfo', {
            'ksbh':form.getFieldsValue().ksbh,
            'zjmc':form.getFieldsValue().zjmc,

        });
        console.log(ret);
        sessionStorage.setItem('access-token', ret);
        updatePageParam({ pageIndex: pageParam.pageIndex, pageSize: pageParam.pageSize, rowCount: ret.rowCount });
        setReceiveInstanceData(ret.ksinfo);
    };


    const openModal1 = async () => {
        updateModal1({
            open: true,
            props: {}

        });

    };
    const closeModal1 = async (ret) => {
        updateModal1({
            open: false,
            props: {}
        });


    };// 修改科室
    const openModal2 = async (record) => {
        updateModal2({
            open: true,
            props: record
        });
    };

    const closeModal2 = async (ret) => {
        updateModal2({
            open: false,
            props: {}
        });
    };

    const openModal3 = async () => {
        updateModal3({
            open: true,
            props: form.getFieldsValue()
        });
    };

    const closeModal3 = async (ret) => {
        updateModal3({
            open: false,
            props: ret
        });

        form.setFieldsValue({
            'ksbh': ret.ksbh,
            'ksmc': ret.ksmc
        });
    };

    return (
        <div>
            <Form form={form} {...layout} layout={'horizontal'}>
                <Row>
                    <Col span={6}>
                        <Form.Item name="zjmc" label="专家名字">
                            <Input placeholder={'请输入专家名字'} ref={inputref}/>
                        </Form.Item>
                    </Col>

                    <Col span={6}>
                        <Form.Item name="ksbh" label="科室">
                            <Input placeholder={'请选择'}/>
                        </Form.Item>
                    </Col>

                    <Col span={1}>
                        <Form.Item>
                            <Button icon={<SearchOutlined/>} onClick={() => openModal3()}></Button>
                        </Form.Item>
                    </Col>

                    <Col span={6}>
                        <Form.Item name="ksmc" label="">
                            <Input readOnly={true}/>
                        </Form.Item>
                    </Col>

                    <Col span={5}>
                        <Row justify={'start'}>
                            <Space>
                                <Button type='primary' onClick={queryExpertsInfo} icon={<SearchOutlined/>}>查询</Button>
                                <Button onClick={onReset}>清空</Button>
                                <Button type='primary' onClick={() => openModal1()}
                                        icon={<PlusOutlined/>}>新增</Button>
                            </Space>
                        </Row>
                    </Col>
                </Row>
            </Form>
            {
                modal1.open && <ExpertsAdd content={modal1.props} closeModal={closeModal1}></ExpertsAdd>
            }
            {
                modal2.open && <ExpertsEdit content={modal2.props} closeModal={closeModal2}></ExpertsEdit>
            }
            {
                modal3.open && <Lov {...modal3.props} closeModal={closeModal3}></Lov>
            }

            <Table scroll={{ x: '100%' }} dataSource={receiveInstanceData} pagination={paginationProps} bordered
            >
                <Column ellipsis={true} title="序号" dataIndex="experts_id" key="experts_id" width={'45px'}
                        align={'center'}
                        render={(value, record, index) => {
                            return <StringCell value={value}/>;
                        }}
                />
                <Column ellipsis={true} title="姓名" dataIndex="experts_name" key="experts_name" width={'120px'}
                        align={'center'}
                        render={(value, record, index) => {
                            return <StringCell value={value}/>;
                        }}
                />
                <Column ellipsis={true} title="性别" dataIndex="experts_sex" key="experts_sex" width={'45px'}
                        align={'center'}
                        render={(value, record, index) => {
                            return <StringCell value={value}/>;
                        }}
                />
                <Column ellipsis={true} title="身份证号码" dataIndex="experts_card" key="experts_card" width={'150px'}
                        align={'center'}
                        render={(value, record, index) => {
                            return <StringCell value={value}/>;
                        }}
                />
                <Column ellipsis={true} title="联系方式" dataIndex="phone" key="phone" width={'150px'} align={'center'}
                        render={(value, record, index) => {
                            return <StringCell value={value}/>;
                        }}
                />
                <Column ellipsis={true} title="所属科室" dataIndex="office" key="office" width={'120px'}
                        align={'center'}
                        render={(value, record, index) => {
                            return <StringCell value={value}/>;
                        }}
                />
                <Column ellipsis={true} title="科室类别" dataIndex="office_category" key="office_category" width={'120px'}
                        align={'center'}
                        render={(value, record, index) => {
                            return <StringCell value={value}/>;
                        }}
                />
                <Column ellipsis={true} title="是否签名" dataIndex="ifSign" key="ifSign" width={'80px'} align={'center'}
                        render={(value, record, index) => {
                            return <SelectCell value={value} options={Code.NAMEDCODE.get('QM')}/>;
                        }}
                />
                <Column ellipsis={true} title="操作" dataIndex="operation" key="operation" width={'120px'}
                        align={'center'}
                        render={(text, record: any, index) => {
                            return (
                                <Space>
                                    <a onClick={() => openModal2(record)}>修改</a>
                                    <a>删除</a>
                                </Space>
                            );
                        }}
                />
            </Table>

        </div>
    );
}
