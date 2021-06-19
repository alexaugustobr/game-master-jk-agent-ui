import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthGuard } from '../../security/auth.guard';
import { ConfigListPageComponent } from './config-list-page/config-list-page.component';

const routes: Routes = [
  {
    path: '',
    component: ConfigListPageComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ConfigRoutingModule { }
