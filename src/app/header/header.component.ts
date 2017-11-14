import {Component, Input} from '@angular/core';
import { DataStoregeService } from '../shared/data-storege.service';
import { Response } from '@angular/http';
import {AuthService} from '../auth/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private DataStService: DataStoregeService, private authservice: AuthService) {}
  icon: string;
  fullPath: string;

  onSaveData() {
    this.DataStService.storeRecipe()
      .subscribe(
        (response: Response) => {
          console.log(response);
      }
      );
  }

  onLogOut() {
    this.authservice.logOut();
  }

  onFetchData () {
    this.DataStService.getRecipes();
}
getIcon(){
    this.fullPath = "https://i.ytimg.com/vi/yccm0rMSgHo/maxresdefault.jpg" + this.icon;
}
}
