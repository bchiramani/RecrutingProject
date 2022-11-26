import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SliderService } from 'src/app/services/slider.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  
  monObservable$ : Observable<string>;
    images=[
      'amaniii.jpg',  
      'arbia.jpg',
      'fatma.jpg',
      'nouha.jpg'
    ];
    image:String;
  constructor(private slider: SliderService) { }

  ngOnInit() {
    this.monObservable$ =new Observable( 
      (observer)=>{
        let i=0;
        setInterval( 
          ()=>{
            console.log(i%this.images.length-1)
            observer.next(this.images[(i%this.images.length)])
            i++
          }
        ,1000)
      }
    );
    this.monObservable$.subscribe(
      (result)=>{
        this.image=result;
      }
    )

  }
}






