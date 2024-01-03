import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { categoryItems } from '../models/categories';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  apiUrl = 'https://restaurant.webwide.ge/api/Categories/GetAll'

  getCategories(){
    return this.http.get<categoryItems[]>(this.apiUrl)
  }
}
