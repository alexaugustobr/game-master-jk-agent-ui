import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ErrorHandlerService } from 'app/core/error-handler.service';
import { FileService } from 'app/core/file.service';
import { ModalComponent } from 'app/shared/modal/modal.component';
import { ModalConfig } from 'app/shared/modal/modal.config';
import { ToastService } from 'app/shared/toast/toast.service';
import { PluginService } from '../pluging.service';

@Component({
  selector: 'app-plugin-rtv-config',
  templateUrl: './plugin-rtv-config.component.html',
  styleUrls: ['./plugin-rtv-config.component.css']
})
export class PluginRtvConfigComponent implements OnInit {


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
    private pluginService: PluginService, 
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
    this.pluginService.download()
      .subscribe((res: any) => {
        this.fileService.saveFile(res, 'server.cfg');
      });
  }

  async onUpload() {
    this.isUploading = true;
    await this.pluginService.upload(this.file)
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

  async openUploadModal() {
    return await this.modalComponent.open()
  }

}
