import { Component, NgZone } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';

import * as firebase from 'firebase';

@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})

export class MyApp
{

  rootPage: any;
  zone: NgZone;

  constructor(platform: Platform) {
    this.zone = new NgZone({});
    firebase.initializeApp({
      apiKey: "AIzaSyAg-qw_iqN3mabGHr92jWreTERHfj3iLgU",
      authDomain: "knittilyouquit.firebaseapp.com",
      databaseURL: "https://knittilyouquit.firebaseio.com",
      storageBucket: "knittilyouquit.appspot.com",
      messagingSenderId: "162649197992"
    });

    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      this.zone.run( () => {
        if (!user) {
          this.rootPage = LoginPage;
          unsubscribe();
        } else { 
          this.rootPage = HomePage;
          unsubscribe();
        }
      });     
    });

    platform.ready().then(() => {
      StatusBar.styleDefault();
    });
  }
  
}