import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReportingUserActivityPage } from './reporting-user-activity';

@NgModule({
  declarations: [
    ReportingUserActivityPage,
  ],
  imports: [
    IonicPageModule.forChild(ReportingUserActivityPage),
  ],
})
export class ReportingUserActivityPageModule {}
