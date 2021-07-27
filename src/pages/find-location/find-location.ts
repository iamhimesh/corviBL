import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalProvider } from '../../providers/global/global';
import { DashboardPage } from '../dashboard/dashboard';

/**
 * Generated class for the FindLocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-find-location',
  templateUrl: 'find-location.html',
})
export class FindLocationPage {

  title: string;
  appBuildConfig: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public globalService: GlobalProvider) {
    this.title = "Find Location";
    this.appBuildConfig = this.globalService.appBuildConfig;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad FindLocationPage');
  }

  backToDashboard() {

    this.globalService.setRootPage(DashboardPage);
  }

}
