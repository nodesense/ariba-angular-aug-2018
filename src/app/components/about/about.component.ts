import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  members: string[] = [
    'Memeber 1',
    'Member 2'
  ];

  showMembers = true;

  constructor() { }

  // view ready
  // view has been displayed in browser
  ngOnInit() {
  }

  empty() {
    this.members = [];
  }

  addMember(member: string) {
    this.members.push(member);
  }

}
