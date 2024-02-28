/**
 * @author Sachin Semlety
 * @email sachin.semlety@kalelogistics.in
 * @create date 2018-07-31 11:46:38
 * @modify date 2018-07-31 11:46:38
 * @desc [description]
*/
import { Injectable } from '@angular/core';
// import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import "rxjs/add/observable/throw";
import 'rxjs/add/operator/finally';
import { Http, RequestMethod, RequestOptionsArgs, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { LoadingController, AlertController, ToastController } from 'ionic-angular';
// import * as xml2js from 'xml2js';
import { Constants } from '../../constants';
import { GlobalProvider } from '../global/global';
import { HTTP } from '@ionic-native/http';
import { SpinnerDialog } from '@ionic-native/spinner-dialog';

import * as xml2js from 'xml2js';

@Injectable()
export class HttpServiceProvider {

  BaseURL = Constants.CORVI_Base_URL;

  constructor(private nativeHttp: HTTP, public loadingCtrl: LoadingController, public alertCtrl: AlertController, public toastCtrl: ToastController, public globalService: GlobalProvider, public http: Http, private spinnerDialog: SpinnerDialog) {
  }

  public webPOST(service_name: string, requestMethod: RequestMethod, body?: any) {
    console.log('I am from WebPOST');
    let connectionStatus = navigator.onLine ? 'online' : 'offline';
    return new Promise((resolve, reject) => {

      // We're using Angular Http provider to request the data,
      // then on the response it'll map the JSON data to a parsed JS object.
      // Next we process the data and resolve the promise with the new data.

      if (connectionStatus == 'online') {

        this.globalService.get('baseURL')
          .then((baseURL) => {
            //show the loader before starting the request
            let loader = this.showLoader();
            this.getToken().then((token) => {
              let requestOptionArgs: RequestOptionsArgs;
              requestOptionArgs = {
                url: baseURL + service_name,
                // url: Constants.CORVI_Base_URL + service_name,
                method: requestMethod,
                body: body,
                headers: new Headers({
                  "Content-Type": "application/json",
                  "Authorization": "Bearer " + token,
                  //add any extra custom headers you need
                })
              }
              this.http.request(service_name, requestOptionArgs)
                .map(res => res.json())
                .subscribe(data => {
                  console.log("Data ", data)

                  loader.dismiss().then(() => resolve(this.globalService.handleJSON(data)));

                }, (error) => {
                  // Dismiss the loader and return error back.
                  //console.log("Error Made" + JSON.stringify(error.json()));
                  // let err = error.json();
                  if (error.hasOwnProperty('error') || error.hasOwnProperty('statusText')) {
                    this.showErrorToast(error.status + ' ' + error.statusText)
                  }
                  loader.dismiss().then(() => reject(error));

                });
            })
          }),
          error => console.error(error);

      } else if (connectionStatus == "offline") {
        this.showErrorMessage('No Internet Connection');
        reject('');
      }
    });

  }



  public nativePost(service_name: string, body: any) {
    let connectionStatus = navigator.onLine ? 'online' : 'offline';
    return new Promise((resolve, reject) => {
      // We're using Angular Http provider to request the data,
      // then on the response it'll map the JSON data to a parsed JS object.
      // Next we process the data and resolve the promise with the new data
      //show the loader before starting the request
      if (connectionStatus == 'online') {
        this.spinnerDialog.show(null, null, true);
        this.globalService.get('baseURL')
          .then((baseURL) => {
            // let url = this.BaseURL + service_name

            let url = baseURL + service_name
            

            this.getToken().then((token) => {
              this.nativeHttp.setDataSerializer('json');

              // console.log(this.nativeHttp.getHeaders(url));
              let headers = {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
                //add any extra custom headers you need
              }
              this.nativeHttp.post(url, body, headers)
                .then(res => {
                  console.log(res);
                  this.spinnerDialog.hide();
                  resolve(this.globalService.handleJSON(res.data))
                  // loader.dismiss().then(() => resolve(this.globalService.handleJSON(res.data)));
                }, (error) => {
                  // Dismiss the loader and return error back.
                  //console.log("Error Made" + JSON.stringify(error.json()));
                  let err = JSON.parse(error.error);
                  if (err.hasOwnProperty('error') || error.hasOwnProperty('statusText')) {
                    this.showErrorToast(error.status + ' ' + err.error)
                  }
                  this.spinnerDialog.hide();
                  reject(error)
                  // loader.dismiss().then(() => reject(error));
                }).catch(error => {
                  this.spinnerDialog.hide();
                  reject(error)
                  // loader.dismiss().then(() => reject(error));
                });
            })
          }),
          error => console.error(error);
      } else if (connectionStatus == "offline") {
        this.spinnerDialog.hide();
        this.showErrorMessage('No Internet Connection');
        reject('');
      }
    });
  }

  public RequestToCreateNotification(url: string, body: any) {
    let connectionStatus = navigator.onLine ? 'online' : 'offline';
    return new Promise((resolve, reject) => {
      // We're using Angular Http provider to request the data,
      // then on the response it'll map the JSON data to a parsed JS object.
      // Next we process the data and resolve the promise with the new data
      //show the loader before starting the request
      if (connectionStatus == 'online') {
        let loader = this.showLoader();

        this.nativeHttp.setDataSerializer('json');
        let headers = {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + Constants.REST_API_KEY
          //add any extra custom headers you need
        }
        this.nativeHttp.post(url, body, headers)
          .then(res => {
            console.log(res);
            loader.dismiss().then(() => resolve(this.globalService.handleJSON(res.data)));
          }, (error) => {

            loader.dismiss().then(() => reject(error));
          }).catch(error => {
            loader.dismiss().then(() => reject(error));
          });
      } else if (connectionStatus == "offline") {
        this.showErrorMessage('No Internet Connection');
        reject('');
      }
    });
  }




  public GET(service_name: string) {
    return this.getHttpRequest(service_name, RequestMethod.Get);
  }

  public PUT(service_name: string, body?: any) {
    return this.getHttpRequest(service_name, RequestMethod.Put, body);
  }

  public POST(service_name: string, body?: any) {
    return this.getHttpRequest(service_name, RequestMethod.Post, body);
  }
  public ONESIGNAL_POST(url: string, body?: any) {
    if (this.globalService.isCordovaAvailable()) {
      return this.RequestToCreateNotification(url, body);
    }
  }

  // for mobiles
  public getHttpRequest(url: string, requestMethod: RequestMethod, body?: any) {
    if (this.globalService.isCordovaAvailable()) {
      return this.nativePost(url, body);
      // return this.webPOST(url, requestMethod, body);
    } else {
      return this.webPOST(url, requestMethod, body);
    }
  }



  //new....
  public getHttpRequest1(service_name: string, requestMethod: RequestMethod, body?: any) {

    let connectionStatus = navigator.onLine ? 'online' : 'offline';
    return new Promise((resolve, reject) => {
      // We're using Angular Http provider to request the data,
      // then on the response it'll map the JSON data to a parsed JS object.
      // Next we process the data and resolve the promise with the new data.
      if (connectionStatus == 'online') {
        let requestOptionArgs: RequestOptionsArgs;
        requestOptionArgs = {
          url: Constants.CORVI_Base_URL + service_name,
          method: requestMethod,
          body: body,
          headers: new Headers({
            "Content-Type": "application/json",
            "access-control-allow-methods":
            'GET, POST', "access-control-allow-origin": "*",
            "Access-Control-Allow-Credentials": 'true',
            "Authorization": "Bearer "
            //add any extra custom headers you need
          })
        }

        //show the loader before starting the request
        let loader = this.showLoader();

        this.http.request(service_name, requestOptionArgs)
          .map(res => res.json())
          .subscribe(data => {
            //console.log("Data ", data)
            let resolvedDataToJson;
            // we've got back the raw data, now generate the core schedule data
            // and save the data for later reference

            // Dismiss the loader and return response back.

            xml2js.parseString(data.d, function (err, result) {
              console.dir(result); // Prints JSON object!
              resolvedDataToJson = result;
            });

            loader.dismiss().then(() => resolve(resolvedDataToJson));

          }, (error) => {
            // Dismiss the loader and return error back.
            //console.log("Error Made" + JSON.stringify(error.json()));
            let err = error.json();
            if (err.hasOwnProperty('Message')) {
              console.log(err.Message)
              this.showErrorToast(err.Message)
            }
            loader.dismiss().then(() => reject(error));

          });
      } else if (connectionStatus == "offline") {
        this.showErrorMessage('No Internet Connection');
        reject('');
      }
    });

  }

  public getHttpPostRequest(url: string, body?: any) {
    return this.getHttpRequest1(url, RequestMethod.Post, body);
    // return this.nativePost(url, body);
  }

  private showLoader() {
    let loader = this.loadingCtrl.create({
      content: "Loading...",
      spinner: 'ios'
    });

    loader.present();

    return loader;
  }

  showErrorMessage(msg) {
    let alert = this.alertCtrl.create({
      subTitle: msg,
      buttons: ['OK']
    });
    alert.present();
  }

  showErrorToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      //console.log('Dismissed toast');
    });

    toast.present();
  }

  getToken(): Promise<any> {
    return this.globalService.get('login_resp')
      .then(
        data => this.fetchToken(data['access_token']),
        error => console.error(error)
      );
  }

  fetchToken(token) {
    return new Promise((resolve, reject) => {
      (token != undefined) ? resolve(token) : resolve('');
    });
  }

}
