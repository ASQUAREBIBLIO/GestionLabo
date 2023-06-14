import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardmarcheComponent } from './dashboardmarche/dashboardmarche.component';
import { EditexpbesoinComponent } from './editexpbesoin/editexpbesoin.component';

const routes: Routes = [
  {path: 'respomarche/dashboard', component: DashboardmarcheComponent},
  {
    path: 'expbesoin/edit/:id', 
    component: EditexpbesoinComponent 

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardrespomarcheRoutingModule {

  

 }
