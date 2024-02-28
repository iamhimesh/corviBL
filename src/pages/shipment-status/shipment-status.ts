import { Component, PipeTransform, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { IonicPage, NavController, NavParams, MenuController, ModalController, ToastController, Searchbar, PopoverController } from 'ionic-angular';
import { Constants } from '../../constants';
import { GlobalProvider } from '../../providers/global/global';
import { HttpServiceProvider } from '../../providers/http-service/http-service';
import { AlertService } from '../../providers/util/alert.service';
import { ToastService } from '../../providers/util/toast.service';
import { CustomerDashboardPage } from '../customer-dashboard/customer-dashboard';
import { CustomerJobSearchPage } from '../customer-job-search/customer-job-search';
import { DashboardPage } from '../dashboard/dashboard';
import { JobStatusPage } from '../job-status/job-status';
import { SortPopoverPage } from '../sort-popover/sort-popover';



/**
 * Generated class for the ShipmentStatusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

export class OpenJobListClass {
  UserId: any; Type: any
}

@IonicPage()
@Component({
  selector: 'page-shipment-status',
  templateUrl: 'shipment-status.html',
})


export class ShipmentStatusPage {
  title: string;
  appBuildConfig: any;
  openList: OpenJobListClass;
  userID: string;
  shipmentAllData: any = [];
  responseFormAPI: any = [];
  public searchTerm: string = "";
  flag: boolean = false;


  closedJobs: Array<any> = [];
  showData: boolean;
  showSearchBar: boolean;
  clonedItems: any;
  tabsDisabled: boolean;
  searchQuery: string;
  @ViewChild('searchbar') searchbar: Searchbar;
  milestoneAllData: any = [];
  filterMilestone: any = [];
  gateMileStoneListArr: any = [];
  customerJobSearch: any;
  flagJobSearch: any;

  descending: boolean = false;
  order: number;
  column: string = '';
  shipmentAllDataFilterd: any = [];
  flagDataAllData: boolean;
  flagDataFilterData: boolean;
  shipmentAllDataFromJobSearch: any = [];



  constructor(
    public navCtrl: NavController, public navParams: NavParams,
    public globalService: GlobalProvider,
    private modalCtrl: ModalController,
    public nav: NavController,
    public menu: MenuController,
    public toastCtrl: ToastController,

    public http: HttpServiceProvider,
    public alertService: AlertService,
    public toastService: ToastService,
    // public baseURLProvider: BaseURLProvider,
    public fb: FormBuilder,
    public popCtrl: PopoverController,
  ) {
    this.title = "Shipment Status";
    this.appBuildConfig = this.globalService.appBuildConfig;
    this.openList = new OpenJobListClass();
    this.userID = localStorage.getItem('userId');
    debugger
    this.flagJobSearch = localStorage.getItem('flagJobSearch');

    if (this.flagJobSearch == '1') {
      this.shipmentAllDataFilterd = JSON.parse(localStorage.getItem('customerJobSearch'));
     // this.shipmentAllDataFilterd = this.shipmentAllDataFromJobSearch[0];
      this.flagDataFilterData = true;
    } else {
      this.OpenJobListShipment();
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShipmentStatusPage');
  }
  backToDashboard() {
    localStorage.removeItem('branchCode');
    localStorage.removeItem('customerData');
    localStorage.removeItem('branchCode');
    localStorage.removeItem('flagJobSearch');

    this.globalService.setRootPage(DashboardPage);


    // this.globalService.setRootPage(CustomerDashboardPage);
  }

  sort() {
    this.descending = !this.descending;
    this.order = this.descending ? 1 : -1;
  }

  openPopOver(myEvent) {
    let popover = this.popCtrl.create(SortPopoverPage);
    popover.present({
      ev: myEvent
    });
  }

  openSortModel() {
    const sortModal = this.modalCtrl.create(SortPopoverPage, { cssClass: 'my-modal' });
    sortModal.onDidDismiss(data => {
      console.log('check modal data: ', data);
      this.column = data;
      this.sort();
    })
    sortModal.present();
  }


  OpenJobListShipment() {

    this.openList.UserId = this.userID;
    this.openList.Type = 'Open';


    this.http.POST(Constants.Corvi_Services.OpenJobList, this.openList).then((response) => {

      // console.log('response to check login method: ', response);

      // if (response['Table'] == '') {
      //   this.toastService.show('Data not found.', 3000, true, 'top', 'toast-container');
      //   return;
      // } else {
      //   debugger
      //   this.shipmentAllData = response['Table'];
      // }

      if (response['Table'] == '') {
        this.toastService.show('Data not found.', 3000, true, 'top', 'toast-container');
        return;
      } else {
        if (this.globalService.isCordovaAvailable()) {
          this.flagDataAllData = true;
          this.flagDataFilterData = false;
          this.responseFormAPI = response;
          this.shipmentAllData = JSON.parse(this.responseFormAPI)["Table"];
          this.milestoneAllData = JSON.parse(this.responseFormAPI)["Table1"];

        } else {
          this.flagDataAllData = true;
          this.flagDataFilterData = false;
          this.shipmentAllData = response['Table'];
          this.milestoneAllData = response['Table1'];
          //  this.setClonedArray();
        }
      }


    }, (err) => {
      console.log('error Login ', err);

    });
    // }
    // else {
    //   this.globalService.showAlert('Invalid Customer Identity Code')
    // }

    // });

    // HouseDate: "12/06/2021"
    // HouseNo: "HNO821"
    // JobDate: "06/12/2021"
    // JobNo: "SBUFJAI2122000001"
    // MasterDate: "11/06/2021"
    // MasterNo: "020-12345675"
    // Mode: "AIR"
    // POD: "Sir Seewoosagur"
    // POL: "LONDON-HEATHROW"
    // Service: "Import"


  }

  setClonedArray() {
    this.clonedItems = this.globalService.clone(this.shipmentAllData);
  }

  goToSearchJob(jobDAta) {
    debugger
    this.globalService.jobStatusPArms = jobDAta;

   // this.filterMilestone = this.milestoneAllData.filter(t => t.WorkOrderNo == jobDAta.JobNo);
    // this.gateMileStoneListArr.push(this.filterMilestone);

   // localStorage.setItem('filterMilestone', JSON.stringify(this.filterMilestone));
    // if (this.fromSaleLeadVal == '1') {

    //   this.globalService.valueForLeadCutomer = custArray;
    //   this.viewCtrl.dismiss();
    //   this.globalService.setRootPage(NewSalesLeadPage);
    // } else {
    //   localStorage.setItem('branchCode', this.branchCode)
    //   this.globalService.store('customerData', custArray);
    this.globalService.setRootPage(JobStatusPage);
  }
  // this.navCtrl.remove(this.navCtrl.getActive().index - 0, 1,);
  // goToCustomerJobSearch() {
  //   //this.globalService.setRootPage(CustomerJobSearchPage);

  // }
  goToCustomerJobSearch() {


    // this.saveActivity.BranchCode = this.branchCode;


    // if (this.branchCode == '0') {
    //   this.toastService.show('Please select branch.', 3000, true, 'top', 'toast-container')
    //   return;
    // }
    const profileModal = this.modalCtrl.create(CustomerJobSearchPage, { searchDetails: '1' });
    profileModal.onDidDismiss(data => {
      console.log(data);
      //this.madalDismissData = JSON.stringify(data);
    });
    profileModal.present();
    // this.globalService.store('branchCode', this.branchCode);
  }

  filterItems(ev: any) {

    this.closedJobs = this.shipmentAllData;
    let val = ev.target.value;
    if (val == '' || val == undefined) {
      this.OpenJobListShipment();
    }
    console.log('val', val)
    if (val && val.trim() !== '') {
      this.shipmentAllDataFilterd = this.closedJobs.filter((item) => {
        this.flagDataAllData = false;
        this.flagDataFilterData = true;
        console.log('aaa', this.shipmentAllDataFilterd)

        for (const key in item) {
          if (item.hasOwnProperty(key)) {
            const element = item[key];
            if (String(element).toLowerCase().includes(val.toLowerCase())) {
              // console.log(item)
              return item;
            }
          }
        }
      });
    }
  }


  //   setFilteredItems() {

  //     this.shipmentAllData = this.shipmentAllData.filterItems(this.searchTerm);

  //   }

  //   filterItems(searchTerm){

  //     return this.shipmentAllData.filter((item) => {
  //          return item.name.toLowerCase().includes(searchTerm.toLowerCase());
  //      });

  //  }


  showSearch() {
    this.showSearchBar = true;
    this.searchbar.setFocus();
  }

  onCancel(ev) {

    //this.showSearchBar = false;
    //this.OpenJobListShipment();
    ev.target.value = '';
  }

  ionViewWillLeave() {
    this.showSearchBar = false;
  }

}
