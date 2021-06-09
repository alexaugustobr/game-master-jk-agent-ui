import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-layout-header',
  templateUrl: './layout-header.component.html',
  styleUrls: ['./layout-header.component.css']
})
export class LayoutHeaderComponent implements OnInit {

  user = {
    name: "Rcon"
  }

  showUserDropdown = false;

  showMenuValue = false;

  @Output() toggleEvent = new EventEmitter();
  @Output() showMenuChange = new EventEmitter();

  @Input() 
  get showMenu() {
    return this.showMenuValue;
  }

  set showMenu(val:boolean) {
    this.showMenuValue = val;
    this.showMenuChange.emit(this.showMenuValue);

  }

  toggle() {
    this.showMenu = !this.showMenu;
    this.showMenuChange.emit(this.showMenuValue);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
