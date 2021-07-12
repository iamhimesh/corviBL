import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewSalesLeadPage } from './new-sales-lead';

@NgModule({
  declarations: [
    NewSalesLeadPage,
  ],
  imports: [
    IonicPageModule.forChild(NewSalesLeadPage),
  ],
})
export class NewSalesLeadPageModule {}
