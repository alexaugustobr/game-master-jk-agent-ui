import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessageComponent } from './message/message.component';
import { ModalComponent } from './modal/modal.component';

import { NgbdModalFocusComponent } from './ngbd-modal-focus/ngbd-modal-focus.component';

import { PageHeaderComponent } from "./page-header/page-header.component";
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { ToastsContainer } from "./toast/toasts-container.component";
import { NgbdToastGlobal } from './toast/toast-global.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    NgbModalModule,
    NgbModule
  ],
  declarations: [
    MessageComponent, 
    ModalComponent,
    NgbdModalFocusComponent,
    PageHeaderComponent,
    ToastsContainer,
    NgbdToastGlobal
  ],
  exports: [
    MessageComponent, 
    ModalComponent,
    NgbdModalFocusComponent,
    PageHeaderComponent,
    ToastsContainer,
    NgbdToastGlobal
  ]
})
export class SharedModule { }
