import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { GameLogFile } from './../../core/model';

@Injectable()
export class LogService {

  url: string;

  constructor(private http: HttpClient) {
    this.url = `${environment.apiUrl}/api/v1/logs`;
  }

  listAllGameLogFiles(): Promise<GameLogFile[]> {
    return this.http.get<GameLogFile[]>(this.url + "/games")
      .toPromise()
      .then(dataList => {
        return dataList.map(dataObj => Object.assign(new GameLogFile(), dataObj))
      })
  }

}
