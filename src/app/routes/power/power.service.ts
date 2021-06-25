import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PowerService {
  private url;

  constructor(private http: HttpClient) {
    this.url = `${environment.apiUrl}/api/v1/power-options`;
   }

    restart() {
        return this.http.put(this.url + '/restart', {}).toPromise();
    }

    poweroff() {
        return this.http.put(this.url + '/poweroff', {}).toPromise();
    }

    poweron() {
        return this.http.put(this.url + '/poweron', {}).toPromise();
    }
}