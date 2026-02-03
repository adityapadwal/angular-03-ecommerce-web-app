import { Product } from './../../models/product';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css']
})
export class CartViewComponent implements OnInit {

  // Stores all products in cart
  cartItems: Product[] = [];

  // constructor
  constructor(private CartService: CartService) {

  }

  // ngOnInit for initialization
  ngOnInit(): void {
    this.CartService.getCartItems().subscribe( data => {
      console.log(data);
      this.cartItems = data;
    });
  }
}
