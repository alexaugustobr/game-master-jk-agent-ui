import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigListPageComponent } from './config-list-page/config-list-page.component';
import { ConfigRoutingModule } from './config-routing.module';



@NgModule({
  declarations: [ConfigListPageComponent],
  imports: [
    CommonModule, ConfigRoutingModule
  ]
})
export class ConfigModule { }
