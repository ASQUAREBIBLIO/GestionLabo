import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DotationsRoutingModule } from './dotations-routing.module';
import { UcaRechComponent } from './uca-rech/uca-rech.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UcaRechComponent
  ],
  imports: [
    CommonModule,
    DotationsRoutingModule,
    FormsModule
  ]
})
export class DotationsModule { }
