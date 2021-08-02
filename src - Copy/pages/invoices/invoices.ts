/**
 * @author Sachin Semlety
 * @email sachin.semlety@kalelogistics.in
 * @create date 2018-08-14 03:27:55
 * @modify date 2018-08-14 03:27:55
 * @desc [description]
*/
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { HttpServiceProvider } from '../../providers/http-service/http-service';
import { GlobalProvider } from '../../providers/global/global';
import { Constants } from '../../constants';
import { PushNotificationProvider } from '../../providers/push-notification/push-notification';
import { AlertService } from '../../providers/util/alert.service';
import { InvoicesDetails } from './detail/invoices-details';

@IonicPage()
@Component({
  selector: 'page-invoices',
  templateUrl: 'invoices.html',
})
export class InvoicesPage {
  title: String;
  Invoices: Array<any> = [];
  showData: boolean;
  showSearchBar: boolean;
  clonedItems: any;
  tabsDisabled: boolean;
  searchQuery: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpServiceProvider, public globalService: GlobalProvider, public pushNotification: PushNotificationProvider, public actionSheetCtrl: ActionSheetController, public alertService: AlertService) {
    this.title = "Invoices";
    let isTabDisabled = this.navParams.get("tabsDisabled");
    this.tabsDisabled = isTabDisabled == undefined ? false : isTabDisabled;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClosedJobsPage');
  }
  ionViewDidEnter() {
    this.fetchInvoices();
  }


  fetchInvoices() {
    this.Invoices = [];
    this.searchQuery = '';
    this.globalService.get('userDetails')
      .then(
        data => this.fetch(this.globalService.handleJSON(data).Table[0]),
        error => console.error(error)
      );
  }

  fetch(obj) {
    if (!this.isEmpty(obj)) {
      this.http.POST(Constants.Corvi_Services.Invoices.Get_InvoiceList, {
        "UserID": obj.UserId,
        "Password": obj.Password
      }).then((response: any) => {
        // console.log('resp ', response);
        this.Invoices = this.globalService.handleJSON(response).Table;
        this.setClonedArray();
        this.showData = true;
        // console.log('closedJobs : ', this.closedJobs)
      }, (err) => {
        console.log('error Login ', err);

      });
    }
  }

  fetchInvoicesDetails(DetailNo) {
    this.globalService.get('userDetails')
      .then(
        data => this.fetchDetails(this.globalService.handleJSON(data).Table[0], DetailNo),
        error => console.error(error)
      );
  }

  fetchDetails(obj, DetailNo) {
    if (!this.isEmpty(obj)) {
      this.http.POST(Constants.Corvi_Services.InvoicesDetails.Get_Invoice_Details + Constants.Corvi_Services.InvoicesDetails.DetailNo + DetailNo, {
        "UserID": obj.UserId,
        "Password": obj.Password
      }).then((response: any) => {
        this.globalService.routePageWithData(InvoicesDetails, { 'Invoices': this.globalService.handleJSON(response).Table })
      }, (err) => {
        console.log('error Login ', err);

      });
    }
  }

  setClonedArray() {
    this.clonedItems = this.globalService.clone(this.Invoices);
  }

  filterItems(ev: any) {
    this.Invoices = this.clonedItems;
    let val = ev.target.value;

    if (val && val.trim() !== '') {
      this.Invoices = this.Invoices.filter((item) => {
        for (const key in item) {
          if (item.hasOwnProperty(key)) {
            const element = item[key];
            if (String(element).toLowerCase().includes(val.toLowerCase())) {
              return item;
            }
          }
        }
      });
    }
  }

  gotoInvoiceDetails(data) {
    this.fetchInvoicesDetails(data.DetailNo);
  }


  showSearch() {
    this.showSearchBar = true;
  }

  onCancel() {
    this.showSearchBar = false;
  }

  ionViewWillLeave() {
    this.showSearchBar = false;
  }

  // followJob(item) {
  //   console.log('item ', item)
  //   this.alertService.presentActionSheet('Closed Jobs', 'test Message Title', 'test Message Content');
  // }

  viewPDF(item) {
    // let pdfSrc = 'https://devdactic.com/html/5-simple-hacks-LBT.pdf';
    // let url = Constants.CORVI_PDF_URL + item.PDFPath;
    // item.hasOwnProperty('PDFPath') && item.PDFPath != '' && this.globalService.viewPDF(url);

    this.globalService.get('PDFURL').
      then(
        PDFURL => (PDFURL != null && PDFURL != "") ? this.openPDF(PDFURL, item.PDFPath) : this.globalService.showToast("something went wrong opening pdf"),
      ), error => console.error(error), this.globalService.showToast("something went wrong opening pdf");
  }

  openPDF(pdfUrl: string, PDFPath: string) {
    let url = pdfUrl + PDFPath;
    PDFPath != '' && this.globalService.viewPDF(url);
  }

  isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

}
