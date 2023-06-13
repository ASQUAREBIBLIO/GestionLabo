import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddexpressionComponent } from './addexpression/addexpression.component';
import { EditexpressionComponent } from './editexpression/editexpression.component';
import { ListexpressionComponent } from './listexpression/listexpression.component';
import { MembreGuardService } from 'src/app/services/membreGuard/membre-guard.service';

const routes: Routes = [
  {
    path: "addexpression",
    component: AddexpressionComponent, canActivate: [MembreGuardService]
  },
  {
    path: "editexpression",
    component: EditexpressionComponent, canActivate: [MembreGuardService]
  },
  {
    path: "listexpression",
    component: ListexpressionComponent, canActivate: [MembreGuardService]
  },
  {
    path: 'expressionsbesoin/edit/:id', 
    component: EditexpressionComponent , canActivate: [MembreGuardService]

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpressionsbesoinRoutingModule { }
