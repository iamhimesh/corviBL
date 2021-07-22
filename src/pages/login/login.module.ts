/**
 * @author Sachin Semlety
 * @email sachin.semlety@kalelogistics.in
 * @create date 2018-08-10 11:03:43
 * @modify date 2018-08-10 11:03:43
 * @desc [description]
*/
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { ToastService } from '../../providers/util/toast.service';
import { AlertService } from '../../providers/util/alert.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
    // FormsModule
  ],
  exports: [
    LoginPage
  ], providers: [
    ToastService,
    AlertService
  ]
})

export class LoginPageModule { }
