import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthGuard } from '../../security/auth.guard';

import { UserListPageComponent } from './user-list-page/user-list-page.component';

import { UserFormPageComponent } from "./user-form-page/user-form-page.component";

const routes: Routes = [
  {
    path: '',
    component: UserListPageComponent,
    // canActivate: [AuthGuard]
  },
//   {
//     path: 'nova',
//     component: PessoaCadastroComponent,
//     canActivate: [AuthGuard],
//     data: { roles: ['ROLE_CADASTRAR_PESSOA'] }
//   },
  {
    path: ':slot',
    component: UserFormPageComponent,
    // canActivate: [AuthGuard],
    // data: { roles: ['ROLE_CADASTRAR_PESSOA'] }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class UserRoutingModule { }
