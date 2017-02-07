import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { NewProjectPage } from '../new-project/new-project';
import { ProjectPage } from '../project/project';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }

  goToLogin(){
    this.navCtrl.push(LoginPage);
  }

  goToNewProject(){
    this.navCtrl.push(NewProjectPage);
  }

  goToProject(){
    this.navCtrl.push(ProjectPage);
  }

}
