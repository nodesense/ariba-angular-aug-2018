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


const routes: Routes = [
    {
      path: 'products',
      component: ProductHomeComponent,
      children: [
        {
          path: 'list', // products/list
          component: ProductListComponent
        },
        {
          path: 'create',
          component: ProductEditComponent
        },
        {
          path: 'edit/:id',
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
      ProductSearchComponent],

  providers: [
    // all services, injected values
    ProductService // ng 5
  ]
})
export class ProductModule { }
