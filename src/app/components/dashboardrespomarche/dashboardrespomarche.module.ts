import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardrespomarcheRoutingModule } from './dashboardrespomarche-routing.module';
import { DashboardmarcheComponent } from './dashboardmarche/dashboardmarche.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    DashboardrespomarcheRoutingModule,
    FormsModule
  ]
})
export class DashboardrespomarcheModule { }
