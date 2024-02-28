import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { Constants } from '../../constants';
import { GlobalProvider } from '../../providers/global/global';
import { HttpServiceProvider } from '../../providers/http-service/http-service';
import { ToastService } from '../../providers/util/toast.service';
import { DashboardPage } from '../dashboard/dashboard';

export class configParamsList{
  UserId: string; BranchCode: string; Mode: string; Service: string; JobType: string; ShipmentStatus: string;
  NoOfRecords: string; Email: string;
}

@IonicPage()
@Component({
  selector: 'page-configure-parameters',
  templateUrl: 'configure-parameters.html',
})
export class ConfigureParametersPage {
  title: string;
  UserDetails: any = [];
  VenType: any;
  userName: any = '';
  emailId: any = '';

  BranchTbl: any = [];
  ModeTbl: any = [];
  ServiceTBl: any = [];
  modes: any = [];
  services: any = [];
  shipments: any = [];
  branchCode: any = '0';
  transportMode: any = '0';
  serviceCode: any = '0';

  configList: configParamsList;



  constructor(public navCtrl: NavController, public navParams: NavParams,
    public globalService: GlobalProvider, public toastService: ToastService, public http: HttpServiceProvider,
    public alertCtrl: AlertController) {
    this.title = 'Configure Parameters';
    this.VenType = '1';

    this.UserDetails = this.globalService.get('userDetails');

    // this.BranchTbl = this.UserDetails[Object.keys(this.UserDetails)[1]]["Table4"];
    // this.ModeTbl = this.UserDetails[Object.keys(this.UserDetails)[1]]["Table3"];
    // this.ServiceTBl = this.UserDetails[Object.keys(this.UserDetails)[1]]["Table3"];

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

    this.configList = new configParamsList();


  }

  ngOnInit(){
    this.userName = this.globalService.defaultUsername;
    this.emailId = this.globalService.defaultEmailId;

    this.branchCode = this.globalService.globalDefaultBranchCode;

    if(typeof (this.globalService.defaultMode) != 'undefined'){
      this.transportMode = this.globalService.defaultMode;
    }
    if(typeof (this.globalService.defaultService) != 'undefined'){
      this.serviceCode = this.globalService.defaultService;
    }

    if(typeof (this.globalService.defaultMode) == 'undefined'){
      this.transportMode = 1;
    }
    if(typeof (this.globalService.defaultService) == 'undefined'){
      this.serviceCode = 1;
    }
    
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfigureParametersPage');
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

  backToDashBoard() {
    this.globalService.setRootPage(DashboardPage);
  }

  saveConfigSettings(){
    if (this.branchCode == '0' || this.transportMode == '0' || this.serviceCode == '0' || this.emailId == '') {
      this.toastService.show('Please select the required fields.', 3000, true, 'top', 'toast-container')
      return;
    }
    this.configList.UserId = localStorage.getItem('userId');
    this.configList.BranchCode = this.branchCode;
    this.configList.Mode = this.transportMode;
    this.configList.Service = this.serviceCode;
    this.configList.ShipmentStatus = '';
    this.configList.NoOfRecords = '';
    this.configList.JobType = this.VenType;
    this.configList.Email = this.emailId;

    this.http.POST(Constants.Corvi_Services.UserConfigurationSave, this.configList).then((response: any) => {
      console.log('check config response here: ',response);
      // if(response == 'Success'){
      //   this.showAlert('Success','Configurations have been saved');
      // }
      if(response.includes('Success')){
        // console.log('message is from this if block');
        this.showAlert('Success','Configurations have been saved');
      } else {
        this.showAlert('Failed','Configurations could not be saved');
        return;
      }
    })
  }

}
