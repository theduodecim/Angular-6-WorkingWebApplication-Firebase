import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {HomeComponent} from './home/home.component';
import {HeaderComponent} from './header/header.component';
import {CommonModule} from '@angular/common';
import {AppRoutingModule} from '../app-routing.module';
import {ContactComponent} from './contact/contact.component';
import {ShopingListService} from '../shoping-list/shoping-list.service';
import {RecipesService} from '../recipes/recipes.service';
import {DataStoregeService} from '../shared/data-storege.service';
import {AuthService} from '../auth/auth.service';

@NgModule({
  declarations:[
    HomeComponent,
    HeaderComponent,
    ContactComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
  ],
  exports: [
    HeaderComponent, // this needs to be exported(included) if you are using selectors in the root component
    AppRoutingModule, // if we are using this module in the root component we need to export the Approuting module
],
  providers: [
    ShopingListService, RecipesService, DataStoregeService, AuthService
  ]
})



export class CoreModule {}
