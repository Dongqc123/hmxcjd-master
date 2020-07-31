import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import { Space, Card, Radio } from 'dw-mx';
import { CalendarOutlined, PlusSquareOutlined } from 'dw-mx-icons';
import { RowFlex, ColFlex, FlexItem } from 'dw-mx-flex';
import moment from 'moment';
import { useHistory } from 'dw-mx-router';

import AssetOverview from "./AssetOverview"
import IdentifyOffice from './identifyoffice/identifyoffice';
import ManulRegister from './manulregister/ManulRegister';
import OperationFlow from './operationflow/OperationFlow';
import ReceiveAndSendStatistics from "./ReceiveAndSendStatistics"
import TranstionStatistics from "./TranstionStatistics"
import OpenAccountStatistics from "./OpenAccountStatistics"

import AssetsCirculation from './AssetsCirculation';
import WeatherTips from './whethertips';
import ReceiveAndSendShortcut from "./ReceiveAndSendShortcut"

import './style/index.less';

export interface GraphDataProps{
    xais: string; 
    type: string; 
    count: number;
}

export default function HomePage() {
    const [date, onDateChange] = useState(new Date());
    const [dateType, updateDateType] = useState('day');
    const [openAccountDateType, setOpenAccountDateTYpe] = useState('day');
    const [otherAssetsTotalStatistics, setOtherAssetsTotalStatistics] = useState({ receive: 0, send: 0 });
    const [mineTranstionStatistics, setMineTranstionStatistics] = useState({ total: 0, auth: 0, entrust: 0, transfer: 0 });
    const [statisticsByDateTypeData, setStatisticsByDateTypeData] = useState<GraphDataProps[]>([]);
    const [openAccountData, setOpenAccountData] = useState<GraphDataProps[]>([]);

    const history = useHistory();

    useEffect(() => {
        queryTotalStatistics();
        queryMineTranstionStatistics();
        queryStatisticsOtherAssetsByDateType(dateType);
        queryOpenAccountDataByDateType(openAccountDateType);
    }, []);

    const queryTotalStatistics = () => {

    };

    const queryMineTranstionStatistics = () => {

    };

    const queryStatisticsOtherAssetsByDateType = (type) => {

    };

    const queryOpenAccountDataByDateType = (type) =>{

    };

    const dateTypeChange = (value) =>{
        updateDateType(value);
        queryStatisticsOtherAssetsByDateType(value);
    };

    const openAccountDateTypeChange = (value) =>{
        setOpenAccountDateTYpe(value);
        queryOpenAccountDataByDateType(value);
    };

    return (
        <RowFlex style={{ height: '100%', minHeight: 680 }}>
            <FlexItem style={{ marginRight: 20 }}>
                <ColFlex>
                    <FlexItem flexBasic={'50%'} style={{ marginBottom: 10 }}>
                        <RowFlex style={{ height: '100%' }}>
                            <FlexItem flexBasic={'60%'} style={{marginRight: 10}}>
                                <IdentifyOffice />
                            </FlexItem>
                            <FlexItem style={{overflow:'hidden',marginRight:10}} >
                                 <ManulRegister/>
                            </FlexItem>
                        </RowFlex>
                    </FlexItem>

                    <FlexItem  style={{overflow: "hidden"}}>
                        {/*<OpenAccountStatistics dateType={openAccountDateType} onDateTypeChange={openAccountDateTypeChange} data={openAccountData}/>*/}
                        <OperationFlow/>
                    </FlexItem>
                </ColFlex>
            </FlexItem>

        </RowFlex>
    );
}
