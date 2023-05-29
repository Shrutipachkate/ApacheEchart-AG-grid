import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartsComponent } from './charts.component';
// import { PieChartComponent } from './pie-chart/pie-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { TableComponent } from './table/table.component';
import { ImageCropperComponent } from './image-cropper/image-cropper.component';
import { TablesComponent } from './tables/tables.component';
const routes: Routes = [
  {
    path: '',
    component: TableComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'table',
      },
      {
        path: 'table',
        component: ChartsComponent ,
      },
    //   {
    //     path: 'line-chart',
    //     component: PieChartComponent ,
    //   },
      // {
      //   path: 'table',
      //   component: TableComponent ,
      // },
    
    ],
  },
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChartsRoutingModule {}