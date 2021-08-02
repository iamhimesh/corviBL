/**
 * @author Sachin Semlety
 * @email sachin.semlety@kalelogistics.in
 * @create date 2018-08-17 02:09:25
 * @modify date 2018-08-17 02:09:25
 * @desc [description]
*/
import { Component, Input } from '@angular/core';
import {
  PopoverController
} from 'ionic-angular';
import { MoreComponent } from '../more/more';
@Component({
  selector: 'Corvi-header',
  templateUrl: 'header.html'
})
export class HeaderComponent {
  @Input('title') title: string;

  constructor(public popoverCtrl: PopoverController) {
    console.log('Hello HeaderComponent Component');
  }

  presentOptions(myEvent) {
    // console.log(myEvent);
    let popover = this.popoverCtrl.create(MoreComponent);
    popover.present({
      ev: myEvent
    });
  }




}
