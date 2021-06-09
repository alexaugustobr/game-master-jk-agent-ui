import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  template: `<div class="wrapper" [ngClass]="wrapperClasses">
             <app-layout-header [(showMenu)]=showMenu></app-layout-header>
             <app-layout-menu (mouseenter)="hovering(true)"  (mouseleave)="hovering(false)"></app-layout-menu>
             <div class="main-panel">
                 <div class="content">
                     <div class="page-inner">
                         <router-outlet></router-outlet>
                     </div>
                 </div>
             </div>
             </div>`,
  styles: []
})
export class AppLayoutComponent {

    constructor(private router: Router) { }

  isLoginRoute() {
    return this.router.url != '/login';
  }

  title = 'chz-jk-admin-ui-angular';

  showUserDropdown = false;

  showMenuValue = false;

  hoverValue = false;

  wrapperClasses:string[] = []

  @Output() showMenuChange = new EventEmitter();
  @Output() hoverValueChange = new EventEmitter();

  @Input() 
  get showMenu() {
    return this.showMenuValue;
  }

  set showMenu(val:boolean) {
    this.showMenuValue = val;
    this.showMenuChange.emit(this.showMenuValue);
    this.toggle();
  }

  @Input() 
  get hover() {
    return this.hoverValue;
  }

  set hover(val:boolean) {
    this.hoverValue = val;
    this.hoverValueChange.emit(this.hoverValue);
    this.toggle();
  }

  hovering(val:boolean) {
    this.hoverValue = val;
    this.hoverValueChange.emit(this.hoverValue);
    this.toggle();
  }

  toggle() {
    this.wrapperClasses = []
    if (this.showMenuValue) {
      this.wrapperClasses.push("sidebar_minimize")
    }
    if (this.hoverValue) {
      this.wrapperClasses.push("sidebar_minimize_hover")
    }
  }


}
