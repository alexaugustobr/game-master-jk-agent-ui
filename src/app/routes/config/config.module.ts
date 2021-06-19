import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigListPageComponent } from './config-list-page/config-list-page.component';
import { ConfigRoutingModule } from './config-routing.module';
import { SharedModule } from 'app/shared/shared.module';
import { ConfigListComponent } from './config-list/config-list.component';
import { ConfigFileUploadDownloadComponent } from './config-file-upload-download/config-file-upload-download.component';



@NgModule({
  declarations: [ConfigListPageComponent, ConfigListComponent, ConfigFileUploadDownloadComponent],
  imports: [
    CommonModule, ConfigRoutingModule, SharedModule
  ]
})
export class ConfigModule { }
