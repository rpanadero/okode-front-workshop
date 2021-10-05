import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';

@Pipe({
  name: 'filterProducts'
})
export class FilterProductsPipe implements PipeTransform {

  transform(products?: Product[], searchTerm?: string) {
    if (!products) { return []; }
    if (!searchTerm) { return products; }
    return products.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }

}
