import { Component, Injectable } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProjectPage } from '../project/project';
import { UpcomingProjectsPage } from '../upcoming-projects/upcoming-projects';

@Injectable()
@Component({
  selector: 'page-new-project',
  templateUrl: 'new-project.html'
})

export class NewProjectPage {

  public numRows: any;
  public numCols: any;
  public projectName: any;
  public header: any;
  public body: any;
  public footer: any;
  public wrapper: any;
  public upcomingProject: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  passRowsInfo()
  {
    if(this.upcomingProject == true)
    {
      this.navCtrl.push(UpcomingProjectsPage,
      {
        projectName: this.projectName,
        numRows: this.numRows,
        numCols: this.numCols
      });
    }
    else
    {
      this.navCtrl.push(ProjectPage,
      {
        projectName: this.projectName,
        numRows: this.numRows,
        numCols: this.numCols
      });
    }
  }
}
