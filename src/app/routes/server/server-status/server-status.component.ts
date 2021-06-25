import { Component, Input, OnInit } from '@angular/core';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-server-status',
  templateUrl: './server-status.component.html',
  styleUrls: ['./server-status.component.css']
})
export class ServerStatusComponent implements OnInit {

  @Input() server:any = {}

  constructor(private serverService: ServerService ) { }

  ngOnInit(): void {
    this.loadServer();
  }
  
  loadServer() {
    this.serverService.load().then((server)=> this.server = server);
  }

}
