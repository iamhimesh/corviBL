/**
 * @author Sachin Semlety
 * @email sachin.semlety@kalelogistics.in
 * @create date 2018-08-10 02:36:14
 * @modify date 2018-08-10 02:36:14
 * @desc [description]
*/
import { Component } from '@angular/core';
import { NavParams, Platform } from 'ionic-angular';
import { GlobalProvider } from '../../../providers/global/global';

@Component({
  selector: 'page-quotation-detail',
  templateUrl: 'quotation-detail.html',
})
export class QuotationDetailPage {
  title: String;
  q_details: any;
  constructor(public navParams: NavParams, public globalService: GlobalProvider, public platform: Platform) {
    this.title = "Quotation Details";
    this.q_details = this.navParams.get('quot_details');
  }


  viewPDF() {
    let pdfSrc = 'https://devdactic.com/html/5-simple-hacks-LBT.pdf';
    this.globalService.viewPDF(pdfSrc)
  }
}
