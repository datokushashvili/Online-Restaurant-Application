import { Pipe, PipeTransform } from '@angular/core';
import { product } from '../models/products';

@Pipe({
  name: 'spicinessFilter'
})
export class SpicinessFilterPipe implements PipeTransform {
  transform(value: product[], spiciness: number): product[] | [] {
    if (spiciness === -1) {
      return value;
    }else{
    return value.filter(function(product){
      return product.spiciness === spiciness
    })};
  }

}
