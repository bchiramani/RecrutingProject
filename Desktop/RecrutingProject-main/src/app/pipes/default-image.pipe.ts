import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {

  transform(image: string): string {
    console.log("hello i am pipe")
    let imageName=image
   
    
    if (imageName==null || imageName.trim()=="") {
      return "/assets/images/default.png"
    }

    
    return image
  }

}
