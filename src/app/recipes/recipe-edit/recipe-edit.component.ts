import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {RecipesService} from '../recipes.service';
import {Recipe} from '../recipes.model';
@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
id: number;
editMode = false;
recipeForm: FormGroup;
  constructor(private route: ActivatedRoute,
              private recipeService: RecipesService,
              private router: Router) {}  // router to navigate awayyyyyyyyyyyyyy awayy in the cancel function


  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'];
          this.initForm();
        }
      );
  }

  onSubmit() {
   /* const newRecipe = new Recipe (this.recipeForm.value['name'],
      this.recipeForm.value['name'],
        this.recipeForm.value['description'],
        this.recipeForm.value['imagePath']
      );*/
    if (this.editMode) {
      this.recipeService.updateRecipe(this.id, this.recipeForm.value);
    } else {
      this.recipeService.addRecipe(this.recipeForm.value);
    }
    this.onCancel()
  }

 /* onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredinets')).push(
      new FormGroup({
        'name': new FormControl(),
        'amount': new FormControl(),
      })
    );
  }*/

  private initForm() {
      let recipeName = '';
      let recipeImagePath = '';
      let recipeDescription = '';


      if (this.editMode) {
        const recipe = this.recipeService.getRecipe(this.id);
        recipeName = recipe.name;
        recipeImagePath = recipe.imagePath;
        recipeDescription = recipe.description;
      }
        this.recipeForm = new FormGroup({
          'name': new FormControl(recipeName, Validators.required),
          'imagePath': new FormControl(recipeImagePath, Validators.required),
          'description': new FormControl(recipeDescription, Validators.required),
        });
    }
    onCancel(){
      this.router.navigate(['../'], {relativeTo: this.route})  //check that function this is how we navigate away from things...
    }
  }

/* let recipeIngredients = new FormArray([]); */
/*
    if (recipe['ingredients']) {
      for (let ingredient of recipe.ingredients) {
        recipeIngredients.push(
          new FormGroup({
            'name': new FormControl(ingredient.name),
            'amount': new FormControl(ingredient.amount)
          })
        );
      }
    }
  }*/
