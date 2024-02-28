import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { IonicModule, IonicPageModule } from 'ionic-angular';
import { SortPopoverPage } from './sort-popover';

@NgModule({
  declarations: [
    SortPopoverPage,
  ],
  imports: [
    IonicPageModule.forChild(SortPopoverPage),
    IonicModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SortPopoverPageModule {}
