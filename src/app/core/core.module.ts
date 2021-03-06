import { Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

import { AuthService } from '../security/auth.service';
import { ErrorHandlerService } from './error-handler.service';
import { ForbiddenComponent } from './forbidden.component';
import { PageNotFoundComponent } from './page-not-found';


import { LayoutHeaderComponent } from './layout-header/layout-header.component'
import { LayoutMenuComponent } from './layout-menu/layout-menu.component'

import { UserService } from "./../routes/user/user.service";
import { ToastService } from 'app/shared/toast/toast.service';
import { FormsModule } from '@angular/forms';
import { LogService } from 'app/routes/log/log.service';
import { FileService } from './file.service';
import { MapService } from 'app/routes/map/map.service';
import { PowerService } from 'app/routes/power/power.service';
import { ServerService } from 'app/routes/server/server.service';
import { GameFileService } from 'app/routes/file/game-file.service';

registerLocaleData(localePt);

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [
    PageNotFoundComponent,
    LayoutHeaderComponent,
    LayoutMenuComponent,
    ForbiddenComponent,
    
  ],
  exports: [
    PageNotFoundComponent,
    LayoutHeaderComponent,
    LayoutMenuComponent,
    ForbiddenComponent
  ],
  providers: [
    UserService,
    LogService,
    ErrorHandlerService,
    AuthService,
    ToastService,
    Title,
    FileService,
    MapService,
    PowerService,
    ServerService,
    GameFileService,
    { provide: LOCALE_ID, useValue: 'en-US' }
  ]
})
export class CoreModule { }
