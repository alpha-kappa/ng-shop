import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { of, Observable, from } from 'rxjs';
import { delay, concatMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  productsMock: Product[] = [
    new Product(
      0, 'Arduino Uno Rev.3', 'http://via.placeholder.com/150', 'Electronic shild for hobbie projects',2000
    ),
    new Product(
      1, 'Arduino Nano', 'http://via.placeholder.com/150', 'Electronic shild for hobbie projects', 1500
    ),
    new Product(
      2, 'Rapsbery Pi 4', 'http://via.placeholder.com/150', 'Electronic shild for hobbie projects', 3500
    ),
  ]

  constructor() { }

  getProductsList(): Observable<Product[]> {
    console.log('start loading products')
    return from([this.productsMock.sort((a,b)=>(b.id - a.id + Math.random()))]).pipe(delay(500));
  }
}
