import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams, ModalController, ViewController, MenuController, ToastController } from 'ionic-angular';
import { Constants } from '../../constants';

import { GlobalProvider } from '../../providers/global/global';
import { HttpServiceProvider } from '../../providers/http-service/http-service';
import { AlertService } from '../../providers/util/alert.service';
import { ToastService } from '../../providers/util/toast.service';
import { DashboardPage } from '../dashboard/dashboard';
import { NewSalesActivityPage } from '../new-sales-activity/new-sales-activity';
import { NewSalesLeadPage } from '../new-sales-lead/new-sales-lead';
import { ReportingUserActivityPage } from '../reporting-user-activity/reporting-user-activity';
import { SearchSalesActivityPage } from '../search-sales-activity/search-sales-activity';
import { WelcomeuserPage } from '../welcomeuser/welcomeuser';

export class findVendorList {
  BranchCode: string; VendorType: string; VendorCode: string; VendorName: string;
  // CustIdCode: string;
}
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
  BranchTbl: any = [];
  branchCode: any = '0';
  UserDetails: Promise<any>;
  findList: findVendorList;
  VenType: any;
  countOfRec: number;
  VendorName: any = '';
  VendorCode: any = '';
  customerInfo: any = [];
  bvalue: any;
  btext: any;
  fetchedData: any;
  fromSaleLeadVal: any;
  responseFormAPI: any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public globalService: GlobalProvider,
    private modalCtrl: ModalController, public viewCtrl: ViewController,
    public nav: NavController,
    public menu: MenuController,
    public toastCtrl: ToastController,

    public http: HttpServiceProvider,
    public alertService: AlertService,
    public toastService: ToastService,
    // public baseURLProvider: BaseURLProvider,
    public fb: FormBuilder) {
    this.title = "Find Customer/Lead-Customer";
    this.appBuildConfig = this.globalService.appBuildConfig;

    //  this.branchCode = localStorage.getItem('branchCode');
    this.UserDetails = this.globalService.get('userDetails');
    debugger
    this.fetchedData = this.navParams.get('searchDetails');

    this.branchCode = this.navParams.get('branchCode');

    // this.BranchTbl = this.UserDetails[Object.keys(this.UserDetails)[1]]["Table4"];

    this.BranchTbl = JSON.parse(localStorage.getItem('BranchTable'));

    this.findList = new findVendorList();
    // debugger
    //     this.bvalue = localStorage.getItem('bvalue');
    //     this.btext = localStorage.getItem('btext');

    this.VenType = 'Lead-Customer';


    this.fromSaleLeadVal = this.navParams.get('fromSaleLeadVal');
    // this.fromSaleLeadVal = this.navParams.get('fromSearch');


  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad FindSalesActivityPage');
  // }
  ionViewDidEnter() {
    if (this.fetchedData != undefined) {
      if (this.fetchedData.length != 0) {
        this.branchCode = this.fetchedData.BranchCode;

      }
    }
  }
  backToDashboard() {

    this.globalService.setRootPage(DashboardPage);
  }

  ngOnInit() {
    // this.branchCode = this.globalService.globalDefaultBranchCode;
  }


  dismissModal() {
    // let data = { 'foo': 'bar' };
    // this.viewCtrl.dismiss(data);
    this.viewCtrl.dismiss();
  }
  searchVenderList() {

    if (this.branchCode == '0') {
      this.toastService.show('Please select branch.', 3000, true, 'top', 'toast-container');
      //this.startDate.focus();
      return;
    }
    this.customerInfo = [];
    this.findList.BranchCode = this.branchCode;
    this.findList.VendorType = this.VenType;
    this.findList.VendorCode = this.VendorCode;
    this.findList.VendorName = this.VendorName;
    this.countOfRec = 0;
    this.http.POST(Constants.Corvi_Services.GetVendorMasterList, this.findList).then((response: any) => {

      console.log('response to check login method: ', response);

      if (response['Table'] == '') {
        this.toastService.show('Data not found.', 3000, true, 'top', 'toast-container');
        return;
      } else {

        //this.customerInfo = response['Table'];

        if (this.globalService.isCordovaAvailable()) {
          if (JSON.parse(response)["Table"].length == 0) {
            this.toastService.show('Data not found.', 3000, true, 'top', 'toast-container');
            return;
          } else {
            this.responseFormAPI = response;
            this.customerInfo = JSON.parse(this.responseFormAPI)["Table"];
            this.countOfRec = JSON.parse(this.responseFormAPI)["Table"].length;
            // this.flag = true;
          }
        } else {
          this.customerInfo = response['Table'];
          this.countOfRec = response['Table'].length
        }
      }
      // this.globalService.store('login_resp', response);

    }, (err) => {
      console.log('error Login ', err);
      console.log('response to check service link: ', Constants.Corvi_Services.Login);
    });
    
    // }
    // else {
    //   this.globalService.showAlert('Invalid Customer Identity Code')
    // }

    // });



  }

  passDataToNSA(custArray) {

    this.globalService.valueForLeadCutomer = custArray;
    this.viewCtrl.dismiss(JSON.stringify(this.globalService.valueForLeadCutomer));
    // // if (this.fromSaleLeadVal == '1') {
    // //   this.globalService.valueForLeadCutomer = custArray;

    // //   this.viewCtrl.dismiss();
    // //   this.globalService.setRootPage(NewSalesLeadPage);
    // //   // this.navCtrl.remove(this.navCtrl.getActive().index - 0, 1,);
    // // } else if (this.fromSaleLeadVal == '5') {
    // //   this.globalService.valueForLeadCutomer = custArray;
    // //   this.viewCtrl.dismiss();
    // //   this.globalService.setRootPage(SearchSalesActivityPage);
    // //   // this.navCtrl.remove(this.navCtrl.getActive().index - 0, 1,);
    // // } else if (this.fromSaleLeadVal == '6') {
    // //   this.globalService.valueForLeadCutomer = custArray;
    // //   this.viewCtrl.dismiss();
    // //   this.globalService.setRootPage(ReportingUserActivityPage);
    // //   // this.navCtrl.remove(this.navCtrl.getActive().index - 0, 1,);

    // // } else {
    // //   this.globalService.valueForLeadCutomer = custArray;
    // //   localStorage.setItem('branchCode', this.branchCode)
    // //   this.globalService.store('customerData', custArray);
    // //   this.viewCtrl.dismiss();
    // //   this.globalService.setRootPage(NewSalesActivityPage);
    // //   // this.navCtrl.remove(this.navCtrl.getActive().index - 0, 1,);
    // // }
    // this.navCtrl.remove(this.navCtrl.getActive().index - 0, 1,);

    // this.globalService.valueForLeadCutomer = custArray;
    // this.navCtrl.remove(this.navCtrl.getActive().index - 0, 1,);
  }

}
