import React from 'react';
import { Chart, Interval, Tooltip } from 'dw-mx-charts';

export default function OpeningStatisticsGraph(props) {
    const {data} = props;
    return (
        <Chart
            autoFit
            padding={[40, 10, 20, 30]}
            data={data}
            interactions={['active-region']}
            scale={{
                count: {
                    min: 0,
                    formatter(val) {
                        return `${val}`;
                    }
                }
            }}
        >
            <Interval position="xais*count" />
            <Tooltip shared />
        </Chart>
    );
}
