import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { User, UserPasswordUpdate } from './../../core/model';

export class UserFilter {
  name: string;
  page = 0;
  itensPerPage = 5;
}

@Injectable()
export class UserService {

  url: string;

  constructor(private http: HttpClient) {
    this.url = `${environment.apiUrl}/api/v1/users`;
  }

  filter(filter: UserFilter): Promise<any> {
    let params = new HttpParams()
      .set('page', filter.page.toString())
      .set('size', filter.itensPerPage.toString());

    if (filter.name) {
      params = params.set('name', filter.name);
    }

    return this.http.get(`${this.url}`, { params })
      .toPromise()
      .then(response => {
        const users = response['content'];

        const resultado = {
          users,
          total: response['totalElements']
        };

        return resultado;
      })
  }

  findAll(): Promise<User[]> {
    return this.http.get<User[]>(this.url)
      .toPromise()
      .then(dataList => {
        return dataList.map(dataObj => Object.assign(new User(), dataObj))
      })
  }

  enable(slot: number) {
    return this.http.put(`${this.url}/${slot}/enable`, {})
      .toPromise();
  }

  disable(slot: number) {
    return this.http.delete(`${this.url}/${slot}/enable`)
      .toPromise();
  }

  add(user: User): Promise<User> {
    return this.http.post<User>(this.url, user)
      .toPromise();
  }

  update(slot : number, user: User): Promise<User> {
    return this.http.put<User>(`${this.url}/${slot}`, user)
      .toPromise();
  }

  updatePassword(slot: number, user: UserPasswordUpdate): Promise<Response> {
    return this.http.put<Response>(`${this.url}/${slot}/password`, user)
      .toPromise();
  }

  findBySlot(slot: number): Promise<User> {
    return this.http.get<User>(`${this.url}/${slot}`)
      .toPromise();
  }

}
