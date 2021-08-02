/**
 * @author Sachin Semlety
 * @email sachin.semlety@kalelogistics.in
 * @create date 2018-08-14 03:26:19
 * @modify date 2018-08-14 03:26:19
 * @desc [description]
*/
import { Component } from '@angular/core';
import { NavParams, Platform } from 'ionic-angular';
import { GlobalProvider } from '../../../providers/global/global';
import { AlertService } from '../../../providers/util/alert.service';
// import { Constants } from '../../../constants';


@Component({
    selector: 'page-invoices-details',
    templateUrl: 'invoices-details.html',
})
export class InvoicesDetails {
    title: String;
    invoice_details: any;
    constructor(public navParams: NavParams, public globalService: GlobalProvider, public platform: Platform, public alertService: AlertService) {
        this.title = "Invoices Details";
        this.invoice_details = this.navParams.get('Invoices');
    }

    viewPDF() {
        // let url = Constants.CORVI_PDF_URL + this.invoice_details[0].PDFPath;
        this.globalService.get('PDFURL').
            then(
                PDFURL => (PDFURL != null && PDFURL != "") ? this.openPDF(PDFURL) : this.globalService.showToast("something went wrong opening pdf"),
            ), error => console.error(error), this.globalService.showToast("something went wrong opening pdf");
    }

    openPDF(pdfUrl: string) {
        let url = pdfUrl + this.invoice_details[0].PDFPath;
        this.invoice_details[0].hasOwnProperty('PDFPath') && this.invoice_details[0].PDFPath != '' && this.globalService.viewPDF(url);
    }
}
