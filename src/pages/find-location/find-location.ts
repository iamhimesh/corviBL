import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams, ModalController, ViewController, MenuController, ToastController } from 'ionic-angular';
import { Constants } from '../../constants';

import { GlobalProvider } from '../../providers/global/global';
import { HttpServiceProvider } from '../../providers/http-service/http-service';
import { AlertService } from '../../providers/util/alert.service';
import { ToastService } from '../../providers/util/toast.service';
import { DashboardPage } from '../dashboard/dashboard';
import { NewSalesLeadPage } from '../new-sales-lead/new-sales-lead';

/**
 * Generated class for the FindLocationPage page.
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
  selector: 'page-find-location',
  templateUrl: 'find-location.html',
})
export class FindLocationPage {

  title: string;
  appBuildConfig: any;
  VenType: string;
  SearchLoc: searchLocation;
  CityName: any = '';
  CityCode: any = '';
  LocationInfo: any;
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

  GetLocationMasterList() {
     debugger
    this.SearchLoc.LocationType = 'Port,Airport,City'; //this.branchCode;
    this.SearchLoc.LocationCode = this.CityCode;
    this.SearchLoc.LocationName = this.CityName;
    //this.SearchLoc.VendorName = this.VendorName;

    this.http.POST(Constants.Corvi_Services.GetLocationMasterList, this.SearchLoc).then((response) => {

      console.log('response to check login method: ', response);
      //debugger
      if (response['Table'] == '') {
        this.toastService.show('Data not found.', 3000, true, 'top', 'toast-container');
        return;
      } else {
        this.LocationInfo = response['Table'];

        // Culture: "culture "
        // LocationCode: "IN IXC"
        // LocationType: 1
        // Locationid: 120817
        // Locationname: "Chandigarh"
        // Locationtext: "Chandigarh [IN IXC]-{City} [INDIA] [IN]"
        // description: "City"
        // parentcode: "IN"
        // parentloc: "INDIA"

      }
      // this.globalService.store('login_resp', response);

    }, (err) => {
      console.log('error Login ', err);
      console.log('response to check service link: ', Constants.Corvi_Services.Login);
    });
    // }
    // else {
    //   this.globalService.showAlert('Invalid Customer Identity Code')
    // }

    // });



  }

  // passDataToNSA(custArray) {
  //   this.globalService.store('customerData', custArray);
  //   this.viewCtrl.dismiss();
  //  // this.globalService.setRootPage(NewSalesActivityPage);
  // }



  passDataToNSA(selectedData) {

    this.globalService.selectedCity = selectedData;
    console.log('********', this.globalService.selectedCity);
    // this.navCtrl.push(UpdateJobMilestonePage, {milestone: selecetedData})
    // this.navCtrl.remove(this.navCtrl.getActive().index - 0, 1,);
    this.viewCtrl.dismiss();
    this.globalService.setRootPage(NewSalesLeadPage);
  }

}
