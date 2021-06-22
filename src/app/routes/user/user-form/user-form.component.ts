import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

import { User } from "app/core/model";

import { UserService } from "./../user.service";

import { ErrorHandlerService } from './../../../core/error-handler.service';
import { AuthService } from 'app/security/auth.service';
import { ToastService } from 'app/shared/toast/toast.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  private user = new User();
  userForm: FormGroup;
  canNotEnable: boolean; 
  canNotChangePassword: boolean;

  allUserTypes = [
    'SYSTEM',
    'RCON',
    'SMOD'
  ]

  allSlots = [
    0,1,2,3,4,5,6,7,8,9
  ]

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private toastService: ToastService,
    private errorHandler: ErrorHandlerService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.configureForm();
    this.loadUser()
        .then(() => {
          this.loadPermissions();
          this.userForm.patchValue(this.user);
          this.userForm.get('slot').setValue(this.user.slot);
          this.userForm.get('type').setValue(this.user.type);
        });
    //TODO 404
  }

  configureForm(){
    this.userForm = this.formBuilder.group(
      {
        username: [{
          value: null,
          disabled: true
        }],
        type: [{
          value: null,
          disabled: true
        }],
        slot: [{
          value: null,
          disabled: true
        }],
        permissions: [null, [
            Validators.required, 
            Validators.max(65535),
            Validators.min(0)
          ]
        ],
        enabled: [{
          value: null,
          disabled: true
        }],
        password: [
          {
            value: null,
            disabled: this.canNotChangePassword
          }, 
          [
            Validators.required, Validators.minLength(5), Validators.maxLength(10)
          ]
        ]
      }
    );
  }

  loadUser() {
    const slot = this.route.snapshot.params['slot'];
    return this.userService.findBySlot(slot)
               .then(user => {
                 this.user = user;
               })
               .catch(erro => this.errorHandler.handle(erro));
  }


  loadPermissions() {
    if (this.authService.isUserAuthenticated(this.user.slot)) {
      this.canNotEnable = true;
      this.canNotChangePassword = true;
    } else {
      this.canNotEnable = false;
      this.canNotChangePassword = false;
    }
  }

  save(): void {
    console.log(this.userForm);
    this.userService.update(this.user.slot, this.userForm.value)
      .then(()=>{
        this.router.navigate(['/users']);
        this.toastService.showSuccess('User updated.');
      }).catch((err)=>{
        this.errorHandler.handle(err)
      })
  }

}
