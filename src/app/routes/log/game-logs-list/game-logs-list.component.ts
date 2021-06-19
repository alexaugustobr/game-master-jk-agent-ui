import { Component, OnInit } from '@angular/core';
import { FileService } from 'app/core/file.service';
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

  constructor(
      private logService: LogService, 
      private fileService: FileService
    ) { }

  ngOnInit(): void {
    this.logService.listAllGameLogFiles()
        .then(gameLogs => this.gameLogs = gameLogs)
        
  }

  download(file: GameLogFile) {
    this.logService.download(file)
      .subscribe((res: any) => {
        this.fileService.saveFile(res, file.name);
      });
  }

}
