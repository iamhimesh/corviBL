import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { GlobalProvider } from '../../providers/global/global';
import { DashboardPage } from '../dashboard/dashboard';


/**
 * Generated class for the FindSalesActivityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-find-sales-activity',
  templateUrl: 'find-sales-activity.html',
})
export class FindSalesActivityPage {
  title: string;
  appBuildConfig: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public globalService: GlobalProvider ) {
    this.title = "Find Sales Activity";
    this.appBuildConfig = this.globalService.appBuildConfig;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FindSalesActivityPage');
  }

  backToDashboard() {

    this.globalService.setRootPage(DashboardPage);
  }



}
