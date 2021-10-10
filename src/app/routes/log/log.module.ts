import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { LogRoutingModule } from './log.routing.module';
import { GameLogsPageComponent } from './game-logs-page/game-logs-page.component';
import { AdminLogsPageComponent } from './admin-logs-page/admin-logs-page.component';
import { GameLogsListComponent } from './game-logs-list/game-logs-list.component';
import { CommonModule } from "@angular/common";
import { GameLogsTailComponent } from './game-logs-tail/game-logs-tail.component';
import { RtvLogsTailComponent } from './rtv-logs-tail/rtv-logs-tail.component';


@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    LogRoutingModule,
    CommonModule
  ],
  declarations: [
    GameLogsPageComponent,
    AdminLogsPageComponent,
    GameLogsListComponent,
    GameLogsTailComponent,
    RtvLogsTailComponent
  ],
  exports: [
    
  ]
})
export class LogModule { }
