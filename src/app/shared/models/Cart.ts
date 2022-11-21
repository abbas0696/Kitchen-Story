import { CartItem } from "./cartItem";
import { CartService } from "src/app/services/cart.service";

export class Cart{
    items: CartItem[]= [];

    get totalPrice(): number{
        let totalPrice = 0;
        this.items.forEach(item => {
            totalPrice += item.price;
        });
        return totalPrice;
    }

}