/**
 * @author Sachin Semlety
 * @email sachin.semlety@kalelogistics.in
 * @create date 2019-08-05 17:33:33
 * @modify date 2019-08-05 17:33:33
 * @desc [description]
 */
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalProvider } from '../../providers/global/global';
import { EnquiryCargoDetailPage } from './detail/enquiry-cargo-detail';
import { LoginPage } from '../login/login';


@IonicPage()
@Component({
  selector: 'page-enquiry',
  templateUrl: 'enquiry.html',
})
export class EnquiryPage {
  title: String;
  showSearchBar: boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams, public globalService: GlobalProvider) {
    this.title = "ENQUIRY FORM";
    this.showSearchBar = false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EnquiryPage');
  }
  goToCargoDetailPage() {
    this.globalService.routePageWithData(EnquiryCargoDetailPage, {});
  }
  goTologinPage() {
    this.globalService.routePage(LoginPage);
  }


}
