import { Radio } from 'dw-mx';
import React from 'react';

import ReceiveAndSendStatisticsGraph from './ReceiveAndSendStatisticsGraph';

import "./style/index.less"

export interface ReceiveAndSendStatisticsProps {
    dateType: any;
    onDateTypeChange: (value:any) => void;
    data: any[];
}

export default function ReceiveAndSendStatistics(props:ReceiveAndSendStatisticsProps){
    const {data, dateType, onDateTypeChange} = props;

    return (
        <div className={"dbc-home-receive_and_send_statistics"}>
            <div className={"header"}>
                <div className={'title'}>收发件统计</div>
                <div className={'extra'}>
                    <Radio.Group
                        size={'small'}
                        value={dateType}
                        onChange={e => {
                            onDateTypeChange(e.target.value);
                        }}
                    >
                        <Radio.Button value="day">日</Radio.Button>
                        <Radio.Button value="week">周</Radio.Button>
                        <Radio.Button value="month">月</Radio.Button>
                    </Radio.Group>
                </div>
            </div>
            <div className={"content"}>
                <ReceiveAndSendStatisticsGraph
                    data={data}
                />
            </div>
        </div>
    )
}