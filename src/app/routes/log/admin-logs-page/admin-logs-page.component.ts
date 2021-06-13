import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-logs-page',
  templateUrl: './admin-logs-page.component.html',
  styleUrls: ['./admin-logs-page.component.css']
})
export class AdminLogsPageComponent implements OnInit {

  links = [
    {
      description: "Logs",
      href: "/logs"
    },
    {
      description: "Admin",
      href: "/logs/admin"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
