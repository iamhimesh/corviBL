/**
 * @author Sachin Semlety
 * @email sachin.semlety@kalelogistics.in
 * @create date 2018-08-10 11:03:45
 * @modify date 2018-08-10 11:03:45
 * @desc [description]
*/
import { Component } from "@angular/core";
import { NavController, ToastController, MenuController } from "ionic-angular";
import { RegisterPage } from "../register/register";
import { GlobalProvider } from "../../providers/global/global";
import { HttpServiceProvider } from "../../providers/http-service/http-service";
import { Constants } from "../../constants";
import { TabsPage } from "../tabs/tabs";
import { AlertService } from "../../providers/util/alert.service";
import { ToastService } from "../../providers/util/toast.service";
import { BaseURLProvider } from "../../providers/baseUrlGenerator/baseurlgenerator";
import { EnquiryPage } from "../enquiry/enquiry";
import { HomePage } from "../_home/home";
import { DashboardPage } from "../dashboard/dashboard";
import { WelcomeuserPage } from "../welcomeuser/welcomeuser";

export class User { UserID: string; Password: string; UUID: any; custIdCode: any; }
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
  constructor(
    public nav: NavController,
    public menu: MenuController,
    public toastCtrl: ToastController,
    public globalService: GlobalProvider,
    public http: HttpServiceProvider,
    public alertService: AlertService,
    public toastService: ToastService,
    public baseURLProvider: BaseURLProvider
  ) {
    this.menu.swipeEnable(false);
    this.menu.close();
    this.user = new User();
  }

  //On page Load
  ionViewDidEnter() {
    this.getUserDetails();
  }

  // go to register page
  register() {
    this.globalService.routePage(RegisterPage);
  }

  // login and go to home page
  logIn() {
    let companyCode = this.user.custIdCode.substring(0, 3);
    this.baseURLProvider.setBaseURL(companyCode).then((msg) => {
      if (msg != null && msg != '') {
        this.http.POST(Constants.Corvi_Services.Login, this.user).then((response) => {
          // console.log('resp ', response);
          this.globalService.store('custIdCode', this.user.custIdCode);
          this.user_Rememebered();
          this.globalService.store('login_resp', response);
          (response.hasOwnProperty('access_token')) ? this.fetchUserDetails() : this.globalService.showToast('Something went wrong');
        }, (err) => {
          console.log('error Login ', err);
          this.LoginInvalid(err);
        });
      } else {
        this.globalService.showAlert('Invalid Customer Identity Code')
      }

    });
  }

  forgotPass() {
    this.alertService.forgetPassword().then((data) => {
      data && this.sendPassword(data);
      // isSend && this.toastService.show('Email was sended successfully please check your email', 3000, true, 'top', 'dark-trans');
    })
  }

  user_Rememebered() {
    if (this.isRemembered) {
      this.globalService.store('userName', this.user.UserID);
      this.globalService.store('password', this.user.Password);
      this.globalService.store('isRemembered', "true");
    } else {
      this.globalService.store("userName", "");
      this.globalService.store("password", "");
      this.globalService.remove('isRemembered')
    }
  }

  // check input Valid
  isInputValid(): boolean {
    if (this.user.Password != undefined && this.user.UserID != undefined && this.user.custIdCode != undefined && this.user.Password.trim() !== '' && this.user.UserID.trim() !== '' && this.user.custIdCode.trim() !== '' && this.user.custIdCode.length > 2)
      return false;
    else
      return true;
  }

  getUserDetails() {
    this.globalService.get('isRemembered')
      .then(
        isRemembered => isRemembered == '' ? this.setUsernamePwd(false) : this.setUsernamePwd(isRemembered),
        error => console.error(error)
      );

    this.globalService.get('custIdCode')
      .then((custIdCode) => {
        custIdCode == '' ? this.user.custIdCode = "" : this.user.custIdCode = custIdCode;
        custIdCode == '' ? this.showCustIdCode = true : this.showCustIdCode = false;
      }),
      error => console.error(error);
  }

  setUsernamePwd(isRemembered) {
    if (isRemembered) {
      this.isRemembered = isRemembered;
      this.globalService.get('userName')
        .then(
          userId => this.user.UserID = userId,
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
    this.globalService.get('playerId')
      .then(
        UUID => this.setDetails(UUID),
        error => console.error(error)
      );
  }

  setDetails(UUID) {
    this.user.UUID = UUID;
    this.http.POST(Constants.Corvi_Services.UserDetails, this.user).then((userDetailsResp) => {
      this.globalService.store('userDetails', userDetailsResp);
      this.globalService.publishEventwithData('app:userDetails', userDetailsResp);
      this.globalService.publishEventwithData('login:sessionExpired', 500000);
      this.globalService.setRootPage(TabsPage);
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
    debugger
    this.globalService.routePage(HomePage);
  }

  dashboard() {

    this.globalService.setRootPage(WelcomeuserPage);
  }

}
