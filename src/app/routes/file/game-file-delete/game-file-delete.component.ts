import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ErrorHandlerService } from 'app/core/error-handler.service';
import { ModalComponent } from 'app/shared/modal/modal.component';
import { ModalConfig } from 'app/shared/modal/modal.config';
import { ToastService } from 'app/shared/toast/toast.service';
import { GameFileService } from '../game-file.service';

@Component({
  selector: 'app-game-file-delete',
  templateUrl: './game-file-delete.component.html',
  styleUrls: ['./game-file-delete.component.css']
})
export class GameFileDeleteComponent implements OnInit {

  @ViewChild('modal') private modalComponent!: ModalComponent;
  @Input() fileName;

  @Output() onGameFileDeleted = new EventEmitter<string>();

  modalConfig : ModalConfig = {
    modalTitle: "Delete File",
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
  
  modalMessage = 'Are you sure you want to delete the file?';

  constructor(
    private gameFileService: GameFileService, 
    private errorHandlerService: ErrorHandlerService,
    private toastService : ToastService) { }

  ngOnInit(): void {
  }
  
  async openModal() {
    return await this.modalComponent.open()
  }

  async delete() {
    await this.gameFileService.delete(this.fileName)
      .then(resp => {
        this.toastService.showSuccess('File deleted.');
        this.onGameFileDeleted.emit(this.fileName);
      })
      .catch((err)=>{
        this.errorHandlerService.handle(err);
      });
    return true
  }

}
