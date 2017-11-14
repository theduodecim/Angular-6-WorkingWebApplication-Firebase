import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params } from '@angular/router';
import {HeaderComponent} from '../../header/header.component';

@Component({
  selector: 'app-recipe-start',
  templateUrl: './recipe-start.component.html',
  styleUrls: ['./recipe-start.component.css']
})
export class RecipeStartComponent implements OnInit {
  recipe: {id: number, name: string};
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }


}
