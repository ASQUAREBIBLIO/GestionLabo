import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpressionsbesoinRoutingModule } from './expressionsbesoin-routing.module';
import { AddexpressionComponent } from './addexpression/addexpression.component';
import { EditexpressionComponent } from './editexpression/editexpression.component';
import { DelexpressionComponent } from './delexpression/delexpression.component';
import { ListexpressionComponent } from './listexpression/listexpression.component';


@NgModule({
  declarations: [
    AddexpressionComponent,
    EditexpressionComponent,
    DelexpressionComponent,
    ListexpressionComponent
  ],
  imports: [
    CommonModule,
    ExpressionsbesoinRoutingModule
  ]
})
export class ExpressionsbesoinModule { }
