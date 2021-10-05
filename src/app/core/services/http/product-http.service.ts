import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductHttpService {

  constructor() { }

  getProducts(query?: string) {
    const allProducts: Product[] = [
      {
        id: '1341-AB',
        name: 'MacBook Pro',
        pictureUrl: 'https://via.placeholder.com/236x175.png?text=Imagen+1',
        price: 12.3
      },
      {
        id: '13213',
        name: 'Termómetro Digital',
        pictureUrl: 'https://via.placeholder.com/236x175.png?text=Imagen+1',
        price: 10
      },
      {
        id: '345235',
        name: '100 mascarillas quirúrguicas',
        pictureUrl: 'https://via.placeholder.com/236x175.png?text=Imagen+1',
        price: 5
      },
      {
        id: '980789',
        name: 'Play Station 5',
        pictureUrl: 'https://via.placeholder.com/236x175.png?text=Imagen+1',
        price: 500
      }
    ];
    if (!query) { return of(allProducts); }
    const filteredProducts = allProducts.filter(
      p => p.name.toLowerCase().includes(query.toLowerCase())
    );
    return of(filteredProducts);
  }

}
