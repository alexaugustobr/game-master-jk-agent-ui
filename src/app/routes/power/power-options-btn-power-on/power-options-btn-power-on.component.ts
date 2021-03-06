import { Component, OnInit, ViewChild } from '@angular/core';
import { ErrorHandlerService } from 'app/core/error-handler.service';
import { ModalComponent } from 'app/shared/modal/modal.component';
import { ModalConfig } from 'app/shared/modal/modal.config';
import { ToastService } from 'app/shared/toast/toast.service';
import { PowerService } from '../power.service';

@Component({
  selector: 'app-power-options-btn-power-on',
  templateUrl: './power-options-btn-power-on.component.html',
  styleUrls: ['./power-options-btn-power-on.component.css']
})
export class PowerOptionsBtnPowerOnComponent implements OnInit {
  
  @ViewChild('modal') private modalComponent!: ModalComponent;
  modalConfig : ModalConfig = {
    modalTitle: "Turn on the server",
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

  modalMessage = "Are you sure that you want turn on the server?"
  
  constructor(private errorHandlerService: ErrorHandlerService,
              private powerService: PowerService,
              private toastService: ToastService,) { }

  ngOnInit(): void {
  }

  async openModal() {
    return await this.modalComponent.open()
  }

  async onCommand() {
    await this.powerService.poweron()
        .then(()=> this.toastService.showSuccess("Server is turning on"))
        .catch((error)=> this.errorHandlerService.handle(error));
    return true
  }

}