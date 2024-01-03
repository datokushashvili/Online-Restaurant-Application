import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { categoryItems } from 'src/app/models/categories';
import { categoryProducts, product, productToBasket } from 'src/app/models/products';
import { CartService } from 'src/app/services/cart.service';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { faFilter } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {
  filter = faFilter;
  categories: categoryItems[] = []
  allProducts: product[] = []
  productById: categoryProducts = {
    id: -1,
    name: '',
    products: []
  };
  
  showAllProducts: boolean = false
  showProductByid: boolean = false
  showCategoryButton: Boolean = false


  constructor(private categoryService: CategoryService, private productService: ProductService, private cartService: CartService, private fb: FormBuilder) {
    this.categoryService.getCategories().subscribe(response => {
      this.categories = response
    });

    this.productService.getAllproducts().subscribe(response => {
      this.allProducts = response
      this.showProductByid = false
      this.showAllProducts = true
      this.showCategoryButton = true
      console.log(response[0])
    })

  }

  filterForm = this.fb.group({
    nuts: [false],
    vegetarian: [false],
    spiciness: ['-1']
  })

  nuts = false;
  vegetarian = false;
  spiciness = -1


  applyFilter() {
    const nutsValue = this.filterForm.controls.nuts?.value;
    const vegetarianValue = this.filterForm.controls.vegetarian?.value;
    const spicinessValue = this.filterForm.controls.spiciness?.value;

    if (nutsValue !== null && vegetarianValue !== null && spicinessValue !== null) {
      this.nuts = Boolean(nutsValue);
      this.vegetarian = Boolean(vegetarianValue);
      this.spiciness = parseInt(spicinessValue);
    }
  }

  clearFilter() {
    this.nuts = false;
    this.vegetarian = false;
    this.spiciness = -1
    this.filterForm.controls.nuts.setValue(false)
    this.filterForm.controls.vegetarian.setValue(false)
    this.filterForm.controls.spiciness.setValue('-1')
  }


  getAllproductsTest() {
    this.productService.getAllproducts().subscribe(response => {
      this.allProducts = response
      this.showProductByid = false
      this.showAllProducts = true
    })
  }


  getCategoryProduct(id: number) {
    this.productService.getProductsById(id).subscribe(response => {
      this.productById = response
      this.showAllProducts = false
      this.showProductByid = true
    })
  }


  activeCategory: number | null = 0;

  addActiveClass(categoryId: number) {
    if (this.activeCategory !== categoryId) {
      this.activeCategory = categoryId;
    }
  }


  basketProducts: any = []
  postProducts: any = {}
  productToAdd: productToBasket

  addProduct(product: product) {
    this.productToAdd = {
      quantity: 1,
      price: product.price,
      productId: product.id
    }
    this.productService.getBasketProducts().subscribe(response => {
      console.log(response);
      this.basketProducts = response;

      const productExists = this.basketProducts.find(item => item.product.id === product.id);


      if (productExists) {
        console.log('Product already exists:', productExists);
        this.productToAdd.quantity += productExists.quantity;
        this.productService.updateBasket(this.productToAdd).subscribe(response => {
          console.log(response);

        })

      } else {
        this.productService.addProduct(this.productToAdd).subscribe(response => {
          console.log('Product added:', response);
          this.postProducts = response;
        });
      }
    });
  }
}