import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NewProjectPage } from '../new-project/new-project';

@Component({
  selector: 'page-project',
  templateUrl: 'project.html'
})

export class ProjectPage {

  public projectName: any;
  public numRows: any;
  public numCols: any;
  public header: any;
  public body: any;
  public footer: any;
  public wrapper: any;

  constructor(public navCtrl: NavController, public navParams: NavParams)
  {
    this.generateRows();
  }

  generateRows() {
    this.projectName = this.navParams.get('projectName');
    this.numRows = this.navParams.get('numRows');
    this.numCols = this.navParams.get('numCols');
    //this.header = '<div>';
    this.body = '';
    for(var i = 0; i < this.numRows; i++)
    {
        this.body += '<ion-row>';
        // for(var j = 0; j < this.numCols; j++)
        // {
        //     this.body += '<ion-col>';
        //     this.body += '<ion-item><ion-label>Upcoming roject</ion-label><ion-checkbox [(ngModel)]="upcomingProject"></ion-checkbox></ion-item>';
        //     this.body += '</ion-col>'
        // }
        this.body += '<ion-col offset-50><ion-checkbox [(ngModel)]="upcomingProject">Current</ion-checkbox></ion-col>';
        this.body += '</ion-row>\n';
    }
    //this.footer = '</div>';

    //alert(this.header+this.body+this.footer);
  }

  getWrapper() {
    document.getElementById('wrapper').innerHTML = this.body;
  }
}