import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms';

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

  user = new User();

  canNotEnable: boolean; 
  canNotChangePassword: boolean;

  constructor(
    private userService: UserService,
    private toastService: ToastService,
    private errorHandler: ErrorHandlerService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    const slot = this.route.snapshot.params['slot'];
    this.userService.findBySlot(slot)
    .then(user => {
      this.user = user;
      if (this.authService.isUserAuthenticated(this.user.slot)) {
        this.canNotEnable = true;
        this.canNotChangePassword = true;
      } else {
        this.canNotEnable = false;
        this.canNotChangePassword = false;
      }
    })
    .catch(erro => this.errorHandler.handle(erro));
    //TODO 404
  }

  save(form: FormControl): void {
    this.userService.update(this.user.slot, this.user)
      .then(()=>{
        this.router.navigate(['/users']);
        this.toastService.showSuccess('User updated.');
      }).catch((err)=>{
        this.errorHandler.handle(err)
      })
    
  }

}
