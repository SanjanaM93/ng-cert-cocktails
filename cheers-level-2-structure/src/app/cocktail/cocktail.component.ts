import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CocktailsService } from '../services/cocktails.service';
import { Cocktail } from '../models';

@Component({
  selector: 'app-cocktail',
  standalone: true,
  imports: [ RouterModule, CommonModule ],
  templateUrl: './cocktail.component.html',
  styleUrl: './cocktail.component.scss'
})
export class CocktailComponent implements OnInit {
  constructor(private service: CocktailsService, private route: ActivatedRoute) {}
  cocktailDesc: Cocktail = {}
  ngOnInit() {
    this.service.getCocktail(this.route.snapshot.params['id']).subscribe((response: Cocktail) => {
      this.cocktailDesc = response;
      this.cocktailDesc.drinkType = this.cocktailDesc.isAlcoholic ? 'Alcoholic' : 'Non-alcoholic';
    })
  }
}
