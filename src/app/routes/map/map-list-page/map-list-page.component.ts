import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-list-page',
  templateUrl: './map-list-page.component.html',
  styleUrls: ['./map-list-page.component.css']
})
export class MapListPageComponent implements OnInit {

  links = [
    {
      description: "Maps",
      href: "/maps"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
