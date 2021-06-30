import { Injectable } from '@angular/core';
import { OneSignal } from '@ionic-native/onesignal';
import { GlobalProvider } from '../global/global';
import { Constants } from '../../constants';
import { HttpServiceProvider } from '../http-service/http-service';

// import { Notifications } from '../../pages/notifications/notifications';

/**
 * @name PushNotificationProvider
 * @author Sachin Semlety
 * @description
 * This Class is used for the Push Notifications of the App.
**/
@Injectable()
export class PushNotificationProvider {

  constructor(private oneSignal: OneSignal, public global: GlobalProvider, public http: HttpServiceProvider) {
    // console.log('Hello PushNotificationServiceProvider Provider');
  }

  Init() {
    this.oneSignal.startInit(Constants.APP_ID, Constants.GOOOGLE_PROJECT_NUMBER);

    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);

    this.oneSignal.handleNotificationReceived().subscribe(() => {
      // do something when notification is received
    });

    this.oneSignal.handleNotificationOpened().subscribe(() => {
      // do something when a notification is opened

      // this.global.routePage(Notifications)
    });

    // console.log(this.oneSignal.getPermissionSubscriptionState)

    this.oneSignal.endInit();

    // AND THIS METHOD RETURN YOUR DEVICES USER_ID

    this.oneSignal.getIds().then(identity => {
      console.log('identity ', identity);
      this.global.store('playerId', identity.userId)
    });
  }


  createNotification(item) {
    this.global.get('userDetails')
      .then(
        data => this.setDetails(this.global.handleJSON(data).Table[0].UserId, item),
        error => console.error(error)
      );
  }

  setDetails(userId, item) {
    this.global.get('playerId').
      then(
        playerId => this.setNotificationStatus(userId, item, playerId),
        error => console.error(error)
      );
  }

  setNotificationStatus(userId, item, playerId) {
    console.log('playerId : ', playerId);
    let obj = {
      "DeviceId": playerId,
      "JobNo": item.JobNo,
      "UserId": userId,
      "WoDetailNo": item.WODetailNo
    };
    this.http.POST(Constants.Corvi_Services.FollowUp, obj).then((res) => {
      console.log('notification success ', res);
      this.global.showToast('Job successfully followed, now you will receive notifications about this job');
    }, (error) => { this.global.showToast('Something went wrong') })
  }

  getNotification_data_binary(playerId, title, msg) {
    return {
      "app_id": Constants.APP_ID,
      "headings": {
        "en": title
      },
      "contents": {
        "en": msg
      },
      "include_player_ids": [
        playerId
      ]
    }
  }


}
