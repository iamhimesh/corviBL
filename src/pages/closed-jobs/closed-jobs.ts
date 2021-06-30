/**
 * @author Sachin Semlety
 * @email sachin.semlety@kalelogistics.in
 * @create date 2018-08-14 03:27:55
 * @modify date 2018-08-14 03:27:55
 * @desc [description]
*/
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, Events, Searchbar } from 'ionic-angular';
import { HttpServiceProvider } from '../../providers/http-service/http-service';
import { GlobalProvider } from '../../providers/global/global';
import { Constants } from '../../constants';
import { ClosedJobsPageDetails } from './detail/closed-jobs-details';
import { PushNotificationProvider } from '../../providers/push-notification/push-notification';
import { AlertService } from '../../providers/util/alert.service';

@IonicPage()
@Component({
  selector: 'page-closed-jobs',
  templateUrl: 'closed-jobs.html',
})
export class ClosedJobsPage {
  title: String;
  closedJobs: Array<any> = [];
  showData: boolean;
  showSearchBar: boolean;
  clonedItems: any;
  tabsDisabled: boolean;
  searchQuery: string;
  @ViewChild('searchbar') searchbar: Searchbar;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpServiceProvider, public globalService: GlobalProvider, public pushNotification: PushNotificationProvider, public actionSheetCtrl: ActionSheetController, public alertService: AlertService, public eventCtrl: Events) {
    this.title = "Closed Jobs";
    let isTabDisabled = this.navParams.get("tabsDisabled");
    this.tabsDisabled = isTabDisabled == undefined ? false : isTabDisabled;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClosedJobsPage');
  }

  ionViewDidEnter() {
    this.fetchClosedJobs();
  }

  fetchClosedJobs() {
    this.closedJobs = [];
    this.searchQuery = '';
    this.globalService.get('userDetails')
      .then(
        data => this.fetch(this.globalService.handleJSON((data)).Table[0].UserId),
        error => console.error(error)
      );
  }

  fetch(id) {
    if (id != null || id != '') {
      this.http.POST(Constants.Corvi_Services.ClosedJobs.Get_CloseJobList, { "UserId": id }).then((response: any) => {
        // console.log('resp ', response);
        this.closedJobs = this.globalService.handleJSON(response).Table;
        this.setClonedArray();
        this.showData = true;
        // console.log('closedJobs : ', this.closedJobs)
      }, (err) => {
        console.log('error Login ', err);

      });
    }
  }

  fetchClosedJobsDetails(WoDetailNo) {
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
        this.globalService.routePageWithData(ClosedJobsPageDetails, { 'closed_Jobs': this.globalService.handleJSON(response).Table })
      }, (err) => {
        console.log('error Login ', err);
      });
    }
  }

  setClonedArray() {
    this.clonedItems = this.globalService.clone(this.closedJobs);
  }

  filterItems(ev: any) {
    this.closedJobs = this.clonedItems;
    let val = ev.target.value;

    if (val && val.trim() !== '') {
      this.closedJobs = this.closedJobs.filter((item) => {
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

  goToClosedJobsDetail(data) {
    this.fetchClosedJobsDetails(data.WODetailNo);
  }


  showSearch() {
    this.showSearchBar = true;
    this.searchbar.setFocus();
  }

  onCancel(ev) {
    this.showSearchBar = false;
  }

  ionViewWillLeave() {
    this.showSearchBar = false;
  }



  // followJob(item) {
  //   console.log('item ', item)
  //   this.alertService.presentActionSheet('Closed Jobs', 'test Message Title', 'test Message Content');
  // }

}
