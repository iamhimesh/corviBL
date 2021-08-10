import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams, ModalController, ViewController, MenuController, ToastController } from 'ionic-angular';
import { Constants } from '../../constants';

import { GlobalProvider } from '../../providers/global/global';
import { HttpServiceProvider } from '../../providers/http-service/http-service';
import { AlertService } from '../../providers/util/alert.service';
import { ToastService } from '../../providers/util/toast.service';
import { CustomerJobSearchPage } from '../customer-job-search/customer-job-search';
import { DashboardPage } from '../dashboard/dashboard';
import { NewSalesLeadPage } from '../new-sales-lead/new-sales-lead';

/**
 * Generated class for the SearchPortAirportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
export class searchLocation {
  LocationType: any;
  LocationCode: any;
  LocationName: any;
}
@IonicPage()
@Component({
  selector: 'page-search-port-airport',
  templateUrl: 'search-port-airport.html',
})
export class SearchPortAirportPage {

  title: string;
  appBuildConfig: any;
  VenType: string;
  SearchLoc: searchLocation;
  CityName: any = '';
  CityCode: any = '';
  LocationInfo: any;
  origin: any;
  destination: any;
  constructor(

    public navCtrl: NavController, public navParams: NavParams,
    public globalService: GlobalProvider,
    private modalCtrl: ModalController, public viewCtrl: ViewController,
    public nav: NavController,
    public menu: MenuController,
    public toastCtrl: ToastController,

    public http: HttpServiceProvider,
    public alertService: AlertService,
    public toastService: ToastService,
    // public baseURLProvider: BaseURLProvider,
    public fb: FormBuilder
  ) {
    this.title = "Find Location";
    this.appBuildConfig = this.globalService.appBuildConfig;
    this.VenType = 'Lead-Customer';
    this.SearchLoc = new searchLocation();
    this.origin = this.navParams.get('origin');
    this.destination = this.navParams.get('destination');
    localStorage.removeItem('origin1');
    localStorage.removeItem('destination1');

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad FindLocationPage');
  }

  backToDashboard() {

    this.globalService.setRootPage(DashboardPage);
  }
  dismissModal() {
    let data = { 'foo': 'bar' };
    this.viewCtrl.dismiss(data);
  }


  passDataToNSA(selectedData) {

    if (this.origin == '0') {
      this.globalService.selectedOrigin = selectedData.Locationtext;
    } else {
      this.globalService.selectedDest = selectedData.Locationtext;
    }

    // this.globalService.selectedCity = selectedData;
    // console.log('********', this.globalService.selectedCity);

      this.viewCtrl.dismiss();
      this.globalService.setRootPage(CustomerJobSearchPage);
    // this.navCtrl.push(CustomerJobSearchPage, { milestone: selectedData })
    // this.navCtrl.remove(this.navCtrl.getActive().index - 0, 1,);
  }
  GetLocationMasterList() {
    debugger
    this.SearchLoc.LocationType = 'Port,Airport,City'; //this.branchCode;
    this.SearchLoc.LocationCode = this.CityCode;
    this.SearchLoc.LocationName = this.CityName;

    this.http.POST(Constants.Corvi_Services.GetLocationMasterList, this.SearchLoc).then((response) => {

      console.log('response to check login method: ', response);
      //debugger
      if (response['Table'] == '') {
        this.toastService.show('Data not found.', 3000, true, 'top', 'toast-container');
        return;
      } else {
        this.LocationInfo = response['Table'];

      }

    }, (err) => {
      console.log('error Login ', err);
      console.log('response to check service link: ', Constants.Corvi_Services.Login);
    });


  }
}
