import { Component, OnInit } from '@angular/core';

class Contact {
  name: string;
  phone: string;
  description: string;
  department: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  // model
  contact: Contact = new Contact();

  constructor() { 
    this.contact.name = 'Venkat';
    this.contact.department = 'care';
  }

  ngOnInit() {
  }

  save() {
    alert(JSON.stringify(this.contact));
  }

  reset() {
    this.contact = new Contact();
  }

}
