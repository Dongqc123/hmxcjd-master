import React from 'react';
import { Button, Modal } from 'dw-mx';
import { request } from 'dw-mx-request';

export default function Child(props) {
    console.log(props.content);
    return <Modal

        visible={true}

        onOk={async () => {




            const ret = await request('/mx/xcjdwh/deleteKsInfo', props.content);
            console.log(ret);

            // 返回
            return props.closeModal(props.content);
        }}
        onCancel={() => props.closeModal()}
    >
        <div>确定删除当前科室信息吗？</div>
    </Modal>;
}