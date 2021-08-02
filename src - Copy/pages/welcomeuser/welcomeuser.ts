import { Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams,Slides } from 'ionic-angular';
import { GlobalProvider } from '../../providers/global/global';
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
  @ViewChild('mySlider')  slides: Slides;
  public next(){
    this.slides.slideNext();
  }

  // public prev(){

  //   this.globalService.routePage(DashboardPage);
  // }
  skip(){
    this.globalService.setRootPage(DashboardPage);
  }
  constructor(public navCtrl: NavController, public navParams: NavParams,public globalService: GlobalProvider,) {
    this.title = "Welcome, CORVI User";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WellcomeuserPage');
  }

}
