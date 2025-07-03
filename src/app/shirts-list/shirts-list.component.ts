import { Component, OnInit } from '@angular/core';
import { Shirt } from './Shirt';

@Component({
  selector: 'app-shirts-list',
  standalone: false,
  templateUrl: './shirts-list.component.html',
  styleUrl: './shirts-list.component.scss'
})
export class ShirtsListComponent implements OnInit {

  shirts: Shirt[] = [
    {
      name: "Camiseta Boca",
      price: 120000,
      stock: 6,
      season: "21/22",
      image: "assets/img/boca.jpg",
      installments: 6,
      clearance: false,
      amount: 0,
    },
    {
      name: "Camiseta River",
      price: 120000,
      stock: 4,
      season: "24/25",
      image: "assets/img/river.png",
      installments: 6,
      clearance: false,
      amount: 0,
    },
    {
      name: "camiseta Racing",
      price: 80000,
      stock: 5,
      season: "24/25",
      image: "assets/img/racing.jpg",
      installments: 0,
      clearance: false,
      amount: 0,
    },
    {
      name: "Camiseta independiente",
      price: 80000,
      stock: 7,
      season: "24/25",
      image: "assets/img/independiente.webp",
      installments: 0,
      clearance: false,
      amount: 0,
    },
    {
      name: "Camiseta San lorenzo",
      price: 70000,
      stock: 0,
      season: "24/25",
      image: "assets/img/sanlorenzo.webp",
      installments: 0,
      clearance: true,
      amount: 0,
    },
    {
      name: "Camiseta estudiantes",
      price: 70000,
      stock: 4,
      season: "24/25",
      image: "assets/img/estudiantes.jpg",
      installments: 0,
      clearance: true,
      amount: 0,
    }
  ];

  constructor() { }

  ngOnInit(): void {

  }

  upAmount(shirt: Shirt): void {
    if (shirt.amount < shirt.stock)
      shirt.amount++;
  }

  downAmount(shirt: Shirt): void {
    if (shirt.amount > 0)
      shirt.amount--;
  }

  allowOnlyNumbers(event: KeyboardEvent): void {
    const key = event.key;

    // Solo permitir teclas 0-9
    if (!/^[0-9]$/.test(key)) {
      event.preventDefault();
    }
  }

  validateStock(event: Event, shirt: Shirt): void {
    const input = event.target as HTMLInputElement;
    let value = Number(input.value);

    // Limitar por stock
    if (value > shirt.stock) {
      value = shirt.stock;
      input.value = String(value);
    }

    // Actualizar el modelo
    shirt.amount = value;
  }



}
