import { Constants } from './../../constants';
import { HttpServiceProvider } from './../../providers/http-service/http-service';
import { GlobalProvider } from './../../providers/global/global';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ToastService } from '../../providers/util/toast.service';

import * as moment from 'moment';
import { SearchJobResultsPage } from '../search-job-results/search-job-results';

export class searchJobList {
  UserId: string; FromDate: string; JobType: any; ToDate: string;
  BranchCode: string; JobNo: string; MBLNo: string; HBLNo: string; SBNo: string; CustomerName: string;
  ShipmentType: string; Mode: string; Service: string;

}

@IonicPage()
@Component({
  selector: 'page-search-jobs',
  templateUrl: 'search-jobs.html',
})
export class SearchJobsPage {
  title: string;
  appBuildConfig: any;
  UserDetails: any = [];
  BranchTbl: any = [];
  branchCode: any = '0';
  fetchedData: any = [];
  responseData: any = [];
  shipmentCode;
  serviceCode;
  customerName: any = '';
  jobNumber: any = '';
  mawbNumber: any = '';
  hawbNumber: any = '';
  BeSbNo: any = '';
  // FromDate: string = new Date().toISOString(); //newly commented
  // ToDate: string = new Date().toISOString(); //newly commented
  FromDate: any = ''; //newly uncommented
  ToDate: any = ''; //newly uncommented
  searchList: searchJobList;
  responseFormAPI: any = [];
  TodayDate: any;


  constructor(public navCtrl: NavController, public navParams: NavParams,
    public globalService: GlobalProvider, public http: HttpServiceProvider,
    public toastService: ToastService, public viewCtrl: ViewController) {
    this.title = "Search Job(s)";
    this.appBuildConfig = this.globalService.appBuildConfig;
    this.UserDetails = this.globalService.get('userDetails');

    // this.BranchTbl = this.UserDetails[Object.keys(this.UserDetails)[1]]["Table4"];

    this.BranchTbl = JSON.parse(localStorage.getItem('BranchTable'));

    this.fetchedData = this.navParams.get('searchDetails');

    this.searchList = new searchJobList();

  }
  ngOnInit() {
    this.branchCode = this.globalService.globalDefaultBranchCode;

    var currentDate = new Date()
    var day = currentDate.getDate()
    var month = currentDate.getMonth() + 1
    var year = currentDate.getFullYear()
    this.TodayDate = year + "-" + month + "-" + day



  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchJobsPage');
  }

  ionViewDidEnter() {
    if (this.fetchedData.length != 0) {
      this.searchList.UserId = localStorage.getItem('userId');
      this.searchList.BranchCode = this.fetchedData.branch;
      this.searchList.JobType = this.fetchedData.jobType;
    } else {

    }
    console.log('fetched data: ', this.fetchedData);
  }

  searchJobs() {

    // if (this.fetchedData.mode == '') {
    //   this.toastService.show('Please select mode.', 3000, true, 'top', 'toast-container');
    //   //this.startDate.focus();
    //   return;
    // }


    // if (this.fetchedData.service == '') {
    //   this.toastService.show('Please select mode.', 3000, true, 'top', 'toast-container');
    //   //this.startDate.focus();
    //   return;
    // }

    // if (this.fetchedData.service == '') {
    //   this.toastService.show('Please select mode.', 3000, true, 'top', 'toast-container');
    //   //this.startDate.focus();
    //   return;
    // }







    this.searchList.UserId = localStorage.getItem('userId'); //
    this.searchList.BranchCode = this.fetchedData.branch; //
    this.searchList.JobType = this.fetchedData.jobType;   //
    this.searchList.ShipmentType = this.fetchedData.shipmentType;
    this.searchList.Mode = this.fetchedData.mode;
    this.searchList.Service = this.fetchedData.service;
    this.searchList.MBLNo = this.mawbNumber; //
    this.searchList.HBLNo = this.hawbNumber; //
    this.searchList.CustomerName = this.customerName; //
    this.searchList.JobNo = this.jobNumber; //
    this.searchList.SBNo = this.BeSbNo; //
    // this.FromDate = moment(this.FromDate).format('MM/DD/YYYY'); //newly commented
    // this.ToDate = moment(this.ToDate).format('MM/DD/YYYY'); //newly commented

    this.searchList.FromDate = this.FromDate;
    // this.searchList.FromDate = '';
    this.searchList.ToDate = this.ToDate;
    // this.searchList.ToDate = '';

    this.http.POST(Constants.Corvi_Services.GetSearchJobList, this.searchList).then((response) => {
      console.log('check response here: ', response);
      // this.responseData = response;
      if (response != '') {
        console.log('yesssssss');

        // let stageOne = response['Table'];

        if (this.globalService.isCordovaAvailable()) {

          this.responseFormAPI = response;
          let stageOne = JSON.parse(this.responseFormAPI)["Table"];
          this.navCtrl.push(SearchJobResultsPage, { jobResults: stageOne });
          this.FromDate = ''; //new
          this.ToDate = '';
          // this.flag = true;
        } else {
          let stageOne = response['Table'];
          this.navCtrl.push(SearchJobResultsPage, { jobResults: stageOne });
          this.FromDate = '';
          this.ToDate = '';

        }

      }
    })
  }

  // export ANDROID_SDK_ROOT=/Users/himeshpatel/Library/Android/sdk/android-sdk-macosx

  cancelJobSearch() {
    this.navCtrl.pop();
  }

  changed(endte) {



    let sdate = this.FromDate.slice(0, 10);
    let stime = this.FromDate.slice(11, 16);
    let sdatTime = sdate + ' ' + stime;


    let edate = endte.slice(0, 10);
    let etime = endte.slice(11, 16);
    let edatTime = edate + ' ' + etime;

    var a = Date.parse(sdate);
    var b = Date.parse(edate);
    var curDate = Date.parse(this.TodayDate);
    if (b < a) {
      this.toastService.show('The job date should be greater or equal to from date.', 3000, true, 'top', 'toast-container')
      this.ToDate = '0';
      return;

    }

    // if (a < curDate) {
    //   this.toastService.show('The job date should be greater or equal to from date.', 3000, true, 'top', 'toast-container')
    //   this.FromDate = '';
    //   return;
    // }


  }
  getToday(): string {
    return new Date().toISOString().split('T')[0]
  }

  changedFrom(endte) {

    let sdate = this.ToDate.slice(0, 10);
    let stime = this.ToDate.slice(11, 16);
    let sdatTime = sdate + ' ' + stime;



    let edate = endte.slice(0, 10);
    let etime = endte.slice(11, 16);
    let edatTime = edate + ' ' + etime;

    var a = Date.parse(sdate);
    var b = Date.parse(edate);
    var curDate = Date.parse(this.TodayDate);
    if (b > a) {
      this.toastService.show('The job date should be greater or equal to from date.', 3000, true, 'top', 'toast-container')
      this.FromDate = '0';

      return;

    }

    // if (a < curDate) {
    //   this.toastService.show('The job date should be greater or equal to from date.', 3000, true, 'top', 'toast-container')
    //   this.FromDate = '';
    //   return;
    // }


  }

  dismissModal() {
    let data = { 'foo': 'bar' };
    // this.viewCtrl.dismiss(this.globalService.selectedJobType);
    this.viewCtrl.dismiss();
  }

}
