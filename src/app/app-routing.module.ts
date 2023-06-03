import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MembreListComponent } from './membre-list/membre-list.component';

const routes: Routes = [
  {path: 'membres', component: MembreListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
