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
 branch:string; service: string; shipmentType: string; mode: string; jobType: any;
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
    ,public globalService: GlobalProvider, public toastService: ToastService,
    public modalCtrl: ModalController, public http: HttpServiceProvider,
    public alertCtrl: AlertController) {
    this.title = "Update Job Milestone";
    this.VenType = '1';
    this.appBuildConfig = this.globalService.appBuildConfig;

    this.UserDetails = this.globalService.get('userDetails');

    this.BranchTbl = this.UserDetails[Object.keys(this.UserDetails)[1]]["Table4"];
    this.ModeTbl = this.UserDetails[Object.keys(this.UserDetails)[1]]["Table3"];
    this.ServiceTBl = this.UserDetails[Object.keys(this.UserDetails)[1]]["Table3"];
    this.ShipmentTbl = this.UserDetails[Object.keys(this.UserDetails)[1]]["Table3"];

     this.modes = this.ModeTbl.filter(a => a.Identifier == "TransportMode");
     this.services = this.ModeTbl.filter(a => a.Identifier == "Service");
     this.shipments = this.ModeTbl.filter(a => a.Identifier == "ShipmentType");

     this.searchList = new searchDataList();

     this.saveMileStoneList = new saveMileStoneList();

  //   console.log(this.ModeTbl.filter(function(item){
  //     this.modes = item.Identifier == "TransportMode";         
  // }));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdateJobMilestonePage');
    this.VenType = '1';
  }

  ionViewDidEnter(){
    this.VenType = '1';
    // this.fetchedMilestone = this.navParams.get('milestone');
    this.fetchedMilestone = this.globalService.selectedMilestone;
    this.fetchedJobs = this.globalService.selectedJobsArray;
    console.log('check milestone !!!!!!!', this.fetchedMilestone);
    console.log('check jobsArray ', this.fetchedJobs);

    console.log('check job type: ', this.VenType);
  }

  ionViewDidLeave(){
   this.fetchedMilestone = '';
  }

  showAlert(title,msg){
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

    this.globalService.setRootPage(DashboardPage);
  }

  sendDataToSearchMilestone(){
    this.searchList.branch = this.branchCode;
    this.searchList.mode = this.transportMode;
    this.searchList.shipmentType = this.shipmentCode;
    this.searchList.service = this.serviceCode;
    this.searchList.jobType = this.VenType;

    this.openModal();
  }

  sendDataToSearchJobs(){
    this.searchList.branch = this.branchCode;
    this.searchList.mode = this.transportMode;
    this.searchList.shipmentType = this.shipmentCode;
    this.searchList.service = this.serviceCode;
    this.searchList.jobType = this.VenType;

    this.searchJobs();
  }
  openModal() {

    if (this.branchCode == '0' || this.transportMode == '0' || this.serviceCode == '0' || this.shipmentCode == '0') {
      this.toastService.show('Please select the required fields.', 3000, true, 'top', 'toast-container')
      return;
    }
    const searchMilestone = this.modalCtrl.create(SearchMilestonePage, { searchDetails: this.searchList });
    searchMilestone.onDidDismiss(data => {
      console.log(data);
      this.modalDismissData = JSON.stringify(data);
    });
    searchMilestone.present();
    this.globalService.store('branchCode', this.branchCode);
    localStorage.setItem('jobType',this.VenType);

    console.log(localStorage.getItem('jobType'));
  }

  searchJobs(){
    if (this.branchCode == '0' || this.transportMode == '0' || this.serviceCode == '0' || this.shipmentCode == '0') {
      this.toastService.show('Please select the required fields.', 3000, true, 'top', 'toast-container')
      return;
    }
    this.navCtrl.push(SearchJobsPage, {searchDetails: this.searchList} );
  }

  goBack(){
    this.globalService.setRootPage(DashboardPage);
    // this.navCtrl.pop();
  }

  removeJob(val){
    var index = this.globalService.selectedJobsArray.indexOf(val);
    this.globalService.selectedJobsArray.splice(index,1);
  }

  save(){
    this.saveMileStoneList.UserId = localStorage.getItem('userId'); //
    this.saveMileStoneList.Remarks = this.remarks;
    this.saveMileStoneList.ActivityDate = this.activityDate;
    // for(let d of this.globalService.selectedMilestone){
    //   this.activityIdArr.push(d.DocId);
    // }
    this.saveMileStoneList.ActivityId = this.globalService.selectedMilestone.DocId;
    // this.saveMileStoneList.ActivityId = this.activityIdArr.toString();
    for(let data of this.globalService.selectedJobsArray){
      this.bookingNoArr.push(data.WODetailNo);
    }
    
    this.saveMileStoneList.BookingNo = this.bookingNoArr.toString();
    console.log('***&&&&&***', this.saveMileStoneList);

    this.http.POST(Constants.Corvi_Services.UpdateJobMilestone, this.saveMileStoneList).then((response) => {
      console.log('test saved milestone here: ', response);
      if(response == 'Success'){
        this.showAlert('Success','Milestone Saved');
        // this.globalService.setRootPage(DashboardPage);
        this.globalService.selectedJobsArray = [];
        this.globalService.selectedMilestone = [];
      } else {
        this.toastService.show('Form not submited !', 3000, true, 'top', 'toast-container');
        return;
      }
    })
  }


}
