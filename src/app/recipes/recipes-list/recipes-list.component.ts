import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Recipe } from '../recipes.model';
import { RecipesService } from '../recipes.service';
import {AuthService} from '../../auth/auth.service';
import {DataStoregeService} from '../../shared/data-storege.service';


@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[];

  constructor(private recipeService: RecipesService, private router: Router, private route: ActivatedRoute, private authservice: AuthService, private DBstorage: DataStoregeService,private authService: AuthService ) {
  }

  ngOnInit() {
    this.recipeService.recipesChanged
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipes = recipes;
        }
      );
    this.recipes = this.recipeService.getRecipes();
    if  (this.authService.isAuthenticated()) {
      return this.DBstorage.getRecipes();
    }
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
