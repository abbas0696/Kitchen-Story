import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { FoodService } from '../services/food/food.service';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/cartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
cart!: Cart;

  constructor(private cartservice: CartService) { 
    this.setCart();
  }

  ngOnInit(): void {
  }
  setCart(){
    this.cart = this.cartservice.getCart();
  }
  removeFromCart(cartItem: CartItem){
    this.cartservice.removeFromCart(cartItem.food.id);
    this.setCart();
  }
  changeQuantity(cartItem:CartItem, quantityInString: string){
    const quantity  = parseInt(quantityInString);
    this.cartservice.changeQuantity(cartItem.food.id, quantity);
    this.setCart();

  }

}
