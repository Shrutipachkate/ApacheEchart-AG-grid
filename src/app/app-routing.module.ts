import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { chartsModule } from './charts/charts.module';

const routes: Routes = [

  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'charts',
  },
  {
    path: 'charts',
    loadChildren: () => chartsModule,
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
