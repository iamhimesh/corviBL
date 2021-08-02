/**
 * @author Sachin Semlety
 * @email sachin.semlety@kalelogistics.in
 * @create date 2018-08-14 03:26:19
 * @modify date 2018-08-14 03:26:19
 * @desc [description]
*/
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GlobalProvider } from '../../../providers/global/global';

@Component({
    selector: 'page-open-jobs-details',
    templateUrl: 'open-jobs-details.html',
})
export class OpenJobsPageDetails {
    title: String;
    open_jobs_details: any;

    constructor(public navCtrl: NavController, public navParams: NavParams, public globalService: GlobalProvider) {
        this.title = "Open Jobs Details";
        this.open_jobs_details = this.navParams.get('open_Jobs');
    }

}
