// import { FindSalesActivityPage } from './../find-sales-activity/find-sales-activity';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,MenuController } from 'ionic-angular';
import { GlobalProvider } from '../../providers/global/global';
import { ConfigureParametersPage } from '../configure-parameters/configure-parameters';
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
  profileType;

  constructor(public navCtrl: NavController,
     public navParams: NavParams,public menu: MenuController,public globalService: GlobalProvider,) {
    this.title = "Home";
  }

  ionViewDidLoad() {
    this.profileType = localStorage.getItem('profileType');
    console.log('******', this.profileType);
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

    // this.navCtrl.push(UpdateJobMilestonePage);
  }

  goToConfigureParams(){
    this.globalService.setRootPage(ConfigureParametersPage);
  }

}
