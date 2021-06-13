import { Component, Input, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';

import { ModalConfig } from 'app/shared/modal/modal.config';
import { ModalComponent } from 'app/shared/modal/modal.component';
import { User } from 'app/core/model';
import { UserService } from '../user.service';
import { AuthService } from 'app/security/auth.service';

import { ToastService } from 'app/shared/toast/toast.service';
import { ErrorHandlerService } from 'app/core/error-handler.service';

@Component({
  selector: 'app-user-enable-disable',
  templateUrl: './user-enable-disable.component.html',
  styleUrls: ['./user-enable-disable.component.css']
})
export class UserEnableDisableComponent implements OnInit {

  @Input("user") user: User = new User();

  @ViewChild('modal') private modalComponent!: ModalComponent;

  userEnabled: boolean;
  actionDisabled: boolean;

  @Output() updateUserList = new EventEmitter();

  modalConfig : ModalConfig = {
    modalTitle: this.user.enabled ? "Enable user?" : "Disable user?",
    dismissButtonLabel: "No",
    confirmButtonLabel: "Yes",
    shouldConfirm: () => true,
    shouldDismiss: () => true,
    onConfirm: async () => {
      return await this.enableDisableUser()
    },
    onDismiss:() => true,
    disableConfirmButton: () => false,
    disableDismissButton: () => false,
    hideConfirmButton: () => false,
    hideDismissButton: () => false,
  }
 
  constructor(
    private toastService: ToastService,
    private errorHandlerService: ErrorHandlerService,
    private userService: UserService,
    private authService: AuthService) {
  }

  ngOnInit(): void {
    if (this.authService.isUserAuthenticated(this.user.slot)) {
      this.userEnabled = true;
      this.actionDisabled = true;
    } else {
      this.userEnabled = this.user.enabled;
      this.actionDisabled = false;
    }

    this
  }

  async openModal() {
    return await this.modalComponent.open()
  }

  async enableDisableUser() {
    if (!this.user.enabled) {
      await this.userService.enable(this.user.slot).then(()=>{
        this.toastService.showSuccess('User enabled.');
      }).catch((err)=>{
        this.errorHandlerService.handle(err);
      })
    } else if (this.user.enabled) {
      await this.userService.disable(this.user.slot).then(()=>{
        this.toastService.showWarning('User disabled.');
      }).catch((err)=>{
        this.errorHandlerService.handle(err);
      })
    }
    this.updateUserList.emit();
    return await true 
  }

}
