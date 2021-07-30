import { Constants } from './../../constants';
import { HttpServiceProvider } from './../../providers/http-service/http-service';
import { GlobalProvider } from './../../providers/global/global';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

export class searchJobList{
  UserId: string; Service: string; JobType: any; Mode: string;
  BranchCode: string; JobNo: string; MBLNo: string; HBLNo:string; SBNo:string; Origin: string;
  Destination:string;

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

  shipmentCode;
  serviceCode;
  customerName;
  jobNumber;
  mawbNumber;
  hawbNumber;
  BeSbNo;

  searchList: searchJobList;


  constructor(public navCtrl: NavController, public navParams: NavParams, 
              public globalService: GlobalProvider, public http: HttpServiceProvider ) {
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
      this.searchList.Mode = this.fetchedData.mode;
      this.searchList.Service = this.fetchedData.service;
      this.searchList.JobType = this.fetchedData.jobType;    
    }
   console.log('fetched data: ', this.fetchedData);
  }

  searchJobs(){
     this.searchList.UserId = localStorage.getItem('userId');
      this.searchList.BranchCode = this.fetchedData.branch;
      this.searchList.Mode = this.fetchedData.mode;
      this.searchList.Service = this.fetchedData.service;
      this.searchList.JobType = this.fetchedData.jobType;
      
      this.searchList.MBLNo = this.mawbNumber;
      this.searchList.HBLNo = this.mawbNumber;

      this.http.POST(Constants.Corvi_Services.GetSearchJobList, this.searchList).then((response)=>{
        console.log('check response here: ', response);
      })
  }

}
