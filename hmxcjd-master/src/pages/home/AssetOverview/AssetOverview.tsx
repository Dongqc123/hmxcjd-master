import React from 'react';
import AssetsTotalGraph from './AssetsTotalGraph';

import './style/index.less';

export interface AssetOverviewProps {
    receive: number;
    send: number;
}

export default function AssetOverview(props: AssetOverviewProps) {
    const { receive, send } = props;

    return (
        <div className={'dbc-home-assetoverview'}>
            <div className={'header'}>
                <div className={'home-group-item'} style={{ marginBottom: 0 }}>
                    <div className={'title'}>鉴定科室</div>
                    <div className={'extra'} />
                </div>
            </div>
            <div className={'content'}>
                <AssetsTotalGraph receive={receive} send={send} />
            </div>
        </div>
    );
}
