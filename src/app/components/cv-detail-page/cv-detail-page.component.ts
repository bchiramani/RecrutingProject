import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user.model';
import { CvEmbauchesService } from 'src/app/services/cv-embauches.service';
import { CvService } from 'src/app/services/cv.service';

@Component({
  selector: 'app-cv-detail-page',
  templateUrl: './cv-detail-page.component.html',
  styleUrls: ['./cv-detail-page.component.css']
})
export class CvDetailPageComponent implements OnInit {
  id:any;
  user:User;
  constructor(private activatedRoute: ActivatedRoute,private cvService:CvService,private cvEmbauchesService:CvEmbauchesService,private toastr: ToastrService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params=>{this.id=params['id']}
    );
    this.user=this.cvService.getCvById(this.id);
    console.log("user at component",this.user)
    
  }
  embaucher(){
    //console.log(this.cvToDisplay)
    if (this.cvEmbauchesService.getCvEmbauche(this.user)){
      this.toastr.error("Vous avez deja embaucher cet utilisateur",'Deja embauché')

    }else{
      this.cvEmbauchesService.addCvEmbauche(this.user)
      this.toastr.success("Vous avez embaucher cet utilisateur",'Embauché')

    }
  
  }

}
