import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-logs-page',
  templateUrl: './game-logs-page.component.html',
  styleUrls: ['./game-logs-page.component.css']
})
export class GameLogsPageComponent implements OnInit {

  links = [
    {
      description: "Logs",
      href: "/logs"
    },
    {
      description: "Game",
      href: "/logs/game"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
