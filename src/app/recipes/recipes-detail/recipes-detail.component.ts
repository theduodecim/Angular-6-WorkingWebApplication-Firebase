import { Component, OnInit} from '@angular/core';
import { Recipe } from '../recipes.model';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { RecipesService } from '../recipes.service';
@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
recipe: Recipe;
  id: number;

  constructor(private route: ActivatedRoute, private recipeService: RecipesService, private router:  Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.recipe = this.recipeService.getRecipe(this.id);
        }
        );
   }
  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['../'], {relativeTo: this.route})
  }
}
