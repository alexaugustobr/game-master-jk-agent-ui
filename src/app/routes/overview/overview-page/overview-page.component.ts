import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-overview-page',
  templateUrl: './overview-page.component.html',
  styleUrls: ['./overview-page.component.css']
})
export class OverviewPageComponent implements OnInit {


  server = {
    name: "DN",
    address: "127.0.0.1:29070",
    playerCount: "3",
    maxPlayerCount: "32",
    mapName: "mb2_coruscant_chase",
    version: "Movie Battles II V1.7.2.1"
  }
  
  links = [
    {
      description: "Overview",
      href: "/"
    }
  ]

  players = [
    {
      name: "Bob",
      number: 0
    },
    {
      name: "Daniel",
      number: 1
    }
  ]

  activities = [
    {
      date: new Date(),
      description: "Player Bob joined"
      
    },
    {
      date: new Date(),
      description: "Player Daniel joined"
      
    }
  ]

  constructor() { }

  ngOnInit(): void {
    
  }

}
