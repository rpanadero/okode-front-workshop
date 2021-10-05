import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductSearchItemComponent } from './product-search-item.component';


@NgModule({
  declarations: [
    ProductSearchItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductSearchItemComponent
  ]
})
export class ProductSearchItemComponentModule { }
