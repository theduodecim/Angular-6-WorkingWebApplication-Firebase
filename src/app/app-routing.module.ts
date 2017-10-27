import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import {ShopingListComponent} from './shoping-list/shoping-list.component';

import {RecipeStartComponent} from './recipes/recipe-start/recipe-start.component';
import {RecipesDetailComponent} from './recipes/recipes-detail/recipes-detail.component';
import {RecipeEditComponent} from './recipes/recipe-edit/recipe-edit.component';
import {NotFoundComponent} from './not-found/not-found.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipe', pathMatch: 'full'} ,
  { path: 'recipe', component: RecipesComponent, children: [
    {path: '', component: RecipeStartComponent},
    {path: 'new', component: RecipeEditComponent},
    {path: ':id',  component: RecipesDetailComponent},
    {path: ':id/edit', component: RecipeEditComponent}
  ]},
  { path: 'shoping-list', component: ShopingListComponent, data: { title: 'Shoping List' } },
  {path: 'not-found', component: NotFoundComponent, pathMatch: 'full' },
  {path: '**', redirectTo: '/not-found', data :{message: 'Not Found'}}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
