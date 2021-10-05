import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';

@Component({
  selector: 'product-search-item',
  templateUrl: './product-search-item.component.html',
  styleUrls: ['./product-search-item.component.scss']
})
export class ProductSearchItemComponent implements OnInit {

  @Input()
  product?: Product;

  constructor() { }

  ngOnInit(): void {
  }

}
