import { SearchMilestonePage } from './../search-milestone/search-milestone';
import { ToastService } from './../../providers/util/toast.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { GlobalProvider } from '../../providers/global/global';
import { DashboardPage } from '../dashboard/dashboard';

export class searchDataList {
 branch:string; service: string; shipmentType: string; mode: string; jobType: any;
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


  constructor(public navCtrl: NavController, public navParams: NavParams
    ,public globalService: GlobalProvider, public toastService: ToastService,
    public modalCtrl: ModalController) {
    this.title = "Update Job Milestone";
    this.VenType = 'freight';
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

  //   console.log(this.ModeTbl.filter(function(item){
  //     this.modes = item.Identifier == "TransportMode";         
  // }));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdateJobMilestonePage');
    this.VenType = 'freight';
  }

  ionViewDidEnter(){
    this.VenType = 'freight';
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

  openModal() {

    if (this.branchCode == '0') {
      this.toastService.show('Please select branch.', 3000, true, 'top', 'toast-container')
      return;
    }
    const searchMilestone = this.modalCtrl.create(SearchMilestonePage, { searchDetails: this.searchList });
    searchMilestone.onDidDismiss(data => {
      console.log(data);
      this.modalDismissData = JSON.stringify(data);
    });
    searchMilestone.present();
    this.globalService.store('branchCode', this.branchCode);
  }


}
