import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';

// Pages
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { NewProjectPage } from '../pages/new-project/new-project';
import { ProjectPage } from '../pages/project/project';
import { SignupPage } from '../pages/signup/signup';
import { ResetPasswordPage } from '../pages/reset-password/reset-password';
import { ProfilePage } from '../pages/profile/profile';

// Providers
import { FirebaseData } from '../providers/firebase-data';
import { AuthData } from '../providers/auth-data';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    NewProjectPage,
    ProjectPage,
    SignupPage,
    ResetPasswordPage,
    ProfilePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    NewProjectPage,
    ProjectPage,
    SignupPage,
    ResetPasswordPage,
    ProfilePage
  ],
  providers: [
    FirebaseData,
    AuthData
  ]
})
export class AppModule {}
