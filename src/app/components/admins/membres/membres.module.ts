import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MembresRoutingModule } from './membres-routing.module';
import { ListMembresComponent } from './list-membres/list-membres.component';
import { EditMembreComponent } from './edit-membre/edit-membre.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListMembresComponent,
    EditMembreComponent
  ],
  imports: [
    CommonModule,
    MembresRoutingModule,
    FormsModule
  ]
})
export class MembresModule { }
