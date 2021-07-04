import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { GameFile } from './../../core/model';

@Injectable()
export class GameFileService {

  url: string;

  constructor(private http: HttpClient) {
    this.url = `${environment.apiUrl}/api/v1/game-files`;
  }

  listAll(): Promise<GameFile[]> {
    return this.http.get<GameFile[]>(this.url)
      .toPromise()
      .then(dataList => {
        return dataList.map(dataObj => Object.assign(new GameFile(), dataObj))
      });
  }

  upload(file: File) {
    const formData = new FormData();
    formData.append('file', file, file.name);

    return this.http.post(this.url, formData, {
        observe: 'events',
        reportProgress: true
      });
  }

  delete(GameFileName: string) {
    return this.http.delete(this.url + '/' + GameFileName)
      .toPromise()
  }
}
