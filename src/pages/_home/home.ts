/**
 * @author Sachin Semlety
 * @email sachin.semlety@kalelogistics.in
 * @create date 2018-08-10 11:03:35
 * @modify date 2018-08-10 11:03:35
 * @desc [description]
*/
import { Component, ViewChild } from '@angular/core';
import {
  IonicPage, NavController, PopoverController, MenuController,
  Slides,
  Events
} from 'ionic-angular';
import chartJs from 'chart.js';
import { GlobalProvider } from '../../providers/global/global';
import { Constants } from '../../constants';
import { HttpServiceProvider } from '../../providers/http-service/http-service';
import { User } from '../login/login';
import { QuotationPage } from '../quotation/quotation';
import { OpenJobsPage } from '../open-jobs/open-jobs';
import { ClosedJobsPage } from '../closed-jobs/closed-jobs';
import { InvoicesPage } from '../invoices/invoices';
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  title: any;
  drawerOptions: any;
  @ViewChild('pieCanvas') pieCanvas;
  @ViewChild('barCanvas') barCanvas;
  pieChart: any;
  barChart: any;
  user: User;
  showView: boolean;
  // @ViewChild(Slides) slides: Slides;

  slidesArray = Constants.SlidesJSONArray;
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
  @ViewChild('mySlider') slider: Slides;
  selectedSegment: string;
  slides: any;
  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController, public menu: MenuController, public globalService: GlobalProvider, public http: HttpServiceProvider, public event: Events) {
    this.title = "Dasheeboard";
    this.selectedSegment = "Enquiry";
    this.drawerOptions = {
      handleHeight: 50,
      thresholdFromBottom: 200,
      thresholdFromTop: 200,
      bounceBack: true
    };
    this.menu.swipeEnable(true);
    this.user = new User();
    this.initSlideTabs();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      // this.dashboardPageSetup();
    });
  }

  initSlideTabs() {
    this.slides = [
      {
        id: "Enquiry",
      },
      {
        id: "Quotation",
      },
      {
        id: "Invoice",
      },
      {
        id: "Jobs",
      },
      {
        id: "Milestones",
      }
    ];
  }

  dashboardPageSetup() {
    this.globalService.get('userDetails').then((userDetails) => {
      this.setUpDashboardCount(userDetails);
    })
  }

  setUpDashboardCount(data, refresher?) {
    let DashboardCount = this.globalService.handleJSON(data).Table1[0];
    this.slidesArray[0].count = DashboardCount.QuotationCount;
    this.slidesArray[1].count = DashboardCount.OpenJobCount;
    this.slidesArray[2].count = DashboardCount.CloseJobCount;
    this.slidesArray[3].count = DashboardCount.InvoiceCount;
    this.pieChart = this.getPieChart(DashboardCount);
    this.barChart = this.getBarChart(DashboardCount);
    this.showView = true;
    refresher != undefined && refresher.complete();
  }

  getPieChart(DashboardCount) {
    Constants.PIE_CHART_DATA.datasets[0].data = [DashboardCount.QuotationCount, DashboardCount.OpenJobCount, DashboardCount.CloseJobCount, DashboardCount.InvoiceCount]
    return this.getChart(this.pieCanvas.nativeElement, 'pie', Constants.PIE_CHART_DATA);
  }

  getBarChart(DashboardCount) {
    Constants.BAR_CHART_DATA.datasets[0].data = [DashboardCount.QuotationCount, DashboardCount.OpenJobCount, DashboardCount.CloseJobCount, DashboardCount.InvoiceCount]
    return this.getChart(this.barCanvas.nativeElement, 'bar', Constants.BAR_CHART_DATA, Constants.BAR_CHART_OPTIONS);
  }


  getChart(context, chartType, data, options?) {
    return new chartJs(context, {
      data,
      options,
      type: chartType,
    });
  }


  viewDetails(page: any) {
    this.globalService.routePageWithData(page, { 'tabsDisabled': true })
  }



  setDetails(UUID, refresher) {
    this.globalService.get('userName')
      .then(
        userId => this.user.UserID = userId,
        error => console.error(error)
      );
    this.globalService.get('password')
      .then(
        pwd => this.user.Password = pwd,
        error => console.error(error)
      );
    this.user.UUID = UUID;
    this.http.POST(Constants.Corvi_Services.UserDetails, this.user).then((userDetailsResp) => {
      this.globalService.publishEventwithData('app:userDetails', userDetailsResp);
      this.setUpDashboardCount(userDetailsResp, refresher)
    }, (err) => {
      refresher != undefined && refresher.complete();
      console.log('error Login ', err);
    });
  }

  doRefresh(refresher) {
    this.fetchDashboardDetails(refresher)
  }

  fetchDashboardDetails(refresher) {
    this.globalService.get('playerId')
      .then(
        UUID => this.setDetails(UUID, refresher),
        error => console.error(error)
      );
  }

  onSegmentChanged(segmentButton) {
    // console.log("Segment changed to", segmentButton.value);
    const selectedIndex = this.slides.findIndex((slide) => {
      return slide.id === segmentButton.value;
    });
    this.slider.slideTo(selectedIndex);
  }

  onSlideChanged(slider) {
    // console.log('Slide changed');
    const currentSlide = this.slides[slider.getActiveIndex()];
    if (currentSlide != undefined) {
      this.selectedSegment = currentSlide.id;
    }
  }


}
