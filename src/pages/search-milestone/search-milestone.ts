import { UpdateJobMilestonePage } from './../update-job-milestone/update-job-milestone';
import { Constants } from './../../constants';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { GlobalProvider } from '../../providers/global/global';
import { HttpServiceProvider } from '../../providers/http-service/http-service';



export class searchMilestoneList {
  UserId: string; service: string; shipmentType: string; jobType: any; mode: string;
}


@IonicPage()
@Component({
  selector: 'page-search-milestone',
  templateUrl: 'search-milestone.html',
})
export class SearchMilestonePage {
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
  branchCode: string;
  transportMode: string;
  serviceCode: string;
  shipmentCode: string;

  VenType: any;

  searchList: searchMilestoneList;

  fetchedData: any = [];

  mileStoneDetails: any;

  // mileStoneDetails: Array<{ DocId: string, DocCode: string, DocumentName: string }> = [];
  list:any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public globalService: GlobalProvider, 
              public viewCtrl: ViewController, 
              public http: HttpServiceProvider
              
              ) {
    
              this.title = "Search Milestone";

              this.fetchedData = this.navParams.get('searchDetails');

              if(this.fetchedData.length == 0){
                this.VenType = '1';
              } else {
                this.VenType = this.fetchedData.jobType;
              }

              console.log('fetched data: ', this.fetchedData);

    this.appBuildConfig = this.globalService.appBuildConfig;

    this.UserDetails = this.globalService.get('userDetails');

    this.BranchTbl = this.UserDetails[Object.keys(this.UserDetails)[1]]["Table4"];
    this.ModeTbl = this.UserDetails[Object.keys(this.UserDetails)[1]]["Table3"];
    this.ServiceTBl = this.UserDetails[Object.keys(this.UserDetails)[1]]["Table3"];
    this.ShipmentTbl = this.UserDetails[Object.keys(this.UserDetails)[1]]["Table3"];

     this.modes = this.ModeTbl.filter(a => a.Identifier == "TransportMode");
     this.services = this.ModeTbl.filter(a => a.Identifier == "Service");
     this.shipments = this.ModeTbl.filter(a => a.Identifier == "ShipmentType");

     this.searchList = new searchMilestoneList();

  }

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchMilestonePage');
  }

  ionViewDidEnter(){
   if(this.fetchedData.length != 0){
     this.branchCode = this.fetchedData.branch;
     this.shipmentCode = this.fetchedData.shipmentType;
     this.transportMode = this.fetchedData.mode;
     this.serviceCode = this.fetchedData.service;
     this.VenType = this.fetchedData.jobType;
    //  this.VenType = "1";
   }
   else {
     this.VenType = '1';
   }
  }

  dismissModal() {
    let data = { 'foo': 'bar' };
    this.viewCtrl.dismiss(localStorage.getItem('jobType'));
  }

  getSearchMilestoneData(){

    this.mileStoneDetails = [];

// console.log('get userid: ', localStorage.get(''))
    this.searchList.UserId = localStorage.getItem('userId');
    this.searchList.mode = this.transportMode;
    this.searchList.service = this.serviceCode;
    this.searchList.shipmentType = this.shipmentCode;
    this.searchList.jobType = this.VenType;
    
    
    console.log('check one ');
    this.http.POST(Constants.Corvi_Services.GetSearchMilestoneList, this.searchList).then((response)=>{
      console.log('check search milestone data: ', response);
      this.mileStoneDetails = response['Table'];

      console.log('check search milestone list data: ', this.mileStoneDetails);
      // this.mileStoneDetails = response;
    })


    console.log('all the data: ',this.searchList.UserId, '+', this.serviceCode ,'+', this.VenType, '+', this.shipmentCode, '+', this.transportMode);

  }

  onMilestoneSelect(selectedData){
    this.globalService.selectedMilestone = selectedData;
    console.log('********', this.globalService.selectedMilestone.DocumentName);
    // this.navCtrl.push(UpdateJobMilestonePage, {milestone: selecetedData})
    this.navCtrl.remove(this.navCtrl.getActive().index - 0, 1,);
  }


}
