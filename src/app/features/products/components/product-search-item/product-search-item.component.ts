import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';

@Component({
  selector: 'product-search-item',
  templateUrl: './product-search-item.component.html',
  styleUrls: ['./product-search-item.component.scss']
})
export class ProductSearchItemComponent implements OnInit {

  @Input()
  product?: Product;
  @Output()
  addToCart = new EventEmitter<Product>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddToCart() {
    this.addToCart.emit(this.product);
  }

}
