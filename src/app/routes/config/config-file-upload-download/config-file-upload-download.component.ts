import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ErrorHandlerService } from 'app/core/error-handler.service';
import { FileService } from 'app/core/file.service';
import { ModalComponent } from 'app/shared/modal/modal.component';
import { ModalConfig } from 'app/shared/modal/modal.config';
import { ToastService } from 'app/shared/toast/toast.service';
import { ConfigService } from '../config.server';

@Component({
  selector: 'app-config-file-upload-download',
  templateUrl: './config-file-upload-download.component.html',
  styleUrls: ['./config-file-upload-download.component.css']
})
export class ConfigFileUploadDownloadComponent implements OnInit {

  @ViewChild('modal') private modalComponent!: ModalComponent;
  @ViewChild('file') private fileInput: ElementRef;


  modalConfig : ModalConfig = {
    modalTitle: "Upload Config",
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
    private configServer: ConfigService, 
    private fileService: FileService,
    private toastService: ToastService,
    private errorHandlerService: ErrorHandlerService
    ) { }
    

  ngOnInit(): void {
    
  }

  handleFileInput(files: FileList) {
    this.file = files.item(0);
  }

  download() {
    this.configServer.download()
      .subscribe((res: any) => {
        this.fileService.saveFile(res, 'server.cfg');
      });
  }

  async onUpload() {
    this.isUploading = true;
    await this.configServer.upload(this.file)
    .toPromise()
    .catch((err)=>{
      this.errorHandlerService.handle(err);
    })
    this.file = null;
    this.fileInput.nativeElement.value = "";
    this.isUploading = false;
    this.toastService.showSuccess('Upload completed.');
    return true
  }

  async openUploadModal() {
    return await this.modalComponent.open()
  }
}
