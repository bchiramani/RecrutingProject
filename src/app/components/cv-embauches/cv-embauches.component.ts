import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { CvEmbauchesService } from 'src/app/services/cv-embauches.service';

@Component({
  selector: 'app-cv-embauches',
  templateUrl: './cv-embauches.component.html',
  styleUrls: ['./cv-embauches.component.css']
})
export class CvEmbauchesComponent implements OnInit {
  public cvsEmbauches:Array<User> ;
  cvToDisplay:User;
  constructor(private cvEmbauchesService:CvEmbauchesService) { }
  
  ngOnInit() {
    this.cvsEmbauches=this.cvEmbauchesService.getAllCvsEmbauches()
  }
  receiveFromList(item: User) {
    this.cvToDisplay=item;
  }


}
