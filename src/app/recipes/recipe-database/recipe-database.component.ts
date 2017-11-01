import {Component, Input} from '@angular/core';
import {RecipesService} from '../recipes.service';
import {Recipe} from '../recipes.model';
import {Ingredient} from '../../shared/ingredient.model';


@Component({
  selector: 'app-recipe-database',
  templateUrl: './recipe-database.component.html',
  styleUrls: ['./recipe-database.component.css']
})
export class RecipeDatabaseComponent {
  @Input() recipe: Recipe;
  @Input() index: number;
  recipes: Recipe[];
  constructor(private recipeService: RecipesService) {}
   RecipeDB: Recipe[] = [
    new Recipe('Frascos', 'Frascos con muchas cosas',
      'http://www.webconsultas.com/sites/default/files/styles/encabezado_articulo/public/temas/conservacion-alimentos_0.jpg?itok=o-40aP4U',
      [new Ingredient('magia', 1), new Ingredient('mas magia', 25)
      ]),
    new Recipe('la comida que le gusta a guido',
      'vegetales', 'https://static.vix.com/es/sites/default/files/imj/otramedicina/A/Alimentos-para-aliviar-la-fibromialgia-5.jpg',
      [new Ingredient('algo', 1), new Ingredient('', 1)
      ]),
    new Recipe('pizza',
      'pizza random', 'http://i.espectaculos.televisa.com/2017/07/pizza.jpg',
      [new Ingredient('something', 1), new Ingredient('condimentos', 1)
      ]),

    new Recipe('canasta',
      'muchos vegetales', 'http://www.revistaaventura.com.ar/wp-content/uploads/2017/04/alimentos.jpg',
      [new Ingredient('tripas', 1), new Ingredient('condimentos', 1)
      ]),

  ];
  filteredName = '';
    onSave() {
      this.recipeService.storeServers(this.RecipeDB)
        .subscribe(
          (response) => console.log(response),
          (error) => console.log(error)
        );
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
