import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PowerRoutingModule } from './power-routing.module';
import { PowerListPageComponent } from './power-list-page/power-list-page.component';
import { PowerOptionsComponent } from './power-options/power-options.component';
import { SharedModule } from 'app/shared/shared.module';
import { PowerOptionsBtnPowerOffComponent } from './power-options-btn-power-off/power-options-btn-power-off.component';
import { PowerOptionsBtnPowerOnComponent } from './power-options-btn-power-on/power-options-btn-power-on.component';
import { PowerOptionsBtnPowerRestartComponent } from './power-options-btn-power-restart/power-options-btn-power-restart.component';

@NgModule({
  declarations: [PowerListPageComponent, 
    PowerOptionsComponent,
    PowerOptionsBtnPowerOffComponent,
    PowerOptionsBtnPowerOnComponent,
    PowerOptionsBtnPowerRestartComponent],
  imports: [
    CommonModule, PowerRoutingModule, SharedModule
  ]
})
export class PowerModule { }
