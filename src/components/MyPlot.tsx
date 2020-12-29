import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import PieChart from 'react-native-pie-chart';

import { XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries } from 'react-vis';

interface PlotValue {
    x: number;
    y: number;
}

function plotFunction(
        start: number, 
        stop: number, 
        step: number, 
        fun: (i: number) => number
    ): PlotValue[] {
    const pointsCount = Math.ceil((stop - start) / step) + 1;
    const x = [...Array(pointsCount).keys()].map((i) => i * step + start);
    return x.map((xi: number) => ({
        x: xi,
        y: fun(xi)
    }))
}

export default function MyPlot() {

    const logarithm = (x: number) => x > 0 ? Math.log(x) : 0;
    const plot = plotFunction(-4, 4, 0.1, logarithm);

    const chartWH = 250
    const series = [5, 5, 10, 80]
    const sliceColor = ['#960','#0ff','#f90', '#00f']

    return (
        <View>
            <XYPlot
                width={300}
                height={300}>
                <HorizontalGridLines />
                <LineSeries
                    data={plot}/>
                <XAxis />
                <YAxis />
            </XYPlot>
            <PieChart
                chart_wh={chartWH}
                series={series}
                sliceColor={sliceColor}
                doughnut={true}
                coverRadius={0.45}
                coverFill={'#FFF'}
          />
        </View>
    );
}
