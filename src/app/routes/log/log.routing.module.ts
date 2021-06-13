import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthGuard } from '../../security/auth.guard';
import { GameLogsPageComponent } from './game-logs-page/game-logs-page.component';
import { AdminLogsPageComponent } from './admin-logs-page/admin-logs-page.component';

const routes: Routes = [
  {
    path: 'game',
    component: GameLogsPageComponent,
     canActivate: [AuthGuard],
    // data: { roles: ['ROLE_CADASTRAR_PESSOA'] }
  },
  {
    path: 'admin',
    component: AdminLogsPageComponent,
     canActivate: [AuthGuard],
    // data: { roles: ['ROLE_CADASTRAR_PESSOA'] }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class LogRoutingModule { }
