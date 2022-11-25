import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { CvService } from 'src/app/services/cv.service';

@Component({
  selector: 'app-add-cv',
  templateUrl: './add-cv.component.html',
  styleUrls: ['./add-cv.component.css']
})
export class AddCvComponent implements OnInit {
  user : User;
  public cvs:Array<User> ;
 
  constructor(private cvService:CvService) { }

  ngOnInit() {
    this.cvs=this.cvService.getAllCvs()
    console.log(this.cvs)
  }
  receiveUser(user : User){
    this.user = user
  }

  
 

}
