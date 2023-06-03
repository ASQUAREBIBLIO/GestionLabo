import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MembreListComponent } from './components/membre-list/membre-list.component';
import { MembreService } from './services/membre/membre.service';
import { HttpClientModule } from '@angular/common/http';
import { LaboratoireComponent } from './components/laboratoire/laboratoire.component';
import { EtablissementService } from './services/etablissement/etablissement.service';
import { LaboratoireService } from './services/laboratoire/laboratoire.service';
import { EtablissementComponent } from './components/etablissement/etablissement.component';
import { ProjetComponent } from './components/projet/projet.component';
import { UcaRechComponent } from './components/uca-rech/uca-rech.component';
import { ProjetService } from './services/projet/projet.service';
import { UcaRechService } from './services/ucaRech/uca-rech.service';
import { ResponsableComponent } from './responsable/responsable.component';
import { ResponsableService } from './responsable.service';

@NgModule({
  declarations: [
    AppComponent,
    MembreListComponent,
    EtablissementComponent,
    LaboratoireComponent,
    ProjetComponent,
    UcaRechComponent,
    ResponsableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    MembreService,
    EtablissementService,
    LaboratoireService,
    ProjetService,
    UcaRechService,
    ResponsableService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
