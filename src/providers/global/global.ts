import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { App, AlertController, Platform, ToastController, LoadingController, Events, ActionSheetController } from 'ionic-angular';
import { LoginPage } from '../../pages/login/login';
import { Constants } from '../../constants';
import { File } from '@ionic-native/file';
import { FileTransfer } from '@ionic-native/file-transfer';
import { FileOpener } from '@ionic-native/file-opener';
import { Pdfviewer } from '../../components/pdfviewer/pdfviewer';
import { NativeStorage } from '@ionic-native/native-storage';
import * as CryptoJS from 'crypto-js';
import { SpinnerDialog } from '@ionic-native/spinner-dialog';

/**
 * @name GlobalProvider
 * @author Sachin Semlety
 * @description
 * This Class is used to set the global Operations for the app.
**/
@Injectable()
export class GlobalProvider {
  /*Configuration for the app */
  selectedCity;
  appConfig = {
    version: 'v1.1.6'
  }

  appBuildConfig = {
    version: 'V1.25.0',
    fullYear: (new Date).getFullYear().toString()
  }

  constructor(public http: HttpClient, private app: App, public alertCtrl: AlertController, public toastCtrl: ToastController, public platform: Platform, public loadingCtrl: LoadingController, public eventCtrl: Events, public actionSheetCtrl: ActionSheetController, public file: File, public transfer: FileTransfer, public fileOpener: FileOpener, private nativeStorage: NativeStorage, private spinnerDialog: SpinnerDialog) {
  }

  /* To set the RootPage in App*/
  public setRootPage(page) {
    this.app.getRootNavs()[0].setRoot(page);
  }

  /* To Route the Page in the App*/
  public routePage(page) {
    this.app.getActiveNavs()[0].push(page);
  }

  /* Route To other Page with the data params*/
  public routePageWithData(page, data) {
    this.app.getActiveNavs()[0].push(page, data);
  }

  /*Logout PopupModal*/
  public confirmlogOut() {
    let alert = this.alertCtrl.create({
      // title: 'Logout',
      message: 'Are you sure you want to sign out?',
      buttons: [{
        text: "No",
        role: 'cancel'
      }, {
        text: "Yes",
        cssClass: 'alertDanger',
        handler: () => {
          this.handleLogOut();
        }

      }]
    })
    alert.present();
  }

  handleLogOut() {
    this.eventCtrl.publish('app:loggedOut', true);
    this.clearLocalStorage();
  }

  public clearLocalStorage() {
    this.remove('isLogged');
    this.remove('login_resp');
    this.remove('userDetails');
    this.remove('branchCode');
    this.remove('customerData');
    this.routePage(LoginPage);
  }

  /* To Exit the App */
  public ExitApp(): void {
    this.platform.exitApp();
  }

  /* Toast for the App*/
  public showToast(msg: string) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      //console.log('Dismissed toast');
    });
    toast.present();
  }

  /* PopupModal Alert*/
  public showAlert(msg: string) {
    let alert = this.alertCtrl.create({
      subTitle: msg,
      buttons: ['OK']
    });
    alert.present();
  }

  /* check is cordova Available*/
  public isCordovaAvailable(): boolean {
    return !!window['cordova'];
  }

  /* To Convert String into Boolean*/
  public convertToBoolean(input: string): boolean | undefined {
    try {
      return this.handleJSON(input);
    }
    catch (e) {
      return undefined;
    }
  }

  /* Encrypt and store the local storage data*/
  public store(key: string, value: any) {
    if (this.isCordovaAvailable()) {
      this.nativeStorage.setItem(key, value)
        .then(
          () => console.log('Stored item!'),
          error => console.error('Error storing item', error)
        );
    } else {
      let encryptedData = CryptoJS.AES.encrypt(JSON.stringify(value), Constants.SECRET_KEY).toString();
      window.localStorage.setItem(key, encryptedData);
    }
  }

  /* get the stored localStorage Value after decryption */
  public get(key: string): Promise<any> | null {
    if (this.isCordovaAvailable()) {
      return this.nativeStorage.getItem(key);
    } else {
      return this.getlocalStorageWeb(key);
    }
  }

  getlocalStorageWeb(key): Promise<any> | null {
    return new Promise((resolve, reject) => {
      let encryptedData = window.localStorage.getItem(key);
      if (encryptedData != null)
        resolve(this.handleJSON(CryptoJS.AES.decrypt(encryptedData, Constants.SECRET_KEY).toString(CryptoJS.enc.Utf8)));
      return resolve('');
    });
  }

  public remove(key: string) {
    if (this.isCordovaAvailable()) {
      this.nativeStorage.remove(key)
        .then(
          () => console.log('Item removed!'),
          error => console.error('Error removing item', error)
        );
    } else {
      window.localStorage.removeItem(key);
    }
  }

  /* to check the Platform current running*/
  public _platform(platform_name1?: string, platform_name2?: string) {
    return this.platform.is(platform_name1) || this.platform.is(platform_name2);
  }

  /* To format the date in DD/MM/YYYY format */
  public formatDate(date: string) {
    let splitArr = date.split('-');
    return splitArr[2] + "/" + splitArr[1] + "/" + splitArr[0];
  }

  public showLoader() {
    let loader = this.loadingCtrl.create({
      content: "Loading..."
    });

    loader.present();

    return loader;
  }

  public clone(object) {
    // simple object clone
    return this.handleJSON(JSON.stringify(object));
  }

  public publishEventwithData(ev_name, data): void {
    this.eventCtrl.publish(ev_name, data);
  }

  public handleJSON(data) {
    try { return JSON.parse(data); }
    catch (e) { return data; }
  }


  hideElementByClass(className) {
    let divsToHide = document.getElementsByClassName(className); //divsToHide is an array
    for (var i = 0; i < divsToHide.length; i++) {
      divsToHide[i]['style'].visibility = "hidden"; // or
      divsToHide[i]['style'].display = "none"; // depending on what you're doing
    }
  }

  unhideElementByClass(className) {
    let divsToHide = document.getElementsByClassName(className); //divsToHide is an array
    for (var i = 0; i < divsToHide.length; i++) {
      divsToHide[i]['style'].visibility = "inherit"; // or
      divsToHide[i]['style'].display = "flex"; // depending on what you're doing
    }
  }

  viewPDF(url: string) {
    let connectionStatus = navigator.onLine ? 'online' : 'offline';
    connectionStatus == 'online' ? (this.platform.is('cordova')) ? this.nativePDFViewer(url) : this.browserPDFViewer(url) : connectionStatus == 'offline' ? this.showAlert('No Internet Connection') : '';
  }

  nativePDFViewer(url) {
    this.spinnerDialog.show(null, null, true);
    let path = null;
    if (this.platform.is('ios')) {
      path = this.file.documentsDirectory;
    } else if (this.platform.is('android')) {
      path = this.file.dataDirectory;
    }

    const transfer = this.transfer.create();
    let filename = url.match(/\/([^/]*)$/)[1];
    transfer.download(url, path + filename).then(entry => {
      let url = entry.toURL();
      this.fileOpener.open(url, Constants.MIME_TYPE).then(() => {
        this.spinnerDialog.hide();
      }).catch((err: any) => {
        this.spinnerDialog.hide();
        this.browserPDFViewer(url);
      });
    }).catch((err: any) => {
      this.spinnerDialog.hide();
      // this.browserPDFViewer(url);
    });
  }

  browserPDFViewer(url) {
    this.routePageWithData(Pdfviewer, { 'pdfUrl': url })
  }



  isTabsAvailable(): boolean {
    let className = this.platform.is('ios') ? 'tabs tabs-ios' : 'tabs tabs-md';
    let tabs = document.getElementsByClassName(className);
    return tabs.length > 0 ? true : false;
  }

  /* Encrypt and store the local storage data*/
  public setBaseURL(key: string, value: any): Promise<any> | null {
    if (this.isCordovaAvailable()) {
      return this.nativeStorage.setItem(key, value)
    } else {
      return new Promise((resolve, reject) => {
        let encryptedData = CryptoJS.AES.encrypt(JSON.stringify(value), Constants.SECRET_KEY).toString();
        window.localStorage.setItem(key, encryptedData);
        if (encryptedData != null)
          resolve("Success");
        return resolve('');
      });
    }
  }



}
