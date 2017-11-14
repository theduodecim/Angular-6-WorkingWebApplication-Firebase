import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignupComponent} from './auth/signup/signup.component';
import {SigninComponent} from './auth/signin/signin.component';
import {ShopingListComponent} from './shoping-list/shoping-list.component';



const appRoutes: Routes = [
  { path: '', redirectTo: '/recipe', pathMatch: 'full'} ,
  {path: 'singin', component: SigninComponent},
  {path: 'singup', component: SignupComponent},
  { path: 'shoping-list', component: ShopingListComponent, data: { title: 'Shoping List' } },
  /*{path: 'not-found', component: NotFoundComponent, pathMatch: 'full' },
  {path: '**', redirectTo: '/not-found', data :{message: 'Not Found'}}*/
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
