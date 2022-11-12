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
  addCvEmbauche(cv : User){
    console.log("service :" ,cv)
    this.cvsEmbauches.push(cv);

  }
}
