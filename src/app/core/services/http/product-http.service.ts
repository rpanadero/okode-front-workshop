import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Product, ProductSearchCategory } from '../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductHttpService {

  constructor() { }

  getStaticProductsByCategory(category: ProductSearchCategory) {
    let products: Product[] = [];
    if (category === 'technology') {
      products = [
        {
          id: '1341-AB',
          name: 'MacBook Pro',
          pictureUrl: 'https://via.placeholder.com/236x175.png?text=Imagen+1',
          price: 1290.3
        },
        {
          id: '13213',
          name: 'Termómetro Digital',
          pictureUrl: 'https://via.placeholder.com/236x175.png?text=Imagen+1',
          price: 10
        },
        {
          id: '345235',
          name: 'Tarjeta Gráfica Nvidea RTX 3080',
          pictureUrl: 'https://via.placeholder.com/236x175.png?text=Imagen+1',
          price: 1000
        },
        {
          id: '980789',
          name: 'Play Station 5',
          pictureUrl: 'https://via.placeholder.com/236x175.png?text=Imagen+1',
          price: 500
        }
      ];
    } else if (category === 'sports') {
      products = [
        {
          id: '7914nkl',
          name: 'Balón de fútbol',
          pictureUrl: 'https://via.placeholder.com/236x175.png?text=Imagen+1',
          price: 20
        },
        {
          id: '62783',
          name: 'Pala de pádel',
          pictureUrl: 'https://via.placeholder.com/236x175.png?text=Imagen+1',
          price: 90
        },
        {
          id: '12312',
          name: 'Espinilleras',
          pictureUrl: 'https://via.placeholder.com/236x175.png?text=Imagen+1',
          price: 20
        },
        {
          id: '213124',
          name: 'Kit de pesas',
          pictureUrl: 'https://via.placeholder.com/236x175.png?text=Imagen+1',
          price: 50
        },
        {
          id: '23213',
          name: 'Barra de dominadas',
          pictureUrl: 'https://via.placeholder.com/236x175.png?text=Imagen+1',
          price: 40
        },
        {
          id: '23213',
          name: 'Esterilla',
          pictureUrl: 'https://via.placeholder.com/236x175.png?text=Imagen+1',
          price: 40
        }
      ]
    }
    return products;
  }

}
