/**
 * @author Sachin Semlety
 * @email sachin.semlety@kalelogistics.in
 * @create date 2019-08-05 17:34:00
 * @modify date 2019-08-05 17:34:00
 * @desc [description]
 */
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EnquiryPage } from './enquiry';
import { ComponentsModule } from '../../components/components.module';
import { EnquiryCargoDetailPage } from './detail/enquiry-cargo-detail';
import { EnquiryPackageDetailPage } from './detail/enquiry-package-detail';
import { EnquiryContactDetailPage } from './detail/enquiry-contact-detail';

@NgModule({
  declarations: [
    EnquiryPage,
    EnquiryCargoDetailPage,
    EnquiryPackageDetailPage,
    EnquiryContactDetailPage
  ],
  imports: [ComponentsModule,
    IonicPageModule.forChild(EnquiryPage),
  ], entryComponents: [
    EnquiryCargoDetailPage,
    EnquiryPackageDetailPage,
    EnquiryContactDetailPage
  ]
})
export class EnquiryPageModule { }
