import {Injectable} from '@angular/core';
import { Recipe } from './recipes.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShopingListService} from '../shoping-list/shoping-list.service';
import {Subject} from 'rxjs/Subject';
import {Http} from '@angular/http';


@Injectable()
export class RecipesService {
  recipesChanged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [
    new Recipe('A test Recipe', 'This is simply a test',
      'http://www.seriouseats.com/recipes/assets_c/2016/05/20160605-frijoles-charros-5-thumb-1500xauto-432297.jpg',
      [new Ingredient('meat', 1), new Ingredient('Frijoles', 25)
      ]),
    new Recipe('chinchu recipe',
      'el chinchu lleno de tripa', 'https://i.ytimg.com/vi/yccm0rMSgHo/maxresdefault.jpg',
      [new Ingredient('tripas', 1), new Ingredient('condimentos', 1)
      ]),
  ];

  constructor(private http: Http, private slService: ShopingListService) {}

  storeServers(servers: any[]) {
    return this.http.post('https://recipe-app-d2a9c.firebaseio.com/data.json', servers);
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  SetRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }
 // this function deletes one of our recipes
  deleteRecipe(index: number) {
    this.recipes.splice(index, 1)
    this.recipesChanged.next(this.recipes.slice());
  }

}
