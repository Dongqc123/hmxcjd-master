import React from 'react';

import imgReceive from './style/images/receive-asset.png';
import imgSend from './style/images/send-asset.png';

import './style/index.less';

export interface ReceiveAndSendShortcutProps {
    onReceive: Function,
    onSend: Function
}

export default function ReceiveAndSendShortcut(props: ReceiveAndSendShortcutProps) {

    const { onReceive, onSend } = props;

    return <div className={'receive-and-send-shortcut'}>
        <div className={'receive'} onClick={() => onReceive()}>
            <img src={imgReceive}/>
            <span>扫码收件</span>
        </div>
        <div className={'send'} onClick={() => onSend()}>
            <img src={imgSend}/>
            <span>扫码发件</span>
        </div>
    </div>;
}