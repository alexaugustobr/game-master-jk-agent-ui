import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

import { UserService } from "./../user.service";

import { MessageService } from 'primeng/api';


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
    console.log('UserListComponent')
    this.userService.findAll()
                    .then(users => this.users = users)
  }

}
