import { FindSalesActivityPage } from './../find-sales-activity/find-sales-activity';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,MenuController } from 'ionic-angular';
import { GlobalProvider } from '../../providers/global/global';
import { NewSalesActivityPage } from '../new-sales-activity/new-sales-activity';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {
  title: string;

  appBuildConfig = {
    version: 'V1.0.0',
    fullYear: (new Date).getFullYear().toString()
  }

  constructor(public navCtrl: NavController,
     public navParams: NavParams,public menu: MenuController,public globalService: GlobalProvider,) {
    this.title = "Home";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }
  goToNewSalesActivity() {

    this.globalService.setRootPage(NewSalesActivityPage);
  }

  goToFindSalesActivity() {

    this.globalService.setRootPage(FindSalesActivityPage);
  }

}
