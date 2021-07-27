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

  VendorName: any = '';
  VendorCode: any = '';
  customerInfo: any = [];
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
    this.title = "Find Sales Activity";
    this.appBuildConfig = this.globalService.appBuildConfig;
    // this.branchCode = this.globalService.get('branchCode');
    this.UserDetails = this.globalService.get('userDetails');

    this.BranchTbl = this.UserDetails[Object.keys(this.UserDetails)[1]]["Table4"];

    this.findList = new findVendorList();

    this.VenType = 'Lead-Customer';

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FindSalesActivityPage');
  }

  backToDashboard() {

    this.globalService.setRootPage(DashboardPage);
  }

  ngOnInit() {
    // this.onItemChange();
  }



  dismissModal() {
    let data = { 'foo': 'bar' };
    this.viewCtrl.dismiss(data);
  }
  searchVenderList() {

    this.findList.BranchCode = this.branchCode;
    this.findList.VendorType = this.VenType;
    this.findList.VendorCode = this.VendorCode;
    this.findList.VendorName = this.VendorName;

    this.http.POST(Constants.Corvi_Services.GetVendorMasterList, this.findList).then((response) => {

      console.log('response to check login method: ', response);

      if (response['Table'] == '') {
        this.toastService.show('Data not found.', 3000, true, 'top', 'toast-container')
        return;
      } else {
        this.customerInfo = response['Table'];
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

    this.globalService.store('customerData', custArray);
    this.viewCtrl.dismiss();
    this.globalService.setRootPage(NewSalesActivityPage);
  }

}
