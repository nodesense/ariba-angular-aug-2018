import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item';

// service shall publish the changes
// component shall subscribe for changes, unsubscribe
import {Subject, BehaviorSubject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  items: CartItem[] = [];
  amount = 0;

  // $ is just convention, to denote observable
  items$: BehaviorSubject< CartItem[] > = new BehaviorSubject([]);

  // ensure that it calls subscribe as soon as
  // component subscribed
  amount$: BehaviorSubject< number > = new BehaviorSubject(0);

  constructor() { }

  addItem(item: CartItem) {
    this.items.push(item);
    this.amount += item.price * item.qty;
    console.log('Amount ', this.amount);

    // next is publishing items
    this.items$.next(this.items);
    this.amount$.next(this.amount);
  }

  empty() {
    // mutable array
    // this.items.splice(0, this.items.length); // update existing one

    this.items = []; // new array
    this.amount = 0;

    // next is publishing items
    this.items$.next(this.items);
    this.amount$.next(this.amount);
  }
}
