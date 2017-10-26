import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import {ShopingListService} from './shoping-list.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css']
})
export class ShopingListComponent implements OnInit, OnDestroy {
ingredients: Ingredient[];
 private subscribe: Subscription;

  constructor(private slService: ShopingListService) {}
  ngOnInit() {
    this.ingredients = this.slService.getIncredients();
    this.subscribe = this.slService.ingredientsChanged
      .subscribe(
        (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }

  onEditItem(index: number) {
    this.slService.startedEditing.next(index);
  }

  ngOnDestroy() {
    this.subscribe.unsubscribe();
}
}

