import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthGuard } from '../../security/auth.guard';
import { PowerListPageComponent } from './power-list-page/power-list-page.component';

const routes: Routes = [
  {
    path: '',
    component: PowerListPageComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PowerRoutingModule { }
