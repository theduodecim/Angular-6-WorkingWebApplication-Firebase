import { Component } from '@angular/core';
/*import { AngularFire, AuthProviders, AuthMetehods, FirebaseListObservable } from 'angularfire2';*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature = 'recipe'
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
/*  items: FirebaseListObservable<any>;
  name: any;
  msgVal: string= '';
  constructor(public af: AngularFire) {
    this.items = af.database.list('/messages', {
      query: {
        limitTolast: 50
      }
    });
    this.af.auth.subscribe(auth => {
      if (auth) {
        this.name = auth;
      }
    });
  }
  login() {
    this.af.auth.login({
      provider: AuthProviders.Anonymous,
      method: AuthMethods.Anonyumous
    });
  }
  send(desc: string) {
    this.items.push({ message: desc});
    this.msgVal = '';
  }*/
}
