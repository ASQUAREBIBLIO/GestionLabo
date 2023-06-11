import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectorsRoutingModule } from './directors-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DirectorsRoutingModule
  ]
})
export class DirectorsModule { }
