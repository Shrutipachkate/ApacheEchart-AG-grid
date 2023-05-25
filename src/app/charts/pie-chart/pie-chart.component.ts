import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';
@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // const chart = echarts.init(
    //   document.getElementById('pie-chart') as HTMLDivElement
    // );
    // const option = {
    //   title: {
    //     text: 'Severity',
    //     textStyle: {
    //       fontSize: 14,
    //     },
    //   },
    //   legend: {
    //     top: '28%',
    //     orient: 'vertical',
    //     align: 'left',
    //     left: '60%',
    //     icon: 'circle',
    //   },
    //   toolbox: {
    //     show: true,
    //     feature: {
    //       magicType: { type: ['line', 'bar'] },
    //     },
    //   },
    //   series: [
    //     {
    //       type: 'pie',
    //       radius: ['40%', '65%'],
    //       cursor: 'auto',
    //       startAngle: 50,

    //       label: {
    //         show: false,
    //         position: 'center',
    //       },
    //       emphasis: {
    //         label: {
    //           show: true,
    //           fontSize: 15,
    //           fontWeight: 'bold',
    //         },
    //       },
    //       data: [
    //         {
    //           value: 1000,
    //           name: 'Critical (6M)',
    //           itemStyle: { color: '#E61717' },
    //         },
    //         { value: 300, name: 'Minor (3M)', itemStyle: { color: '#00C5CF' } },
    //         { value: 250, name: 'Major(2M)', itemStyle: { color: '#FADB14' } },
    //         {
    //           value: 250,
    //           name: 'Warning (2M)',
    //           itemStyle: { color: '#FA8C16' },
    //         },
    //         {
    //           value: 250,
    //           name: 'Indeterminate (3M)',
    //           itemStyle: { color: '#660099' },
    //         },
    //       ],
    //       left: '-35%',
    //     },
    //   ],
    // };
    // chart.setOption(option);


    const chart = echarts.init(
      document.getElementById('pie-chart') as HTMLDivElement
    );
    
    const data = [
      { value: 1000, name: 'Critical (6M)',count: 6 , itemStyle: { color: '#E61717' } },
      { value: 300, name: 'Minor (3M)' ,count: 3, itemStyle: { color: '#00C5CF' } },
      { value: 250, name: 'Major(2M)' ,count: 2, itemStyle: { color: '#FADB14' } },
      { value: 250, name: 'Warning (2M)' ,count: 2, itemStyle: { color: '#FA8C16' } },
      { value: 250, name: 'Indeterminate (3M)',count: 3, itemStyle: { color: '#660099' } },
    ];
    
    const total = data.reduce((acc, item) => acc + item.count, 0);
    
    const option = {
      title: {
        text: 'Severity',
        textStyle: {  
          fontSize: 14,
        },
      },
      legend: {
        top: '28%',
        orient: 'vertical',
        align: 'left',
        left: '60%',
        icon: 'circle',
      },
      toolbox: {
        show: true,
        feature: {
          magicType: { type: ['line', 'bar'] },
        },
      },
      series: [
        {
          type: 'pie',
          radius: ['40%', '65%'],
          cursor: 'auto',
          startAngle: 50,
    
          label: {
            show: true,
            position: 'center',
            fontSize: 25,
            formatter: () => {
              return total.toString();
            },
          },
          emphasis: {
            label: {
              show: false,
              fontSize: 15,
              fontWeight: 'bold',
            },
          },
          data: data,
          left: '-35%',
        },
      ],
    };
    chart.setOption(option);
  }
}
