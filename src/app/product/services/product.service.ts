import { Injectable } from '@angular/core';

// store the app data (state) in memory
// business logic
// api calls
// sharing data between components 

import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { environment } from '../../../environments/environment';
import { Brand } from '../models/brand';


// ng 2
@Injectable({
  providedIn: 'root' // ng 6. 
})
export class ProductService {

  constructor(private http: HttpClient) { 
    console.log('Product Service created');
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.apiEndPoint}/api/products`);
  }

  // GET /api/products
  searchProducts(q: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.apiEndPoint}/api/products?q=${q}`);
  }

  // GET /api/products/100
  getProduct(id: any): Observable<Product> {
    return this.http
          .get<Product>(`${environment.apiEndPoint}/api/products/${id}`);
  }
 
  // GET /api/brands
  getBrands(): Observable<Brand[]> {
    console.log("Serving from server");
    return this.http
                .get<Brand[]>(`${environment.apiEndPoint}/api/brands`)
                 
  }

  // update existing product
  // PUT /api/products/12345
  // {{product json data}}
  // response
  // updated product data 

  // to create new  product
  // POST /api/products
  // {{product json data without id}}
  // response
  // updated product data with id 
  saveProduct(product: Product): Observable<Product> {
    if (product.id) { // update
      return this.http
            .put<Product>(`${environment.apiEndPoint}/api/products/${product.id}`,
                          product);
    } else { // create
      return this.http
      .post<Product>(`${environment.apiEndPoint}/api/products`,
                    product);
    }
  }
}
