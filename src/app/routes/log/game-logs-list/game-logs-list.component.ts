import { Component, OnInit } from '@angular/core';
import { GameLogFile } from 'app/core/model';
import { LogService } from '../log.service';

@Component({
  selector: 'app-game-logs-list',
  templateUrl: './game-logs-list.component.html',
  styleUrls: ['./game-logs-list.component.css']
})
export class GameLogsListComponent implements OnInit {

  gameLogs: GameLogFile[] = [
    
  ]

  constructor(private logService: LogService) { }

  ngOnInit(): void {
    this.logService.listAllGameLogFiles()
        .then(gameLogs => this.gameLogs = gameLogs);
  }

}
