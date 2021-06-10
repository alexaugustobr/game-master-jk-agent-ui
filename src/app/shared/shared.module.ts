import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessageComponent } from './message/message.component';
import { ModalComponent } from './modal/modal.component';

import { NgbdModalFocusComponent } from './ngbd-modal-focus/ngbd-modal-focus.component';

import { PageHeaderComponent } from "./page-header/page-header.component";
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    NgbModalModule
  ],
  declarations: [
    MessageComponent, 
    ModalComponent,
    NgbdModalFocusComponent,
    PageHeaderComponent,
  ],
  exports: [
    MessageComponent, 
    ModalComponent,
    NgbdModalFocusComponent,
    PageHeaderComponent
  ]
})
export class SharedModule { }
