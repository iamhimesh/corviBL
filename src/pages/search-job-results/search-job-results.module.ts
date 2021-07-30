import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchJobResultsPage } from './search-job-results';

@NgModule({
  declarations: [
    SearchJobResultsPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchJobResultsPage),
  ],
})
export class SearchJobResultsPageModule {}
