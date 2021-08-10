import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { IonicPage, NavController, NavParams, MenuController, ModalController, ToastController } from 'ionic-angular';
import { Constants } from '../../constants';
import { GlobalProvider } from '../../providers/global/global';
import { HttpServiceProvider } from '../../providers/http-service/http-service';
import { AlertService } from '../../providers/util/alert.service';
import { ToastService } from '../../providers/util/toast.service';
import { CustomerDashboardPage } from '../customer-dashboard/customer-dashboard';
import { CustomerJobSearchPage } from '../customer-job-search/customer-job-search';
import { JobStatusPage } from '../job-status/job-status';


/**
 * Generated class for the ShipmentStatusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

export class OpenJobListClass {
  UserId: any; Type: any
}

@IonicPage()
@Component({
  selector: 'page-shipment-status',
  templateUrl: 'shipment-status.html',
})



export class ShipmentStatusPage {
  title: string;
  appBuildConfig: any;
  openList: OpenJobListClass;
  userID: string;
  shipmentAllData: any;
  constructor(
    public navCtrl: NavController, public navParams: NavParams,
    public globalService: GlobalProvider,
    private modalCtrl: ModalController,
    public nav: NavController,
    public menu: MenuController,
    public toastCtrl: ToastController,

    public http: HttpServiceProvider,
    public alertService: AlertService,
    public toastService: ToastService,
    // public baseURLProvider: BaseURLProvider,
    public fb: FormBuilder
  ) {
    this.title = "Shipment Status";
    this.appBuildConfig = this.globalService.appBuildConfig;
    this.openList = new OpenJobListClass();
    this.userID = localStorage.getItem('userId');
    this.OpenJobListShipment();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShipmentStatusPage');
  }
  backToDashboard() {
    localStorage.removeItem('branchCode');
    localStorage.removeItem('customerData');
    localStorage.removeItem('branchCode');


    this.globalService.setRootPage(CustomerDashboardPage);
  }


  OpenJobListShipment() {

    this.openList.UserId = this.userID;
    this.openList.Type = 'Open';


    this.http.POST(Constants.Corvi_Services.OpenJobList, this.openList).then((response) => {

      console.log('response to check login method: ', response);

      if (response['Table'] == '') {
        this.toastService.show('Data not found.', 3000, true, 'top', 'toast-container');
        return;
      } else {
         this.shipmentAllData = response['Table'];
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

    // HouseDate: "12/06/2021"
    // HouseNo: "HNO821"
    // JobDate: "06/12/2021"
    // JobNo: "SBUFJAI2122000001"
    // MasterDate: "11/06/2021"
    // MasterNo: "020-12345675"
    // Mode: "AIR"
    // POD: "Sir Seewoosagur"
    // POL: "LONDON-HEATHROW"
    // Service: "Import"


  }


  goToSearchJob(jobDAta) {

    this.globalService.jobStatusPArms = jobDAta;
    // if (this.fromSaleLeadVal == '1') {

    //   this.globalService.valueForLeadCutomer = custArray;
    //   this.viewCtrl.dismiss();
    //   this.globalService.setRootPage(NewSalesLeadPage);
    // } else {
    //   localStorage.setItem('branchCode', this.branchCode)
    //   this.globalService.store('customerData', custArray);
    //   this.viewCtrl.dismiss();
      this.globalService.setRootPage(JobStatusPage);
    }
    // this.navCtrl.remove(this.navCtrl.getActive().index - 0, 1,);
    goToCustomerJobSearch(){
      this.globalService.setRootPage(CustomerJobSearchPage);
    }

}
