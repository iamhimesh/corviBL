
/**
 * @author Sachin Semlety
 * @email sachin.semlety@kalelogistics.in
 * @create date 2018-08-10 11:03:03
 * @modify date 2018-08-10 11:03:03
 * @desc [description]
*/
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { CorviApp } from './app.component';
import { HttpServiceProvider } from '../providers/http-service/http-service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { GlobalProvider } from '../providers/global/global';
import { AppState } from './app.global';
import { HomePageModule } from '../pages/_home/home.module';
import { LoginPageModule } from '../pages/login/login.module';
import { RegisterPageModule } from '../pages/register/register.module';
import { ComponentsModule } from '../components/components.module';
import { QuotationPageModule } from '../pages/quotation/quotation.module';
import { NetworkProvider } from '../providers/network/network';
import { Network } from '@ionic-native/network';
import { OpenJobsPageModule } from '../pages/open-jobs/open-jobs.module';
import { ClosedJobsPageModule } from '../pages/closed-jobs/closed-jobs.module';
import { InvoicesPageModule } from '../pages/invoices/invoices.module';
import { File } from '@ionic-native/file';
import { FileTransfer } from '@ionic-native/file-transfer';
import { FileOpener } from '@ionic-native/file-opener';
import { OneSignal } from '@ionic-native/onesignal';
import { PushNotificationProvider } from '../providers/push-notification/push-notification';
import { TabsPageModule } from '../pages/tabs/tabs.module';
import { NativeStorage } from '@ionic-native/native-storage';
import { HTTP } from '@ionic-native/http';
import { SpinnerDialog } from '@ionic-native/spinner-dialog';
import { BaseURLProvider } from '../providers/baseUrlGenerator/baseurlgenerator';
import { EnquiryPageModule } from '../pages/enquiry/enquiry.module';
import { FormsModule } from '@angular/forms';

import { DashboardPageModule } from '../pages/dashboard/dashboard.module';
import { WelcomeuserPageModule } from '../pages/welcomeuser/welcomeuser.module';
import { NewSalesActivityPageModule } from '../pages/new-sales-activity/new-sales-activity.module';
import { FindSalesActivityPageModule } from '../pages/find-sales-activity/find-sales-activity.module';
import { NewSalesLeadPageModule } from '../pages/new-sales-lead/new-sales-lead.module';
import { FindLocationPageModule } from '../pages/find-location/find-location.module';
import { UpdateJobMilestonePageModule } from '../pages/update-job-milestone/update-job-milestone.module';
import { SearchMilestonePageModule } from './../pages/search-milestone/search-milestone.module';
import { SearchJobsPageModule } from './../pages/search-jobs/search-jobs.module';

import { ResetPasswordPageModule } from './../pages/reset-password/reset-password.module';
import { SearchJobResultsPageModule } from '../pages/search-job-results/search-job-results.module';
import { ConfigureParametersPageModule } from '../pages/configure-parameters/configure-parameters.module';
import { CustomerDashboardPageModule } from '../pages/customer-dashboard/customer-dashboard.module';
import { ShipmentStatusPageModule } from '../pages/shipment-status/shipment-status.module';
import { JobStatusPageModule } from '../pages/job-status/job-status.module';
import { CustomerJobSearchPage } from '../pages/customer-job-search/customer-job-search';
import { CustomerJobSearchPageModule } from '../pages/customer-job-search/customer-job-search.module';
import { SearchPortAirportPageModule } from '../pages/search-port-airport/search-port-airport.module';
import { ReportingUserActivityPageModule } from '../pages/reporting-user-activity/reporting-user-activity.module';
import { SearchSalesActivityPageModule } from '../pages/search-sales-activity/search-sales-activity.module';
import { ShipmentInvoicePageModule } from '../pages/shipment-invoice/shipment-invoice.module';
import { PopoverPageModule } from '../pages/popover/popover.module';
import { SortPopoverPageModule } from '../pages/sort-popover/sort-popover.module';
import { CustomerSettingsPageModule } from '../pages/customer-settings/customer-settings.module';
import { SearchInvoicePageModule } from '../pages/search-invoice/search-invoice.module';
import { SearchInvoiceResultsPageModule } from '../pages/search-invoice-results/search-invoice-results.module';
import { FindSalesActivityPage } from '../pages/find-sales-activity/find-sales-activity';
import { CustomerSettingsPage } from '../pages/customer-settings/customer-settings';

@NgModule({
  declarations: [
    CorviApp
  ],
  imports: [
    HttpClientModule,
    HttpModule,

    BrowserModule,
    IonicModule.forRoot(CorviApp, {
      // platform: 'ios',
      // Tabs config
      tabsHideOnSubPages: true,
      //  pageTransition: 'ios-transition'
      // pageTransition: 'ios-transition'
    }),
    HomePageModule,
    LoginPageModule,
    RegisterPageModule,
    ComponentsModule,
    QuotationPageModule,
    ClosedJobsPageModule,
    OpenJobsPageModule,
    InvoicesPageModule,
    TabsPageModule,
    EnquiryPageModule, DashboardPageModule,
    WelcomeuserPageModule, NewSalesActivityPageModule, FindSalesActivityPageModule,
    NewSalesLeadPageModule, FindLocationPageModule, UpdateJobMilestonePageModule,
    ResetPasswordPageModule,
    SearchMilestonePageModule,
    FormsModule,
    SearchJobsPageModule,
    SearchJobResultsPageModule,
    ConfigureParametersPageModule, CustomerDashboardPageModule, ShipmentStatusPageModule, JobStatusPageModule,
    CustomerJobSearchPageModule, SearchPortAirportPageModule, ReportingUserActivityPageModule, SearchSalesActivityPageModule,
    ShipmentInvoicePageModule, PopoverPageModule, SortPopoverPageModule,
    CustomerSettingsPageModule, SearchInvoicePageModule, SearchInvoiceResultsPageModule,


  ],
  bootstrap: [IonicApp],
  entryComponents: [
    CorviApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    HttpServiceProvider,
    GlobalProvider,
    AppState,
    Network,
    NetworkProvider,
    File,
    FileTransfer,
    FileOpener,
    OneSignal,
    PushNotificationProvider,
    NativeStorage,
    HTTP,
    SpinnerDialog,
    BaseURLProvider
  ]
})
export class AppModule { }
