import { Component, OnInit } from '@angular/core';
import { GameMap } from 'app/core/model';
import { MapService } from '../map.service';

@Component({
  selector: 'app-map-list',
  templateUrl: './map-list.component.html',
  styleUrls: ['./map-list.component.css']
})
export class MapListComponent implements OnInit {

  maps : GameMap[] = []

  constructor(private mapService : MapService) { }

  ngOnInit(): void {
    this.loadMaps()
  }

  loadMaps() {
    this.mapService.listAll()
        .then(maps => this.maps = maps);
  }

}
