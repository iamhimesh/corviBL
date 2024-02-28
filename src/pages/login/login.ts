

/**
 * @author Sachin Semlety
 * @email sachin.semlety@kalelogistics.in
 * @create date 2018-08-10 11:03:45
 * @modify date 2018-08-10 11:03:45
 * @desc [description]
*/
import { Component } from "@angular/core";
import { NavController, ToastController, MenuController, Events, Platform, ModalController } from "ionic-angular";
import { RegisterPage } from "../register/register";
import { GlobalProvider } from "../../providers/global/global";
import { HttpServiceProvider } from "../../providers/http-service/http-service";
import { Constants } from "../../constants";
// import { Constants } from './../../constants';
import { TabsPage } from "../tabs/tabs";
import { AlertService } from "../../providers/util/alert.service";
import { ToastService } from "../../providers/util/toast.service";
// import { BaseURLProvider } from "../../providers/baseUrlGenerator/baseurlgenerator";
import { EnquiryPage } from "../enquiry/enquiry";
import { HomePage } from "../_home/home";
import { ResetPasswordPage } from "../reset-password/reset-password";
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { DashboardPage } from "../dashboard/dashboard";
import { WelcomeuserPage } from "../welcomeuser/welcomeuser";
import { BaseURLProvider } from "../../providers/baseUrlGenerator/baseurlgenerator";

export class signUpList {
  UserID: string;
  Password: string;
  IdentityCode: string;
  // CustIdCode: string;
}
export class User {
  UserId: string; Password: string;
  IdentityCode: string;
}
declare var Email: any;
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  signUpVarList: signUpList;
  user: User;
  isRemembered: boolean;
  loggedIn: true;
  showCustIdCode: boolean = true;
  authForm: FormGroup;
  username: any;
  password: any;
  customerCode: any;
  public showPass = false;
  public type = "password";

  stageOne;

  custIdCode: string = 'TES'

  modesTwo: any = [];

  profileType = '';
  signUpButtonshowHide: string;
  finalStatus: string;
  statusForcheck: string;
  temp: string;
  findList: any ='';
  msgg: any ='BLL';
  constructor(
    public nav: NavController,
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
    public fb: FormBuilder
  ) {
    this.signUpVarList = new signUpList();
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

    //   alert(localDatetime)

    this.menu.swipeEnable(false);
    this.menu.close();
    this.user = new User();

    // this.authForm = fb.group({
    //   'username' : [null, Validators.compose([Validators.required,Validators.minLength(3)])],
    //   'password' : [null, Validators.compose([Validators.required,Validators.minLength(3)])],
    //   'customerCode' : [null, Validators.compose([Validators.required,Validators.minLength(3)])],
    // });

  }

  //On page Load
  ionViewDidEnter() {
    this.RegisterNowButton();
    this.getUserDetails();
  }

  // go to register page
  register() {
    this.globalService.routePage(RegisterPage);
  }

  showPassword() {
    this.showPass = !this.showPass;

    if (this.showPass) {
      this.type = "text";
    } else {
      this.type = "password";
    }
  }

  // login and go to home page
  logIn() {
    // this.globalService.remove('isLogged');
    // this.globalService.remove('login_resp');
    // this.globalService.remove('userDetails');

    this.globalService.remove('ActivityStatus');
    this.globalService.remove('SalesLeadStatus');
    this.globalService.remove('ActivityPriority');

    this.globalService.remove('bvalue');
    this.globalService.remove('ProfileType');
    this.globalService.remove('branchCode');

    this.globalService.remove('TransportMode');
    this.globalService.remove('CommunicationType');
    this.globalService.remove('reportingUSer');
    this.globalService.remove('BranchTable');
    this.globalService.remove('Activity');
    this.globalService.remove('ServiceType');
    this.globalService.remove('ShipmentType');
    this.globalService.remove('jobType');
    this.globalService.remove('TypeOfIndustry');
    this.globalService.remove('branchCode');
    this.globalService.remove('flagJobSearch');
    this.globalService.remove('customerJobSearch');
    this.globalService.remove('filterMilestone');



    try {


      // this.platform.ready().then(() => {
      let companyCode = this.user.IdentityCode.slice(0, 3);
      console.log('check CI code: ', companyCode);
      this.baseUrlProvider.setBaseURL(companyCode).then((msg) => {
        console.log('check msg from login()', msg);
        // if (msg != null && msg != '') {
        // console.log('response to check 1');
        this.http.POST(Constants.Corvi_Services.Login, this.user).then((response) => {
          console.log('response to check login method: ', response);
          // this.globalService.store('custIdCode', this.user.custIdCode);
          this.user_Rememebered();
          this.globalService.store('login_resp', response);

          (response.hasOwnProperty('access_token')) ? this.fetchUserDetails() : this.globalService.showToast('Something went wrong');
        }, (err) => {
          console.log('error Login ', err);
          console.log('response to check service link: ', Constants.Corvi_Services.Login);
          this.LoginInvalid(err);
        });
        // }
        // else {
        //   this.globalService.showAlert('Invalid Customer Identity Code')
        // }

      }); // this.baseUrlProvider ends
      // }); //platform end
    }
    catch (msg) {
      this.globalService.showAlert('Enter valid Customer Identity code');
    }
  }


  forgotPass() {
    this.alertService.forgetPassword().then((data) => {
      data && this.sendPassword(data);
      // isSend && this.toastService.show('Email was sended successfully please check your email', 3000, true, 'top', 'dark-trans');
    })
  }

  forgotPwd() {
    this.nav.push(ResetPasswordPage);
  }

  signUp() {
    this.nav.push(RegisterPage);
  }


  openSupport() {
    window.open('http://support.kalelogistics.in/', '_system');
  }

  openContactModal() {
    // let contactModal = this.modalCtrl.create(ContactUsPage);
    // contactModal.present();

    window.open('https://www.kalelogistics.com/contact-us/', '_system');
  }

  user_Rememebered() {
    if (this.isRemembered) {

      this.globalService.store('userName', this.user.UserId);
      this.globalService.store('password', this.user.Password);
      this.globalService.store('CustIdCode', this.user.IdentityCode);
      this.globalService.store('isRemembered', "true");
    } else {
      this.globalService.store('userName', this.user.UserId);
      this.globalService.store('password', this.user.Password);
      this.globalService.store('CustIdCode', this.user.IdentityCode);
      this.globalService.store('isRemembered', "");
    }
  }

  // check input Valid
  // isInputValid(): boolean {
  //   if (this.user.Password != undefined && this.user.Username != undefined && this.user.CustIdCode != undefined && this.user.Password.trim() !== '' && this.user.Username.trim() !== '' && this.user.CustIdCode.trim() !== '' && this.user.CustIdCode.length > 2)
  //     return false;
  //   else
  //     return true;
  // }

  getUserDetails() {
    this.globalService.get('isRemembered')
      .then(
        isRemembered => isRemembered == '' ? this.setUsernamePwd(false) : this.setUsernamePwd(isRemembered),
        error => console.error(error)
      );

    this.globalService.get('custIdCode')
      .then((custIdCode) => {
        // custIdCode == '' ? this.user.CustIdCode = "" : this.user.CustIdCode = custIdCode;
        custIdCode == '' ? this.showCustIdCode = true : this.showCustIdCode = false;
      }),
      error => console.error(error);
  }

  setUsernamePwd(isRemembered) {
    if (isRemembered) {
      this.isRemembered = isRemembered;
      this.globalService.get('userName')
        .then(
          userId => this.user.UserId = userId,
          error => console.error(error)
        );
      this.globalService.get('password')
        .then(
          pwd => this.user.Password = pwd,
          error => console.error(error)
        );
      this.globalService.get('CustIdCode')
        .then(
          IdentityCode => this.user.IdentityCode = IdentityCode,
          error => console.error(error)
        );
    } else {
      this.isRemembered = false;
    }
  }

  LoginInvalid(err) {
    if (this.globalService.isCordovaAvailable()) {
      let error = JSON.parse(err.error);
      if (error.hasOwnProperty('error') && err.status == 400 && error.error == 'invalid_grant') {
        this.user.Password = '';
        this.globalService.showAlert(error.error_description);
      }
    } else {
      let error = this.globalService.handleJSON(err._body);
      if (error.hasOwnProperty('error') && err.status == 400 && error.error == 'invalid_grant') {
        this.user.Password = '';
        this.globalService.showAlert(error.error_description);
      }
    }
  }

  fetchUserDetails() {

    this.globalService.get('userName')
      .then(
        UUID => this.setDetails(UUID),
        error => console.error(error)
      );
  }

  setDetailsone(UUID) { // dont touch
    debugger
    this.user.UserId = UUID;
    this.http.POST(Constants.Corvi_Services.UserDetails, this.user).then((userDetailsResp: any) => {

      // this.globalService.store('userDetails', userDetailsResp); //old
      // this.stageOne = userDetailsResp['Table'][0]; // old
      if (this.globalService.isCordovaAvailable()) {
        this.stageOne = JSON.parse(userDetailsResp)['Table'][0];
        this.globalService.store('userDetails', JSON.parse(userDetailsResp)); //old
      } else {
        this.stageOne = userDetailsResp['Table'][0];
        this.globalService.store('userDetails', userDetailsResp); //old
      }

      console.log('check userdetails', userDetailsResp);

      console.log('check userdetails2', this.stageOne.UserId);
      localStorage.setItem('userId', this.stageOne.UserId);
      localStorage.setItem('profileType', this.stageOne.ProfileType);
      localStorage.setItem('reportingTo', this.stageOne.ReportingTo);

      console.log('what profile: ', localStorage.getItem('profileType'));
      console.log('Is Reporting to: ', localStorage.getItem('reportingTo'));
      this.profileType = localStorage.getItem('profileType');
      console.log('checking from local', localStorage.getItem('userId'));
      this.globalService.publishEventwithData('app:userDetails', userDetailsResp);
      this.globalService.publishEventwithData('login:sessionExpired', 5000000);
      // below is new for dynamic side menu
      this.events.publish('user:created', this.profileType, Date.now());
      this.globalService.setRootPage(WelcomeuserPage);
    }, (err) => {
      console.log('error Login ', err);
    });
  }

  setDetails(UUID) {
    this.user.UserId = UUID;
    this.http.POST(Constants.Corvi_Services.UserDetails, this.user).then((userDetailsResp: any) => {


      var parsed = JSON.stringify(userDetailsResp);
      let stageOne

      var Activity: any = [];
      var ActivityPriority: any = [];
      var CommunicationType: any = [];
      var ActivityStatus: any = [];
      var BranchTable: any = [];
      var SalesLeadStatus: any = [];
      var TypeOfIndustry: any = [];
      var TypeOfIndustry: any = [];
      var reportingUSer: any = [];
      let dataT;
      //hemesh
      var TransportMode: any = [];
      var ShipmentType: any = [];
      var ShipmentTypeAir: any = [];
      var ShipmentTypeRail: any = [];
      var ShipmentTypeRoad: any = [];
      var ServiceType: any = [];
      var TypeOfCustomer: any = [];

      var MenuItems: any = [];


      if (this.globalService.isCordovaAvailable()) {
        dataT = JSON.parse(userDetailsResp);
        console.log('I am from cordova');
        this.globalService.store('userDetails', dataT);

        stageOne = dataT['Table'][0];
        this.globalService.store('ProfileType', JSON.parse(userDetailsResp)["Table"][0]["ProfileType"]);
        this.globalService.store('ReportingTo', JSON.parse(userDetailsResp)["Table"][0]["ReportingTo"]);

        Activity = JSON.parse(userDetailsResp)["Table3"].filter(t => t.Identifier == 'Activity');
        ActivityPriority = JSON.parse(userDetailsResp)["Table3"].filter(t => t.Identifier == 'ActivityPriority');
        CommunicationType = JSON.parse(userDetailsResp)["Table3"].filter(t => t.Identifier == 'CommunicationType');
        ActivityStatus = JSON.parse(userDetailsResp)["Table3"].filter(t => t.Identifier == 'ActivityStatus');
        BranchTable = JSON.parse(userDetailsResp)["Table4"];

        //himesh on 07/09
        if (typeof (JSON.parse(userDetailsResp)["Table6"][0]) != 'undefined') {
          this.globalService.defaultMode = JSON.parse(userDetailsResp)["Table6"][0]["Mode"];
          this.globalService.defaultService = JSON.parse(userDetailsResp)["Table6"][0]["Service"];
          this.globalService.defaultJobType = JSON.parse(userDetailsResp)["Table6"][0]["JobType"];
          this.globalService.defaultNoofRecords = JSON.parse(userDetailsResp)["Table6"][0]["NoofRecordsPrListing"];
        }
        //himesh on 08/09
        this.globalService.menuItems = JSON.parse(userDetailsResp)["Table2"];
        // added on 09/07 to check role action
        for (let p of this.globalService.menuItems) {
          if (p.MenuName == 'Sales Activity') {
            localStorage.setItem('dashSales', '1');
            if (p.View == '1') {
              this.globalService.viewSales == '1';
              localStorage.setItem('viewSales', '1');
            } else {
              this.globalService.viewSales == '0';
              localStorage.setItem('viewSales', '0');
            }
            if (p.Update == '1') {
              this.globalService.editSales == '1';
              localStorage.setItem('editSales', '1');
            } else {
              this.globalService.editSales == '0';
              localStorage.setItem('editSales', '0');
            }
            if (p.Create == '1') {
              this.globalService.createSales == '1';
              localStorage.setItem('createSales', '1');
            } else {
              this.globalService.createSales == '0';
              localStorage.setItem('createSales', '0');
            }
          }

          if (p.MenuName == 'Sales Lead-Customer') {
            localStorage.setItem('dashLead', '1');
            if (p.View == '1') {
              this.globalService.viewLead == '1';
              localStorage.setItem('viewLead', '1');
            } else {
              this.globalService.viewLead == '0';
              localStorage.setItem('viewLead', '0');
            }
            if (p.Update == '1') {
              this.globalService.editLead == '1';
              localStorage.setItem('editLead', '1');
            } else {
              this.globalService.editLead == '0';
              localStorage.setItem('editLead', '0');
            }
            if (p.Create == '1') {
              this.globalService.createLead == '1';
              localStorage.setItem('createLead', '1');
            } else {
              this.globalService.createLead == '0';
              localStorage.setItem('createLead', '0');
            }
          }

          if (p.MenuName == 'Update Job Milestone') {
            localStorage.setItem('dashMilestone', '1');
            if (p.View == '1') {
              this.globalService.viewMilestone == '1';
              localStorage.setItem('viewMilestone', '1');
            } else {
              this.globalService.viewMilestone == '0';
              localStorage.setItem('viewMilestone', '0');
            }
            if (p.Update == '1') {
              this.globalService.editMilestone == '1';
              localStorage.setItem('editMilestone', '1');
            } else {
              this.globalService.editMilestone == '0';
              localStorage.setItem('editMilestone', '0');
            }
            if (p.Create == '1') {
              this.globalService.createMilestone == '1';
              localStorage.setItem('createMilestone', '1');
            } else {
              this.globalService.createMilestone == '0';
              localStorage.setItem('createMilestone', '0');
            }
          }

          if (p.MenuName == 'View Reporting User Activity') {
            localStorage.setItem('dashReportingUser', '1');
          }


          if (p.MenuName == 'Shipment Status') {
            localStorage.setItem('dashShipStatus', '1');
          }
          if (p.MenuName == 'Shipment Invoice') {
            localStorage.setItem('dashShipInvoice', '1');
          }
        }


        for (var i = 0; i < BranchTable.length; i++) {
          if (BranchTable[i].IsDefault == '1') {
            this.globalService.globalDefaultBranchCode = BranchTable[i].BranchCode
          }
        }

        ShipmentType = JSON.parse(userDetailsResp)["Table3"].filter(t => t.Identifier == 'ShipmentType');
        ServiceType = JSON.parse(userDetailsResp)["Table3"].filter(t => t.Identifier == 'Service');
        TransportMode = JSON.parse(userDetailsResp)["Table3"].filter(t => t.Identifier == 'TransportMode');
        TypeOfCustomer = JSON.parse(userDetailsResp)["Table3"].filter(t => t.Identifier == 'TypeOfCustomer');

        ShipmentTypeAir = JSON.parse(userDetailsResp)["Table3"].filter(t => t.Identifier == 'ShipmentTypeAir');
        ShipmentTypeRail = JSON.parse(userDetailsResp)["Table3"].filter(t => t.Identifier == 'ShipmentTypeAir');


        //Himesh


        ShipmentType = JSON.parse(userDetailsResp)["Table3"].filter(t => t.Identifier == 'ShipmentType');
        ServiceType = JSON.parse(userDetailsResp)["Table3"].filter(t => t.Identifier == 'Service');
        TransportMode = JSON.parse(userDetailsResp)["Table3"].filter(t => t.Identifier == 'TransportMode');
        ShipmentTypeAir = JSON.parse(userDetailsResp)["Table3"].filter(t => t.Identifier == 'ShipmentTypeAir');
        ShipmentTypeRail = JSON.parse(userDetailsResp)["Table3"].filter(t => t.Identifier == 'ShipmentTypeAir');
        ShipmentTypeRoad = JSON.parse(userDetailsResp)["Table3"].filter(t => t.Identifier == 'ShipmentTypeRoad');



        reportingUSer = JSON.parse(userDetailsResp)["Table5"];
        SalesLeadStatus = JSON.parse(userDetailsResp)["Table3"].filter(t => t.Identifier == 'SalesLeadStatus');
        TypeOfIndustry = JSON.parse(userDetailsResp)["Table3"].filter(t => t.Identifier == 'TypeOfIndustry');
        TypeOfCustomer = JSON.parse(userDetailsResp)["Table3"].filter(t => t.Identifier == 'TypeOfCustomer');


        localStorage.setItem('Activity', JSON.stringify(Activity));
        localStorage.setItem('ActivityPriority', JSON.stringify(ActivityPriority));
        localStorage.setItem('CommunicationType', JSON.stringify(CommunicationType));
        localStorage.setItem('ActivityStatus', JSON.stringify(ActivityStatus));
        localStorage.setItem('BranchTable', JSON.stringify(BranchTable));
        localStorage.setItem('ShipmentType', JSON.stringify(ShipmentType));
        localStorage.setItem('ServiceType', JSON.stringify(ServiceType));
        localStorage.setItem('TransportMode', JSON.stringify(TransportMode));




        // localStorage.setItem('BranchTable', JSON.stringify(BranchTable));
        localStorage.setItem('ShipmentType', JSON.stringify(ShipmentType));
        localStorage.setItem('ServiceType', JSON.stringify(ServiceType));
        localStorage.setItem('TransportMode', JSON.stringify(TransportMode));

        localStorage.setItem('ShipmentTypeAir', JSON.stringify(ShipmentTypeAir));
        localStorage.setItem('ShipmentTypeRail', JSON.stringify(ShipmentTypeRail));
        localStorage.setItem('ShipmentTypeRoad', JSON.stringify(ShipmentTypeRoad));



        localStorage.setItem('reportingUSer', JSON.stringify(reportingUSer));

        localStorage.setItem('SalesLeadStatus', JSON.stringify(SalesLeadStatus));
        localStorage.setItem('TypeOfIndustry', JSON.stringify(TypeOfIndustry));
        localStorage.setItem('TypeOfCustomer', JSON.stringify(TypeOfCustomer));



      } else {

        this.globalService.store('userDetails', userDetailsResp);
        console.log('I am from browser');
        stageOne = userDetailsResp['Table'][0];
        // tem = userDetailsResp["Table"][0]["ProfileType"];
        this.globalService.store('ProfileType', userDetailsResp["Table"][0]["ProfileType"]);
        // this.globalService.store('ReportingTo', userDetailsResp["Table"][0]["ReportingTo"]);



        Activity = userDetailsResp["Table3"].filter(t => t.Identifier == 'Activity');
        ActivityPriority = userDetailsResp["Table3"].filter(t => t.Identifier == 'ActivityPriority');
        CommunicationType = userDetailsResp["Table3"].filter(t => t.Identifier == 'CommunicationType');
        ActivityStatus = userDetailsResp["Table3"].filter(t => t.Identifier == 'ActivityStatus');
        BranchTable = userDetailsResp["Table4"];

        //himesh on 07/09
        if (typeof (userDetailsResp["Table6"][0]) != 'undefined') {
          this.globalService.defaultMode = userDetailsResp["Table6"][0]["Mode"];
          this.globalService.defaultService = userDetailsResp["Table6"][0]["Service"];
          this.globalService.defaultJobType = userDetailsResp["Table6"][0]["JobType"];
          this.globalService.defaultNoofRecords = userDetailsResp["Table6"][0]["NoofRecordsPrListing"];

        }

        //himesh on 08/09
        this.globalService.menuItems = userDetailsResp["Table2"];
        // added on 09/07 to check role action
        for (let p of this.globalService.menuItems) {
          if (p.MenuName == 'Sales Activity') {
            localStorage.setItem('dashSales', '1');
            if (p.View == '1') {
              this.globalService.viewSales == '1';
              localStorage.setItem('viewSales', '1');
            } else {
              this.globalService.viewSales == '0';
              localStorage.setItem('viewSales', '0');
            }
            if (p.Update == '1') {
              this.globalService.editSales == '1';
              localStorage.setItem('editSales', '1');
            } else {
              this.globalService.editSales == '0';
              localStorage.setItem('editSales', '0');
            }
            if (p.Create == '1') {
              this.globalService.createSales == '1';
              localStorage.setItem('createSales', '1');
            } else {
              this.globalService.createSales == '0';
              localStorage.setItem('createSales', '0');
            }
          }

          if (p.MenuName == 'Sales Lead-Customer') {
            localStorage.setItem('dashLead', '1');
            if (p.View == '1') {
              this.globalService.viewLead == '1';
              localStorage.setItem('viewLead', '1');
            } else {
              this.globalService.viewLead == '0';
              localStorage.setItem('viewLead', '0');
            }
            if (p.Update == '1') {
              this.globalService.editLead == '1';
              localStorage.setItem('editLead', '1');
            } else {
              this.globalService.editLead == '0';
              localStorage.setItem('editLead', '0');
            }
            if (p.Create == '1') {
              this.globalService.createLead == '1';
              localStorage.setItem('createLead', '1');
            } else {
              this.globalService.createLead == '0';
              localStorage.setItem('createLead', '0');
            }
          }

          if (p.MenuName == 'Update Job Milestone') {
            localStorage.setItem('dashMilestone', '1');
            if (p.View == '1') {
              this.globalService.viewMilestone == '1';
              localStorage.setItem('viewMilestone', '1');
            } else {
              this.globalService.viewMilestone == '0';
              localStorage.setItem('viewMilestone', '0');
            }
            if (p.Update == '1') {
              this.globalService.editMilestone == '1';
              localStorage.setItem('editMilestone', '1');
            } else {
              this.globalService.editMilestone == '0';
              localStorage.setItem('editMilestone', '0');
            }
            if (p.Create == '1') {
              this.globalService.createMilestone == '1';
              localStorage.setItem('createMilestone', '1');
            } else {
              this.globalService.createMilestone == '0';
              localStorage.setItem('createMilestone', '0');
            }
          }

          if (p.MenuName == 'View Reporting User Activity') {
            localStorage.setItem('dashReportingUser', '1');
          }

          if (p.MenuName == 'Shipment Status') {
            localStorage.setItem('dashShipStatus', '1');
          }
          if (p.MenuName == 'Shipment Invoice') {
            localStorage.setItem('dashShipInvoice', '1');
          }
        }

        console.log('check milestone: ', localStorage.getItem('viewSales'));
        console.log('check again milestone: ', this.globalService.viewSales);

        // this.globalService.defaultMode = userDetailsResp["Table6"][0]["Mode"];

        console.log('***** check default mode *****: ', this.globalService.defaultMode);

        for (var i = 0; i < BranchTable.length; i++) {
          if (BranchTable[i].IsDefault == '1') {
            this.globalService.globalDefaultBranchCode = BranchTable[i].BranchCode;
            //alert(this.globalService.globalDefaultBranchCode)
          }
        }

        ShipmentType = userDetailsResp["Table3"].filter(t => t.Identifier == 'ShipmentType');
        ServiceType = userDetailsResp["Table3"].filter(t => t.Identifier == 'Service');
        TransportMode = userDetailsResp["Table3"].filter(t => t.Identifier == 'TransportMode');
        //Himesh
        ShipmentType = userDetailsResp["Table3"].filter(t => t.Identifier == 'ShipmentType');
        ServiceType = userDetailsResp["Table3"].filter(t => t.Identifier == 'Service');
        TransportMode = userDetailsResp["Table3"].filter(t => t.Identifier == 'TransportMode');
        TypeOfCustomer = userDetailsResp["Table3"].filter(t => t.Identifier == 'TypeOfCustomer');
        ShipmentTypeAir = userDetailsResp["Table3"].filter(t => t.Identifier == 'ShipmentTypeAir');
        ShipmentTypeRail = userDetailsResp["Table3"].filter(t => t.Identifier == 'ShipmentTypeRail');
        ShipmentTypeRoad = userDetailsResp["Table3"].filter(t => t.Identifier == 'ShipmentTypeRoad');

        reportingUSer = userDetailsResp["Table5"];
        SalesLeadStatus = userDetailsResp["Table3"].filter(t => t.Identifier == 'SalesLeadStatus');
        TypeOfIndustry = userDetailsResp["Table3"].filter(t => t.Identifier == 'TypeOfIndustry');
        TypeOfIndustry = userDetailsResp["Table3"].filter(t => t.Identifier == 'TypeOfIndustry');

        localStorage.setItem('Activity', JSON.stringify(Activity));
        localStorage.setItem('ActivityPriority', JSON.stringify(ActivityPriority));
        localStorage.setItem('CommunicationType', JSON.stringify(CommunicationType));
        localStorage.setItem('ActivityStatus', JSON.stringify(ActivityStatus));
        localStorage.setItem('BranchTable', JSON.stringify(BranchTable));
        localStorage.setItem('ShipmentType', JSON.stringify(ShipmentType));
        localStorage.setItem('ServiceType', JSON.stringify(ServiceType));
        localStorage.setItem('TransportMode', JSON.stringify(TransportMode));

        //Himesh

        localStorage.setItem('ShipmentType', JSON.stringify(ShipmentType));
        localStorage.setItem('ServiceType', JSON.stringify(ServiceType));
        localStorage.setItem('TransportMode', JSON.stringify(TransportMode));
        localStorage.setItem('ShipmentTypeAir', JSON.stringify(ShipmentTypeAir));
        localStorage.setItem('ShipmentTypeRail', JSON.stringify(ShipmentTypeRail));
        localStorage.setItem('ShipmentTypeRoad', JSON.stringify(ShipmentTypeRoad));



        localStorage.setItem('SalesLeadStatus', JSON.stringify(SalesLeadStatus));
        localStorage.setItem('TypeOfIndustry', JSON.stringify(TypeOfIndustry));
        // localStorage.setItem('TypeOfIndustry', JSON.stringify(TypeOfIndustry));
        localStorage.setItem('reportingUSer', JSON.stringify(reportingUSer));

        localStorage.setItem('TypeOfCustomer', JSON.stringify(TypeOfCustomer));


      }
      console.log('check userdetails2', stageOne.UserId);
      localStorage.setItem('userId', stageOne.UserId);
      localStorage.setItem('profileType', stageOne.ProfileType);
      localStorage.setItem('reportingTo', stageOne.ReportingTo);
      console.log('what profile: ', localStorage.getItem('profileType'));
      console.log('Is Reporting to: ', localStorage.getItem('reportingTo'));
      this.profileType = localStorage.getItem('profileType');


      console.log('checking from local', localStorage.getItem('userId'));
      this.globalService.publishEventwithData('app:userDetails', userDetailsResp);
      this.globalService.publishEventwithData('login:sessionExpired', 5000000);
      // below is new for dynamic side menu
      this.events.publish('user:created', this.profileType, Date.now());

      this.globalService.setRootPage(DashboardPage); // here junaid's customerdashboard was there

    }, (err) => {
      console.log('error Login ', err);
    });
  }

  sendPassword(data) {
    let Username = data.forgotPwd.username;
    if (Username.trim() !== "" && Username !== undefined) {
      this.http.POST(Constants.Corvi_Services.ForgetPassword, {
        "UserId": Username
      }).then((res: any) => {

        let response = JSON.parse(res);
        let forgotPwdRes = response['Table'][0];
        forgotPwdRes['MSG'] == "Success" ? this.sendMailToUser(forgotPwdRes) : this.toastService.show(forgotPwdRes['MSG'], 3000, true, 'top', 'dark-trans')
      })
    } else {
      this.globalService.showToast('Please enter username');
    }
  }


  sendMailToUser(res) {
    let Password = res['Password'];
    let emailId = res['Email'].replace(/,/g, "");
    Email.send({
      Host: Constants.SMTP_Credentails.Host,
      Username: Constants.SMTP_Credentails.Username,
      Password: Constants.SMTP_Credentails.Password,
      To: emailId,
      From: Constants.SMTP_Credentails.From,
      Subject: "Corvi - Forgot Password",
      Body: `Your Password is ${Password}`
    }).then(
      message => this.showToast(message, emailId)
    );
  }

  showToast(message, EmailId) {
    message == "OK" ? this.toastService.show(`Password has been sent to ${EmailId},please check your mail`, 3000, true, 'top', 'dark-trans') : this.toastService.show('Something went wrong', 3000, true, 'top', 'dark-trans');
  }

  EnquiryForm() {
    this.globalService.routePage(EnquiryPage);
  }

  goToDashboard() {
    this.globalService.routePage(HomePage);
  }

  dashboard() {

    this.globalService.setRootPage(WelcomeuserPage);
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
