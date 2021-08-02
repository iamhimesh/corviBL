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
import { EnquiryPage } from '../enquiry';
import { EnquiryPackageDetailPage } from './enquiry-package-detail';


@Component({
  selector: 'page-enquiry-cargo-detail',
  templateUrl: 'enquiry-cargo-details.html',
})
export class EnquiryCargoDetailPage {
  title: string;
  showSearchBar: boolean;
  private cargoDetailsForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, public globalService: GlobalProvider) {
    this.title = "Cargo Details";
    this.showSearchBar = false;
    this.cargoDetailsForm = this.formBuilder.group({
      origin: ['', Validators.required],
      destination: ['', Validators.required],
      commodity: ['', Validators.required],
      cargo_description: [''],
      gross_wt: [''],
      chargeable_wt: [''],
      volume: [''],
      chargeable_volume: [''],
    });
  }

  logForm() {
    console.log(this.cargoDetailsForm.value)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EnquiryDetailPage');
  }

  previous() {
    this.globalService.routePage(EnquiryPage);
  }

  next() {
    this.globalService.routePage(EnquiryPackageDetailPage);
  }

  // Just to animate the fab
  fabGone = false;
  ionViewWillEnter() {
    this.fabGone = false;
  }

  ionViewWillLeave() {
    this.fabGone = true;
  }
}
