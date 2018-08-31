import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

 

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn = false;

  loggedIn$: BehaviorSubject<boolean>;
 
  storage: Storage = window.localStorage;


  constructor(private http: HttpClient) { 
     const token = this.storage.getItem('token');
     this.loggedIn = token ? true : false;

     this.loggedIn$ = new BehaviorSubject(this.loggedIn);
  }

  getToken() {
    return this.storage.getItem('token');
  }

  login(username: string, password: string) {
      let data = {
        username: username,
        password: password
      };

      this.http.post(`${environment.authEndPoint}`, data)
                .subscribe ( (userData: any) => {
                  console.log('Response ', userData);
                  this.storage.setItem('token', userData.token);
                  this.loggedIn = true;
                  this.loggedIn$.next(this.loggedIn);
                });
  }

  logout() {
    this.loggedIn = false;
    this.loggedIn$.next(this.loggedIn);
    this.storage.clear();
  }
}
