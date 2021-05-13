import { Component, OnInit } from '@angular/core';
import { CartDataService } from 'src/app/shared/services/cart-data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styles: [
  ]
})
export class CartComponent implements OnInit {

  cartItemsList: any[] = [];

  constructor(private cartDataService: CartDataService) { }

  ngOnInit(): void {
    this.cartDataService.latestCartItems.subscribe( (cartItems: any[]) => {
      console.log(cartItems);
      this.cartItemsList = cartItems;
    });
  }

}
