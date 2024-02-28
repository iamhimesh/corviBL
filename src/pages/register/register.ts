/**
 * @author Sachin Semlety
 * @email sachin.semlety@kalelogistics.in
 * @create date 2018-08-10 11:03:53
 * @modify date 2018-08-10 11:03:53
 * @desc [description]
*/
import { Component } from "@angular/core";
import { NavController, ToastController, MenuController, Events, Platform, ModalController } from "ionic-angular";

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
import { LoginPage } from "../login/login";

export class signUpList {
  UserID: string;
  Password: string;
  IdentityCode: string;
  // CustIdCode: string;
}
@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  signUpVarList: signUpList;
  signUpEmail: any = '';
  statusForcheck: string;
  finalStatus: string;
  constructor(public nav: NavController,
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
    public fb: FormBuilder) {
      this.signUpVarList = new signUpList();
  }

  // register and go to home page
  register() {
    // this.globalService.routePage(HomePage)
  }

  // go to login page
  login() {
    // this.globalService.routePage(LoginPage)
    this.nav.push(LoginPage);
  }

  RegisterNowUserProfile() {

    this.signUpVarList.UserID = this.signUpEmail;
    this.signUpVarList.Password = 'A1@add';
    this.signUpVarList.IdentityCode = 'BLL';

    this.baseUrlProvider.setBaseURL('BLL').then((msg) => {
     
      // if (msg != null && msg != '') {
      // console.log('response to check 1');
     // this.http.GET(Constants.Corvi_Services.RegisterNowUserProfile,this.signUpVarList).then((response) => {
      this.http.POST(Constants.Corvi_Services.RegisterNowUserProfile, this.signUpVarList).then((response:any) => {
        console.log('response to check login method: ', response);
        this.statusForcheck = response;
        // this.statusForcheck = JSON.stringify(response['Status']);

        this.finalStatus = this.statusForcheck.replace(/^"|"$/g, '');

        if(this.finalStatus == 'Valid User'){
          this.globalService.showAlert('Please check your Inbox.');
          this.nav.push(LoginPage);
          this.signUpEmail ='';
        }
        // if(response == 'Valid User'){
        //   this.globalService.showAlert('Please check your Inbox.');
        //   this.nav.push(LoginPage);
        //   this.signUpEmail ='';
        // }
      }, (err) => {
        console.log('error Login ', err);
        console.log('response to check service link: ', Constants.Corvi_Services.Login);

      });
      // }
      // else {
      //   this.globalService.showAlert('Invalid Customer Identity Code')
      // }

    }); // this.baseUrlProvider ends

  }

}
