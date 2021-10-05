import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';

@Component({
  selector: 'cart-box',
  templateUrl: './cart-box.component.html',
  styleUrls: ['./cart-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartBoxComponent implements OnInit {

  @Input()
  products: Product[] = [];

  constructor() { }

  ngOnInit() {
  }

}
