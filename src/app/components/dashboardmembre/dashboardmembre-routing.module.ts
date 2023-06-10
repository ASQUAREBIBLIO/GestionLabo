import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MembreGuardService } from 'src/app/services/membreGuard/membre-guard.service';

const routes: Routes = [
  {path: 'membre/dashboard', component: DashboardComponent, canActivate: [MembreGuardService]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardmembreRoutingModule { }
