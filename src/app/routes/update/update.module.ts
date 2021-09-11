import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateListPageComponent } from './update-list-page/update-list-page.component';
import { UpdateRoutingModule } from './update-routing.module';
import { UpdateNowComponent } from './update-now/update-now.component';
import { UpdateNowBtnComponent } from './update-now-btn/update-now-btn.component';
import { SharedModule } from 'app/shared/shared.module';



@NgModule({
  declarations: [UpdateListPageComponent, UpdateNowComponent, UpdateNowBtnComponent],
  imports: [
    CommonModule, UpdateRoutingModule, SharedModule
  ]
})
export class UpdateModule { }
