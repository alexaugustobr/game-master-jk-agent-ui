import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { LoginFormComponent } from './login-form/login-form.component';

import { CleanLayoutComponent } from "./../clean-layout.component";

const routes: Routes = [
  {
    path: 'login',
    component: CleanLayoutComponent, 
    children: [
      {
        path: '',
        component: LoginFormComponent
      },
      
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class SecurityRoutingModule { }
