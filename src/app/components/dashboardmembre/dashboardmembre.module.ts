import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardmembreRoutingModule } from './dashboardmembre-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardmembreRoutingModule,
    FormsModule 
  ]
})
export class DashboardmembreModule { }
