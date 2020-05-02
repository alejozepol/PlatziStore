import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';

import { MaterialModule } from '../material/material.module';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponent,
    ProductDetailComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MaterialModule,
  ]
})
export class ProductsModule { }
