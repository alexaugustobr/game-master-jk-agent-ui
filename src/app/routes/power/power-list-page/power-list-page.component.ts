import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-power-list-page',
  templateUrl: './power-list-page.component.html',
  styleUrls: ['./power-list-page.component.css']
})
export class PowerListPageComponent implements OnInit {

  links = [
    {
      description: "Power Options",
      href: "/powerlogs"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
