import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateListPageComponent } from './update-list-page/update-list-page.component';
import { UpdateRoutingModule } from './update-routing.module';



@NgModule({
  declarations: [UpdateListPageComponent],
  imports: [
    CommonModule, UpdateRoutingModule
  ]
})
export class UpdateModule { }
