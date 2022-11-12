import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class CvEmbauchesService {
  public cvsEmbauches:Array<User> = [] 
  constructor() { }
  getAllCvsEmbauches(){
    return this.cvsEmbauches
  }
  getCvEmbauche(cv :User){
    console.log(this.cvsEmbauches.includes(cv))
    return this.cvsEmbauches.includes(cv)
  }
  addCvEmbauche(cv : User){
    console.log("service :" ,cv)
    this.cvsEmbauches.push(cv);

  }
}
