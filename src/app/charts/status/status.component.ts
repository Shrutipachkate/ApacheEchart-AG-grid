import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss'],
})
export class StatusComponent implements OnInit, ICellRendererAngularComp {
  value: any;
  status!: string;
  constructor() {}
  refresh(params: ICellRendererParams<any, any, any>): boolean {
    return false;
  }

  ngOnInit() {}
  agInit(params: any): boolean {
    this.status = params.value;
    return true;
  }

  getStatusClass(): string {
    return this.status === 'Available'
      ? 'status-icon-green'
      : 'status-icon-orange';
  }

  
}
