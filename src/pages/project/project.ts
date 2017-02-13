import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-project',
  templateUrl: 'project.html'
})
export class ProjectPage {

  public numRows: any;
  public projectName: any;

  constructor(public navCtrl: NavController, public navParams: NavParams)
  {
    this.projectName = this.navParams.get('projectName');
    this.numRows = this.navParams.get('numRows');
  }

  generateRows()
  {
    let rows = [this.numRows];
    alert(rows.length);
  }

}
