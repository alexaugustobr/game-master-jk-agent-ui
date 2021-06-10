import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { PluginEloPageComponent } from "./plugin-elo-page/plugin-elo-page.component";
import { PluginRtvPageComponent } from "./plugin-rtv-page/plugin-rtv-page.component";
import { PluginRoutingModule } from './plugin-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    PluginRoutingModule
  ],
  declarations: [
    PluginEloPageComponent,
    PluginRtvPageComponent
  ],
  exports: [
    
  ]
})
export class PluginModule { }
