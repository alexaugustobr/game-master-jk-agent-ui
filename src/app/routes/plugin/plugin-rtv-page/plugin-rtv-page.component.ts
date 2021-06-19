import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plugin-rtv-page',
  templateUrl: './plugin-rtv-page.component.html',
  styleUrls: ['./plugin-rtv-page.component.css']
})
export class PluginRtvPageComponent implements OnInit {

  links = [
    {
      description: "RTV",
      href: "/plugins/rtv"
    }
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
