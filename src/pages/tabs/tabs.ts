/**
 * @author Sachin Semlety
 * @email sachin.semlety@kalelogistics.in
 * @create date 2018-08-27 02:51:50
 * @modify date 2018-08-27 02:51:50
 * @desc [description]
*/
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { HomePage } from '../_home/home';
import { GlobalProvider } from '../../providers/global/global';
import { HttpServiceProvider } from '../../providers/http-service/http-service';
import { QuotationPage } from '../quotation/quotation';
import { InvoicesPage } from '../invoices/invoices';
import { OpenJobsPage } from '../open-jobs/open-jobs';
import { ClosedJobsPage } from '../closed-jobs/closed-jobs';

@IonicPage()

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  HomePage = HomePage;
  QuotationPage = QuotationPage;
  OpenJobsPage = OpenJobsPage;
  ClosedJobsPage = ClosedJobsPage;
  InvoicesPage = InvoicesPage;
  tabsCount = {
    QuotationCount: 0,
    OpenJobsCount: 0,
    ClosedJobsCount: 0,
    InvoicesCount: 0,
    EnquiryCount: 0
  };
  showTabs: boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams, public globalService: GlobalProvider, public event: Events, public http: HttpServiceProvider) {
    console.log('navparams : ', this.tabsCount);
  }

  ionViewDidEnter() {
    // this.getTabsCount();
  }

  ionViewDidLoad() {
    this.setTabsCount();
  }

  selectTab(page) {
    this.globalService.setRootPage(page);
  }

  setTabsCount() {
    this.globalService.get('userDetails').then((userDetails) => {
      let DashboardCount = this.globalService.handleJSON(userDetails).Table1[0];
      this.tabsCount.QuotationCount = DashboardCount.QuotationCount;
      this.tabsCount.OpenJobsCount = DashboardCount.OpenJobCount;
      this.tabsCount.ClosedJobsCount = DashboardCount.CloseJobCount;
      this.tabsCount.InvoicesCount = DashboardCount.InvoiceCount;
      this.showTabs = true;
    })
  }




}
