import { Component, OnInit, ViewChild } from '@angular/core';
import { ErrorHandlerService } from 'app/core/error-handler.service';
import { ModalComponent } from 'app/shared/modal/modal.component';
import { ModalConfig } from 'app/shared/modal/modal.config';
import { ToastService } from 'app/shared/toast/toast.service';
import { PluginService } from '../pluging.service';

@Component({
  selector: 'app-plugin-rtv-power-restart',
  templateUrl: './plugin-rtv-power-restart.component.html',
  styleUrls: ['./plugin-rtv-power-restart.component.css']
})
export class PluginRtvPowerRestartComponent implements OnInit {

  @ViewChild('modal') private modalComponent!: ModalComponent;
  modalConfig : ModalConfig = {
    modalTitle: "Restart RTV",
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

  modalMessage = "Are you sure that you want restart RTV?"
  
  constructor(private errorHandlerService: ErrorHandlerService,
              private pluginService: PluginService,
              private toastService: ToastService) { }

  ngOnInit(): void {
  }

  async openModal() {
    return await this.modalComponent.open()
  }

  async onCommand() {
    await this.pluginService.restart()
        .then(()=> this.toastService.showSuccess("RTV is restarting"))
        .catch((error)=> this.errorHandlerService.handle(error));
    return true
  }

}
