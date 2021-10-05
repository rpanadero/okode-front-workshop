import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';

@Pipe({
  name: 'orderProducts'
})
export class OrderProductsPipe implements PipeTransform {

  transform(products?: Product[]) {
    if (!products) { return []; }
    return [...products].sort((p1, p2) => p1.price - p2.price);
  }

}
