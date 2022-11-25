import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-router-simulator',
  templateUrl: './router-simulator.component.html',
  styleUrls: ['./router-simulator.component.css']
})
export class RouterSimulatorComponent implements OnInit {
  selectedPage: String;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  selectChangeHandler (event: any) {
    //update the ui
    this.selectedPage = event.target.value;
    if(this.selectedPage=="1"){
      this.router.navigate(['/viewCvs'])
    }else if(this.selectedPage=="2"){
      this.router.navigate(['/addCv'])
    }else if(this.selectedPage=="3"){
      this.router.navigate(['/textEditor'])
    }
  }

}
