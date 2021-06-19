import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapListPageComponent } from './map-list-page/map-list-page.component';
import { MapRoutingModule } from './map-routing.module';
import { MapListComponent } from './map-list/map-list.component';
import { SharedModule } from 'app/shared/shared.module';



@NgModule({
  declarations: [MapListPageComponent, MapListComponent],
  imports: [
    CommonModule, MapRoutingModule, SharedModule
  ]
})
export class MapModule { }
