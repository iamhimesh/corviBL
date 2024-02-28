import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams, ViewController } from 'ionic-angular';
import { Constants } from '../../constants';
import { GlobalProvider } from '../../providers/global/global';
import { HttpServiceProvider } from '../../providers/http-service/http-service';
import { SearchInvoiceResultsPage } from '../search-invoice-results/search-invoice-results';
import { SearchPortAirportPage } from './../search-port-airport/search-port-airport';

export class searchInvoiceList {
  UserId: string; Origin: string; JobType: any; InvoiceNo: string;
  BranchCode: string; JobNo: string; MBLNo: string; HBLNo: string; SBNo: string;
  Mode: string; Service: string; Destination: string; SBDate: string;

}

@IonicPage()
@Component({
  selector: 'page-search-invoice',
  templateUrl: 'search-invoice.html',
})
export class SearchInvoicePage {
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
  transportMode: any = '';
  serviceCode: any = '';
  shipmentCode: any = '0';

  VenType: any;

  jobNumber: any = '';
  invoiceNumber: any = '';
  mawbNumber: any = '';
  hawbNumber: any = '';
  BeNo: any = '';
  BeDate: any = '';
  origin: any = '';
  destination: any = '';

  mawbLBL;
  hawbLBL;
  beSbLBL;
  sbDateBeDateLBL;
  modalDismissData: string;

  fetchedOrigin;
  fetchedDestination;

  fetchedData;

  searchList: searchInvoiceList;

  originFromModal: any;
  destFromModal: any;
  responseFormAPI: any = [];


  constructor(public navCtrl: NavController, public navParams: NavParams,
    public globalService: GlobalProvider, public modalCtrl: ModalController,
    public http: HttpServiceProvider,public viewCtrl: ViewController) {
    this.title = "Search Invoice";
    this.VenType = '1';
    this.appBuildConfig = this.globalService.appBuildConfig;

    this.UserDetails = this.globalService.get('userDetails');

    // this.BranchTbl = this.UserDetails[Object.keys(this.UserDetails)[1]]["Table4"];
    // this.ModeTbl = this.UserDetails[Object.keys(this.UserDetails)[1]]["Table3"];
    // this.ServiceTBl = this.UserDetails[Object.keys(this.UserDetails)[1]]["Table3"];
    // this.ShipmentTbl = this.UserDetails[Object.keys(this.UserDetails)[1]]["Table3"];

    // this.modes = this.ModeTbl.filter(a => a.Identifier == "TransportMode");
    // this.services = this.ModeTbl.filter(a => a.Identifier == "Service");
    // this.shipments = this.ModeTbl.filter(a => a.Identifier == "ShipmentType");

    if (this.globalService.isCordovaAvailable()) {

      this.modes = JSON.parse(localStorage.getItem('TransportMode'));
      this.services = JSON.parse(localStorage.getItem('ServiceType'));
      this.shipments = JSON.parse(localStorage.getItem('ShipmentType'));

      this.BranchTbl = JSON.parse(localStorage.getItem('BranchTable'));

    } else {


      this.modes = JSON.parse(localStorage.getItem('TransportMode'));
      this.services = JSON.parse(localStorage.getItem('ServiceType'));
      this.shipments = JSON.parse(localStorage.getItem('ShipmentType'));

      this.BranchTbl = JSON.parse(localStorage.getItem('BranchTable'));


    }

    this.searchList = new searchInvoiceList();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchInvoicePage');
    this.transportMode == '';
  }
  dismissModal() {
    let data = { 'foo': 'bar' };
    this.viewCtrl.dismiss(data);
  }
  // ionViewWillEnter(){
  //   console.log('ion view will enter origin here: ', this.globalService.selectedOrigin);
  //   if(this.globalService.selectedOrigin != ''){
  //     this.origin = this.globalService.selectedOrigin.Locationtext;
  //   } else if(this.globalService.selectedOrigin == '') {
  //     this.origin = '';
  //   }
  //   if(this.globalService.selectedDest != ''){
  //     this.destination = this.globalService.selectedDest.Locationtext;
  //   } else if(this.globalService.selectedDest == '') {
  //     this.destination = '';
  //   }

  //   // console.log('data from modal: ', this.dataFromModal);
  // }

  // ionViewDidEnter(){
  //   console.log('check origin here: ', this.globalService.selectedOrigin);
  //   if(this.globalService.selectedOrigin != ''){
  //     this.origin = this.globalService.selectedOrigin.Locationtext;
  //   } else if(this.globalService.selectedOrigin == '') {
  //     this.origin = '';
  //   }
  //   if(this.globalService.selectedDest != ''){
  //     this.destination = this.globalService.selectedDest.Locationtext;
  //   } else if(this.globalService.selectedDest == '') {
  //     this.destination = '';
  //   }
  //   // this.destination = this.globalService.selectedDest;

  //   console.log('selected origin: ', this.origin);

  // }

  ionViewDidLeave() {
    this.globalService.selectedOrigin = '';
    this.globalService.selectedDest = '';
  }

  onModeChange(event) {
    const value = event.target.value;

    if (value == '1') {
      this.mawbLBL = 'MAWB/MBL No.';
      this.hawbLBL = 'HAWB/HBL No.';
      this.beSbLBL = 'BE/SB No.';
      this.sbDateBeDateLBL = 'BE/SB Date';
    } else if (value == '2') {
      this.mawbLBL = 'MAWB/MBL No.';
      this.hawbLBL = 'HAWB/HBL No.';
      this.beSbLBL = 'BE/SB No.';
      this.sbDateBeDateLBL = 'BE/SB Date';
    }
  }

  openOriginModal() {
    const originModal = this.modalCtrl.create(SearchPortAirportPage, { portType: '0' });
    originModal.onDidDismiss(data => {
      // this.modalDismissData = JSON.stringify(data);
      // this.originFromModal = data;
      // console.log('origin ka data: ', data.foo.Locationname);
      // this.origin = data.foo.Locationname

      if (this.globalService.selectedOrigin != '') {
        this.origin = this.globalService.handleJSON(data).Locationname;

      }

    })
    originModal.present();
    localStorage.setItem('Mode', this.transportMode);
  }

  openDestinationModal() {
    const destinationModal = this.modalCtrl.create(SearchPortAirportPage, { portType: '1' });
    destinationModal.onDidDismiss(data => {
      // this.modalDismissData = JSON.stringify(data);
      // this.destFromModal = data;
      // console.log('dest ka data: ', data.foo.Locationname);
      // this.destination = data.foo.Locationname;
      if (this.globalService.selectedOrigin != '') {
        this.destination = this.globalService.handleJSON(data).Locationname;

      }
    })
    destinationModal.present();
    localStorage.setItem('Mode', this.transportMode);
  }

  searchInvoices() {
    // console.log('check origin here: ', this.globalService.selectedOrigin);
    // if(this.globalService.selectedOrigin != ''){
    //   this.origin = this.globalService.selectedOrigin.Locationtext;
    // } else if(this.globalService.selectedOrigin == '') {
    //   this.origin = '';
    // }
    // if(this.globalService.selectedDest != ''){
    //   this.destination = this.globalService.selectedDest.Locationtext;
    // } else if(this.globalService.selectedDest == '') {
    //   this.destination = '';
    // }
    var conDate = this.BeDate.split("-").reverse().join("-");
    this.searchList.UserId = localStorage.getItem('userId'); //
    this.searchList.BranchCode = this.branchCode; //
    this.searchList.JobType = this.VenType;   //
    this.searchList.Mode = this.transportMode;
    this.searchList.Service = this.serviceCode;
    this.searchList.MBLNo = this.mawbNumber; //
    this.searchList.HBLNo = this.hawbNumber; //
    this.searchList.JobNo = this.jobNumber; //
    this.searchList.SBNo = this.BeNo; //
    this.searchList.Destination = this.destination;
    this.searchList.Origin = this.origin;
    this.searchList.InvoiceNo = this.invoiceNumber;
    this.searchList.SBDate = conDate;

    this.http.POST(Constants.Corvi_Services.GetSearchInvoiceList, this.searchList).then((response) => {
      console.log('check response for invoice list: ', response);
      if (response != '') {

        if (this.globalService.isCordovaAvailable()) {

          this.responseFormAPI = response;
          let stageOne = JSON.parse(this.responseFormAPI)["Table"];
          this.navCtrl.push(SearchInvoiceResultsPage, { invoiceResults: stageOne });
          // this.flag = true;
        } else {
          let stageOne = response['Table'];
          this.navCtrl.push(SearchInvoiceResultsPage, { invoiceResults: stageOne });

        }
        // let stageOne = response['Table'];
        // this.navCtrl.push(SearchInvoiceResultsPage, { invoiceResults: stageOne });
      }
    })

  }

  ngOnInit() {
    this.branchCode = this.globalService.globalDefaultBranchCode;
    this.transportMode = '';
    this.mawbLBL = 'MAWB/MBL No.';
    this.hawbLBL = 'HAWB/HBL No.';
    this.beSbLBL = 'BE/SB No.';
    this.sbDateBeDateLBL = 'BE/SB Date';
    this.serviceCode = ''
  }
  goBack() {
    this.navCtrl.pop();
  }

}
