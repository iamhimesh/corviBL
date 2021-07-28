import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams, ModalController, ViewController, MenuController, ToastController } from 'ionic-angular';
import { Constants } from '../../constants';

import { GlobalProvider } from '../../providers/global/global';
import { HttpServiceProvider } from '../../providers/http-service/http-service';
import { AlertService } from '../../providers/util/alert.service';
import { ToastService } from '../../providers/util/toast.service';
import { DashboardPage } from '../dashboard/dashboard';



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


  constructor(public navCtrl: NavController, public navParams: NavParams,
    public globalService: GlobalProvider,
    private modalCtrl: ModalController, public viewCtrl: ViewController,
    public nav: NavController,
    public menu: MenuController,
    public toastCtrl: ToastController,

    public http: HttpServiceProvider,
    public alertService: AlertService,
    public toastService: ToastService,
    // public baseURLProvider: BaseURLProvider,
    public fb: FormBuilder
  ) {

    this.title = "Search Milestone";

    this.VenType = 'freight';

    this.UserDetails = this.navParams.get('userDetails');

    // this.appBuildConfig = this.globalService.appBuildConfig;

    // this.UserDetails = this.globalService.get('userDetails');

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

  dismissModal() {
    let data = { 'foo': 'bar' };
    this.viewCtrl.dismiss(data);
  }

  getSearchMilestoneData() {

    // console.log('get userid: ', localStorage.get(''))
    this.searchList.UserId = localStorage.getItem('userId');
    this.searchList.service = this.serviceCode;
    this.searchList.jobType = this.VenType;
    this.searchList.shipmentType = this.shipmentCode;
    this.searchList.mode = this.transportMode;
    console.log('check one ');
    // this.http.POST(Constants.Corvi_Services.GetSearchMilestoneList, this.searchList).then((response)=>{
    //   console.log('check search milestone data: ', response);
    // })


    console.log('all the data: ', this.searchList.UserId, '+', this.serviceCode, '+', this.VenType, '+', this.shipmentCode, '+', this.transportMode);

  }


}
