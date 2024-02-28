import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { GlobalProvider } from '../../providers/global/global';


@IonicPage()
@Component({
  selector: 'page-search-job-results',
  templateUrl: 'search-job-results.html',
})
export class SearchJobResultsPage {
  title: string;

  fetchedData: any = [];
  selectedJobsArray: any = [];
  countOfRec: number;

  constructor(public navCtrl: NavController, public navParams: NavParams,
     public globalService: GlobalProvider, public viewCtrl: ViewController) {

    this.title = 'Search Job Results'

    this.fetchedData = this.navParams.get('jobResults');
    if (this.globalService.isCordovaAvailable()) {
      // this.countOfRec = JSON.parse(this.fetchedData).length;
      this.countOfRec = this.fetchedData.length;

    } else {
      this.countOfRec = this.fetchedData.length;
    }
    // this.countOfRec = JSON.parse(this.fetchedData)["Table"].length;

    // this.countOfRec =this. fetchedData['Table'].length
    console.log('length of arr ', this.fetchedData.length);
  }

  ionViewDidLoad() {
    console.log('fetched data: ', this.fetchedData);
    console.log('ionViewDidLoad SearchJobResultsPage');
  }

  selectedJobs(val) {
    var index = this.selectedJobsArray.indexOf(val);
    if (index === -1) {
      // val not found, pushing onto array
      this.selectedJobsArray.push(val);
    } else {
      // val is found, removing from array
      this.selectedJobsArray.splice(index, 1);
    }
    // this.selectedJobsArray.push(data);
  }

  confirmJobs() {
    this.globalService.selectedJobsArray = this.selectedJobsArray;
    this.navCtrl.remove(this.navCtrl.getActive().index - 1, 2);
    console.log('All selected jobs: ', this.selectedJobsArray);
  }

  dismissModal() {
    let data = { 'foo': 'bar' };
    // this.viewCtrl.dismiss(this.globalService.selectedJobType);
    this.viewCtrl.dismiss();
  }

}
