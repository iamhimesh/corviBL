import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShipmentStatusPage } from './shipment-status';

@NgModule({
  declarations: [
    ShipmentStatusPage,
  ],
  imports: [
    IonicPageModule.forChild(ShipmentStatusPage),
  ],
})
export class ShipmentStatusPageModule {}
