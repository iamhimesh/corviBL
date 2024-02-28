import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PipesModule } from '../../pipes/pipes.module';
import { ShipmentStatusPage } from './shipment-status';

@NgModule({
  declarations: [
    ShipmentStatusPage,
  ],
  imports: [
    IonicPageModule.forChild(ShipmentStatusPage),
    PipesModule
  ],
})
export class ShipmentStatusPageModule {}
