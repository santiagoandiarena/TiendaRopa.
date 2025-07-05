import { Component } from '@angular/core';
import { ShirtCartService } from '../shirt-cart.service';
import { Shirt } from '../shirts-list/Shirt';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-shirts-cart',
  standalone: false,
  templateUrl: './shirts-cart.component.html',
  styleUrl: './shirts-cart.component.scss'
})
export class ShirtsCartComponent {


  cartList$: Observable<Shirt[]>;

  constructor(private cart: ShirtCartService) {
    this.cartList$ = cart.cartList.asObservable();
  }

  getCartTotal(): number {
  let total = 0;
  this.cartList$.subscribe(cart => {
    cart.forEach(item => {
      total += item.amount * item.price;
    });
  });
  return total;
}


}
