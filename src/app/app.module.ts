import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { RecipesDetailComponent } from './recipes/recipes-detail/recipes-detail.component';
import { RecipesItemComponent } from './recipes/recipes-list/recipes-item/recipes-item.component';
import { ShopingListComponent } from './shoping-list/shoping-list.component';
import { ShopingEditComponent } from './shoping-list/shoping-edit/shoping-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShopingListService } from './shoping-list/shoping-list.service';
import {AppRoutingModule} from './app-routing.module';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {DataStoregeService} from './shared/data-storege.service';
import {RecipesService} from './recipes/recipes.service';
import { AngularFireModule } from 'angularfire2';
import {NotFoundComponent} from './not-found/not-found.component';

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
    RecipesComponent,
    RecipesListComponent,
    RecipesDetailComponent,
    RecipesItemComponent,
    ShopingListComponent,
    ShopingEditComponent,
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    /*AngularFireModule.initializerApp(firebaseConfig)*/
  ],
  providers: [ShopingListService, RecipesService, DataStoregeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
