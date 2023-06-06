import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MembresRoutingModule } from './membres-routing.module';
import { ListMembresComponent } from './list-membres/list-membres.component';


@NgModule({
  declarations: [
    ListMembresComponent
  ],
  imports: [
    CommonModule,
    MembresRoutingModule
  ]
})
export class MembresModule { }
