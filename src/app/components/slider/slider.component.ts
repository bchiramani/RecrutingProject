import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SliderService } from 'src/app/services/slider.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  private _mode$ : BehaviorSubject<String> = new BehaviorSubject("red");
  public mode$ : Observable <String>;

  constructor(private slider: SliderService) { 
    const data$ = new Observable(observer => {

      while(true) {
      observer.next();
    }
  
  
  })
  data$.subscribe({
    next: value => this._mode$,
    error: err => console.error(err),
    complete: () => console.log('DONE!')
  }); 

  }

  ngOnInit() {
    this.getMode$( );
    console.log(this.mode$)

  }
  
  public onColorsToggle( ) : void {
    console.log("hui")

    this.slider.toggleColors( );
  
  }
  
  private getMode$( ) : Observable<String> {
  return this.mode$ = this.slider.mode$;
  
  }

}






