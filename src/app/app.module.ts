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
import { ExpressionBesoinsComponent } from './components/expression-besoins/expression-besoins.component';

@NgModule({
  declarations: [
    AppComponent,
    MembreListComponent,
    EtablissementComponent,
    LaboratoireComponent,
    ProjetComponent,
    UcaRechComponent,
    ExpressionBesoinsComponent
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
    UcaRechService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
