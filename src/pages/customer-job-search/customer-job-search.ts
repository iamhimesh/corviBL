import { SearchJobsPage } from './../search-jobs/search-jobs';
import { SearchMilestonePage } from './../search-milestone/search-milestone';
import { ToastService } from './../../providers/util/toast.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController, ViewController } from 'ionic-angular';
import { GlobalProvider } from '../../providers/global/global';
import { DashboardPage } from '../dashboard/dashboard';
import { HttpServiceProvider } from '../../providers/http-service/http-service';
import { Constants } from '../../constants';

import * as moment from 'moment';
import { SearchJobResultsPage } from '../search-job-results/search-job-results';
import { SearchPortAirportPage } from '../search-port-airport/search-port-airport';
import { CustomerDashboardPage } from '../customer-dashboard/customer-dashboard';
import { ShipmentInvoicePage } from '../shipment-invoice/shipment-invoice';
import { ShipmentStatusPage } from '../shipment-status/shipment-status';

export class searchCustomerJob {
  UserId: string;
  Mode: string;
  Service: string;
  JobType: string;
  BranchCode: string;
  JobNo: string;
  MBLNo: string;
  HBLNo: string;
  SBNo: string;
  Origin: string;
  Destination: string;
  ShipmentType: any;
  FromDate: any;
  CustomerName: any;
  ToDate: any;
  SBDate: any;
}

export class saveMileStoneList {
  BookingNo: string; ActivityDate: string; ActivityId: string; Remarks: string; UserId: string;
}
/**
 * Generated class for the CustomerJobSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-customer-job-search',
  templateUrl: 'customer-job-search.html',
})
export class CustomerJobSearchPage {

  title: string;
  appBuildConfig: any;
  UserDetails: any = [];
  BranchTbl: any = [];
  ModeTbl: any = [];
  ServiceTBl: any = [];
  ShipmentTbl: any = [];
  modes: any = [];
  services: any = [];
  shipments: any = [];
  branchCode: any;
  transportMode: any = '';
  serviceCode: any = '';
  shipmentCode: any = '0';
  modalDismissData: any;
  VenType: any;
  searchList: searchCustomerJob;
  fetchedMilestone;
  fetchedJobs: any = [];
  bookingNoArr: any = [];
  activityIdArr: any = [];
  activityDate: string = new Date().toISOString();
  remarks;
  saveMileStoneList: saveMileStoneList;
  jobno: any = '';
  mblno: any = '';
  hblno: any = '';
  sbno: any = '';
  sbdate: any = '';
  origin: any = '';
  destination: any = '';
  userID: string;
  modelbl: string = '';
  modelblH: string = '';
  modelblB: string = '';
  locationorigin: any;
  locationdest: any;
  LocationCode: any;
  Locationid: any;
  modelblS: string;
  responseFormAPI: any = [];
  jobSearchData: any;
  modelblMAWB: string = '';
  constructor(public navCtrl: NavController, public navParams: NavParams
    , public globalService: GlobalProvider, public toastService: ToastService,
    public modalCtrl: ModalController, public http: HttpServiceProvider,
    public alertCtrl: AlertController, public viewCtrl: ViewController,) {
    this.title = "Search Job(s)";
    this.appBuildConfig = this.globalService.appBuildConfig;
    this.UserDetails = this.globalService.get('userDetails');

    // this.BranchTbl = this.UserDetails[Object.keys(this.UserDetails)[1]]["Table4"];
    // this.ModeTbl = this.UserDetails[Object.keys(this.UserDetails)[1]]["Table3"];
    // this.ServiceTBl = this.UserDetails[Object.keys(this.UserDetails)[1]]["Table3"];
    // this.ShipmentTbl = this.UserDetails[Object.keys(this.UserDetails)[1]]["Table3"];

    // this.modes = this.ModeTbl.filter(a => a.Identifier == "TransportMode");
    // this.services = this.ModeTbl.filter(a => a.Identifier == "Service");
    // this.shipments = this.ModeTbl.filter(a => a.Identifier == "ShipmentType");

    this.BranchTbl = JSON.parse(localStorage.getItem('BranchTable'));
    this.modes = JSON.parse(localStorage.getItem('TransportMode'));
    this.services = JSON.parse(localStorage.getItem('ServiceType'));
    this.shipments = JSON.parse(localStorage.getItem('ShipmentType'));
    this.userID = localStorage.getItem('userId');

    this.VenType = '1';
    this.searchList = new searchCustomerJob();
    this.saveMileStoneList = new saveMileStoneList();
    this.modelblMAWB = 'MAWB/MBL No.';
    this.modelblH = 'HAWB/HBL No.';
    this.modelblB = 'BE No./SB No.';
    this.modelblS = 'BE Date/SB Date';
    if (this.globalService.selectedOrigin != '') {
      debugger
      this.locationorigin = this.globalService.selectedCity.Locationtext;
      // this.origin = this.globalService.selectedOrigin;

      // var o = localStorage.getItem('origin1');
      // var c = localStorage.getItem('destination1');

      // if (o == 'origin1') {
      //   this.origin = this.locationorigin;
      // } else if (c == 'destination1') {
      //   this.destination = this.locationdest;
      // }

    }

    if (this.globalService.selectedDest != '') {
      this.locationdest = this.globalService.selectedCity.Locationtext;
      // this.destination = this.globalService.selectedDest;
      // debugger
      // var o = localStorage.getItem('origin1');
      // var c = localStorage.getItem('destination1');

      // if (o == 'origin1') {
      //   this.origin = this.locationorigin;
      // } else if (c == 'destination1') {
      //   this.destination = this.locationdest;
      // }

    }
  }
  dismissModal() {
    let data = { 'foo': 'bar' };
    this.viewCtrl.dismiss(data);
  }

  ngOnInit() {
    this.transportMode = '';
    this.serviceCode = '';
    // if (this.globalService.defaultMode != '') {
    //   this.transportMode = this.globalService.defaultMode;
    // } else {
    //   this.transportMode = '';
    // }

    // if (this.globalService.defaultService != '') {
    //   this.serviceCode = this.globalService.defaultService;
    // } else {
    //   this.serviceCode = '';
    // }
    // this.transportMode = this.globalService.defaultMode;
    // this.serviceCode = this.globalService.defaultService;
    this.branchCode = this.globalService.globalDefaultBranchCode;
    // this.serviceCode = this.globalService.defaultService;
  }

  onModeChange(event) {
    const value = event.target.value;

    if (value == '1') {
      this.modelblMAWB = 'MAWB/MBL No.';
    } else if (value == '2') {
      this.modelblMAWB = 'MAWB/MBL No.';
    }

    if (value == '1') {
      this.modelblH = 'HAWB/HBL No.';
    } else if (value == '2') {
      this.modelblH = 'HAWB/HBL No.';
    }

    if (value == 'Import') {
      this.modelblB = 'BE No./SB No.';
    } else if (value == 'Export') {
      this.modelblB = 'BE No./SB No.';
    }


    if (value == 'Import') {
      this.modelblS = 'BE Date/SB Date';
    } else if (value == 'Export') {
      this.modelblS = 'BE Date/SB Date';
    }
  }



  onServiceChange(event) {
    const value = event.target.value;

    if (value == '2') {
      this.modelblB = 'BE No./SB No.';
    } else if (value == '1') {
      this.modelblB = 'BE No./SB No.';
    }


    if (value == '2') {
      this.modelblS = 'BE Date/SB Date';
    } else if (value == '1') {
      this.modelblS = 'BE Date/SB Date';
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdateJobMilestonePage');
    this.VenType = '1';
  }

  ionViewDidEnter() {
    this.VenType = '1';
    // this.fetchedMilestone = this.navParams.get('milestone');
    this.fetchedMilestone = this.globalService.selectedMilestone;
    this.fetchedJobs = this.globalService.selectedJobsArray;
    console.log('check milestone !!!!!!!', this.fetchedMilestone);
    console.log('check jobsArray ', this.fetchedJobs);

    console.log('check job type: ', this.VenType);
  }

  ionViewDidLeave() {
    this.fetchedMilestone = '';
  }

  showAlert(title, msg) {
    let alert = this.alertCtrl.create({
      title: title,
      message: msg,
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.globalService.setRootPage(DashboardPage);

          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
      ]
    });
    alert.present();
  }

  backToDashboard() {

    this.globalService.setRootPage(ShipmentInvoicePage);
  }

  // sendDataToSearchMilestone() {


  //   this.openModal();

  // }


  sendDataToSearchJobs() {

    // this.searchJobs();
  }
  openModalOrigin() {
    // localStorage.removeItem('origin');
    // localStorage.removeItem('destination');
    const searchMilestone = this.modalCtrl.create(SearchPortAirportPage, { origin: '0' });
    searchMilestone.onDidDismiss(data => {
      console.log(data);
      // this.modalDismissData = JSON.stringify(data);
      if (this.globalService.selectedOrigin != '') {
        this.origin = this.globalService.handleJSON(data).Locationname;

      }
    });
    searchMilestone.present();
    this.globalService.store('branchCode', this.branchCode);
    localStorage.setItem('Mode', this.transportMode);
    localStorage.setItem('jobType', this.VenType);

    console.log(localStorage.getItem('jobType'));
  }

  openModalDestination() {
    // localStorage.removeItem('origin');
    // localStorage.removeItem('destination');
    const searchMilestone = this.modalCtrl.create(SearchPortAirportPage, { destination: '1' });
    searchMilestone.onDidDismiss(data => {
      console.log(data);
      this.destination = this.globalService.handleJSON(data).Locationname;
    });
    searchMilestone.present();
    this.globalService.store('branchCode', this.branchCode);
    localStorage.setItem('Mode', this.transportMode);
    localStorage.setItem('jobType', this.VenType);

    console.log(localStorage.getItem('jobType'));
  }

  // searchJobs(){
  //   if (this.branchCode == '0' || this.transportMode == '0' || this.serviceCode == '0' || this.shipmentCode == '0') {
  //     this.toastService.show('Please select the required fields.', 3000, true, 'top', 'toast-container')
  //     return;
  //   }
  //   this.navCtrl.push(SearchJobsPage, {searchDetails: this.searchList} );
  // }

  goBack() {
    this.globalService.setRootPage(DashboardPage);
    // this.navCtrl.pop();
  }

  removeJob(val) {
    var index = this.globalService.selectedJobsArray.indexOf(val);
    this.globalService.selectedJobsArray.splice(index, 1);
  }

  SearchJobList() {
    debugger
    if (this.branchCode == '0') {
      this.toastService.show('Please select branch.', 3000, true, 'top', 'toast-container');
      //this.startDate.focus();
      return;
    }

    // if (this.transportMode == '0') {
    //   this.toastService.show('Please select mode.', 3000, true, 'top', 'toast-container');
    //   //this.startDate.focus();
    //   return;
    // }

    // if (this.serviceCode == '0') {
    //   this.toastService.show('Please select service.', 3000, true, 'top', 'toast-container');
    //   //this.startDate.focus();
    //   return;
    // }

    // this.searchList.UserId = '1244';// this.userID;
    // this.searchList.Mode = '1'// this.transportMode;
    // this.searchList.Service = '2';// this.serviceCode;
    // this.searchList.JobType = '1'//this.VenType;
    // this.searchList.BranchCode = 'BOM'// this.branchCode
    // this.searchList.JobNo = ''//this.jobno;
    // this.searchList.MBLNo = ''//this.mblno;
    // this.searchList.HBLNo = ''//this.hblno;
    // this.searchList.SBNo = ''// this.sbno
    // this.searchList.Origin = ''//this.origin;
    // this.searchList.Destination = ''// this.destination;
    var conDate = this.sbdate.split("-").reverse().join("-");
    this.searchList.UserId = this.userID;
    this.searchList.Mode = this.transportMode.toString();
    this.searchList.Service = this.serviceCode.toString();
    this.searchList.JobType = this.VenType;
    this.searchList.BranchCode = this.branchCode
    this.searchList.JobNo = this.jobno;
    this.searchList.MBLNo = this.mblno;
    this.searchList.HBLNo = this.hblno;
    this.searchList.SBNo = this.sbno;
    this.searchList.SBDate = conDate;
    this.searchList.Origin = this.origin;
    this.searchList.Destination = this.destination;

    //'1244','1','2',1,'BOM','','','','','',''

    this.http.POST(Constants.Corvi_Services.GetCustomerSearchJobList, this.searchList).then((response) => {
      console.log('test saved milestone here: ', response);
      debugger
      if (response != '') {
        if (this.globalService.isCordovaAvailable()) {

          this.responseFormAPI = response;
          this.jobSearchData = JSON.parse(this.responseFormAPI)["Table"];
          localStorage.setItem('customerJobSearch', JSON.stringify(this.jobSearchData));
          localStorage.setItem('flagJobSearch', '1');

          if (JSON.parse(this.responseFormAPI)["Table"] != '') {
            this.viewCtrl.dismiss();
            this.globalService.setRootPage(ShipmentStatusPage);

          } else {
            this.toastService.show('Data not found!', 3000, true, 'top', 'toast-container');
            return;
          }


        } else {
          this.jobSearchData = response['Table'];

          localStorage.setItem('flagJobSearch', '1');
          localStorage.setItem('customerJobSearch', JSON.stringify(this.jobSearchData));
          if (response['Table'] != '') {
            this.viewCtrl.dismiss();
            this.globalService.setRootPage(ShipmentStatusPage);

          } else {
            this.toastService.show('Data not found!', 3000, true, 'top', 'toast-container');
            return;
          }

        }
      } else {
        this.toastService.show('Form not submited !', 3000, true, 'top', 'toast-container');
        return;
      }
    })
  }

}
