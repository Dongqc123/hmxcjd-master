import React from 'react';
import { Chart, Legend, Line, Point, Area } from 'dw-mx-charts';

export default function AssetsTrendsGraph(props) {
    const { data } = props;

    return (
        <Chart
            scale={{
                count: {
                    min: 0,
                    formatter(val) {
                        return `${val}`;
                    }
                }
            }}
            padding={[40, 10, 50, 30]}
            autoFit
            data={data}
        >
            <Legend visible={false} />
            <Line shape="line" position="xais*count" color={['type', ['#277EFF', '#1AAFF0']]} />
            <Point position="xais*count" color={['type', ['#277EFF', '#1AAFF0']]} />
            <Area position="xais*count" color={['type', ['#277EFF', '#1AAFF0']]} />
        </Chart>
    );
}
