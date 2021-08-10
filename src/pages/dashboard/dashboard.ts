// import { FindSalesActivityPage } from './../find-sales-activity/find-sales-activity';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, ModalController } from 'ionic-angular';
import { GlobalProvider } from '../../providers/global/global';
import { ConfigureParametersPage } from '../configure-parameters/configure-parameters';
import { FindSalesActivityPage } from '../find-sales-activity/find-sales-activity';
import { NewSalesActivityPage } from '../new-sales-activity/new-sales-activity';
import { NewSalesLeadPage } from '../new-sales-lead/new-sales-lead';
import { UpdateJobMilestonePage } from '../update-job-milestone/update-job-milestone';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {
  title: string;
  appBuildConfig: any;
  profileType;

  constructor(public navCtrl: NavController,
    public navParams: NavParams, public menu: MenuController,
    public globalService: GlobalProvider, private modalCtrl: ModalController,) {
    this.title = "Home";
  }

  ionViewDidLoad() {
    this.profileType = localStorage.getItem('profileType');
    console.log('******', this.profileType);
    console.log('ionViewDidLoad DashboardPage');
  }
  goToNewSalesActivity() {

    this.globalService.setRootPage(NewSalesActivityPage);
<<<<<<< HEAD
    // this.navCtrl.push(NewSalesActivityPage);

=======
>>>>>>> d8346a981fb89d047215dd8532d739ca1476828e
  }

  goToFindSalesActivityPage() {

    // this.globalService.setRootPage(FindSalesActivityPage);
    this.openModal();
  }

  openModal() {

    const profileModal = this.modalCtrl.create(FindSalesActivityPage, { searchDetails: '0' });
    profileModal.onDidDismiss(data => {
      console.log(data);

    });
    profileModal.present();

  }

  goToNewSalesLeadPage() {

    this.globalService.setRootPage(NewSalesLeadPage);
  }

  goToUpdateJobMilestonePage() {

    this.globalService.setRootPage(UpdateJobMilestonePage);

    // this.navCtrl.push(UpdateJobMilestonePage);
  }

  goToConfigureParams(){
    this.globalService.setRootPage(ConfigureParametersPage);
  }

}
