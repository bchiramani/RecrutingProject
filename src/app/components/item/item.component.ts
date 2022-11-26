import { Component,EventEmitter,Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() cv : User ;
  cvToDisplay:any
  //@Output() itemEvent = new EventEmitter<User>();
  monObservable$ : Observable<User>=new Observable<User>();
  constructor() { }

  ngOnInit() {
  }
  sendToList() {
    console.log("hello item component")
    //this.itemEvent.emit(this.cv);
    this.monObservable$ =new Observable( 
      (observer)=>{
         observer.next(this.cv)
      }
    );
    console.log(this.monObservable$)



  }

}
