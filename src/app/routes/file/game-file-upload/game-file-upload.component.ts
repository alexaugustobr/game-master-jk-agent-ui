import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ErrorHandlerService } from 'app/core/error-handler.service';
import { ModalComponent } from 'app/shared/modal/modal.component';
import { ModalConfig } from 'app/shared/modal/modal.config';
import { ToastService } from 'app/shared/toast/toast.service';
import { GameFileService } from '../game-file.service';

@Component({
  selector: 'app-game-file-upload',
  templateUrl: './game-file-upload.component.html',
  styleUrls: ['./game-file-upload.component.css']
})
export class GameFileUploadComponent implements OnInit {

  @ViewChild('modal') private modalComponent!: ModalComponent;
  @ViewChild('file') private fileInput: ElementRef;

  modalConfig : ModalConfig = {
    modalTitle: "Upload Map",
    dismissButtonLabel: "Cancel",
    confirmButtonLabel: "Upload",
    shouldConfirm: () => true,
    shouldDismiss: () => true,
    onConfirm: async () => {
      return await this.onUpload()
    },
    onDismiss:() => true,
    disableConfirmButton: () => !this.file || this.isUploading,
    disableDismissButton: () => false,
    hideConfirmButton: () => false,
    hideDismissButton: () => false,
  }
  
  file: File;
  progress = 0;
  isUploading = false;

  constructor(
    private gameFileService : GameFileService,
    private toastService: ToastService,
    private errorHandlerService: ErrorHandlerService
    ) { }

  ngOnInit(): void {
  }

  async openGameFileUploadModal() {
    return await this.modalComponent.open()
  }

  handleFileInput(files: FileList) {
    this.file = files.item(0);
  }

  async onUpload() {
    this.isUploading = true;
    await this.gameFileService.upload(this.file)
    .toPromise()
    .then(resp => this.toastService.showSuccess('Upload completed.'))
    .catch((err)=>{
      this.errorHandlerService.handle(err);
    })
    this.file = null;
    this.fileInput.nativeElement.value = "";
    this.isUploading = false;
    return true
  }

}
