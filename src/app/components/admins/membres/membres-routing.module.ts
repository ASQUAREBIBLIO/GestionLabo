import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditMembreComponent } from './edit-membre/edit-membre.component';

const routes: Routes = [
  {path: 'admin/dashboard/membres/edit', component: EditMembreComponent},
  {path: 'admin/dashboard/membres/edit/:id', component: EditMembreComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MembresRoutingModule { }
