import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardmembreRoutingModule } from './dashboardmembre-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardmembreRoutingModule
  ]
})
export class DashboardmembreModule { }
