import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineChartComponent } from './line-chart/line-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { ChartsComponent } from './charts.component';
import { ChartsRoutingModule } from './charts.routes';
import { TableComponent } from './table/table.component';
import { HttpClientModule } from '@angular/common/http'
import { AgGridModule } from 'ag-grid-angular';
import { CellCustomComponent } from './cell-custom/cell-custom.component';
import {MatChipsModule} from '@angular/material/chips';
import { StatusComponent } from './status/status.component';
import {MatTabsModule} from '@angular/material/tabs';
import { ImageCropperModule } from 'ngx-image-cropper';
import { ImageCropperComponent } from './image-cropper/image-cropper.component';
import { IOlympicData } from './interfaces';
@NgModule({
  declarations: [
    LineChartComponent,
    PieChartComponent,
    BarChartComponent,
    ChartsComponent,
    TableComponent,
    CellCustomComponent,
    StatusComponent,
    ImageCropperComponent
  ],
  imports: [
    CommonModule,
    ChartsRoutingModule,
    HttpClientModule,
    AgGridModule,
    MatChipsModule,
    MatTabsModule,
    ImageCropperModule

  ],
})
export class chartsModule {}