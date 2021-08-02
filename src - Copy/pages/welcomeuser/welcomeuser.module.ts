import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WelcomeuserPage } from './welcomeuser';

@NgModule({
  declarations: [
    WelcomeuserPage,
  ],
  imports: [
    IonicPageModule.forChild(WelcomeuserPage),
  ],
})
export class WelcomeuserPageModule {}
