

/**
 * @author Sachin Semlety
 * @email sachin.semlety@kalelogistics.in
 * @create date 2018-08-10 11:03:45
 * @modify date 2018-08-10 11:03:45
 * @desc [description]
*/
import { Component } from "@angular/core";
import { NavController, ToastController, MenuController, AlertController } from "ionic-angular";
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

export class User {
  UserId: string; Password: string;
  // CustIdCode: string;
}
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
declare var Email: any;
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  user: User;
  isRemembered: boolean;
  loggedIn: true;
  showCustIdCode: boolean = true;
  authForm: FormGroup;
  username: any;
  password: any;
  saveCustomer:saveLeadCustomer
  customerCode: any = '15';
  public showPass = false;
  public type = "password";
  constructor(
    private alertCtrl: AlertController,
    public nav: NavController,
    public menu: MenuController,
    public toastCtrl: ToastController,
    public globalService: GlobalProvider,
    public http: HttpServiceProvider,
    public alertService: AlertService,
    public toastService: ToastService,
    // public baseURLProvider: BaseURLProvider,
    public fb: FormBuilder
  ) {

    //this.presentAlert();




    this.menu.swipeEnable(false);
    this.menu.close();
    this.user = new User();
this.saveCustomer = new saveLeadCustomer();
    // this.authForm = fb.group({
    //   'username' : [null, Validators.compose([Validators.required,Validators.minLength(3)])],
    //   'password' : [null, Validators.compose([Validators.required,Validators.minLength(3)])],
    //   'customerCode' : [null, Validators.compose([Validators.required,Validators.minLength(3)])],
    // });
  //  this.VendorMasterSaveHHT();
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Low battery',
      subTitle: '10% of battery remaining',
      buttons: ['Dismiss']
    });
    alert.present();
  }

  //On page Load
  ionViewDidEnter() {
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
    localStorage.removeItem('branchCode');
    localStorage.removeItem('customerData');
    localStorage.removeItem('branchCode');
    // let companyCode = this.user.custIdCode.substring(0, 3);
    // this.baseURLProvider.setBaseURL(companyCode).then((msg) => {
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

    // });
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

  user_Rememebered() {
    if (this.isRemembered) {

      this.globalService.store('userName', this.user.UserId);
      this.globalService.store('password', this.user.Password);
      this.globalService.store('isRemembered', "true");
    } else {
      this.globalService.store("userName", this.user.UserId);
      this.globalService.store("password", "");
      this.globalService.remove('isRemembered')
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

  setDetails(UUID) {

    this.user.UserId = UUID;
    this.http.POST(Constants.Corvi_Services.UserDetails, this.user).then((userDetailsResp) => {

      this.globalService.store('userDetails', userDetailsResp);
      console.log('check userdetails', userDetailsResp);
      let stageOne = userDetailsResp['Table'][0];
      console.log('check userdetails2', stageOne.UserId);
      localStorage.setItem('userId', stageOne.UserId);
      console.log('checking from local', localStorage.getItem('userId'));
      this.globalService.publishEventwithData('app:userDetails', userDetailsResp);
      this.globalService.publishEventwithData('login:sessionExpired', 500000);
      this.globalService.setRootPage(WelcomeuserPage);
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




  VendorMasterSaveHHT() {

    debugger


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

    this.saveCustomer.VendorId = '0';
    this.saveCustomer.VendorName = 'comp'
    this.saveCustomer.VendorType = "Lead Customer"
    this.saveCustomer.AddressLine1 = "test";
    this.saveCustomer.AddressLine2 = ''
    this.saveCustomer.AddressLine3 = ''
    this.saveCustomer.ContactEmail = ''
    this.saveCustomer.FirstName = ''
    this.saveCustomer.LastName = ''
    this.saveCustomer.Designation = ''
    this.saveCustomer.Location = '11217'
    this.saveCustomer.MobileNo = ''
    this.saveCustomer.PinCode = ''
    this.saveCustomer.Status = '1'
    this.saveCustomer.TypeOfCustomer ='1'
    this.saveCustomer.TypeofIndustry = '1'
    this.saveCustomer.UserId = '1'
    this.saveCustomer.ClientDate = localDatetime;
    this.saveCustomer.BranchCode = 'CCU'





    this.http.POST(Constants.Corvi_Services.VendorMasterSaveForHHT, this.saveCustomer).then((response) => {

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
