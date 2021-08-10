import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { IonicPage, NavController, NavParams, MenuController, ModalController, ToastController } from 'ionic-angular';
import { Constants } from '../../constants';
import { GlobalProvider } from '../../providers/global/global';
import { HttpServiceProvider } from '../../providers/http-service/http-service';
import { AlertService } from '../../providers/util/alert.service';
import { ToastService } from '../../providers/util/toast.service';
import { DashboardPage } from '../dashboard/dashboard';
import { FindSalesActivityPage } from '../find-sales-activity/find-sales-activity';
import { ShipmentStatusPage } from '../shipment-status/shipment-status';

/**
 * Generated class for the JobStatusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-job-status',
  templateUrl: 'job-status.html',
})
export class JobStatusPage {
  title: string;
  appBuildConfig: { version: string; fullYear: string; };
  AllData: any;

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

    this.title = "Job Status";
    this.appBuildConfig = this.globalService.appBuildConfig;
    if (this.globalService.jobStatusPArms != undefined) {

      this.AllData = this.globalService.jobStatusPArms ;
    }

  }
  backToDashboard() {

    this.globalService.setRootPage(ShipmentStatusPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JobStatusPage');
  }

}
