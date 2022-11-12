import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {
  textColors =["red", "green", "orange","black","yellow","pink","purple"]
  textColor:String;
  @HostBinding('style.color') @HostBinding('style.border-color') color = '';
  // @HostBinding('style.border-color') borderColor = '';
  constructor() { }
  @HostListener('keyup') keyup() {
  this.color =this.textColors[Math.trunc(Math.random()*this.textColors.length)];
  }
 

}
