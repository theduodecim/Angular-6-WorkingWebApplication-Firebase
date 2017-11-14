import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShopingListService } from './shoping-list/shoping-list.service';
import {AppRoutingModule} from './app-routing.module';
import {HttpModule} from '@angular/http';
import {DataStoregeService} from './shared/data-storege.service';
import {RecipesService} from './recipes/recipes.service';
import {NotFoundComponent} from './not-found/not-found.component';
import {AuthService} from './auth/auth.service';
import {AuthGuardService} from './auth/auth-guard.service';
import {RecipesModule} from './recipes/recipes.module';
import {SharedModule} from './shared/shared.module';
import {ShopingModule} from './shoping-list/Shoping-module';
import {AuthModule} from './auth/auth-module';

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
    HeaderComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule, // the browser module give us the same acces of common module and some features needed when the application starts
    AppRoutingModule,
    HttpModule,
    RecipesModule,
    SharedModule,
    ShopingModule,
    AuthModule
    /*AngularFireModule.initializerApp(firebaseConfig)*/
  ],
  providers: [ShopingListService, RecipesService, DataStoregeService, AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
