import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { IonicPage, NavController, NavParams, MenuController, ModalController, ToastController, AlertController } from 'ionic-angular';
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

export class emailSending {
  AppointmentID: string;
  UserId: string
}

export class fetchSalesActivity {
  UserId: any;
  AppointmentID: any;
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
  branchCode: any;
  // startDate: String = new Date().toISOString();
  // endtDate: String = new Date().toISOString();

  startDate: any = '';
  endtDate: any = '';
  customerData: any = [];
  filterCustomerData: any;
  saveActivity: saveNewSalesActivityPage;
  emailSend: emailSending;
  commMode: any = '1';
  activityType: any = '1';
  priority: any = '1';
  status: any = '1';
  vCode: any = '';
  contPerson: any;
  sTime: any = '';
  bDesc: any = '';
  notes: any = '';
  userID: any = '';
  currDate: any = new Date();
  isenabled: any = false;
  fetchedData: any;
  tempBranch: string;
  filterActivity: any = [];

  dataFromReporting: any = [];
  fetchedAppointmentId: any = '';
  fetchedUserId: any = '';
  fetchedBranch: any = '';
  fetchSales: fetchSalesActivity;
  VendorName: any;
  Address1: any;
  ContactPerson: any;
  VendorIds: any = 0;
  AppointmentId: any = '0';
  OAppointmentID: string;
  constructor(
    public navCtrl: NavController, public navParams: NavParams,
    public globalService: GlobalProvider,
    private modalCtrl: ModalController,
    public nav: NavController,
    public menu: MenuController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public http: HttpServiceProvider,
    public alertService: AlertService,
    public toastService: ToastService,
    // public baseURLProvider: BaseURLProvider,
    public fb: FormBuilder
  ) {
    this.title = "New Sales Activity";
    this.appBuildConfig = this.globalService.appBuildConfig;

    this.UserDetails = this.globalService.get('userDetails');
    this.customerData = this.globalService.get('customerData');
    this.filterCustomerData = this.customerData[Object.keys(this.customerData)[1]];




    // this.BranchTbl = this.UserDetails[Object.keys(this.UserDetails)[1]]["Table4"];
    // this.ActivityTbl = this.UserDetails[Object.keys(this.UserDetails)[1]]["Table3"];

    // //this.filterActivity = this.ActivityTbl.filter(t => t.Identifier == 'Activity');
    // this.filterActivityPriority = this.ActivityTbl.filter(t => t.Identifier == 'ActivityPriority');
    // this.filterMode = this.ActivityTbl.filter(t => t.Identifier == 'CommunicationType');
    // this.filterActivityStatus = this.ActivityTbl.filter(t => t.Identifier == 'ActivityStatus');


    this.userID = localStorage.getItem('userId');
    this.saveActivity = new saveNewSalesActivityPage();
    this.emailSend = new emailSending();
    // this.fetchedData = this.navParams.get('searchDetails');
    this.tempBranch = localStorage.getItem('branchCode');
    // if (this.filterCustomerData.VendorName) {
    //   this.isenabled = true;
    // }
    this.fetchSales = new fetchSalesActivity();

    if (this.globalService.valueForLeadCutomer != '') {


      this.VendorName = this.globalService.valueForLeadCutomer.VendorName;
      this.Address1 = this.globalService.valueForLeadCutomer.Address1 + ' ' + this.globalService.valueForLeadCutomer.Address2 + ' ' + this.globalService.valueForLeadCutomer.Address3 + ' ' + this.globalService.valueForLeadCutomer.LocationName + ' ' + this.globalService.valueForLeadCutomer.StateName + this.globalService.valueForLeadCutomer.Pincode;
      this.Address1=  this.Address1.split("undefined");
      this.ContactPerson = this.globalService.valueForLeadCutomer.ContactPerson;

      this.isenabled = true;

    }
  }

  ngOnInit() {
    this.branchCode = this.globalService.globalDefaultBranchCode;
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

    this.status = 5;
    this.commMode = 4;

  }

  ionViewWillEnter() {

    var now = new Date();
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    this.startDate = now.toISOString().slice(0, 16);
    this.endtDate = now.toISOString().slice(0, 16);

    this.dataFromReporting = this.navParams.get('data');
    this.fetchedUserId = this.navParams.get('RpuserId');
    this.fetchedBranch = this.navParams.get('branch');
    if (typeof (this.dataFromReporting) != 'undefined') {

      console.log('data from.....', this.dataFromReporting);
      this.fetchedAppointmentId = this.dataFromReporting.AppointmentId;
      this.AppointmentId = this.dataFromReporting.AppointmentId;
      //  this.VendorIds = this.dataFromReporting.VendorId;

      console.log('AppointmentId: ', this.fetchedAppointmentId);
      console.log('RpuserId: ', this.fetchedUserId);
      console.log('Branch: ', this.fetchedBranch);
      this.isenabled = true;
      this.fetchSalesActivityFunc();
    }

    var Activity: any = [];
    var ActivityPriority: any = [];
    var CommunicationType: any = [];
    var ActivityStatus: any = [];
    var BranchTable: any = [];

    // Activity = this.globalService.get('Activity');
    // ActivityPriority = this.globalService.get('ActivityPriority');
    // CommunicationType = this.globalService.get('CommunicationType');
    // ActivityStatus = this.globalService.get('ActivityStatus');

    // BranchTable = this.globalService.get('BranchTable');


    if (this.globalService.isCordovaAvailable()) {

      this.filterActivity = JSON.parse(localStorage.getItem('Activity'));
      this.filterActivityPriority = JSON.parse(localStorage.getItem('ActivityPriority'));
      this.filterMode = JSON.parse(localStorage.getItem('CommunicationType'));
      this.filterActivityStatus = JSON.parse(localStorage.getItem('ActivityStatus'));
      this.BranchTbl = JSON.parse(localStorage.getItem('BranchTable'));



    } else {



      this.filterActivity = JSON.parse(localStorage.getItem('Activity'));
      this.filterActivityPriority = JSON.parse(localStorage.getItem('ActivityPriority'));
      this.filterMode = JSON.parse(localStorage.getItem('CommunicationType'));
      this.filterActivityStatus = JSON.parse(localStorage.getItem('ActivityStatus'));
      this.BranchTbl = JSON.parse(localStorage.getItem('BranchTable'));


      // this.filterActivity = localStorage.getItem('Activity');
      // this.filterActivityPriority = localStorage.getItem('ActivityPriority');
      // this.filterMode = localStorage.getItem('CommunicationType');
      // this.filterActivityStatus = localStorage.getItem('ActivityStatus');
      // this.BranchTbl = localStorage.getItem('BranchTable');

      // localStorage.getItem('Activity');
      // localStorage.getItem('ActivityPriority');
      // localStorage.getItem('CommunicationType');
      // localStorage.getItem('ActivityStatus');
      // localStorage.getItem('BranchTable');
    }




    // this.filterActivity = JSON.parse(Activity.__zone_symbol__value);
    // this.filterActivityPriority = JSON.parse(ActivityPriority.__zone_symbol__value);
    // this.filterMode = JSON.parse(CommunicationType.__zone_symbol__value);
    // this.filterActivityStatus = JSON.parse(ActivityStatus.__zone_symbol__value);

    // this.BranchTbl = JSON.parse(BranchTable.__zone_symbol__value);



  }

  fetchSalesActivityFunc() {

    this.fetchSales.UserId = this.fetchedUserId;
    this.fetchSales.AppointmentID = this.fetchedAppointmentId.toString();

    this.http.POST(Constants.Corvi_Services.GetSalesActivityById, this.fetchSales).then((response: any) => {
      console.log('single User', response);
      if (response != '') {


        this.activityType = this.globalService.handleJSON(response).Table[0].Activity;
        this.commMode = this.globalService.handleJSON(response).Table[0].CommunicationMode;
        this.priority = this.globalService.handleJSON(response).Table[0].Priority;
        this.status = this.globalService.handleJSON(response).Table[0].Status;
        this.bDesc = this.globalService.handleJSON(response).Table[0].Remarks;
        this.notes = this.globalService.handleJSON(response).Table[0].Note;
        this.endtDate = this.globalService.handleJSON(response).Table[0].EndTime;
        this.startDate = this.globalService.handleJSON(response).Table[0].StartTime;
        this.branchCode = this.fetchedBranch;
        this.VendorName = this.globalService.handleJSON(response).Table[0].VendorName;
        //this.Address1 = this.globalService.handleJSON(response).Table[0].Address1;

        this.Address1 = this.globalService.handleJSON(response).Table[0].Address1 + ' ' + this.globalService.handleJSON(response).Table[0].Address2 + ' ' + this.globalService.handleJSON(response).Table[0].Address3 + ' ' + this.globalService.handleJSON(response).Table[0].LocationName + ' ' + this.globalService.handleJSON(response).Table[0].StateName + '  ' + this.globalService.handleJSON(response).Table[0].Pincode;
        this.Address1=  this.Address1.split("undefined");
        this.ContactPerson = this.globalService.handleJSON(response).Table[0].VendorPic;
        this.VendorIds = this.globalService.handleJSON(response).Table[0].VendorId;

        // if (this.globalService.isCordovaAvailable()) {
        //   this.activityType = JSON.parse(response)["Table"][0].Activity;
        //   this.commMode = JSON.parse(response)["Table"][0].CommunicationMode;
        //   this.priority = JSON.parse(response)["Table"][0].Priority;
        //   this.status = JSON.parse(response)["Table"][0].Status;
        //   this.bDesc = JSON.parse(response)["Table"][0].Remarks;
        //   this.notes = JSON.parse(response)["Table"][0].Note;
        //   this.endtDate = JSON.parse(response)["Table"][0].EndTime;
        //   this.startDate = JSON.parse(response)["Table"][0].StartTime;
        //   this.branchCode = this.fetchedBranch;
        //   this.VendorName = JSON.parse(response)["Table"][0].VendorName;
        //   this.Address1 = JSON.parse(response)["Table"][0].Address1;
        //   this.ContactPerson = JSON.parse(response)["Table"][0].VendorPic;

        // } else {
        //   this.activityType = this.globalService.handleJSON(response).Table[0].Activity;
        //   this.commMode = this.globalService.handleJSON(response).Table[0].CommunicationMode;
        //   this.priority = this.globalService.handleJSON(response).Table[0].Priority;
        //   this.status = this.globalService.handleJSON(response).Table[0].Status;
        //   this.bDesc = this.globalService.handleJSON(response).Table[0].Remarks;
        //   this.notes = this.globalService.handleJSON(response).Table[0].Note;
        //   this.endtDate = this.globalService.handleJSON(response).Table[0].EndTime;
        //   this.startDate = this.globalService.handleJSON(response).Table[0].StartTime;
        //   this.branchCode = this.fetchedBranch;
        //   this.VendorName = this.globalService.handleJSON(response).Table[0].VendorName;
        //   this.Address1 = this.globalService.handleJSON(response).Table[0].Address1;
        //   this.ContactPerson = this.globalService.handleJSON(response).Table[0].VendorPic;
        // }
        //  this.ContactPerson = this.globalService.handleJSON(response).Table[0].VendorPic;
        //  JSON.parse(response)["Table"][0].Address1
        console.log('this.VendorIds', this.VendorIds);

      }
    })

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
      if (this.globalService.valueForLeadCutomer != '') {
        this.VendorName = this.globalService.handleJSON(data).VendorName;
        // this.Address1 = this.globalService.handleJSON(data).Address1;
        this.Address1 = this.globalService.valueForLeadCutomer.Address1 + ' ' + this.globalService.valueForLeadCutomer.Address2 + ' ' + this.globalService.valueForLeadCutomer.Address3 + ' ' + this.globalService.valueForLeadCutomer.LocationName + ' ' + this.globalService.valueForLeadCutomer.StateName + '  ' + this.globalService.valueForLeadCutomer.Pincode;
        this.Address1=  this.Address1.split("undefined");
        this.ContactPerson = this.globalService.handleJSON(data).ContactPerson;
        this.VendorIds = this.globalService.handleJSON(data).VendorId;
        this.isenabled = true;
      }

      // this.companyName = this.globalService.handleJSON(data).VendorName;
      // this.customerType = this.globalService.handleJSON(data).VendorType;
      // this.addressline1 = this.globalService.handleJSON(data).Address1;
      // this.addressline2 = this.globalService.handleJSON(data).Address2;
      // this.addressline3 = this.globalService.handleJSON(data).Address3;
      // this.Locationid = this.globalService.handleJSON(data).LocationID;
      // this.status = this.globalService.handleJSON(data).Status.toString();
      // this.typeOfIndus = this.globalService.handleJSON(data).TypeofIndustry.toString();
      // this.typeOfCust = this.globalService.handleJSON(data).TypeOfCustomer.toString();
      // this.location = this.globalService.handleJSON(data).LocationName;
      // this.firstname = this.globalService.handleJSON(data).FirstName;
      // this.lastname = this.globalService.handleJSON(data).LastName;
      // this.designation = this.globalService.handleJSON(data).Designation;
      // this.mobileno = this.globalService.handleJSON(data).Mobile;
      // this.contactemail = this.globalService.handleJSON(data).Email;
      // this.pincode = this.globalService.handleJSON(data).Pincode
      // this.vendorname = this.globalService.handleJSON(data).VendorName;
    });
    profileModal.present();
    this.globalService.store('branchCode', this.branchCode);
  }


  ionViewDidLoad() {
    //this.branchCode = '0';
    //this.branchCode = localStorage.getItem('branchCode');
    // console.log('ionViewDidLoad NewSalesActivityPage');
    if (this.tempBranch != null) {
      this.branchCode = this.tempBranch;
    }

  }


  ionViewDidLeave() {
    this.dataFromReporting = '';
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
    // debugger
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



    if (this.branchCode == '0') {
      this.toastService.show('Please select branch.', 3000, true, 'top', 'toast-container');
      //this.startDate.focus();
      return;
    }

    if (this.globalService.valueForLeadCutomer.BranchName == '') {
      this.toastService.show('Please search company.', 3000, true, 'top', 'toast-container');
      //this.startDate.focus();
      return;
    }


    if (this.contPerson == '') {
      this.toastService.show('Enter contact person.', 3000, true, 'top', 'toast-container');
      //this.startDate.focus();
      return;
    }

    if (this.startDate == '') {
      this.toastService.show('Please select start date.', 3000, true, 'top', 'toast-container');
      //this.startDate.focus();
      return;
    }

    if (this.endtDate == '') {
      this.toastService.show('Please select end date.', 3000, true, 'top', 'toast-container');
      // this.startDate.focus();
      return;
    }


    if (this.bDesc == '') {
      this.toastService.show('Please enter general remarks.', 3000, true, 'top', 'toast-container');
      // this.startDate.focus();
      return;
    }


    var now = new Date();
    var utcString = now.toISOString().substring(0, 19);
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var day = now.getDate();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    var localDatetime = year + "-" +
      (month < 10 ? "0" + month.toString() : month) + "-" +
      (day < 10 ? "0" + day.toString() : day) + "T" +
      (hour < 10 ? "0" + hour.toString() : hour) + ":" +
      (minute < 10 ? "0" + minute.toString() : minute) +
      utcString.substring(16, 19);

    var a = Date.parse(this.startDate);
    var b = Date.parse(this.endtDate);



    if (b < a) {
      this.toastService.show('End Time should be greater than Start Time.', 3000, true, 'top', 'toast-container')
      return;
    } else if (b == a) {
      this.toastService.show('End Time should be greater than Start Time.', 3000, true, 'top', 'toast-container')
      return;
    }

    this.saveActivity.AppointmentID = this.AppointmentId.toString();
    this.saveActivity.BranchCode = this.branchCode;
    this.saveActivity.CommunicationMode = this.commMode.toString();
    this.saveActivity.ActivityType = this.activityType;
    this.saveActivity.Priority = this.priority;
    this.saveActivity.Status = this.status.toString();
    this.saveActivity.VendorCode = this.VendorIds.toString();
    this.saveActivity.ContactPerson = this.ContactPerson;
    this.saveActivity.StartTime = this.startDate.replace("T", " ");
    this.saveActivity.EndTime = this.endtDate.replace("T", " ");;
    this.saveActivity.BriefDescription = this.bDesc;
    this.saveActivity.Notes = this.notes;
    this.saveActivity.UserId = this.userID;
    this.saveActivity.CreatedDate = localDatetime.replace("T", " ");;//this.currDate;

    this.http.POST(Constants.Corvi_Services.SalesActivitySave, this.saveActivity).then((response: any) => {

      console.log('response to check login method: ', response);
      debugger
      if (response != '') {

        let str = response;
        this.OAppointmentID = str.split('~')[1];

        // localStorage.removeItem('login_resp');
        // localStorage.removeItem('userDetails');
        localStorage.removeItem('branchCode');
        localStorage.removeItem('customerData');
        localStorage.removeItem('branchCode');
        this.sendEmailToManager('Success', 'Activity Saved, Do you want to Email your Sales Activity to your Reporting Manager?');
        // if (confirm('Activity Saved, Do you want to Email your Sales Activity to your Reporting Manager?')) {
        //   this.SendMailSalesActivityToReporting();
        // } else {
        //   this.globalService.setRootPage(DashboardPage);
        //   console.log('Thing was not saved to the database.');
        // }
        // this.toastService.show(response, 3000, true, 'top', 'toast-success');
        // this.globalService.setRootPage(DashboardPage);

        //this.OAppointmentID;

      } else {
        this.sendEmailToManager('Success', 'Activity Saved, Do you want to Email your Sales Activity to your Reporting Manager?');
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


  SendMailSalesActivityToReporting() {
    debugger
    this.emailSend.AppointmentID = this.OAppointmentID;
    this.emailSend.UserId = this.userID;

    this.http.POST(Constants.Corvi_Services.SendMailSalesActivityToReporting, this.emailSend).then((response) => {
      debugger
      // if (response != '') {
      //   this.globalService.setRootPage(DashboardPage);
      // }
      // this.globalService.setRootPage(DashboardPage);

    }, (err) => {
      console.log('error Login ', err);
      console.log('response to check service link: ', Constants.Corvi_Services.Login);
    });

  }

  getSelectedOptionText() {
    // debugger
    // alert(this.branchCode);
    // alert(this.branchCode);
    localStorage.setItem('bvalue', this.branchCode);
    // localStorage.setItem('btext', this.branchCode.branch);

  }

  showAlert(title, msg) {
    let alert = this.alertCtrl.create({
      title: title,
      message: msg,
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.globalService.setRootPage(DashboardPage);

          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
      ]
    });
    alert.present();
  }


  sendEmailToManager(title, msg) {
    let alert = this.alertCtrl.create({
      title: title,
      message: msg,
      buttons: [
        {
          text: 'YES',
          handler: () => {
            debugger
            this.SendMailSalesActivityToReporting();
            this.globalService.setRootPage(DashboardPage);
          }
        },
        {
          text: 'NO',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
            this.globalService.setRootPage(DashboardPage);
          }
        },
      ]
    });
    alert.present();
  }



}
