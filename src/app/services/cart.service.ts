import { Injectable } from '@angular/core';
import { product } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  cartItems = []

  // addItem(product: product) {
  //   const exist = this.cartItems.find((item) => {
  //     return item.id === product.id
  //   });

  //   if (exist) {
  //     exist.quantity++
  //   } else{
  //     this.cartItems.push(product)
  //   }
  //   console.log(this.cartItems);
    
  // }
}
