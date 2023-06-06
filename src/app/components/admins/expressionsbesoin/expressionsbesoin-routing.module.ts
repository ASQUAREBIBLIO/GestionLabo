import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddexpressionComponent } from './addexpression/addexpression.component';
import { EditexpressionComponent } from './editexpression/editexpression.component';
import { ListexpressionComponent } from './listexpression/listexpression.component';

const routes: Routes = [
  {
    path: "addexpression",
    component: AddexpressionComponent,
  },
  {
    path: "editexpression",
    component: EditexpressionComponent,
  },
  {
    path: "listexpression",
    component: ListexpressionComponent,
  },
  {
    path: 'expressionsbesoin/edit/:id', 
    component: EditexpressionComponent 

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpressionsbesoinRoutingModule { }
