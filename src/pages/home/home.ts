import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { NewProjectPage } from '../new-project/new-project';
import { ProjectPage } from '../project/project';
import { AuthData } from '../../providers/auth-data';
import { ProfilePage } from '../profile/profile';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public authData: AuthData) {
    
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

  goToProfile(){
    this.navCtrl.push(ProfilePage);
  }

  logOut(){
    this.authData.logoutUser().then(() => {
      this.navCtrl.setRoot(LoginPage);
    });
  }

}
