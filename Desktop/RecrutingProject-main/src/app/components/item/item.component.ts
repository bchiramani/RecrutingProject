import { Component,EventEmitter,Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() cv : User ;
  @Output() itemEvent = new EventEmitter<User>();
  constructor() { }

  ngOnInit() {
  }
  sendToList() {
    this.itemEvent.emit(this.cv);
  }

}
