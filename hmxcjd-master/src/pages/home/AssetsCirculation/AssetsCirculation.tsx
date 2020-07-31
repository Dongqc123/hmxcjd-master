import React from 'react';

import './style/index.less';
import { NumberUtil } from 'dw-mx-utils';

export interface AssetsCirculationProps {
    count: number;
}

export default function AssetsCirculation(props:AssetsCirculationProps) {
    const { count = 0 } = props;

    return (
        <div className={'home-assets-circulation'}>
            <div className={'logo'} />
            <div className={'content'}>
                <div className={'primary'}>{NumberUtil.format(count, '0,0')}</div>
                <div className={'secondary'}>资料流转数</div>
            </div>
        </div>
    );
}
