import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { CvService } from 'src/app/services/cv.service';

@Component({
  selector: 'app-cv-detail-page',
  templateUrl: './cv-detail-page.component.html',
  styleUrls: ['./cv-detail-page.component.css']
})
export class CvDetailPageComponent implements OnInit {
  id:any;
  user:User;
  constructor(private activatedRoute: ActivatedRoute,private cvService:CvService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params=>{this.id=params['id']}
    );
    this.user=this.cvService.getCvById(this.id);
    console.log("user at component",this.user)
    
  }

}
