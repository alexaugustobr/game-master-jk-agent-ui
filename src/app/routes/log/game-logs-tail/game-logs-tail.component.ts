import { Component, OnInit } from '@angular/core';
import { GameFileService } from 'app/routes/file/game-file.service';
import { LogService } from '../log.service';

@Component({
  selector: 'app-game-logs-tail',
  templateUrl: './game-logs-tail.component.html',
  styleUrls: ['./game-logs-tail.component.css']
})
export class GameLogsTailComponent implements OnInit {

  links = [
    {
      description: "Logs",
      href: "/logs"
    },
    {
      description: "Game",
      href: "/logs/game"
    },
    {
      description: "Tail",
      href: "/logs/game/tail"
    }
  ]

  tailMessages:any = [
    
  ]

  constructor(
      private logService: LogService
  ) { }

  ngOnInit(): void {
      this.loadData()
  }

  refresh() {   
    this.loadData();
  }

  loadData() {
    this.tailMessages = [];
    this.logService.tailLog()
    .then((tailMessages) => {
        this.tailMessages = tailMessages;
      }
    );
  }

}
