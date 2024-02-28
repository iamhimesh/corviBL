import { SearchJobsPage } from './../search-jobs/search-jobs';
import { SearchMilestonePage } from './../search-milestone/search-milestone';
import { ToastService } from './../../providers/util/toast.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import { GlobalProvider } from '../../providers/global/global';
import { DashboardPage } from '../dashboard/dashboard';
import { HttpServiceProvider } from '../../providers/http-service/http-service';
import { Constants } from '../../constants';

export class searchDataList {
  branch: string; service: string; shipmentType: string; mode: string; jobType: any;
}

export class saveMileStoneList {
  BookingNo: string; ActivityDate: string; ActivityId: string; Remarks: string; UserId: string;
}

@IonicPage()
@Component({
  selector: 'page-update-job-milestone',
  templateUrl: 'update-job-milestone.html',
})
export class UpdateJobMilestonePage {

  title: string;
  appBuildConfig: any;
  UserDetails1: any = [];
  UserDetails: any = [];
  BranchTbl: any = [];
  ModeTbl: any = [];
  ServiceTBl: any = [];
  ShipmentTbl: any = [];
  modes: any = [];
  services: any = [];
  shipments: any = [];
  branchCode: any = '0';
  transportMode: any = '0';
  serviceCode: any = '0';
  shipmentCode: any = '0';

  modalDismissData: any;

  VenType: any;
  searchList: searchDataList;

  fetchedMilestone;

  fetchedJobs: any = [];

  bookingNoArr: any = [];
  activityIdArr: any = [];

  activityDate: string = new Date().toISOString();
  remarks;

  saveMileStoneList: saveMileStoneList;
  constructor(public navCtrl: NavController, public navParams: NavParams
    , public globalService: GlobalProvider, public toastService: ToastService,
    public modalCtrl: ModalController, public http: HttpServiceProvider,
    public alertCtrl: AlertController) {
    this.title = "Update Job Milestone";
    // this.VenType = '1';
    this.appBuildConfig = this.globalService.appBuildConfig;

    this.UserDetails = this.globalService.get('userDetails');

    // if(this.globalService.isCordovaAvailable()){
    //   this.UserDetails = JSON.parse(this.UserDetails1);
    // } else {
    //   this.UserDetails = this.UserDetails1;
    // }


    //   this.BranchTbl = this.UserDetails[Object.keys(this.UserDetails)[1]]["Table4"];
    //   this.ModeTbl = this.UserDetails[Object.keys(this.UserDetails)[1]]["Table3"];
    //   this.ServiceTBl = this.UserDetails[Object.keys(this.UserDetails)[1]]["Table3"];
    //   this.ShipmentTbl = this.UserDetails[Object.keys(this.UserDetails)[1]]["Table3"];

    this.BranchTbl = JSON.parse(localStorage.getItem('BranchTable'));
    this.modes = JSON.parse(localStorage.getItem('TransportMode'));
    this.services = JSON.parse(localStorage.getItem('ServiceType'));
    this.shipments = JSON.parse(localStorage.getItem('ShipmentTypeAir'));

    this.searchList = new searchDataList();

    this.saveMileStoneList = new saveMileStoneList();

    //   console.log(this.ModeTbl.filter(function(item){
    //     this.modes = item.Identifier == "TransportMode";
    // }));
  }

  ngOnInit() {
    this.branchCode = this.globalService.globalDefaultBranchCode;
    this.VenType = '1';

    if (typeof (this.globalService.defaultMode) != 'undefined') {
      this.transportMode = this.globalService.defaultMode;
    }
    if (typeof (this.globalService.defaultService) != 'undefined') {
      this.serviceCode = this.globalService.defaultService;
    }

    if (typeof (this.globalService.defaultMode) == 'undefined') {
      this.transportMode = 1;
    }
    if (typeof (this.globalService.defaultService) == 'undefined') {
      this.serviceCode = 1;
    }

    this.globalService.selectedMilestone = [];
    this.globalService.selectedJobsArray = []; //newly added on 16/09
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdateJobMilestonePage');
    // this.VenType = '1';

    // this.UserDetails = this.globalService.get('userDetails');

    // if(this.globalService.isCordovaAvailable()){
    //   this.UserDetails = JSON.parse(this.UserDetails1);
    // } else {
    //   this.UserDetails = this.UserDetails1;
    // }


    // this.BranchTbl = this.UserDetails[Object.keys(this.UserDetails)[1]]["Table4"];

    // this.BranchTbl = this.globalService.BranchTbl;
    // console.log('check branches here: ', this.BranchTbl);

    // this.ModeTbl = this.UserDetails[Object.keys(this.UserDetails)[1]]["Table3"];
    // this.ModeTbl = JSON.parse(localStorage.getItem("modes"));
    // this.ServiceTBl = this.UserDetails[Object.keys(this.UserDetails)[1]]["Table3"];
    // this.ShipmentTbl = this.UserDetails[Object.keys(this.UserDetails)[1]]["Table3"];

    //  this.modes = this.ModeTbl.filter(a => a.Identifier == "TransportMode");
    //  this.modes = JSON.parse(localStorage.getItem("modesTwo"));
    //  this.services = this.ModeTbl.filter(a => a.Identifier == "Service");
    //  this.shipments = this.ModeTbl.filter(a => a.Identifier == "ShipmentType");

    //  this.searchList = new searchDataList();

    //  this.saveMileStoneList = new saveMileStoneList();

  }

  ionViewDidEnter() {

    // this.VenType = '1';
    // this.fetchedMilestone = this.navParams.get('milestone');
    this.fetchedMilestone = this.globalService.selectedMilestone;
    this.fetchedJobs = this.globalService.selectedJobsArray;
    console.log('check milestone !!!!!!!', this.fetchedMilestone.DocumentName);
    console.log('check jobsArray ', this.fetchedJobs);

    // if(this.globalService.selectedJobType == ''){
    //   this.VenType = '1';
    // } else{
    //   this.VenType = this.globalService.selectedJobType;
    // }

    console.log('check job type: ', this.VenType);

    console.log('check for ven type: ', this.VenType);
  }

  ionViewDidLeave() {
    // this.fetchedMilestone = '';
  }




  onModeChanged(event) {
    const value = event.target.value;

    console.log('check selected value: ', value);
    if (value == 1) {
      this.shipments = JSON.parse(localStorage.getItem('ShipmentTypeAir'));
      console.log('shipments: ', this.shipments);
    }
    if (value == 2) {
      this.shipments = JSON.parse(localStorage.getItem('ShipmentType'));
      console.log('shipments: ', this.shipments);
    }
    if (value == 3) {
      this.shipments = JSON.parse(localStorage.getItem('ShipmentTypeRail'));
      console.log('shipments: ', this.shipments);
    }
    if (value == 4) {
      this.shipments = JSON.parse(localStorage.getItem('ShipmentTypeRoad'));
      console.log('shipments: ', this.shipments);
    }

  }

  showAlert(title, msg) {
    let alert = this.alertCtrl.create({
      title: title,
      message: msg,
      buttons: [
        {
          text: 'OK',
          handler: () => {
            // this.globalService.setRootPage(DashboardPage);
            this.globalService.selectedMilestone = '';

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

    this.globalService.setRootPage(DashboardPage);
  }

  sendDataToSearchMilestone() {
    this.searchList.branch = this.branchCode;
    this.searchList.mode = this.transportMode;
    this.searchList.shipmentType = this.shipmentCode;
    this.searchList.service = this.serviceCode;
    this.searchList.jobType = this.VenType;

    this.globalService.selectedJobType = this.VenType;

    this.openModal();
  }

  sendDataToSearchJobs() {
    this.searchList.branch = this.branchCode;
    this.searchList.mode = this.transportMode;
    this.searchList.shipmentType = this.shipmentCode;
    this.searchList.service = this.serviceCode;
    this.searchList.jobType = this.VenType;

    this.searchJobs();
  }
  openModal() {

    if (this.branchCode == '0' || this.transportMode == '0' || this.serviceCode == '0' || this.shipmentCode == '0' || this.VenType == '0') {
      this.toastService.show('Please select the required fields.', 3000, true, 'top', 'toast-container')
      return;
    }
    const searchMilestone = this.modalCtrl.create(SearchMilestonePage, { searchDetails: this.searchList });
    searchMilestone.onDidDismiss(data => {
      console.log(data);
      // this.ionViewDidEnter();
      if (this.globalService.selectedMilestone != '') {
        this.modalDismissData = JSON.stringify(data);
        //this.searchList.jobType = this.VenType;
        this.VenType = localStorage.getItem('selectedJobType');
      } else {
        this.VenType = localStorage.getItem('selectedJobType');
      }

      // if (data == null) {
      //   // this.modalDismissData = JSON.stringify(data);
      //   //this.searchList.jobType = this.VenType;
      //   // this.VenType = localStorage.getItem('selectedJobType');
      //   // this.ionViewDidEnter();
      // } else {
      //   this.VenType = localStorage.getItem('selectedJobType');
      // }

    });
    searchMilestone.present();
    this.globalService.store('branchCode', this.branchCode);
    localStorage.setItem('selectedJobType', this.VenType);

    console.log(localStorage.getItem('selectedJobType'));
  }

  searchJobs() {
    if (this.branchCode == '0' || this.transportMode == '0' || this.serviceCode == '0' || this.shipmentCode == '0' || this.globalService.selectedMilestone.DocumentName == '') {
      this.toastService.show('Please select the required fields.', 3000, true, 'top', 'toast-container')
      return;
    }
    this.navCtrl.push(SearchJobsPage, { searchDetails: this.searchList });
  }

  goBack() {
    this.globalService.setRootPage(DashboardPage);
    // this.navCtrl.pop();
  }

  removeJob(val) {
    var index = this.globalService.selectedJobsArray.indexOf(val);
    this.globalService.selectedJobsArray.splice(index, 1);
  }

  save() {

    if (this.branchCode == '0' || this.transportMode == '0' || this.serviceCode == '0' || this.shipmentCode == '0') {
      this.toastService.show('Please select the required fields.', 3000, true, 'top', 'toast-container')
      return;
    }
    if (this.globalService.selectedMilestone.DocumentName == undefined || this.globalService.selectedMilestone.DocumentName == '') {
      this.toastService.show('Please add milestone.', 3000, true, 'top', 'toast-container')
      return;
    }
    // if (this.remarks == undefined || this.remarks == '') {
    //   this.toastService.show('Please add remarks.', 3000, true, 'top', 'toast-container')
    //   return;
    // }
    if (this.fetchedJobs.length == 0) {
      this.toastService.show('Search for Jobs.', 3000, true, 'top', 'toast-container')
      return;
    }
    console.log('check remarks ', this.remarks);
    console.log('check milestone ', this.globalService.selectedMilestone.DocumentName);
    this.saveMileStoneList.UserId = localStorage.getItem('userId'); //
    this.saveMileStoneList.Remarks = this.remarks;
    this.saveMileStoneList.ActivityDate = this.activityDate;
    // for(let d of this.globalService.selectedMilestone){
    //   this.activityIdArr.push(d.DocId);
    // }
    this.saveMileStoneList.ActivityId = this.globalService.selectedMilestone.DocId;


    // this.saveMileStoneList.ActivityId = this.activityIdArr.toString();
    // for (let data of this.fetchedJobs) {

    //   this.bookingNoArr.push(data.WODetailNo);
    // }



    // change by junaid

    for (var i = 0; i < this.fetchedJobs.length; i++) {
      this.bookingNoArr.push(this.fetchedJobs[i].BookingMasterNo);

    }

    this.saveMileStoneList.BookingNo = this.bookingNoArr.toString();
    console.log('***&&&&&***', this.saveMileStoneList);

    this.http.POST(Constants.Corvi_Services.UpdateJobMilestone, this.saveMileStoneList).then((response: any) => {
      console.log('test saved milestone here: ', response);
      if (response.includes('Success')) {
        this.showAlert('Success', 'Milestone Saved');
        // this.globalService.setRootPage(DashboardPage);
        this.globalService.selectedJobsArray = [];
        this.globalService.selectedMilestone = [];
      } else {
        this.toastService.show('Form not submited !', 3000, true, 'top', 'toast-container');
        this.globalService.selectedMilestone = [];
        return;
      }
    })
  }


}
