import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ErrorHandlerService } from 'app/core/error-handler.service';
import { FileService } from 'app/core/file.service';
import { ModalComponent } from '../modal/modal.component';
import { ModalConfig } from '../modal/modal.config';
import { ToastService } from '../toast/toast.service';

@Component({
  selector: 'app-upload-download-file',
  templateUrl: './upload-download-file.component.html',
  styleUrls: ['./upload-download-file.component.css']
})
export class UploadDownloadFileComponent implements OnInit {

  @Input() descriptionText = '';
  @Input() warningText = '';
  @Input() downloadUrl = '';
  @Input() uploadUrl = '';
  @Input() fileName = '';
  @Input() fileExtension = '.cfg';
  @Input() modalTitle = '';
  @Input() cardTitle = '';

  @ViewChild('modal') private modalComponent!: ModalComponent;
  @ViewChild('file') private fileInput: ElementRef;

  modalConfig : ModalConfig;

  file: File;
  progress = 0;
  isUploading = false;

  constructor(
    private fileService: FileService,
    private toastService: ToastService,
    private errorHandlerService: ErrorHandlerService
  ) { }
    

  ngOnInit(): void {
    this.modalConfig = {
      modalTitle: this.modalTitle,
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
  }

  handleFileInput(files: FileList) {
    this.file = files.item(0);
  }

  download() {
    this.fileService.download(this.downloadUrl)
      .subscribe((res: any) => {
        this.fileService.saveFile(res, this.fileName);
      });
  }

  async onUpload() {
    this.isUploading = true;
    await this.fileService.upload(this.file, this.uploadUrl)
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
