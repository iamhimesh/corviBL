/**
 * @author Sachin Semlety
 * @email sachin.semlety@kalelogistics.in
 * @create date 2018-08-14 03:26:19
 * @modify date 2018-08-14 03:26:19
 * @desc [description]
*/
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpServiceProvider } from '../../providers/http-service/http-service';
import { Constants } from '../../constants';
import { GlobalProvider } from '../../providers/global/global';
import { OpenJobsPageDetails } from './detail/open-jobs-details';
import { AlertService } from '../../providers/util/alert.service';

@IonicPage()
@Component({
  selector: 'page-open-jobs',
  templateUrl: 'open-jobs.html',
})
export class OpenJobsPage {
  title: String;
  openJobs: Array<any> = [];
  showData: boolean;
  showSearchBar: boolean;
  clonedItems: any;
  tabsDisabled: boolean;
  searchQuery: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpServiceProvider, public globalService: GlobalProvider, public alertService: AlertService) {
    this.title = "Open Jobs";
    let isTabDisabled = this.navParams.get("tabsDisabled");
    this.tabsDisabled = isTabDisabled == undefined ? false : isTabDisabled;

  }

  ionViewDidEnter() {
    this.fetchOpenJobs();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OpenJobsPage');
  }

  fetchOpenJobs() {
    this.openJobs = [];
    this.searchQuery = '';
    this.globalService.get('userDetails')
      .then(
        data => this.fetch(this.globalService.handleJSON(data).Table[0].UserId),
        error => console.error(error)
      );
  }

  fetch(id) {
    if (id != null || id != '') {
      this.http.POST(Constants.Corvi_Services.OpenJobs.Get_OpenJobList, { "UserId": id }).then((response: any) => {
        console.log('resp ', response);
        this.openJobs = this.globalService.handleJSON(response).Table;
        this.setClonedArray();
        this.showData = true;
      }, (err) => {
        console.log('error Login ', err);
      });
    }
  }

  fetchOpenJobsDetails(WoDetailNo) {
    this.globalService.get('userDetails')
      .then(
        data => this.fetchDetails(this.globalService.handleJSON(data).Table[0].UserId, WoDetailNo),
        error => console.error(error)
      );
  }

  fetchDetails(id, WoDetailNo) {
    if (id != null || id != '') {
      this.http.POST(Constants.Corvi_Services.JobDetails.JobData + Constants.Corvi_Services.JobDetails.WoDetailNo + WoDetailNo, {
        "UserID": id,
        "Password": ""
      }).then((response: any) => {
        this.globalService.routePageWithData(OpenJobsPageDetails, { 'open_Jobs': this.globalService.handleJSON(response).Table })
      }, (err) => {
        console.log('error Login ', err);

      });
    }
  }

  setClonedArray() {
    this.clonedItems = this.globalService.clone(this.openJobs);
  }

  filterItems(ev: any) {
    this.openJobs = this.clonedItems;
    let val = ev.target.value;

    if (val && val.trim() !== '') {
      this.openJobs = this.openJobs.filter((item) => {
        for (const key in item) {
          if (item.hasOwnProperty(key)) {
            const element = item[key];
            if (String(element).toLowerCase().includes(val.toLowerCase())) {
              return item;
            }
          }
        }
      });
    }
  }

  goToOpenJobsDetail(data) {
    this.fetchOpenJobsDetails(data.WODetailNo);
  }


  showSearch() {
    this.showSearchBar = true;
  }

  onCancel() {
    this.showSearchBar = false;
  }

  ionViewWillLeave() {
    this.showSearchBar = false;
  }

  followJob(item) {
    console.log('item ', item)
    this.alertService.presentActionSheet('Open Jobs', item);
  }



}
