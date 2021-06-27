import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ErrorHandlerService } from 'app/core/error-handler.service';
import { ModalComponent } from 'app/shared/modal/modal.component';
import { ModalConfig } from 'app/shared/modal/modal.config';
import { ToastService } from 'app/shared/toast/toast.service';
import { MapService } from '../map.service';

@Component({
  selector: 'app-map-delete',
  templateUrl: './map-delete.component.html',
  styleUrls: ['./map-delete.component.css']
})
export class MapDeleteComponent implements OnInit {
  
  @ViewChild('modal') private modalComponent!: ModalComponent;
  @ViewChild('file') private fileInput: ElementRef;
  @Input() mapName;

  @Output() onMapDeleted = new EventEmitter<string>();

  modalConfig : ModalConfig = {
    modalTitle: "Delete Map",
    dismissButtonLabel: "No",
    confirmButtonLabel: "Yes",
    shouldConfirm: () => true,
    shouldDismiss: () => true,
    onConfirm: async () => {
      return await this.delete()
    },
    onDismiss:() => true,
    disableConfirmButton: () => false,
    disableDismissButton: () => false,
    hideConfirmButton: () => false,
    hideDismissButton: () => false,
  }
  
  modalMessage = 'Are you sure you want to delete the map?';

  constructor(
    private mapService: MapService, 
    private errorHandlerService: ErrorHandlerService,
    private toastService : ToastService) { }

  ngOnInit(): void {
  }
  
  async openModal() {
    return await this.modalComponent.open()
  }

  async delete() {
    await this.mapService.delete(this.mapName)
      .then(resp => {
        this.toastService.showSuccess('Map deleted.');
        this.onMapDeleted.emit(this.mapName);
      })
      .catch((err)=>{
        this.errorHandlerService.handle(err);
      });
    return true
  }
}
