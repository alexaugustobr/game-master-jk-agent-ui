import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { GameMap } from './../../core/model';

@Injectable()
export class MapService {

  url: string;

  constructor(private http: HttpClient) {
    this.url = `${environment.apiUrl}/api/v1/maps`;
  }

  listAll(): Promise<GameMap[]> {
    return this.http.get<GameMap[]>(this.url)
      .toPromise()
      .then(dataList => {
        return dataList.map(dataObj => Object.assign(new GameMap(), dataObj))
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
}
