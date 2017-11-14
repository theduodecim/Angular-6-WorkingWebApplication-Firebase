import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SigninComponent} from './signin/signin.component';
import {SignupComponent} from './signup/signup.component';



const authRoutes: Routes = [
    {path: 'singin', component: SigninComponent},
    {path: 'singup', component: SignupComponent},
  ];

@NgModule({
  imports: [
    RouterModule.forChild(authRoutes)
  ],
  exports: [
    RouterModule
  ]
})



export class AuthRoutingModule {}
