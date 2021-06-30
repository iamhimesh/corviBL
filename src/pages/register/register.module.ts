/**
 * @author Sachin Semlety
 * @email sachin.semlety@kalelogistics.in
 * @create date 2018-08-10 11:03:50
 * @modify date 2018-08-10 11:03:50
 * @desc [description]
*/
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterPage } from './register';

@NgModule({
  declarations: [
    RegisterPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterPage)
  ],
  exports: [
    RegisterPage
  ]
})

export class RegisterPageModule { }
