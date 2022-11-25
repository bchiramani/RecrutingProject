import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {

  transform(image: string): string {
    console.log("hello i am pipe")
    
   
    
    if (image==null || image.trim()=="") {
      return "/assets/images/default.png"
    }

    
    return image
  }

}
