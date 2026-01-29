import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { CartViewComponent } from './cart-view/cart-view.component';



@NgModule({
  declarations: [
    CartComponent,
    CartViewComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CartModule { }
