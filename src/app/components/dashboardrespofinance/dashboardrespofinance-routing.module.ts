import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardfinanceComponent } from './dashboardfinance/dashboardfinance.component';
import { EditexpbesoinComponent } from '../dashboardrespomarche/editexpbesoin/editexpbesoin.component';

const routes: Routes = [
  {path: 'respofinance/dashboard', component: DashboardfinanceComponent},
  {
    path: 'expbesoin/edit/:id', 
    component: EditexpbesoinComponent 

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardrespofinanceRoutingModule { }
