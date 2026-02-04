import { CartService } from './../../cart/cart.service';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from 'src/app/models/product';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  // properties
  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private snackBar: MatSnackBar) {

  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product).subscribe({
      next: () => {
        this.snackBar.open(`${product.name} added to cart`, "", {
          duration: 2000,
          horizontalPosition: 'right',
          verticalPosition: 'top'
        });
      },
      error: () => {

      }
    });
  }
}
