/**
 * @author Sachin Semlety
 * @email sachin.semlety@kalelogistics.in
 * @create date 2019-08-06 10:22:43
 * @modify date 2019-08-06 10:22:43
 * @desc [description]
 */
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { GlobalProvider } from '../../../providers/global/global';
import { EnquiryContactDetailPage } from './enquiry-contact-detail';


@Component({
  selector: 'page-enquiry-package-detail',
  templateUrl: 'enquiry-package-details.html',
})
export class EnquiryPackageDetailPage {
  title: string;
  showSearchBar: boolean;
  private packageDetailsForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, private globalService: GlobalProvider) {
    this.title = "Package Details";
    this.showSearchBar = false;
    this.packageDetailsForm = this.formBuilder.group({
      Nop: ['', Validators.required],
      units: ['', Validators.required],
      length: ['', Validators.required],
      width: [''],
      height: [''],
      GrossWt: [''],

    });
  }

  logForm() {
    console.log(this.packageDetailsForm.value)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EnquiryDetailPage');
  }

  contact() {
    this.globalService.routePage(EnquiryContactDetailPage)
  }
}
