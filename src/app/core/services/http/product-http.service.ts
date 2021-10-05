import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductHttpService {

  constructor() { }

  getProducts() {
    return of<Product[]>([
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
    ]);
  }
}
