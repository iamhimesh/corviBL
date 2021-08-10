import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfigureParametersPage } from './configure-parameters';

@NgModule({
  declarations: [
    ConfigureParametersPage,
  ],
  imports: [
    IonicPageModule.forChild(ConfigureParametersPage),
  ],
})
export class ConfigureParametersPageModule {}
