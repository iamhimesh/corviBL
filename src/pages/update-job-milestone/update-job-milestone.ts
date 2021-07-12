import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalProvider } from '../../providers/global/global';
import { DashboardPage } from '../dashboard/dashboard';

/**
 * Generated class for the UpdateJobMilestonePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-update-job-milestone',
  templateUrl: 'update-job-milestone.html',
})
export class UpdateJobMilestonePage {

  title: string;
  appBuildConfig: any;

  constructor(public navCtrl: NavController, public navParams: NavParams
    ,public globalService: GlobalProvider) {
    this.title = "Update Job Miles";
    this.appBuildConfig = this.globalService.appBuildConfig;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdateJobMilestonePage');
  }
  backToDashboard() {

    this.globalService.setRootPage(DashboardPage);
  }

}
