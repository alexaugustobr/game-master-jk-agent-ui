import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { PlayerListComponent } from "./player-list/player-list.component";
import { PlayerListPageComponent } from './player-list-page/player-list-page.component';
import { PlayerRoutingModule } from './player-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    PlayerRoutingModule
    // ServerRoutingModule
  ],
  declarations: [
    PlayerListComponent,
    PlayerListPageComponent
  ],
  exports: [
    
  ]
})
export class PlayerModule { }
