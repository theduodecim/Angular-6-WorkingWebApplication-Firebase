import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {RecipesService} from '../recipes/recipes.service';
import { Recipe } from '../recipes/recipes.model';
import 'rxjs/add/operator/map';


@Injectable()
export class DataStoregeService {

  constructor(private http: Http, private recipeService: RecipesService) {}

  storeRecipe() {
  return this.http.put('https://recipe-app-d2a9c.firebaseio.com/recipes.json', this.recipeService.getRecipes());
  }

  getRecipes() {
  this.http.get('https://recipe-app-d2a9c.firebaseio.com/recipes.json')
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
