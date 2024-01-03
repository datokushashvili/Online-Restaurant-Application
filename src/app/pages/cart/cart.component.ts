import { Component } from '@angular/core';
import { productFromBasket, productToBasket } from 'src/app/models/products';
import { ProductService } from 'src/app/services/product.service';
import { faPlus, faMinus, faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent {

  quantityPlus = faPlus
  quantityMinus = faMinus
  deleteButton = faXmark

  basketProducts: productFromBasket[] = []
  constructor(private productService: ProductService) {
    this.productService.getBasketProducts().subscribe(response => {
      this.basketProducts = response
      console.log(this.basketProducts)
    })
  }

  deleteProductsFromBasket(id: number) {
    this.basketProducts = this.basketProducts.filter(product => product.product.id !== id);
    this.productService.deleteProduct(id).subscribe(response => {
      console.log(response)
    })
  }

  productToAdd: productToBasket

  incrementQuantity(basketProduct: any) {
    basketProduct.quantity += 1
    this.updateProduct(basketProduct);
  }
  decrementQuantity(basketProduct: any) {
    if (basketProduct.quantity > 1) {
      basketProduct.quantity -= 1;
      this.updateProduct(basketProduct);
    }

  }
  updateProduct(basketProduct: any) {
    this.productToAdd = {
      quantity: basketProduct.quantity,
      price: basketProduct.price,
      productId: basketProduct.product.id
    }

    this.productService.updateBasket(this.productToAdd).subscribe(response => {
      console.log(response)
    })
  }

  get cartEmpty(): boolean {
    return this.basketProducts.length === 0;
  }


  getTotalPrice(): number {
    return this.basketProducts.reduce((total, product) => total + (product.price * product.quantity), 0);
  }

  checkout() {
    console.log(this.basketProducts)
  }
}
