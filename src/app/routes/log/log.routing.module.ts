import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthGuard } from '../../security/auth.guard';
import { GameLogsPageComponent } from './game-logs-page/game-logs-page.component';
import { AdminLogsPageComponent } from './admin-logs-page/admin-logs-page.component';
import { GameLogsTailComponent } from './game-logs-tail/game-logs-tail.component';
import { RtvLogsTailComponent } from './rtv-logs-tail/rtv-logs-tail.component';

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
  },
  {
    path: 'game/tail',
    component: GameLogsTailComponent,
     canActivate: [AuthGuard],
  },
  {
    path: 'rtv',
    component: RtvLogsTailComponent,
     canActivate: [AuthGuard],
  }

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class LogRoutingModule { }
