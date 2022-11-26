import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user.model';
import { CvEmbauchesService } from 'src/app/services/cv-embauches.service';
import { CvService } from 'src/app/services/cv.service';
import Swal from 'sweetalert2'
import { ItemComponent } from '../item/item.component';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  //@Input() cvToDisplay:User
  cvToDisplay:User
  //const Swal = require('sweetalert2')
  constructor(private router:Router,cvService:CvService,private cvEmbauchesService:CvEmbauchesService,private toastr: ToastrService, private item : ItemComponent) {
    console.log("i am at detail");
    
    
    this.item.monObservable$.subscribe(
      (result)=>{
        console.log("hi amounty i am subscribed now ")
        this.cvToDisplay=result;
      }
    )
   }

  ngOnInit() {
    

  
  }
  embaucher(){
    //console.log(this.cvToDisplay)
    if (this.cvEmbauchesService.getCvEmbauche(this.cvToDisplay)){
      this.toastr.error("Vous avez deja embaucher cet utilisateur",'Deja embauché')

    }else{
      this.cvEmbauchesService.addCvEmbauche(this.cvToDisplay)
      this.toastr.success("Vous avez embaucher cet utilisateur",'Embauché')

    }
    //this.cvService.deleteCv(this.cvToDisplay)
    // Swal.fire({
    //   title: 'Embauché',
    //   text: 'vous avez embauché cet utilisateur',
    //   icon: 'success',
    //   confirmButtonText: 'Cool'
    // })

   
  }
  viewDetails(){
    console.log(this.cvToDisplay.id)
    this.router.navigate(['detail',this.cvToDisplay.id])
  }


}
