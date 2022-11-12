import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user.model';
import { CvEmbauchesService } from 'src/app/services/cv-embauches.service';
import { CvService } from 'src/app/services/cv.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() cvToDisplay:User
  //const Swal = require('sweetalert2')
  constructor(private cvService:CvService,private cvEmbauchesService:CvEmbauchesService,private toastr: ToastrService) {
    
   }

  ngOnInit() {
    this.cvToDisplay= {id: 0, nom: 'Nom',prenom:'Prenom',job :'Job',image :"/assets/images/default.png",description:"job description", motsCles:"mots cles",citation: "citation"};
  }
  embaucher(){
    //console.log(this.cvToDisplay)
    this.cvEmbauchesService.addCvEmbauche(this.cvToDisplay)
    this.cvService.deleteCv(this.cvToDisplay)
    // Swal.fire({
    //   title: 'Embauché',
    //   text: 'vous avez embauché cet utilisateur',
    //   icon: 'success',
    //   confirmButtonText: 'Cool'
    // })
    this.toastr.success("Vous avez embaucher cet utilisateur",'Embaucher')
    
  }


}
