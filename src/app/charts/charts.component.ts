import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent {

  constructor(private router: Router) {}
  navigateToLineChart() {
    this.router.navigate(['/charts/line-chart']);
  }
}
