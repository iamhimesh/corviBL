import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { GlobalProvider } from '../../providers/global/global';

@IonicPage()
@Component({
  selector: 'page-popover',
  templateUrl: 'popover.html',
})
export class PopoverPage {

  pdfPath;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public viewCtrl: ViewController, public globalService: GlobalProvider) {

    console.log('check popover data: ', this.navParams.get('popoverData').PDFPath);

    this.pdfPath = this.navParams.get('popoverData').PDFPath;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopoverPage');
  }

  close() {
    this.viewCtrl.dismiss();
  }

  downloadPdf() {
    debugger
    let url = 'http://125.19.68.249/Staging/' + this.pdfPath;
    // let url = 'http://125.19.68.249/Staging/FMSEDocket/Transaction/WorkOrder/1004/BOMPAAI1617000750-CreditNote.PDF';
    console.log('*****URL*****', url);
    window.open(url, '_blank');

  }

  openPdf() {
    debugger
    let url = 'http://125.19.68.249/Staging/' + this.pdfPath;
    // let url = 'http://125.19.68.249/Staging/FMSEDocket/Transaction/WorkOrder/1004/BOMPAAI1617000750-CreditNote.PDF';
    console.log('*****URL*****', url);
    window.open(url, '_blank');

  }

  viewPDF() {
    console.log('pdf url here: ', this.globalService.get('PDFURL'));
    this.globalService.get('PDFURL').
      then(
        PDFURL => (PDFURL != null && PDFURL != "") ? this.openPDF(PDFURL, this.pdfPath) : this.globalService.showToast("something went wrong opening pdf"),
      ), error => console.error(error),
      // this.globalService.showToast("something went wrong opening pdf");
      this.close();
  }

  openPDF(pdfUrl: string, PDFPath: string) {
    let url = pdfUrl + PDFPath;
    console.log('check url pf pdf: ', url);
    PDFPath != '' && this.globalService.viewPDF(url);
    this.close();
  }

}
