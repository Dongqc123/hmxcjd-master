import React from 'react';
import {QuestionCircleOutlined } from 'dw-mx-icons';
import './style/index.less';
import {Divider} from 'dw-mx';
import { useHistory } from 'dw-mx-router';



export default function ManulRegister() {
    const history = useHistory();
    function click() {
        history.push('/table/injury')

    }


    return (
        <div className={'dbc-home-manulregister'}>
            <div className={'header'}>

                <div className={'title'}>签到和操作</div>
                <Divider />


            </div>
            <div className={'content'}>
                {/*<AssetsTotalGraph receive={receive} send={send} />*/}

                <div className={'all-logo'}>
                    <div className={'logo'}>
                        <div className={'logo_1'} onClick={click} >
                            <div className={'icon'}>
                                <img className={'img'} src="/public/register.png" />
                            </div>
                            <div className={'text'}>人工签到</div>
                        </div>
                    </div>
                    <div className={'logo'}>
                        <div className={'logo_1'}>
                            <div className={'icon'}>
                                <img className={'img'} src="/public/identify.png" />
                            </div>
                            <div className={'text'}>现场鉴定</div>
                        </div>

                    </div>

                </div>
                <div className={'all-logo'}>
                    <div className={'logo'}>
                        <div className={'logo_1'}>
                            <div className={'text_1'}>
                                <QuestionCircleOutlined /><p style={{display:'inline'}}>待修改</p>

                            </div>
                        </div>

                    </div>
                    <div className={'logo'}>
                        <div className={'logo_1'}>
                            <div className={'text_1'}>
                                <QuestionCircleOutlined /><p style={{display:'inline'}}>待修改</p>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
}
