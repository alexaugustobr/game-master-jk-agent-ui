import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapListPageComponent } from './map-list-page/map-list-page.component';
import { MapRoutingModule } from './map-routing.module';



@NgModule({
  declarations: [MapListPageComponent],
  imports: [
    CommonModule, MapRoutingModule
  ]
})
export class MapModule { }
