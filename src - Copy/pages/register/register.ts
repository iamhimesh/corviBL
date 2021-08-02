/**
 * @author Sachin Semlety
 * @email sachin.semlety@kalelogistics.in
 * @create date 2018-08-10 11:03:53
 * @modify date 2018-08-10 11:03:53
 * @desc [description]
*/
import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { LoginPage } from "../login/login";
// import { HomePage } from "../_home/home";
import { GlobalProvider } from "../../providers/global/global";


@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  constructor(public nav: NavController, public globalService: GlobalProvider) {
  }

  // register and go to home page
  register() {
    // this.globalService.routePage(HomePage)
  }

  // go to login page
  login() {
    this.globalService.routePage(LoginPage)
  }

}
