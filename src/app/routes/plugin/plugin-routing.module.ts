import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthGuard } from '../../security/auth.guard';

import { PluginEloPageComponent } from "./plugin-elo-page/plugin-elo-page.component";
import { PluginRtvPageComponent } from "./plugin-rtv-page/plugin-rtv-page.component";

const routes: Routes = [
  {
    path: 'elo',
    component: PluginEloPageComponent,
     canActivate: [AuthGuard]
  },
  {
    path: 'rtv',
    component: PluginRtvPageComponent,
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
export class PluginRoutingModule { }
