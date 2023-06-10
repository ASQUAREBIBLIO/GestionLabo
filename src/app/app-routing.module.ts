import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MembreListComponent } from './components/membre-list/membre-list.component';
import { EtablissementComponent } from './components/etablissement/etablissement.component';
import { LaboratoireComponent } from './components/laboratoire/laboratoire.component';
import { ResponsableComponent } from './components/responsable/responsable.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginComponent } from './components/login/login.component';
//import { AdminComponent } from './components/admin/admin.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'membres', component: MembreListComponent},
  {path: 'etablissements', component: EtablissementComponent},
  {path: 'laboratoires', component: LaboratoireComponent},
  {path: 'responsables', component: ResponsableComponent},
  {path: 'login', component: LoginComponent},

  //{path: 'admin/dashboard', component: AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
