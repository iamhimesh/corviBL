/**
 * @author Sachin Semlety
 * @email sachin.semlety@kalelogistics.in
 * @create date 2018-08-10 11:03:16
 * @modify date 2018-08-10 11:03:16
 * @desc [description]
*/
import { Component } from "@angular/core";
import { ViewController, NavController, AlertController, App, Events, Platform } from "ionic-angular";
import { LoginPage } from "../../pages/login/login";
@Component({
  selector: 'more-options',
  templateUrl: 'more.html'
})

export class MoreComponent {


  constructor(public viewCtrl: ViewController, public nav: NavController, public alertCtrl: AlertController, public app: App, public events: Events, public platform: Platform) { }


  close() {
    this.viewCtrl.dismiss();
  }

  logOut() {
    this.confirmlogOut();
  }

  notifications() {

  }

  /*Logout PopupModal*/
  confirmlogOut() {
    let alert = this.alertCtrl.create({
      title: 'Logout',
      message: 'Do you want to Logout???',
      buttons: [{
        text: "Confirm",
        handler: () => { this.handleLogOut(); }
      }, {
        text: "Cancel",
        role: 'cancel'
      }]
    })
    alert.present();
  }


  handleLogOut() {
    this.events.publish('app:loggedOut', true);
    this.clearLocalStorage();
  }
  clearLocalStorage() {
    window.localStorage.removeItem('isLogged');
    window.localStorage.removeItem('login_resp');
    window.localStorage.removeItem('userDetails');
    this.routePage(LoginPage);
  }

  routePage(page) {
    this.close();
    this.app.getActiveNavs()[0].push(page);
  }

}

