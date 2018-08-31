import { AuthService } from './../../auth/services/auth.service';
import { DataService } from './../../shared/services/data.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // TODO : Inject data service
  // Get amount and display on the view
  amount$: Observable<number>;

  loggedIn$: Observable<boolean>;

  constructor(private dataService: DataService,
              private authService: AuthService, 
              private router: Router) {
      // this.amount = dataService.amount;
      this.amount$ = this.dataService.amount$;
      this.loggedIn$ = this.authService.loggedIn$;
   }

  ngOnInit() {
    // subscribe for changes, called when during next()/publish
    // amount is from amount$.next(amount)
    // this.dataService.amount$
    //                 .subscribe( amount => {
    //                     console.log('HEADER Amount subs', amount);
    //                     this.amount = amount;
    //                 });
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/');
  }

}
