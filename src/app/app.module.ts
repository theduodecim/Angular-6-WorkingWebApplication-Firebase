import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpModule} from '@angular/http';
import {RecipesModule} from './recipes/recipes.module';
import {SharedModule} from './shared/shared.module';
import {ShopingModule} from './shoping-list/Shoping-module';
import {AuthModule} from './auth/auth-module';
import {CoreModule} from './core/core.module';

/*export const firebaseConfig = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  storageBucket: '',
  messagingSenderId: ''
};*/


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule, // the browser module give us the same acces of common module and some features needed when the application starts
    AppRoutingModule,
    HttpModule,
    RecipesModule,
    SharedModule,
    ShopingModule,
    AuthModule,
    CoreModule
    /*AngularFireModule.initializerApp(firebaseConfig)*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
