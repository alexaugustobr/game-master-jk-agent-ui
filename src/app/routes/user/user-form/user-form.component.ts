import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms';

import { User } from "app/core/model";

import { UserService } from "./../user.service";

import { MessageService } from 'primeng/api';

import { ErrorHandlerService } from './../../../core/error-handler.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  user = new User();

  constructor(
    private userService: UserService,
    private messageService: MessageService,
    private errorHandler: ErrorHandlerService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title
  ) { }

  ngOnInit(): void {
    const slot = this.route.snapshot.params['slot'];
    this.userService.findBySlot(slot)
    .then(user => {
      this.user = user;
    })
    .catch(erro => this.errorHandler.handle(erro));
    //TODO 404
  }

  save(form: FormControl): void {
    this.userService.update(this.user)
      .then(response => {
        this.messageService.add({ severity: 'success', detail: 'User updated!' });
        this.router.navigate(['/users']);
      })
      .catch(erro => this.errorHandler.handle(erro));
    
  }

}
