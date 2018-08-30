import { Component, OnInit,
         ViewChild,
         ElementRef
} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  // <input  #memberElement />

  @ViewChild('memberElement')
  memberInput: ElementRef;  // refer to DOM element

  members: string[] = [
    'Memeber 1',
    'Member 2'
  ];

  showMembers = true;

  constructor() { }

  // view ready
  // view has been displayed in browser
  ngOnInit() {
    // nativeElement is DOM in browser
    // in ios/andorid, it represent native view
    this.memberInput.nativeElement.value = 'enter name';
    this.memberInput.nativeElement.focus(); // set cursor
  }

  empty() {
    this.members = [];
  }

  addMember(member: string) {
    this.members.push(member);
  }

}
