import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mini-word',
  templateUrl: './mini-word.component.html',
  styleUrls: ['./mini-word.component.css']
})
export class MiniWordComponent implements OnInit {
  color:String;
  size:number;
  font:string;
  text1:String;
  fontsize:String;
  text:String;
  textColor:String;
  textColors =["red", "green", "orange","black","yellow","pink","purple"]
 

  constructor() { }

  ngOnInit() {
    this.color="black"
    this.size=12
    this.font="arial"
    this.text1=""
  }
  applyStyle(){
    this.fontsize=this.size+"px";
    console.log(this.font)
    
  }
  selectChangeHandler(event:any){
    this.font=event.target.value;
  }
  rainbow(){
    this.textColor=this.textColors[Math.trunc(Math.random()*this.textColors.length)]
    
    //this.textColor=this.textColors[this.textColors.length*Math.random()]
  }


}
