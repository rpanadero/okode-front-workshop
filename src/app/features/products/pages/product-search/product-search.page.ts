import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';
import { GreetingHttpService } from 'src/app/core/services/http/greeting-http.service';
import { ProductHttpService } from 'src/app/core/services/http/product-http.service';

@Component({
  selector: 'product-search',
  templateUrl: './product-search.page.html',
  styleUrls: ['./product-search.page.scss']
})
export class ProductSearchPage implements OnInit {

  products?: Product[];
  searchTerm?: string;
  greetingMessage?: string;

  constructor(
    private productHttpService: ProductHttpService,
    private greetingService: GreetingHttpService
  ) { }

  ngOnInit() {
    this.loadProducts();
    this.loadGreetingMessage();
  }

  private loadProducts() {
    this.productHttpService.getProducts().subscribe(res => {
      this.products = res;
    }, err => {
      // TODO: handle error
      console.log(err);
    });
  }

  private loadGreetingMessage() {
    this.greetingService.getGreetingMessage().subscribe(res => {
      this.greetingMessage = res.message;
    });
  }

}
