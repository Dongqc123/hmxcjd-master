import React from 'react';
import {Divider} from 'dw-mx';


import './style/index.less';



export default function OperationFlow() {


    return (
        <div className={'dbc-home-open_account_statistics'}>
            <div className={'header'}>
                <div className={'title'}>使用流程</div>
                <Divider/>

            </div>
            <div className={'content'}>
                <div className={'model'}>
                    <div className={'model_1'} >
                        <div className={'text'}>被鉴定人员签到</div>
                        <div className={'describe'}>
                            <div className={'picture'}>
                                <img className={'picture-demo'} src="/public/database.png" />
                            </div>
                            <div className={'text-describe'}>
                                <p>支持连接</p>
                                <p>MySQL/Oracle/Hive</p>
                                <p>等多种数据源</p>
                            </div>
                        </div>
                    </div>
                    <div className={'model_2'}></div>


                </div>

                <div className={'model'}>
                    <div className={'model_1'} >
                        <div className={'text'}>工伤鉴定</div>
                        <div className={'describe'}>
                            <div className={'picture'}>
                                <img className={'picture-demo'} src="/public/model.png" />
                            </div>
                            <div className={'text-describe'}>
                                <p>从物理模型到逻辑模型，</p>
                                <p>再到主题封装，</p>
                                <p>轻松完成数据建模</p>
                            </div>
                        </div>
                    </div>
                    <div className={'model_2'}></div>

                </div>

                <div className={'model'}>
                    <div className={'model_1'} >
                        <div className={'text'}>鉴定复议</div>
                        <div className={'describe'}>
                            <div className={'picture'}>
                                <img className={'picture-demo'} src="/public/reconsider.png" />
                            </div>
                            <div className={'text-describe'}>
                                <p>支持平表、OLAP多维分析，</p>
                                <p>拖曳式报表</p>
                                <p>灵活分析各种场景</p>
                            </div>
                        </div>
                    </div>
                    <div className={'model_2'}></div>

                </div>

                <div className={'model'}>
                    <div className={'model_1'} >
                        <div className={'text'}>鉴定信息确认</div>
                        <div className={'describe'}>
                            <div className={'picture'}>
                                <img className={'picture-demo'} src="/public/affirm.png" />
                            </div>
                            <div className={'text-describe'}>
                               <p>支持多种基础&高级图表</p>
                                <p>分析，可使用图片、网页、</p>
                                <p>TAB页等多种展示方式</p>
                            </div>
                        </div>
                    </div>
                    <div className={'model_2'}></div>

                </div>

            </div>
        </div>
    );
}
