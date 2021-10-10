import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class PluginService {

  url: string;

  constructor(private http: HttpClient) {
    this.url = `${environment.apiUrl}/api/plugins/rtv`;
  }

    upload(file: File) {
      const formData = new FormData();
      formData.append('file', file, 'rtvrtm.cfg')

      return this.http.post(this.url + '/rtvrtm', formData, {
          observe: 'events',
          reportProgress: true
        });
    }

    downloadConfig() {
      return this.http.get(this.url + '/rtvrtm.cfg', {
          responseType: 'blob' as 'json'
          // reportProgress
          // content-length
      });
    }

    downloadMap1() {
      return this.http.get(this.url + '/maps.txt', {
          responseType: 'blob' as 'json'
          // reportProgress
          // content-length
      });
    }

    downloadMap2() {
      return this.http.get(this.url + '/secondary_maps.txt', {
          responseType: 'blob' as 'json'
          // reportProgress
          // content-length
      });
    }

    restart() {
      return this.http.put(this.url + '/restart', {}).toPromise();
  }

}
