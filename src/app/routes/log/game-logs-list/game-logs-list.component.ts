import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-logs-list',
  templateUrl: './game-logs-list.component.html',
  styleUrls: ['./game-logs-list.component.css']
})
export class GameLogsListComponent implements OnInit {

  gameLogs: any = [
    {
      date: "2020-01-01 10:13",
      name: "log.txt"
    },
    {
      date: "2020-01-01 10:13",
      name: "log-292929.zip"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
