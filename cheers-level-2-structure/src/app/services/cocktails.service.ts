import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cocktail } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CocktailsService {
  
  constructor(private http:HttpClient) { }

  getCocktailDetails() {
    return this.http.get<Cocktail[]>('/cockails');
  }

  getCocktail(id: string) {
    const params = {'id': id}
    return this.http.get<Cocktail>(`cockails/${id}`, {params});
  }

}
