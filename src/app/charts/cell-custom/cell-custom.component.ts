import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-cell-custom',
  templateUrl: './cell-custom.component.html',
  styleUrls: ['./cell-custom.component.scss'],
})
export class CellCustomComponent implements OnInit, ICellRendererAngularComp {
  value: any;
  constructor() {}

  refresh(params: ICellRendererParams<any, any, any>): boolean {
    return false;
  }

  ngOnInit() {}
  agInit(params: any): boolean {
    this.value = params.value;
    return true;
  }
  getTypeClass(): string {
    return this.value === 'SUV'
      ? 'chip-green'
      : this.value === 'Sedan'
      ? 'chip-orange'
      : 'chip-normal';
  }
}
