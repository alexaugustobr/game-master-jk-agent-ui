import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list-page',
  templateUrl: './user-list-page.component.html',
  styleUrls: ['./user-list-page.component.css']
})
export class UserListPageComponent implements OnInit {

  links = [
    {
      description: "Users",
      href: "/users"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
