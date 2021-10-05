import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductSearchPageRoutingModule } from './product-search-routing.page.module';
import { ProductSearchPage } from './product-search.page';
import { ProductSearchItemComponentModule } from '../../components/product-search-item/product-search-item.component.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FilterProductsPipe } from '../../pipes/filter-products.pipe';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductSearchPage,
    FilterProductsPipe
  ],
  imports: [
    CommonModule,
    ProductSearchPageRoutingModule,
    ProductSearchItemComponentModule,
    SharedModule,
    FormsModule
  ]
})
export class ProductSearchPageModule { }
