import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PipesModule } from '../../pipes/pipes.module';
import { ShipmentInvoicePage } from './shipment-invoice';

@NgModule({
  declarations: [
    ShipmentInvoicePage,
  ],
  imports: [
    IonicPageModule.forChild(ShipmentInvoicePage),
    PipesModule
  ],
})
export class ShipmentInvoicePageModule {}
