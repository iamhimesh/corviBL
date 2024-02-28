import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { IonicPage, NavController, NavParams, MenuController, ModalController, ToastController, ViewController, AlertController } from 'ionic-angular';
import { Constants } from '../../constants';
import { GlobalProvider } from '../../providers/global/global';
import { HttpServiceProvider } from '../../providers/http-service/http-service';
import { AlertService } from '../../providers/util/alert.service';
import { ToastService } from '../../providers/util/toast.service';
import { DashboardPage } from '../dashboard/dashboard';
import { FindLocationPage } from '../find-location/find-location';
import { FindSalesActivityPage } from '../find-sales-activity/find-sales-activity';

/**
 * Generated class for the NewSalesActivityPage page.
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
  branchCode: any;
  ActivityTbl: any = [];
  filterActivityStatus: any;
  filterTypesOFIndus: any;
  filterTypeOFCustomer: any;
  status: any = '1';
  typeOfIndus: any = '1';
  typeOfCust: any = '1';
  saveCustomer: saveLeadCustomer;
  vendorname: any = '';
  vendortype: any = 'Lead Customer';
  addressline1: any = '';
  addressline2: any = '';
  addressline3: any = '';
  contactemail: any = '';
  firstname: any = '';
  lastname: any = '';
  designation: any = '';
  location: any = '';
  mobileno: any = '';
  pincode: any = '';

  userid: any;
  clientdate: any = new Date();
  LocationCode: any;
  Locationid: any;
  companyName: any;
  customerType: any;
  VendorId: string = '0';
  // public vForm: FormGroup;
  constructor(
    public navCtrl: NavController, public navParams: NavParams,
    public globalService: GlobalProvider,
    private modalCtrl: ModalController, public viewCtrl: ViewController,
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

    // debugger
    this.title = "New Sales Lead";
    this.appBuildConfig = this.globalService.appBuildConfig;

    // this.UserDetails = this.globalService.get('userDetails');
    // this.BranchTbl = this.UserDetails[Object.keys(this.UserDetails)[1]]["Table4"];
    // this.ActivityTbl = this.UserDetails[Object.keys(this.UserDetails)[1]]["Table3"];


    // this.filterActivityStatus = this.ActivityTbl.filter(t => t.Identifier == 'SalesLeadStatus');
    // this.filterTypesOFIndus = this.ActivityTbl.filter(t => t.Identifier == 'TypeOfIndustry');
    // this.filterTypeOFCustomer = this.ActivityTbl.filter(t => t.Identifier == 'TypeOfIndustry');


    if (this.globalService.isCordovaAvailable()) {
      this.BranchTbl = JSON.parse(localStorage.getItem('BranchTable'));
      this.filterActivityStatus = JSON.parse(localStorage.getItem('SalesLeadStatus'));
      this.filterTypesOFIndus = JSON.parse(localStorage.getItem('TypeOfIndustry'));
      this.filterTypeOFCustomer = JSON.parse(localStorage.getItem('TypeOfCustomer'));

    } else {

      this.filterActivityStatus = JSON.parse(localStorage.getItem('SalesLeadStatus'));
      this.filterTypesOFIndus = JSON.parse(localStorage.getItem('TypeOfIndustry'));
      this.filterTypeOFCustomer = JSON.parse(localStorage.getItem('TypeOfCustomer'));
      this.BranchTbl = JSON.parse(localStorage.getItem('BranchTable'));
    }


    this.saveCustomer = new saveLeadCustomer();
    this.userid = localStorage.getItem('userId');


    // if (this.globalService.selectedCity != '') {
    //   this.location = this.globalService.selectedCity.Locationtext;

    //   this.LocationCode = this.globalService.selectedCity.LocationCode;
    //   this.Locationid = this.globalService.selectedCity.Locationid;


    // }


    // if (this.globalService.valueForLeadCutomer != '') {

    //   this.companyName = this.globalService.valueForLeadCutomer.VendorName;
    //   this.customerType = this.globalService.valueForLeadCutomer.VendorType;
    //   this.addressline1 = this.globalService.valueForLeadCutomer.Address1;
    //   this.addressline2 = this.globalService.valueForLeadCutomer.Address2;
    //   this.addressline3 = this.globalService.valueForLeadCutomer.Address3;

    //   this.Locationid = this.globalService.valueForLeadCutomer.LocationID;
    //   this.status = this.globalService.valueForLeadCutomer.Status.toString();
    //   this.typeOfIndus = this.globalService.valueForLeadCutomer.TypeofIndustry.toString();
    //   this.typeOfCust = this.globalService.valueForLeadCutomer.TypeOfCustomer.toString();
    //   this.location = this.globalService.valueForLeadCutomer.LocationName;
    //   this.firstname = this.globalService.valueForLeadCutomer.FirstName;
    //   this.lastname = this.globalService.valueForLeadCutomer.LastName;
    //   this.designation = this.globalService.valueForLeadCutomer.Designation;
    //   this.mobileno = this.globalService.valueForLeadCutomer.Mobile;
    //   this.contactemail = this.globalService.valueForLeadCutomer.Email;

    //   //this.branchCode = this.globalService.valueForLeadCutomer.BranchName;
    //   this.pincode = this.globalService.valueForLeadCutomer.Pincode
    //   this.vendorname = this.globalService.valueForLeadCutomer.VendorName;

    // }

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

  // ionViewWillEnter() {
  //   alert('ionViewWillEnter')
  // }
  // ionViewDidEnter() {
  //   alert('ionViewDidEnter')

  // }

  openModal() {

    // if (this.branchCode == '0') {
    //   this.toastService.show('Please select branch.', 3000, true, 'top', 'toast-container')
    //   return;
    // }
    const profileModal = this.modalCtrl.create(FindLocationPage, { searchDetails: '1' });
    profileModal.onDidDismiss(data => {
      console.log('my data' + JSON.parse(data));
      if (data != undefined) {
        this.location = this.globalService.handleJSON(data).Locationtext;
        this.LocationCode = this.globalService.handleJSON(data).LocationCode;
        this.Locationid = this.globalService.handleJSON(data).Locationid;

        // if (this.globalService.isCordovaAvailable()) {
        //   console.log('my data' + data);

        // } else {
        //   // this.companyName = data.VendorName;
        //   // this.customerType = data.VendorType;
        //   // this.addressline1 = data.Address1;
        //   // this.addressline2 = data.Address2;
        //   // this.addressline3 = data.Address3;
        //   // this.Locationid = data.LocationID;
        //   // this.status = data.Status.toString();
        //   // this.typeOfIndus = data.TypeofIndustry.toString();
        //   // this.typeOfCust = data.TypeOfCustomer.toString();
        //   // this.location = data.LocationName;
        //   // this.firstname = data.FirstName;
        //   // this.lastname = data.LastName;
        //   // this.designation = data.Designation;
        //   // this.mobileno = data.Mobile;
        //   // this.contactemail = data.Email;
        //   // this.pincode = data.Pincode
        //   // this.vendorname = data.VendorName;

      }
      // }
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


  VendorMasterSaveHHT() {

    debugger
    if (this.branchCode == '0') {
      this.toastService.show('Please select branch.', 3000, true, 'top', 'toast-container')
      return;
    }

    if (this.vendorname == '') {
      this.toastService.show('Please enter/search company name.', 3000, true, 'top', 'toast-container')
      return;
    }


    if (this.location == '' || this.location == undefined) {
      this.toastService.show('Please search location.', 3000, true, 'top', 'toast-container')
      return;
    }


    if (this.addressline1 == '') {
      this.toastService.show('Please enter at least one address.', 3000, true, 'top', 'toast-container')
      return;
    }

    var mob = /^[1-9]{1}[0-9]{9}$/;
    var txtMobile = this.mobileno;
    if (mob.test(txtMobile) == false && this.mobileno != '') {
      this.toastService.show('Please enter valid mobile number.', 3000, true, 'top', 'toast-container')
      //  alert("Please enter valid mobile number.");
      // txtMobile.focus();
      return;
    }

    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // return re.test(String(email).toLowerCase());
    if (re.test(this.contactemail) == false && this.contactemail != '') {
      this.toastService.show('Please enter valid email Id.', 3000, true, 'top', 'toast-container')
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
      (day < 10 ? "0" + day.toString() : day) + " " +
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

    this.saveCustomer.VendorId = this.VendorId;
    this.saveCustomer.VendorName = this.vendorname;
    this.saveCustomer.VendorType = this.vendortype;
    this.saveCustomer.AddressLine1 = this.addressline1;
    this.saveCustomer.AddressLine2 = this.addressline2;
    this.saveCustomer.AddressLine3 = this.addressline3;
    this.saveCustomer.BranchCode = this.branchCode;
    this.saveCustomer.ContactEmail = this.contactemail;
    this.saveCustomer.FirstName = this.firstname;
    this.saveCustomer.LastName = this.lastname;
    this.saveCustomer.Designation = this.designation;
    this.saveCustomer.Location = this.Locationid.toString(); //'117601';// this.Locationid.toString();
    this.saveCustomer.MobileNo = this.mobileno;
    this.saveCustomer.PinCode = this.pincode;
    this.saveCustomer.Status = this.status;
    this.saveCustomer.TypeOfCustomer = this.typeOfCust;
    this.saveCustomer.TypeofIndustry = this.typeOfIndus;
    this.saveCustomer.UserId = this.userid;
    this.saveCustomer.ClientDate = localDatetime;// '2021-05-28 13:10:44.060';


    //     @VendorId int,
    // @VendorName varchar(max),
    // @VendorType varchar(max),
    // @AddressLine1 varchar(max),
    // @AddressLine2 varchar(max),
    // @AddressLine3 varchar(max),
    // @BranchCode varchar(max),
    // @ContactEmail varchar(max),
    // @FirstName varchar(max),
    // @LastName varchar(max),
    // @Designation varchar(max),
    // @Location int,
    // @MobileNo varchar(max),
    // @PinCode varchar(max),
    // @Status int,
    // @TypeOfCustomer int,
    // @TypeofIndustry int,
    // @UserId int,
    // @ClientDate varchar(max)

    this.http.POST(Constants.Corvi_Services.VendorMasterSaveForHHT, this.saveCustomer).then((response) => {

      console.log('response to check login method: ', response);

      if (response == 'Success') {

        this.showAlert('Success', 'Sales Lead Saved');
        // localStorage.removeItem('login_resp');
        // localStorage.removeItem('userDetails');

      } else {
        // this.toastService.show(response, 3000, true, 'top', 'toast-success');
        this.showAlert('Success', 'Sales Lead Saved');
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

  ngOnInit() {

    this.branchCode = this.globalService.globalDefaultBranchCode;
  }

  openModalFoSearchCompany() {

    if (this.branchCode == '0') {
      this.toastService.show('Please select branch.', 3000, true, 'top', 'toast-container')
      return;
    }
    const profileModal = this.modalCtrl.create(FindSalesActivityPage, { fromSaleLeadVal: '1', branchCode: this.branchCode });
    profileModal.onDidDismiss(data => {
      console.log(data);
      if (this.globalService.valueForLeadCutomer != '') {
        this.companyName = this.globalService.handleJSON(data).VendorName;
        this.customerType = this.globalService.handleJSON(data).VendorType;
        this.addressline1 = this.globalService.handleJSON(data).Address1;
        this.addressline2 = this.globalService.handleJSON(data).Address2;
        this.addressline3 = this.globalService.handleJSON(data).Address3;
        this.Locationid = this.globalService.handleJSON(data).LocationID;
        this.status = this.globalService.handleJSON(data).Status.toString();
        this.typeOfIndus = this.globalService.handleJSON(data).TypeofIndustry.toString();
        this.typeOfCust = this.globalService.handleJSON(data).TypeOfCustomer.toString();
        this.location = this.globalService.handleJSON(data).LocationName;
        this.firstname = this.globalService.handleJSON(data).FirstName;
        this.lastname = this.globalService.handleJSON(data).LastName;
        this.designation = this.globalService.handleJSON(data).Designation;
        this.mobileno = this.globalService.handleJSON(data).Mobile;
        this.contactemail = this.globalService.handleJSON(data).Email;
        this.pincode = this.globalService.handleJSON(data).Pincode
        this.vendorname = this.globalService.handleJSON(data).VendorName;

        this.VendorId = this.globalService.handleJSON(data).VendorIds.toString();
      }

      // if (this.globalService.valueForLeadCutomer != '') {
      //   this.companyName = this.globalService.valueForLeadCutomer.VendorName;
      //   this.customerType = this.globalService.valueForLeadCutomer.VendorType;
      //   this.addressline1 = this.globalService.valueForLeadCutomer.Address1;
      //   this.addressline2 = this.globalService.valueForLeadCutomer.Address2;
      //   this.addressline3 = this.globalService.valueForLeadCutomer.Address3;

      //   this.Locationid = this.globalService.valueForLeadCutomer.LocationID;
      //   this.status = this.globalService.valueForLeadCutomer.Status.toString();
      //   this.typeOfIndus = this.globalService.valueForLeadCutomer.TypeofIndustry.toString();
      //   this.typeOfCust = this.globalService.valueForLeadCutomer.TypeOfCustomer.toString();
      //   this.location = this.globalService.valueForLeadCutomer.LocationName;
      //   this.firstname = this.globalService.valueForLeadCutomer.FirstName;
      //   this.lastname = this.globalService.valueForLeadCutomer.LastName;
      //   this.designation = this.globalService.valueForLeadCutomer.Designation;
      //   this.mobileno = this.globalService.valueForLeadCutomer.Mobile;
      //   this.contactemail = this.globalService.valueForLeadCutomer.Email;

      //   //this.branchCode = this.globalService.valueForLeadCutomer.BranchName;
      //   this.pincode = this.globalService.valueForLeadCutomer.Pincode
      //   this.vendorname = this.globalService.valueForLeadCutomer.VendorName;
      // }

      // this.companyName = '';
      // this.customerType = '';;
      // this.addressline1 = '';
      // this.addressline2 = '';
      // this.addressline3 = '';

      // this.Locationid = '';
      // this.status = '';
      // this.typeOfIndus = '';
      // this.typeOfCust = '';
      // this.location = '';
      // this.firstname = '';
      // this.lastname = '';
      // this.designation = '';
      // this.mobileno = '';
      // this.contactemail = '';

    });
    profileModal.present();
    this.globalService.store('branchCode', this.branchCode);


    //this.branchCode = this.globalService.valueForLeadCutomer.BranchName;
    this.pincode = this.globalService.valueForLeadCutomer.Pincode
    this.vendorname = this.globalService.valueForLeadCutomer.VendorName;
    //this.globalService.store('branchCode', this.branchCode);
  }


  IsMobileNumber(txtMobId: any) {

    var mob = /^[1-9]{1}[0-9]{9}$/;
    var txtMobile = txtMobId;
    if (mob.test(txtMobId) == false && txtMobId != '') {
      this.toastService.show('Please enter valid mobile number.', 3000, true, 'top', 'toast-container')
      //  alert("Please enter valid mobile number.");
      // txtMobile.focus();
      return false;
    }
    return true;
  }


  validateEmail(email) {

    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // return re.test(String(email).toLowerCase());
    if (re.test(email) == false && email != '') {
      this.toastService.show('Please enter valid email Id.', 3000, true, 'top', 'toast-container')
      return false;
    }
    return true;
  }

}
