import { Injectable, ViewChild } from '@angular/core';
import { Nav } from 'ionic-angular';
import * as firebase from 'firebase'

@Injectable()

export class FirebaseData {

  constructor(){

  }

  init() {
    const fireConfig = {
      apiKey: "AIzaSyAg-qw_iqN3mabGHr92jWreTERHfj3iLgU",
      authDomain: "knittilyouquit.firebaseapp.com",
      databaseURL: "https://knittilyouquit.firebaseio.com",
      storageBucket: "knittilyouquit.appspot.com",
      messagingSenderId: "162649197992"
    };

    firebase.initializeApp(fireConfig);
  }

}