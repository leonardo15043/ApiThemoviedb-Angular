import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(images: any ): string {

    if( !images ){
      return "assets/img/noimage.png";
    }

    if( images.length > 0 ){
      return "https://image.tmdb.org/t/p/w500_and_h282_face/"+images;
    }else{
      return "assets/img/noimage.png";
    }

  }

}
