/**
 * @author Sachin Semlety
 * @email sachin.semlety@kalelogistics.in
 * @create date 2018-08-10 11:04:08
 * @modify date 2018-08-10 11:04:08
 * @desc [description]
*/
import { Injectable } from '@angular/core';
import { AlertController, ActionSheetController, ToastController } from 'ionic-angular';
import { PushNotificationProvider } from '../push-notification/push-notification';

@Injectable()
export class AlertService {
  constructor(public alertCtrl: AlertController, public actionSheetCtrl: ActionSheetController, public pushNotification: PushNotificationProvider, public toastCtrl: ToastController) { }

  presentActionSheet(title, item) {
    const actionSheet = this.actionSheetCtrl.create({
      title: 'Follow this Job ?',
      buttons: [
        {
          text: 'Yes',
          icon: 'checkmark',
          handler: () => {
            this.presentAlertWithCallback(title, 'You will recieve notifications if you follow this job').then((isOK) => {
              if (isOK) {
                this.pushNotification.createNotification(item);
                console.log('Yes clicked');
              }
            })
          }
        }, {
          text: 'No',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  presentAlert(title: string, message: string) {
    const alert = this.alertCtrl.create(
      {
        title,
        subTitle: message,
        buttons: [
          {
            text: 'OK'
          }
        ]
      });

    return alert.present();
  }

  presentErrorAlert(message: string) {
    return this.presentAlert('An error has occurred.', message);
  }

  presentAlertWithCallback(title: string, message: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      const confirm = this.alertCtrl.create({
        title,
        message,
        buttons: [{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            confirm.dismiss().then(() => resolve(false));
            return false;
          }
        }, {
          text: 'Yes',
          handler: () => {
            confirm.dismiss().then(() => resolve(true));
            return false;
          }
        }]
      });

      return confirm.present();
    });
  }

  forgetPassword(): Promise<boolean | Object> {
    return new Promise((resolve, reject) => {
      const forgot = this.alertCtrl.create({
        title: 'Forgot Password?',
        message: "Enter your username to send a reset link password.",
        inputs: [
          {
            id: 'forgetPassword',
            name: 'username',
            placeholder: 'Username',
            type: 'text'
          },
        ],
        buttons: [
          {
            text: 'Cancel',
            handler: data => {
              forgot.dismiss().then(() => resolve(false));
              return false;
            }
          },
          {
            text: 'Send',
            handler: data => {
              console.log('Send clicked');
              let obj = { 'forgotPwd': data, 'forgot': forgot }
              forgot.dismiss().then(() => resolve(obj));
              return false;
            }
          }
        ]
      });
      forgot.present();
    });
  }


}
