import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {RecipesService} from '../recipes/recipes.service';
import { Recipe } from '../recipes/recipes.model';
import 'rxjs/add/operator/map';
import {AuthService} from '../auth/auth.service';

@Injectable()
export class DataStoregeService {

  constructor(private http: Http, private recipeService: RecipesService, private authservice: AuthService) {}

  storeRecipe() {
    const token =  this.authservice.getToken();
  return this.http.put('https://recipe-app-d2a9c.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes());
  }

  getRecipes() {
  const token =  this.authservice.getToken();
  this.http.get('https://recipe-app-d2a9c.firebaseio.com/recipes.json?auth=' + token)
    .map(
      (response: Response) => {
       const recipes: Recipe[] = response.json();
       for (const recipe of recipes) {
         if (!recipe['ingredients']) {
           console.log(recipe);
           recipe['ingredients'] = [];
         }
       }
       return recipes;
    }
    )
    .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.SetRecipes(recipes);
        }
      );
  }

}
