import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  fieldList = [ 'name', 'price', 'year' ];
  selectedField: string = 'name';
  sortField: string = 'asc';

  // dependency injection
  // angular shall create product service
  // pass the instance
  constructor(private productService: ProductService) { 
    console.log('product list comp created');
  }

  ngOnInit() {
    this.productService.getProducts()
                        .subscribe (products => {
                            this.products = <Product[]> products;
                        });
  }

}
