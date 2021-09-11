import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {
  private url;

  constructor(private http: HttpClient) {
    this.url = `${environment.apiUrl}/api/v1/update`;
   }

    updateNow() {
        return this.http.put(this.url + '/now', {}).toPromise();
    }
}