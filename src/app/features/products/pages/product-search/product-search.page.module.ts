import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductSearchPageRoutingModule } from './product-search-routing.page.module';
import { ProductSearchPage } from './product-search.page';
import { ProductSearchItemComponentModule } from '../../components/product-search-item/product-search-item.component.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ProductSearchPage
  ],
  imports: [
    CommonModule,
    ProductSearchPageRoutingModule,
    ProductSearchItemComponentModule,
    SharedModule
  ]
})
export class ProductSearchPageModule { }
