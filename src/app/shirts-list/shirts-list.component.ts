import { Component, OnInit } from '@angular/core';
import { Shirt } from './shirt';

@Component({
  selector: 'app-shirts-list',
  standalone: false,
  templateUrl: './shirts-list.component.html',
  styleUrl: './shirts-list.component.scss'
})
export class ShirtsListComponent implements OnInit{

  shirts: Shirt[] = [
    {
      name: "Camiseta Boca",
      price: 120000,
      stock: 5,
      season: "21/22",
      image: "assets/img/boca.jpg",
      installments: 6,
      clearance : false,
    },
    {
      name: "Camiseta River",
      price: 120000,
      stock: 4,
      season: "24/25",
      image: "assets/img/river.png",
      installments: 6,
      clearance : false,
    },
    {
      name: "camiseta Racing",
      price: 80000,
      stock: 5,
      season: "24/25",
      image: "assets/img/racing.jpg",
      installments: 0,
      clearance : false,
    },
    {
      name: "Camiseta independiente",
      price: 80000,
      stock: 1,
      season: "24/25",
      image: "assets/img/independiente.webp",
      installments: 0,
      clearance : false,
    },
    {
      name: "Camiseta San lorenzo",
      price: 70000,
      stock: 0,
      season: "24/25",
      image: "assets/img/sanlorenzo.webp",
      installments: 0,
      clearance : true,
    },
    {
      name: "Camiseta estudiantes",
      price: 70000,
      stock: 2,
      season: "24/25",
      image: "assets/img/estudiantes.jpg",
      installments: 0,
      clearance : true,
    }
  ];

  constructor(){ } 

  ngOnInit(): void{

  }
}
