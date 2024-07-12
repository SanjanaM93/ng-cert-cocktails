import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cocktail } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CocktailsService {
  favouriteList: string[] = [];
  constructor(private http:HttpClient) { }

  getCocktailDetails() {
    return this.http.get<Cocktail[]>('/cockails');
  }

  getCocktail(id: string) {
    const params = {'id': id}
    return this.http.get<Cocktail>(`cockails/${id}`, {params});
  }

  manageTheFavList(item: string) {
    const isIncluded = this.favouriteList.includes(item);
    if(isIncluded){
      const index = this.favouriteList.indexOf(item);
      this.favouriteList.splice(index,1);
    }
    else {
      this.favouriteList.push(item);
    }

    console.log(this.favouriteList);
    sessionStorage.setItem('favouriteCocktail', JSON.stringify(this.favouriteList));
  }

  getFavouriteCocktail(item: string) {
    const favkey = sessionStorage.getItem('favouriteCocktail');
    if(favkey){
      this.favouriteList = JSON.parse(favkey);
    }
    return this.favouriteList.includes(item);
  }
}
