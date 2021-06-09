import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { UserFormComponent } from "./user-form/user-form.component";
import { UserListComponent } from "./user-list/user-list.component";

import { UserListPageComponent } from './user-list-page/user-list-page.component';
import { UserFormPageComponent } from './user-form-page/user-form-page.component';

import { UserRoutingModule } from './user-roting-module'


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    UserRoutingModule
  ],
  declarations: [
    UserFormComponent,
    UserListComponent,
    UserListPageComponent,
    UserFormPageComponent
  ],
  exports: [
    UserFormComponent,
    UserListComponent,
    UserListPageComponent,
    UserFormPageComponent
  ]
})
export class UserModule { }
