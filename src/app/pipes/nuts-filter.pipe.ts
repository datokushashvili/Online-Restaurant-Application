import { Pipe, PipeTransform } from '@angular/core';
import { product } from '../models/products';

@Pipe({
  name: 'nutsFilter'
})
export class NutsFilterPipe implements PipeTransform {
  transform(value: product[], nuts: boolean): product[] | [] {
    if (nuts === false) {
      return value;
    }else{
    return value.filter(function(product){
      return product.nuts === !nuts
    })};
  }
}









