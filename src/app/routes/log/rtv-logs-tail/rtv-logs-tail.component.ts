import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';

@Component({
  selector: 'app-rtv-logs-tail',
  templateUrl: './rtv-logs-tail.component.html',
  styleUrls: ['./rtv-logs-tail.component.css']
})
export class RtvLogsTailComponent implements OnInit {

  links = [
    {
      description: "Logs",
      href: "/logs"
    },
    {
      description: "RTV",
      href: "/logs/rtv"
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
    this.logService.tailRtvLog()
    .then((tailMessages) => {
        this.tailMessages = tailMessages;
      }
    );
  }


}
