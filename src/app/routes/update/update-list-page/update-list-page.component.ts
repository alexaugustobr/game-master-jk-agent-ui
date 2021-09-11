import { Component, OnInit } from '@angular/core';
import { UpdateService } from '../update.service';

@Component({
  selector: 'app-update-list-page',
  templateUrl: './update-list-page.component.html',
  styleUrls: ['./update-list-page.component.css']
})
export class UpdateListPageComponent implements OnInit {
  
  links = [
    {
      description: "Updates",
      href: "/updates"
    }
  ]

  constructor() { }

  ngOnInit(): void {

  }

  

}
