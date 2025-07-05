import { Component, Input, OnInit, Output } from '@angular/core';
import { Shirt } from '../shirts-list/Shirt';
import { OutgoingMessage } from 'http';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-number',
  standalone: false,
  templateUrl: './input-number.component.html',
  styleUrl: './input-number.component.scss'
})
export class InputNumberComponent implements OnInit {

  constructor() { }

  @Input() amount!: number; 

  @Input() max!: number;

  @Output() amountChange: EventEmitter<number> = new EventEmitter<number>(); 

  @Output() maxReached: EventEmitter<string> = new EventEmitter<string>();

  //inputs son corchetes []
  //outputs son parentesis () - Eventos de salida
  // [()] son input-output - 2 way data binding
  
  ngOnInit(): void {

  }

  upAmount(): void {
    if (this.amount < this.max) {
      this.amount++;
      this.amountChange.emit(this.amount);
    } else{
      this.maxReached.emit("Se alcanzo el stock");
    }
  }

  downAmount(): void {
    if (this.amount > 0) {
      this.amount--;
      this.amountChange.emit(this.amount);
    }
  }

  allowOnlyNumbers(event: KeyboardEvent): void {
    const key = event.key;

    // Solo permitir teclas 0-9
    if (!/^[0-9]$/.test(key)) {
      event.preventDefault();
      this.amountChange.emit(this.amount);
    }
  }

  validateStock(event: Event): void {
    const input = event.target as HTMLInputElement;
    let value = Number(input.value);

    // Limitar por stock
    if (value > this.max) {
      value = this.max;
      input.value = String(value);
      this.amountChange.emit(this.amount);
    }

    // Actualizar el modelo
    this.amount = value;
  }

}
