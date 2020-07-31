import React, { useEffect, useState } from 'react';
import { Button, Modal, Space, Table } from 'dw-mx';
import { request } from 'dw-mx-request';
const { Column } = Table;

export default function Lov(props) {
    const [dataSource, updateDataSource] = useState([]);

    // 进入页面默认执行的方法
    useEffect(() => {
        queryKsLovInfo();
    }, []);

    // 查询lov的信息
    const queryKsLovInfo = async () => {

        //查询更新数据
        const ret = await request('/mx/xcjdwh/queryKsInfo', {
            'ksbh' : props.ksbh,
        } );

        updateDataSource(ret.ksinfo);
    };

    return <Modal
        title="请选择"
        visible={true}
        footer={null}
        onCancel={() => props.closeModal('cancel')}
        width={"400px"}
    >
        <Table scroll={{ x: '100%', y:'500px' }} dataSource={dataSource} pagination={false} bordered
               onRow={(record: any, index) => {
                   return {
                       onDoubleClick: () => {
                           props.closeModal(record);
                       }
                   };
               }}
        >
            <Column ellipsis={true} title="序号" dataIndex="ksbh" key="ksbh" width={'30%'}/>
            <Column ellipsis={true} title="科室名称" dataIndex="ksmc" key="ksmc" width={'30%'}/>
        </Table>
    </Modal>;
}