import {Component, Input, OnInit} from '@angular/core';
import {RecipesService} from '../recipes.service';
import {Recipe} from '../recipes.model';
import {Ingredient} from '../../shared/ingredient.model';
import {RecipesListComponent} from '../recipes-list/recipes-list.component';
import {DataStoregeService} from '../../shared/data-storege.service';


@Component({
  selector: 'app-recipe-database',
  templateUrl: './recipe-database.component.html',
  styleUrls: ['./recipe-database.component.css']
})
export class RecipeDatabaseComponent implements OnInit {
  recipes: Recipe[];

  constructor(private recipeService: RecipesService, private DBstorage: DataStoregeService) {}
  filteredName = '';

ngOnInit() {
  this.recipeService.recipesChanged
    .subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      }
    );
  this.recipes = this.recipeService.getRecipes();
  this.DBstorage.getRecipes();
}

}
/*<li
  class="list-group-item"
*ngFor="let recipeDb of RecipeDB | filter: filteredName: ''"
  >
    *ngFor="let recipeDb of RecipeDB; let i = index"
        [recipe]="recipeDb"
        [index]="i"

        </li>
*/
