import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';
import { ProductHttpService } from 'src/app/core/services/http/product-http.service';

@Component({
  selector: 'product-search',
  templateUrl: './product-search.page.html',
  styleUrls: ['./product-search.page.scss']
})
export class ProductSearchPage implements OnInit {

  products?: Product[];
  searchTerm?: string;

  constructor(
    private productHttpService: ProductHttpService
  ) { }

  ngOnInit() {
    this.loadProducts();
  }

  private loadProducts() {
    this.productHttpService.getProducts().subscribe(res => {
      this.products = res;
    }, err => {
      // TODO: handle error
      console.log(err);
    });
  }

}
