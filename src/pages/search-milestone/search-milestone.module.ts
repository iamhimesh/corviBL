import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchMilestonePage } from './search-milestone';

@NgModule({
  declarations: [
    SearchMilestonePage,
  ],
  imports: [
    IonicPageModule.forChild(SearchMilestonePage),
  ],
})
export class SearchMilestonePageModule {}
