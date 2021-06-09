import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthGuard } from '../../security/auth.guard';

import { OverviewPageComponent } from './overview-page/overview-page.component';

const routes: Routes = [
  {
    path: '',
    component: OverviewPageComponent,
    // canActivate: [AuthGuard]
  }
//   {
//     path: 'nova',
//     component: PessoaCadastroComponent,
//     canActivate: [AuthGuard],
//     data: { roles: ['ROLE_CADASTRAR_PESSOA'] }
//   },
//   {
//     path: ':codigo',
//     component: PessoaCadastroComponent,
//     canActivate: [AuthGuard],
//     data: { roles: ['ROLE_CADASTRAR_PESSOA'] }
//   }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class OverviewRoutingModule { }
