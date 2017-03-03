import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-upcoming-projects',
  templateUrl: 'upcoming-projects.html'
})

export class UpcomingProjectsPage
{

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpcomingProjectsPage');
  }

}
