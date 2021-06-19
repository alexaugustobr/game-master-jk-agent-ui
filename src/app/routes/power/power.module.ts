import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PowerRoutingModule } from './power-routing.module';
import { PowerListPageComponent } from './power-list-page/power-list-page.component';


@NgModule({
  declarations: [PowerListPageComponent],
  imports: [
    CommonModule, PowerRoutingModule
  ]
})
export class PowerModule { }
