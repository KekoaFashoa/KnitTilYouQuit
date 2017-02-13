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
  public projectName: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  generateRows()
  {
    this.navCtrl.push(ProjectPage,
    {
      projectName: this.projectName,
      numRows: this.numRows
    });
    alert(this.projectName);
    alert(this.numRows);
  }

}
