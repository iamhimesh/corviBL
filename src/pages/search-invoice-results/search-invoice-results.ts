import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { GlobalProvider } from '../../providers/global/global';
import { PopoverPage } from '../popover/popover';

@IonicPage()
@Component({
  selector: 'page-search-invoice-results',
  templateUrl: 'search-invoice-results.html',
})
export class SearchInvoiceResultsPage {
  title = 'Search Shipment Invoice'
  fetchedData: any = [];
  countOfRec:number;
  appBuildConfig: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public globalService: GlobalProvider,
    public popCtrl: PopoverController) {
    this.fetchedData = this.navParams.get('invoiceResults');
    this.appBuildConfig = this.globalService.appBuildConfig;
    if (this.globalService.isCordovaAvailable()) {
      // this.countOfRec = JSON.parse(this.fetchedData).length;
      this.countOfRec = this.fetchedData.length;

    } else {
      this.countOfRec = this.fetchedData.length;
    }

  }

  ionViewDidLoad() {
    console.log('fetched data: ', this.fetchedData);
    console.log('ionViewDidLoad SearchInvoiceResultsPage');
  }

  openPopOver(myEvent, data){
    let popover = this.popCtrl.create(PopoverPage, {popoverData: data});
    popover.present({
      ev: myEvent
    });

  }

}
