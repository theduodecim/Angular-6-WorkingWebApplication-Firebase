import { Component } from '@angular/core';
import { DataStoregeService } from '../shared/data-storege.service';
import { Response } from '@angular/http';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private DataStService: DataStoregeService) {}

  onSaveData() {
    this.DataStService.storeRecipe()
      .subscribe(
        (response: Response) => {
          console.log(response);
      }
      );
  }

  onFetchData () {
    this.DataStService.getRecipes();
}

}
