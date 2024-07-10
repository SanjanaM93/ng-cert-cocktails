import { Routes } from '@angular/router';
import { CocktailsListComponent } from './cocktails-list/cocktails-list.component';
import { CocktailComponent } from './cocktail/cocktail.component';

export const routes: Routes = [
    { path: '', component: CocktailsListComponent},
    { path: 'cocktail-list', component: CocktailsListComponent},
    { path:'cocktail-details/:id', component:CocktailComponent},
    { path: '**', redirectTo: 'cocktail-list' }
];
