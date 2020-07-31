import React, { useState } from 'react';
import moment from "moment"

import './style/index.less';

export default function WeatherTips(props) {
    const {username = 'admin', today = new Date()} = props;

    return (
        <div className={'weathertips'}>
            <div className={'weathertips-welcome'}>
                Hi, {username}!
            </div>
            <div className={'weathertips-tips'}>
                <div className={'primary'}>
                    今天是{moment(today).format("M月D日 dddd")}
                </div>
                <div className={'secondary'}>
                    欢迎登陆区块链 数字保险箱
                </div>
            </div>
        </div>
    );
}
