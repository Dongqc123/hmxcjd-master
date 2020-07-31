import { Chart, Interval, Coordinate, Legend, Axis, Tooltip, Annotation } from 'dw-mx-charts';
import React, {useMemo} from 'react';
import { NumberUtil } from 'dw-mx-utils';

export interface ShowPieGraphProps {
    receive: number;
    send: number;
}

export default function ShowPieGraph(props: ShowPieGraphProps) {
    const { receive, send } = props;

    const data = [{ type: '收件数', count: receive }, { type: '发件数', count: send }];

    return useMemo(() => (
        <Chart autoFit data={data}>
            <Tooltip />
            <Axis visible={false} />
            <Legend
                marker={{
                    symbol: 'square'
                }}
            />
            <Coordinate type="theta" radius={0.85} innerRadius={0.7} />
            <Interval position="count" adjust="stack" color={['type', ['#277EFF', '#FFA235']]} />
            <Annotation.Text
                position={['50%', '45%']}
                content={`${NumberUtil.format(receive + send, '0,0')}`}
                style={{
                    lineHeight: '18px',
                    fontSize: '20',
                    fill: '#303133',
                    textAlign: 'center'
                }}
            />
            <Annotation.Text
                position={['50%', '55%']}
                content={`总资料数`}
                style={{
                    lineHeight: '14px',
                    fontSize: '12',
                    fill: 'rgba(0, 0, 0, 0.65)',
                    textAlign: 'center'
                }}
            />
        </Chart>
    ), [receive, send]);
}
