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
    this.header = '<table border="1">\n';
    this.body = '';
    for(var i = 0; i < this.numRows; i++)
    {
        this.body += '<tr>';
        for(var j = 0; j < this.numCols; j++)
        {
            this.body += '<td>';
            this.body += 'Cell ' + i + ',' + j;
            this.body += '</td>'
        }
        this.body += '</tr>\n';
    }
    this.footer = '</table>';

    alert(this.header+this.body+this.footer);
  }

  getWrapper() {
    document.getElementById('wrapper').innerHTML = this.header + this.body + this.footer;
  }
}