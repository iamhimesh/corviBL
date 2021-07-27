import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, ModalController } from 'ionic-angular';
import { GlobalProvider } from '../../providers/global/global';
import { ToastService } from '../../providers/util/toast.service';
import { DashboardPage } from '../dashboard/dashboard';
import { FindSalesActivityPage } from '../find-sales-activity/find-sales-activity';

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
  appBuildConfig: any;
  UserDetails: any = [];
  BranchTbl: any = [];
  ActivityTbl: any = [];
  branchDDL: any;
  filterActivityPriority: any;
  filterMode: any;
  filterActivityStatus: any;
  madalDismissData: any;
  branchCode: any = '0';
  startDate: String = new Date().toISOString();
  endtDate: String = new Date().toISOString();
  customerData: any = [];
  filterCustomerData: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public globalService: GlobalProvider,
    public menuCtrl: MenuController, private modalCtrl: ModalController, public toastService: ToastService,) {
    this.title = "New Sales Activity";
    this.appBuildConfig = this.globalService.appBuildConfig;

    debugger
    this.UserDetails = this.globalService.get('userDetails');
    this.customerData = this.globalService.get('customerData');
    this.filterCustomerData = this.customerData[Object.keys(this.customerData)[1]];
    this.BranchTbl = this.UserDetails[Object.keys(this.UserDetails)[1]]["Table4"];
    this.ActivityTbl = this.UserDetails[Object.keys(this.UserDetails)[1]]["Table3"];

    this.filterActivityPriority = this.ActivityTbl.filter(t => t.Identifier == 'ActivityPriority');
    this.filterMode = this.ActivityTbl.filter(t => t.Identifier == 'CommunicationType');
    this.filterActivityStatus = this.ActivityTbl.filter(t => t.Identifier == 'ActivityStatus');


  }

  openModal() {

    if (this.branchCode == '0') {
      this.toastService.show('Please select branch.', 3000, true, 'top', 'toast-container')
      return;
    }
    const profileModal = this.modalCtrl.create(FindSalesActivityPage, { userId: 8675309 });
    profileModal.onDidDismiss(data => {
      console.log(data);
      this.madalDismissData = JSON.stringify(data);
    });
    profileModal.present();
    this.globalService.store('branchCode', this.branchCode);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad NewSalesActivityPage');
  }

  backToDashboard() {

    this.globalService.setRootPage(DashboardPage);
  }

  changed(endte) {

    let sdate = this.startDate.slice(0, 10);
    let stime = this.startDate.slice(11, 16);
    let sdatTime = sdate + ' ' + stime;


    let edate = endte.slice(0, 10);
    let etime = endte.slice(11, 16);
    let edatTime = edate + ' ' + etime;
    debugger
    var a = Date.parse(sdate);
    var b = Date.parse(edate);

    if (b < a) {
      this.toastService.show('End Time should be greater than Start Time.', 3000, true, 'top', 'toast-container')
      return;
    } else {
      alert('ok')

    }

  }



  // searchVenderList() {

  //   this.findList.BranchCode = this.branchCode;
  //   this.findList.VendorType = this.VenType;
  //   this.findList.VendorCode = this.VendorCode;
  //   this.findList.VendorName = this.VendorName;

  //   this.http.POST(Constants.Corvi_Services.GetVendorMasterList, this.findList).then((response) => {

  //     console.log('response to check login method: ', response);

  //     if (response['Table'] == '') {
  //       this.toastService.show('Data not found.', 3000, true, 'top', 'toast-container')
  //       return;
  //     } else {
  //       this.customerInfo = response['Table'];
  //     }
  //     // this.globalService.store('login_resp', response);

  //   }, (err) => {
  //     console.log('error Login ', err);
  //     console.log('response to check service link: ', Constants.Corvi_Services.Login);
  //   });
  //   // }
  //   // else {
  //   //   this.globalService.showAlert('Invalid Customer Identity Code')
  //   // }

  //   // });



  // }


}
