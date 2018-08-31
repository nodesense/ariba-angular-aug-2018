import { Component,
          OnInit,
          Input,

          Output,
          EventEmitter
        } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  // Input ==> property binding

  // <app-footer company="CartApp"

  @Input()
  company: string;

  @Input()
  today: Date;

  @Input()
  address: any;

  highlightNow = false;

  // Child to parent using (event binding)
  @Output()
  contactEvent: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log(typeof this.today);
  }

  contact() {
    // TODO: child to parent communication
    // triggering event
    // passign random string are event parameter
    // msg is received as $event
    // publish
    this.contactEvent.emit(Math.random().toString());
  }

}
