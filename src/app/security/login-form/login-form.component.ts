import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { ErrorHandlerService } from './../../core/error-handler.service';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  constructor(
    private auth: AuthService,
    private errorHandler: ErrorHandlerService,
    private router: Router
  ) { }

  login(username: string, password: string) {
    this.auth.login(username, password)
    .pipe(first())
            .subscribe(
                data => {
                   this.router.navigate(['/overview'], { replaceUrl: true });
                },
                error => {
                  this.errorHandler.handle(error);
                });
  }

}
