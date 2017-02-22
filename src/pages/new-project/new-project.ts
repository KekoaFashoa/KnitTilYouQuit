import { Component, Injectable } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProjectPage } from '../project/project';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  passRowsInfo()
  {
    this.navCtrl.push(ProjectPage,
    {
      projectName: this.projectName,
      numRows: this.numRows,
      numCols: this.numCols
    });
  }
}
