import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-form-page',
  templateUrl: './user-form-page.component.html',
  styleUrls: ['./user-form-page.component.css']
})
export class UserFormPageComponent implements OnInit {

  links = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private title: Title
  ) { }

  ngOnInit(): void {
    const slot = this.route.snapshot.params['slot'];
    //this.title.setTitle('Edit user');

    this.links = [
      {
        description: "Users",
        href: "/users"
      },
      {
        description: "Edit",
        href: "/users/" + slot
      }
    ]
  }

}
