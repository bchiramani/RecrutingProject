import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { DefaultImagePipe } from 'src/app/pipes/default-image.pipe';
import { CvService } from 'src/app/services/cv.service';
@Component({
  selector: 'app-form-cv',
  templateUrl: './form-cv.component.html',
  styleUrls: ['./form-cv.component.css']
})
export class FormCvComponent implements OnInit {
  user : User;
  nbr=10
  addCvForm=new FormGroup({nom:new FormControl(''),prenom: new FormControl(''),job: new FormControl(''), image: new FormControl('') , description: new FormControl(''), motsCles: new FormControl(''), citations: new FormControl('')});

  @Output() addCvEvent = new EventEmitter<Object>();
  constructor(private cvService:CvService,private fb: FormBuilder) { }

  ngOnInit() {
    this.user={ id:0,nom:"",prenom:"",image:null,job:"",description:"",motsCles:"",citation:""}
  }

  readUrl(event:any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
  
      reader.onload = (event: ProgressEvent) => {
        this.user.image = (<FileReader>event.target).result;
      }
  
      reader.readAsDataURL(event.target.files[0]);
    }
  } 
  getUser(user : User){
    console.log(user.image)
    this.addCvEvent.emit(user);
  }
  addCv(){
    console.log("addform Object ", this.addCvForm.value)
    this.user=this.addCvForm.value
    this.user.id=this.nbr
    this.nbr++
    console.log("user Object ", this.user)

    this.cvService.addCv(this.user)
    this.user={ id:0,nom:"",prenom:"",image:null,job:"",description:"",motsCles:"",citation:""}
  }


}
