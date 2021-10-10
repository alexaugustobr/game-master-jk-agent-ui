import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { PluginEloPageComponent } from "./plugin-elo-page/plugin-elo-page.component";
import { PluginRtvPageComponent } from "./plugin-rtv-page/plugin-rtv-page.component";
import { PluginRoutingModule } from './plugin-routing.module';
import { PluginRtvConfigComponent } from './plugin-rtv-config/plugin-rtv-config.component';
import { PluginRtvMapListComponent } from './plugin-rtv-map-list/plugin-rtv-map-list.component';
import { PluginRtvPowerRestartComponent } from './plugin-rtv-power-restart/plugin-rtv-power-restart.component';
import { PickListModule } from 'primeng/picklist';
import { PluginRtvOptionsComponent } from './plugin-rtv-options/plugin-rtv-options.component';
import { PluginRtvMapListUploadComponent } from './plugin-rtv-map-list-upload/plugin-rtv-map-list-upload.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    PluginRoutingModule,
    PickListModule
  ],
  declarations: [
    PluginEloPageComponent,
    PluginRtvPageComponent,
    PluginRtvConfigComponent,
    PluginRtvMapListComponent,
    PluginRtvOptionsComponent,
    PluginRtvPowerRestartComponent,
    PluginRtvMapListUploadComponent
  ],
  exports: [
    
  ]
})
export class PluginModule { }
