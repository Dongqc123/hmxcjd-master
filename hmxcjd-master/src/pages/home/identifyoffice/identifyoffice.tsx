import React from 'react';
import { useHistory } from 'dw-mx-router'
import {Divider} from 'dw-mx';
import './style/index.less';
import {LineOutlined } from 'dw-mx-icons';


export default function IdentifyOffice() {
    const history = useHistory();
    function click(){

        history.push('/identify/officeDenfend')
    }

    return (
        <div className={'dbc-home-identifyoffice'}>
            <div className={'header'}>

                    <div className={'title'}>鉴定科室</div>
                    <Divider/>

            </div>
            <div className={'content'}>
                {/*<AssetsTotalGraph receive={receive} send={send} />*/}

                <div className={'all-logo'}>
                    <div className={'logo'} onClick={click}></div>
                    <div className={'logo'}></div>
                    <div className={'logo'}></div>
                </div>
                <div className={'all-logo'}>
                    <div className={'logo'}></div>
                    <div className={'logo'}></div>
                    <div className={'logo'}></div>
                </div>

            </div>
        </div>
    );
}
