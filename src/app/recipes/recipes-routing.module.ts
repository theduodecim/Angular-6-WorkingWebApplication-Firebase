import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RecipeEditComponent} from './recipe-edit/recipe-edit.component';
import {RecipesDetailComponent} from './recipes-detail/recipes-detail.component';
import {RecipeStartComponent} from './recipe-start/recipe-start.component';
import {RecipesComponent} from './recipes.component';
import {AuthGuardService} from '../auth/auth-guard.service';
import {RecipeDatabaseComponent} from './recipe-database/recipe-database.component';

const recipesRoutes: Routes = [
  { path: 'recipe', component: RecipesComponent, children: [
    {path: '', component: RecipeStartComponent},
    {path: 'new', component: RecipeEditComponent, canActivate: [AuthGuardService] } ,
    {path: ':id',  component: RecipesDetailComponent},
    {path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuardService] }
  ]},
  { path: 'recipe-database', component: RecipeDatabaseComponent, canActivate: [AuthGuardService] },
];


@NgModule({
  imports: [
    RouterModule.forChild(recipesRoutes) //you most only foorRoot only in your root if you are not in that please you need to call ForChild
  ],
  exports: [
    RouterModule
  ]
})
export class RecipesRoutingModule {}
