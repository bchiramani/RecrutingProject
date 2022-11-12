import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() listCvs:Array<User>
  cvToDisplay: User;
  @Output() listEvent = new EventEmitter<User>();
  constructor() { }

  ngOnInit(): void {
  }
  receiveFromItem(item: User) {
    this.cvToDisplay=item;
  }
  sendToCv() {
    this.listEvent.emit(this.cvToDisplay);
  }

}
