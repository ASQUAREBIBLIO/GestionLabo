import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MembreListComponent } from './components/membre-list/membre-list.component';
import { MembreService } from './services/membre.service';
import { HttpClientModule } from '@angular/common/http';
import { EtablissementComponent } from './components/etablissement/etablissement.component';

@NgModule({
  declarations: [
    AppComponent,
    MembreListComponent,
    EtablissementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MembreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
