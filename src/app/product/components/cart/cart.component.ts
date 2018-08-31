import { DataService } from './../../../shared/services/data.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartItem } from '../../../shared/models/cart-item';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {

  amount: number;

   //items: CartItem[] = [];

  // async pipe
  items$: Observable<CartItem[]>;

  subscription: Subscription;

  constructor(public dataService: DataService) { 
    // this.amount = dataService.amount;
    // this.items = dataService.items;
    this.items$ = this.dataService.items$;
  }

  ngOnInit() {
    this.subscription = this.dataService.amount$
        .subscribe( amount => {
            console.log('Cart Amount subs', amount);
            this.amount = amount;
        });
  }

  // called when component destroyed
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  empty() {
    this.dataService.empty();
  }

}
