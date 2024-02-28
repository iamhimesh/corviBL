import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, ToastController } from 'ionic-angular';
import { Constants } from '../../constants';
import { GlobalProvider } from '../../providers/global/global';
import { HttpServiceProvider } from '../../providers/http-service/http-service';
import { ToastService } from '../../providers/util/toast.service';
import { DashboardPage } from '../dashboard/dashboard';
import { PopoverPage } from '../popover/popover';
import { SearchInvoicePage } from '../search-invoice/search-invoice';

export class searchInvoiceList {
  UserId: string; Type: any
}


@IonicPage()
@Component({
  selector: 'page-shipment-invoice',
  templateUrl: 'shipment-invoice.html',
})
export class ShipmentInvoicePage {
  title;
  userId;
  appBuildConfig: any;
  shipmentInvoiceData: any;

  invoiceList: searchInvoiceList;
  responseFormAPI: any = [];

  public toggled: boolean = false;

  closedJobs: Array<any> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public globalService: GlobalProvider, public http: HttpServiceProvider,
    public toastCtrl: ToastController, public toastService: ToastService,
    public popCtrl: PopoverController) {

    this.title = 'Shipment Invoice';
    this.appBuildConfig = this.globalService.appBuildConfig;
    this.userId = localStorage.getItem('userId');

    this.invoiceList = new searchInvoiceList();

    this.shipmentInvoiceList();

    this.toggled = false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShipmentInvoicePage');
  }

  goBack() {
    this.globalService.setRootPage(DashboardPage);
  }

   toggle() {
     console.log('toggle clicked !')
    this.toggled = !this.toggled;
 }

  shipmentInvoiceList() {

    this.invoiceList.UserId = this.userId;
    this.invoiceList.Type = 'Open';

    this.http.POST(Constants.Corvi_Services.InvoiceList, this.invoiceList).then((response) => {

      console.log('response to check shipment invoice list method: ', response);

      if (response['Table'] == '') {
        this.toastService.show('Data not found.', 3000, true, 'top', 'toast-container');
        return;
      } else {

        // this.shipmentInvoiceData = response['Table'];
        if (this.globalService.isCordovaAvailable()) {
          debugger
          this.responseFormAPI = response;
          this.shipmentInvoiceData = JSON.parse(this.responseFormAPI)["Table"];
          if(this.shipmentInvoiceData == ''){
            this.toastService.show('Data not found.', 3000, true, 'top', 'toast-container');
          } //new if
          // this.flag = true;
        } else {
          this.shipmentInvoiceData = response['Table'];
          console.log('check invoices here: ', this.shipmentInvoiceData.length);
        }
      }
      // this.globalService.store('login_resp', response);

    }, (err) => {
      console.log('error Login ', err);
      console.log('response to check service link: ', Constants.Corvi_Services.Login);
    });
  }


  ionViewDidEnter() {
    // this.invoiceList.UserId = this.userId;
    // this.http.POST(Constants.Corvi_Services.InvoiceList, this.invoiceList).then((response) => {
    //   console.log('check invoices here: ', response);
    // })
  }

  filterItems(ev: any) {
    console.log('check ev: ', ev.value);

    this.closedJobs = this.shipmentInvoiceData;
    let val = ev.value;
    if (val == '' || val == undefined) {
      this.shipmentInvoiceList();
    }

    // if (val && val.trim() !== '') {
    //   this.shipmentInvoiceData = this.closedJobs.filter((item) => {
    //     for (const key in item) {
    //       if (item.hasOwnProperty(key)) {
    //         const element = item[key];
    //         if (String(element).toLowerCase().includes(val.toLowerCase())) {

    //           return item;
    //         }
    //       }
    //     }
    //   });
    // }

    if (val && val.trim() != '') {
      this.shipmentInvoiceData = this.closedJobs.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  onCancel(ev) {

    //this.showSearchBar = false;
    //this.OpenJobListShipment();
    ev.target.value = '';
  }

  goToSearchInvoice() {
    this.navCtrl.push(SearchInvoicePage);
  }

  testWorld() {
    console.log('icon clicked !');
  }

  openPopOver(myEvent, data) {
    let popover = this.popCtrl.create(PopoverPage, {popoverData: data});
    popover.present({
      ev: myEvent
    });
  }

}
