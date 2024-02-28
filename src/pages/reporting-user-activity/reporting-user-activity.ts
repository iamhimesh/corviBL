import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams, ModalController, ViewController, MenuController, ToastController } from 'ionic-angular';
import { Constants } from '../../constants';

import { GlobalProvider } from '../../providers/global/global';
import { HttpServiceProvider } from '../../providers/http-service/http-service';
import { AlertService } from '../../providers/util/alert.service';
import { ToastService } from '../../providers/util/toast.service';
import { DashboardPage } from '../dashboard/dashboard';
import { FindSalesActivityPage } from '../find-sales-activity/find-sales-activity';
import { NewSalesActivityPage } from '../new-sales-activity/new-sales-activity';
import { NewSalesLeadPage } from '../new-sales-lead/new-sales-lead';


/**
 * Generated class for the ReportingUserActivityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
export class findVendorList {
  UserId: String;
  BranchCode: String;
  VendorName: String;
  StartTime: String;
  EndTime: String;
  // CustIdCode: string;
}
@IonicPage()
@Component({
  selector: 'page-reporting-user-activity',
  templateUrl: 'reporting-user-activity.html',
})
export class ReportingUserActivityPage {
  title: string;
  appBuildConfig: any;
  BranchTbl: any = [];
  branchCode: any;
  UserDetails: Promise<any>;
  findList: findVendorList;
  VenType: any;
  startDate: any = '';
  endtDate: any = '';
  VendorName: any = '';
  VendorCode: any = '';
  customerInfo: any = [];
  bvalue: any;
  btext: any;
  fetchedData: any;
  fromSaleLeadVal: any;
  userID: string;
  StartTime: String;
  EndTime: String;
  userTbl: any;
  RpuserID: String = '0';
  responseFormAPI: any = [];
  countOfRec: number;
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
    this.title = "Search Reporting User Sales Activity";
    this.appBuildConfig = this.globalService.appBuildConfig;

    //  this.branchCode = localStorage.getItem('branchCode');
    // this.UserDetails = this.globalService.get('userDetails');
    // this.userID = localStorage.getItem('userId');
    // this.fetchedData = this.navParams.get('searchDetails');

    // this.userTbl = this.UserDetails[Object.keys(this.UserDetails)[1]]["Table5"];
    // this.BranchTbl = this.UserDetails[Object.keys(this.UserDetails)[1]]["Table4"];
    this.findList = new findVendorList();
    // debugger
    //     this.bvalue = localStorage.getItem('bvalue');
    //     this.btext = localStorage.getItem('btext');

    this.VenType = 'Search Reporting User Sales Activity';


    this.fromSaleLeadVal = this.navParams.get('fromSaleLeadVal');

    if (this.globalService.isCordovaAvailable()) {
      this.BranchTbl = JSON.parse(localStorage.getItem('BranchTable'));
      this.userTbl = JSON.parse(localStorage.getItem('reportingUSer'));


    } else {
      this.BranchTbl = JSON.parse(localStorage.getItem('BranchTable'));
      this.userTbl = JSON.parse(localStorage.getItem('reportingUSer'));
    }


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
    this.branchCode = this.globalService.globalDefaultBranchCode;
    if (this.globalService.valueForLeadCutomer != '') {

      this.VendorName = this.globalService.valueForLeadCutomer.VendorName;
      // this.customerType = this.globalService.valueForLeadCutomer.VendorType;
      // this.addressline1 = this.globalService.valueForLeadCutomer.Address1;
      // this.addressline2 = this.globalService.valueForLeadCutomer.Address2;
      // this.addressline3 = this.globalService.valueForLeadCutomer.Address3;

      //this.branchCode = this.globalService.valueForLeadCutomer.BranchName;

      // this.vendorname = this.companyName;

    }
    // this.onItemChange();
  }

  // openModal() {

  //   // if (this.branchCode == '0') {
  //   //   this.toastService.show('Please select branch.', 3000, true, 'top', 'toast-container')
  //   //   return;
  //   // }
  //   const profileModal = this.modalCtrl.create(FindSalesActivityPage, { fromSaleLeadVal: '6' });
  //   profileModal.onDidDismiss(data => {
  //     console.log(data);
  //     if (data != undefined) {
  //       this.VendorName = this.globalService.handleJSON(data).VendorName;
  //       // this.Address1 = this.globalService.handleJSON(data).Address1;
  //       // this.ContactPerson = this.globalService.handleJSON(data).ContactPerson;
  //     }

  //   });
  //   profileModal.present();
  //   debugger
  //   this.globalService.store('branchCode', this.branchCode);
  // }


  openModal() {


    // this.saveActivity.BranchCode = this.branchCode;


    if (this.branchCode == '0') {
      this.toastService.show('Please select branch.', 3000, true, 'top', 'toast-container')
      return;
    }
    const profileModal = this.modalCtrl.create(FindSalesActivityPage, { fromSaleLeadVal: '6', branchCode: this.branchCode });
    profileModal.onDidDismiss(data => {
      console.log(data);
      if (data != undefined) {
        this.VendorName = this.globalService.handleJSON(data).VendorName;
      }
    });
    profileModal.present();
    this.globalService.store('branchCode', this.branchCode);
  }

  dismissModal() {
    let data = { 'foo': 'bar' };
    this.viewCtrl.dismiss(data);
  }
  GetSearchSalesActivityReportingToList() {

    if (this.RpuserID == '0') {
      this.toastService.show('Please select reporting user.', 3000, true, 'top', 'toast-container');
      //this.startDate.focus();
      return;
    }

    var a = Date.parse(this.startDate);
    var b = Date.parse(this.endtDate);

    if (b < a) {
      this.toastService.show('End Date should be greater than Start Date.', 3000, true, 'top', 'toast-container')
      return;
    } else if (b == a) {
      this.toastService.show('End Date should be greater than Start Date.', 3000, true, 'top', 'toast-container')
      return;
    }
    this.customerInfo = [];
    this.countOfRec = 0;
    this.findList.UserId = this.RpuserID;
    this.findList.BranchCode = this.branchCode;
    this.findList.VendorName = this.VendorName;
    this.findList.StartTime = this.startDate.replace("T", " ");
    this.findList.EndTime = this.endtDate.replace("T", " ");

    this.http.POST(Constants.Corvi_Services.GetSearchSalesActivityReportingToList, this.findList).then((response) => {

      console.log('response to check login method: ', response);

      if (response['Table'] == '') {
        this.toastService.show('Data not found.', 3000, true, 'top', 'toast-container');
        return;
      } else {
        // this.customerInfo = response['Table'];
        if (this.globalService.isCordovaAvailable()) {
          debugger
          this.responseFormAPI = response;
          this.customerInfo = JSON.parse(this.responseFormAPI)["Table"];
          this.countOfRec = JSON.parse(this.responseFormAPI)["Table"].length;
          // this.flag = true;
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

  // passDataToNSA(custArray) {
  //   debugger
  //   if (this.fromSaleLeadVal == '1') {

  //     this.globalService.valueForLeadCutomer = custArray;
  //     this.viewCtrl.dismiss();
  //     this.globalService.setRootPage(NewSalesLeadPage);
  //   } else {
  //     localStorage.setItem('branchCode', this.branchCode)
  //     this.globalService.store('customerData', custArray);
  //     this.viewCtrl.dismiss();
  //     this.globalService.setRootPage(NewSalesActivityPage);
  //   }
  //   // this.navCtrl.remove(this.navCtrl.getActive().index - 0, 1,);
  // }

  passDataToNSA(item) {
    this.navCtrl.setRoot(NewSalesActivityPage, { data: item, RpuserId: this.RpuserID, branch: this.branchCode });
  }

}
