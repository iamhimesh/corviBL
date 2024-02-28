/**
 * @author Sachin Semlety
 * @email sachin.semlety@kalelogistics.in
 * @create date 2018-08-10 11:02:49
 * @modify date 2018-08-10 11:02:49
 * @desc [description]
*/
import { AppState } from './app.global';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController, App, Events, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Subject } from 'rxjs/Subject';
import { LoginPage } from '../pages/login/login';
// import { HomePage } from '../pages/_home/home';
import { GlobalProvider } from '../providers/global/global';
import { Constants } from '../constants';
import { NetworkProvider } from '../providers/network/network';
import { PushNotificationProvider } from '../providers/push-notification/push-notification';
import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class CorviApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;
  activePage = new Subject();
  UserName: String;
  pages: Array<{ title: string, component: any, active: boolean, icon: string }>;
  rightMenuItems: Array<{ icon: string, active: boolean }>;
  state: any;
  placeholder = 'assets/img/person.png';
  chosenPicture: any;
  hidePopups: boolean;
  appVersion: String;

  profileType;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashscreen: SplashScreen,
    public global: AppState,
    public menuCtrl: MenuController,
    public app: App,
    public globalService: GlobalProvider,
    public networkProvider: NetworkProvider,
    public events: Events,
    public pushNotification: PushNotificationProvider,
    public alertCtrl: AlertController
  ) {
    this.events.subscribe('user:created', (profile,time) =>{
      console.log('Welcome', profile, 'at', time);
      this.profileType = profile
      if(this.profileType == 1){
        // this.pages = Constants.MENU_PAGES_ARRAY;
        this.pages = this.globalService.menuItems;
      }
      if(this.profileType == 2){
        // this.pages = Constants.MENU_PAGES_ARRAY_CUST;
        this.pages = this.globalService.menuItems;
      }
      if(this.profileType == 3){
        this.pages = Constants.MENU_PAGES_ARRAY_MANAGER;
      }
    })
    // App Initialisation
    this.initializeApp();
    console.log('from app component: ',localStorage.getItem('profileType'));
    // Stores JSON Array of Pages for Init.
    if(this.profileType == 1){
      // this.pages = Constants.MENU_PAGES_ARRAY;
      this.pages = this.globalService.menuItems;
    }
    if(this.profileType == 2){
      this.pages = Constants.MENU_PAGES_ARRAY_CUST;
    }

    this.activePage.subscribe((selectedPage: any) => {
      this.pages.map(page => {
        page.active = page.title === selectedPage.title;
      });
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.global.set('theme', '');
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.appVersion = this.globalService.appConfig.version;
      this.statusBar.overlaysWebView(false);
      this.statusBar.backgroundColorByHexString('#104b79');
      this.splashscreen.hide();
      this.menuCtrl.enable(false, 'right');
      //Menu Changes based on the platform
      this.platform.is('android') ? this.changeMenu(Constants.MENU.MATERIAL) : this.platform.is('ios') ? this.changeMenu(Constants.MENU.MATERIAL) : this.changeMenu(Constants.MENU.MATERIAL);
      this.menuCtrl.swipeEnable(false);
      this.networkEventInit();                                            // Network Initialistaion
      this.handleLogout();                                                // Event to be received after Logout
      this.recieveUserDetailsEvent();                                     // Event to be received userdetails
      this.setSessionExpired();                                           // To Expire the current session
      this.globalService.isCordovaAvailable() &&
        this.pushNotification.Init();                                     // Push Notification Initialisation
    });

    // handle back button event
    // this.handleBackEvent();
    this.handleBackEvent2();
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.app.getRootNavs()[0].setRoot(page.component, { 'tabsDisabled': true });
    this.activePage.next(page);
  }


  changeMenu(menu) {
    // Disables all other sidemenus
    Object.keys(Constants.MENU).map(k => this.menuCtrl.enable(false, Constants.MENU[k]));

    // Enables the selected menu
    this.menuCtrl.enable(true, menu);
    // this.menuCtrl.open(menu);
  }

  handleBackEvent() {
    this.platform.registerBackButtonAction(() => {
      let activeNav = this.app.getActiveNavs()[0];
      //console.log("Back button action called");

      let activePage = activeNav.getActive().instance;

      let whitelistPages = ["", LoginPage, TabsPage];

      // if current page is not in whitelistPages
      // then back to home or login page first
      (whitelistPages.indexOf(activePage.constructor) > 0) ? this.globalService.ExitApp() : this.app.goBack();

    }, 0);
  }

  handleBackEvent2(){
    this.platform.registerBackButtonAction(() => {
      // Catches the active view
      let nav = this.app.getActiveNavs()[0];
      let activeView = nav.getActive();                
      // Checks if can go back before show up the alert
      if(activeView.name === 'HomePage') {
          if (nav.canGoBack()){
              nav.pop();
          } else {
              const alert = this.alertCtrl.create({
                  title: 'Close the App',
                  message: 'Are you sure?',
                  buttons: [{
                      text: 'Cancel',
                      role: 'cancel',
                      handler: () => {
                        console.log('** App Exit cancelled! **');
                      }
                  },{
                      text: 'Yes',
                      handler: () => {
                        this.Logout();
                        this.platform.exitApp();
                      }
                  }]
              });
              alert.present();
          }
      }
    });
  }

  networkEventInit() {
    // Network Events
    this.networkProvider.initializeNetworkEvents();

    // Offline event
    this.events.subscribe('network:offline', () => {
      this.globalService.showToast('No Internet Connection!');
    });

    // Online event
    this.events.subscribe('network:online', () => {
      this.globalService.showToast('Back Online');
    });
  }

  Logout() {
    this.globalService.confirmlogOut();
  }


  recieveUserDetailsEvent() {
    this.events.subscribe('app:userDetails', (userDetails) => {
      this.globalService.get('userDetails')
        .then(
          data => this.setUserName(this.globalService.handleJSON(data)),
          error => console.error(error)
        );
    });
  }

  setUserName(data) {
    let UserName = data.Table[0].LoginName
    this.UserName = (UserName != undefined || UserName != '' || UserName != null) ? UserName : '';

    let emailID = data.Table[0].Email;
    this.globalService.defaultEmailId = (emailID != undefined || emailID != '' || emailID != null) ? emailID : '';

    this.globalService.defaultUsername = (UserName != undefined || UserName != '' || UserName != null) ? UserName : '';

    
    // this.globalService.defaultMode = data.Table[6].Mode;
    // this.globalService.defaultService = data.Table[6].Service;
    // this.globalService.defaultJobType = data.Table[6].JobType;

    // console.log('***** check default mode *****: ', this.globalService.defaultMode);
  }

  setSessionExpired() {
    this.events.subscribe('login:sessionExpired', (expireTime: number) => {
      setTimeout(() => {
        this.setupLoginPage();
      }, expireTime)
    });
  }

  setupLoginPage() {
    this.globalService.clearLocalStorage();
    this.removeViewByClass();
    this.pages = Constants.MENU_PAGES_ARRAY;
    this.globalService.showAlert('Session Expired !');
    this.events.unsubscribe('login:sessionExpired');
    this.globalService.setRootPage(LoginPage);
  }


  handleLogout() {
    this.events.subscribe('app:loggedOut', (isLoggedOut) => {
      isLoggedOut && (this.pages = Constants.MENU_PAGES_ARRAY);
    })
  }

  removeViewByClass() {
    let className = this.platform.is('ios') ? 'popover-ios' : 'popover-md';
    this.globalService.hideElementByClass(className);
  }

  ngOnDestroy() {
    this.events.unsubscribe('login:sessionExpired');
    this.events.unsubscribe('app:loggedOut');
    this.events.unsubscribe('network:online');
    this.events.unsubscribe('network:offline');
    this.events.unsubscribe('app:userDetails');
  }


}
