import React, { useEffect, useRef } from 'react';
import { Form, Row, Col, Select, Button, Space, Input } from 'dw-mx';
import { Code } from 'dw-mx-extend';
import { SearchOutlined } from 'dw-mx-icons';

export default function FormDemo() {
    const inputref = useRef(null);
    const [form] = Form.useForm();

    const layout = {
        labelCol: { span: 6 },
        wrapperCol: { span: 18 }
    };

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
        </div>
    );
}
