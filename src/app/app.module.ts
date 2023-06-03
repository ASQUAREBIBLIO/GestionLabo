import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MembreListComponent } from './components/membre-list/membre-list.component';
import { MembreService } from './services/membre/membre.service';
import { HttpClientModule } from '@angular/common/http';
import { EtablissementComponent } from './components/etablissement/etablissement.component';
import { LaboratoireComponent } from './components/laboratoire/laboratoire.component';
import { EtablissementService } from './services/etablissement/etablissement.service';
import { LaboratoireService } from './services/laboratoire/laboratoire.service';

@NgModule({
  declarations: [
    AppComponent,
    MembreListComponent,
    EtablissementComponent,
    LaboratoireComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    MembreService,
    EtablissementService,
    LaboratoireService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
