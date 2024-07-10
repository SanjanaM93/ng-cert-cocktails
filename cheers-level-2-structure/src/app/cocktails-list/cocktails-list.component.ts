import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CocktailsService } from './../services/cocktails.service'
import { Cocktail } from '../models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cocktails-list',
  standalone: true,
  imports: [ RouterModule, CommonModule ],
  templateUrl: './cocktails-list.component.html',
  styleUrl: './cocktails-list.component.scss'
})
export class CocktailsListComponent implements OnInit {
constructor(private http: HttpClient, private service: CocktailsService) {}
cocktailsList: Cocktail[] = [];
ngOnInit() {
  this.service.getCocktailDetails().subscribe((response: Cocktail[])=> {
    console.log(response);
    response.forEach((data: Cocktail)=> {
      data.drinkType = data.isAlcoholic ? 'Alcoholic' : 'Non-Alcoholic';
      data.drinkIngredients = data.ingredients?.join('|');
      this.cocktailsList.push(data);    
    });
  })
}

}
