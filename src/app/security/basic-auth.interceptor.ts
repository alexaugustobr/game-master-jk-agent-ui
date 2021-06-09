import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { AuthService } from '../security/auth.service';

export class NotAuthenticatedError {}

@Injectable()
export class BasicAuthInterceptor implements HttpInterceptor {

  constructor(private authenticationService: AuthService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add header with basic auth credentials if user is logged in and request is to the api url
        console.log("intercept")

        if (!request.url.includes('/auth')) {
            const user = this.authenticationService.userValue;
            const isLoggedIn = user && user.authdata;
            const isApiUrl = request.url.startsWith(environment.apiUrl);

            console.log(user)
            console.log(isLoggedIn)
            console.log(isApiUrl)

            request = request.clone({
                setHeaders: { 
                    Authorization: `Basic ${user.authdata}`
                }
            });

            return next.handle(request);
        }
        

        return next.handle(request);
    }
}
