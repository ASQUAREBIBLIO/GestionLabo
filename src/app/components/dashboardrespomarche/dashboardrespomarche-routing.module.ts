import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardmarcheComponent } from './dashboardmarche/dashboardmarche.component';

const routes: Routes = [
  {path: 'respomarche/dashboard', component: DashboardmarcheComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardrespomarcheRoutingModule {

  

 }
