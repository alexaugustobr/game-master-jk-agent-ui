import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { OverviewRoutingModule } from './overview-routes.module'

import { OverviewPageComponent } from './overview-page/overview-page.component';
import { ServerModule } from '../server/server.module';

// import { PlayerModule } from "../player/player.module";
// import { UserModule } from "../user/user.module";
// import { ServerModule } from "../server/server.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    SharedModule,
    OverviewRoutingModule,

    // PlayerModule,
    // UserModule,
    ServerModule,
  ],
  declarations: [
    OverviewPageComponent
  ],
  exports: []
})
export class OverviewModule { }
