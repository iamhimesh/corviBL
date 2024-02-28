import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { HttpServiceProvider } from '../../providers/http-service/http-service';
import { ToastService } from '../../providers/util/toast.service';
import { GlobalProvider } from '../../providers/global/global';
import { Constants } from '../../constants';
import { BaseURLProvider } from '../../providers/baseUrlGenerator/baseurlgenerator';

export class User {
  UserId: string; TempPassword: string; Password: string;
  IdentityCode: string;
}

export class tempPwd {
  UserId: string; TempPassword: string; NewPassword: string;
  IdentityCode: string;
}

@IonicPage()
@Component({
  selector: 'page-reset-password',
  templateUrl: 'reset-password.html',
})
export class ResetPasswordPage {
  user: User;
  temp: tempPwd;
  username: any;
  newpassword: any;
  confpassword: any;
  temppassword: any;
  customerCode: any;
  public showPass = false;
  public type = "password";

  showBtn = false;
  showDiv = false;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl: AlertController, public toastCtrl: ToastController,
    public http: HttpServiceProvider, public toastService: ToastService,
    public globalService: GlobalProvider, public baseUrlProvider: BaseURLProvider) {
    this.user = new User();
    this.temp = new tempPwd();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResetPasswordPage');
  }

  ionViewDidEnter() {
    if (this.username == undefined || this.username == '') {
      // this.enterUsernameAlert();
      this.showAlert('Please enter Username', 'An email containing temporary password will be sent on the entered username.');
    }
  }

  toLogin() {
    this.navCtrl.setRoot(LoginPage);
  }

  showPassword() {
    this.showPass = !this.showPass;

    if (this.showPass) {
      this.type = "text";
    } else {
      this.type = "password";
    }
  }

  savePassword() {
    if (this.newpassword != this.confpassword) {
      this.showAlert('Confirm Password Alert', 'New Password & Confirm Password does not match.');
      this.confpassword == '';
      return;
    }
    this.user.UserId = this.username;
    this.user.TempPassword = this.temppassword;
    this.user.Password = this.newpassword;
    this.user.IdentityCode = this.customerCode

    try {
      let companyCode = this.customerCode.slice(0, 3);
      this.baseUrlProvider.setBaseURL(companyCode).then((msg) => {
    this.http.POST(Constants.Corvi_Services.TempResetPassword, this.user).then((response: any) => {
      console.log('check new password saved response here: ', response);
      if (response.includes('Invalid Password')) {
        this.showAlert('Invalid Request', 'You seem to enter wrong temporary password or CI code.');
        this.newpassword == '';
        this.confpassword == '';
        this.temppassword == '';
      }
      if (response.includes('Reset Password')) {
        this.showAlert('Success', 'Password changed. Please login with new password');
        this.toLogin();
      }
    });
  });
  }
  catch (msg) {
    this.globalService.showAlert('Enter valid Customer Identity code')
  }
  }

  showCodeBTN() {
    if (this.username != '' && this.customerCode != '') {
      this.showBtn = true;
    } else {
      this.showBtn = false;
    }
  }

  showAlert(title, msg) {
    let alert = this.alertCtrl.create({
      title: title,
      message: msg,
      buttons: [
        {
          text: 'OK',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
      ]
    });
    alert.present();
  }

  sendTempPassword() {
    this.temp.UserId = this.username;
    this.temp.TempPassword = '';
    this.temp.NewPassword = '';
    this.temp.IdentityCode = this.customerCode;

    try {

      let companyCode = this.customerCode.slice(0, 3);
      this.baseUrlProvider.setBaseURL(companyCode).then((msg) => {
        console.log('check msg from login()', msg);

        this.http.POST(Constants.Corvi_Services.TempResetPassword, this.temp).then((response: any) => {
          console.log('check temp password response here: ', response);
          if (response.includes('Invalid User')) {
            this.invalidUserAlert();
          }
          if (response.includes('Valid User')) {
            this.showDiv = true;
            this.showBtn = false; //new for defect 193401
            this.validUserToast();
          }
        }, (err) => {
          console.log('error for sending email ', err);
          this.showAlert('Error', 'Email not sent.');
        });
      });
    }
    catch (msg) {
      this.globalService.showAlert('Enter valid Customer Identity code')
    }
  }

  invalidUserAlert() {
    let alert = this.alertCtrl.create({
      title: 'Invalid Request',
      message: 'Invalid User.',
      buttons: [
        {
          text: 'OK',
          role: 'cancel',
          handler: () => {
            // console.log('Cancel clicked');
            this.globalService.setRootPage(LoginPage);
          }
        },
      ]
    });
    alert.present();
  }

  validUserToast() {
    let toast = this.toastCtrl.create({
      message: 'Please check the registered email',
      duration: 3000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }


}
