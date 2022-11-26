import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/models/login';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';

import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  errMessage: string;
  
  colorEmail: string='black'
  loginForm=new FormGroup({email:new FormControl(''),password: new FormControl('')});

  constructor(private loginService: LoginService, private fb: FormBuilder) { }

  ngOnInit() {
    this.loginForm= this.fb.group({
      password : ['',[Validators.required,Validators.minLength(4)]],
      email : ['',[Validators.required,Validators.email]]
    })

  }

  

  login(){
    console.log("user Object ", this.loginForm.value)
    // this.loginService.getLogin(this.loginForm.value).subscribe( 
    //   (data)=>{ 
    //    if (data.code == '1'){
    //       localStorage.setItem('connected','false');
    //       this.errMessage= "verify your password";
    //     }else{
    //       this.errMessage="";
          
    //     }
    //     console.log(this.errMessage)
    //     console.log(data.user);
    //   }
    // );

    
  }

}
