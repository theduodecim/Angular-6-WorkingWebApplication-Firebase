import * as firebase from 'firebase';
import {Router} from '@angular/router';
import {Injectable} from '@angular/core';

@Injectable()

export class AuthService {
  token: string;
constructor(private router: Router) {}
  signUpUser(email: string, password: string) {
   return  firebase.auth().createUserWithEmailAndPassword(email, password)
     .then(
       response => {
         this.router.navigate(['/singin']);
          console.log(response)
       }
       )
      .catch(
        error => console.log(error)
      );
  }

  signInUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          this.router.navigate(['/']);
          firebase.auth().currentUser.getToken()
            .then(
              (token: string) => this.token = token // with the user value we convert it in a token
        )
      }
    )
      .catch(
        error => console.log(error)
      );

  }

  logOut() {
    firebase.auth().signOut();
    this.token = null;
}

  getToken() {  // check
    firebase.auth().currentUser.getToken()
      .then(
        (token: string) => this.token = token
      );
    return this.token
  }


  isAuthenticated() {
    return this.token != null;
  }


}
