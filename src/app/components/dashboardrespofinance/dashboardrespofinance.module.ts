import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardrespofinanceRoutingModule } from './dashboardrespofinance-routing.module';
import { DashboardfinanceComponent } from './dashboardfinance/dashboardfinance.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashboardfinanceComponent
  ],
  imports: [
    CommonModule,
    DashboardrespofinanceRoutingModule,
    FormsModule
  ]
})
export class DashboardrespofinanceModule { }
