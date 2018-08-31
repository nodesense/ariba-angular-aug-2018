import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private authService: AuthService, 
              private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.username = 'admin';
    this.password = 'admin';
    
    this.authService.login(this.username, this.password)
    //TODO
  }

}
