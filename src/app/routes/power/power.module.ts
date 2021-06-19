import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PowerRoutingModule } from './power-routing.module';
import { PowerListPageComponent } from './power-list-page/power-list-page.component';
import { PowerOptionsComponent } from './power-options/power-options.component';
import { SharedModule } from 'app/shared/shared.module';


@NgModule({
  declarations: [PowerListPageComponent, PowerOptionsComponent],
  imports: [
    CommonModule, PowerRoutingModule, SharedModule
  ]
})
export class PowerModule { }
