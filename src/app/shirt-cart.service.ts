import { Injectable } from '@angular/core';
import { Shirt } from './shirts-list/Shirt';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShirtCartService {

  private _cartList : Shirt[] = [];
  cartList: BehaviorSubject<Shirt[]> = new BehaviorSubject(this._cartList);

  constructor() { }

  addToCart(shirt: Shirt) {
    let item = this._cartList.find((v1) => v1.name == shirt.name); // find busca elemento v1 que el nombre sea igual al nombre de la remera

    if (!item) {
      this._cartList.push({ ... shirt}); // en lugar de pasar el mismo objeto, hace una copia
    } else {
      item.amount += shirt.amount;
    }

    console.log(this._cartList)
    this.cartList.next(this._cartList)
  }

}
