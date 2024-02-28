import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
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
  selector: 'page-customer-settings',
  templateUrl: 'customer-settings.html',
})
export class CustomerSettingsPage {
  title: string;
  UserDetails: any = [];
  VenType: any;
  shipmentStatus: any;
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
  noOfRecords: any = '';

  configList: configParamsList;



  constructor(public navCtrl: NavController, public navParams: NavParams, public globalService: GlobalProvider,
              public toastCtrl: ToastController, public alertCtrl: AlertController, public http: HttpServiceProvider,
              public toastService: ToastService) {

                this.title = 'Configure Parameters';
                this.VenType = '1';
                this.shipmentStatus = '1';

                this.UserDetails = this.globalService.get('userDetails');

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
    // this.transportMode = '1';
    // this.serviceCode = '2';

    this.branchCode = this.globalService.globalDefaultBranchCode;

    this.noOfRecords = this.globalService.defaultNoofRecords;

    if(typeof (this.globalService.defaultMode) != 'undefined'){
      this.transportMode = this.globalService.defaultMode;
    }
    if(typeof (this.globalService.defaultService) != 'undefined'){
      this.serviceCode = this.globalService.defaultService;
    }

    if(typeof (this.globalService.defaultMode) == 'undefined'){
      this.transportMode = '1';
    }
    if(typeof (this.globalService.defaultService) == 'undefined'){
      this.serviceCode = '2';
    }
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerSettingsPage');
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

    if(this.noOfRecords.length > 2){
      this.toastService.show('No of records length cannot exceed 99', 3000, true, 'top', 'toast-container')
      return;
    }
    if(this.noOfRecords.includes('-') || this.noOfRecords.includes('.') || this.noOfRecords.includes('+') 
        || this.noOfRecords.includes('#') || this.noOfRecords.includes('/') || this.noOfRecords.includes('(') || this.noOfRecords.includes(')') 
        || this.noOfRecords.includes('*') || this.noOfRecords.includes(',') || this.noOfRecords.includes(';') || this.noOfRecords.includes('N') || this.noOfRecords.includes(' ')){
      this.toastService.show('No of records cannot contain special characters', 3000, true, 'top', 'toast-container')
      return;
    }
    this.configList.UserId = localStorage.getItem('userId');
    this.configList.BranchCode = this.branchCode;
    this.configList.Mode = this.transportMode;
    this.configList.Service = this.serviceCode;
    this.configList.ShipmentStatus = this.shipmentStatus;
    this.configList.NoOfRecords = this.noOfRecords;
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

  numberOnlyValidation(event: any) {
    const pattern = /[0-9.,]/;
    let inputChar = String.fromCharCode(event.charCode);

    if (!pattern.test(inputChar)) {
      // invalid character, prevent input
      event.preventDefault();
    }
  }

}
