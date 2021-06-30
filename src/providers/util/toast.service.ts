/**
 * @author Sachin Semlety
 * @email sachin.semlety@kalelogistics.in
 * @create date 2018-08-10 11:04:11
 * @modify date 2018-08-10 11:04:11
 * @desc [description]
*/
import { Injectable } from '@angular/core';
import { Toast, ToastController } from 'ionic-angular';

@Injectable()
export class ToastService {

  toast: Toast;
  constructor(public toastCtrl: ToastController) { }

  create(message, ok = false, duration = 2000) {
    if (this.toast) {
      this.toast.dismiss();
    }

    this.toast = this.toastCtrl.create({
      message,
      duration: ok ? null : duration,
      position: 'bottom',
      showCloseButton: ok,
      closeButtonText: 'OK'
    });
    this.toast.present();
  }

  show(message, duration, ok = false, position, cssClass) {
    if (this.toast) {
      this.toast.dismiss();
    }

    this.toast = this.toastCtrl.create({
      message,
      duration: ok ? null : duration,
      position: position,
      closeButtonText: 'OK',
      cssClass: cssClass,
      showCloseButton: true
    });
    this.toast.present();
  }
}
