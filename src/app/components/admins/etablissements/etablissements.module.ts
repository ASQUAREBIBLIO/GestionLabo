import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EtablissementsRoutingModule } from './etablissements-routing.module';
import { AddetablissementComponent } from './addetablissement/addetablissement.component';
import { EditetablissementComponent } from './editetablissement/editetablissement.component';
import { ListetablissementComponent } from './listetablissement/listetablissement.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddetablissementComponent,
    EditetablissementComponent,
    ListetablissementComponent
  ],
  imports: [
    CommonModule,
    EtablissementsRoutingModule,
    FormsModule
  ]
})
export class EtablissementsModule { }
