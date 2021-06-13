import { Component, ErrorHandler, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

import { ModalConfig } from 'app/shared/modal/modal.config';
import { ModalComponent } from 'app/shared/modal/modal.component';
import { User, UserPasswordUpdate } from 'app/core/model';
import { UserService } from '../user.service';
import { AuthService } from 'app/security/auth.service';
import { ToastService } from 'app/shared/toast/toast.service';

@Component({
  selector: 'app-user-password-change',
  templateUrl: './user-password-change.component.html',
  styleUrls: ['./user-password-change.component.css']
})
export class UserPasswordChangeComponent implements OnInit {

  @Input("user") user: User = new User();

  @ViewChild('modal') private modalComponent!: ModalComponent;

  @Output() updateUserList = new EventEmitter();

  enabled: boolean;

  private userPasswordUpdate = new UserPasswordUpdate()

  modalConfig : ModalConfig = {
    modalTitle: "Update password",
    dismissButtonLabel: "Close",
    confirmButtonLabel: "Save",
    shouldConfirm: () => true,
    shouldDismiss: () => true,
    onConfirm: async () => {
      return await this.updatePassword()
    },
    onDismiss:() => true,
    disableConfirmButton: () => false,
    disableDismissButton: () => false,
    hideConfirmButton: () => false,
    hideDismissButton: () => false,
  }
 
  constructor(
    private userService: UserService,
    private errorHandler: ErrorHandler,
    private toastService: ToastService,
    private authService: AuthService) {
  }

  ngOnInit(): void {
    if (this.authService.isUserAuthenticated(this.user.slot)) {
      this.enabled = false;
    } else {
      this.enabled = this.user.enabled
    }
  }

  async openModal() {
    return await this.modalComponent.open()
  }

  async updatePassword() {
    await this.userService.updatePassword(this.user.slot, this.userPasswordUpdate).then(()=>{
      this.toastService.showSuccess('User password updated.');
    }).catch((err)=>{
      this.errorHandler.handleError(err);
    })
    this.updateUserList.emit();
    //TODO FIX ME await this.authService.login(this.user.userName, this.userPasswordUpdate.password)
    return await true
  }


}
