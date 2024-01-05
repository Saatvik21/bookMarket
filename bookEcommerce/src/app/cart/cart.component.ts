import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  sum: number = 0;
  items = this.cartService.getItems();
  
  
  constructor(
    private cartService: CartService,
    private readonly router: Router
  ){}
  ngOnInit(): void {
    for(let item of this.items)
    {
      this.sum=this.sum+Number(item.price);
    }
  }
  shipping()
  {
    this.router.navigate(['/shipping_details'])
  }
  
}
