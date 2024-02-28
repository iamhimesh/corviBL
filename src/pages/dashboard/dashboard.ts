// import { FindSalesActivityPage } from './../find-sales-activity/find-sales-activity';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, ModalController, ToastController, Events, Platform } from 'ionic-angular';
import { GlobalProvider } from '../../providers/global/global';
import { ConfigureParametersPage } from '../configure-parameters/configure-parameters';

import { CustomerSettingsPage } from '../customer-settings/customer-settings';
import { FindSalesActivityPage } from '../find-sales-activity/find-sales-activity';
import { NewSalesActivityPage } from '../new-sales-activity/new-sales-activity';
import { NewSalesLeadPage } from '../new-sales-lead/new-sales-lead';
import { ReportingUserActivityPage } from '../reporting-user-activity/reporting-user-activity';
import { ReportingUserActivityPageModule } from '../reporting-user-activity/reporting-user-activity.module';
import { SearchSalesActivityPage } from '../search-sales-activity/search-sales-activity';
import { ShipmentInvoicePage } from '../shipment-invoice/shipment-invoice';
import { ShipmentStatusPage } from '../shipment-status/shipment-status';
import { UpdateJobMilestonePage } from '../update-job-milestone/update-job-milestone';
import { Constants } from '../../constants';
import { HttpServiceProvider } from '../../providers/http-service/http-service';
import { AlertService } from '../../providers/util/alert.service';
import { ToastService } from '../../providers/util/toast.service';
import { BaseURLProvider } from '../../providers/baseUrlGenerator/baseurlgenerator';
import { FormBuilder } from '@angular/forms';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
export class signUpList {
  UserID: string;
  Password: string;
  IdentityCode: string;
  // CustIdCode: string;
}
@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {
  signUpVarList: signUpList;
  title: string;
  appBuildConfig: any;
  profileType;
  dashReporting;

  viewSales = '';
  viewMilestone;
  createMilestone;
  dashSales;
  dashLead;
  dashMilestone;
  dashShipStatus;
  dashShipInvoice;

  isDisabled = true;

  pages: Array<{ title: string, component: any, active: boolean, icon: string }>;
  dashReportingUser: string;
  statusForcheck: any;
  finalStatus: any;

  constructor(public nav: NavController,
    public menu: MenuController,
    public toastCtrl: ToastController,
    public globalService: GlobalProvider,
    public http: HttpServiceProvider,
    public alertService: AlertService,
    public toastService: ToastService,
    public events: Events,
    public platform: Platform,
    public baseUrlProvider: BaseURLProvider,
    public modalCtrl: ModalController,
    // public baseURLProvider: BaseURLProvider,
    public fb: FormBuilder) {
    this.title = "Home";
    this.signUpVarList = new signUpList();
    // debugger
    //     var BranchTbl = JSON.parse(localStorage.getItem('BranchTable'));
  }

  ionViewDidEnter() {
    console.log('view menu items for dashboard: ', this.globalService.menuItems);
    this.viewSales = localStorage.getItem('viewSales');
    console.log('check again milestone: ', this.viewSales);

    this.createMilestone = localStorage.getItem('createMilestone');
    console.log('check here also: ', this.createMilestone);

    this.dashSales = localStorage.getItem('dashSales');
    this.dashReportingUser = localStorage.getItem('dashReportingUser');

    console.log('check RPT ****: ', this.dashReportingUser);
    console.log('check dash Sales: ', this.dashSales);
    this.dashLead = localStorage.getItem('dashLead');
    console.log('check dash Lead: ', this.dashLead);
    this.dashMilestone = localStorage.getItem('dashMilestone');
    console.log('check dash milestone: ', this.dashMilestone);

    this.dashReporting = localStorage.getItem('reportingTo');
    console.log('******ReportingTo*******', this.dashReporting);

    this.dashShipStatus = localStorage.getItem('dashShipStatus');
    console.log('check dash ship status: ', this.dashShipStatus);
    this.dashShipInvoice = localStorage.getItem('dashShipInvoice');
    console.log('check dash ship invoice: ', this.dashShipInvoice);



  }




  ionViewDidLoad() {

    this.profileType = localStorage.getItem('profileType');
    // this.reportingTo = localStorage.getItem('reportingTo');
    console.log('******profile Type*******', this.profileType);

    console.log('ionViewDidLoad DashboardPage');
    this.RegisterNowButton();
  }

  openSupport() {
    window.open('http://support.kalelogistics.in/', '_system');
  }

  openContactModal() {
    // let contactModal = this.modalCtrl.create(ContactUsPage);
    // contactModal.present();

    window.open('https://www.kalelogistics.com/contact-us/', '_system');
  }

  goToNewSalesActivity() {
    this.globalService.valueForLeadCutomer = '';
    this.globalService.setRootPage(NewSalesActivityPage);
  }


  goToReportingUser() {
    this.globalService.valueForLeadCutomer = '';
    this.globalService.setRootPage(ReportingUserActivityPage);
  }

  goToFindSalesActivityPage() {
    this.globalService.valueForLeadCutomer = '';
    // this.globalService.setRootPage(FindSalesActivityPage);
    this.openModal();
  }

  openModal() {
    this.globalService.setRootPage(SearchSalesActivityPage);
    // const profileModal = this.modalCtrl.create(FindSalesActivityPage, { searchDetails: '0' });
    // profileModal.onDidDismiss(data => {
    //   console.log(data);

    // });
    // profileModal.present();

  }

  goToNewSalesLeadPage() {
    this.globalService.valueForLeadCutomer = '';
    this.globalService.setRootPage(NewSalesLeadPage);
  }

  goToUpdateJobMilestonePage() {
    this.globalService.valueForLeadCutomer = '';
    this.globalService.setRootPage(UpdateJobMilestonePage);

    // this.navCtrl.push(UpdateJobMilestonePage);
  }

  goToConfigureParams() {
    this.globalService.valueForLeadCutomer = '';
    this.globalService.setRootPage(ConfigureParametersPage);
  }

  goToCustomerConfigureParams() {
    this.globalService.valueForLeadCutomer = '';
    this.globalService.setRootPage(CustomerSettingsPage);
  }


  temp() {
    this.globalService.valueForLeadCutomer = '';
    this.globalService.setRootPage(ReportingUserActivityPage);
    // this.navCtrl.push(NewSalesActivityPage);

  }

  goToShipmentInvoice() {
    this.globalService.valueForLeadCutomer = '';
    this.globalService.setRootPage(ShipmentInvoicePage);
  }

  goToShipmentStatus() {
    this.globalService.valueForLeadCutomer = '';
    this.globalService.setRootPage(ShipmentStatusPage);
  }

  RegisterNowButton() {


    this.signUpVarList.UserID = 'BLL';
    this.signUpVarList.Password = 'A1@add';
    this.signUpVarList.IdentityCode = 'BLL';

    this.baseUrlProvider.setBaseURL('BLL').then((msg) => {
      console.log('check msg from login()', msg);
      // if (msg != null && msg != '') {
      // console.log('response to check 1');
      this.http.POST(Constants.Corvi_Services.RegisterNowButton, this.signUpVarList).then((response: any) => {
        console.log('response to check login method: ', response);
        this.statusForcheck = response;
        this.finalStatus = this.statusForcheck.replace(/^"|"$/g, '');
      }, (err) => {
        console.log('error Login ', err);

      });
      // }
      // else {
      //   this.globalService.showAlert('Invalid Customer Identity Code')
      // }

    }); // this.baseUrlProvider ends

  }



}
