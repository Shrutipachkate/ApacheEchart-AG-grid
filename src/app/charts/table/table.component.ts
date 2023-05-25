import { Component, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { HttpClient } from '@angular/common/http';
import { CellClickedEvent, ColDef, GridReadyEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { CellCustomComponent } from '../cell-custom/cell-custom.component';
import { StatusComponent } from '../status/status.component';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  columnDefs = [
    {
      field: 'make',
      width: 245,
      suppressMovable: true,
      checkboxSelection: true,
      headerCheckboxSelection: true,
    },
    { field: 'model', 
    width: 245 
  },
    { field: 'type', 
    width: 245,
    cellRenderer: CellCustomComponent,
  },
    { field: 'status', 
    width: 245,
    cellRenderer: StatusComponent  },
    { field: 'price', 
    width: 245 
  },
  ];
  rowData = [
    { make: 'Toyota', model: 'Celica', type:'SUV', status:'Available' ,price: 35000 },
    { make: 'Ford', model: 'Mondeo',type:'Sedan', status:'Sold Out' , price: 32000 },
    { make: 'Porsche', model: 'Boxter',type:'SUV', status:'Available' , price: 72000 },
    { make: 'Ford', model: 'Mondeo',type:'Sedan', status:'Sold Out' , price: 32000 },
    { make: 'Toyota', model: 'Celica', type:'SUV', status:'Available' ,price: 35000 },
    { make: 'Ford', model: 'Mondeo',type:'Sedan', status:'Sold Out' , price: 32000 },
    { make: 'Porsche', model: 'Boxter',type:'SUV', status:'Available' , price: 72000 },
    { make: 'Ford', model: 'Mondeo',type:'Sedan', status:'Sold Out' , price: 32000 },
    { make: 'Toyota', model: 'Celica', type:'SUV', status:'Available' ,price: 35000 },
    { make: 'Ford', model: 'Mondeo',type:'Sedan', status:'Sold Out' , price: 32000 },
    { make: 'Porsche', model: 'Boxter',type:'SUV', status:'Available' , price: 72000 },
    { make: 'Ford', model: 'Mondeo',type:'Sedan', status:'Sold Out' , price: 32000 },
    { make: 'Toyota', model: 'Celica', type:'SUV', status:'Available' ,price: 35000 },
    { make: 'Ford', model: 'Mondeo',type:'Sedan', status:'Sold Out' , price: 32000 },
    { make: 'Porsche', model: 'Boxter',type:'SUV', status:'Available' , price: 72000 },
    { make: 'Ford', model: 'Mondeo',type:'Sedan', status:'Sold Out' , price: 32000 },
    { make: 'Toyota', model: 'Celica', type:'SUV', status:'Available' ,price: 35000 },
    { make: 'Ford', model: 'Mondeo',type:'Sedan', status:'Sold Out' , price: 32000 },
    { make: 'Porsche', model: 'Boxter',type:'SUV', status:'Available' , price: 72000 },
    { make: 'Ford', model: 'Mondeo',type:'Sedan', status:'Sold Out' , price: 32000 },
  ];



  
}
