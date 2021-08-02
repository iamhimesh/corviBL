/**
 * @author Sachin Semlety
 * @email sachin.semlety@kalelogistics.in
 * @create date 2018-08-17 02:10:01
 * @modify date 2018-08-17 02:10:01
 * @desc [description]
*/
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InvoicesPage } from './invoices';
import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';
import { InvoicesDetails } from './detail/invoices-details';

@NgModule({
  declarations: [
    InvoicesPage,
    InvoicesDetails
  ],
  imports: [
    ComponentsModule,
    PipesModule,
    IonicPageModule.forChild(InvoicesPage),
  ], entryComponents: [
    InvoicesDetails
  ]
})
export class InvoicesPageModule { }
