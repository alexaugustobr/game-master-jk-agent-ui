import { Component, Input, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';

import { ModalConfig } from 'app/shared/modal/modal.config';
import { ModalComponent } from 'app/shared/modal/modal.component';
import { User } from 'app/core/model';
import { UserService } from '../user.service';
import { AuthService } from 'app/security/auth.service';
import { Router } from '@angular/router';

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
    modalTitle: this.user ? "Disable user?" : "Enable user?",
    dismissButtonLabel: "No",
    confirmButtonLabel: "Yes",
    shouldConfirm: () => true,
    shouldDismiss: () => true,
    onConfirm: async () => {
      if (!this.user.enabled) {
        await this.userService.enable(this.user.slot)
      } else if (this.user.enabled) {
        await this.userService.disable(this.user.slot)
      }
      this.updateUserList.emit();
      return await true
    },
    onDismiss:() => true,
    disableConfirmButton: () => false,
    disableDismissButton: () => false,
    hideConfirmButton: () => false,
    hideDismissButton: () => false,
  }
 
  constructor(
    private router: Router,
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


}
