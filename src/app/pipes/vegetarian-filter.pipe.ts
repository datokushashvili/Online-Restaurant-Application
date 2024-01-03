import { Pipe, PipeTransform } from '@angular/core';
import { product } from '../models/products';

@Pipe({
  name: 'vegetarianFilter'
})
export class vegetarianFilterPipe implements PipeTransform {
  transform(value: product[], vegetarian: boolean): product[] | [] {
    if (vegetarian === false) {
      return value;
    }else{
    return value.filter(function(product){
      return product.vegeterian === vegetarian
    })};
  }

}
