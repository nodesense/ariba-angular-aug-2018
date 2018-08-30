import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // type inference
  counter = 0; // number
  price = 99.99; // number
  
  likes: number;

  today: Date = new Date();
  title = 'Home';

  constructor() { }

  ngOnInit() {
   }

   increment() {
     this.counter++;
     console.trace("increment");
   }

  //  getRandom() {
  //    let r = Math.random();
  //    console.log('gtRandom called ', r);
  //    return 100;
  //  }

}
