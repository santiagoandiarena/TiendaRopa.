import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Shirt } from './shirts-list/Shirt';

const URL = 'https://686af386e559eba908713838.mockapi.io/shirts';

@Injectable({
  providedIn: 'root'
})
export class ShirtDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Shirt[]> {

    return this.http.get<Shirt[]> (URL) //Equivalente al fetch
                .pipe(
                  tap((shirts : Shirt[]) => shirts.forEach(shirt => shirt.amount = 0))
                );


  }
}
  