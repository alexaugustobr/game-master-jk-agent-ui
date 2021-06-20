import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapListPageComponent } from './map-list-page/map-list-page.component';
import { MapRoutingModule } from './map-routing.module';
import { MapListComponent } from './map-list/map-list.component';
import { SharedModule } from 'app/shared/shared.module';
import { MapUploadComponent } from './map-upload/map-upload.component';



@NgModule({
  declarations: [MapListPageComponent, MapListComponent, MapUploadComponent],
  imports: [
    CommonModule, MapRoutingModule, SharedModule
  ]
})
export class MapModule { }
