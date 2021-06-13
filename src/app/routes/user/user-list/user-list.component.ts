import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

import { UserService } from "./../user.service";

import { MessageService } from 'primeng/api';

import { ModalConfig } from 'app/shared/modal/modal.config';
import { ModalComponent } from 'app/shared/modal/modal.component';

import { ErrorHandlerService } from './../../../core/error-handler.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users : any = [];

  constructor(
    private userService: UserService,
    private messageService: MessageService,
    private errorHandler: ErrorHandlerService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title
  ) { }

  ngOnInit(): void {
    this.updateUserList()
  }

  updateUserList() {
    this.userService.findAll()
        .then(users => this.users = users)
  }

}
