import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { ServerActivitiesComponent } from "./server-activities/server-activities.component";
import { ServerConfigUploadDownloadComponent } from "./server-config-upload-download/server-config-upload-download.component";
import { ServerStatusComponent } from "./server-status/server-status.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    // ServerRoutingModule
  ],
  declarations: [
    ServerActivitiesComponent,
    ServerConfigUploadDownloadComponent,
    ServerStatusComponent
  ],
  exports: [
    ServerActivitiesComponent,
    ServerConfigUploadDownloadComponent,
    ServerStatusComponent
  ]
})
export class ServerModule { }
