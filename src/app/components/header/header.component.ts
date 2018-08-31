import { DataService } from './../../shared/services/data.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // TODO : Inject data service
  // Get amount and display on the view
  amount$: Observable<number>;

  constructor(private dataService: DataService) {
      // this.amount = dataService.amount;
      this.amount$ = this.dataService.amount$;
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

}
