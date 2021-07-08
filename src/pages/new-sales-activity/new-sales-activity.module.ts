import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewSalesActivityPage } from './new-sales-activity';

@NgModule({
  declarations: [
    NewSalesActivityPage,
  ],
  imports: [
    IonicPageModule.forChild(NewSalesActivityPage),
  ],
})
export class NewSalesActivityPageModule {}
