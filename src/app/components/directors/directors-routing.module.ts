import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DirectorGuardService } from 'src/app/services/direcorGuard/director-guard.service';

const routes: Routes = [
  {path: 'directeur/dashboard', component: DashboardComponent, canActivate: [DirectorGuardService]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectorsRoutingModule { }
