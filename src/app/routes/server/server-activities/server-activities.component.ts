import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-activities',
  templateUrl: './server-activities.component.html',
  styleUrls: ['./server-activities.component.css']
})
export class ServerActivitiesComponent implements OnInit {
  
  @Input() activities:any = []

  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
