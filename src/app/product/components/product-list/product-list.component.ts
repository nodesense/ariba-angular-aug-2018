import { CartItem } from './../../../shared/models/cart-item';
import { DataService } from './../../../shared/services/data.service';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  // products: Product[] = [];

  products$: Observable<Product[]>;

  fieldList = [ 'name', 'price', 'year' ];
  selectedField: string = 'name';
  sortField: string = 'asc';

  // dependency injection
  // angular shall create product service
  // pass the instance
  constructor(private productService: ProductService, 
              private dataService: DataService) { 
    console.log('product list comp created');
  }

  ngOnInit() {

    // subscribe, unsubscribe done by async pipe
    this.products$ = this.productService.getProducts();

    // this.productService.getProducts()
    //                     .subscribe (products => {
    //                         this.products = <Product[]> products;
    //                     });

  }

  addItemToCart(product: Product) {
    let item = new CartItem();
    item.name = product.name;
    item.price = product.price;
    item.id = product.id;
    item.qty = 1;
    this.dataService.addItem(item);
  }

}
