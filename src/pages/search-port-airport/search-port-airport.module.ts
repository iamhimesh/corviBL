import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchPortAirportPage } from './search-port-airport';

@NgModule({
  declarations: [
    SearchPortAirportPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchPortAirportPage),
  ],
})
export class SearchPortAirportPageModule {}
