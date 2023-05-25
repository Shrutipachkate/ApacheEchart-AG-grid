import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';
@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    type EChartsOption = echarts.EChartsOption;
    var chartDom = document.getElementById('main')!;
    var myChart = echarts.init(chartDom);
    var option: EChartsOption;

    option = {
      title: {
        text: 'Attack Type Wise Distributions',
        textStyle: {
          fontSize: 14,
        },
      },
      toolbox: {
        show: true,
        feature: {
          magicType: { type: ['line', 'bar'] },
        },
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [
          'Brute...',
          'DOS/...',
          'Tamp...',
          'SQL...',
          'Phishi',
          'Scam',
          'Theft',
          'Misde...',
        ],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          name: 'Highest',
          type: 'line',
          data: [100, 200, 100, 140, 350, 210, 100, 200],
          // itemStyle: {
          //   color: '#660099',
          // },
        },
      ],
    };
    option && myChart.setOption(option);
  }
}
