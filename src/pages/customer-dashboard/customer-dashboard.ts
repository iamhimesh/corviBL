import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, ModalController } from 'ionic-angular';
import { GlobalProvider } from '../../providers/global/global';
import { searchCustomerJob } from '../customer-job-search/customer-job-search';
import { FindSalesActivityPage } from '../find-sales-activity/find-sales-activity';
import { NewSalesActivityPage } from '../new-sales-activity/new-sales-activity';
import { ReportingUserActivityPage } from '../reporting-user-activity/reporting-user-activity';
import { ReportingUserActivityPageModule } from '../reporting-user-activity/reporting-user-activity.module';
import { ShipmentInvoicePage } from '../shipment-invoice/shipment-invoice';

import { ShipmentStatusPage } from '../shipment-status/shipment-status';
import { UpdateJobMilestonePage } from '../update-job-milestone/update-job-milestone';

/**
 * Generated class for the CustomerDashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-customer-dashboard',
  templateUrl: 'customer-dashboard.html',
})
export class CustomerDashboardPage {
  title: string;
  appBuildConfig: any;
  constructor(public navCtrl: NavController,
    public navParams: NavParams, public menu: MenuController,
    public globalService: GlobalProvider, private modalCtrl: ModalController,) {

    this.title = "Home";
  }
  ionViewDidLoad() {
   
    console.log('ionViewDidLoad CustomerDashboardPage');
  }


  goToFindSalesActivityPage() {

    // this.globalService.setRootPage(FindSalesActivityPage);
    this.openModal();
  }

  goToShipmentInvoice() {
    this.globalService.valueForLeadCutomer = '';
    this.globalService.setRootPage(ShipmentInvoicePage);
  }

  openModal() {

    const profileModal = this.modalCtrl.create(FindSalesActivityPage, { searchDetails: '0' });
    profileModal.onDidDismiss(data => {
      console.log(data);

    });
    profileModal.present();

  }

  goToShipmentStatus() {

   this.globalService.setRootPage(ShipmentStatusPage);
   // this.globalService.setRootPage(searchCustomerJob);
  }

  goToUpdateJobMilestonePage() {

    this.globalService.setRootPage(UpdateJobMilestonePage);
  }
  goToConfigureParam() {

    this.globalService.setRootPage(NewSalesActivityPage);
    // this.navCtrl.push(NewSalesActivityPage);

  }




}
