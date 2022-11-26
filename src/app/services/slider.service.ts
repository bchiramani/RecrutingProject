import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SliderService {
  public colors:Array<String> = ["red","yellow","black","green"];
  private _mode$ : BehaviorSubject<String> = new BehaviorSubject("red");
  constructor() { }
  public get mode$( ) : Observable<String> {
    return this._mode$.asObservable( );
  }
  public toggleColors( ) : void {
    this._mode$.next( this.colors[(this.colors.indexOf(this._mode$.value)+1)%this.colors.length]);
  
  } 
}
