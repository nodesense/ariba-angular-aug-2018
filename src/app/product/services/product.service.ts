import { Injectable } from '@angular/core';

// store the app data (state) in memory
// business logic
// api calls
// sharing data between components 

import {HttpClient} from '@angular/common/http';

// ng 2
@Injectable({
  providedIn: 'root' // ng 6. 
})
export class ProductService {

  constructor(private http: HttpClient) { 
    console.log('Product Service created');
  }

  getProducts() {
    return this.http.get('http://g3.nodesense.ai:7070/api/products')
  }
}
