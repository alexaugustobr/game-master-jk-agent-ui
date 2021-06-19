import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

import { UserService } from "./../user.service";

import { ErrorHandlerService } from './../../../core/error-handler.service';
import { User } from 'app/core/model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users : User[] = [];

  constructor(
    private userService: UserService,
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
