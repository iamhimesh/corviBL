/**
 * @author Sachin Semlety
 * @email sachin.semlety@kalelogistics.in
 * @create date 2018-08-14 03:26:24
 * @modify date 2018-08-14 03:26:24
 * @desc [description]
*/
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OpenJobsPage } from './open-jobs';
import { OpenJobsPageDetails } from './detail/open-jobs-details';
import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    OpenJobsPage,
    OpenJobsPageDetails
  ],
  imports: [
    ComponentsModule,
    PipesModule,
    IonicPageModule.forChild(OpenJobsPage),
  ], entryComponents: [
    OpenJobsPageDetails
  ]
})
export class OpenJobsPageModule { }
