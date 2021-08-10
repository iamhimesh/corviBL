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

    this.BranchTbl = this.UserDetails[Object.keys(this.UserDetails)[1]]["Table4"];
    this.ModeTbl = this.UserDetails[Object.keys(this.UserDetails)[1]]["Table3"];
    this.ServiceTBl = this.UserDetails[Object.keys(this.UserDetails)[1]]["Table3"];

    this.modes = this.ModeTbl.filter(a => a.Identifier == "TransportMode");
    this.services = this.ModeTbl.filter(a => a.Identifier == "Service");
    this.shipments = this.ModeTbl.filter(a => a.Identifier == "ShipmentType");

    this.configList = new configParamsList();


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
    this.configList.UserId = localStorage.getItem('userId');
    this.configList.BranchCode = this.branchCode;
    this.configList.Mode = this.transportMode;
    this.configList.Service = this.serviceCode;
    this.configList.ShipmentStatus = '';
    this.configList.NoOfRecords = '';
    this.configList.JobType = this.VenType;
    this.configList.Email = this.emailId;

    this.http.POST(Constants.Corvi_Services.UserConfigurationSave, this.configList).then((response) => {
      console.log('check config response here: ',response);
      if(response == 'Success'){
        this.showAlert('Success','Configurations have been saved');
      } else {
        this.showAlert('Failed','Configurations could not be saved');
        return;
      }
    })
  }

}
