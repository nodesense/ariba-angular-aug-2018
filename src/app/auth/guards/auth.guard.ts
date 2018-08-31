import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import {  CanActivate, 
          ActivatedRouteSnapshot,
          RouterStateSnapshot,
          Router} from '@angular/router';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService,
              private router: Router) {
                
              }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
      console.log('Auth Guard ', state.url);

      if (this.authService.loggedIn) {
        return true;
      }

      this.router.navigateByUrl('/auth/login');

      return false;

      // return false; // proceed with navigation
      // return false; // navigation stopped

  }
}
