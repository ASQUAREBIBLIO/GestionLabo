import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminsRoutingModule } from './admins-routing.module';
import { AdminComponent } from './admin/admin.component';
import { EtablissementsModule } from './etablissements/etablissements.module';
import { LaboratoiresModule } from './laboratoires/laboratoires.module';
import { MembresModule } from './membres/membres.module';
import { ExpressionsbesoinModule } from './expressionsbesoin/expressionsbesoin.module';
import { ProjetsModule } from './projets/projets.module';
import { ResponsablesModule } from './responsables/responsables.module';
import { FormsModule } from '@angular/forms';
import { DotationsModule } from './dotations/dotations.module';


@NgModule({
  declarations: [
    AdminComponent,
    
  ],
  imports: [
    CommonModule,
    AdminsRoutingModule,
    EtablissementsModule,
    LaboratoiresModule,
    MembresModule,
    ExpressionsbesoinModule,
    ProjetsModule,
    ResponsablesModule,
    FormsModule,
    DotationsModule

  ]
})
export class AdminsModule { }
