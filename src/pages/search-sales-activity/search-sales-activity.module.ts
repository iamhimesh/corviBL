import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchSalesActivityPage } from './search-sales-activity';

@NgModule({
  declarations: [
    SearchSalesActivityPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchSalesActivityPage),
  ],
})
export class SearchSalesActivityPageModule {}
