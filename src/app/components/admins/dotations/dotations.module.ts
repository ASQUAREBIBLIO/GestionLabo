import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DotationsRoutingModule } from './dotations-routing.module';
import { FormsModule } from '@angular/forms';
import { UcaRechComponent } from './uca-rech/uca-rech.component';


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
