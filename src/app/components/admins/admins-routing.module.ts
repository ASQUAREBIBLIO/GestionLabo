import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ListMembresComponent } from 'src/app/components/admins/membres/list-membres/list-membres.component';
import { EditetablissementComponent } from './etablissements/editetablissement/editetablissement.component';
import { ListlaboComponent } from './laboratoires/listlabo/listlabo.component';
import { EditlaboComponent } from './laboratoires/editlabo/editlabo.component';
import { AdminGuardService } from 'src/app/services/adminGuard/admin-guard.service';

const routes: Routes = [
  {path: 'admin/dashboard', component: AdminComponent, canActivate: [AdminGuardService]},
  {path: 'admin/dashboard/membres', component: ListMembresComponent},
  {path: 'admin/dashboard/laboratoires', component: ListlaboComponent},
  {path: 'admin/dashboard/e/edit/:id', component: EditetablissementComponent},
  {path: 'admin/dashboard/lab/:id', component: EditlaboComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminsRoutingModule { }
