import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { categoryProducts, product, productFromBasket, productToBasket } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  baseApiUrl = 'https://restaurant.webwide.ge/api/'

  headers = {
    'Content-Type': 'application/json'
  }

  constructor(private http: HttpClient) { }

  getAllproducts() {
    return this.http.get<product[]>(this.baseApiUrl + 'Products/GetAll')

  }

  getProductsById(id: number) {
    return this.http.get<categoryProducts>(`${this.baseApiUrl + 'Categories/GetCategory'}/${id}`)
  }


  addProduct(product: productToBasket) {
    return this.http.post<productToBasket>(this.baseApiUrl + 'Baskets/AddToBasket', JSON.stringify(product), { headers: this.headers })
  }

  getBasketProducts() {
    return this.http.get<productFromBasket[]>(this.baseApiUrl + 'Baskets/GetAll')
  }

  deleteProduct(id: number) {
    return this.http.delete(this.baseApiUrl + 'Baskets/DeleteProduct/' + id)
  }

  updateBasket(product: productToBasket) {
    return this.http.put(this.baseApiUrl + 'Baskets/UpdateBasket', product);
  }
}
