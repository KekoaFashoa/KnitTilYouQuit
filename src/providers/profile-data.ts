import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()

export class ProfileData
{

  public userProfile: firebase.database.Reference;
  public currentUser: firebase.User;

  constructor(){
    this.currentUser = firebase.auth().currentUser;
    this.userProfile = firebase.database().ref('/userProfile');
  }

  getUserProfile(): firebase.database.Reference
  {
    return this.userProfile.child(this.currentUser.uid);
  }

  updateName(firstName: string, lastName: string): firebase.Promise<any>
  {
    return this.userProfile.child(this.currentUser.uid).update({
      firstName: firstName,
      lastName: lastName,
    });
  }

  updateDOB(birthDate: string): firebase.Promise<any>
  {
    return this.userProfile.child(this.currentUser.uid).update({
      birthDate: birthDate,
    });
  }

  updateEmail(newEmail: string, password: string): firebase.Promise<any>
  {
    const credential =  firebase.auth.EmailAuthProvider
      .credential(this.currentUser.email, password);

    return this.currentUser.reauthenticate(credential).then( user => {
      this.currentUser.updateEmail(newEmail).then( user => {
        this.userProfile.child(this.currentUser.uid)
          .update({ email: newEmail });
      });
    });
  }

  updatePassword(newPassword: string, oldPassword: string): firebase.Promise<any>
  {
    const credential =  firebase.auth.EmailAuthProvider
      .credential(this.currentUser.email, oldPassword);

    return this.currentUser.reauthenticate(credential).then( user => {
      this.currentUser.updatePassword(newPassword).then( user => {
        console.log("Password Changed");
      }, error => {
        console.log(error);
      });
    });
  }

}