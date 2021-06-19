import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-config-list-page',
  templateUrl: './config-list-page.component.html',
  styleUrls: ['./config-list-page.component.css']
})
export class ConfigListPageComponent implements OnInit {


  links = [
    {
      description: "Config",
      href: "/config"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
