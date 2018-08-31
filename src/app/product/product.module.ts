import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductHomeComponent } from './components/product-home/product-home.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductSearchComponent } from './components/product-search/product-search.component';

import {Routes, RouterModule} from '@angular/router';
import { ProductService } from './services/product.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './components/cart/cart.component';


const routes: Routes = [
    {
      path: 'products',
      component: ProductHomeComponent,
      children: [
        {
          path: 'list', // products/list
          component: ProductListComponent
        },

        // add path 'cart' // products/cart
        {
          path: 'cart',
          component: CartComponent
        },

        {
          path: 'create',
          component: ProductEditComponent
        },
        {
          path: 'edit/:id', // products/edit/100
          component: ProductEditComponent
        },
        {
          path: 'search',
          component: ProductSearchComponent
        }
      ]
    }
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
      ProductHomeComponent,
      ProductListComponent,
      ProductEditComponent,
      ProductSearchComponent,
      CartComponent],

  providers: [
    // all services, injected values
    ProductService // ng 5
  ]
})
export class ProductModule { }
