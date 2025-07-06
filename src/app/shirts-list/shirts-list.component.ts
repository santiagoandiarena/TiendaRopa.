import { Component, OnInit } from '@angular/core';
import { Shirt } from './Shirt';
import { ShirtCartService } from '../shirt-cart.service';
import { ShirtDataService } from '../shirt-data.service';

@Component({
  selector: 'app-shirts-list',
  standalone: false,
  templateUrl: './shirts-list.component.html',
  styleUrl: './shirts-list.component.scss'
})
export class ShirtsListComponent implements OnInit {

  shirts: Shirt[] = [];
    // {
    //   name: "Camiseta Boca",
    //   price: 120000,
    //   stock: 6,
    //   season: "21/22",
    //   image: "assets/img/boca.jpg",
    //   installments: 6,
    //   clearance: false,
    //   amount: 0,
    // },
    // {
    //   name: "Camiseta River",
    //   price: 120000,
    //   stock: 4,
    //   season: "24/25",
    //   image: "assets/img/river.png",
    //   installments: 6,
    //   clearance: false,
    //   amount: 0,
    // },
    // {
    //   name: "Camiseta Racing",
    //   price: 80000,
    //   stock: 5,
    //   season: "24/25",
    //   image: "assets/img/racing.jpg",
    //   installments: 0,
    //   clearance: false,
    //   amount: 0,
    // },
    // {
    //   name: "Camiseta Independiente",
    //   price: 80000,
    //   stock: 7,
    //   season: "24/25",
    //   image: "assets/img/independiente.webp",
    //   installments: 0,
    //   clearance: false,
    //   amount: 0,
    // },
    // {
    //   name: "Camiseta San lorenzo",
    //   price: 70000,
    //   stock: 0,
    //   season: "24/25",
    //   image: "assets/img/sanlorenzo.webp",
    //   installments: 0,
    //   clearance: true,
    //   amount: 0,
    // },
    // {
    //   name: "Camiseta Estudiantes",
    //   price: 70000,
    //   stock: 4,
    //   season: "24/25",
    //   image: "assets/img/estudiantes.jpg",
    //   installments: 0,
    //   clearance: true,
    //   amount: 0,
    // },
    

  constructor(private cart: ShirtCartService,
              private shirtsDataService : ShirtDataService) {

  }

  ngOnInit(): void {
  this.shirtsDataService.getAll()
    .subscribe(shirts => {
      console.log('Camisetas desde API:', shirts); // Tenia duda si se estaba consumiendo bien la API
      this.shirts = shirts;
    });   
}


  maxReached(m: string) {
    alert(m);
  }

  addToCart(shirt: Shirt): void {
    this.cart.addToCart(shirt);
    // shirt.stock -= shirt.amount; // el control de stock lo maneja la funcion getAvailableStock
    shirt.amount = 0;
  }

  getAvailableStock(shirt: Shirt): number {
    const item = this.cart.cartList.getValue().find(v => v.name === shirt.name);
    return shirt.stock - (item?.amount || 0);
  }




}
