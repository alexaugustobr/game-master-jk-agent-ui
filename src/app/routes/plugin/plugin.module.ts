import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { PluginEloPageComponent } from "./plugin-elo-page/plugin-elo-page.component";
import { PluginRtvPageComponent } from "./plugin-rtv-page/plugin-rtv-page.component";
import { PluginRoutingModule } from './plugin-routing.module';
import { PluginRtvConfigComponent } from './plugin-rtv-config/plugin-rtv-config.component';
import { PluginRtvMapListComponent } from './plugin-rtv-map-list/plugin-rtv-map-list.component';
import { PluginRtvPowerOptionsComponent } from './plugin-rtv-power-options/plugin-rtv-power-options.component';
import { PluginRtvPowerRestartComponent } from './plugin-rtv-power-restart/plugin-rtv-power-restart.component';

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
    PluginRtvPageComponent,
    PluginRtvConfigComponent,
    PluginRtvMapListComponent,
    PluginRtvPowerOptionsComponent,
    PluginRtvPowerRestartComponent
  ],
  exports: [
    
  ]
})
export class PluginModule { }
