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
export class searchMilestoneList {
  // UserId: string; Service: string; ShipmentType: string; JobType: string; Mode: string;
  WoDetailno: string;
}
@IonicPage()
@Component({
  selector: 'page-job-status',
  templateUrl: 'job-status.html',
})
export class JobStatusPage {
  title: string;
  appBuildConfig: { version: string; fullYear: string; };
  AllData: any = [];
  searchList: searchMilestoneList;
  mileStoneDetails: any;
  userID: string;
  gateMileStoneListArr: any = [];
  dataFlag: boolean = false;
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
    debugger
    this.userID = localStorage.getItem('userId');
    this.searchList = new searchMilestoneList();
    this.title = "Job Status";
    this.appBuildConfig = this.globalService.appBuildConfig;
    if (this.globalService.jobStatusPArms != undefined) {

      //this.AllData = this.globalService.jobStatusPArms;
      this.GetJobDetailsById();
      //this.gateMileStoneListArr = JSON.parse(localStorage.getItem('filterMilestone'));
    }

    this.userID = localStorage.getItem('userId');

  }
  backToDashboard() {

    this.globalService.setRootPage(ShipmentStatusPage);
    localStorage.removeItem('flagJobSearch');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JobStatusPage');
  }


  GetJobDetailsById() {
    debugger
    this.searchList.WoDetailno = this.globalService.jobStatusPArms.DetailNo;// this.AllData.JobType;

    console.log('check one ');
    this.http.POST(Constants.Corvi_Services.GetJobDetailsById, this.searchList).then((response: any) => {
      console.log('LKO ', response);
      debugger

      if (this.globalService.isCordovaAvailable()) {

        this.dataFlag = true;
        this.AllData = JSON.parse(response)["Table"][0];
        this.gateMileStoneListArr = JSON.parse(response)["Table1"];

      } else {
        this.dataFlag = true;
        this.AllData = response['Table'][0];
        // response['Table'][0].BranchName
        this.gateMileStoneListArr = response['Table1'];

      }

    }, (err) => {
      console.log('GetJobDetailsById', err);

    });
  }

}
