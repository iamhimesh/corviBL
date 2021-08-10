import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JobStatusPage } from './job-status';

@NgModule({
  declarations: [
    JobStatusPage,
  ],
  imports: [
    IonicPageModule.forChild(JobStatusPage),
  ],
})
export class JobStatusPageModule {}
