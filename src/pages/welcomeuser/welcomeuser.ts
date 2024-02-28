import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { GlobalProvider } from '../../providers/global/global';
import { CustomerDashboardPage } from '../customer-dashboard/customer-dashboard';
import { DashboardPage } from '../dashboard/dashboard';

/**
 * Generated class for the WellcomeuserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcomeuser',
  templateUrl: 'welcomeuser.html',
})
export class WelcomeuserPage {
  title: string;
  @ViewChild('mySlider') slides: Slides;
  UserDetails: any = [];
  BranchTbl: any = [];
  public next() {
    this.slides.slideNext();
  }

  // public prev(){

  //   this.globalService.routePage(DashboardPage);
  // }

  constructor(public navCtrl: NavController, public navParams: NavParams, public globalService: GlobalProvider,) {
    this.title = "Welcome, CORVI User";

    this.BranchTbl = this.globalService.get('ProfileType');

    // this.BranchTbl = this.UserDetails[Object.keys(this.UserDetails)[1]]["Table"];
  }
  skip() {
    if (this.BranchTbl.__zone_symbol__value == '2') {

      this.globalService.setRootPage(CustomerDashboardPage);
    } else {
      this.globalService.setRootPage(DashboardPage);
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad WellcomeuserPage');
  }

}
