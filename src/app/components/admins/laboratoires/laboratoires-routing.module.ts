import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditlaboComponent } from './editlabo/editlabo.component';

const routes: Routes = [
  {path: 'admin/dashboard/laboratoires/edit', component: EditlaboComponent},
  {path: 'admin/dashboard/laboratoires/edit/:id', component: EditlaboComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LaboratoiresRoutingModule { }
