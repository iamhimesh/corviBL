import { Constants } from './../../constants';
import { HttpServiceProvider } from './../../providers/http-service/http-service';
import { GlobalProvider } from './../../providers/global/global';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastService } from '../../providers/util/toast.service';

import * as moment from 'moment';
import { SearchJobResultsPage } from '../search-job-results/search-job-results';

export class searchJobList{
  UserId: string; FromDate: string; JobType: any; ToDate: string;
  BranchCode: string; JobNo: string; MBLNo: string; HBLNo:string; SBNo:string; CustomerName: string;
  ShipmentType: string; Mode: string; Service: string;

}

/**
 * Generated class for the SearchJobsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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
  FromDate: string = new Date().toISOString();
  ToDate: string = new Date().toISOString();
// FromDate;
// ToDate;

  searchList: searchJobList;


  constructor(public navCtrl: NavController, public navParams: NavParams, 
              public globalService: GlobalProvider, public http: HttpServiceProvider,
              public toastService: ToastService ) {
    this.title = "Search Job(s)";
    this.appBuildConfig = this.globalService.appBuildConfig;
    this.UserDetails = this.globalService.get('userDetails');

    this.BranchTbl = this.UserDetails[Object.keys(this.UserDetails)[1]]["Table4"];

    this.fetchedData = this.navParams.get('searchDetails');

    this.searchList = new searchJobList();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchJobsPage');
  }

  ionViewDidEnter(){
    if(this.fetchedData.length != 0){
      this.searchList.UserId = localStorage.getItem('userId');
      this.searchList.BranchCode = this.fetchedData.branch;
      this.searchList.JobType = this.fetchedData.jobType;    
    } else {
      
    }
   console.log('fetched data: ', this.fetchedData);
  }

  searchJobs(){
     this.searchList.UserId = localStorage.getItem('userId'); //
      this.searchList.BranchCode = this.fetchedData.branch; //
      this.searchList.JobType = this.fetchedData.jobType;   //
      this.searchList.ShipmentType = this.fetchedData.shipmentType;
      this.searchList.Mode = this.fetchedData.mode;
      this.searchList.Service = this.fetchedData.service;
      this.searchList.MBLNo = this.mawbNumber; //
      this.searchList.HBLNo = this.mawbNumber; //
      this.searchList.CustomerName = this.customerName; //
      this.searchList.JobNo = this.jobNumber; //
      this.searchList.SBNo = this.BeSbNo; //
      this.FromDate = moment(this.FromDate).format('MM/DD/YYYY');
      this.ToDate = moment(this.ToDate).format('MM/DD/YYYY');

      this.searchList.FromDate = this.FromDate;
      this.searchList.ToDate = this.ToDate;

      this.http.POST(Constants.Corvi_Services.GetSearchJobList, this.searchList).then((response)=>{
        console.log('check response here: ', response);
        // this.responseData = response;
        if(response != 0){
          let stageOne = response['Table'];
            this.navCtrl.push(SearchJobResultsPage, {jobResults: stageOne});
        }
      })
  }

  cancelJobSearch(){
    this.navCtrl.pop();
  }

  changed(endte) {

    
    let sdate = this.FromDate.slice(0, 10);
    let stime = this.FromDate.slice(11, 16);
    let sdatTime = sdate + ' ' + stime;


    let edate = endte.slice(0, 10);
    let etime = endte.slice(11, 16);
    let edatTime = edate + ' ' + etime;
    debugger
    var a = Date.parse(sdate);
    var b = Date.parse(edate);

    if (b < a || b == a) {
      this.toastService.show('End Time should be greater than Start Time.', 3000, true, 'top', 'toast-container')
      return;
    } else {
      console.log('all ok!');
      // alert('ok')

    }

  }


}
