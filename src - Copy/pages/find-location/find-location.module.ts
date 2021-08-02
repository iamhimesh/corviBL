import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FindLocationPage } from './find-location';

@NgModule({
  declarations: [
    FindLocationPage,
  ],
  imports: [
    IonicPageModule.forChild(FindLocationPage),
  ],
})
export class FindLocationPageModule {}
