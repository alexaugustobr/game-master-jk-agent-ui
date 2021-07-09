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
    this.url = `${environment.apiUrl}/api/v1/server-config`;
  }

    upload(file: File) {
      const formData = new FormData();
      formData.append('file', file, 'server.cfg')

      return this.http.put(this.url + '/upload', formData, {
          observe: 'events',
          reportProgress: true
        });
    }

    download() {
      return this.http.get(this.url + '/download', {
          responseType: 'blob' as 'json'
          // reportProgress
          // content-length
      });
    }

}
