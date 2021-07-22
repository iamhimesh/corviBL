import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,MenuController } from 'ionic-angular';
import { GlobalProvider } from '../../providers/global/global';
import { FindSalesActivityPage } from '../find-sales-activity/find-sales-activity';
import { NewSalesActivityPage } from '../new-sales-activity/new-sales-activity';
import { NewSalesLeadPage } from '../new-sales-lead/new-sales-lead';
import { UpdateJobMilestonePage } from '../update-job-milestone/update-job-milestone';

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
  appBuildConfig: any;
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

  goToFindSalesActivityPage() {

    this.globalService.setRootPage(FindSalesActivityPage);
  }

  goToNewSalesLeadPage() {

    this.globalService.setRootPage(NewSalesLeadPage);
  }

  goToUpdateJobMilestonePage() {

    this.globalService.setRootPage(UpdateJobMilestonePage);
  }

}
