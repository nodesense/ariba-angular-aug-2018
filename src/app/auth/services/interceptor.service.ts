import { AuthService } from './auth.service';
import { Injectable, Injector } from '@angular/core';

// ng 4.3
import { HttpInterceptor,
        HttpRequest,
        HttpHandler, 
        HttpEvent } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor  {
 
  constructor(private authService: AuthService) {
    console.log('Interceptor created');
  }
  
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
     
    console.log ('Intercepter ', request.url, request.method);

    console.log('token ', this.authService.getToken());
    
    if (this.authService.loggedIn) {
      request = request.clone({
        setHeaders: {
         Authorization: `JWT ${this.authService.getToken()}`
        }
      });
    }
    
    return next.handle(request);
  }

}