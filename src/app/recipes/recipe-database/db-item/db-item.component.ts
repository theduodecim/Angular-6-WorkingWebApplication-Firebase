import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../../recipes.model';

@Component({
  selector: 'app-db-item',
  templateUrl: './db-item.component.html',
  styleUrls: ['./db-item.component.css']
})
export class DBItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
