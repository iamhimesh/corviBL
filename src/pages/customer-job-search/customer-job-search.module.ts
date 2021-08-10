import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomerJobSearchPage } from './customer-job-search';

@NgModule({
  declarations: [
    CustomerJobSearchPage,
  ],
  imports: [
    IonicPageModule.forChild(CustomerJobSearchPage),
  ],
})
export class CustomerJobSearchPageModule {}
