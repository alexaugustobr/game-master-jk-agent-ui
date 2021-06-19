import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthGuard } from '../../security/auth.guard';
import { UpdateListPageComponent } from './update-list-page/update-list-page.component';

const routes: Routes = [
  {
    path: '',
    component: UpdateListPageComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class UpdateRoutingModule { }
