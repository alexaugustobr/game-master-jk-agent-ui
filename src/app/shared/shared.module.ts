import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MessageComponent } from './message/message.component';
import { ModalComponent } from './modal/modal.component';

import { NgbdModalFocusComponent } from './ngbd-modal-focus/ngbd-modal-focus.component';

import { PageHeaderComponent } from "./page-header/page-header.component";
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { ToastsContainer } from "./toast/toasts-container.component";
import { NgbdToastGlobal } from './toast/toast-global.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MinDirective } from './validators/min.directive';
import { MaxDirective } from './validators/max.directive';

@NgModule({
  imports: [
    CommonModule,
    NgbModalModule,
    NgbModule,
    FormsModule
  ],
  declarations: [
    MessageComponent, 
    ModalComponent,
    NgbdModalFocusComponent,
    PageHeaderComponent,
    ToastsContainer,
    NgbdToastGlobal,
    MinDirective,
    MaxDirective,
  ],
  exports: [
    MessageComponent, 
    ModalComponent,
    NgbdModalFocusComponent,
    PageHeaderComponent,
    ToastsContainer,
    NgbdToastGlobal,
    MinDirective,
    MaxDirective
  ]
})
export class SharedModule { }
