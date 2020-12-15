import { Injectable } from '@angular/core';
import SampleJson from '../data/products.json';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get('http://localhost:3000/Products')
  }

  addProductInCart(item): Observable<any> {
    return of(item);
  }

  removeProductInCart(item): Observable<any> {
    return of(item);
  }
}
