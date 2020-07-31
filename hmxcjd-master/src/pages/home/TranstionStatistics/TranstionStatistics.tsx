import { FlexItem, RowFlex } from 'dw-mx-flex';
import ShowPieGraph from './AuthPieGraph';
import EntrustPieGraph from './EntrustPieGraph';
import TransferPieGraph from './TransferPieGraph';
import React from 'react';

import './style/index.less';

export interface TranstionStatisticsProps {
    total: number;
    auth: number;
    entrust: number;
    transfer: number;
}

export default function TranstionStatistics(props: TranstionStatisticsProps) {
    const { total, auth, entrust, transfer } = props;

    return (
        <div className={'dbc-home-transtion_statistics'}>
            <div>
                <ShowPieGraph count={auth} max={total}/>
            </div>
            <div>
                <EntrustPieGraph count={entrust} max={total}/>
            </div>
            <div>
                <TransferPieGraph count={transfer} max={total}/>
            </div>
        </div>
    );
}
