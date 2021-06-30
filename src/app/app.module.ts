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
    EnquiryPageModule
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
