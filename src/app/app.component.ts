import {Component, OnInit} from '@angular/core';
/*import { AngularFire, AuthProviders, AuthMetehods, FirebaseListObservable } from 'angularfire2';*/
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  loadedFeature = 'recipe'
  onNavigate(feature: string) {
    this.loadedFeature = feature;
    }
    ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyBDB1VVZNFUXNsOqGA53QiJSeyld8QdGCs",
      authDomain: "recipe-app-d2a9c.firebaseapp.com"
    });
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
