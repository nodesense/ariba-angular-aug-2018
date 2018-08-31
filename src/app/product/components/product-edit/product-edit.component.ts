import { ProductService } from './../../services/product.service';
import { Component, OnInit, ViewChild } from '@angular/core';

import {Router, // navigate to other path
        ActivatedRoute, // read products/edit/:id from url
      } from '@angular/router';
import { Product } from '../../models/product';
import { Observable, Subscription } from 'rxjs';
import { Brand } from '../../models/brand';

import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  @ViewChild('productForm')
  form: NgForm; // directive instance

  product: Product  = new Product();

  brands$: Observable<Brand[]>;


  constructor(private router: Router,
              private route: ActivatedRoute, 
              private productService: ProductService) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    console.log('ID is', id);

    if (id) {
      // edit
      this.productService.getProduct(id)
          .subscribe(product => {
            this.product = product;
          });
    }
 
    this.brands$ =  this.productService.getBrands();
  }

  gotoList() {
    // navigation through js/ts
    // this.router.navigate(['/products', 'list']);
    this.router.navigateByUrl('/products/list');
  }

  saveProduct() {
    
    if (this.form.pristine) {
      alert('No changes');
      return;
    }

    this.productService
        .saveProduct(this.product)
        .subscribe (savedProduct => {
          console.log('product saved ', savedProduct);
        });
  }

}
