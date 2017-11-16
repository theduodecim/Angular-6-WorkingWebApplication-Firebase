import {NgModule} from '@angular/core';
import {RecipesComponent} from './recipes.component';
import {RecipesListComponent} from './recipes-list/recipes-list.component';
import {RecipeFilterPipe} from './recipe-filter-pipe';
import {RecipeDatabaseComponent} from './recipe-database/recipe-database.component';
import {RecipeStartComponent} from './recipe-start/recipe-start.component';
import {RecipeEditComponent} from './recipe-edit/recipe-edit.component';
import {RecipesItemComponent} from './recipes-list/recipes-item/recipes-item.component';
import {RecipesDetailComponent} from './recipes-detail/recipes-detail.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RecipesRoutingModule} from './recipes-routing.module';
import {DBItemComponent} from './recipe-database/db-item/db-item.component';
import {SharedModule} from '../shared/shared.module';
import {NotFoundComponent} from '../core/not-found/not-found.component';


@NgModule({
  declarations: [
    RecipesComponent,
    RecipesListComponent,
    RecipesDetailComponent,
    RecipesItemComponent,
    RecipeEditComponent,
    RecipeStartComponent,
    RecipeDatabaseComponent,
    RecipeFilterPipe,
    DBItemComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule, // aways CommonModule is imported to give acces to the common features like ngclass ng for ng if
    ReactiveFormsModule,
    RecipesRoutingModule,
    SharedModule
  ]
})

export class RecipesModule {}
