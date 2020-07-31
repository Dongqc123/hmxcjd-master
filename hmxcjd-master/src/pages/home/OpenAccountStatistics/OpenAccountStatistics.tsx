import React from 'react';
import { Radio } from 'dw-mx';
import OpeningStatisticsGraph from './OpeningStatisticsGraph';

import './style/index.less';

export interface OpenAccountStatisticsProps {
    dateType: any;
    onDateTypeChange: (value: any) => void;
    data: any[];
}

export default function OpenAccountStatistics(props: OpenAccountStatisticsProps) {
    const { data, dateType, onDateTypeChange } = props;

    return (
        <div className={'dbc-home-open_account_statistics'}>
            <div className={'header'}>
                <div className={'title'}>开户统计</div>
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
            <div className={'content'}>
                <OpeningStatisticsGraph data={data} />
            </div>
        </div>
    );
}
