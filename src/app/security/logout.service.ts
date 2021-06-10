import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../environments/environment';
import { AuthService } from './auth.service';

@Injectable()
export class LogoutService {

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) {
    
  }

  logout() {
    this.auth.logout()
  }

}
