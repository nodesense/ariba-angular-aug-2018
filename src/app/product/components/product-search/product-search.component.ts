import { Component, OnInit, Injector } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent implements OnInit {
  productService: ProductService;

  constructor(private injector: Injector) {
     console.log('ProductSearchComponent created');

     this.productService = this.injector.get(ProductService);
   }

  ngOnInit() {
  }

}
