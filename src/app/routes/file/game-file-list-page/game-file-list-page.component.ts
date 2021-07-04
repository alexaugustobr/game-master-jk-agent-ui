import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-file-list-page',
  templateUrl: './game-file-list-page.component.html',
  styleUrls: ['./game-file-list-page.component.css']
})
export class GameFileListPageComponent implements OnInit {

  links = [
    {
      description: "Game Files",
      href: "/game-files"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
