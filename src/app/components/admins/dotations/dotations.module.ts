import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DotationsRoutingModule } from './dotations-routing.module';
import { UcaRechComponent } from './uca-rech/uca-rech.component';


@NgModule({
  declarations: [
    UcaRechComponent
  ],
  imports: [
    CommonModule,
    DotationsRoutingModule
  ]
})
export class DotationsModule { }
