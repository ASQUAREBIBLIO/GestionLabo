import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MembreService } from './services/membre/membre.service';
import { HttpClientModule } from '@angular/common/http';
import { LaboratoireComponent } from './components/laboratoire/laboratoire.component';
import { EtablissementService } from './services/etablissement/etablissement.service';
import { LaboratoireService } from './services/laboratoire/laboratoire.service';
import { EtablissementComponent } from './components/etablissement/etablissement.component';
import { ProjetComponent } from './components/projet/projet.component';
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
import { AuthService } from './services/Auth/auth.service';
import { AdminGuardService } from './services/adminGuard/admin-guard.service';
import { MembreGuardService } from './services/membreGuard/membre-guard.service';
import { DirectorGuardService } from './services/direcorGuard/director-guard.service';
import { DirectorsModule } from './components/directors/directors.module';
import { DashboardmarcheComponent } from './components/dashboardmarche/dashboardmarche.component';




@NgModule({
  declarations: [
    AppComponent,
    EtablissementComponent,
    LaboratoireComponent,
    ProjetComponent,
    ResponsableComponent,
    ExpressionBesoinsComponent,
    LandingPageComponent,
    LoginComponent,
    DashboardmarcheComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AdminsModule,
    DashboardmembreModule,
    DirectorsModule,
    FormsModule
  ],
  providers: [
    MembreService,
    EtablissementService,
    LaboratoireService,
    ProjetService,
    UcaRechService,
    ResponsableService,
    AuthService,
    AdminGuardService,
    MembreGuardService,
    DirectorGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
