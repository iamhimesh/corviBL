/**
 * @author Sachin Semlety
 * @email sachin.semlety@kalelogistics.in
 * @create date 2018-08-10 02:36:23
 * @modify date 2018-08-10 02:36:23
 * @desc [description]
*/
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuotationPage } from './quotation';
import { PipesModule } from '../../pipes/pipes.module';
import { ComponentsModule } from '../../components/components.module';
import { QuotationDetailPage } from './quotation-detail/quotation-detail';

@NgModule({
  declarations: [
    QuotationPage,
    QuotationDetailPage
  ],
  imports: [
    ComponentsModule,
    PipesModule,
    IonicPageModule.forChild(QuotationPage)
  ], entryComponents: [
    QuotationDetailPage
  ]
})
export class QuotationPageModule { }
