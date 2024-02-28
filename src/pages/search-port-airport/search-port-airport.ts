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
  responseFormAPI: any = [];
  countOfRec: number;
  Mode: any;
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
    debugger
    this.SearchLoc = new searchLocation();
    this.origin = this.navParams.get('origin');
    this.Mode = localStorage.getItem('Mode');

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

    // if (this.origin == '0') {
    //   this.globalService.selectedOrigin = selectedData.Locationtext;
    // } else {
    //   this.globalService.selectedDest = selectedData.Locationtext;
    // }

    // // this.globalService.selectedCity = selectedData;
    // // console.log('********', this.globalService.selectedCity);

    // this.viewCtrl.dismiss();
    // this.globalService.setRootPage(CustomerJobSearchPage);

    this.globalService.selectedOrigin = selectedData;
    this.viewCtrl.dismiss(JSON.stringify(this.globalService.selectedOrigin));

    // this.navCtrl.push(CustomerJobSearchPage, { milestone: selectedData })
    // this.navCtrl.remove(this.navCtrl.getActive().index - 0, 1,);
  }
  GetLocationMasterList() {
    debugger
    if (this.Mode == '1') {
      this.SearchLoc.LocationType = 'Airport';
    } else if (this.Mode == '2') {
      this.SearchLoc.LocationType = 'Port';
    }else{
      this.SearchLoc.LocationType = 'City';
    }
    //this.branchCode;
    this.SearchLoc.LocationCode = this.CityCode.trim();
    this.SearchLoc.LocationName = this.CityName.trim();

    this.http.POST(Constants.Corvi_Services.GetLocationMasterList, this.SearchLoc).then((response) => {

      console.log('response to check login method: ', response);
      //debugger
      if (response['Table'] == '') {
        this.toastService.show('Data not found.', 3000, true, 'top', 'toast-container');
        return;
      } else {
        // this.LocationInfo = response['Table'];
        if (this.globalService.isCordovaAvailable()) {

          this.responseFormAPI = response;
          this.LocationInfo = JSON.parse(this.responseFormAPI)["Table"];
          // this.navCtrl.push(SearchJobResultsPage, { jobResults: stageOne });
          // this.flag = true;
          this.countOfRec = JSON.parse(this.responseFormAPI)["Table"].length;

          if (JSON.parse(this.responseFormAPI)["Table"] == '') {
            this.toastService.show('Data not found.', 3000, true, 'top', 'toast-container');
            return;
          }

        } else {
          this.LocationInfo = response['Table'];
          // this.navCtrl.push(SearchJobResultsPage, { jobResults: stageOne });
          this.countOfRec = response['Table'].length
        }

      }

    }, (err) => {
      console.log('error Login ', err);
      console.log('response to check service link: ', Constants.Corvi_Services.Login);
    });


  }
}
