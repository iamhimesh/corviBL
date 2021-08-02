/**
 * @author Sachin Semlety
 * @email sachin.semlety@kalelogistics.in
 * @create date 2018-08-10 11:03:38
 * @modify date 2018-08-10 11:03:38
 * @desc [description]
*/
import { HomePage } from './home';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../components/components.module';
import { HomeDetailPage } from './home-detail-page';

@NgModule({
  declarations: [
    HomePage,
    HomeDetailPage
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(HomePage)
  ],
  exports: [
    HomePage,
    HomeDetailPage
  ]
})

export class HomePageModule { }
