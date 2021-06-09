import { ModalConfig } from 'app/shared/modal/modal.config';
import { ModalComponent } from 'app/shared/modal/modal.component';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-server-config-upload-download',
  templateUrl: './server-config-upload-download.component.html',
  styleUrls: ['./server-config-upload-download.component.css']
})
export class ServerConfigUploadDownloadComponent implements OnInit {

  @ViewChild('modal') private modalComponent!: ModalComponent

  modalConfig : ModalConfig = {
    modalTitle: "Upload config",
    dismissButtonLabel: "Close",
    confirmButtonLabel: "Save",
    shouldConfirm: () => true,
    shouldDismiss: () => true,
    onConfirm: this.onModalConfirm,
    onDismiss:() => true,
    disableConfirmButton: () => false,
    disableDismissButton: () => false,
    hideConfirmButton: () => false,
    hideDismissButton: () => false,
  }
  
  async openModal() {
    return await this.modalComponent.open()
  }

  async onModalConfirm() {
    return await true
  }

  constructor() {
    
   }

  ngOnInit(): void {

  }

}
