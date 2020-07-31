import { Chart, Interval, Coordinate, Legend, Axis, Tooltip, Annotation } from 'dw-mx-charts';
import React, {useMemo} from 'react';
import { NumberUtil } from 'dw-mx-utils';

export interface ShowPieGraphProps {
    count: number;
    max?: number;
}

export default function EntrustPieGraph(props: ShowPieGraphProps) {
    const { count, max = 10000 } = props;

    const data = [{ type: '委托', count }, { type: '其他', count: max - count }];

    return useMemo(()=>(
        <Chart autoFit data={data} width={"90%"} height={"90%"}>
            <Axis visible={false} />
            <Legend visible={false} />
            <Coordinate type="theta" radius={1} innerRadius={0.8} />
            <Interval position="count" adjust="stack" color={['type', ['#1ABCED', '#eceef1']]} />
            <Annotation.Text
                position={['50%', '45%']}
                content={`${NumberUtil.format(count, '0,0')}`}
                style={{
                    lineHeight: '18px',
                    fontSize: '20',
                    fill: '#303133',
                    textAlign: 'center'
                }}
            />
            <Annotation.Text
                position={['50%', '65%']}
                content={`委托`}
                style={{
                    lineHeight: '14px',
                    fontSize: '12',
                    fill: 'rgba(0, 0, 0, 0.65)',
                    textAlign: 'center'
                }}
            />
        </Chart>
    ), [count, max]);
}
