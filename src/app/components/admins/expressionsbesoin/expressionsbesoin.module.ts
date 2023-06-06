import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExpressionsbesoinRoutingModule } from './expressionsbesoin-routing.module';
import { AddexpressionComponent } from './addexpression/addexpression.component';
import { EditexpressionComponent } from './editexpression/editexpression.component';
import { ListexpressionComponent } from './listexpression/listexpression.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AddexpressionComponent,
    EditexpressionComponent,
    ListexpressionComponent
  ],
  imports: [
    CommonModule,
    ExpressionsbesoinRoutingModule,
    RouterModule,
    FormsModule
  ]
})
export class ExpressionsbesoinModule { }
