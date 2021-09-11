import { Component, OnInit, ViewChild } from '@angular/core';
import { ErrorHandlerService } from 'app/core/error-handler.service';
import { ModalComponent } from 'app/shared/modal/modal.component';
import { ModalConfig } from 'app/shared/modal/modal.config';
import { ToastService } from 'app/shared/toast/toast.service';
import { UpdateService } from '../update.service';

@Component({
  selector: 'app-update-now-btn',
  templateUrl: './update-now-btn.component.html',
  styleUrls: ['./update-now-btn.component.css']
})
export class UpdateNowBtnComponent implements OnInit {
  
  @ViewChild('modal') private modalComponent!: ModalComponent;
  modalConfig : ModalConfig = {
    modalTitle: "Update and restart the server",
    dismissButtonLabel: "No",
    confirmButtonLabel: "Yes",
    shouldConfirm: () => true,
    shouldDismiss: () => true,
    onConfirm: async () => {
      return await this.onCommand()
    },
    onDismiss:() => true,
    disableConfirmButton: () => false,
    disableDismissButton: () => false,
    hideConfirmButton: () => false,
    hideDismissButton: () => false,
  }

  modalMessage = "Are you sure that you want update and restart the server?"
  
  constructor(private errorHandlerService: ErrorHandlerService,
              private updateService: UpdateService,
              private toastService: ToastService,) { }

  ngOnInit(): void {
  }

  async openModal() {
    return await this.modalComponent.open()
  }

  async onCommand() {
    await this.updateService.updateNow()
        .then(()=> this.toastService.showSuccess("Server is updating"))
        .catch((error)=> this.errorHandlerService.handle(error));
    return true
  }

}