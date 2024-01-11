import { Injectable } from '@angular/core';
import { Products } from '../products';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  items: Products[] = [];
  addToCart(product: Products) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }
}