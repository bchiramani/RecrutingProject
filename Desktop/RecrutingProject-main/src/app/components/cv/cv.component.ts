import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { CvService } from 'src/app/services/cv.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  public cvs:Array<User> ;
  cvToDisplay:User
  constructor(private cvService:CvService) { }

  ngOnInit() {
    this.cvToDisplay=null;
    this.cvs=this.cvService.getAllCvs()
  }
  receiveFromList(item: User) {
    this.cvToDisplay=item;
  }

}
