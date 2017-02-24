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
import { UpcomingProjectsPage } from '../pages/upcoming-projects/upcoming-projects';

// Providers
import { FirebaseData } from '../providers/firebase-data';
import { AuthData } from '../providers/auth-data';
import { ProfileData } from '../providers/profile-data';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    NewProjectPage,
    ProjectPage,
    SignupPage,
    ResetPasswordPage,
    ProfilePage,
    UpcomingProjectsPage
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
    ProfilePage,
    UpcomingProjectsPage
  ],
  providers: [
    FirebaseData,
    AuthData,
    ProfileData
  ]
})
export class AppModule {}
