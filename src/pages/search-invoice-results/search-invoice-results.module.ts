import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchInvoiceResultsPage } from './search-invoice-results';

@NgModule({
  declarations: [
    SearchInvoiceResultsPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchInvoiceResultsPage),
  ],
})
export class SearchInvoiceResultsPageModule {}
