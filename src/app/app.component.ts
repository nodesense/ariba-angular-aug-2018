import { Component } from "@angular/core";

@Component({
  // meta data, custom html tag
  // <app-root></app-root>
  selector: "app-root",
  // view
  templateUrl: "app.component.html",

  styleUrls: [
    // scopped style,
    // limited to app.component view
    "app.component.css"
  ]
})
export class AppComponent {
  // data model
  appTitle = 'Product App';
  today: Date = new Date();
  address: any = {
    state: 'KA',
    city: 'BLR'
  };

  msg: string;
}
