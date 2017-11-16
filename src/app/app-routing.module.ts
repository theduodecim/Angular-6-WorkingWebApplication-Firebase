import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {SignupComponent} from './auth/signup/signup.component';
import {SigninComponent} from './auth/signin/signin.component';
import {ShopingListComponent} from './shoping-list/shoping-list.component';
import {HomeComponent} from './core/home/home.component';
import {ContactComponent} from './core/contact/contact.component';
import {NotFoundComponent} from './core/not-found/not-found.component';



const appRoutes: Routes = [
  { path: '', component: HomeComponent} ,
  { path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule'},
  {path: 'singin', component: SigninComponent},
  {path: 'singup', component: SignupComponent},
  {path: 'contact', component: ContactComponent},
  { path: 'shoping-list', component: ShopingListComponent, data: { title: 'Shoping List' } },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
