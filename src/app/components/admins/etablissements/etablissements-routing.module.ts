import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddetablissementComponent } from './addetablissement/addetablissement.component';
import { EditetablissementComponent } from './editetablissement/editetablissement.component';
import { ListetablissementComponent } from './listetablissement/listetablissement.component';

const routes: Routes = [
  {
    path: "addetablissement",
    component: AddetablissementComponent,
  },
  {
    path: "editetablissement",
    component: EditetablissementComponent,
  },
  {
    path: "listetablissement",
    component: ListetablissementComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EtablissementsRoutingModule { }
