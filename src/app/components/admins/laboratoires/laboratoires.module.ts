import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaboratoiresRoutingModule } from './laboratoires-routing.module';
import { AddlaboComponent } from './addlabo/addlabo.component';
import { EditlaboComponent } from './editlabo/editlabo.component';
import { ListlaboComponent } from './listlabo/listlabo.component';


@NgModule({
  declarations: [
    AddlaboComponent,
    EditlaboComponent,
    ListlaboComponent
  ],
  imports: [
    CommonModule,
    LaboratoiresRoutingModule
  ]
})
export class LaboratoiresModule { }
