/**
 * @author Sachin Semlety
 * @email sachin.semlety@kalelogistics.in
 * @create date 2018-08-10 02:36:14
 * @modify date 2018-08-10 02:36:14
 * @desc [description]
*/
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalProvider } from '../../providers/global/global';
import { Constants } from '../../constants';
import { HttpServiceProvider } from '../../providers/http-service/http-service';
import { QuotationDetailPage } from './quotation-detail/quotation-detail';

@IonicPage()
@Component({
  selector: 'page-quotation',
  templateUrl: 'quotation.html',
})
export class QuotationPage {
  title: String;
  quotationList: Array<any> = [];
  showData: boolean;
  showSearchBar: boolean;
  clonedItems: any;
  tabsDisabled: boolean;
  searchQuery: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpServiceProvider, public globalService: GlobalProvider) {
    this.title = "Quotation";
    let isTabDisabled = this.navParams.get("tabsDisabled");
    this.tabsDisabled = isTabDisabled == undefined ? false : isTabDisabled;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClosedJobsPage');
  }
  ionViewDidEnter() {
    this.fetchQuotation();
  }


  fetchQuotation() {
    this.quotationList = [];
    this.searchQuery = '';
    this.globalService.get('userDetails')
      .then(
        data => this.fetch(this.globalService.handleJSON(data).Table[0]),
        error => console.error(error)
      );
  }

  fetch(obj) {
    if (!this.isEmpty(obj)) {
      this.http.POST(Constants.Corvi_Services.Quotation.Get_QuatationList, {
        "UserID": obj.UserId,
        "Password": obj.Password
      }).then((response: any) => {
        console.log('resp ', response);
        this.quotationList = this.globalService.handleJSON(response).Table;
        this.setClonedArray();
        this.showData = true;
        // console.log('closedJobs : ', this.closedJobs)
      }, (err) => {
        console.log('error Login ', err);

      });
    }
  }

  fetchQuotationDetails(QuatationId) {
    this.globalService.get('userDetails')
      .then(
        data => this.fetchDetails(this.globalService.handleJSON(data).Table[0], QuatationId),
        error => console.error(error)
      );

  }

  fetchDetails(obj, QuatationId) {
    if (!this.isEmpty(obj)) {
      this.http.POST(Constants.Corvi_Services.Quotation.Get_Quatation_Details + Constants.Corvi_Services.Quotation.QuatationId + QuatationId, {
        "UserID": obj.UserId,
        "Password": obj.Password
      }).then((response: any) => {
        this.globalService.routePageWithData(QuotationDetailPage, { 'quot_details': this.globalService.handleJSON(response).Table })
      }, (err) => {
        console.log('error Login ', err);
      });
    }
  }


  setClonedArray() {
    this.clonedItems = this.globalService.clone(this.quotationList);
  }

  filterItems(ev: any) {
    this.quotationList = this.clonedItems;
    let val = ev.target.value;

    if (val && val.trim() !== '') {
      this.quotationList = this.quotationList.filter((item) => {
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



  goToQuotationDetails(data) {
    this.fetchQuotationDetails(data.QuotationId);
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

  isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }
}
