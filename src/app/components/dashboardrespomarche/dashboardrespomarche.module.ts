import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardrespomarcheRoutingModule } from './dashboardrespomarche-routing.module';
import { DashboardmarcheComponent } from './dashboardmarche/dashboardmarche.component';
import { FormsModule } from '@angular/forms';
import { EditexpbesoinComponent } from './editexpbesoin/editexpbesoin.component';


@NgModule({
  declarations: [
  
    EditexpbesoinComponent
  ],
  imports: [
    CommonModule,
    DashboardrespomarcheRoutingModule,
    FormsModule
  ]
})
export class DashboardrespomarcheModule { }
