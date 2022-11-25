import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  public cvs:Array<User> = [
    {id: 1, nom: 'Amani',prenom:'Bchir',job :'software engineer',image :"/assets/images//amaniii.jpg",description:"Software", motsCles:"Web dev , Mobile dev, Data science ",citation: "the best is yet to come"},
    {id: 2, nom: 'Fatma',prenom:'Chaouech',job :'software engineer',image :"/assets/images//fatma.jpg",description:"Software", motsCles:"Data science , Web dev , Mobile dev ",citation: "bzfdmknfkk "},
    {id: 3, nom: 'arbia',prenom:'Jlassi',job :'teacher',image :"/assets/images//arbia.jpg",description:"teaching", motsCles:"montessori",citation: "bzfdmdsssknfkk "},
    {id: 4, nom: 'nouha',prenom:'haboubi',job :'software engineer',image :"/assets/images//nouha.jpg",description:"Software", motsCles:"Web dev , Mobile dev ",citation: "bzfdhhhmknfkk "},



  ];
  constructor() { }
  addCv(cv){
    console.log("service: ",cv)
    this.cvs.push(cv)
    console.log("cvs are :",this.cvs)
  }
  getAllCvs(){
    console.log("service: ",this.cvs)
    return this.cvs
  }
  deleteCv(cvToDelete:User){
    let index=this.cvs.indexOf(cvToDelete)
    this.cvs.splice(index,1)
  }
  getCvById(id:number){
    let user:User
    user= this.cvs.find(user =>user.id==id)
    console.log("user at service ",user)

    return user
  }
}
