import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthGuard } from '../../security/auth.guard';
import { PlayerListPageComponent } from './player-list-page/player-list-page.component';

const routes: Routes = [
  {
    path: '',
    component: PlayerListPageComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PlayerRoutingModule { }
