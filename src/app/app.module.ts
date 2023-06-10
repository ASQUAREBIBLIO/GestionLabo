import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
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
import { ResponsableComponent } from './components/responsable/responsable.component';
import { ExpressionBesoinsComponent } from './components/expression-besoins/expression-besoins.component';
import { ResponsableService } from './services/responsable/responsable.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminsModule } from './components/admins/admins.module';
import { DashboardmembreModule } from './components/dashboardmembre/dashboardmembre.module';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginComponent } from './components/login/login.component';




@NgModule({
  declarations: [
    AppComponent,
    MembreListComponent,
    EtablissementComponent,
    LaboratoireComponent,
    ProjetComponent,
    UcaRechComponent,
    ResponsableComponent,
    ExpressionBesoinsComponent,
    LandingPageComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AdminsModule,
    DashboardmembreModule,
    FormsModule
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
