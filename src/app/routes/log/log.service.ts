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
      });
  }

  download(gameLogFile: GameLogFile) {
    return this.http.get(this.url + "/games/" + gameLogFile.name, 
    { responseType: 'blob' as 'json'
      // reportProgress
      // content-length
    });
  }

  handleFile(res: any, fileName: string) {
    const file = new Blob([res], {
      type: res.type
    });

    // IE
    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveOrOpenBlob(file);
      return;
    }

    const blob = window.URL.createObjectURL(file);

    const link = document.createElement('a');
    link.href = blob;
    link.download = fileName;

    // link.click();
    link.dispatchEvent(new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      view: window
    }));

    setTimeout(() => { // firefox
      window.URL.revokeObjectURL(blob);
      link.remove();
    }, 100);
  }

}
