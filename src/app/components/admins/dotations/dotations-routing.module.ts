import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UcaRechComponent } from './uca-rech/uca-rech.component';

const routes: Routes = [
  {path: 'admin/dashboard/dotations', component: UcaRechComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DotationsRoutingModule { }
