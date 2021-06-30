/**
 * @author Sachin Semlety
 * @email sachin.semlety@kalelogistics.in
 * @create date 2018-08-14 03:26:19
 * @modify date 2018-08-14 03:26:19
 * @desc [description]
*/
import { Component } from '@angular/core';
import { NavParams, Platform } from 'ionic-angular';
import { GlobalProvider } from '../../../providers/global/global';
import { AlertService } from '../../../providers/util/alert.service';


@Component({
    selector: 'page-closed-jobs-details',
    templateUrl: 'closed-jobs-details.html',
})
export class ClosedJobsPageDetails {
    title: String;
    closed_jobs_details: any;
    constructor(public navParams: NavParams, public globalService: GlobalProvider, public platform: Platform, public alertService: AlertService) {
        this.title = "Closed Job Details";
        this.closed_jobs_details = this.navParams.get('closed_Jobs');
    }

    // followJob() {
    //     this.alertService.presentActionSheet('Closed Jobs', 'test Notification', 'test Notification 2')
    // }
}
