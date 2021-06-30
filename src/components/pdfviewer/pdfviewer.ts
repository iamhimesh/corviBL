/**
 * @author Sachin Semlety
 * @email sachin.semlety@kalelogistics.in
 * @create date 2018-08-14 10:37:07
 * @modify date 2018-08-14 10:37:07
 * @desc [description]
*/

import { Component, ViewChild } from '@angular/core';
import { NavParams, ToastController } from 'ionic-angular';
import { PDFProgressData, PdfViewerComponent } from 'ng2-pdf-viewer';


@Component({
  selector: 'pdfviewer',
  templateUrl: 'pdfviewer.html'
})
export class Pdfviewer {
  @ViewChild(PdfViewerComponent) private pdfComponent: PdfViewerComponent;
  pdfSrc: String;
  title: String;
  zoom_to: number = 1;
  constructor(public navParams: NavParams, public toastCtrl: ToastController) {
    console.log('Hello PdfviewerComponent Component');
    this.pdfSrc = this.navParams.get('pdfUrl');
    this.title = "PDF Viewer";

  }

  ionViewDidLoad() {
    this.initHammer();
  }
  zoom_in() {
    this.zoom_to = this.zoom_to + 0.25;
  }

  zoom_out() {
    if (this.zoom_to > 1) {
      this.zoom_to = this.zoom_to - 0.25;
    }
  }

  // Just to animate the fab
  fabGone = false;
  ionViewWillEnter() {
    this.fabGone = false;
  }

  ionViewWillLeave() {
    this.fabGone = true;
  }

  onError(error: any) {
    // do anything
    this.showToast('Something went wrong');
  }

  onProgress(progressData: PDFProgressData) {
    // do anything with progress data. For example progress indicator
    console.log('progressData : ', progressData)
  }


  search(ev: any) {
    let stringToSearch = ev.target.value;
    if (stringToSearch && stringToSearch.trim() !== '') {
      this.pdfComponent.pdfFindController.executeCommand('find', {
        caseSensitive: false, findPrevious: undefined, highlightAll: true, phraseSearch: true, query: stringToSearch
      });
    }
  }

  initHammer() {
    const container: HTMLElement = document.getElementById('pdf-file-container');

    const hammer = new Hammer(container, {
      domEvents: true
    });

    hammer.get('pinch').set({
      enable: true
    });

    hammer.on('pinchend', (event: any) => {
      // get the current zoom value
      let zoom = this.zoom_to;
      // get the scaled amount
      const scale = zoom * event.scale / 10;
      // if the user is zooming in
      if (event.additionalEvent === 'pinchout') {
        zoom += scale;
      } else {
        // if zooming out
        zoom -= scale * 10;
      }

      // if zoom is too small or too big set them to max values
      if (zoom < 1) {
        zoom = 1;
      } else if (zoom > 2) {
        zoom = 2;
      }

      // set the current zoom
      this.zoom_to = zoom;
    });
  }

  // due to circular dependencies error i have written this function again instead of calling from globalService
  public showToast(msg) {
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

}
