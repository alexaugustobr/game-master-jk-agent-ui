import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthGuard } from '../../security/auth.guard';
import { MapListPageComponent } from './map-list-page/map-list-page.component';

const routes: Routes = [
  {
    path: '',
    component: MapListPageComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MapRoutingModule { }
