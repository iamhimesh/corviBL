/**
 * @author Sachin Semlety
 * @email sachin.semlety@kalelogistics.in
 * @create date 2018-08-17 02:09:51
 * @modify date 2018-08-17 02:09:51
 * @desc [description]
*/
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClosedJobsPage } from './closed-jobs';
import { ClosedJobsPageDetails } from './detail/closed-jobs-details';
import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';
import { AlertService } from '../../providers/util/alert.service';

@NgModule({
  declarations: [
    ClosedJobsPage,
    ClosedJobsPageDetails
  ],
  imports: [
    ComponentsModule,
    PipesModule,
    IonicPageModule.forChild(ClosedJobsPage),
  ], entryComponents: [
    ClosedJobsPageDetails
  ], providers: [AlertService]
})
export class ClosedJobsPageModule { }
