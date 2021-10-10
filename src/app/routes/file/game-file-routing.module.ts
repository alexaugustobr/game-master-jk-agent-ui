import { NgModule } from '@angular/core';
import { AuthGuard } from '../../security/auth.guard';
import { Routes, RouterModule } from '@angular/router';
import { GameFileListPageComponent } from 'app/routes/file/game-file-list-page/game-file-list-page.component';

const routes: Routes = [
  {
    path: '',
    component: GameFileListPageComponent,
    canActivate: [AuthGuard],
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class GameFileRoutingModule { }
