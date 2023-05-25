import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';
@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const chart = echarts.init(
      document.getElementById('bar-chart') as HTMLDivElement
    );
    const option = {
      title: {
        text: 'Alarm Type',
        textStyle: {
          fontSize: 14,
        },
      },
      xAxis: {
        type: 'category',
        data: [
          'Type not set',
          'Site down',
          'Cell down',
          'Infra failure',
          'Router failure',
          'DWDM failure',
        ],
      },
      yAxis: {
        type: 'value',
        name: 'Number of Alarms',
        nameLocation: 'middle',
        nameGap: 50,
      },
      series: [
        {
          data: [1180, 800, 1200, 1180, 1000, 1100],
          type: 'bar',
          barWidth: 50,
          itemStyle: {
            color: '#660099',
          },
        },
      ],
    };
    chart.setOption(option);
  }
}
