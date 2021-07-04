import { Component, OnInit } from '@angular/core';
import { GameFile } from 'app/core/model';
import { GameFileService } from '../game-file.service';

@Component({
  selector: 'app-game-file-list',
  templateUrl: './game-file-list.component.html',
  styleUrls: ['./game-file-list.component.css']
})
export class GameFileListComponent implements OnInit {

  gameFiles : GameFile[] = []

  constructor(private gameFileService : GameFileService) { }

  ngOnInit(): void {
    this.loadGameFiles()
  }

  loadGameFiles() {
    this.gameFileService.listAll()
        .then(gameFiles => this.gameFiles = gameFiles);
  }

}
