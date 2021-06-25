import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { GameServer } from './../../core/model';

export class UserFilter {
  name: string;
  page = 0;
  itensPerPage = 5;
}

@Injectable()
export class ServerService {

  url: string;

  constructor(private http: HttpClient) {
    this.url = `${environment.apiUrl}/api/v1/server`;
  }

  load(): Promise<GameServer[]> {
    return this.http.get<GameServer[]>(this.url)
      .toPromise()
      .then(dataObj => Object.assign(new GameServer(), dataObj));
  }

}
