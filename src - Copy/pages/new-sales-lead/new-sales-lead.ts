import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams, ModalController, ViewController, MenuController, ToastController } from 'ionic-angular';
import { Constants } from '../../constants';

import { GlobalProvider } from '../../providers/global/global';
import { HttpServiceProvider } from '../../providers/http-service/http-service';
import { AlertService } from '../../providers/util/alert.service';
import { ToastService } from '../../providers/util/toast.service';
import { DashboardPage } from '../dashboard/dashboard';
import { FindLocationPage } from '../find-location/find-location';
import { NewSalesActivityPage } from '../new-sales-activity/new-sales-activity';
import { WelcomeuserPage } from '../welcomeuser/welcomeuser';

/**
 * Generated class for the NewSalesLeadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


export class saveLeadCustomer {

  VendorId: any;
  VendorName: any;
  VendorType: any;
  AddressLine1: any;
  AddressLine2: any;
  AddressLine3: any;
  ContactEmail: any;
  FirstName: any;
  LastName: any;
  Designation: any;
  Location: any;
  MobileNo: any;
  PinCode: any;
  Status: any;
  TypeOfCustomer: any;
  TypeofIndustry: any;
  UserId: any;
  ClientDate: any;
  BranchCode: any;
}

@IonicPage()
@Component({
  selector: 'page-new-sales-lead',
  templateUrl: 'new-sales-lead.html',
})

export class NewSalesLeadPage {
  title: string;
  appBuildConfig: any;
  UserDetails: any = [];
  BranchTbl: any = [];
  branchCode: any = '0';
  ActivityTbl: any = [];
  filterActivityStatus: any;
  filterTypesOFIndus: any;
  filterTypeOFCustomer: any;
  status: any = '1';
  typeOfIndus: any = '1';
  typeOfCust: any = '1';
  saveCustomer: saveLeadCustomer;
  vendorname: any ='';
  vendortype: any = 'Lead-Customer';
  addressline1: any='';
  addressline2: any='';
  addressline3: any='';
  contactemail: any='';
  firstname: any ='';
  lastname: any ='';
  designation: any ='';
  location: any ='';
  mobileno: any ='';
  pincode: any ='';

  userid: any;
  clientdate: any = new Date();
 // public vForm: FormGroup;
  constructor(
    public navCtrl: NavController, public navParams: NavParams,
    public globalService: GlobalProvider,
    private modalCtrl: ModalController, public viewCtrl: ViewController,
    public nav: NavController,
    public menu: MenuController,
    public toastCtrl: ToastController,

    public http: HttpServiceProvider,
    public alertService: AlertService,
    public toastService: ToastService,
    // public baseURLProvider: BaseURLProvider,
    public fb: FormBuilder
  ) {

   // debugger
    this.title = "New Sales Lead";
    this.appBuildConfig = this.globalService.appBuildConfig;
    this.UserDetails = this.globalService.get('userDetails');
    this.BranchTbl = this.UserDetails[Object.keys(this.UserDetails)[1]]["Table4"];
    this.ActivityTbl = this.UserDetails[Object.keys(this.UserDetails)[1]]["Table3"];

    this.userid = localStorage.getItem('userId');
    this.filterActivityStatus = this.ActivityTbl.filter(t => t.Identifier == 'SalesLeadStatus');
    this.filterTypesOFIndus = this.ActivityTbl.filter(t => t.Identifier == 'TypeOfIndustry');
    this.filterTypeOFCustomer = this.ActivityTbl.filter(t => t.Identifier == 'TypeOfIndustry');
    this.saveCustomer = new saveLeadCustomer();

    if (this.globalService.selectedCity != undefined) {
      this.location = this.globalService.selectedCity.Locationtext;
    }
    // this.vForm = this.fb.group({

    //   pieces: ['', Validators.required],
    //   GrWt: ['', Validators.required],
    //   vehicleNo: ['', Validators.required],
    //   driverName: ['', Validators.required],
    //   licenseNo: ['', Validators.required],
    //   mobNo: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
    //   IsConsignee: ['', Validators.required],
    //   shedType: ['', Validators.required],
    //   entPieces: new FormControl('', Validators.required),
    //   entWt: new FormControl('', Validators.required)
    // });

  }



  openModal() {

    // if (this.branchCode == '0') {
    //   this.toastService.show('Please select branch.', 3000, true, 'top', 'toast-container')
    //   return;
    // }
    const profileModal = this.modalCtrl.create(FindLocationPage, { searchDetails: '1' });
    profileModal.onDidDismiss(data => {
      console.log(data);
      //this.madalDismissData = JSON.stringify(data);
    });
    profileModal.present();
    // this.globalService.store('branchCode', this.branchCode);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewSalesLeadPage');


  }
  backToDashboard() {

    this.globalService.setRootPage(DashboardPage);
  }




  getSelectedOptionText() {
    // debugger
    // alert(this.branchCode);
    // alert(this.branchCode);
    localStorage.setItem('bvalue', this.branchCode);
    // localStorage.setItem('btext', this.branchCode.branch);

  }


  VendorMasterSave() {

    debugger
    if (this.branchCode == '0') {
      this.toastService.show('Please select branch.', 3000, true, 'top', 'toast-container')
      return;
    }

    if (this.vendorname == '') {
      this.toastService.show('Please enter/search company name.', 3000, true, 'top', 'toast-container')
      return;
    }


    if (this.location == '') {
      this.toastService.show('Please search location.', 3000, true, 'top', 'toast-container')
      return;
    }


    if (this.addressline1 == '') {
      this.toastService.show('Please enter at least one address.', 3000, true, 'top', 'toast-container')
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

    // if (this.startDate == '') {
    //   this.toastService.show('Please select Start Date.', 3000, true, 'top', 'toast-container');
    //   //this.startDate.focus();
    //   return;
    // }

    // if (this.endtDate == '') {
    //   this.toastService.show('Please select End Date.', 3000, true, 'top', 'toast-container');
    //  // this.startDate.focus();
    //   return;
    // }

    // var a = Date.parse(this.startDate);
    // var b = Date.parse(this.endtDate);

    // if (b < a) {
    //   this.toastService.show('End Time should be greater than Start Time.', 3000, true, 'top', 'toast-container')
    //   return;
    // } else if (b == a) {
    //   this.toastService.show('End Time should be greater than Start Time.', 3000, true, 'top', 'toast-container')
    //   return;
    // }

    this.saveCustomer.VendorId = '0'
    this.saveCustomer.VendorName = this.vendorname;
    this.saveCustomer.VendorType = this.vendortype;
    this.saveCustomer.AddressLine1 = this.addressline1;
    this.saveCustomer.AddressLine2 = this.addressline2;
    this.saveCustomer.AddressLine3 = this.addressline3;
    this.saveCustomer.ContactEmail = this.contactemail;
    this.saveCustomer.FirstName = this.firstname;
    this.saveCustomer.LastName = this.lastname;
    this.saveCustomer.Designation = this.designation;
    this.saveCustomer.Location = this.location;
    this.saveCustomer.MobileNo = this.mobileno;
    this.saveCustomer.PinCode = this.pincode;
    this.saveCustomer.Status = this.status;
    this.saveCustomer.TypeOfCustomer = this.typeOfCust;
    this.saveCustomer.TypeofIndustry = this.typeOfIndus;
    this.saveCustomer.UserId = this.userid;
    this.saveCustomer.ClientDate = localDatetime;
    this.saveCustomer.BranchCode = this.branchCode;

    this.http.POST(Constants.Corvi_Services.VendorMasterSave, this.saveCustomer).then((response) => {

      console.log('response to check login method: ', response);
      debugger
      if (response != '') {
        // localStorage.removeItem('login_resp');
        // localStorage.removeItem('userDetails');
        this.toastService.show(response, 3000, true, 'top', 'toast-success');
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

}
