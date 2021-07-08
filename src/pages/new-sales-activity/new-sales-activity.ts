import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,MenuController } from 'ionic-angular';
import { GlobalProvider } from '../../providers/global/global';
import { DashboardPage } from '../dashboard/dashboard';
/**
 * Generated class for the NewSalesActivityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-sales-activity',
  templateUrl: 'new-sales-activity.html',
})
export class NewSalesActivityPage {
  title: string;
  appBuildConfig = {
    version: 'V1.0.0',
    fullYear: (new Date).getFullYear().toString()
  }

  constructor(public navCtrl: NavController, public navParams: NavParams,public globalService: GlobalProvider,
              public menuCtrl: MenuController) {
    this.title = "New Sales Activity";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewSalesActivityPage');
  }

  backToDashboard() {

    this.globalService.setRootPage(DashboardPage);
  }

}
