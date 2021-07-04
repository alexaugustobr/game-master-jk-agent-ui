import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'app/shared/shared.module';
import { GameFileRoutingModule } from './game-file-routing.module';
import { GameFileListPageComponent } from './game-file-list-page/game-file-list-page.component';
import { GameFileListComponent } from './game-file-list/game-file-list.component';
import { GameFileDeleteComponent } from './game-file-delete/game-file-delete.component';
import { GameFileUploadComponent } from './game-file-upload/game-file-upload.component';


@NgModule({
  declarations: [GameFileListComponent, GameFileListPageComponent, GameFileDeleteComponent, GameFileUploadComponent],
  imports: [
    CommonModule, SharedModule, GameFileRoutingModule
  ]
})
export class GameFileModule { }
