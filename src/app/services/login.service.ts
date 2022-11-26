import { Injectable } from '@angular/core';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public cvs:Array<Login> = [
    {id: 1, email: 'amani@gmail.com',password:'amani'},
    {id: 2, email: 'fatma@gmail.com',password:'fatma'},
    {id: 3, email: 'arbia@gmail.com',password:'arbia'},

  ];
  constructor() { }

  getLogin(login:any){
    let user:Login
    user= this.cvs.find(user =>user.email==login.email)
    if (user.password==login.password){
      return user
    }
    else{ return null }

    

  }
}
