import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { IonicPage, NavController, NavParams, MenuController, ModalController, ToastController } from 'ionic-angular';
import { Constants } from '../../constants';
import { GlobalProvider } from '../../providers/global/global';
import { HttpServiceProvider } from '../../providers/http-service/http-service';
import { AlertService } from '../../providers/util/alert.service';
import { ToastService } from '../../providers/util/toast.service';
import { DashboardPage } from '../dashboard/dashboard';
import { FindSalesActivityPage } from '../find-sales-activity/find-sales-activity';

/**
 * Generated class for the NewSalesActivityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

export class saveNewSalesActivityPage {
  AppointmentID: any;
  BranchCode: any;
  CommunicationMode: any;
  ActivityType: any;
  Priority: any;
  Status: any;
  VendorCode: any;
  ContactPerson: any;
  StartTime: any;
  EndTime: any;
  BriefDescription: any;
  Notes: any;
  UserId: any;
  CreatedDate: any;
}

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
  // startDate: String = new Date().toISOString();
  // endtDate: String = new Date().toISOString();

  startDate: any ='';
  endtDate: any ='';
  customerData: any = [];
  filterCustomerData: any;
  saveActivity: saveNewSalesActivityPage;
  commMode: any = '5';
  activityType: any = '1';
  priority: any = '1';
  status: any = '5';
  vCode: any;
  contPerson: any;
  sTime: any;
  bDesc: any;
  notes: any;
  userID: any;
  currDate: any = new Date();
  isenabled: any = false;
  fetchedData: any;
  tempBranch: string;
  constructor(
    public navCtrl: NavController, public navParams: NavParams,
    public globalService: GlobalProvider,
    private modalCtrl: ModalController,
    public nav: NavController,
    public menu: MenuController,
    public toastCtrl: ToastController,

    public http: HttpServiceProvider,
    public alertService: AlertService,
    public toastService: ToastService,
    // public baseURLProvider: BaseURLProvider,
    public fb: FormBuilder
  ) {
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
    this.userID = localStorage.getItem('userId');
    this.saveActivity = new saveNewSalesActivityPage();
    // this.fetchedData = this.navParams.get('searchDetails');
    this.tempBranch = localStorage.getItem('branchCode');
    if (this.filterCustomerData.VendorName) {
      this.isenabled = true;
    }
  }

  ngOnInit() {

    // var now = new Date();
    // var utcString = now.toISOString().substring(0, 19);
    // var year = now.getFullYear();
    // var month = now.getMonth() + 1;
    // var day = now.getDate();
    // var hour = now.getHours();
    // var minute = now.getMinutes();
    // var second = now.getSeconds();
    // var localDatetime = year + "-" +
    //   (month < 10 ? "0" + month.toString() : month) + "-" +
    //   (day < 10 ? "0" + day.toString() : day) + "T" +
    //   (hour < 10 ? "0" + hour.toString() : hour) + ":" +
    //   (minute < 10 ? "0" + minute.toString() : minute) +
    //   utcString.substring(16, 19);
    // var datetimeField = document.getElementById("myDatetimeField");
    // this.startDate = localDatetime;
    // this.endtDate = localDatetime;

  }




  openModal() {
    this.saveActivity.BranchCode = this.branchCode;


    if (this.branchCode == '0') {
      this.toastService.show('Please select branch.', 3000, true, 'top', 'toast-container')
      return;
    }
    const profileModal = this.modalCtrl.create(FindSalesActivityPage, { searchDetails: this.saveActivity });
    profileModal.onDidDismiss(data => {
      console.log(data);
      this.madalDismissData = JSON.stringify(data);
    });
    profileModal.present();
    this.globalService.store('branchCode', this.branchCode);
  }


  ionViewDidLoad() {
    debugger
    //this.branchCode = '0';
    //this.branchCode = localStorage.getItem('branchCode');
    // console.log('ionViewDidLoad NewSalesActivityPage');
    if (this.tempBranch != null) {
      this.branchCode = this.tempBranch;
    }

  }

  backToDashboard() {
    localStorage.removeItem('branchCode');
    localStorage.removeItem('customerData');
    localStorage.removeItem('branchCode');


    this.globalService.setRootPage(DashboardPage);
  }

  changed(endte) {

    // let sdate = this.startDate.slice(0, 10);
    // let stime = this.startDate.slice(11, 16);
    // let sdatTime = sdate + ' ' + stime;


    // let edate = endte.slice(0, 10);
    // let etime = endte.slice(11, 16);
    // let edatTime = edate + ' ' + etime;
    // debugger
    // var a = Date.parse(sdate);
    // var b = Date.parse(edate);
    debugger
    // var now = new Date();
    // var utcString = now.toISOString().substring(0, 19);
    // var year = now.getFullYear();
    // var month = now.getMonth() + 1;
    // var day = now.getDate();
    // var hour = now.getHours();
    // var minute = now.getMinutes();
    // var second = now.getSeconds();
    // var localDatetime = year + "-" +
    //   (month < 10 ? "0" + month.toString() : month) + "-" +
    //   (day < 10 ? "0" + day.toString() : day) + "T" +
    //   (hour < 10 ? "0" + hour.toString() : hour) + ":" +
    //   (minute < 10 ? "0" + minute.toString() : minute) +
    //   utcString.substring(16, 19);
    // var datetimeField = document.getElementById("myDatetimeField");
    // this.startDate = localDatetime;
    // this.endtDate = localDatetime;


    var a = Date.parse(this.startDate);
    var b = Date.parse(this.endtDate);

    if (b < a) {
      this.toastService.show('End Time should be greater than Start Time.', 3000, true, 'top', 'toast-container')
      return;
    } else if (b == a) {

      this.toastService.show('End Time should be greater than Start Time.', 3000, true, 'top', 'toast-container')
      return;


    }

  }



  SalesActivitySave() {

    debugger

    if (this.startDate == '') {
      this.toastService.show('Please select Start Date.', 3000, true, 'top', 'toast-container');
      //this.startDate.focus();
      return;
    }

    if (this.endtDate == '') {
      this.toastService.show('Please select End Date.', 3000, true, 'top', 'toast-container');
     // this.startDate.focus();
      return;
    }

    var a = Date.parse(this.startDate);
    var b = Date.parse(this.endtDate);

    if (b < a) {
      this.toastService.show('End Time should be greater than Start Time.', 3000, true, 'top', 'toast-container')
      return;
    } else if (b == a) {
      this.toastService.show('End Time should be greater than Start Time.', 3000, true, 'top', 'toast-container')
      return;
    }

    this.saveActivity.AppointmentID = '0'
    this.saveActivity.BranchCode = this.branchCode;
    this.saveActivity.CommunicationMode = this.commMode;
    this.saveActivity.ActivityType = this.activityType;
    this.saveActivity.Priority = this.priority;
    this.saveActivity.Status = this.status;
    this.saveActivity.VendorCode = this.filterCustomerData.VendorId;
    this.saveActivity.ContactPerson = this.filterCustomerData.VendorName;
    this.saveActivity.StartTime = this.startDate;
    this.saveActivity.EndTime = this.endtDate;
    this.saveActivity.BriefDescription = this.bDesc;
    this.saveActivity.Notes = this.notes;
    this.saveActivity.UserId = this.userID;
    this.saveActivity.CreatedDate = this.currDate;

    this.http.POST(Constants.Corvi_Services.SalesActivitySave, this.saveActivity).then((response) => {

      console.log('response to check login method: ', response);
      debugger
      if (response != '') {
        // localStorage.removeItem('login_resp');
        // localStorage.removeItem('userDetails');
        localStorage.removeItem('branchCode');
        localStorage.removeItem('customerData');
        localStorage.removeItem('branchCode');
        this.toastService.show(response, 3000, true, 'top', 'toast-success');
        this.globalService.setRootPage(DashboardPage);
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

  getSelectedOptionText() {
    // debugger
    // alert(this.branchCode);
    // alert(this.branchCode);
    localStorage.setItem('bvalue', this.branchCode);
    // localStorage.setItem('btext', this.branchCode.branch);

  }

}
