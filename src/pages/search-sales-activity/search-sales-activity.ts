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
import { WelcomeuserPage } from '../welcomeuser/welcomeuser';


/**
 * Generated class for the SearchSalesActivityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
export class findVendorList {
  BranchCode: string; VendorType: string; VendorCode: string; VendorName: string;
  CreatedDate: any;
  UserId: any;
  // CustIdCode: string;
}

@IonicPage()
@Component({
  selector: 'page-search-sales-activity',
  templateUrl: 'search-sales-activity.html',
})
export class SearchSalesActivityPage {
  title: string;
  appBuildConfig: any;
  BranchTbl: any = [];
  branchCode: any = '0';
  UserDetails: Promise<any>;
  findList: findVendorList;
  VenType: any;
  RpuserID: String = '0';
  VendorName: any = '';
  VendorCode: any = '';
  customerInfo: any = [];
  bvalue: any;
  btext: any;
  fetchedData: any;
  fromSaleLeadVal: any;
  responseFormAPI: any = [];
  userID: string;
  CreatedDate: any = '';
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
    this.title = "Search Sales Activity";
    this.appBuildConfig = this.globalService.appBuildConfig;
    this.userID = localStorage.getItem('userId');
    //  this.branchCode = localStorage.getItem('branchCode');
    this.UserDetails = this.globalService.get('userDetails');

    this.fetchedData = this.navParams.get('searchDetails');

    // this.BranchTbl = this.UserDetails[Object.keys(this.UserDetails)[1]]["Table4"];

    this.BranchTbl = JSON.parse(localStorage.getItem('BranchTable'));


    this.findList = new findVendorList();
    // debugger
    //     this.bvalue = localStorage.getItem('bvalue');
    //     this.btext = localStorage.getItem('btext');

    this.VenType = 'Lead-Customer';


    this.fromSaleLeadVal = this.navParams.get('fromSaleLeadVal');


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


    }
    // this.onItemChange();
  }



  dismissModal() {
    let data = { 'foo': 'bar' };
    this.viewCtrl.dismiss(data);
  }
  GetSearchSalesActivityList() {
    if (this.branchCode == undefined) {
      this.toastService.show('Please select branch.', 3000, true, 'top', 'toast-container');
      //this.startDate.focus();
      return;
    }

    this.customerInfo = [];

    this.findList.BranchCode = this.branchCode;
    this.findList.UserId = this.userID;
    this.findList.CreatedDate = this.CreatedDate;
    this.findList.VendorName = this.VendorName;
    this.countOfRec =0;
    this.http.POST(Constants.Corvi_Services.GetSearchSalesActivityList, this.findList).then((response) => {

      console.log('response to check login method: ', response);

      if (response['Table'] == '') {
        this.toastService.show('Data not found.', 3000, true, 'top', 'toast-container');
        return;
      } else {

        //this.customerInfo = response['Table'];

        if (this.globalService.isCordovaAvailable()) {
          this.responseFormAPI = response;
          this.customerInfo = JSON.parse(this.responseFormAPI)["Table"];
          this.countOfRec = JSON.parse(this.responseFormAPI)["Table"].length;
          // this.flag = true;
        } else {
          this.customerInfo = response['Table'];
          this.countOfRec = response['Table'].length;
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

  passDataToNSA(item) {

    this.navCtrl.setRoot(NewSalesActivityPage, { data: item, RpuserId: this.userID, branch: this.branchCode });
    ///this.globalService.setRootPage(NewSalesActivityPage);
  }

  openModal() {


    // this.saveActivity.BranchCode = this.branchCode;


    if (this.branchCode == '0') {
      this.toastService.show('Please select branch.', 3000, true, 'top', 'toast-container')
      return;
    }
    const profileModal = this.modalCtrl.create(FindSalesActivityPage, { fromSaleLeadVal: '5', branchCode: this.branchCode });
    profileModal.onDidDismiss(data => {
      console.log(data);
      if (data != undefined) {
        this.VendorName = this.globalService.handleJSON(data).VendorName;
      }
    });
    profileModal.present();
    this.globalService.store('branchCode', this.branchCode);
  }
}
