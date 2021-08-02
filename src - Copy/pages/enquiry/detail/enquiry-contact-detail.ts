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


@Component({
  selector: 'page-enquiry-contact-detail',
  templateUrl: 'enquiry-contact-detail.html',
})
export class EnquiryContactDetailPage {
  title: string;
  showSearchBar: boolean;
  private contactDetailsForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder) {
    this.title = "Contact Details";
    this.showSearchBar = false;
    this.contactDetailsForm = this.formBuilder.group({
      name: ['', Validators.required],
      location: ['', Validators.required],
      emailID: ['', Validators.compose([Validators.maxLength(70), Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'), Validators.required])],
      organization: ['', Validators.required],
      contact_No: ['', Validators.required],
      Address: ['', Validators.required],

    });
  }

  logForm() {
    console.log(this.contactDetailsForm.value)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EnquiryDetailPage');
  }


}
