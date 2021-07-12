import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalProvider } from '../../providers/global/global';
import { DashboardPage } from '../dashboard/dashboard';
import { FindLocationPage } from '../find-location/find-location';
/**
 * Generated class for the NewSalesLeadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-sales-lead',
  templateUrl: 'new-sales-lead.html',
})

export class NewSalesLeadPage {
  title: string;
  appBuildConfig: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public globalService: GlobalProvider) {
    this.title = "New Sales Lead";
    this.appBuildConfig = this.globalService.appBuildConfig;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewSalesLeadPage');
  }
   backToDashboard() {

    this.globalService.setRootPage(DashboardPage);
  }

  goToFindLocation(){
    this.globalService.setRootPage(FindLocationPage);
  }

}
