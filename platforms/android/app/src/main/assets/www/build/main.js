webpackJsonp([1],{

/***/ 10:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Constants; });
var Constants = /** @class */ (function () {
    function Constants() {
    }
    Object.defineProperty(Constants, "CORVI_Base_URL", {
        // public static get CORVI_Base_URL(): string { return " http://113.193.225.56:8080/CorviMobileAPI/api/"; };
        // public static get CORVI_Base_URL(): string { return "http://10.22.2.31:8080/CorviMobileAPI/api/"; };
        // public static get CORVI_Base_URL(): string { return "http://104.211.244.239/MobileApi/MobileApi/"; }
        get: function () { return "https://lmsinv.balmerlawrie.co.in/Mobapi/MobileAPI/"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "CORVI_PDF_URL", {
        get: function () { return "http://52.76.76.33/demo/"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "SECRET_KEY", {
        get: function () { return "0123456789abcdef"; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Constants, "MENU_PAGES_ARRAY", {
        get: function () {
            return [
                { title: 'Home', component: 'DashboardPage', active: true, icon: 'home' },
                { title: 'New Sales Activity', component: 'NewSalesActivityPage', active: false, icon: 'quote' },
                { title: 'View Reporting User Activity', component: 'ReportingUserActivityPage', active: false, icon: 'quote' },
                { title: 'Search Sales Activity', component: 'SearchSalesActivityPage', active: false, icon: 'open' },
                { title: 'New Sales Lead', component: 'NewSalesLeadPage', active: false, icon: 'close' },
                { title: 'Update Job Milestone', component: 'UpdateJobMilestonePage', active: false, icon: 'print' },
                { title: 'Configure Parameters', component: 'ConfigureParametersPage', active: false, icon: 'clipboard' },
            ];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "MENU_PAGES_ARRAY_MANAGER", {
        get: function () {
            return [
                { title: 'Home', component: 'DashboardPage', active: true, icon: 'home' },
                { title: 'New Sales Activity', component: 'NewSalesActivityPage', active: false, icon: 'quote' },
                { title: 'View Reporting User Activity', component: 'ReportingUserActivityPage', active: false, icon: 'quote' },
                { title: 'Search Sales Activity', component: 'SearchSalesActivityPage', active: false, icon: 'open' },
                { title: 'New Sales Lead', component: 'NewSalesLeadPage', active: false, icon: 'close' },
                { title: 'Update Job Milestone', component: 'UpdateJobMilestonePage', active: false, icon: 'print' },
                { title: 'Configure Parameters', component: 'ConfigureParametersPage', active: false, icon: 'clipboard' },
            ];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "MENU_PAGES_ARRAY_CUST", {
        get: function () {
            return [
                { title: 'Home', component: 'DashboardPage', active: true, icon: 'home' },
                { title: 'Shipment Status', component: 'ShipmentStatusPage', active: false, icon: 'quote' },
                { title: 'Shipment Invoice', component: 'ShipmentInvoicePage', active: false, icon: 'quote' },
                { title: 'Configure Parameters', component: 'CustomerSettingsPage', active: false, icon: 'clipboard' },
            ];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "MIME_TYPE", {
        get: function () { return "application/pdf"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "APP_ID", {
        // One Signal and FireBase Credentials
        get: function () { return "dc24e440-2ee0-4a29-9f29-b20524993970"; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Constants, "GOOOGLE_PROJECT_NUMBER", {
        get: function () { return "259880603802"; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Constants, "REST_API_KEY", {
        get: function () { return "NDdjMTk2ODAtODYyNC00OWJjLTgyNTAtM2RjNWY4NDZiOWMx"; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Constants, "ONE_SIGNAL_NOTIFACTION_URL", {
        get: function () { return "https://onesignal.com/api/v1/notifications?app_id=" + this.APP_ID; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Constants, "BAR_CHART_OPTIONS", {
        get: function () {
            return {
                scales: {
                    yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    ;
    Constants.MENU = {
        DEFAULT: 'menu-components',
        MATERIAL: 'menu-material',
        AVATAR: 'menu-avatar',
    };
    Constants.SMTP_Credentails = {
        "Host": "smtp25.elasticemail.com",
        "Username": "kalelogisticsandy@gmail.com",
        "Password": "60f0fd9e-84b6-4baa-9983-db9a021e69f7",
        "From": "kalelogisticsandy@gmail.com"
    };
    // All Services names includes in this below object
    Constants.Corvi_Services = {
        "Login": "Login",
        "UserDetails": "LoginDetails",
        "ForgetPassword": "ForgotPassword",
        "GetVendorMasterList": "GetVendorMasterList",
        "GetSearchMilestoneList": "GetSearchMilestoneList",
        "GetSearchJobList": "GetSearchJobList",
        "SalesActivitySave": "SalesActivitySave",
        "VendorMasterSaveForHHT": "VendorMasterSave",
        "GetLocationMasterList": "GetLocationMasterList",
        "UpdateJobMilestone": "UpdateJobMilestone",
        "UserConfigurationSave": "UserConfigurationSave",
        "OpenJobList": "OpenJobList",
        "SearchJobList": "SearchJobList",
        "GetSearchSalesActivityReportingToList": "GetSearchSalesActivityReportingToList",
        "GetSearchInvoiceList": "GetSearchInvoiceList",
        "InvoiceList": "InvoiceList",
        "GetCustomerSearchJobList": "GetCustomerSearchJobList",
        "GetSearchSalesActivityList": "GetSearchSalesActivityList",
        "GetSalesActivityById": "GetSalesActivityById",
        "SendMailSalesActivityToReporting": "SendMailSalesActivityToReporting",
        "GetJobDetailsById": "GetJobDetailsById",
        "TempResetPassword": "TempResetPassword",
        "RegisterNowButton": "RegisterNowButton",
        "RegisterNowUserProfile": "RegisterNowUserProfile",
        "OpenJobs": {
            "Get_OpenJobList": "OpenJobList"
        },
        "ClosedJobs": {
            "Get_CloseJobList": "CloseJobList"
        },
        "JobDetails": {
            "JobData": "JobData?",
            "WoDetailNo": "WoDetailNo="
        },
        "Quotation": {
            "Get_QuatationList": "QuatationList",
            "Get_Quatation_Details": "QuatationData?",
            "QuatationId": "QuatationId="
        },
        "Invoices": {
            "Get_InvoiceList": "InvoiceList"
        },
        "InvoicesDetails": {
            "Get_Invoice_Details": "InvoiceData?",
            "DetailNo": "DetailNo="
        },
        "ConsolidateInvoiceDetails": {
            "UserId": "ConsolidateInvoiceData?UserId=",
            "DetailNo": "&DetailNo="
        },
        "FollowUp": "FollowUp"
    };
    // static get ONE_SIGNAL_BASE_URL(): string { return "https://onesignal.com/api/v1/notifications" };
    // Chart Constants
    // Pie chart
    Constants.PIE_CHART_DATA = {
        labels: ['Quotation', 'Open Jobs', 'Closed Jobs', 'Invoices'],
        datasets: [
            {
                data: [0, 0, 0, 0],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
            }
        ]
    };
    // Bar chart
    Constants.BAR_CHART_DATA = {
        labels: ['Quotation', 'Open Jobs', 'Closed Jobs', 'Invoices'],
        datasets: [{
                label: '# of Entities',
                data: [0, 0, 0, 0],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
            }]
    };
    Constants.SlidesJSONArray = [{
            title: 'Open Quotation\'s',
            imageUrl: 'assets/img/lists/wishlist-1.jpg',
            count: 0,
            page: 'QuotationPage',
            bgColor: '#ff6384'
        },
        {
            title: 'Open Job\'s',
            imageUrl: 'assets/img/lists/wishlist-2.jpg',
            count: 0,
            page: 'OpenJobsPage',
            bgColor: '#36a2eb'
        },
        {
            title: 'Closed Job\'s',
            imageUrl: 'assets/img/lists/wishlist-3.jpg',
            count: 0,
            page: 'ClosedJobsPage',
            bgColor: '#ffce56'
        },
        {
            title: 'Invoice\'s',
            imageUrl: 'assets/img/lists/wishlist-4.jpg',
            count: 0,
            page: 'InvoicesPage',
            bgColor: '#e5e5e5'
        }];
    return Constants;
}());

//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__ = __webpack_require__(585);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__ = __webpack_require__(588);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__(591);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_finally__ = __webpack_require__(593);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_finally___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_finally__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__constants__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__global_global__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_http__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_spinner_dialog__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_xml2js__ = __webpack_require__(601);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_xml2js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_xml2js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * @author Sachin Semlety
 * @email sachin.semlety@kalelogistics.in
 * @create date 2018-07-31 11:46:38
 * @modify date 2018-07-31 11:46:38
 * @desc [description]
*/

// import { Observable } from "rxjs/Observable";








// import * as xml2js from 'xml2js';





var HttpServiceProvider = /** @class */ (function () {
    function HttpServiceProvider(nativeHttp, loadingCtrl, alertCtrl, toastCtrl, globalService, http, spinnerDialog) {
        this.nativeHttp = nativeHttp;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.globalService = globalService;
        this.http = http;
        this.spinnerDialog = spinnerDialog;
        this.BaseURL = __WEBPACK_IMPORTED_MODULE_8__constants__["a" /* Constants */].CORVI_Base_URL;
    }
    HttpServiceProvider.prototype.webPOST = function (service_name, requestMethod, body) {
        var _this = this;
        console.log('I am from WebPOST');
        var connectionStatus = navigator.onLine ? 'online' : 'offline';
        return new Promise(function (resolve, reject) {
            // We're using Angular Http provider to request the data,
            // then on the response it'll map the JSON data to a parsed JS object.
            // Next we process the data and resolve the promise with the new data.
            if (connectionStatus == 'online') {
                _this.globalService.get('baseURL')
                    .then(function (baseURL) {
                    //show the loader before starting the request
                    var loader = _this.showLoader();
                    _this.getToken().then(function (token) {
                        var requestOptionArgs;
                        requestOptionArgs = {
                            url: baseURL + service_name,
                            // url: Constants.CORVI_Base_URL + service_name,
                            method: requestMethod,
                            body: body,
                            headers: new __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* Headers */]({
                                "Content-Type": "application/json",
                                "Authorization": "Bearer " + token,
                            })
                        };
                        _this.http.request(service_name, requestOptionArgs)
                            .map(function (res) { return res.json(); })
                            .subscribe(function (data) {
                            console.log("Data ", data);
                            loader.dismiss().then(function () { return resolve(_this.globalService.handleJSON(data)); });
                        }, function (error) {
                            // Dismiss the loader and return error back.
                            //console.log("Error Made" + JSON.stringify(error.json()));
                            // let err = error.json();
                            if (error.hasOwnProperty('error') || error.hasOwnProperty('statusText')) {
                                _this.showErrorToast(error.status + ' ' + error.statusText);
                            }
                            loader.dismiss().then(function () { return reject(error); });
                        });
                    });
                }),
                    function (error) { return console.error(error); };
            }
            else if (connectionStatus == "offline") {
                _this.showErrorMessage('No Internet Connection');
                reject('');
            }
        });
    };
    HttpServiceProvider.prototype.nativePost = function (service_name, body) {
        var _this = this;
        var connectionStatus = navigator.onLine ? 'online' : 'offline';
        return new Promise(function (resolve, reject) {
            // We're using Angular Http provider to request the data,
            // then on the response it'll map the JSON data to a parsed JS object.
            // Next we process the data and resolve the promise with the new data
            //show the loader before starting the request
            if (connectionStatus == 'online') {
                _this.spinnerDialog.show(null, null, true);
                _this.globalService.get('baseURL')
                    .then(function (baseURL) {
                    // let url = this.BaseURL + service_name
                    var url = baseURL + service_name;
                    _this.getToken().then(function (token) {
                        _this.nativeHttp.setDataSerializer('json');
                        // console.log(this.nativeHttp.getHeaders(url));
                        var headers = {
                            "Content-Type": "application/json",
                            "Authorization": "Bearer " + token
                            //add any extra custom headers you need
                        };
                        _this.nativeHttp.post(url, body, headers)
                            .then(function (res) {
                            console.log(res);
                            _this.spinnerDialog.hide();
                            resolve(_this.globalService.handleJSON(res.data));
                            // loader.dismiss().then(() => resolve(this.globalService.handleJSON(res.data)));
                        }, function (error) {
                            // Dismiss the loader and return error back.
                            //console.log("Error Made" + JSON.stringify(error.json()));
                            var err = JSON.parse(error.error);
                            if (err.hasOwnProperty('error') || error.hasOwnProperty('statusText')) {
                                _this.showErrorToast(error.status + ' ' + err.error);
                            }
                            _this.spinnerDialog.hide();
                            reject(error);
                            // loader.dismiss().then(() => reject(error));
                        }).catch(function (error) {
                            _this.spinnerDialog.hide();
                            reject(error);
                            // loader.dismiss().then(() => reject(error));
                        });
                    });
                }),
                    function (error) { return console.error(error); };
            }
            else if (connectionStatus == "offline") {
                _this.spinnerDialog.hide();
                _this.showErrorMessage('No Internet Connection');
                reject('');
            }
        });
    };
    HttpServiceProvider.prototype.RequestToCreateNotification = function (url, body) {
        var _this = this;
        var connectionStatus = navigator.onLine ? 'online' : 'offline';
        return new Promise(function (resolve, reject) {
            // We're using Angular Http provider to request the data,
            // then on the response it'll map the JSON data to a parsed JS object.
            // Next we process the data and resolve the promise with the new data
            //show the loader before starting the request
            if (connectionStatus == 'online') {
                var loader_1 = _this.showLoader();
                _this.nativeHttp.setDataSerializer('json');
                var headers = {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + __WEBPACK_IMPORTED_MODULE_8__constants__["a" /* Constants */].REST_API_KEY
                    //add any extra custom headers you need
                };
                _this.nativeHttp.post(url, body, headers)
                    .then(function (res) {
                    console.log(res);
                    loader_1.dismiss().then(function () { return resolve(_this.globalService.handleJSON(res.data)); });
                }, function (error) {
                    loader_1.dismiss().then(function () { return reject(error); });
                }).catch(function (error) {
                    loader_1.dismiss().then(function () { return reject(error); });
                });
            }
            else if (connectionStatus == "offline") {
                _this.showErrorMessage('No Internet Connection');
                reject('');
            }
        });
    };
    HttpServiceProvider.prototype.GET = function (service_name) {
        return this.getHttpRequest(service_name, __WEBPACK_IMPORTED_MODULE_6__angular_http__["d" /* RequestMethod */].Get);
    };
    HttpServiceProvider.prototype.PUT = function (service_name, body) {
        return this.getHttpRequest(service_name, __WEBPACK_IMPORTED_MODULE_6__angular_http__["d" /* RequestMethod */].Put, body);
    };
    HttpServiceProvider.prototype.POST = function (service_name, body) {
        return this.getHttpRequest(service_name, __WEBPACK_IMPORTED_MODULE_6__angular_http__["d" /* RequestMethod */].Post, body);
    };
    HttpServiceProvider.prototype.ONESIGNAL_POST = function (url, body) {
        if (this.globalService.isCordovaAvailable()) {
            return this.RequestToCreateNotification(url, body);
        }
    };
    // for mobiles
    HttpServiceProvider.prototype.getHttpRequest = function (url, requestMethod, body) {
        if (this.globalService.isCordovaAvailable()) {
            return this.nativePost(url, body);
            // return this.webPOST(url, requestMethod, body);
        }
        else {
            return this.webPOST(url, requestMethod, body);
        }
    };
    //new....
    HttpServiceProvider.prototype.getHttpRequest1 = function (service_name, requestMethod, body) {
        var _this = this;
        var connectionStatus = navigator.onLine ? 'online' : 'offline';
        return new Promise(function (resolve, reject) {
            // We're using Angular Http provider to request the data,
            // then on the response it'll map the JSON data to a parsed JS object.
            // Next we process the data and resolve the promise with the new data.
            if (connectionStatus == 'online') {
                var requestOptionArgs = void 0;
                requestOptionArgs = {
                    url: __WEBPACK_IMPORTED_MODULE_8__constants__["a" /* Constants */].CORVI_Base_URL + service_name,
                    method: requestMethod,
                    body: body,
                    headers: new __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* Headers */]({
                        "Content-Type": "application/json",
                        "access-control-allow-methods": 'GET, POST', "access-control-allow-origin": "*",
                        "Access-Control-Allow-Credentials": 'true',
                        "Authorization": "Bearer "
                        //add any extra custom headers you need
                    })
                };
                //show the loader before starting the request
                var loader_2 = _this.showLoader();
                _this.http.request(service_name, requestOptionArgs)
                    .map(function (res) { return res.json(); })
                    .subscribe(function (data) {
                    //console.log("Data ", data)
                    var resolvedDataToJson;
                    // we've got back the raw data, now generate the core schedule data
                    // and save the data for later reference
                    // Dismiss the loader and return response back.
                    __WEBPACK_IMPORTED_MODULE_12_xml2js__["parseString"](data.d, function (err, result) {
                        console.dir(result); // Prints JSON object!
                        resolvedDataToJson = result;
                    });
                    loader_2.dismiss().then(function () { return resolve(resolvedDataToJson); });
                }, function (error) {
                    // Dismiss the loader and return error back.
                    //console.log("Error Made" + JSON.stringify(error.json()));
                    var err = error.json();
                    if (err.hasOwnProperty('Message')) {
                        console.log(err.Message);
                        _this.showErrorToast(err.Message);
                    }
                    loader_2.dismiss().then(function () { return reject(error); });
                });
            }
            else if (connectionStatus == "offline") {
                _this.showErrorMessage('No Internet Connection');
                reject('');
            }
        });
    };
    HttpServiceProvider.prototype.getHttpPostRequest = function (url, body) {
        return this.getHttpRequest1(url, __WEBPACK_IMPORTED_MODULE_6__angular_http__["d" /* RequestMethod */].Post, body);
        // return this.nativePost(url, body);
    };
    HttpServiceProvider.prototype.showLoader = function () {
        var loader = this.loadingCtrl.create({
            content: "Loading...",
            spinner: 'ios'
        });
        loader.present();
        return loader;
    };
    HttpServiceProvider.prototype.showErrorMessage = function (msg) {
        var alert = this.alertCtrl.create({
            subTitle: msg,
            buttons: ['OK']
        });
        alert.present();
    };
    HttpServiceProvider.prototype.showErrorToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            //console.log('Dismissed toast');
        });
        toast.present();
    };
    HttpServiceProvider.prototype.getToken = function () {
        var _this = this;
        return this.globalService.get('login_resp')
            .then(function (data) { return _this.fetchToken(data['access_token']); }, function (error) { return console.error(error); });
    };
    HttpServiceProvider.prototype.fetchToken = function (token) {
        return new Promise(function (resolve, reject) {
            (token != undefined) ? resolve(token) : resolve('');
        });
    };
    HttpServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_10__ionic_native_http__["a" /* HTTP */], __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["s" /* ToastController */], __WEBPACK_IMPORTED_MODULE_9__global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_11__ionic_native_spinner_dialog__["a" /* SpinnerDialog */]])
    ], HttpServiceProvider);
    return HttpServiceProvider;
}());

//# sourceMappingURL=http-service.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_http_service_http_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__quotation_quotation__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__open_jobs_open_jobs__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__closed_jobs_closed_jobs__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__invoices_invoices__ = __webpack_require__(149);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * @author Sachin Semlety
 * @email sachin.semlety@kalelogistics.in
 * @create date 2018-08-10 11:03:35
 * @modify date 2018-08-10 11:03:35
 * @desc [description]
*/











var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, globalService, popoverCtrl, menu, http, event) {
        this.navCtrl = navCtrl;
        this.globalService = globalService;
        this.popoverCtrl = popoverCtrl;
        this.menu = menu;
        this.http = http;
        this.event = event;
        // @ViewChild(Slides) slides: Slides;
        this.slidesArray = __WEBPACK_IMPORTED_MODULE_4__constants__["a" /* Constants */].SlidesJSONArray;
        this.QuotationPage = __WEBPACK_IMPORTED_MODULE_7__quotation_quotation__["a" /* QuotationPage */];
        this.OpenJobsPage = __WEBPACK_IMPORTED_MODULE_8__open_jobs_open_jobs__["a" /* OpenJobsPage */];
        this.ClosedJobsPage = __WEBPACK_IMPORTED_MODULE_9__closed_jobs_closed_jobs__["a" /* ClosedJobsPage */];
        this.InvoicesPage = __WEBPACK_IMPORTED_MODULE_10__invoices_invoices__["a" /* InvoicesPage */];
        this.tabsCount = {
            QuotationCount: 0,
            OpenJobsCount: 0,
            ClosedJobsCount: 0,
            InvoicesCount: 0,
            EnquiryCount: 0
        };
        this.title = "Dasheeboard";
        this.selectedSegment = "Enquiry";
        this.drawerOptions = {
            handleHeight: 50,
            thresholdFromBottom: 200,
            thresholdFromTop: 200,
            bounceBack: true
        };
        this.menu.swipeEnable(true);
        this.user = new __WEBPACK_IMPORTED_MODULE_6__login_login__["b" /* User */]();
        this.initSlideTabs();
    }
    HomePage.prototype.ngAfterViewInit = function () {
        setTimeout(function () {
            // this.dashboardPageSetup();
        });
    };
    HomePage.prototype.initSlideTabs = function () {
        this.slides = [
            {
                id: "Enquiry",
            },
            {
                id: "Quotation",
            },
            {
                id: "Invoice",
            },
            {
                id: "Jobs",
            },
            {
                id: "Milestones",
            }
        ];
    };
    HomePage.prototype.dashboardPageSetup = function () {
        var _this = this;
        this.globalService.get('userDetails').then(function (userDetails) {
            _this.setUpDashboardCount(userDetails);
        });
    };
    HomePage.prototype.setUpDashboardCount = function (data, refresher) {
        var DashboardCount = this.globalService.handleJSON(data).Table1[0];
        this.slidesArray[0].count = DashboardCount.QuotationCount;
        this.slidesArray[1].count = DashboardCount.OpenJobCount;
        this.slidesArray[2].count = DashboardCount.CloseJobCount;
        this.slidesArray[3].count = DashboardCount.InvoiceCount;
        this.pieChart = this.getPieChart(DashboardCount);
        this.barChart = this.getBarChart(DashboardCount);
        this.showView = true;
        refresher != undefined && refresher.complete();
    };
    HomePage.prototype.getPieChart = function (DashboardCount) {
        __WEBPACK_IMPORTED_MODULE_4__constants__["a" /* Constants */].PIE_CHART_DATA.datasets[0].data = [DashboardCount.QuotationCount, DashboardCount.OpenJobCount, DashboardCount.CloseJobCount, DashboardCount.InvoiceCount];
        return this.getChart(this.pieCanvas.nativeElement, 'pie', __WEBPACK_IMPORTED_MODULE_4__constants__["a" /* Constants */].PIE_CHART_DATA);
    };
    HomePage.prototype.getBarChart = function (DashboardCount) {
        __WEBPACK_IMPORTED_MODULE_4__constants__["a" /* Constants */].BAR_CHART_DATA.datasets[0].data = [DashboardCount.QuotationCount, DashboardCount.OpenJobCount, DashboardCount.CloseJobCount, DashboardCount.InvoiceCount];
        return this.getChart(this.barCanvas.nativeElement, 'bar', __WEBPACK_IMPORTED_MODULE_4__constants__["a" /* Constants */].BAR_CHART_DATA, __WEBPACK_IMPORTED_MODULE_4__constants__["a" /* Constants */].BAR_CHART_OPTIONS);
    };
    HomePage.prototype.getChart = function (context, chartType, data, options) {
        return new __WEBPACK_IMPORTED_MODULE_2_chart_js___default.a(context, {
            data: data,
            options: options,
            type: chartType,
        });
    };
    HomePage.prototype.viewDetails = function (page) {
        this.globalService.routePageWithData(page, { 'tabsDisabled': true });
    };
    HomePage.prototype.setDetails = function (UUID, refresher) {
        var _this = this;
        this.globalService.get('userName')
            .then(function (userId) { return _this.user.UserId = userId; }, function (error) { return console.error(error); });
        this.globalService.get('password')
            .then(function (pwd) { return _this.user.Password = pwd; }, function (error) { return console.error(error); });
        this.user.UserId = UUID;
        this.http.POST(__WEBPACK_IMPORTED_MODULE_4__constants__["a" /* Constants */].Corvi_Services.UserDetails, this.user).then(function (userDetailsResp) {
            _this.globalService.publishEventwithData('app:userDetails', userDetailsResp);
            _this.setUpDashboardCount(userDetailsResp, refresher);
        }, function (err) {
            refresher != undefined && refresher.complete();
            console.log('error Login ', err);
        });
    };
    HomePage.prototype.doRefresh = function (refresher) {
        this.fetchDashboardDetails(refresher);
    };
    HomePage.prototype.fetchDashboardDetails = function (refresher) {
        var _this = this;
        this.globalService.get('playerId')
            .then(function (UUID) { return _this.setDetails(UUID, refresher); }, function (error) { return console.error(error); });
    };
    HomePage.prototype.onSegmentChanged = function (segmentButton) {
        // console.log("Segment changed to", segmentButton.value);
        var selectedIndex = this.slides.findIndex(function (slide) {
            return slide.id === segmentButton.value;
        });
        this.slider.slideTo(selectedIndex);
    };
    HomePage.prototype.onSlideChanged = function (slider) {
        // console.log('Slide changed');
        var currentSlide = this.slides[slider.getActiveIndex()];
        if (currentSlide != undefined) {
            this.selectedSegment = currentSlide.id;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('pieCanvas'),
        __metadata("design:type", Object)
    ], HomePage.prototype, "pieCanvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('barCanvas'),
        __metadata("design:type", Object)
    ], HomePage.prototype, "barCanvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('mySlider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* Slides */])
    ], HomePage.prototype, "slider", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\MobileApp\corviBL\corviBL\src\pages\_home\home.html"*/'<!-- <Corvi-header [title]="title"></Corvi-header> -->\n<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title id="Dashboard" center text-center>\n      {{title}}\n    </ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only >\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  <ion-toolbar no-border-top mode=\'md\'>\n    <ion-segment mode=\'md\' [(ngModel)]="selectedSegment" (ionChange)="onSegmentChanged($event)">\n      <ion-segment-button value="Enquiry" color="secondary">\n        Enquiry\n      </ion-segment-button>\n      <ion-segment-button value="Quotation">\n        Quotation\n      </ion-segment-button>\n      <ion-segment-button value="Invoice">\n        Invoice\n      </ion-segment-button>\n\n      <ion-segment-button value="Jobs">\n        Jobs\n      </ion-segment-button>\n      <ion-segment-button value="Milestones">\n        Milestones\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n<ion-content class="pop-in">\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <page-home-detail></page-home-detail>\n  <!-- <ion-slides *ngIf="slides && slides.length" #mySlider (ionSlideDidChange)="onSlideChanged($event)">\n    <ion-slide>\n      <page-home-detail></page-home-detail>\n\n    </ion-slide>\n\n    <ion-slide>\n      <page-home-detail></page-home-detail>\n    </ion-slide>\n\n    <ion-slide>\n      <page-home-detail></page-home-detail>\n\n    </ion-slide>\n\n    <ion-slide>\n      <page-home-detail></page-home-detail>\n\n    </ion-slide>\n\n    <ion-slide>\n      <page-home-detail></page-home-detail>\n\n    </ion-slide>\n  </ion-slides> -->\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n  <!-- </div> -->\n</ion-content>\n'/*ion-inline-end:"D:\MobileApp\corviBL\corviBL\src\pages\_home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_http_service_http_service__["a" /* HttpServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnquiryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_global__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detail_enquiry_cargo_detail__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * @author Sachin Semlety
 * @email sachin.semlety@kalelogistics.in
 * @create date 2019-08-05 17:33:33
 * @modify date 2019-08-05 17:33:33
 * @desc [description]
 */





var EnquiryPage = /** @class */ (function () {
    function EnquiryPage(navCtrl, navParams, globalService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.globalService = globalService;
        this.title = "ENQUIRY FORM";
        this.showSearchBar = false;
    }
    EnquiryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EnquiryPage');
    };
    EnquiryPage.prototype.goToCargoDetailPage = function () {
        this.globalService.routePageWithData(__WEBPACK_IMPORTED_MODULE_3__detail_enquiry_cargo_detail__["a" /* EnquiryCargoDetailPage */], {});
    };
    EnquiryPage.prototype.goTologinPage = function () {
        this.globalService.routePage(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
    };
    EnquiryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-enquiry',template:/*ion-inline-start:"D:\MobileApp\corviBL\corviBL\src\pages\enquiry\enquiry.html"*/'<Corvi-header [title]="title" [hidden]="showSearchBar"></Corvi-header>\n\n<ion-content class="marginTop57">\n\n  <ion-list>\n\n    <!-- <ion-list-header>Enquiry Form</ion-list-header> -->\n\n\n\n    <ion-item>\n\n      <ion-label>Select Mode</ion-label>\n\n      <ion-select placeholder="Select">\n\n        <ion-option value="air">AIR</ion-option>\n\n        <ion-option value="ocean">OCEAN</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label>Select Service</ion-label>\n\n      <ion-select placeholder="Select">\n\n        <ion-option value="air">AIR</ion-option>\n\n        <ion-option value="ocean">OCEAN</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label>Shipment Type</ion-label>\n\n      <ion-select placeholder="Select">\n\n        <ion-option value="air">AIR</ion-option>\n\n        <ion-option value="ocean">OCEAN</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label>Shipment Service</ion-label>\n\n      <ion-select placeholder="Select">\n\n        <ion-option value="air">AIR</ion-option>\n\n        <ion-option value="ocean">OCEAN</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n\n\n  </ion-list>\n\n\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col> <button ion-button icon-start block color="primary" tappable (click)="goToCargoDetailPage()">\n\n          <ion-icon name="arrow-round-forward"></ion-icon>\n\n          Proceed\n\n        </button></ion-col>\n\n      <ion-col><button ion-button icon-start block color="primary" tappable (click)="goTologinPage()">\n\n          <ion-icon name="close-circle"></ion-icon>\n\n          Cancel\n\n        </button></ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"D:\MobileApp\corviBL\corviBL\src\pages\enquiry\enquiry.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */]])
    ], EnquiryPage);
    return EnquiryPage;
}());

//# sourceMappingURL=enquiry.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_global__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PopoverPage = /** @class */ (function () {
    function PopoverPage(navCtrl, navParams, viewCtrl, globalService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.globalService = globalService;
        console.log('check popover data: ', this.navParams.get('popoverData').PDFPath);
        this.pdfPath = this.navParams.get('popoverData').PDFPath;
    }
    PopoverPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PopoverPage');
    };
    PopoverPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    PopoverPage.prototype.downloadPdf = function () {
        debugger;
        var url = 'http://125.19.68.249/Staging/' + this.pdfPath;
        // let url = 'http://125.19.68.249/Staging/FMSEDocket/Transaction/WorkOrder/1004/BOMPAAI1617000750-CreditNote.PDF';
        console.log('*****URL*****', url);
        window.open(url, '_blank');
    };
    PopoverPage.prototype.openPdf = function () {
        debugger;
        var url = 'http://125.19.68.249/Staging/' + this.pdfPath;
        // let url = 'http://125.19.68.249/Staging/FMSEDocket/Transaction/WorkOrder/1004/BOMPAAI1617000750-CreditNote.PDF';
        console.log('*****URL*****', url);
        window.open(url, '_blank');
    };
    PopoverPage.prototype.viewPDF = function () {
        var _this = this;
        console.log('pdf url here: ', this.globalService.get('PDFURL'));
        this.globalService.get('PDFURL').
            then(function (PDFURL) { return (PDFURL != null && PDFURL != "") ? _this.openPDF(PDFURL, _this.pdfPath) : _this.globalService.showToast("something went wrong opening pdf"); }), function (error) { return console.error(error); },
            // this.globalService.showToast("something went wrong opening pdf");
            this.close();
    };
    PopoverPage.prototype.openPDF = function (pdfUrl, PDFPath) {
        var url = pdfUrl + PDFPath;
        console.log('check url pf pdf: ', url);
        PDFPath != '' && this.globalService.viewPDF(url);
        this.close();
    };
    PopoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-popover',template:/*ion-inline-start:"D:\MobileApp\corviBL\corviBL\src\pages\popover\popover.html"*/'\n<!-- <ion-content padding> -->\n\n  <ion-list>\n    <button ion-item (click)="viewPDF()">\n      <ion-icon name="ios-book"></ion-icon>Open</button>\n    <button ion-item (click)="downloadPdf()">\n      <ion-icon name="md-download"></ion-icon>Download PDF</button>\n    <!-- <button ion-item (click)="close()">\n      <ion-icon name="md-share"></ion-icon>Share</button> -->\n\n  </ion-list>\n\n<!-- </ion-content> -->\n'/*ion-inline-end:"D:\MobileApp\corviBL\corviBL\src\pages\popover\popover.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */]])
    ], PopoverPage);
    return PopoverPage;
}());

//# sourceMappingURL=popover.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export searchLocation */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPortAirportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_global__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_http_service_http_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_util_alert_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_util_toast_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the SearchPortAirportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var searchLocation = /** @class */ (function () {
    function searchLocation() {
    }
    return searchLocation;
}());

var SearchPortAirportPage = /** @class */ (function () {
    function SearchPortAirportPage(navCtrl, navParams, globalService, modalCtrl, viewCtrl, nav, menu, toastCtrl, http, alertService, toastService, 
        // public baseURLProvider: BaseURLProvider,
        fb) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.globalService = globalService;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.nav = nav;
        this.menu = menu;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.alertService = alertService;
        this.toastService = toastService;
        this.fb = fb;
        this.CityName = '';
        this.CityCode = '';
        this.responseFormAPI = [];
        this.title = "Find Location";
        this.appBuildConfig = this.globalService.appBuildConfig;
        this.VenType = 'Lead-Customer';
        debugger;
        this.SearchLoc = new searchLocation();
        this.origin = this.navParams.get('origin');
        this.Mode = localStorage.getItem('Mode');
        this.destination = this.navParams.get('destination');
        localStorage.removeItem('origin1');
        localStorage.removeItem('destination1');
    }
    SearchPortAirportPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FindLocationPage');
    };
    SearchPortAirportPage.prototype.backToDashboard = function () {
        this.globalService.setRootPage(__WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard__["a" /* DashboardPage */]);
    };
    SearchPortAirportPage.prototype.dismissModal = function () {
        var data = { 'foo': 'bar' };
        this.viewCtrl.dismiss(data);
    };
    SearchPortAirportPage.prototype.passDataToNSA = function (selectedData) {
        // if (this.origin == '0') {
        //   this.globalService.selectedOrigin = selectedData.Locationtext;
        // } else {
        //   this.globalService.selectedDest = selectedData.Locationtext;
        // }
        // // this.globalService.selectedCity = selectedData;
        // // console.log('********', this.globalService.selectedCity);
        // this.viewCtrl.dismiss();
        // this.globalService.setRootPage(CustomerJobSearchPage);
        this.globalService.selectedOrigin = selectedData;
        this.viewCtrl.dismiss(JSON.stringify(this.globalService.selectedOrigin));
        // this.navCtrl.push(CustomerJobSearchPage, { milestone: selectedData })
        // this.navCtrl.remove(this.navCtrl.getActive().index - 0, 1,);
    };
    SearchPortAirportPage.prototype.GetLocationMasterList = function () {
        var _this = this;
        debugger;
        if (this.Mode == '1') {
            this.SearchLoc.LocationType = 'Airport';
        }
        else if (this.Mode == '2') {
            this.SearchLoc.LocationType = 'Port';
        }
        else {
            this.SearchLoc.LocationType = 'City';
        }
        //this.branchCode;
        this.SearchLoc.LocationCode = this.CityCode.trim();
        this.SearchLoc.LocationName = this.CityName.trim();
        this.http.POST(__WEBPACK_IMPORTED_MODULE_3__constants__["a" /* Constants */].Corvi_Services.GetLocationMasterList, this.SearchLoc).then(function (response) {
            console.log('response to check login method: ', response);
            //debugger
            if (response['Table'] == '') {
                _this.toastService.show('Data not found.', 3000, true, 'top', 'toast-container');
                return;
            }
            else {
                // this.LocationInfo = response['Table'];
                if (_this.globalService.isCordovaAvailable()) {
                    _this.responseFormAPI = response;
                    _this.LocationInfo = JSON.parse(_this.responseFormAPI)["Table"];
                    // this.navCtrl.push(SearchJobResultsPage, { jobResults: stageOne });
                    // this.flag = true;
                    _this.countOfRec = JSON.parse(_this.responseFormAPI)["Table"].length;
                    if (JSON.parse(_this.responseFormAPI)["Table"] == '') {
                        _this.toastService.show('Data not found.', 3000, true, 'top', 'toast-container');
                        return;
                    }
                }
                else {
                    _this.LocationInfo = response['Table'];
                    // this.navCtrl.push(SearchJobResultsPage, { jobResults: stageOne });
                    _this.countOfRec = response['Table'].length;
                }
            }
        }, function (err) {
            console.log('error Login ', err);
            console.log('response to check service link: ', __WEBPACK_IMPORTED_MODULE_3__constants__["a" /* Constants */].Corvi_Services.Login);
        });
    };
    SearchPortAirportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-search-port-airport',template:/*ion-inline-start:"D:\MobileApp\corviBL\corviBL\src\pages\search-port-airport\search-port-airport.html"*/'<!--\n  Generated template for the NewSalesActivityPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n\n    <ion-title id="Dashboard" center text-center>\n      {{title}}\n      <ion-icon name=\'close-circle\' (click)=\'dismissModal()\' style=\'float: right;\'></ion-icon>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n\n    <!-- <ion-row padding class="">\n      <ion-col col-6>\n        <input [(ngModel)]="VenType" type="radio" class="stv-radio-button" name="Customer" value="Customer"\n          id="Customer" />\n        <label for="Customer">Customer</label>\n      </ion-col>\n      <ion-col col-6>\n        <input [(ngModel)]="VenType" type="radio" class="stv-radio-button" name="Customer" value="Lead-Customer"\n          id="LeadCustomer" checked />\n        <label for="LeadCustomer">Lead-Customer</label>\n      </ion-col>\n    </ion-row> -->\n\n    <ion-row padding class="ShadowBox13" style="margin-top: 10px;">\n      <ion-col col-12>\n        <label>\n          Port / Airport Name\n        </label>\n      </ion-col>\n      <ion-col col-12>\n        <input type="text" [(ngModel)]="CityName" col-12 placeholder="">\n      </ion-col>\n\n      <h4><span>OR</span></h4>\n\n      <ion-col col-12>\n        <label>\n          Port / Airport Code\n        </label>\n      </ion-col>\n      <ion-col col-12>\n        <input type="text" [(ngModel)]="CityCode" col-12 placeholder="">\n      </ion-col>\n\n    </ion-row>\n\n\n    <ion-row padding>\n      <ion-col col-6>\n        <button ion-button block class="btnRadius btncancel" (click)=\'dismissModal()\'>\n          <ion-icon></ion-icon>\n          Cancel\n        </button>\n      </ion-col>\n\n      <ion-col col-6>\n        <button ion-button icon-start block class="btnRadius " (click)="GetLocationMasterList();">\n          <ion-icon></ion-icon>\n          Search\n        </button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-12>\n        <label>Search Result: {{countOfRec}} record found</label>\n      </ion-col>\n    </ion-row>\n\n    <ion-row padding class="ShadowBox13">\n      <ion-col col-12>\n        <table>\n          <tr *ngFor="let item of LocationInfo; let i = index">\n            <td>\n              <label>\n                {{item.Locationtext}}\n              </label>\n            </td>\n            <td><a href="#" (click)="passDataToNSA(item);">Select</a></td>\n            <!-- <td><button (click)="passDataToNSA(item.Locationtext)">Select</button></td> -->\n\n            <!-- <td> <input [(ngModel)]="item.Address1" type="hidden" /> </td>\n            <td> <input [(ngModel)]="item.Address2" type="hidden" /> </td>\n            <td> <input [(ngModel)]="item.Address3" type="hidden" /> </td>\n            <td> <input [(ngModel)]="item.BranchName" type="hidden" /> </td>\n            <td> <input [(ngModel)]="item.GSTCategory" type="hidden" /> </td>\n            <td> <input [(ngModel)]="item.GSTRegistrationStatus" type="hidden" /> </td>\n            <td> <input [(ngModel)]="item.LocationCode" type="hidden" /> </td>\n            <td> <input [(ngModel)]="item.LocationID" type="hidden" /> </td>\n            <td> <input [(ngModel)]="item.LocationName" type="hidden" /> </td>\n            <td> <input [(ngModel)]="item.Pincode" type="hidden" /> </td>\n            <td> <input [(ngModel)]="item.VendorCode" type="hidden" /> </td>\n            <td> <input [(ngModel)]="item.VendorId" type="hidden" /> </td>\n            <td> <input [(ngModel)]="item.VendorName" type="hidden" /> </td>\n            <td> <input [(ngModel)]="item.VendorType" type="hidden" /> </td> -->\n            <!-- Address1: "Ideal Plaza"\n            Address2: "Sarat Bose Road"\n            Address3: ""\n            BranchName: "BALMER LAWRIE & CO. LTD - Kolkata"\n            GSTCategory: null\n            GSTIN: null\n            GSTRegistrationStatus: null\n            LocationCode: "IN CCU"\n            LocationID: 117603\n            LocationName: "KOLKATA"\n            Pincode: ""\n            SecretKey: null\n            StateName: null\n            VendorCode: "CCU/CUS/06586"\n            VendorId: 13929\n            VendorName: "OOCL"\n            VendorType: "Lead-Customer" -->\n          </tr>\n          <!-- <tr>\n            <td>\n              <label>\n                Babuline Pharma Pvt. Ltd.\n                Mumbai\n              </label>\n            </td>\n\n            <td><a href="#">Select</a></td>\n          </tr>\n          <tr>\n            <td>\n              <label>\n                BEC Chemicals Pvt. Ltd.\n                Mumbai\n              </label>\n            </td>\n\n            <td><a href="#">Select</a></td>\n          </tr>\n          <tr>\n            <td>\n              <label>\n                Cristopia Energy Systems (I) Pvt. Ltd.\n                Mumbai\n              </label>\n            </td>\n\n            <td><a href="#">Select</a></td>\n          </tr> -->\n        </table>\n      </ion-col>\n\n\n\n    </ion-row>\n\n\n\n  </ion-list>\n</ion-content>\n<ion-footer class="ion-footer">\n\n  <div class="label-white toolbar-background-md" center text-center>\n    © Kale Logistics Solutions Private Limited. {{appBuildConfig.fullYear}} Version {{appBuildConfig.version}}\n  </div>\n</ion-footer>\n'/*ion-inline-end:"D:\MobileApp\corviBL\corviBL\src\pages\search-port-airport\search-port-airport.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_global_global__["a" /* GlobalProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["t" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_http_service_http_service__["a" /* HttpServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_util_alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_7__providers_util_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], SearchPortAirportPage);
    return SearchPortAirportPage;
}());

//# sourceMappingURL=search-port-airport.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export searchDataList */
/* unused harmony export saveMileStoneList */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateJobMilestonePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__search_jobs_search_jobs__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__search_milestone_search_milestone__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_util_toast_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_global_global__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_http_service_http_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__constants__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var searchDataList = /** @class */ (function () {
    function searchDataList() {
    }
    return searchDataList;
}());

var saveMileStoneList = /** @class */ (function () {
    function saveMileStoneList() {
    }
    return saveMileStoneList;
}());

var UpdateJobMilestonePage = /** @class */ (function () {
    function UpdateJobMilestonePage(navCtrl, navParams, globalService, toastService, modalCtrl, http, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.globalService = globalService;
        this.toastService = toastService;
        this.modalCtrl = modalCtrl;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.UserDetails1 = [];
        this.UserDetails = [];
        this.BranchTbl = [];
        this.ModeTbl = [];
        this.ServiceTBl = [];
        this.ShipmentTbl = [];
        this.modes = [];
        this.services = [];
        this.shipments = [];
        this.branchCode = '0';
        this.transportMode = '0';
        this.serviceCode = '0';
        this.shipmentCode = '0';
        this.fetchedJobs = [];
        this.bookingNoArr = [];
        this.activityIdArr = [];
        this.activityDate = new Date().toISOString();
        this.title = "Update Job Milestone";
        // this.VenType = '1';
        this.appBuildConfig = this.globalService.appBuildConfig;
        this.UserDetails = this.globalService.get('userDetails');
        // if(this.globalService.isCordovaAvailable()){
        //   this.UserDetails = JSON.parse(this.UserDetails1);
        // } else {
        //   this.UserDetails = this.UserDetails1;
        // }
        //   this.BranchTbl = this.UserDetails[Object.keys(this.UserDetails)[1]]["Table4"];
        //   this.ModeTbl = this.UserDetails[Object.keys(this.UserDetails)[1]]["Table3"];
        //   this.ServiceTBl = this.UserDetails[Object.keys(this.UserDetails)[1]]["Table3"];
        //   this.ShipmentTbl = this.UserDetails[Object.keys(this.UserDetails)[1]]["Table3"];
        this.BranchTbl = JSON.parse(localStorage.getItem('BranchTable'));
        this.modes = JSON.parse(localStorage.getItem('TransportMode'));
        this.services = JSON.parse(localStorage.getItem('ServiceType'));
        this.shipments = JSON.parse(localStorage.getItem('ShipmentTypeAir'));
        this.searchList = new searchDataList();
        this.saveMileStoneList = new saveMileStoneList();
        //   console.log(this.ModeTbl.filter(function(item){
        //     this.modes = item.Identifier == "TransportMode";
        // }));
    }
    UpdateJobMilestonePage.prototype.ngOnInit = function () {
        this.branchCode = this.globalService.globalDefaultBranchCode;
        this.VenType = '1';
        if (typeof (this.globalService.defaultMode) != 'undefined') {
            this.transportMode = this.globalService.defaultMode;
        }
        if (typeof (this.globalService.defaultService) != 'undefined') {
            this.serviceCode = this.globalService.defaultService;
        }
        if (typeof (this.globalService.defaultMode) == 'undefined') {
            this.transportMode = 1;
        }
        if (typeof (this.globalService.defaultService) == 'undefined') {
            this.serviceCode = 1;
        }
        this.globalService.selectedMilestone = [];
        this.globalService.selectedJobsArray = []; //newly added on 16/09
    };
    UpdateJobMilestonePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UpdateJobMilestonePage');
        // this.VenType = '1';
        // this.UserDetails = this.globalService.get('userDetails');
        // if(this.globalService.isCordovaAvailable()){
        //   this.UserDetails = JSON.parse(this.UserDetails1);
        // } else {
        //   this.UserDetails = this.UserDetails1;
        // }
        // this.BranchTbl = this.UserDetails[Object.keys(this.UserDetails)[1]]["Table4"];
        // this.BranchTbl = this.globalService.BranchTbl;
        // console.log('check branches here: ', this.BranchTbl);
        // this.ModeTbl = this.UserDetails[Object.keys(this.UserDetails)[1]]["Table3"];
        // this.ModeTbl = JSON.parse(localStorage.getItem("modes"));
        // this.ServiceTBl = this.UserDetails[Object.keys(this.UserDetails)[1]]["Table3"];
        // this.ShipmentTbl = this.UserDetails[Object.keys(this.UserDetails)[1]]["Table3"];
        //  this.modes = this.ModeTbl.filter(a => a.Identifier == "TransportMode");
        //  this.modes = JSON.parse(localStorage.getItem("modesTwo"));
        //  this.services = this.ModeTbl.filter(a => a.Identifier == "Service");
        //  this.shipments = this.ModeTbl.filter(a => a.Identifier == "ShipmentType");
        //  this.searchList = new searchDataList();
        //  this.saveMileStoneList = new saveMileStoneList();
    };
    UpdateJobMilestonePage.prototype.ionViewDidEnter = function () {
        // this.VenType = '1';
        // this.fetchedMilestone = this.navParams.get('milestone');
        this.fetchedMilestone = this.globalService.selectedMilestone;
        this.fetchedJobs = this.globalService.selectedJobsArray;
        console.log('check milestone !!!!!!!', this.fetchedMilestone.DocumentName);
        console.log('check jobsArray ', this.fetchedJobs);
        // if(this.globalService.selectedJobType == ''){
        //   this.VenType = '1';
        // } else{
        //   this.VenType = this.globalService.selectedJobType;
        // }
        console.log('check job type: ', this.VenType);
        console.log('check for ven type: ', this.VenType);
    };
    UpdateJobMilestonePage.prototype.ionViewDidLeave = function () {
        // this.fetchedMilestone = '';
    };
    UpdateJobMilestonePage.prototype.onModeChanged = function (event) {
        var value = event.target.value;
        console.log('check selected value: ', value);
        if (value == 1) {
            this.shipments = JSON.parse(localStorage.getItem('ShipmentTypeAir'));
            console.log('shipments: ', this.shipments);
        }
        if (value == 2) {
            this.shipments = JSON.parse(localStorage.getItem('ShipmentType'));
            console.log('shipments: ', this.shipments);
        }
        if (value == 3) {
            this.shipments = JSON.parse(localStorage.getItem('ShipmentTypeRail'));
            console.log('shipments: ', this.shipments);
        }
        if (value == 4) {
            this.shipments = JSON.parse(localStorage.getItem('ShipmentTypeRoad'));
            console.log('shipments: ', this.shipments);
        }
    };
    UpdateJobMilestonePage.prototype.showAlert = function (title, msg) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: title,
            message: msg,
            buttons: [
                {
                    text: 'OK',
                    handler: function () {
                        // this.globalService.setRootPage(DashboardPage);
                        _this.globalService.selectedMilestone = '';
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
            ]
        });
        alert.present();
    };
    UpdateJobMilestonePage.prototype.backToDashboard = function () {
        this.globalService.setRootPage(__WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard__["a" /* DashboardPage */]);
    };
    UpdateJobMilestonePage.prototype.sendDataToSearchMilestone = function () {
        this.searchList.branch = this.branchCode;
        this.searchList.mode = this.transportMode;
        this.searchList.shipmentType = this.shipmentCode;
        this.searchList.service = this.serviceCode;
        this.searchList.jobType = this.VenType;
        this.globalService.selectedJobType = this.VenType;
        this.openModal();
    };
    UpdateJobMilestonePage.prototype.sendDataToSearchJobs = function () {
        this.searchList.branch = this.branchCode;
        this.searchList.mode = this.transportMode;
        this.searchList.shipmentType = this.shipmentCode;
        this.searchList.service = this.serviceCode;
        this.searchList.jobType = this.VenType;
        this.searchJobs();
    };
    UpdateJobMilestonePage.prototype.openModal = function () {
        var _this = this;
        if (this.branchCode == '0' || this.transportMode == '0' || this.serviceCode == '0' || this.shipmentCode == '0' || this.VenType == '0') {
            this.toastService.show('Please select the required fields.', 3000, true, 'top', 'toast-container');
            return;
        }
        var searchMilestone = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_1__search_milestone_search_milestone__["a" /* SearchMilestonePage */], { searchDetails: this.searchList });
        searchMilestone.onDidDismiss(function (data) {
            console.log(data);
            // this.ionViewDidEnter();
            if (_this.globalService.selectedMilestone != '') {
                _this.modalDismissData = JSON.stringify(data);
                //this.searchList.jobType = this.VenType;
                _this.VenType = localStorage.getItem('selectedJobType');
            }
            else {
                _this.VenType = localStorage.getItem('selectedJobType');
            }
            // if (data == null) {
            //   // this.modalDismissData = JSON.stringify(data);
            //   //this.searchList.jobType = this.VenType;
            //   // this.VenType = localStorage.getItem('selectedJobType');
            //   // this.ionViewDidEnter();
            // } else {
            //   this.VenType = localStorage.getItem('selectedJobType');
            // }
        });
        searchMilestone.present();
        this.globalService.store('branchCode', this.branchCode);
        localStorage.setItem('selectedJobType', this.VenType);
        console.log(localStorage.getItem('selectedJobType'));
    };
    UpdateJobMilestonePage.prototype.searchJobs = function () {
        if (this.branchCode == '0' || this.transportMode == '0' || this.serviceCode == '0' || this.shipmentCode == '0' || this.globalService.selectedMilestone.DocumentName == '') {
            this.toastService.show('Please select the required fields.', 3000, true, 'top', 'toast-container');
            return;
        }
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__search_jobs_search_jobs__["a" /* SearchJobsPage */], { searchDetails: this.searchList });
    };
    UpdateJobMilestonePage.prototype.goBack = function () {
        this.globalService.setRootPage(__WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard__["a" /* DashboardPage */]);
        // this.navCtrl.pop();
    };
    UpdateJobMilestonePage.prototype.removeJob = function (val) {
        var index = this.globalService.selectedJobsArray.indexOf(val);
        this.globalService.selectedJobsArray.splice(index, 1);
    };
    UpdateJobMilestonePage.prototype.save = function () {
        var _this = this;
        if (this.branchCode == '0' || this.transportMode == '0' || this.serviceCode == '0' || this.shipmentCode == '0') {
            this.toastService.show('Please select the required fields.', 3000, true, 'top', 'toast-container');
            return;
        }
        if (this.globalService.selectedMilestone.DocumentName == undefined || this.globalService.selectedMilestone.DocumentName == '') {
            this.toastService.show('Please add milestone.', 3000, true, 'top', 'toast-container');
            return;
        }
        // if (this.remarks == undefined || this.remarks == '') {
        //   this.toastService.show('Please add remarks.', 3000, true, 'top', 'toast-container')
        //   return;
        // }
        if (this.fetchedJobs.length == 0) {
            this.toastService.show('Search for Jobs.', 3000, true, 'top', 'toast-container');
            return;
        }
        console.log('check remarks ', this.remarks);
        console.log('check milestone ', this.globalService.selectedMilestone.DocumentName);
        this.saveMileStoneList.UserId = localStorage.getItem('userId'); //
        this.saveMileStoneList.Remarks = this.remarks;
        this.saveMileStoneList.ActivityDate = this.activityDate;
        // for(let d of this.globalService.selectedMilestone){
        //   this.activityIdArr.push(d.DocId);
        // }
        this.saveMileStoneList.ActivityId = this.globalService.selectedMilestone.DocId;
        // this.saveMileStoneList.ActivityId = this.activityIdArr.toString();
        // for (let data of this.fetchedJobs) {
        //   this.bookingNoArr.push(data.WODetailNo);
        // }
        // change by junaid
        for (var i = 0; i < this.fetchedJobs.length; i++) {
            this.bookingNoArr.push(this.fetchedJobs[i].BookingMasterNo);
        }
        this.saveMileStoneList.BookingNo = this.bookingNoArr.toString();
        console.log('***&&&&&***', this.saveMileStoneList);
        this.http.POST(__WEBPACK_IMPORTED_MODULE_8__constants__["a" /* Constants */].Corvi_Services.UpdateJobMilestone, this.saveMileStoneList).then(function (response) {
            console.log('test saved milestone here: ', response);
            if (response.includes('Success')) {
                _this.showAlert('Success', 'Milestone Saved');
                // this.globalService.setRootPage(DashboardPage);
                _this.globalService.selectedJobsArray = [];
                _this.globalService.selectedMilestone = [];
            }
            else {
                _this.toastService.show('Form not submited !', 3000, true, 'top', 'toast-container');
                _this.globalService.selectedMilestone = [];
                return;
            }
        });
    };
    UpdateJobMilestonePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
            selector: 'page-update-job-milestone',template:/*ion-inline-start:"D:\MobileApp\corviBL\corviBL\src\pages\update-job-milestone\update-job-milestone.html"*/'<!--\n  Generated template for the NewSalesActivityPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <button right ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title id="Dashboard" center text-center>\n      {{title}}\n    </ion-title>\n\n    <ion-buttons left>\n      <button ion-button icon-only (click)="goBack();">\n        <ion-icon name="ios-arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-row padding class="ShadowBox13" style="margin-top: 10px;">\n      <ion-col col-12>\n        Job Type\n      </ion-col>\n\n      <!-- <ion-col col-6>\n        <button ion-button icon-start block class="btnRadiusUpper">\n          <ion-icon></ion-icon>\n          Freight Forwarding\n        </button>\n      </ion-col>\n      <ion-col col-6>\n        <button ion-button block class="btnRadiusUpper btncancel">\n          <ion-icon></ion-icon>\n          Customs\n        </button>\n      </ion-col> -->\n\n      <ion-col col-6>\n        <input [(ngModel)]="VenType" type="radio" class="stv-radio-button" name="jobType2" value="1" id="1" />\n        <label for="1">Freight Forwarding</label>\n      </ion-col>\n      <ion-col col-6>\n        <input [(ngModel)]="VenType" type="radio" class="stv-radio-button" name="jobType2" value="2" id="2" />\n        <label for="2">Customs</label>\n      </ion-col>\n\n      <ion-col col-12>\n        <label>\n          Branch\n        </label>\n        <font color="red" class="margin12">*</font>\n      </ion-col>\n      <!-- <ion-col col-12>\n\n        <select col-12 placeholder="Select One">\n          <option value="f">Default</option>\n          <option value="m">1</option>\n        </select>\n\n      </ion-col> -->\n\n      <ion-col col-12>\n\n        <select id="ddlBrach" name="ddlBrach" [(ngModel)]="branchCode" col-12 placeholder="">\n          <!-- <option [value]="0" disabled selected>Select</option> -->\n          <option *ngFor="let brData of BranchTbl" [value]="brData.BranchCode">{{brData.branch}}</option>\n        </select>\n\n      </ion-col>\n\n      <ion-col col-12>\n        <label>\n          Mode\n        </label>\n        <font color="red" class="margin12">*</font>\n      </ion-col>\n\n      <ion-col col-12>\n        <select id="ddlMode" name="ddlMode" [(ngModel)]="transportMode" col-12 placeholder=""\n          (change)=\'onModeChanged($event)\'>\n          <option [value]="0" disabled selected>Select</option>\n          <option *ngFor="let modeData of modes" [value]="modeData.KeyValue">{{modeData.Description}}</option>\n        </select>\n\n      </ion-col>\n\n      <!-- <ion-col col-12>\n\n        <input col-12 placeholder="">\n      </ion-col> -->\n\n\n      <ion-col col-12>\n        <label>\n          Service\n        </label>\n        <font color="red" class="margin12">*</font>\n      </ion-col>\n\n      <ion-col col-12>\n        <select id="ddlService" name="ddlService" [(ngModel)]="serviceCode" col-12 placeholder="">\n          <option [value]="0" disabled selected>Select</option>\n          <option *ngFor="let serviceData of services" [value]="serviceData.KeyValue">{{serviceData.Description}}\n          </option>\n        </select>\n\n      </ion-col>\n\n      <!-- <ion-col col-12>\n\n        <select col-12 placeholder="Select One">\n          <option value="f">Default</option>\n          <option value="m">1</option>\n        </select>\n      </ion-col> -->\n\n\n      <ion-col col-12>\n        <label>\n          Shipment Type\n        </label>\n        <font color="red" class="margin12">*</font>\n      </ion-col>\n\n      <ion-col col-12>\n        <select id="ddlShipment" name="ddlShipment" [(ngModel)]="shipmentCode" col-12 placeholder="">\n          <option [value]="0" disabled selected>Select</option>\n          <option *ngFor="let shipData of shipments" [value]="shipData.KeyValue">{{shipData.Description}}</option>\n        </select>\n\n      </ion-col>\n\n      <!-- <ion-col col-12>\n        <select col-12 placeholder="Select One">\n          <option value="f">Default</option>\n          <option value="m">1</option>\n        </select>\n      </ion-col> -->\n\n      <ion-col col-12>\n        <label>\n          Milestone\n        </label>\n        <font color="red" class="margin12">*</font>\n      </ion-col>\n\n\n      <ion-col col-10>\n        <input col-12 type="text" [(ngModel)]="globalService.selectedMilestone.DocumentName" name="fetchedMilestone">\n\n      </ion-col>\n\n      <ion-col col-2>\n        <button ion-fab class="ion-fab34" (click)="sendDataToSearchMilestone();" style="float: right;\n        width: auto;\n        display: flex;\n        align-items: center;\n        justify-content: center;">\n          <ion-icon name="md-search" class=""></ion-icon>\n        </button>\n      </ion-col>\n\n\n      <ion-col col-12>\n        <label>\n          General Remarks\n        </label>\n        <!-- <font color="red" class="margin12">*</font> -->\n      </ion-col>\n\n      <ion-col col-12>\n        <textarea col-12 placeholder="" [(ngModel)]="remarks">\n        </textarea>\n      </ion-col>\n\n      <ion-col col-6>\n        <ion-label>\n          Activity Date\n        </ion-label>\n      </ion-col>\n\n      <ion-col style="text-align:end" col-6>\n        <a href="#">\n          <ion-datetime displayFormat="DD/MM/YYYY" pickerFormat="DD/MM/YYYY" disabled [(ngModel)]="activityDate">\n          </ion-datetime>\n        </a>\n      </ion-col>\n\n      <ion-col col-12>\n        <button ion-button icon-start block class="btnRadius" (click)="sendDataToSearchJobs();">\n          <ion-icon></ion-icon>\n          SEARCH JOB(S)\n        </button>\n      </ion-col>\n    </ion-row>\n\n\n\n\n    <ion-row padding class="ShadowBox13">\n      <ion-col col-12>\n        <table>\n          <tr *ngFor="let data of globalService.selectedJobsArray">\n            <td>\n              <!-- <input col-12 value="BOMFJAI2021001020" disabled> -->\n              <input col-12 value="{{data.JobNo}}" disabled>\n            </td>\n            <td> <button ion-button icon-only clear style="color: red !important;" (click)="removeJob(data)">\n                <ion-icon name="trash"></ion-icon>Remove\n              </button></td>\n\n          </tr>\n          <!-- <tr>\n            <td>\n              <input col-12 value="BOMFJAI2021001020" disabled>\n            </td>\n            <td > <button ion-button icon-only clear style="color: red !important;">\n              <ion-icon name="trash"></ion-icon>Remove\n            </button></td>\n\n          </tr>\n          <tr>\n            <td>\n              <input col-12 value="BOMFJAI2021001020" disabled>\n            </td>\n            <td > <button ion-button icon-only clear style="color: red !important;">\n              <ion-icon name="trash"></ion-icon>Remove\n            </button></td>\n\n          </tr>\n          <tr>\n            <td>\n              <input col-12 value="BOMFJAI2021001020" disabled>\n            </td>\n            <td > <button ion-button icon-only clear style="color: red !important;">\n              <ion-icon name="trash"></ion-icon>Remove\n            </button></td>\n\n          </tr> -->\n        </table>\n      </ion-col>\n    </ion-row>\n\n  </ion-list>\n</ion-content>\n<ion-footer class="ion-footer">\n  <ion-row padding class="">\n    <ion-col col-6>\n      <button ion-button block class="btnRadius btncancel" (click)="backToDashboard();">\n        <ion-icon></ion-icon>\n        Cancel\n      </button>\n    </ion-col>\n\n    <ion-col col-6>\n      <button ion-button icon-start block class="btnRadius" (click)="save()">\n        <ion-icon></ion-icon>\n        Save\n      </button>\n    </ion-col>\n  </ion-row>\n  <div class="label-white toolbar-background-md" center text-center>\n    © Kale Logistics Solutions Private Limited. {{appBuildConfig.fullYear}} Version {{appBuildConfig.version}}\n  </div>\n</ion-footer>\n'/*ion-inline-end:"D:\MobileApp\corviBL\corviBL\src\pages\update-job-milestone\update-job-milestone.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_util_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* ModalController */], __WEBPACK_IMPORTED_MODULE_7__providers_http_service_http_service__["a" /* HttpServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* AlertController */]])
    ], UpdateJobMilestonePage);
    return UpdateJobMilestonePage;
}());

//# sourceMappingURL=update-job-milestone.js.map

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuotationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_global__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_http_service_http_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__quotation_detail_quotation_detail__ = __webpack_require__(408);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * @author Sachin Semlety
 * @email sachin.semlety@kalelogistics.in
 * @create date 2018-08-10 02:36:14
 * @modify date 2018-08-10 02:36:14
 * @desc [description]
*/






var QuotationPage = /** @class */ (function () {
    function QuotationPage(navCtrl, navParams, http, globalService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.globalService = globalService;
        this.quotationList = [];
        this.title = "Quotation";
        var isTabDisabled = this.navParams.get("tabsDisabled");
        this.tabsDisabled = isTabDisabled == undefined ? false : isTabDisabled;
    }
    QuotationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ClosedJobsPage');
    };
    QuotationPage.prototype.ionViewDidEnter = function () {
        this.fetchQuotation();
    };
    QuotationPage.prototype.fetchQuotation = function () {
        var _this = this;
        this.quotationList = [];
        this.searchQuery = '';
        this.globalService.get('userDetails')
            .then(function (data) { return _this.fetch(_this.globalService.handleJSON(data).Table[0]); }, function (error) { return console.error(error); });
    };
    QuotationPage.prototype.fetch = function (obj) {
        var _this = this;
        if (!this.isEmpty(obj)) {
            this.http.POST(__WEBPACK_IMPORTED_MODULE_3__constants__["a" /* Constants */].Corvi_Services.Quotation.Get_QuatationList, {
                "UserID": obj.UserId,
                "Password": obj.Password
            }).then(function (response) {
                console.log('resp ', response);
                _this.quotationList = _this.globalService.handleJSON(response).Table;
                _this.setClonedArray();
                _this.showData = true;
                // console.log('closedJobs : ', this.closedJobs)
            }, function (err) {
                console.log('error Login ', err);
            });
        }
    };
    QuotationPage.prototype.fetchQuotationDetails = function (QuatationId) {
        var _this = this;
        this.globalService.get('userDetails')
            .then(function (data) { return _this.fetchDetails(_this.globalService.handleJSON(data).Table[0], QuatationId); }, function (error) { return console.error(error); });
    };
    QuotationPage.prototype.fetchDetails = function (obj, QuatationId) {
        var _this = this;
        if (!this.isEmpty(obj)) {
            this.http.POST(__WEBPACK_IMPORTED_MODULE_3__constants__["a" /* Constants */].Corvi_Services.Quotation.Get_Quatation_Details + __WEBPACK_IMPORTED_MODULE_3__constants__["a" /* Constants */].Corvi_Services.Quotation.QuatationId + QuatationId, {
                "UserID": obj.UserId,
                "Password": obj.Password
            }).then(function (response) {
                _this.globalService.routePageWithData(__WEBPACK_IMPORTED_MODULE_5__quotation_detail_quotation_detail__["a" /* QuotationDetailPage */], { 'quot_details': _this.globalService.handleJSON(response).Table });
            }, function (err) {
                console.log('error Login ', err);
            });
        }
    };
    QuotationPage.prototype.setClonedArray = function () {
        this.clonedItems = this.globalService.clone(this.quotationList);
    };
    QuotationPage.prototype.filterItems = function (ev) {
        this.quotationList = this.clonedItems;
        var val = ev.target.value;
        if (val && val.trim() !== '') {
            this.quotationList = this.quotationList.filter(function (item) {
                for (var key in item) {
                    if (item.hasOwnProperty(key)) {
                        var element = item[key];
                        if (String(element).toLowerCase().includes(val.toLowerCase())) {
                            return item;
                        }
                    }
                }
            });
        }
    };
    QuotationPage.prototype.goToQuotationDetails = function (data) {
        this.fetchQuotationDetails(data.QuotationId);
    };
    QuotationPage.prototype.showSearch = function () {
        this.showSearchBar = true;
    };
    QuotationPage.prototype.onCancel = function () {
        this.showSearchBar = false;
    };
    QuotationPage.prototype.ionViewWillLeave = function () {
        this.showSearchBar = false;
    };
    QuotationPage.prototype.isEmpty = function (obj) {
        return Object.keys(obj).length === 0;
    };
    QuotationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-quotation',template:/*ion-inline-start:"D:\MobileApp\corviBL\corviBL\src\pages\quotation\quotation.html"*/'<Corvi-header [title]="title" [hidden]="showSearchBar"></Corvi-header>\n\n<ion-searchbar [hidden]="!showSearchBar" placeholder="Search..." showCancelButton color="primary" [animated]="true"\n\n  (ionInput)="filterItems($event)" [(ngModel)]="searchQuery" (ionCancel)="onCancel($event)"></ion-searchbar>\n\n<ion-content class="marginTop57">\n\n\n\n  <ion-list [virtualScroll]="quotationList" approxItemHeight="40px">\n\n    <ion-item-sliding *virtualItem="let item">\n\n      <ion-item (click)="goToQuotationDetails(item)">\n\n\n\n        <ion-avatar item-start>\n\n          <div class="customised_avatar_Img">\n\n            {{item.QuotationDate | moment:"date-DD/MM/YYYY"}}\n\n          </div>\n\n          <div style="text-align: center">{{item.QuotationDate | moment:"month-DD/MM/YYYY"}}</div>\n\n        </ion-avatar>\n\n        <h3>Quotation No : {{item.QuotationNo}}</h3>\n\n        <p> Quotation Id : {{item.QuotationId }}</p>\n\n        <!-- <p> Quotation Date : {{item.QuotationDate }}</p> -->\n\n        <!-- <p>Mode : {{item.Mode}}</p> -->\n\n        <p>Service : {{item.Service}}</p>\n\n        <p>Status : {{item.Status}}</p>\n\n\n\n      </ion-item>\n\n    </ion-item-sliding>\n\n  </ion-list>\n\n  <br>\n\n  <br>\n\n  <br>\n\n  <div *ngIf="quotationList.length <= 0" style="text-align:center">No Quotation Found</div>\n\n\n\n</ion-content>\n\n\n\n<ion-fab right bottom #fab1 *ngIf="quotationList.length > 0" [ngClass]="{\'bottom63px\': !tabsDisabled}">\n\n  <button class="pop-in" ion-fab mini color="primary" [ngClass]="{\'pop-out\': fabGone}" (click)="showSearch()">\n\n    <ion-icon name="search"></ion-icon>\n\n  </button>\n\n</ion-fab>'/*ion-inline-end:"D:\MobileApp\corviBL\corviBL\src\pages\quotation\quotation.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_http_service_http_service__["a" /* HttpServiceProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */]])
    ], QuotationPage);
    return QuotationPage;
}());

//# sourceMappingURL=quotation.js.map

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpenJobsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_service_http_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_global__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__detail_open_jobs_details__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_util_alert_service__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * @author Sachin Semlety
 * @email sachin.semlety@kalelogistics.in
 * @create date 2018-08-14 03:26:19
 * @modify date 2018-08-14 03:26:19
 * @desc [description]
*/







var OpenJobsPage = /** @class */ (function () {
    function OpenJobsPage(navCtrl, navParams, http, globalService, alertService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.globalService = globalService;
        this.alertService = alertService;
        this.openJobs = [];
        this.title = "Open Jobs";
        var isTabDisabled = this.navParams.get("tabsDisabled");
        this.tabsDisabled = isTabDisabled == undefined ? false : isTabDisabled;
    }
    OpenJobsPage.prototype.ionViewDidEnter = function () {
        this.fetchOpenJobs();
    };
    OpenJobsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OpenJobsPage');
    };
    OpenJobsPage.prototype.fetchOpenJobs = function () {
        var _this = this;
        this.openJobs = [];
        this.searchQuery = '';
        this.globalService.get('userDetails')
            .then(function (data) { return _this.fetch(_this.globalService.handleJSON(data).Table[0].UserId); }, function (error) { return console.error(error); });
    };
    OpenJobsPage.prototype.fetch = function (id) {
        var _this = this;
        if (id != null || id != '') {
            this.http.POST(__WEBPACK_IMPORTED_MODULE_3__constants__["a" /* Constants */].Corvi_Services.OpenJobs.Get_OpenJobList, { "UserId": id }).then(function (response) {
                console.log('resp ', response);
                _this.openJobs = _this.globalService.handleJSON(response).Table;
                _this.setClonedArray();
                _this.showData = true;
            }, function (err) {
                console.log('error Login ', err);
            });
        }
    };
    OpenJobsPage.prototype.fetchOpenJobsDetails = function (WoDetailNo) {
        var _this = this;
        this.globalService.get('userDetails')
            .then(function (data) { return _this.fetchDetails(_this.globalService.handleJSON(data).Table[0].UserId, WoDetailNo); }, function (error) { return console.error(error); });
    };
    OpenJobsPage.prototype.fetchDetails = function (id, WoDetailNo) {
        var _this = this;
        if (id != null || id != '') {
            this.http.POST(__WEBPACK_IMPORTED_MODULE_3__constants__["a" /* Constants */].Corvi_Services.JobDetails.JobData + __WEBPACK_IMPORTED_MODULE_3__constants__["a" /* Constants */].Corvi_Services.JobDetails.WoDetailNo + WoDetailNo, {
                "UserID": id,
                "Password": ""
            }).then(function (response) {
                _this.globalService.routePageWithData(__WEBPACK_IMPORTED_MODULE_5__detail_open_jobs_details__["a" /* OpenJobsPageDetails */], { 'open_Jobs': _this.globalService.handleJSON(response).Table });
            }, function (err) {
                console.log('error Login ', err);
            });
        }
    };
    OpenJobsPage.prototype.setClonedArray = function () {
        this.clonedItems = this.globalService.clone(this.openJobs);
    };
    OpenJobsPage.prototype.filterItems = function (ev) {
        this.openJobs = this.clonedItems;
        var val = ev.target.value;
        if (val && val.trim() !== '') {
            this.openJobs = this.openJobs.filter(function (item) {
                for (var key in item) {
                    if (item.hasOwnProperty(key)) {
                        var element = item[key];
                        if (String(element).toLowerCase().includes(val.toLowerCase())) {
                            return item;
                        }
                    }
                }
            });
        }
    };
    OpenJobsPage.prototype.goToOpenJobsDetail = function (data) {
        this.fetchOpenJobsDetails(data.WODetailNo);
    };
    OpenJobsPage.prototype.showSearch = function () {
        this.showSearchBar = true;
    };
    OpenJobsPage.prototype.onCancel = function () {
        this.showSearchBar = false;
    };
    OpenJobsPage.prototype.ionViewWillLeave = function () {
        this.showSearchBar = false;
    };
    OpenJobsPage.prototype.followJob = function (item) {
        console.log('item ', item);
        this.alertService.presentActionSheet('Open Jobs', item);
    };
    OpenJobsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-open-jobs',template:/*ion-inline-start:"D:\MobileApp\corviBL\corviBL\src\pages\open-jobs\open-jobs.html"*/'<Corvi-header [title]="title" [hidden]="showSearchBar"></Corvi-header>\n<ion-searchbar [hidden]="!showSearchBar" placeholder="Search..." showCancelButton color="primary" [animated]="true"\n    (ionInput)="filterItems($event)" [(ngModel)]="searchQuery" (ionCancel)="onCancel($event)"></ion-searchbar>\n<ion-content class="marginTop57">\n\n    <ion-list [virtualScroll]="openJobs" approxItemHeight="40px">\n        <ion-item-sliding *virtualItem="let item">\n            <ion-item>\n                <ion-avatar item-start (click)="goToOpenJobsDetail(item)">\n                    <div class="customised_avatar_Img">\n                        {{item.JobDate | moment:"date-MM/DD/YYYY"}}\n                    </div>\n                    <div style="text-align: center">{{item.JobDate | moment:"month-MM/DD/YYYY"}}</div>\n                </ion-avatar>\n                <ion-label (click)="goToOpenJobsDetail(item)" style="overflow: initial !important;">\n                    <h3>Job No : {{item.JobNo}}</h3>\n                    <p>\n                        {{item.MasterNo}}/{{item.HouseNo}}</p>\n                    <!--Master/House No.-->\n                    <p>{{item.Mode}}/{{item.Service}}</p>\n                    <!--Ocean/Export-->\n                </ion-label>\n                <!-- <ion-toggle [(ngModel)]="item.checked" (ionChange)="updateItem(item)"></ion-toggle> -->\n                <!-- <ion-label icon-only ion-button (click)="updateItem(item)">\n                            <ion-icon name="more"></ion-icon>\n                        </ion-label> -->\n                <ion-label (click)="followJob(item)" text-end>\n                    <ion-icon name="more"></ion-icon>\n                </ion-label>\n            </ion-item>\n\n\n            <!-- <ion-item-options side="right">\n                        <button ion-button color="primary" (click)="ViewPDFNative(item)">\n                            <ion-icon name="information"></ion-icon>\n                            Follow this Job\n                        </button>\n                    </ion-item-options> -->\n        </ion-item-sliding>\n    </ion-list>\n    <br>\n    <br>\n    <br>\n    <div *ngIf="openJobs.length <= 0" style="text-align:center">No open Jobs Found</div>\n\n</ion-content>\n\n<ion-fab right bottom #fab1 *ngIf="openJobs.length > 0" [ngClass]="{\'bottom63px\': !tabsDisabled}">\n    <button class="pop-in" ion-fab mini color="primary"  (click)="showSearch()">\n        <ion-icon name="search"></ion-icon>\n    </button>\n</ion-fab>\n'/*ion-inline-end:"D:\MobileApp\corviBL\corviBL\src\pages\open-jobs\open-jobs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_http_service_http_service__["a" /* HttpServiceProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_util_alert_service__["a" /* AlertService */]])
    ], OpenJobsPage);
    return OpenJobsPage;
}());

//# sourceMappingURL=open-jobs.js.map

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClosedJobsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_service_http_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__detail_closed_jobs_details__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_push_notification_push_notification__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_util_alert_service__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * @author Sachin Semlety
 * @email sachin.semlety@kalelogistics.in
 * @create date 2018-08-14 03:27:55
 * @modify date 2018-08-14 03:27:55
 * @desc [description]
*/








var ClosedJobsPage = /** @class */ (function () {
    function ClosedJobsPage(navCtrl, navParams, http, globalService, pushNotification, actionSheetCtrl, alertService, eventCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.globalService = globalService;
        this.pushNotification = pushNotification;
        this.actionSheetCtrl = actionSheetCtrl;
        this.alertService = alertService;
        this.eventCtrl = eventCtrl;
        this.closedJobs = [];
        this.title = "Closed Jobs";
        var isTabDisabled = this.navParams.get("tabsDisabled");
        this.tabsDisabled = isTabDisabled == undefined ? false : isTabDisabled;
    }
    ClosedJobsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ClosedJobsPage');
    };
    ClosedJobsPage.prototype.ionViewDidEnter = function () {
        this.fetchClosedJobs();
    };
    ClosedJobsPage.prototype.fetchClosedJobs = function () {
        var _this = this;
        this.closedJobs = [];
        this.searchQuery = '';
        this.globalService.get('userDetails')
            .then(function (data) { return _this.fetch(_this.globalService.handleJSON((data)).Table[0].UserId); }, function (error) { return console.error(error); });
    };
    ClosedJobsPage.prototype.fetch = function (id) {
        var _this = this;
        if (id != null || id != '') {
            this.http.POST(__WEBPACK_IMPORTED_MODULE_4__constants__["a" /* Constants */].Corvi_Services.ClosedJobs.Get_CloseJobList, { "UserId": id }).then(function (response) {
                // console.log('resp ', response);
                _this.closedJobs = _this.globalService.handleJSON(response).Table;
                _this.setClonedArray();
                _this.showData = true;
                // console.log('closedJobs : ', this.closedJobs)
            }, function (err) {
                console.log('error Login ', err);
            });
        }
    };
    ClosedJobsPage.prototype.fetchClosedJobsDetails = function (WoDetailNo) {
        var _this = this;
        this.globalService.get('userDetails')
            .then(function (data) { return _this.fetchDetails(_this.globalService.handleJSON(data).Table[0].UserId, WoDetailNo); }, function (error) { return console.error(error); });
    };
    ClosedJobsPage.prototype.fetchDetails = function (id, WoDetailNo) {
        var _this = this;
        if (id != null || id != '') {
            this.http.POST(__WEBPACK_IMPORTED_MODULE_4__constants__["a" /* Constants */].Corvi_Services.JobDetails.JobData + __WEBPACK_IMPORTED_MODULE_4__constants__["a" /* Constants */].Corvi_Services.JobDetails.WoDetailNo + WoDetailNo, {
                "UserID": id,
                "Password": ""
            }).then(function (response) {
                _this.globalService.routePageWithData(__WEBPACK_IMPORTED_MODULE_5__detail_closed_jobs_details__["a" /* ClosedJobsPageDetails */], { 'closed_Jobs': _this.globalService.handleJSON(response).Table });
            }, function (err) {
                console.log('error Login ', err);
            });
        }
    };
    ClosedJobsPage.prototype.setClonedArray = function () {
        this.clonedItems = this.globalService.clone(this.closedJobs);
    };
    ClosedJobsPage.prototype.filterItems = function (ev) {
        this.closedJobs = this.clonedItems;
        var val = ev.target.value;
        if (val && val.trim() !== '') {
            this.closedJobs = this.closedJobs.filter(function (item) {
                for (var key in item) {
                    if (item.hasOwnProperty(key)) {
                        var element = item[key];
                        if (String(element).toLowerCase().includes(val.toLowerCase())) {
                            return item;
                        }
                    }
                }
            });
        }
    };
    ClosedJobsPage.prototype.goToClosedJobsDetail = function (data) {
        this.fetchClosedJobsDetails(data.WODetailNo);
    };
    ClosedJobsPage.prototype.showSearch = function () {
        this.showSearchBar = true;
        this.searchbar.setFocus();
    };
    ClosedJobsPage.prototype.onCancel = function (ev) {
        this.showSearchBar = false;
    };
    ClosedJobsPage.prototype.ionViewWillLeave = function () {
        this.showSearchBar = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('searchbar'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Searchbar */])
    ], ClosedJobsPage.prototype, "searchbar", void 0);
    ClosedJobsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-closed-jobs',template:/*ion-inline-start:"D:\MobileApp\corviBL\corviBL\src\pages\closed-jobs\closed-jobs.html"*/'<Corvi-header [title]="title" [hidden]="showSearchBar"></Corvi-header>\n\n<ion-searchbar #searchbar [hidden]="!showSearchBar" placeholder="Search..." showCancelButton color="primary" [animated]="true"\n\n    (ionInput)="filterItems($event)" [(ngModel)]="searchQuery" (ionCancel)="onCancel($event)"></ion-searchbar>\n\n<ion-content class="marginTop57">\n\n\n\n    <ion-list [virtualScroll]="closedJobs" approxItemHeight="40px">\n\n        <ion-item-sliding *virtualItem="let item">\n\n            <ion-item>\n\n                <ion-avatar item-start (click)="goToClosedJobsDetail(item)">\n\n                    <div class="customised_avatar_Img">\n\n                        {{item.JobDate | moment:"date-MM/DD/YYYY"}}\n\n                    </div>\n\n                    <div style="text-align: center">{{item.JobDate | moment:"month-MM/DD/YYYY"}}</div>\n\n                </ion-avatar>\n\n                <ion-label (click)="goToClosedJobsDetail(item)" style="overflow: initial !important;">\n\n                    <h3>Job No : {{item.JobNo}}</h3>\n\n                    <p>\n\n                        {{item.MasterNo}}/{{item.HouseNo}}</p>\n\n                    <!--Master/House No.-->\n\n                    <p>{{item.Mode}}/{{item.Service}}</p>\n\n                    <!--Ocean/Export-->\n\n                    <!-- <p *ngIf="item?.milestones">Last Milestones : {{item.milestones}}</p>\n\n                    <p *ngIf="item?.weight">Total packages/weight : {{item.weight}}</p> -->\n\n                </ion-label>\n\n                <!-- <ion-label (click)="followJob(item)" text-end>\n\n                    <ion-icon name="more"></ion-icon>\n\n                </ion-label> -->\n\n            </ion-item>\n\n\n\n\n\n            <!-- <ion-item-options side="right">\n\n                <button ion-button color="primary" (click)="ViewPDFNative(item)">\n\n                    <ion-icon name="information"></ion-icon>\n\n                    Follow this Job\n\n                </button>\n\n            </ion-item-options> -->\n\n        </ion-item-sliding>\n\n    </ion-list>\n\n    <br>\n\n    <br>\n\n    <br>\n\n    <div *ngIf="closedJobs.length <= 0" style="text-align:center">No Closed Jobs Found</div>\n\n\n\n</ion-content>\n\n\n\n<ion-fab right bottom #fab1 *ngIf="closedJobs.length > 0" [ngClass]="{\'bottom63px\': !tabsDisabled}">\n\n    <button class="pop-in" ion-fab mini color="primary" [ngClass]="{\'pop-out\': fabGone}" (click)="showSearch()">\n\n        <ion-icon name="search"></ion-icon>\n\n    </button>\n\n</ion-fab>'/*ion-inline-end:"D:\MobileApp\corviBL\corviBL\src\pages\closed-jobs\closed-jobs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_http_service_http_service__["a" /* HttpServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_push_notification_push_notification__["a" /* PushNotificationProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_7__providers_util_alert_service__["a" /* AlertService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
    ], ClosedJobsPage);
    return ClosedJobsPage;
}());

//# sourceMappingURL=closed-jobs.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoicesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_service_http_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_push_notification_push_notification__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_util_alert_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__detail_invoices_details__ = __webpack_require__(411);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * @author Sachin Semlety
 * @email sachin.semlety@kalelogistics.in
 * @create date 2018-08-14 03:27:55
 * @modify date 2018-08-14 03:27:55
 * @desc [description]
*/








var InvoicesPage = /** @class */ (function () {
    function InvoicesPage(navCtrl, navParams, http, globalService, pushNotification, actionSheetCtrl, alertService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.globalService = globalService;
        this.pushNotification = pushNotification;
        this.actionSheetCtrl = actionSheetCtrl;
        this.alertService = alertService;
        this.Invoices = [];
        this.title = "Invoices";
        var isTabDisabled = this.navParams.get("tabsDisabled");
        this.tabsDisabled = isTabDisabled == undefined ? false : isTabDisabled;
    }
    InvoicesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ClosedJobsPage');
    };
    InvoicesPage.prototype.ionViewDidEnter = function () {
        this.fetchInvoices();
    };
    InvoicesPage.prototype.fetchInvoices = function () {
        var _this = this;
        this.Invoices = [];
        this.searchQuery = '';
        this.globalService.get('userDetails')
            .then(function (data) { return _this.fetch(_this.globalService.handleJSON(data).Table[0]); }, function (error) { return console.error(error); });
    };
    InvoicesPage.prototype.fetch = function (obj) {
        var _this = this;
        if (!this.isEmpty(obj)) {
            this.http.POST(__WEBPACK_IMPORTED_MODULE_4__constants__["a" /* Constants */].Corvi_Services.Invoices.Get_InvoiceList, {
                "UserID": obj.UserId,
                "Password": obj.Password
            }).then(function (response) {
                // console.log('resp ', response);
                _this.Invoices = _this.globalService.handleJSON(response).Table;
                _this.setClonedArray();
                _this.showData = true;
                // console.log('closedJobs : ', this.closedJobs)
            }, function (err) {
                console.log('error Login ', err);
            });
        }
    };
    InvoicesPage.prototype.fetchInvoicesDetails = function (DetailNo) {
        var _this = this;
        this.globalService.get('userDetails')
            .then(function (data) { return _this.fetchDetails(_this.globalService.handleJSON(data).Table[0], DetailNo); }, function (error) { return console.error(error); });
    };
    InvoicesPage.prototype.fetchDetails = function (obj, DetailNo) {
        var _this = this;
        if (!this.isEmpty(obj)) {
            this.http.POST(__WEBPACK_IMPORTED_MODULE_4__constants__["a" /* Constants */].Corvi_Services.InvoicesDetails.Get_Invoice_Details + __WEBPACK_IMPORTED_MODULE_4__constants__["a" /* Constants */].Corvi_Services.InvoicesDetails.DetailNo + DetailNo, {
                "UserID": obj.UserId,
                "Password": obj.Password
            }).then(function (response) {
                _this.globalService.routePageWithData(__WEBPACK_IMPORTED_MODULE_7__detail_invoices_details__["a" /* InvoicesDetails */], { 'Invoices': _this.globalService.handleJSON(response).Table });
            }, function (err) {
                console.log('error Login ', err);
            });
        }
    };
    InvoicesPage.prototype.setClonedArray = function () {
        this.clonedItems = this.globalService.clone(this.Invoices);
    };
    InvoicesPage.prototype.filterItems = function (ev) {
        this.Invoices = this.clonedItems;
        var val = ev.target.value;
        if (val && val.trim() !== '') {
            this.Invoices = this.Invoices.filter(function (item) {
                for (var key in item) {
                    if (item.hasOwnProperty(key)) {
                        var element = item[key];
                        if (String(element).toLowerCase().includes(val.toLowerCase())) {
                            return item;
                        }
                    }
                }
            });
        }
    };
    InvoicesPage.prototype.gotoInvoiceDetails = function (data) {
        this.fetchInvoicesDetails(data.DetailNo);
    };
    InvoicesPage.prototype.showSearch = function () {
        this.showSearchBar = true;
    };
    InvoicesPage.prototype.onCancel = function () {
        this.showSearchBar = false;
    };
    InvoicesPage.prototype.ionViewWillLeave = function () {
        this.showSearchBar = false;
    };
    // followJob(item) {
    //   console.log('item ', item)
    //   this.alertService.presentActionSheet('Closed Jobs', 'test Message Title', 'test Message Content');
    // }
    InvoicesPage.prototype.viewPDF = function (item) {
        // let pdfSrc = 'https://devdactic.com/html/5-simple-hacks-LBT.pdf';
        // let url = Constants.CORVI_PDF_URL + item.PDFPath;
        // item.hasOwnProperty('PDFPath') && item.PDFPath != '' && this.globalService.viewPDF(url);
        var _this = this;
        this.globalService.get('PDFURL').
            then(function (PDFURL) { return (PDFURL != null && PDFURL != "") ? _this.openPDF(PDFURL, item.PDFPath) : _this.globalService.showToast("something went wrong opening pdf"); }), function (error) { return console.error(error); }, this.globalService.showToast("something went wrong opening pdf");
    };
    InvoicesPage.prototype.openPDF = function (pdfUrl, PDFPath) {
        var url = pdfUrl + PDFPath;
        PDFPath != '' && this.globalService.viewPDF(url);
    };
    InvoicesPage.prototype.isEmpty = function (obj) {
        return Object.keys(obj).length === 0;
    };
    InvoicesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-invoices',template:/*ion-inline-start:"D:\MobileApp\corviBL\corviBL\src\pages\invoices\invoices.html"*/'<Corvi-header [title]="title" [hidden]="showSearchBar"></Corvi-header>\n\n<ion-searchbar [hidden]="!showSearchBar" placeholder="Search..." showCancelButton color="primary" [animated]="true"\n\n    (ionInput)="filterItems($event)" [(ngModel)]="searchQuery" (ionCancel)="onCancel($event)"></ion-searchbar>\n\n\n\n<ion-content class="marginTop57">\n\n    <ion-list [virtualScroll]="Invoices" approxItemHeight="40px">\n\n        <ion-item-sliding *virtualItem="let item">\n\n            <ion-item>\n\n                <ion-avatar item-start (click)="gotoInvoiceDetails(item)">\n\n                    <div class="customised_avatar_Img">\n\n                        {{item.InvoiceDate | moment:"date-MM/DD/YYYY"}}\n\n                    </div>\n\n                    <div style="text-align: center">{{item.InvoiceDate | moment:"month-MM/DD/YYYY"}}</div>\n\n                </ion-avatar>\n\n                <ion-label (click)="gotoInvoiceDetails(item)" style="overflow: initial !important;">\n\n                    <h3>Bill No: {{item.BillingNo}}</h3>\n\n                    <p *ngIf=\'item?.BillDate\'>Bill Date : {{item.BillDate}}</p>\n\n                    <p>Job No : {{item.JobNo}}</p>\n\n                    <!-- <p >Customer: {{item.Customer}}</p> -->\n\n                    <!-- <p>Detail No : {{item.DetailNo }}</p> -->\n\n                    <p>Amount : {{item.Amount }}</p>\n\n                </ion-label>\n\n            </ion-item>\n\n\n\n\n\n            <ion-item-options side="right">\n\n                <button ion-button color="primary" (click)="viewPDF(item)">\n\n                    <ion-icon name="document"></ion-icon>\n\n                    View PDF\n\n                </button>\n\n            </ion-item-options>\n\n        </ion-item-sliding>\n\n    </ion-list>\n\n    <br>\n\n    <br>\n\n    <br>\n\n    <div *ngIf="Invoices.length <= 0" style="text-align:center">No Invoices Found</div>\n\n\n\n</ion-content>\n\n\n\n<ion-fab right bottom #fab1 *ngIf="Invoices.length > 0" [ngClass]="{\'bottom63px\': !tabsDisabled}">\n\n    <button class="pop-in" ion-fab mini color="primary" [ngClass]="{\'pop-out\': fabGone}" (click)="showSearch()">\n\n        <ion-icon name="search"></ion-icon>\n\n    </button>\n\n</ion-fab>'/*ion-inline-end:"D:\MobileApp\corviBL\corviBL\src\pages\invoices\invoices.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_http_service_http_service__["a" /* HttpServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_push_notification_push_notification__["a" /* PushNotificationProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_6__providers_util_alert_service__["a" /* AlertService */]])
    ], InvoicesPage);
    return InvoicesPage;
}());

//# sourceMappingURL=invoices.js.map

/***/ }),

/***/ 182:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 182;

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * @author Sachin Semlety
 * @email sachin.semlety@kalelogistics.in
 * @create date 2018-08-10 11:04:11
 * @modify date 2018-08-10 11:04:11
 * @desc [description]
*/


var ToastService = /** @class */ (function () {
    function ToastService(toastCtrl) {
        this.toastCtrl = toastCtrl;
    }
    ToastService.prototype.create = function (message, ok, duration) {
        if (ok === void 0) { ok = false; }
        if (duration === void 0) { duration = 2000; }
        if (this.toast) {
            this.toast.dismiss();
        }
        this.toast = this.toastCtrl.create({
            message: message,
            duration: ok ? null : duration,
            position: 'bottom',
            showCloseButton: ok,
            closeButtonText: 'OK'
        });
        this.toast.present();
    };
    ToastService.prototype.show = function (message, duration, ok, position, cssClass) {
        if (ok === void 0) { ok = false; }
        if (this.toast) {
            this.toast.dismiss();
        }
        this.toast = this.toastCtrl.create({
            message: message,
            duration: ok ? null : duration,
            position: position,
            closeButtonText: 'OK',
            cssClass: cssClass,
            showCloseButton: true
        });
        this.toast.present();
    };
    ToastService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ToastController */]])
    ], ToastService);
    return ToastService;
}());

//# sourceMappingURL=toast.service.js.map

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__push_notification_push_notification__ = __webpack_require__(72);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * @author Sachin Semlety
 * @email sachin.semlety@kalelogistics.in
 * @create date 2018-08-10 11:04:08
 * @modify date 2018-08-10 11:04:08
 * @desc [description]
*/



var AlertService = /** @class */ (function () {
    function AlertService(alertCtrl, actionSheetCtrl, pushNotification, toastCtrl) {
        this.alertCtrl = alertCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.pushNotification = pushNotification;
        this.toastCtrl = toastCtrl;
    }
    AlertService.prototype.presentActionSheet = function (title, item) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Follow this Job ?',
            buttons: [
                {
                    text: 'Yes',
                    icon: 'checkmark',
                    handler: function () {
                        _this.presentAlertWithCallback(title, 'You will recieve notifications if you follow this job').then(function (isOK) {
                            if (isOK) {
                                _this.pushNotification.createNotification(item);
                                console.log('Yes clicked');
                            }
                        });
                    }
                }, {
                    text: 'No',
                    icon: 'close',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    AlertService.prototype.presentAlert = function (title, message) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: message,
            buttons: [
                {
                    text: 'OK'
                }
            ]
        });
        return alert.present();
    };
    AlertService.prototype.presentErrorAlert = function (message) {
        return this.presentAlert('An error has occurred.', message);
    };
    AlertService.prototype.presentAlertWithCallback = function (title, message) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var confirm = _this.alertCtrl.create({
                title: title,
                message: message,
                buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function () {
                            confirm.dismiss().then(function () { return resolve(false); });
                            return false;
                        }
                    }, {
                        text: 'Yes',
                        handler: function () {
                            confirm.dismiss().then(function () { return resolve(true); });
                            return false;
                        }
                    }]
            });
            return confirm.present();
        });
    };
    AlertService.prototype.forgetPassword = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var forgot = _this.alertCtrl.create({
                title: 'Forgot Password?',
                message: "Enter your username to send a reset link password.",
                inputs: [
                    {
                        id: 'forgetPassword',
                        name: 'username',
                        placeholder: 'Username',
                        type: 'text'
                    },
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        handler: function (data) {
                            forgot.dismiss().then(function () { return resolve(false); });
                            return false;
                        }
                    },
                    {
                        text: 'Send',
                        handler: function (data) {
                            console.log('Send clicked');
                            var obj = { 'forgotPwd': data, 'forgot': forgot };
                            forgot.dismiss().then(function () { return resolve(obj); });
                            return false;
                        }
                    }
                ]
            });
            forgot.present();
        });
    };
    AlertService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_2__push_notification_push_notification__["a" /* PushNotificationProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ToastController */]])
    ], AlertService);
    return AlertService;
}());

//# sourceMappingURL=alert.service.js.map

/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/_home/home.module": [
		224
	],
	"../pages/closed-jobs/closed-jobs.module": [
		413
	],
	"../pages/configure-parameters/configure-parameters.module": [
		414
	],
	"../pages/customer-dashboard/customer-dashboard.module": [
		415
	],
	"../pages/customer-job-search/customer-job-search.module": [
		416
	],
	"../pages/customer-settings/customer-settings.module": [
		417
	],
	"../pages/dashboard/dashboard.module": [
		444
	],
	"../pages/enquiry/enquiry.module": [
		418
	],
	"../pages/find-location/find-location.module": [
		419
	],
	"../pages/find-sales-activity/find-sales-activity.module": [
		420
	],
	"../pages/invoices/invoices.module": [
		421
	],
	"../pages/job-status/job-status.module": [
		422
	],
	"../pages/new-sales-activity/new-sales-activity.module": [
		423
	],
	"../pages/new-sales-lead/new-sales-lead.module": [
		424
	],
	"../pages/open-jobs/open-jobs.module": [
		443
	],
	"../pages/popover/popover.module": [
		425
	],
	"../pages/quotation/quotation.module": [
		426
	],
	"../pages/reporting-user-activity/reporting-user-activity.module": [
		427
	],
	"../pages/reset-password/reset-password.module": [
		428
	],
	"../pages/search-invoice-results/search-invoice-results.module": [
		429
	],
	"../pages/search-invoice/search-invoice.module": [
		430
	],
	"../pages/search-job-results/search-job-results.module": [
		431
	],
	"../pages/search-jobs/search-jobs.module": [
		432
	],
	"../pages/search-milestone/search-milestone.module": [
		433
	],
	"../pages/search-port-airport/search-port-airport.module": [
		434
	],
	"../pages/search-sales-activity/search-sales-activity.module": [
		435
	],
	"../pages/shipment-invoice/shipment-invoice.module": [
		436
	],
	"../pages/shipment-status/shipment-status.module": [
		437
	],
	"../pages/sort-popover/sort-popover.module": [
		438
	],
	"../pages/tabs/tabs.module": [
		439
	],
	"../pages/update-job-milestone/update-job-milestone.module": [
		441
	],
	"../pages/welcomeuser/welcomeuser.module": [
		442
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 223;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_detail_page__ = __webpack_require__(669);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * @author Sachin Semlety
 * @email sachin.semlety@kalelogistics.in
 * @create date 2018-08-10 11:03:38
 * @modify date 2018-08-10 11:03:38
 * @desc [description]
*/





var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_0__home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_4__home_detail_page__["a" /* HomeDetailPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_0__home__["a" /* HomePage */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_4__home_detail_page__["a" /* HomeDetailPage */]
            ]
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_global__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__configure_parameters_configure_parameters__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__customer_settings_customer_settings__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__new_sales_activity_new_sales_activity__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__new_sales_lead_new_sales_lead__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__reporting_user_activity_reporting_user_activity__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__search_sales_activity_search_sales_activity__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shipment_invoice_shipment_invoice__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shipment_status_shipment_status__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__update_job_milestone_update_job_milestone__ = __webpack_require__(143);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import { FindSalesActivityPage } from './../find-sales-activity/find-sales-activity';












/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DashboardPage = /** @class */ (function () {
    function DashboardPage(navCtrl, navParams, menu, globalService, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.globalService = globalService;
        this.modalCtrl = modalCtrl;
        this.viewSales = '';
        this.isDisabled = true;
        this.title = "Home";
        // debugger
        //     var BranchTbl = JSON.parse(localStorage.getItem('BranchTable'));
    }
    DashboardPage.prototype.ionViewDidEnter = function () {
        console.log('view menu items for dashboard: ', this.globalService.menuItems);
        this.viewSales = localStorage.getItem('viewSales');
        console.log('check again milestone: ', this.viewSales);
        this.createMilestone = localStorage.getItem('createMilestone');
        console.log('check here also: ', this.createMilestone);
        this.dashSales = localStorage.getItem('dashSales');
        this.dashReportingUser = localStorage.getItem('dashReportingUser');
        console.log('check RPT ****: ', this.dashReportingUser);
        console.log('check dash Sales: ', this.dashSales);
        this.dashLead = localStorage.getItem('dashLead');
        console.log('check dash Lead: ', this.dashLead);
        this.dashMilestone = localStorage.getItem('dashMilestone');
        console.log('check dash milestone: ', this.dashMilestone);
        this.dashReporting = localStorage.getItem('reportingTo');
        console.log('******ReportingTo*******', this.dashReporting);
        this.dashShipStatus = localStorage.getItem('dashShipStatus');
        console.log('check dash ship status: ', this.dashShipStatus);
        this.dashShipInvoice = localStorage.getItem('dashShipInvoice');
        console.log('check dash ship invoice: ', this.dashShipInvoice);
    };
    DashboardPage.prototype.ionViewDidLoad = function () {
        this.profileType = localStorage.getItem('profileType');
        // this.reportingTo = localStorage.getItem('reportingTo');
        console.log('******profile Type*******', this.profileType);
        console.log('ionViewDidLoad DashboardPage');
    };
    DashboardPage.prototype.openSupport = function () {
        window.open('http://support.kalelogistics.in/', '_system');
    };
    DashboardPage.prototype.openContactModal = function () {
        // let contactModal = this.modalCtrl.create(ContactUsPage);
        // contactModal.present();
        window.open('https://www.kalelogistics.com/contact-us/', '_system');
    };
    DashboardPage.prototype.goToNewSalesActivity = function () {
        this.globalService.valueForLeadCutomer = '';
        this.globalService.setRootPage(__WEBPACK_IMPORTED_MODULE_5__new_sales_activity_new_sales_activity__["a" /* NewSalesActivityPage */]);
    };
    DashboardPage.prototype.goToReportingUser = function () {
        this.globalService.valueForLeadCutomer = '';
        this.globalService.setRootPage(__WEBPACK_IMPORTED_MODULE_7__reporting_user_activity_reporting_user_activity__["a" /* ReportingUserActivityPage */]);
    };
    DashboardPage.prototype.goToFindSalesActivityPage = function () {
        this.globalService.valueForLeadCutomer = '';
        // this.globalService.setRootPage(FindSalesActivityPage);
        this.openModal();
    };
    DashboardPage.prototype.openModal = function () {
        this.globalService.setRootPage(__WEBPACK_IMPORTED_MODULE_8__search_sales_activity_search_sales_activity__["a" /* SearchSalesActivityPage */]);
        // const profileModal = this.modalCtrl.create(FindSalesActivityPage, { searchDetails: '0' });
        // profileModal.onDidDismiss(data => {
        //   console.log(data);
        // });
        // profileModal.present();
    };
    DashboardPage.prototype.goToNewSalesLeadPage = function () {
        this.globalService.valueForLeadCutomer = '';
        this.globalService.setRootPage(__WEBPACK_IMPORTED_MODULE_6__new_sales_lead_new_sales_lead__["a" /* NewSalesLeadPage */]);
    };
    DashboardPage.prototype.goToUpdateJobMilestonePage = function () {
        this.globalService.valueForLeadCutomer = '';
        this.globalService.setRootPage(__WEBPACK_IMPORTED_MODULE_11__update_job_milestone_update_job_milestone__["a" /* UpdateJobMilestonePage */]);
        // this.navCtrl.push(UpdateJobMilestonePage);
    };
    DashboardPage.prototype.goToConfigureParams = function () {
        this.globalService.valueForLeadCutomer = '';
        this.globalService.setRootPage(__WEBPACK_IMPORTED_MODULE_3__configure_parameters_configure_parameters__["a" /* ConfigureParametersPage */]);
    };
    DashboardPage.prototype.goToCustomerConfigureParams = function () {
        this.globalService.valueForLeadCutomer = '';
        this.globalService.setRootPage(__WEBPACK_IMPORTED_MODULE_4__customer_settings_customer_settings__["a" /* CustomerSettingsPage */]);
    };
    DashboardPage.prototype.temp = function () {
        this.globalService.valueForLeadCutomer = '';
        this.globalService.setRootPage(__WEBPACK_IMPORTED_MODULE_7__reporting_user_activity_reporting_user_activity__["a" /* ReportingUserActivityPage */]);
        // this.navCtrl.push(NewSalesActivityPage);
    };
    DashboardPage.prototype.goToShipmentInvoice = function () {
        this.globalService.valueForLeadCutomer = '';
        this.globalService.setRootPage(__WEBPACK_IMPORTED_MODULE_9__shipment_invoice_shipment_invoice__["a" /* ShipmentInvoicePage */]);
    };
    DashboardPage.prototype.goToShipmentStatus = function () {
        this.globalService.valueForLeadCutomer = '';
        this.globalService.setRootPage(__WEBPACK_IMPORTED_MODULE_10__shipment_status_shipment_status__["a" /* ShipmentStatusPage */]);
    };
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-dashboard',template:/*ion-inline-start:"D:\MobileApp\corviBL\corviBL\src\pages\dashboard\dashboard.html"*/'<!-- <ion-header>\n  <ion-navbar color="primary">\n    <button right ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title id="Dashboard" center text-center>\n      {{title}}\n    </ion-title>\n\n\n  </ion-navbar>\n\n</ion-header> -->\n\n<ion-header>\n  <ion-navbar color="primary">\n    <!-- <button right ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <button left ion-button menuToggle>\n      <ion-icon name="arrow-back"></ion-icon>\n    </button> -->\n    <ion-title id="Dashboard" center text-center>\n      {{title}}\n    </ion-title>\n\n\n\n    <ion-buttons right>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="menu" style="color: white;"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n<ion-content padding class="animated fadeInDown">\n  <img src="assets/img/Corvi_BL_Logo_360x70.png">\n  <ion-row *ngIf="profileType == \'1\'" style="margin-top:10px ;" class="text-center">\n    <ion-col *ngIf="dashSales == \'1\'" col-4 class="text-center box" (click)=\'goToNewSalesActivity();\'>\n      <div class="inner ShadowBox13">\n        <img src="assets/img/add-file.png" class="center">\n        <span>New Sales <br /> Activity</span>\n      </div>\n    </ion-col>\n    <ion-col *ngIf="dashSales != \'1\'" col-4 class="text-center box">\n      <div class="inner ShadowBox13" style="opacity: 0.2">\n        <img src="assets/img/add-file.png" class="center">\n        <span>New Sales <br /> Activity</span>\n      </div>\n    </ion-col>\n\n    <ion-col *ngIf="dashReportingUser == \'1\'" col-4 class="text-center box" (click)=\'goToReportingUser();\'>\n      <div class="inner ShadowBox13">\n        <img src="assets/img/viewReports.png" class="center">\n        <span>View Reporting User Activity</span>\n      </div>\n    </ion-col>\n    <ion-col *ngIf="dashReportingUser != \'1\'" col-4 class="text-center box">\n      <div class="inner ShadowBox13" style="opacity: 0.2">\n        <img src="assets/img/viewReports.png" class="center">\n        <span>View Reporting User Activity</span>\n      </div>\n    </ion-col>\n\n    <ion-col *ngIf="dashSales == \'1\'" col-4 class="text-center box" (click)=\'goToFindSalesActivityPage();\'>\n      <div class="inner ShadowBox13">\n        <img src="assets/img/search2.png" class="center">\n        <span>Search Sales <br /> Activity</span>\n      </div>\n    </ion-col>\n    <ion-col *ngIf="dashSales != \'1\'" col-4 class="text-center box">\n      <div class="inner ShadowBox13" style="opacity: 0.2">\n        <img src="assets/img/search2.png" class="center">\n        <span>Search Sales <br /> Activity</span>\n      </div>\n    </ion-col>\n\n  </ion-row>\n  <ion-row *ngIf="profileType == \'1\'" style="margin-top:10px ;">\n\n    <ion-col *ngIf="dashLead == \'1\'" col-4 class="text-center box" (click)="goToNewSalesLeadPage();">\n      <div class="inner ShadowBox13">\n        <img src="assets/img/Group 3473.png" class="center">\n        <span>New Sales <br /> Lead</span>\n      </div>\n    </ion-col>\n    <ion-col *ngIf="dashLead != \'1\'" col-4 class="text-center box">\n      <div class="inner ShadowBox13" style="opacity: 0.2">\n        <img src="assets/img/Group 3473.png" class="center">\n        <span>New Sales <br /> Lead</span>\n      </div>\n    </ion-col>\n\n    <ion-col *ngIf="dashMilestone == \'1\'" col-4 class="text-center box" (click)="goToUpdateJobMilestonePage();">\n      <div class="inner ShadowBox13">\n        <img src="assets/img/Group 3526.png" class="center">\n        <span>Update Job\n          Milestone</span>\n      </div>\n    </ion-col>\n    <ion-col col-4 class="text-center box" *ngIf="dashMilestone != \'1\'">\n      <div class="inner ShadowBox13" style="opacity: 0.2">\n        <img src="assets/img/Group 3526.png" class="center">\n        <span>Update Job\n          Milestone</span>\n      </div>\n    </ion-col>\n\n    <!-- <ion-col col-4 class="text-center box" (click)="goToConfigureParams();">\n      <div class="inner ShadowBox13">\n        <img src="assets/img/Group 3527.png" class="center">\n        <span>Configure Parameters</span>\n      </div>\n    </ion-col> -->\n    <!-- above code commented as per requirement from BL -->\n\n    <!-- new as per BL requirement to hide config params for profile type 1 -->\n    <ion-col col-4 class="text-center box">\n      <div class="inner ShadowBox13" style="opacity: 0.2">\n        <img src="assets/img/Group 3527.png" class="center">\n        <span>Configure Parameters</span>\n      </div>\n    </ion-col>\n    <!-- new ends -->\n  </ion-row>\n\n  <ion-row *ngIf="profileType == \'2\'" style="margin-top:10px ;" class="text-center">\n    <ion-col *ngIf="dashShipStatus == \'1\'" col-4 class="text-center box" (click)="goToShipmentStatus()">\n      <div class="inner ShadowBox13">\n        <img src="assets/img/Group 3529.png" class="center">\n        <span>Shipment <br /> Status</span>\n      </div>\n    </ion-col>\n    <ion-col *ngIf="dashShipStatus != \'1\'" col-4 class="text-center box">\n      <div class="inner ShadowBox13" style="opacity: 0.2">\n        <img src="assets/img/Group 3529.png" class="center">\n        <span>Shipment <br />Status</span>\n      </div>\n    </ion-col>\n\n    <ion-col *ngIf="dashShipInvoice == \'1\'" col-4 class="text-center box" (click)="goToShipmentInvoice()">\n      <div class="inner ShadowBox13">\n        <img src="assets/img/Group 3530.png" class="center">\n        <span>Shipment<br /> Invoice</span>\n      </div>\n    </ion-col>\n    <ion-col *ngIf="dashShipInvoice != \'1\'" col-4 class="text-center box">\n      <div class="inner ShadowBox13" style="opacity: 0.2">\n        <img src="assets/img/Group 3530.png" class="center">\n        <span>Shipment <br /> Invoice</span>\n      </div>\n    </ion-col>\n\n    <ion-col col-4 class="text-center box" (click)=\'goToCustomerConfigureParams();\'>\n      <div class="inner ShadowBox13">\n        <img src="assets/img/Group 3527.png" class="center">\n        <span>Configure<br> Parameters</span>\n      </div>\n    </ion-col>\n  </ion-row>\n\n\n  <ion-row *ngIf="profileType == \'3\'" style="margin-top:10px ;" class="text-center">\n    <ion-col col-4 class="text-center box" (click)=\'goToNewSalesActivity();\'>\n      <div class="inner ShadowBox13">\n        <img src="assets/img/add-file.png" class="center">\n        <span>New Sales Activity</span>\n      </div>\n    </ion-col>\n\n    <ion-col col-4 class="text-center box">\n      <div class="inner ShadowBox13">\n        <img src="assets/img/viewReports.png" class="center">\n        <span>View Reporting User Activity</span>\n      </div>\n    </ion-col>\n\n    <ion-col col-4 class="text-center box" (click)=\'goToFindSalesActivityPage();\'>\n      <div class="inner ShadowBox13">\n        <img src="assets/img/search2.png" class="center">\n        <span>Search Sales Activity</span>\n      </div>\n    </ion-col>\n  </ion-row>\n\n  <ion-row *ngIf="profileType == \'3\'" style="margin-top:10px ;">\n    <ion-col col-4 class="text-center box" (click)="goToNewSalesLeadPage();">\n      <div class="inner ShadowBox13">\n        <img src="assets/img/Group 3473.png" class="center">\n        <span>New Sales Lead</span>\n      </div>\n    </ion-col>\n\n    <ion-col col-4 class="text-center box" (click)="goToUpdateJobMilestonePage();">\n      <div class="inner ShadowBox13">\n        <img src="assets/img/Group 3526.png" class="center">\n        <span>Update Job\n          Milestone</span>\n      </div>\n    </ion-col>\n    <ion-col col-4 class="text-center box" (click)="goToConfigureParams();">\n      <div class="inner ShadowBox13">\n        <img src="assets/img/Group 3527.png" class="center">\n        <span>Configure<br> Parameters</span>\n      </div>\n    </ion-col>\n  </ion-row>\n\n  <!-- <div class="addOns">\n    <div class="addOnsText" style="margin-top:15px;">\n      <h4>Additional Services</h4>\n    </div>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <div class="container" style="opacity: 0.2">\n            <img src="../assets/img/moreservices.png">\n            <h6>More Services</h6>\n          </div>\n        </ion-col>\n        <ion-col>\n          <div class="container" (click)="openContactModal()">\n            <img src="../assets/img/contactus.png">\n            <h6>Contact Us</h6>\n          </div>\n        </ion-col>\n        <ion-col>\n          <div class="container" (click)="openSupport()">\n            <img src="../assets/img/monitor_support.png">\n            <h6>24 x 7 Support</h6>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n\n  </div> -->\n\n</ion-content>\n\n\n<ion-footer>\n  <ion-row style="background-color: #1f63a6;padding-bottom: 10px">\n    <ion-col col-12 style="color: white;">\n      <span>Additional Services</span>\n    </ion-col>\n    <ion-col col-4>\n      <div class="container" style="opacity: 0.2">\n        <img src="../assets/img/moreservices.png">\n        <span>More Services</span>\n      </div>\n    </ion-col>\n    <ion-col col-4>\n      <div class="container" (click)="openContactModal()">\n        <img src="../assets/img/contactus.png">\n        <span>Contact Us</span>\n      </div>\n    </ion-col>\n    <ion-col col-4>\n      <div class="container" (click)="openSupport()">\n        <img src="../assets/img/monitor_support.png">\n        <span>24 x 7 Support</span>\n      </div>\n    </ion-col>\n  </ion-row>\n  <div class="bar bar-footer" center text-center>\n    <ion-row>\n      <ion-col col-2></ion-col>\n      <ion-col col-4>\n        <div class="inner footer-col-color">\n          <img src="assets/img/kale_power.png" class="center-footer-img">\n        </div>\n\n      </ion-col>\n      <ion-col col-2></ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-6 style="color: lightgray;">\n        <em style="text-align: center;" class="title">Terms and conditions</em>\n      </ion-col>\n\n      <ion-col col-6 style="color: lightgray;">\n        <em style="text-align: center;" class="title">Privacy Policy</em>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-footer>\n'/*ion-inline-end:"D:\MobileApp\corviBL\corviBL\src\pages\dashboard\dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */]])
    ], DashboardPage);
    return DashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export signUpList */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_global__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_service_http_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_util_alert_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_util_toast_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_baseUrlGenerator_baseurlgenerator__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login_login__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * @author Sachin Semlety
 * @email sachin.semlety@kalelogistics.in
 * @create date 2018-08-10 11:03:53
 * @modify date 2018-08-10 11:03:53
 * @desc [description]
*/










var signUpList = /** @class */ (function () {
    function signUpList() {
    }
    return signUpList;
}());

var RegisterPage = /** @class */ (function () {
    function RegisterPage(nav, menu, toastCtrl, globalService, http, alertService, toastService, events, platform, baseUrlProvider, modalCtrl, 
        // public baseURLProvider: BaseURLProvider,
        fb) {
        this.nav = nav;
        this.menu = menu;
        this.toastCtrl = toastCtrl;
        this.globalService = globalService;
        this.http = http;
        this.alertService = alertService;
        this.toastService = toastService;
        this.events = events;
        this.platform = platform;
        this.baseUrlProvider = baseUrlProvider;
        this.modalCtrl = modalCtrl;
        this.fb = fb;
        this.signUpEmail = '';
        this.signUpVarList = new signUpList();
    }
    // register and go to home page
    RegisterPage.prototype.register = function () {
        // this.globalService.routePage(HomePage)
    };
    // go to login page
    RegisterPage.prototype.login = function () {
        // this.globalService.routePage(LoginPage)
        this.nav.push(__WEBPACK_IMPORTED_MODULE_9__login_login__["a" /* LoginPage */]);
    };
    RegisterPage.prototype.RegisterNowUserProfile = function () {
        var _this = this;
        this.signUpVarList.UserID = this.signUpEmail;
        this.signUpVarList.Password = 'BLL@a';
        this.signUpVarList.IdentityCode = 'BLL';
        this.baseUrlProvider.setBaseURL('BLL').then(function (msg) {
            // if (msg != null && msg != '') {
            // console.log('response to check 1');
            // this.http.GET(Constants.Corvi_Services.RegisterNowUserProfile,this.signUpVarList).then((response) => {
            _this.http.POST(__WEBPACK_IMPORTED_MODULE_4__constants__["a" /* Constants */].Corvi_Services.RegisterNowUserProfile, _this.signUpVarList).then(function (response) {
                console.log('response to check login method: ', response);
                if (response == 'Valid User') {
                    _this.globalService.showAlert('Please check your Inbox.');
                    _this.nav.push(__WEBPACK_IMPORTED_MODULE_9__login_login__["a" /* LoginPage */]);
                    _this.signUpEmail = '';
                }
            }, function (err) {
                console.log('error Login ', err);
                console.log('response to check service link: ', __WEBPACK_IMPORTED_MODULE_4__constants__["a" /* Constants */].Corvi_Services.Login);
            });
            // }
            // else {
            //   this.globalService.showAlert('Invalid Customer Identity Code')
            // }
        }); // this.baseUrlProvider ends
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"D:\MobileApp\corviBL\corviBL\src\pages\register\register.html"*/'<!-- -->\n\n<ion-content class="auth-page">\n\n  <div class="login-content">\n\n\n\n    <!-- Logo -->\n\n    <div padding text-center>\n\n      <div class="logo"></div>\n\n      <!-- <h2 ion-text class="text-primary">\n\n        <strong>CORVI</strong>\n\n      </h2> -->\n\n    </div>\n\n\n\n    <!-- Login form -->\n\n   \n\n      <!-- <ion-item>\n\n        <ion-label floating>\n\n          <ion-icon name="person" item-start class="text-primary"></ion-icon>\n\n          Full Name\n\n        </ion-label>\n\n        <ion-input type="text"></ion-input>\n\n      </ion-item> -->\n\n\n\n      <ion-item>\n\n        <ion-label floating>\n\n          <ion-icon name="mail" item-start class="text-primary"></ion-icon>\n\n          Email\n\n        </ion-label>\n\n        <ion-input [(ngModel)]="signUpEmail" type="email"></ion-input>\n\n      </ion-item>\n\n\n\n      <!-- <ion-item>\n\n        <ion-label floating>\n\n          <ion-icon name="lock" item-start class="text-primary"></ion-icon>\n\n          Password\n\n        </ion-label>\n\n        <ion-input type="password"></ion-input>\n\n      </ion-item> -->\n\n \n\n\n\n    <div margin-top>\n\n      <button ion-button block color="dark" tappable (click)="RegisterNowUserProfile()">\n\n        SIGN UP\n\n      </button>\n\n\n\n    </div>\n\n\n\n    <!-- Other links -->\n\n    <div text-center margin-top>\n\n      <span ion-text color="primary" tappable (click)="login()">I have an account</span>\n\n    </div>\n\n\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"D:\MobileApp\corviBL\corviBL\src\pages\register\register.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_http_service_http_service__["a" /* HttpServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_util_alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_6__providers_util_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_8__providers_baseUrlGenerator_baseurlgenerator__["a" /* BaseURLProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormBuilder */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnquiryCargoDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__enquiry__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__enquiry_package_detail__ = __webpack_require__(376);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * @author Sachin Semlety
 * @email sachin.semlety@kalelogistics.in
 * @create date 2019-08-06 10:22:43
 * @modify date 2019-08-06 10:22:43
 * @desc [description]
 */






var EnquiryCargoDetailPage = /** @class */ (function () {
    function EnquiryCargoDetailPage(navCtrl, navParams, formBuilder, globalService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.globalService = globalService;
        // Just to animate the fab
        this.fabGone = false;
        this.title = "Cargo Details";
        this.showSearchBar = false;
        this.cargoDetailsForm = this.formBuilder.group({
            origin: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            destination: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            commodity: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            cargo_description: [''],
            gross_wt: [''],
            chargeable_wt: [''],
            volume: [''],
            chargeable_volume: [''],
        });
    }
    EnquiryCargoDetailPage.prototype.logForm = function () {
        console.log(this.cargoDetailsForm.value);
    };
    EnquiryCargoDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EnquiryDetailPage');
    };
    EnquiryCargoDetailPage.prototype.previous = function () {
        this.globalService.routePage(__WEBPACK_IMPORTED_MODULE_4__enquiry__["a" /* EnquiryPage */]);
    };
    EnquiryCargoDetailPage.prototype.next = function () {
        this.globalService.routePage(__WEBPACK_IMPORTED_MODULE_5__enquiry_package_detail__["a" /* EnquiryPackageDetailPage */]);
    };
    EnquiryCargoDetailPage.prototype.ionViewWillEnter = function () {
        this.fabGone = false;
    };
    EnquiryCargoDetailPage.prototype.ionViewWillLeave = function () {
        this.fabGone = true;
    };
    EnquiryCargoDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-enquiry-cargo-detail',template:/*ion-inline-start:"D:\MobileApp\corviBL\corviBL\src\pages\enquiry\detail\enquiry-cargo-details.html"*/'<Corvi-header [title]="title" [hidden]="showSearchBar"></Corvi-header>\n\n<ion-content class="marginTop57">\n\n  <form [formGroup]="cargoDetailsForm" (ngSubmit)="logForm()" style="margin-bottom: 160px;">\n\n    <ion-item>\n\n      <ion-label floating>Origin(Country-City-POL)</ion-label>\n\n      <ion-input type="text" class="text-primary" formControlName="origin"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label floating>Destination(Country-City-POD)</ion-label>\n\n      <ion-input type="text" class="text-primary" formControlName="destination"></ion-input>\n\n    </ion-item>\n\n    <ion-item class="margin-top-16">\n\n      <ion-label>Incoterms</ion-label>\n\n      <ion-select placeholder="Select">\n\n        <ion-option value="air">AIR</ion-option>\n\n        <ion-option value="ocean">OCEAN</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n    <ion-item class="margin-top-16">\n\n      <ion-label>Delivery Terms</ion-label>\n\n      <ion-select placeholder="Select">\n\n        <ion-option value="air">AIR</ion-option>\n\n        <ion-option value="ocean">OCEAN</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n    <ion-grid style="padding: 0px !important;">\n\n      <ion-row>\n\n        <ion-col>\n\n          <ion-item>\n\n            <ion-label floating>Commodity</ion-label>\n\n            <ion-input type="text" class="text-primary" formControlName="commodity"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n        <!-- <ion-col>  -->\n\n        <button [round]="true" color="primary" ion-button icon-only clear style="margin-top: 30px;">\n\n          <ion-icon name="create"></ion-icon>\n\n        </button>\n\n        <!-- </ion-col> -->\n\n      </ion-row>\n\n    </ion-grid>\n\n    <ion-item>\n\n      <ion-label floating>Cargo Description</ion-label>\n\n      <ion-textarea formControlName="cargo_description"></ion-textarea>\n\n    </ion-item>\n\n    <ion-grid style="padding: 0px !important;">\n\n      <ion-row>\n\n        <ion-col>\n\n          <ion-item>\n\n            <ion-label floating>Gross Wt.</ion-label>\n\n            <ion-input type="text" class="text-primary" formControlName="gross_wt"></ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label>KGS</ion-label>\n\n            <ion-select placeholder="Select">\n\n              <ion-option value="air">AIR</ion-option>\n\n              <ion-option value="ocean">OCEAN</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col>\n\n          <ion-item>\n\n            <ion-label floating>Chargeable Wt.</ion-label>\n\n            <ion-input type="text" class="text-primary" formControlName="chargeable_wt"></ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label>KGS</ion-label>\n\n            <ion-select placeholder="Select">\n\n              <ion-option value="air">AIR</ion-option>\n\n              <ion-option value="ocean">OCEAN</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n    <ion-grid style="padding: 0px !important;">\n\n      <ion-row>\n\n        <ion-col>\n\n          <ion-item>\n\n            <ion-label floating>Volume</ion-label>\n\n            <ion-input type="text" class="text-primary" formControlName="volume"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col>\n\n          <ion-item>\n\n            <ion-label floating>Chargeable Volume</ion-label>\n\n            <ion-input type="text" class="text-primary" formControlName="chargeable_volume"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n    <ion-item>\n\n      <ion-label floating>Total packages</ion-label>\n\n      <ion-input type="text" class="text-primary" formControlName="commodity"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label floating>Remarks</ion-label>\n\n      <ion-input type="text" class="text-primary" formControlName="commodity"></ion-input>\n\n    </ion-item>\n\n    <button ion-button type="submit" [disabled]="!cargoDetailsForm.valid">Package Details>></button>\n\n  </form>\n\n  <br>\n\n  <br>\n\n  <br>\n\n  <br>\n\n  <br>\n\n  <br>\n\n</ion-content>\n\n<ion-fab left bottom #fab1>\n\n  <button class="pop-in" ion-fab color="primary" [ngClass]="{\'pop-out\': fabGone}" (click)="previous()">\n\n    <ion-icon name="arrow-round-back"></ion-icon>\n\n  </button>\n\n</ion-fab>\n\n\n\n<ion-fab right bottom #fab2>\n\n  <button class="pop-in" ion-fab color="primary" [ngClass]="{\'pop-out\': fabGone}" (click)="next()">\n\n    <ion-icon name="arrow-round-forward"></ion-icon>\n\n  </button>\n\n</ion-fab>'/*ion-inline-end:"D:\MobileApp\corviBL\corviBL\src\pages\enquiry\detail\enquiry-cargo-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */]])
    ], EnquiryCargoDetailPage);
    return EnquiryCargoDetailPage;
}());

//# sourceMappingURL=enquiry-cargo-detail.js.map

/***/ }),

/***/ 376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnquiryPackageDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__enquiry_contact_detail__ = __webpack_require__(377);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * @author Sachin Semlety
 * @email sachin.semlety@kalelogistics.in
 * @create date 2019-08-06 10:22:43
 * @modify date 2019-08-06 10:22:43
 * @desc [description]
 */





var EnquiryPackageDetailPage = /** @class */ (function () {
    function EnquiryPackageDetailPage(navCtrl, navParams, formBuilder, globalService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.globalService = globalService;
        this.title = "Package Details";
        this.showSearchBar = false;
        this.packageDetailsForm = this.formBuilder.group({
            Nop: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            units: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            length: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            width: [''],
            height: [''],
            GrossWt: [''],
        });
    }
    EnquiryPackageDetailPage.prototype.logForm = function () {
        console.log(this.packageDetailsForm.value);
    };
    EnquiryPackageDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EnquiryDetailPage');
    };
    EnquiryPackageDetailPage.prototype.contact = function () {
        this.globalService.routePage(__WEBPACK_IMPORTED_MODULE_4__enquiry_contact_detail__["a" /* EnquiryContactDetailPage */]);
    };
    EnquiryPackageDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-enquiry-package-detail',template:/*ion-inline-start:"D:\MobileApp\corviBL\corviBL\src\pages\enquiry\detail\enquiry-package-details.html"*/'<Corvi-header [title]="title" [hidden]="showSearchBar"></Corvi-header>\n\n<ion-content class="marginTop57">\n\n  <form [formGroup]="packageDetailsForm">\n\n    <ion-item>\n\n      <ion-label floating>No. of packages</ion-label>\n\n      <ion-input type="text" class="text-primary" formControlName="Nop"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Units</ion-label>\n\n      <ion-select placeholder="Select">\n\n        <ion-option value="one">1</ion-option>\n\n        <ion-option value="two">2</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n\n\n    <ion-grid class="marginTop12">\n\n      <ion-row>\n\n        <ion-col>\n\n          <ion-item>\n\n            <ion-label>L*W*H</ion-label>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col col-2>\n\n          <ion-input type="text" class="text-primary border_solid" formControlName="length"></ion-input>\n\n        </ion-col>\n\n        <ion-col class="star">*</ion-col>\n\n        <ion-col col-2>\n\n          <ion-input type="text" class="text-primary border_solid" formControlName="width"></ion-input>\n\n        </ion-col>\n\n        <ion-col class="star">*</ion-col>\n\n        <ion-col col-2>\n\n          <ion-input type="text" class="text-primary border_solid" formControlName="height"></ion-input>\n\n        </ion-col>\n\n        <ion-col>\n\n          <ion-item class="marginTop12">\n\n            <ion-label>Inches</ion-label>\n\n            <ion-select placeholder="Select">\n\n              <ion-option value="one">1</ion-option>\n\n              <ion-option value="two">2</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col>\n\n          <ion-item>\n\n            <ion-label floating>Gross Wt.</ion-label>\n\n            <ion-input type="text" class="text-primary" formControlName="GrossWt"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col>\n\n          <ion-item style="margin-top: 22px;">\n\n            <ion-label>KGS</ion-label>\n\n            <ion-select placeholder="Select">\n\n              <ion-option value="one">1</ion-option>\n\n              <ion-option value="two">2</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n\n\n    <ion-item>\n\n      <ion-label>Remarks</ion-label>\n\n      <ion-textarea></ion-textarea>\n\n    </ion-item>\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col> <button ion-button icon-start block color="primary" tappable>\n\n            <!-- <ion-icon name="save"></ion-icon> -->\n\n            Save\n\n          </button></ion-col>\n\n        <ion-col><button ion-button icon-start block color="primary" tappable>\n\n            <!-- <ion-icon name="close-circle"></ion-icon> -->\n\n            View\n\n          </button></ion-col>\n\n        <ion-col> <button ion-button icon-start block color="primary" tappable (click)="contact()">\n\n            <!-- <ion-icon name="save"></ion-icon> -->\n\n            Next\n\n          </button></ion-col>\n\n        <ion-col><button ion-button icon-start block color="primary" tappable>\n\n            <!-- <ion-icon name="close-circle"></ion-icon> -->\n\n            Back\n\n          </button></ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </form>\n\n  <br>\n\n  <br>\n\n  <br>\n\n  <br>\n\n  <br>\n\n  <br>\n\n</ion-content>'/*ion-inline-end:"D:\MobileApp\corviBL\corviBL\src\pages\enquiry\detail\enquiry-package-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */]])
    ], EnquiryPackageDetailPage);
    return EnquiryPackageDetailPage;
}());

//# sourceMappingURL=enquiry-package-detail.js.map

/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnquiryContactDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * @author Sachin Semlety
 * @email sachin.semlety@kalelogistics.in
 * @create date 2019-08-06 10:22:43
 * @modify date 2019-08-06 10:22:43
 * @desc [description]
 */



var EnquiryContactDetailPage = /** @class */ (function () {
    function EnquiryContactDetailPage(navCtrl, navParams, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.title = "Contact Details";
        this.showSearchBar = false;
        this.contactDetailsForm = this.formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            location: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            emailID: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(70), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            organization: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            contact_No: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            Address: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
        });
    }
    EnquiryContactDetailPage.prototype.logForm = function () {
        console.log(this.contactDetailsForm.value);
    };
    EnquiryContactDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EnquiryDetailPage');
    };
    EnquiryContactDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-enquiry-contact-detail',template:/*ion-inline-start:"D:\MobileApp\corviBL\corviBL\src\pages\enquiry\detail\enquiry-contact-detail.html"*/'<Corvi-header [title]="title" [hidden]="showSearchBar"></Corvi-header>\n\n<ion-content class="marginTop57">\n\n  <form [formGroup]="contactDetailsForm" (ngSubmit)="logForm()">\n\n    <ion-item>\n\n      <ion-label floating>Name</ion-label>\n\n      <ion-input type="text" class="text-primary" formControlName="name"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label floating>Location</ion-label>\n\n      <ion-input type="text" class="text-primary" formControlName="location"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label floating>Email Id</ion-label>\n\n      <ion-input type="email" class="text-primary" formControlName="emailID"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label floating>Organization</ion-label>\n\n      <ion-input type="text" class="text-primary" formControlName="organization"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label floating>Contact No.</ion-label>\n\n      <ion-input type="number" class="text-primary" formControlName="contact_No"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label floating>Address</ion-label>\n\n      <ion-input type="text" class="text-primary" formControlName="Address"></ion-input>\n\n    </ion-item>\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col> <button ion-button icon-start block color="primary" tappable>\n\n            <!-- <ion-icon name="save"></ion-icon> -->\n\n            Back\n\n          </button></ion-col>\n\n        <ion-col><button ion-button icon-start block color="primary" type="submit"\n\n            [disabled]="!contactDetailsForm.valid" tappable>\n\n            <!-- <ion-icon name="close-circle"></ion-icon> -->\n\n            Submit\n\n          </button></ion-col>\n\n        <ion-col> <button ion-button icon-start block color="primary" tappable>\n\n            <!-- <ion-icon name="save"></ion-icon> -->\n\n            Cancel\n\n          </button></ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </form>\n\n  <br>\n\n  <br>\n\n  <br>\n\n  <br>\n\n  <br>\n\n  <br>\n\n</ion-content>'/*ion-inline-end:"D:\MobileApp\corviBL\corviBL\src\pages\enquiry\detail\enquiry-contact-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], EnquiryContactDetailPage);
    return EnquiryContactDetailPage;
}());

//# sourceMappingURL=enquiry-contact-detail.js.map

/***/ }),

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export User */
/* unused harmony export tempPwd */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_login__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_service_http_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_util_toast_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_global_global__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_baseUrlGenerator_baseurlgenerator__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());

var tempPwd = /** @class */ (function () {
    function tempPwd() {
    }
    return tempPwd;
}());

var ResetPasswordPage = /** @class */ (function () {
    function ResetPasswordPage(navCtrl, navParams, alertCtrl, toastCtrl, http, toastService, globalService, baseUrlProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.toastService = toastService;
        this.globalService = globalService;
        this.baseUrlProvider = baseUrlProvider;
        this.showPass = false;
        this.type = "password";
        this.showBtn = false;
        this.showDiv = false;
        this.user = new User();
        this.temp = new tempPwd();
    }
    ResetPasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ResetPasswordPage');
    };
    ResetPasswordPage.prototype.ionViewDidEnter = function () {
        if (this.username == undefined || this.username == '') {
            // this.enterUsernameAlert();
            this.showAlert('Please enter Username', 'An email containing temporary password will be sent on the entered username.');
        }
    };
    ResetPasswordPage.prototype.toLogin = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__login_login__["a" /* LoginPage */]);
    };
    ResetPasswordPage.prototype.showPassword = function () {
        this.showPass = !this.showPass;
        if (this.showPass) {
            this.type = "text";
        }
        else {
            this.type = "password";
        }
    };
    ResetPasswordPage.prototype.savePassword = function () {
        var _this = this;
        if (this.newpassword != this.confpassword) {
            this.showAlert('Confirm Password Alert', 'New Password & Confirm Password does not match.');
            this.confpassword == '';
            return;
        }
        this.user.UserId = this.username;
        this.user.TempPassword = this.temppassword;
        this.user.Password = this.newpassword;
        this.user.IdentityCode = this.customerCode;
        try {
            var companyCode = this.customerCode.slice(0, 3);
            this.baseUrlProvider.setBaseURL(companyCode).then(function (msg) {
                _this.http.POST(__WEBPACK_IMPORTED_MODULE_6__constants__["a" /* Constants */].Corvi_Services.TempResetPassword, _this.user).then(function (response) {
                    console.log('check new password saved response here: ', response);
                    if (response.includes('Invalid Password')) {
                        _this.showAlert('Invalid Request', 'You seem to enter wrong temporary password or CI code.');
                        _this.newpassword == '';
                        _this.confpassword == '';
                        _this.temppassword == '';
                    }
                    if (response.includes('Reset Password')) {
                        _this.showAlert('Success', 'Password changed. Please login with new password');
                        _this.toLogin();
                    }
                });
            });
        }
        catch (msg) {
            this.globalService.showAlert('Enter valid Customer Identity code');
        }
    };
    ResetPasswordPage.prototype.showCodeBTN = function () {
        if (this.username != '' && this.customerCode != '') {
            this.showBtn = true;
        }
        else {
            this.showBtn = false;
        }
    };
    ResetPasswordPage.prototype.showAlert = function (title, msg) {
        var alert = this.alertCtrl.create({
            title: title,
            message: msg,
            buttons: [
                {
                    text: 'OK',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
            ]
        });
        alert.present();
    };
    ResetPasswordPage.prototype.sendTempPassword = function () {
        var _this = this;
        this.temp.UserId = this.username;
        this.temp.TempPassword = '';
        this.temp.NewPassword = '';
        this.temp.IdentityCode = this.customerCode;
        try {
            var companyCode = this.customerCode.slice(0, 3);
            this.baseUrlProvider.setBaseURL(companyCode).then(function (msg) {
                console.log('check msg from login()', msg);
                _this.http.POST(__WEBPACK_IMPORTED_MODULE_6__constants__["a" /* Constants */].Corvi_Services.TempResetPassword, _this.temp).then(function (response) {
                    console.log('check temp password response here: ', response);
                    if (response.includes('Invalid User')) {
                        _this.invalidUserAlert();
                    }
                    if (response.includes('Valid User')) {
                        _this.showDiv = true;
                        _this.showBtn = false; //new for defect 193401
                        _this.validUserToast();
                    }
                }, function (err) {
                    console.log('error for sending email ', err);
                    _this.showAlert('Error', 'Email not sent.');
                });
            });
        }
        catch (msg) {
            this.globalService.showAlert('Enter valid Customer Identity code');
        }
    };
    ResetPasswordPage.prototype.invalidUserAlert = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Invalid Request',
            message: 'Invalid User.',
            buttons: [
                {
                    text: 'OK',
                    role: 'cancel',
                    handler: function () {
                        // console.log('Cancel clicked');
                        _this.globalService.setRootPage(__WEBPACK_IMPORTED_MODULE_0__login_login__["a" /* LoginPage */]);
                    }
                },
            ]
        });
        alert.present();
    };
    ResetPasswordPage.prototype.validUserToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Please check the registered email',
            duration: 3000,
            position: 'top'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    ResetPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'page-reset-password',template:/*ion-inline-start:"D:\MobileApp\corviBL\corviBL\src\pages\reset-password\reset-password.html"*/'<ion-header no-border>\n\n    <ion-grid class="gridDesign">\n\n        <ion-row>\n\n          <ion-col col-6>\n\n            <div padding-horizontal class="animated fadeInDown">\n\n              <div class="logoLeft">\n\n               <img class="imgLeft" src="../assets/img/Corvi_Logo.png">\n\n              </div>\n\n            </div>\n\n          </ion-col>\n\n  \n\n          <ion-col col-6>\n\n            <div padding-horizontal class="animated fadeInDown">\n\n              <div class="logoRight"></div>\n\n              <img class="imgRight" src="../assets/img/Kale_Logo.png">\n\n            </div>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n  \n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="animated fadeIn login">\n\n    <div class="login-content">\n\n    \n\n        <!-- Login form -->\n\n        <form class="list-form" #f="ngForm" >\n\n          <div class="contaier-login">\n\n    \n\n            <ion-row>\n\n              <ion-col>\n\n    \n\n                <h3 style="text-align: center;">Reset Password</h3>\n\n    \n\n              </ion-col>\n\n            </ion-row>\n\n            <ion-item>\n\n              <ion-label stacked>\n\n                <!-- <ion-icon name="person" item-start class="text-primary"></ion-icon> -->\n\n                Enter Username\n\n              </ion-label>\n\n              <ion-input type="text" [(ngModel)]="username"\n\n              #nameCtrl="ngModel" name="username" required \n\n\n\n              ></ion-input>  \n\n            </ion-item>\n\n            <!-- (ionBlur)="sendTempPassword()" on line 45 -->\n\n            <!-- <div class="errorbox" style="color:tomato" *ngIf="!nameCtrl.valid && nameCtrl.touched">required</div> -->\n\n\n\n            <ion-item>\n\n              <ion-label stacked>\n\n                <!-- <ion-icon name="person" item-start class="text-primary"></ion-icon> -->\n\n                Enter Customer Identity Code\n\n              </ion-label>\n\n              <ion-input type="text" [(ngModel)]="customerCode"\n\n              #nameCtrl="ngModel" name="customerCode" required (ionChange)="showCodeBTN()"\n\n              ></ion-input>  \n\n            </ion-item>\n\n            <!-- <div class="errorbox" style="color:tomato" *ngIf="!nameCtrl.valid && nameCtrl.touched">required</div> -->\n\n    \n\n            <div *ngIf="showDiv">\n\n            <ion-item>\n\n              <ion-label stacked>\n\n                <!-- <ion-icon name="lock" item-start class="text-primary"></ion-icon> -->\n\n                Temporary Password\n\n              </ion-label>\n\n              <ion-input type="{{type}}" [(ngModel)]="temppassword"\n\n          #temppasswordCtrl="ngModel" name="temppassword" required\n\n          ></ion-input>\n\n          <button *ngIf="!showPass" ion-button clear color="dark" type="button" item-right (click)="showPassword()"><ion-icon name="ios-eye-off-outline"></ion-icon></button>\n\n          <button *ngIf="showPass" ion-button clear color="dark" type="button" item-right (click)="showPassword()"><ion-icon name="ios-eye-outline"></ion-icon></button>\n\n            </ion-item>\n\n            <!-- <div class="errorbox" style="color:tomato" *ngIf="!temppasswordCtrl.valid && temppasswordCtrl.touched">required</div> -->\n\n    \n\n            <ion-item>\n\n                <ion-label stacked>\n\n                  <!-- <ion-icon name="person" item-start class="text-primary"></ion-icon> -->\n\n                  New Password\n\n                </ion-label>\n\n                <ion-input type="text" [(ngModel)]="newpassword"\n\n                #passwordCtrl="ngModel" name="newpassword" required></ion-input>\n\n              </ion-item>\n\n              <!-- <div class="errorbox" style="color:tomato" *ngIf="!passwordCtrl.valid && passwordCtrl.touched">required</div> -->\n\n\n\n              <ion-item>\n\n                  <ion-label stacked>\n\n                    <!-- <ion-icon name="person" item-start class="text-primary"></ion-icon> -->\n\n                    Re-Type New Password\n\n                  </ion-label>\n\n                  <ion-input type="text" [(ngModel)]="confpassword"\n\n                  #confpasswordCtrl="ngModel" name="confpassword" required></ion-input>\n\n                </ion-item>\n\n                <!-- <div class="errorbox" style="color:tomato" *ngIf="!confpasswordCtrl.valid && confpasswordCtrl.touched">required</div> -->\n\n              </div>\n\n            <div>\n\n              <ion-row>\n\n                <ion-col col-4 class="my-width" style="padding-left: 23px;">\n\n                <button class="button button-dark customBtn" ion-button color="light" (click)="toLogin()">\n\n                     CANCEL\n\n                  </button>\n\n                </ion-col>\n\n\n\n                <ion-col col-4 class="my-width" style="padding-left: 18px;">\n\n                  <button *ngIf="showBtn" class="button button-dark customBtn" ion-button color="primary" (click)="sendTempPassword()">\n\n                       SEND CODE\n\n                    </button>\n\n                  </ion-col>\n\n\n\n                <!-- <ion-col col-4></ion-col> -->\n\n                <ion-col col-4 class="my-width" style="padding-left: 15px;">\n\n                  <button class="button button-dark customBtn" *ngIf="showDiv" ion-button color="primary" [disabled]="!f.valid" (click)="savePassword()">\n\n                       SAVE\n\n                    </button>\n\n                  </ion-col>\n\n                  </ion-row>\n\n            </div>\n\n    \n\n          </div>\n\n        </form>\n\n    \n\n    \n\n      </div>\n\n      <div class="addOns">\n\n          <div class="addOnsText">\n\n            <h4>Additional Services</h4>\n\n          </div>\n\n      \n\n          <ion-grid>\n\n            <ion-row>\n\n              <ion-col>\n\n                  <div class="container" style="opacity: 0.2">\n\n                      <img src="../assets/img/moreservices.png">\n\n                      <h6>More Services</h6>\n\n                    </div>\n\n              </ion-col>\n\n              <ion-col>\n\n                  <div class="container">\n\n                      <img src="../assets/img/contactus.png">\n\n                      <h6>Contact Us</h6>\n\n                    </div>\n\n              </ion-col>\n\n              <ion-col>\n\n                  <div class="container">\n\n                      <img src="../assets/img/monitor_support.png">\n\n                      <h6>24 x 7 Support</h6>\n\n                    </div>\n\n              </ion-col>\n\n            </ion-row>\n\n          </ion-grid>\n\n        </div>\n\n    </ion-content>\n\n    <ion-footer>\n\n        <div class = "bar bar-footer">\n\n            <ion-row>\n\n              <ion-col col-6 style="opacity: 0.1">\n\n            <h6 style="text-align: center;" class = "title">Terms and conditions</h6>\n\n          </ion-col>\n\n    \n\n          <ion-col col-6 style="opacity: 0.1">\n\n              <h6 style="text-align: center;" class = "title">Privacy Policy</h6>\n\n            </ion-col>\n\n          </ion-row>\n\n         </div>\n\n    </ion-footer>\n\n'/*ion-inline-end:"D:\MobileApp\corviBL\corviBL\src\pages\reset-password\reset-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_http_service_http_service__["a" /* HttpServiceProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_util_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_5__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_baseUrlGenerator_baseurlgenerator__["a" /* BaseURLProvider */]])
    ], ResetPasswordPage);
    return ResetPasswordPage;
}());

//# sourceMappingURL=reset-password.js.map

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export configParamsList */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigureParametersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_http_service_http_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_util_toast_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var configParamsList = /** @class */ (function () {
    function configParamsList() {
    }
    return configParamsList;
}());

var ConfigureParametersPage = /** @class */ (function () {
    function ConfigureParametersPage(navCtrl, navParams, globalService, toastService, http, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.globalService = globalService;
        this.toastService = toastService;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.UserDetails = [];
        this.userName = '';
        this.emailId = '';
        this.BranchTbl = [];
        this.ModeTbl = [];
        this.ServiceTBl = [];
        this.modes = [];
        this.services = [];
        this.shipments = [];
        this.branchCode = '0';
        this.transportMode = '0';
        this.serviceCode = '0';
        this.title = 'Configure Parameters';
        this.VenType = '1';
        this.UserDetails = this.globalService.get('userDetails');
        // this.BranchTbl = this.UserDetails[Object.keys(this.UserDetails)[1]]["Table4"];
        // this.ModeTbl = this.UserDetails[Object.keys(this.UserDetails)[1]]["Table3"];
        // this.ServiceTBl = this.UserDetails[Object.keys(this.UserDetails)[1]]["Table3"];
        // this.modes = this.ModeTbl.filter(a => a.Identifier == "TransportMode");
        // this.services = this.ModeTbl.filter(a => a.Identifier == "Service");
        // this.shipments = this.ModeTbl.filter(a => a.Identifier == "ShipmentType");
        if (this.globalService.isCordovaAvailable()) {
            this.modes = JSON.parse(localStorage.getItem('TransportMode'));
            this.services = JSON.parse(localStorage.getItem('ServiceType'));
            this.shipments = JSON.parse(localStorage.getItem('ShipmentType'));
            this.BranchTbl = JSON.parse(localStorage.getItem('BranchTable'));
        }
        else {
            this.modes = JSON.parse(localStorage.getItem('TransportMode'));
            this.services = JSON.parse(localStorage.getItem('ServiceType'));
            this.shipments = JSON.parse(localStorage.getItem('ShipmentType'));
            this.BranchTbl = JSON.parse(localStorage.getItem('BranchTable'));
        }
        this.configList = new configParamsList();
    }
    ConfigureParametersPage.prototype.ngOnInit = function () {
        this.userName = this.globalService.defaultUsername;
        this.emailId = this.globalService.defaultEmailId;
        this.branchCode = this.globalService.globalDefaultBranchCode;
        if (typeof (this.globalService.defaultMode) != 'undefined') {
            this.transportMode = this.globalService.defaultMode;
        }
        if (typeof (this.globalService.defaultService) != 'undefined') {
            this.serviceCode = this.globalService.defaultService;
        }
        if (typeof (this.globalService.defaultMode) == 'undefined') {
            this.transportMode = 1;
        }
        if (typeof (this.globalService.defaultService) == 'undefined') {
            this.serviceCode = 1;
        }
    };
    ConfigureParametersPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConfigureParametersPage');
    };
    ConfigureParametersPage.prototype.showAlert = function (title, msg) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: title,
            message: msg,
            buttons: [
                {
                    text: 'OK',
                    handler: function () {
                        _this.globalService.setRootPage(__WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard__["a" /* DashboardPage */]);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
            ]
        });
        alert.present();
    };
    ConfigureParametersPage.prototype.backToDashBoard = function () {
        this.globalService.setRootPage(__WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard__["a" /* DashboardPage */]);
    };
    ConfigureParametersPage.prototype.saveConfigSettings = function () {
        var _this = this;
        if (this.branchCode == '0' || this.transportMode == '0' || this.serviceCode == '0' || this.emailId == '') {
            this.toastService.show('Please select the required fields.', 3000, true, 'top', 'toast-container');
            return;
        }
        this.configList.UserId = localStorage.getItem('userId');
        this.configList.BranchCode = this.branchCode;
        this.configList.Mode = this.transportMode;
        this.configList.Service = this.serviceCode;
        this.configList.ShipmentStatus = '';
        this.configList.NoOfRecords = '';
        this.configList.JobType = this.VenType;
        this.configList.Email = this.emailId;
        this.http.POST(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* Constants */].Corvi_Services.UserConfigurationSave, this.configList).then(function (response) {
            console.log('check config response here: ', response);
            // if(response == 'Success'){
            //   this.showAlert('Success','Configurations have been saved');
            // }
            if (response.includes('Success')) {
                // console.log('message is from this if block');
                _this.showAlert('Success', 'Configurations have been saved');
            }
            else {
                _this.showAlert('Failed', 'Configurations could not be saved');
                return;
            }
        });
    };
    ConfigureParametersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-configure-parameters',template:/*ion-inline-start:"D:\MobileApp\corviBL\corviBL\src\pages\configure-parameters\configure-parameters.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <button right ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title id="Dashboard" center text-center>\n      {{title}}\n    </ion-title>\n    <ion-buttons left>\n      <button ion-button icon-only (click)="backToDashBoard();">\n        <ion-icon name="ios-arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-row padding class="ShadowBox13" style="margin-top: 10px;">\n    <ion-col col-12>\n      <label>\n        <b>Username</b>\n      </label>\n    </ion-col>\n    <ion-col col-12>\n      <input col-12 type="text" name="userName" [(ngModel)]="userName">\n      <!-- <div class="errorbox" style="color:tomato" *ngIf="userName.length == \'0\'">*required</div> -->\n    </ion-col>\n\n    <ion-col col-12>\n      <label>\n        <b>Email Id</b>\n      </label>  <font color="red" class="margin12">*</font>\n    </ion-col>\n    <ion-col col-12>\n      <input col-12 type="text" name="emailId" [(ngModel)]="emailId">\n      <!-- <div class="errorbox" style="color:tomato" *ngIf="emailId.length == \'0\'">*required</div> -->\n    </ion-col>\n\n    <ion-col col-12>\n      <label>\n        <b>Default Configuration</b>\n      </label>\n    </ion-col>\n\n    <ion-col col-12>\n      <label>\n        <b>Branch</b>\n      </label>  <font color="red" class="margin12">*</font>\n    </ion-col>\n    <ion-col col-12>\n      <select id="ddlBrach" name="ddlBrach" col-12 [(ngModel)]="branchCode">\n        <option [value]="0" disabled selected>Select</option>\n        <option *ngFor="let brData of BranchTbl" [value]="brData.BranchCode">{{brData.branch}}</option>\n      </select>\n      <!-- <div class="errorbox" style="color:tomato" *ngIf="branchCode == \'0\'">*required</div> -->\n    </ion-col>\n\n    <ion-col col-12>\n      <label>\n        <b>Mode</b>\n      </label>  <font color="red" class="margin12">*</font>\n    </ion-col>\n    <ion-col col-12>\n      <select id="ddlMode" name="ddlMode" col-12 [(ngModel)]="transportMode">\n        <option [value]="0" disabled selected>Select</option>\n        <option *ngFor="let modeData of modes" [value]="modeData.KeyValue">{{modeData.Description}}</option>\n      </select>\n      <!-- <div class="errorbox" style="color:tomato" *ngIf="transportMode == \'0\'">*required</div> -->\n    </ion-col>\n\n    <ion-col col-12>\n      <label>\n        <b>Service</b>\n      </label>  <font color="red" class="margin12">*</font>\n    </ion-col>\n    <ion-col col-12>\n      <select id="ddlService" name="ddlService" col-12 [(ngModel)]="serviceCode">\n        <option [value]="0" disabled selected>Select</option>\n        <option *ngFor="let serviceData of services" [value]="serviceData.KeyValue">{{serviceData.Description}}</option>\n      </select>\n      <!-- <div class="errorbox" style="color:tomato" *ngIf="serviceCode == \'0\'">*required</div> -->\n    </ion-col>\n\n    <ion-col col-12>\n      <b>Job Type</b>\n    </ion-col>\n    <ion-col col-6>\n      <input [(ngModel)]="VenType" type="radio" class="stv-radio-button" name="jobType" value="1"\n        id="1" />\n      <label for="1">Freight Forwarding</label>\n    </ion-col>\n    <ion-col col-6>\n      <input [(ngModel)]="VenType" type="radio" class="stv-radio-button" name="jobType" value="2"\n        id="2" />\n      <label for="2">Customs</label>\n    </ion-col>\n\n    </ion-row>\n\n</ion-content>\n<ion-footer class="ion-footer">\n  <ion-row padding class="">\n    <ion-col col-6>\n      <button ion-button  block class="btnRadius btncancel" (click)="backToDashBoard();">\n        <ion-icon ></ion-icon>\n        Cancel\n      </button>\n    </ion-col>\n\n    <ion-col col-6>\n      <button ion-button icon-start block class="btnRadius" (click)="saveConfigSettings();">\n        <ion-icon ></ion-icon>\n       Save\n      </button>\n    </ion-col>\n  </ion-row>\n  <div class="label-white toolbar-background-md" center text-center>\n    <!-- © Kale Logistics Solutions Private Limited. {{appBuildConfig.fullYear}} Version {{appBuildConfig.version}} -->\n  </div>\n</ion-footer>\n\n'/*ion-inline-end:"D:\MobileApp\corviBL\corviBL\src\pages\configure-parameters\configure-parameters.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_util_toast_service__["a" /* ToastService */], __WEBPACK_IMPORTED_MODULE_4__providers_http_service_http_service__["a" /* HttpServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], ConfigureParametersPage);
    return ConfigureParametersPage;
}());

//# sourceMappingURL=configure-parameters.js.map

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export configParamsList */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerSettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_http_service_http_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_util_toast_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var configParamsList = /** @class */ (function () {
    function configParamsList() {
    }
    return configParamsList;
}());

var CustomerSettingsPage = /** @class */ (function () {
    function CustomerSettingsPage(navCtrl, navParams, globalService, toastCtrl, alertCtrl, http, toastService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.globalService = globalService;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.toastService = toastService;
        this.UserDetails = [];
        this.userName = '';
        this.emailId = '';
        this.BranchTbl = [];
        this.ModeTbl = [];
        this.ServiceTBl = [];
        this.modes = [];
        this.services = [];
        this.shipments = [];
        this.branchCode = '0';
        this.transportMode = '0';
        this.serviceCode = '0';
        this.noOfRecords = '';
        this.title = 'Configure Parameters';
        this.VenType = '1';
        this.shipmentStatus = '1';
        this.UserDetails = this.globalService.get('userDetails');
        if (this.globalService.isCordovaAvailable()) {
            this.modes = JSON.parse(localStorage.getItem('TransportMode'));
            this.services = JSON.parse(localStorage.getItem('ServiceType'));
            this.shipments = JSON.parse(localStorage.getItem('ShipmentType'));
            this.BranchTbl = JSON.parse(localStorage.getItem('BranchTable'));
        }
        else {
            this.modes = JSON.parse(localStorage.getItem('TransportMode'));
            this.services = JSON.parse(localStorage.getItem('ServiceType'));
            this.shipments = JSON.parse(localStorage.getItem('ShipmentType'));
            this.BranchTbl = JSON.parse(localStorage.getItem('BranchTable'));
        }
        this.configList = new configParamsList();
    }
    CustomerSettingsPage.prototype.ngOnInit = function () {
        this.userName = this.globalService.defaultUsername;
        this.emailId = this.globalService.defaultEmailId;
        // this.transportMode = '1';
        // this.serviceCode = '2';
        this.branchCode = this.globalService.globalDefaultBranchCode;
        this.noOfRecords = this.globalService.defaultNoofRecords;
        if (typeof (this.globalService.defaultMode) != 'undefined') {
            this.transportMode = this.globalService.defaultMode;
        }
        if (typeof (this.globalService.defaultService) != 'undefined') {
            this.serviceCode = this.globalService.defaultService;
        }
        if (typeof (this.globalService.defaultMode) == 'undefined') {
            this.transportMode = '1';
        }
        if (typeof (this.globalService.defaultService) == 'undefined') {
            this.serviceCode = '2';
        }
    };
    CustomerSettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CustomerSettingsPage');
    };
    CustomerSettingsPage.prototype.showAlert = function (title, msg) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: title,
            message: msg,
            buttons: [
                {
                    text: 'OK',
                    handler: function () {
                        _this.globalService.setRootPage(__WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard__["a" /* DashboardPage */]);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
            ]
        });
        alert.present();
    };
    CustomerSettingsPage.prototype.backToDashBoard = function () {
        this.globalService.setRootPage(__WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard__["a" /* DashboardPage */]);
    };
    CustomerSettingsPage.prototype.saveConfigSettings = function () {
        var _this = this;
        if (this.branchCode == '0' || this.transportMode == '0' || this.serviceCode == '0' || this.emailId == '') {
            this.toastService.show('Please select the required fields.', 3000, true, 'top', 'toast-container');
            return;
        }
        if (this.noOfRecords.length > 2) {
            this.toastService.show('No of records length cannot exceed 99', 3000, true, 'top', 'toast-container');
            return;
        }
        if (this.noOfRecords.includes('-') || this.noOfRecords.includes('.') || this.noOfRecords.includes('+')
            || this.noOfRecords.includes('#') || this.noOfRecords.includes('/') || this.noOfRecords.includes('(') || this.noOfRecords.includes(')')
            || this.noOfRecords.includes('*') || this.noOfRecords.includes(',') || this.noOfRecords.includes(';') || this.noOfRecords.includes('N') || this.noOfRecords.includes(' ')) {
            this.toastService.show('No of records cannot contain special characters', 3000, true, 'top', 'toast-container');
            return;
        }
        this.configList.UserId = localStorage.getItem('userId');
        this.configList.BranchCode = this.branchCode;
        this.configList.Mode = this.transportMode;
        this.configList.Service = this.serviceCode;
        this.configList.ShipmentStatus = this.shipmentStatus;
        this.configList.NoOfRecords = this.noOfRecords;
        this.configList.JobType = this.VenType;
        this.configList.Email = this.emailId;
        this.http.POST(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* Constants */].Corvi_Services.UserConfigurationSave, this.configList).then(function (response) {
            console.log('check config response here: ', response);
            // if(response == 'Success'){
            //   this.showAlert('Success','Configurations have been saved');
            // }
            if (response.includes('Success')) {
                // console.log('message is from this if block');
                _this.showAlert('Success', 'Configurations have been saved');
            }
            else {
                _this.showAlert('Failed', 'Configurations could not be saved');
                return;
            }
        });
    };
    CustomerSettingsPage.prototype.numberOnlyValidation = function (event) {
        var pattern = /[0-9.,]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar)) {
            // invalid character, prevent input
            event.preventDefault();
        }
    };
    CustomerSettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-customer-settings',template:/*ion-inline-start:"D:\MobileApp\corviBL\corviBL\src\pages\customer-settings\customer-settings.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <button right ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title id="Dashboard" center text-center>\n      {{title}}\n    </ion-title>\n    <ion-buttons left>\n      <button ion-button icon-only (click)="backToDashBoard();">\n        <ion-icon name="ios-arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-row padding class="ShadowBox13" style="margin-top: 10px;">\n    <ion-col col-12>\n      <label>\n        <b>Username</b>\n      </label>\n    </ion-col>\n    <ion-col col-12>\n      <input col-12 type="text" name="userName" [(ngModel)]="userName">\n      <!-- <div class="errorbox" style="color:tomato" *ngIf="userName.length == \'0\'">*required</div> -->\n    </ion-col>\n\n    <ion-col col-12>\n      <label>\n        <b>Email Id</b>\n      </label>  <font color="red" class="margin12">*</font>\n    </ion-col>\n    <ion-col col-12>\n      <input col-12 type="text" name="emailId" [(ngModel)]="emailId">\n      <!-- <div class="errorbox" style="color:tomato" *ngIf="emailId.length == \'0\'">*required</div> -->\n    </ion-col>\n\n    <ion-col col-12>\n      <label>\n        <b>Default Configuration</b>\n      </label>\n    </ion-col>\n\n    <ion-col col-12>\n      <label>\n        <b>Branch</b>\n      </label>  <font color="red" class="margin12">*</font>\n    </ion-col>\n    <ion-col col-12>\n      <select id="ddlBrach" name="ddlBrach" col-12 [(ngModel)]="branchCode">\n        <option [value]="0" disabled selected>Select</option>\n        <option *ngFor="let brData of BranchTbl" [value]="brData.BranchCode">{{brData.branch}}</option>\n      </select>\n      <!-- <div class="errorbox" style="color:tomato" *ngIf="branchCode == \'0\'">*required</div> -->\n    </ion-col>\n\n    <ion-col col-12>\n      <label>\n        <b>Mode</b>\n      </label>  <font color="red" class="margin12">*</font>\n    </ion-col>\n    <ion-col col-12>\n      <select id="ddlMode" name="ddlMode" col-12 [(ngModel)]="transportMode">\n        <option [value]="0" disabled selected>Select</option>\n        <option *ngFor="let modeData of modes" [value]="modeData.KeyValue">{{modeData.Description}}</option>\n      </select>\n      <!-- <div class="errorbox" style="color:tomato" *ngIf="transportMode == \'0\'">*required</div> -->\n    </ion-col>\n\n    <ion-col col-12>\n      <label>\n        <b>Service</b>\n      </label>  <font color="red" class="margin12">*</font>\n    </ion-col>\n    <ion-col col-12>\n      <select id="ddlService" name="ddlService" col-12 [(ngModel)]="serviceCode">\n        <option [value]="0" disabled selected>Select</option>\n        <option *ngFor="let serviceData of services" [value]="serviceData.KeyValue">{{serviceData.Description}}</option>\n      </select>\n      <!-- <div class="errorbox" style="color:tomato" *ngIf="serviceCode == \'0\'">*required</div> -->\n    </ion-col>\n\n    <ion-col col-12>\n      <b>Job Type</b>\n    </ion-col>\n    <ion-col col-6>\n      <input [(ngModel)]="VenType" type="radio" class="stv-radio-button" name="jobType" value="1"\n        id="1" />\n      <label for="1">Freight Forwarding</label>\n    </ion-col>\n    <ion-col col-6>\n      <input [(ngModel)]="VenType" type="radio" class="stv-radio-button" name="jobType" value="2"\n        id="2" />\n      <label for="2">Customs</label>\n    </ion-col>\n\n    <ion-col col-12>\n      <b>Shipment Status</b>\n    </ion-col>\n    <ion-col col-6>\n      <input [(ngModel)]="shipmentStatus" type="radio" class="stv-radio-button" name="shipmentStatus" value="1"\n        id="3" />\n      <label for="3">In Progress</label>\n    </ion-col>\n    <ion-col col-6>\n      <input [(ngModel)]="shipmentStatus" type="radio" class="stv-radio-button" name="shipmentStatus" value="2"\n        id="4" />\n      <label for="4">Completed</label>\n    </ion-col>\n\n    <ion-col col-8>\n      <ion-label><b>No. of records per listing screen</b></ion-label>\n    </ion-col>\n    <ion-col col-2>\n      <input col-12 type="tel" min="0" max="99" name="noOfRecords" [(ngModel)]="noOfRecords" (keypress)="numberOnlyValidation($event)" style="text-align: right;">\n    </ion-col>\n\n    <ion-col col-2>\n    </ion-col>\n\n    </ion-row>\n\n</ion-content>\n<ion-footer class="ion-footer">\n  <ion-row padding class="">\n    <ion-col col-6>\n      <button ion-button  block class="btnRadius btncancel" (click)="backToDashBoard();">\n        <ion-icon ></ion-icon>\n        Cancel\n      </button>\n    </ion-col>\n\n    <ion-col col-6>\n      <button ion-button icon-start block class="btnRadius" (click)="saveConfigSettings();">\n        <ion-icon ></ion-icon>\n       Save\n      </button>\n    </ion-col>\n  </ion-row>\n  <div class="label-white toolbar-background-md" center text-center>\n    <!-- © Kale Logistics Solutions Private Limited. {{appBuildConfig.fullYear}} Version {{appBuildConfig.version}} -->\n  </div>\n</ion-footer>\n\n'/*ion-inline-end:"D:\MobileApp\corviBL\corviBL\src\pages\customer-settings\customer-settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__providers_http_service_http_service__["a" /* HttpServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_util_toast_service__["a" /* ToastService */]])
    ], CustomerSettingsPage);
    return CustomerSettingsPage;
}());

//# sourceMappingURL=customer-settings.js.map

/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export saveLeadCustomer */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewSalesLeadPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_global__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_http_service_http_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_util_alert_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_util_toast_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__find_location_find_location__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__find_sales_activity_find_sales_activity__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











/**
 * Generated class for the NewSalesActivityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var saveLeadCustomer = /** @class */ (function () {
    function saveLeadCustomer() {
    }
    return saveLeadCustomer;
}());

var NewSalesLeadPage = /** @class */ (function () {
    // public vForm: FormGroup;
    function NewSalesLeadPage(navCtrl, navParams, globalService, modalCtrl, viewCtrl, nav, menu, toastCtrl, alertCtrl, http, alertService, toastService, 
        // public baseURLProvider: BaseURLProvider,
        fb) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.globalService = globalService;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.nav = nav;
        this.menu = menu;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.alertService = alertService;
        this.toastService = toastService;
        this.fb = fb;
        this.UserDetails = [];
        this.BranchTbl = [];
        this.ActivityTbl = [];
        this.status = '1';
        this.typeOfIndus = '1';
        this.typeOfCust = '1';
        this.vendorname = '';
        this.vendortype = 'Lead Customer';
        this.addressline1 = '';
        this.addressline2 = '';
        this.addressline3 = '';
        this.contactemail = '';
        this.firstname = '';
        this.lastname = '';
        this.designation = '';
        this.location = '';
        this.mobileno = '';
        this.pincode = '';
        this.clientdate = new Date();
        this.VendorId = '0';
        // debugger
        this.title = "New Sales Lead";
        this.appBuildConfig = this.globalService.appBuildConfig;
        // this.UserDetails = this.globalService.get('userDetails');
        // this.BranchTbl = this.UserDetails[Object.keys(this.UserDetails)[1]]["Table4"];
        // this.ActivityTbl = this.UserDetails[Object.keys(this.UserDetails)[1]]["Table3"];
        // this.filterActivityStatus = this.ActivityTbl.filter(t => t.Identifier == 'SalesLeadStatus');
        // this.filterTypesOFIndus = this.ActivityTbl.filter(t => t.Identifier == 'TypeOfIndustry');
        // this.filterTypeOFCustomer = this.ActivityTbl.filter(t => t.Identifier == 'TypeOfIndustry');
        if (this.globalService.isCordovaAvailable()) {
            this.BranchTbl = JSON.parse(localStorage.getItem('BranchTable'));
            this.filterActivityStatus = JSON.parse(localStorage.getItem('SalesLeadStatus'));
            this.filterTypesOFIndus = JSON.parse(localStorage.getItem('TypeOfIndustry'));
            this.filterTypeOFCustomer = JSON.parse(localStorage.getItem('TypeOfCustomer'));
        }
        else {
            this.filterActivityStatus = JSON.parse(localStorage.getItem('SalesLeadStatus'));
            this.filterTypesOFIndus = JSON.parse(localStorage.getItem('TypeOfIndustry'));
            this.filterTypeOFCustomer = JSON.parse(localStorage.getItem('TypeOfCustomer'));
            this.BranchTbl = JSON.parse(localStorage.getItem('BranchTable'));
        }
        this.saveCustomer = new saveLeadCustomer();
        this.userid = localStorage.getItem('userId');
        // if (this.globalService.selectedCity != '') {
        //   this.location = this.globalService.selectedCity.Locationtext;
        //   this.LocationCode = this.globalService.selectedCity.LocationCode;
        //   this.Locationid = this.globalService.selectedCity.Locationid;
        // }
        // if (this.globalService.valueForLeadCutomer != '') {
        //   this.companyName = this.globalService.valueForLeadCutomer.VendorName;
        //   this.customerType = this.globalService.valueForLeadCutomer.VendorType;
        //   this.addressline1 = this.globalService.valueForLeadCutomer.Address1;
        //   this.addressline2 = this.globalService.valueForLeadCutomer.Address2;
        //   this.addressline3 = this.globalService.valueForLeadCutomer.Address3;
        //   this.Locationid = this.globalService.valueForLeadCutomer.LocationID;
        //   this.status = this.globalService.valueForLeadCutomer.Status.toString();
        //   this.typeOfIndus = this.globalService.valueForLeadCutomer.TypeofIndustry.toString();
        //   this.typeOfCust = this.globalService.valueForLeadCutomer.TypeOfCustomer.toString();
        //   this.location = this.globalService.valueForLeadCutomer.LocationName;
        //   this.firstname = this.globalService.valueForLeadCutomer.FirstName;
        //   this.lastname = this.globalService.valueForLeadCutomer.LastName;
        //   this.designation = this.globalService.valueForLeadCutomer.Designation;
        //   this.mobileno = this.globalService.valueForLeadCutomer.Mobile;
        //   this.contactemail = this.globalService.valueForLeadCutomer.Email;
        //   //this.branchCode = this.globalService.valueForLeadCutomer.BranchName;
        //   this.pincode = this.globalService.valueForLeadCutomer.Pincode
        //   this.vendorname = this.globalService.valueForLeadCutomer.VendorName;
        // }
        // this.vForm = this.fb.group({
        //   pieces: ['', Validators.required],
        //   GrWt: ['', Validators.required],
        //   vehicleNo: ['', Validators.required],
        //   driverName: ['', Validators.required],
        //   licenseNo: ['', Validators.required],
        //   mobNo: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
        //   IsConsignee: ['', Validators.required],
        //   shedType: ['', Validators.required],
        //   entPieces: new FormControl('', Validators.required),
        //   entWt: new FormControl('', Validators.required)
        // });
    }
    // ionViewWillEnter() {
    //   alert('ionViewWillEnter')
    // }
    // ionViewDidEnter() {
    //   alert('ionViewDidEnter')
    // }
    NewSalesLeadPage.prototype.openModal = function () {
        var _this = this;
        // if (this.branchCode == '0') {
        //   this.toastService.show('Please select branch.', 3000, true, 'top', 'toast-container')
        //   return;
        // }
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_9__find_location_find_location__["a" /* FindLocationPage */], { searchDetails: '1' });
        profileModal.onDidDismiss(function (data) {
            console.log('my data' + JSON.parse(data));
            if (data != undefined) {
                _this.location = _this.globalService.handleJSON(data).Locationtext;
                _this.LocationCode = _this.globalService.handleJSON(data).LocationCode;
                _this.Locationid = _this.globalService.handleJSON(data).Locationid;
                // if (this.globalService.isCordovaAvailable()) {
                //   console.log('my data' + data);
                // } else {
                //   // this.companyName = data.VendorName;
                //   // this.customerType = data.VendorType;
                //   // this.addressline1 = data.Address1;
                //   // this.addressline2 = data.Address2;
                //   // this.addressline3 = data.Address3;
                //   // this.Locationid = data.LocationID;
                //   // this.status = data.Status.toString();
                //   // this.typeOfIndus = data.TypeofIndustry.toString();
                //   // this.typeOfCust = data.TypeOfCustomer.toString();
                //   // this.location = data.LocationName;
                //   // this.firstname = data.FirstName;
                //   // this.lastname = data.LastName;
                //   // this.designation = data.Designation;
                //   // this.mobileno = data.Mobile;
                //   // this.contactemail = data.Email;
                //   // this.pincode = data.Pincode
                //   // this.vendorname = data.VendorName;
            }
            // }
            //this.madalDismissData = JSON.stringify(data);
        });
        profileModal.present();
        // this.globalService.store('branchCode', this.branchCode);
    };
    NewSalesLeadPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewSalesLeadPage');
    };
    NewSalesLeadPage.prototype.backToDashboard = function () {
        this.globalService.setRootPage(__WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard__["a" /* DashboardPage */]);
    };
    NewSalesLeadPage.prototype.getSelectedOptionText = function () {
        // debugger
        // alert(this.branchCode);
        // alert(this.branchCode);
        localStorage.setItem('bvalue', this.branchCode);
        // localStorage.setItem('btext', this.branchCode.branch);
    };
    NewSalesLeadPage.prototype.VendorMasterSaveHHT = function () {
        var _this = this;
        debugger;
        if (this.branchCode == '0') {
            this.toastService.show('Please select branch.', 3000, true, 'top', 'toast-container');
            return;
        }
        if (this.vendorname == '') {
            this.toastService.show('Please enter/search company name.', 3000, true, 'top', 'toast-container');
            return;
        }
        if (this.location == '' || this.location == undefined) {
            this.toastService.show('Please search location.', 3000, true, 'top', 'toast-container');
            return;
        }
        if (this.addressline1 == '') {
            this.toastService.show('Please enter at least one address.', 3000, true, 'top', 'toast-container');
            return;
        }
        var mob = /^[1-9]{1}[0-9]{9}$/;
        var txtMobile = this.mobileno;
        if (mob.test(txtMobile) == false && this.mobileno != '') {
            this.toastService.show('Please enter valid mobile number.', 3000, true, 'top', 'toast-container');
            //  alert("Please enter valid mobile number.");
            // txtMobile.focus();
            return;
        }
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        // return re.test(String(email).toLowerCase());
        if (re.test(this.contactemail) == false && this.contactemail != '') {
            this.toastService.show('Please enter valid email Id.', 3000, true, 'top', 'toast-container');
            return;
        }
        var now = new Date();
        var utcString = now.toISOString().substring(0, 19);
        var year = now.getFullYear();
        var month = now.getMonth() + 1;
        var day = now.getDate();
        var hour = now.getHours();
        var minute = now.getMinutes();
        var second = now.getSeconds();
        var localDatetime = year + "-" +
            (month < 10 ? "0" + month.toString() : month) + "-" +
            (day < 10 ? "0" + day.toString() : day) + " " +
            (hour < 10 ? "0" + hour.toString() : hour) + ":" +
            (minute < 10 ? "0" + minute.toString() : minute) +
            utcString.substring(16, 19);
        // if (this.startDate == '') {
        //   this.toastService.show('Please select Start Date.', 3000, true, 'top', 'toast-container');
        //   //this.startDate.focus();
        //   return;
        // }
        // if (this.endtDate == '') {
        //   this.toastService.show('Please select End Date.', 3000, true, 'top', 'toast-container');
        //  // this.startDate.focus();
        //   return;
        // }
        // var a = Date.parse(this.startDate);
        // var b = Date.parse(this.endtDate);
        // if (b < a) {
        //   this.toastService.show('End Time should be greater than Start Time.', 3000, true, 'top', 'toast-container')
        //   return;
        // } else if (b == a) {
        //   this.toastService.show('End Time should be greater than Start Time.', 3000, true, 'top', 'toast-container')
        //   return;
        // }
        this.saveCustomer.VendorId = this.VendorId;
        this.saveCustomer.VendorName = this.vendorname;
        this.saveCustomer.VendorType = this.vendortype;
        this.saveCustomer.AddressLine1 = this.addressline1;
        this.saveCustomer.AddressLine2 = this.addressline2;
        this.saveCustomer.AddressLine3 = this.addressline3;
        this.saveCustomer.BranchCode = this.branchCode;
        this.saveCustomer.ContactEmail = this.contactemail;
        this.saveCustomer.FirstName = this.firstname;
        this.saveCustomer.LastName = this.lastname;
        this.saveCustomer.Designation = this.designation;
        this.saveCustomer.Location = this.Locationid.toString(); //'117601';// this.Locationid.toString();
        this.saveCustomer.MobileNo = this.mobileno;
        this.saveCustomer.PinCode = this.pincode;
        this.saveCustomer.Status = this.status;
        this.saveCustomer.TypeOfCustomer = this.typeOfCust;
        this.saveCustomer.TypeofIndustry = this.typeOfIndus;
        this.saveCustomer.UserId = this.userid;
        this.saveCustomer.ClientDate = localDatetime; // '2021-05-28 13:10:44.060';
        //     @VendorId int,
        // @VendorName varchar(max),
        // @VendorType varchar(max),
        // @AddressLine1 varchar(max),
        // @AddressLine2 varchar(max),
        // @AddressLine3 varchar(max),
        // @BranchCode varchar(max),
        // @ContactEmail varchar(max),
        // @FirstName varchar(max),
        // @LastName varchar(max),
        // @Designation varchar(max),
        // @Location int,
        // @MobileNo varchar(max),
        // @PinCode varchar(max),
        // @Status int,
        // @TypeOfCustomer int,
        // @TypeofIndustry int,
        // @UserId int,
        // @ClientDate varchar(max)
        this.http.POST(__WEBPACK_IMPORTED_MODULE_3__constants__["a" /* Constants */].Corvi_Services.VendorMasterSaveForHHT, this.saveCustomer).then(function (response) {
            console.log('response to check login method: ', response);
            if (response == 'Success') {
                _this.showAlert('Success', 'Sales Lead Saved');
                // localStorage.removeItem('login_resp');
                // localStorage.removeItem('userDetails');
            }
            else {
                // this.toastService.show(response, 3000, true, 'top', 'toast-success');
                _this.showAlert('Success', 'Sales Lead Saved');
            }
            // this.globalService.store('login_resp', response);
        }, function (err) {
            console.log('error Login ', err);
            console.log('response to check service link: ', __WEBPACK_IMPORTED_MODULE_3__constants__["a" /* Constants */].Corvi_Services.Login);
        });
        // }
        // else {
        //   this.globalService.showAlert('Invalid Customer Identity Code')
        // }
        // });
    };
    NewSalesLeadPage.prototype.showAlert = function (title, msg) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: title,
            message: msg,
            buttons: [
                {
                    text: 'OK',
                    handler: function () {
                        _this.globalService.setRootPage(__WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard__["a" /* DashboardPage */]);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
            ]
        });
        alert.present();
    };
    NewSalesLeadPage.prototype.ngOnInit = function () {
        this.branchCode = this.globalService.globalDefaultBranchCode;
    };
    NewSalesLeadPage.prototype.openModalFoSearchCompany = function () {
        var _this = this;
        if (this.branchCode == '0') {
            this.toastService.show('Please select branch.', 3000, true, 'top', 'toast-container');
            return;
        }
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_10__find_sales_activity_find_sales_activity__["a" /* FindSalesActivityPage */], { fromSaleLeadVal: '1', branchCode: this.branchCode });
        profileModal.onDidDismiss(function (data) {
            console.log(data);
            if (_this.globalService.valueForLeadCutomer != '') {
                _this.companyName = _this.globalService.handleJSON(data).VendorName;
                _this.customerType = _this.globalService.handleJSON(data).VendorType;
                _this.addressline1 = _this.globalService.handleJSON(data).Address1;
                _this.addressline2 = _this.globalService.handleJSON(data).Address2;
                _this.addressline3 = _this.globalService.handleJSON(data).Address3;
                _this.Locationid = _this.globalService.handleJSON(data).LocationID;
                _this.status = _this.globalService.handleJSON(data).Status.toString();
                _this.typeOfIndus = _this.globalService.handleJSON(data).TypeofIndustry.toString();
                _this.typeOfCust = _this.globalService.handleJSON(data).TypeOfCustomer.toString();
                _this.location = _this.globalService.handleJSON(data).LocationName;
                _this.firstname = _this.globalService.handleJSON(data).FirstName;
                _this.lastname = _this.globalService.handleJSON(data).LastName;
                _this.designation = _this.globalService.handleJSON(data).Designation;
                _this.mobileno = _this.globalService.handleJSON(data).Mobile;
                _this.contactemail = _this.globalService.handleJSON(data).Email;
                _this.pincode = _this.globalService.handleJSON(data).Pincode;
                _this.vendorname = _this.globalService.handleJSON(data).VendorName;
                _this.VendorId = _this.globalService.handleJSON(data).VendorIds.toString();
            }
            // if (this.globalService.valueForLeadCutomer != '') {
            //   this.companyName = this.globalService.valueForLeadCutomer.VendorName;
            //   this.customerType = this.globalService.valueForLeadCutomer.VendorType;
            //   this.addressline1 = this.globalService.valueForLeadCutomer.Address1;
            //   this.addressline2 = this.globalService.valueForLeadCutomer.Address2;
            //   this.addressline3 = this.globalService.valueForLeadCutomer.Address3;
            //   this.Locationid = this.globalService.valueForLeadCutomer.LocationID;
            //   this.status = this.globalService.valueForLeadCutomer.Status.toString();
            //   this.typeOfIndus = this.globalService.valueForLeadCutomer.TypeofIndustry.toString();
            //   this.typeOfCust = this.globalService.valueForLeadCutomer.TypeOfCustomer.toString();
            //   this.location = this.globalService.valueForLeadCutomer.LocationName;
            //   this.firstname = this.globalService.valueForLeadCutomer.FirstName;
            //   this.lastname = this.globalService.valueForLeadCutomer.LastName;
            //   this.designation = this.globalService.valueForLeadCutomer.Designation;
            //   this.mobileno = this.globalService.valueForLeadCutomer.Mobile;
            //   this.contactemail = this.globalService.valueForLeadCutomer.Email;
            //   //this.branchCode = this.globalService.valueForLeadCutomer.BranchName;
            //   this.pincode = this.globalService.valueForLeadCutomer.Pincode
            //   this.vendorname = this.globalService.valueForLeadCutomer.VendorName;
            // }
            // this.companyName = '';
            // this.customerType = '';;
            // this.addressline1 = '';
            // this.addressline2 = '';
            // this.addressline3 = '';
            // this.Locationid = '';
            // this.status = '';
            // this.typeOfIndus = '';
            // this.typeOfCust = '';
            // this.location = '';
            // this.firstname = '';
            // this.lastname = '';
            // this.designation = '';
            // this.mobileno = '';
            // this.contactemail = '';
        });
        profileModal.present();
        this.globalService.store('branchCode', this.branchCode);
        //this.branchCode = this.globalService.valueForLeadCutomer.BranchName;
        this.pincode = this.globalService.valueForLeadCutomer.Pincode;
        this.vendorname = this.globalService.valueForLeadCutomer.VendorName;
        //this.globalService.store('branchCode', this.branchCode);
    };
    NewSalesLeadPage.prototype.IsMobileNumber = function (txtMobId) {
        var mob = /^[1-9]{1}[0-9]{9}$/;
        var txtMobile = txtMobId;
        if (mob.test(txtMobId) == false && txtMobId != '') {
            this.toastService.show('Please enter valid mobile number.', 3000, true, 'top', 'toast-container');
            //  alert("Please enter valid mobile number.");
            // txtMobile.focus();
            return false;
        }
        return true;
    };
    NewSalesLeadPage.prototype.validateEmail = function (email) {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        // return re.test(String(email).toLowerCase());
        if (re.test(email) == false && email != '') {
            this.toastService.show('Please enter valid email Id.', 3000, true, 'top', 'toast-container');
            return false;
        }
        return true;
    };
    NewSalesLeadPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-new-sales-lead',template:/*ion-inline-start:"D:\MobileApp\corviBL\corviBL\src\pages\new-sales-lead\new-sales-lead.html"*/'<!--\n  Generated template for the NewSalesActivityPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-buttons left>\n      <button ion-button icon-only (click)="backToDashboard();">\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <button right ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title id="Dashboard" center text-center>\n      {{title}}\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-row padding class="ShadowBox13" style=\'margin-top:10px;\'>\n      <ion-col col-12>\n        <label>\n          Branch\n        </label>\n        <font color="red" class="margin12">*</font>\n      </ion-col>\n      <ion-col col-12>\n        <select id="ddlBrach" name="ddlBrach" [(ngModel)]="branchCode" (change)="getSelectedOptionText()" col-12\n          placeholder="">\n          <!-- <option [value]="0" disabled selected>Select</option> -->\n          <option *ngFor="let brData of BranchTbl" [value]="brData.BranchCode">{{brData.branch}}</option>\n\n        </select>\n      </ion-col>\n      <ion-col col-12>\n        <label>\n          Company Name\n        </label>\n        <font color="red" class="margin12">*</font>\n      </ion-col>\n      <ion-col col-10>\n        <input maxlength="50" type="text" [(ngModel)]="vendorname" col-12 placeholder="">\n      </ion-col>\n      <ion-col col-2>\n        <button ion-fab class="ion-fab34" (click)="openModalFoSearchCompany();">\n          <ion-icon name="md-search" class=""></ion-icon>\n        </button>\n      </ion-col>\n\n      <ion-col col-12>\n        <label>\n          Status\n        </label>\n        <font color="red" class="margin12">*</font>\n      </ion-col>\n      <ion-col col-12>\n        <select col-12 placeholder="" [(ngModel)]="status">\n          <!-- <option [value]="5" disabled selected>Yet to start</option> -->\n          <option *ngFor="let acData of filterActivityStatus" [value]="acData.KeyValue">{{acData.Description}}</option>\n\n        </select>\n      </ion-col>\n\n      <ion-col col-12>\n        <label>\n          Type of Industry\n        </label>\n        <font color="red" class="margin12">*</font>\n      </ion-col>\n      <ion-col col-12>\n        <select col-12 placeholder="" [(ngModel)]="typeOfIndus">\n          <!-- <option [value]="5" disabled selected>Yet to start</option> -->\n          <option *ngFor="let acData of filterTypesOFIndus" [value]="acData.KeyValue">{{acData.Description}}</option>\n\n        </select>\n      </ion-col>\n\n      <ion-col col-12>\n        <label>\n          Type of Customer\n        </label>\n        <font color="red" class="margin12">*</font>\n      </ion-col>\n      <ion-col col-12>\n        <select col-12 placeholder="" [(ngModel)]="typeOfCust">\n          <!-- <option [value]="5" disabled selected>Yet to start</option> -->\n          <option *ngFor="let acData of filterTypeOFCustomer" [value]="acData.KeyValue">{{acData.Description}}</option>\n\n        </select>\n      </ion-col>\n\n\n      <ion-col col-12>\n        <label>\n          Location\n        </label>\n        <font color="red" class="margin12">*</font>\n      </ion-col>\n      <ion-col col-10>\n        <input  maxlength="100" type="text" [(ngModel)]="location" col-12 placeholder="">\n      </ion-col>\n      <ion-col col-2>\n        <button ion-fab class="ion-fab34" (click)="openModal();">\n          <ion-icon name="md-search" class=""></ion-icon>\n        </button>\n      </ion-col>\n\n\n      <ion-col col-12>\n        <label>\n          Address\n        </label>\n        <font color="red" class="margin12">*</font>\n      </ion-col>\n      <ion-col col-12>\n        <input maxlength="50" type="text" [(ngModel)]="addressline1" col-12 placeholder="">\n      </ion-col>\n      <ion-col col-12>\n        <input maxlength="50" type="text" [(ngModel)]="addressline2" col-12 placeholder="">\n      </ion-col>\n      <ion-col col-12>\n        <input maxlength="50" type="text" [(ngModel)]="addressline3" col-12 placeholder="">\n      </ion-col>\n\n\n      <ion-col col-12>\n        <label>\n          Pin Code\n        </label>\n      </ion-col>\n      <ion-col col-12>\n        <input maxlength="9" type="text" [(ngModel)]="pincode" col-12 placeholder="">\n      </ion-col>\n\n\n      <ion-col col-12>\n        <h4>\n          Contact Person\n        </h4>\n      </ion-col>\n\n      <ion-col col-6>\n        <label>\n          First Name\n        </label>\n\n      </ion-col>\n      <ion-col col-6>\n        <label>\n          Last Name\n        </label>\n      </ion-col>\n      <ion-col col-6>\n        <input maxlength="50" type="text" [(ngModel)]="firstname" col-12 placeholder="">\n      </ion-col>\n      <ion-col col-6>\n        <input maxlength="50" type="text" [(ngModel)]="lastname" col-12 placeholder="">\n      </ion-col>\n\n\n      <ion-col col-12>\n        <label>\n          Designation\n        </label>\n      </ion-col>\n      <ion-col col-12>\n        <input maxlength="50" type="text" [(ngModel)]="designation" col-12 placeholder="">\n      </ion-col>\n\n      <ion-col col-12>\n        <label>\n          Mobile No.\n        </label>\n      </ion-col>\n      <ion-col col-2>\n        <select col-12 placeholder="Select One">\n          <option disabled value="f">IN</option>\n        </select>\n      </ion-col>\n      <ion-col col-10>\n        <input maxlength="10" pattern="\d*" (change)=\'IsMobileNumber($event.target.value)\' type="text" [(ngModel)]="mobileno" col-12 placeholder="">\n      </ion-col>\n\n\n      <ion-col col-12>\n        <label>\n          Email Id\n        </label>\n      </ion-col>\n      <ion-col col-12>\n        <input maxlength="100" type="email" [(ngModel)]="contactemail" col-12 placeholder=""\n        (change)=\'validateEmail($event.target.value)\'>\n      </ion-col>\n\n\n    </ion-row>\n\n\n  </ion-list>\n</ion-content>\n<ion-footer class="ion-footer">\n  <ion-row padding class="">\n    <ion-col col-12>\n      <span style="color: red;">(*) Marks field are mandatory to fill up</span>\n    </ion-col>\n    <ion-col col-6>\n      <button ion-button round outline class="btncancel" (click)="backToDashboard();">\n        <ion-icon></ion-icon>\n        Cancel\n      </button>\n    </ion-col>\n\n    <ion-col col-6>\n      <button ion-button icon-start block class="btnRadius " (click)="VendorMasterSaveHHT();">\n        <ion-icon></ion-icon>\n        Save\n      </button>\n    </ion-col>\n  </ion-row>\n  <div class="label-white toolbar-background-md" center text-center>\n    © Kale Logistics Solutions Private Limited. {{appBuildConfig.fullYear}} Version {{appBuildConfig.version}}\n  </div>\n</ion-footer>\n'/*ion-inline-end:"D:\MobileApp\corviBL\corviBL\src\pages\new-sales-lead\new-sales-lead.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_global_global__["a" /* GlobalProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["t" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_http_service_http_service__["a" /* HttpServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_util_alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_7__providers_util_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], NewSalesLeadPage);
    return NewSalesLeadPage;
}());

//# sourceMappingURL=new-sales-lead.js.map

/***/ }),

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export searchLocation */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindLocationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_global__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_http_service_http_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_util_alert_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_util_toast_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the FindLocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var searchLocation = /** @class */ (function () {
    function searchLocation() {
    }
    return searchLocation;
}());

var FindLocationPage = /** @class */ (function () {
    function FindLocationPage(navCtrl, navParams, globalService, modalCtrl, viewCtrl, nav, menu, toastCtrl, http, alertService, toastService, 
        // public baseURLProvider: BaseURLProvider,
        fb) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.globalService = globalService;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.nav = nav;
        this.menu = menu;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.alertService = alertService;
        this.toastService = toastService;
        this.fb = fb;
        this.CityName = '';
        this.CityCode = '';
        this.LocationInfo = 0;
        this.responseFormAPI = [];
        this.title = "Find Location";
        this.appBuildConfig = this.globalService.appBuildConfig;
        this.VenType = 'Lead-Customer';
        this.SearchLoc = new searchLocation();
    }
    FindLocationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FindLocationPage');
    };
    FindLocationPage.prototype.backToDashboard = function () {
        this.globalService.setRootPage(__WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard__["a" /* DashboardPage */]);
    };
    FindLocationPage.prototype.dismissModal = function () {
        var data = { 'foo': 'bar' };
        this.viewCtrl.dismiss();
    };
    FindLocationPage.prototype.GetLocationMasterList = function () {
        var _this = this;
        debugger;
        this.SearchLoc.LocationType = 'City'; //this.branchCode;
        this.SearchLoc.LocationCode = this.CityCode;
        this.SearchLoc.LocationName = this.CityName;
        //this.SearchLoc.VendorName = this.VendorName;
        this.countOfRec = 0;
        this.http.POST(__WEBPACK_IMPORTED_MODULE_3__constants__["a" /* Constants */].Corvi_Services.GetLocationMasterList, this.SearchLoc).then(function (response) {
            console.log('response to check login method: ', response);
            if (response['Table'] == '') {
                _this.toastService.show('Data not found.', 3000, true, 'top', 'toast-container');
                return;
            }
            else {
                if (_this.globalService.isCordovaAvailable()) {
                    debugger;
                    _this.responseFormAPI = response;
                    _this.LocationInfo = JSON.parse(_this.responseFormAPI)["Table"];
                    _this.countOfRec = JSON.parse(_this.responseFormAPI)["Table"].length;
                    // this.flag = true;
                }
                else {
                    _this.LocationInfo = response['Table'];
                    _this.countOfRec = response['Table'].length;
                }
                // Culture: "culture "
                // LocationCode: "IN IXC"
                // LocationType: 1
                // Locationid: 120817
                // Locationname: "Chandigarh"
                // Locationtext: "Chandigarh [IN IXC]-{City} [INDIA] [IN]"
                // description: "City"
                // parentcode: "IN"
                // parentloc: "INDIA"
            }
            // this.globalService.store('login_resp', response);
        }, function (err) {
            console.log('error Login ', err);
            console.log('response to check service link: ', __WEBPACK_IMPORTED_MODULE_3__constants__["a" /* Constants */].Corvi_Services.Login);
        });
        // }
        // else {
        //   this.globalService.showAlert('Invalid Customer Identity Code')
        // }
        // });
    };
    // passDataToNSA(custArray) {
    //   this.globalService.store('customerData', custArray);
    //   this.viewCtrl.dismiss();
    //  // this.globalService.setRootPage(NewSalesActivityPage);
    // }
    FindLocationPage.prototype.passDataToNSA = function (selectedData) {
        this.globalService.selectedCity = selectedData;
        console.log('********', this.globalService.selectedCity);
        // this.navCtrl.push(UpdateJobMilestonePage, {milestone: selecetedData})
        // this.navCtrl.remove(this.navCtrl.getActive().index - 0, 1,);
        //this.viewCtrl.dismiss();
        // this.globalService.setRootPage(NewSalesLeadPage);
        // this.navCtrl.remove(this.navCtrl.getActive().index - 0, 1,);
        this.viewCtrl.dismiss(JSON.stringify(this.globalService.selectedCity));
    };
    FindLocationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-find-location',template:/*ion-inline-start:"D:\MobileApp\corviBL\corviBL\src\pages\find-location\find-location.html"*/'<!--\n  Generated template for the NewSalesActivityPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n\n    <ion-title id="Dashboard" center text-center>\n      {{title}}\n      <ion-icon name=\'close-circle\' (click)=\'dismissModal()\' style=\'float: right;\'></ion-icon>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n\n    <!-- <ion-row padding class="">\n      <ion-col col-6>\n        <input [(ngModel)]="VenType" type="radio" class="stv-radio-button" name="Customer" value="Customer"\n          id="Customer" />\n        <label for="Customer">Customer</label>\n      </ion-col>\n      <ion-col col-6>\n        <input [(ngModel)]="VenType" type="radio" class="stv-radio-button" name="Customer" value="Lead-Customer"\n          id="LeadCustomer" checked />\n        <label for="LeadCustomer">Lead-Customer</label>\n      </ion-col>\n    </ion-row> -->\n\n    <ion-row padding class="ShadowBox13" style=\'margin-top:10px;\'>\n      <ion-col col-12>\n        <label>\n          City Name\n        </label>\n      </ion-col>\n      <ion-col col-12>\n        <input type="text" [(ngModel)]="CityName" col-12 placeholder="">\n      </ion-col>\n\n      <h4><span>OR</span></h4>\n\n      <ion-col col-12>\n        <label>\n          City Code\n        </label>\n      </ion-col>\n      <ion-col col-12>\n        <input type="text" [(ngModel)]="CityCode" col-12 placeholder="">\n      </ion-col>\n\n    </ion-row>\n\n\n    <ion-row padding>\n      <ion-col col-6>\n        <button ion-button block class="btnRadius btncancel" (click)=\'dismissModal()\'>\n          <ion-icon></ion-icon>\n          Cancel\n        </button>\n      </ion-col>\n\n      <ion-col col-6>\n        <button ion-button icon-start block class="btnRadius " (click)="GetLocationMasterList();">\n          <ion-icon></ion-icon>\n          Search\n        </button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-12>\n        <label>Search Result: {{countOfRec}} record found</label>\n      </ion-col>\n    </ion-row>\n\n    <ion-row padding class="ShadowBox13">\n\n\n      <table>\n        <tr *ngFor="let item of LocationInfo; let i = index">\n          <td>\n            <label>\n              {{item.Locationtext}}\n\n            </label><br>\n            <label>\n              {{item.description}}\n\n            </label><br>\n\n          </td>\n          <td><a href="#" (click)="passDataToNSA(item);">Select</a></td>\n          <!-- <td><button (click)="passDataToNSA(item.Locationtext)">Select</button></td> -->\n\n          <!-- <td> <input [(ngModel)]="item.Address1" type="hidden" /> </td>\n            <td> <input [(ngModel)]="item.Address2" type="hidden" /> </td>\n            <td> <input [(ngModel)]="item.Address3" type="hidden" /> </td>\n            <td> <input [(ngModel)]="item.BranchName" type="hidden" /> </td>\n            <td> <input [(ngModel)]="item.GSTCategory" type="hidden" /> </td>\n            <td> <input [(ngModel)]="item.GSTRegistrationStatus" type="hidden" /> </td>\n            <td> <input [(ngModel)]="item.LocationCode" type="hidden" /> </td>\n            <td> <input [(ngModel)]="item.LocationID" type="hidden" /> </td>\n            <td> <input [(ngModel)]="item.LocationName" type="hidden" /> </td>\n            <td> <input [(ngModel)]="item.Pincode" type="hidden" /> </td>\n            <td> <input [(ngModel)]="item.VendorCode" type="hidden" /> </td>\n            <td> <input [(ngModel)]="item.VendorId" type="hidden" /> </td>\n            <td> <input [(ngModel)]="item.VendorName" type="hidden" /> </td>\n            <td> <input [(ngModel)]="item.VendorType" type="hidden" /> </td> -->\n          <!-- Address1: "Ideal Plaza"\n            Address2: "Sarat Bose Road"\n            Address3: ""\n            BranchName: "BALMER LAWRIE & CO. LTD - Kolkata"\n            GSTCategory: null\n            GSTIN: null\n            GSTRegistrationStatus: null\n            LocationCode: "IN CCU"\n            LocationID: 117603\n            LocationName: "KOLKATA"\n            Pincode: ""\n            SecretKey: null\n            StateName: null\n            VendorCode: "CCU/CUS/06586"\n            VendorId: 13929\n            VendorName: "OOCL"\n            VendorType: "Lead-Customer" -->\n        </tr>\n        <!-- <tr>\n            <td>\n              <label>\n                Babuline Pharma Pvt. Ltd.\n                Mumbai\n              </label>\n            </td>\n\n            <td><a href="#">Select</a></td>\n          </tr>\n          <tr>\n            <td>\n              <label>\n                BEC Chemicals Pvt. Ltd.\n                Mumbai\n              </label>\n            </td>\n\n            <td><a href="#">Select</a></td>\n          </tr>\n          <tr>\n            <td>\n              <label>\n                Cristopia Energy Systems (I) Pvt. Ltd.\n                Mumbai\n              </label>\n            </td>\n\n            <td><a href="#">Select</a></td>\n          </tr> -->\n      </table>\n\n    </ion-row>\n\n\n\n  </ion-list>\n</ion-content>\n<ion-footer class="ion-footer">\n\n  <div class="label-white toolbar-background-md" center text-center>\n    © Kale Logistics Solutions Private Limited. {{appBuildConfig.fullYear}} Version {{appBuildConfig.version}}\n  </div>\n</ion-footer>\n'/*ion-inline-end:"D:\MobileApp\corviBL\corviBL\src\pages\find-location\find-location.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_global_global__["a" /* GlobalProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["t" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_http_service_http_service__["a" /* HttpServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_util_alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_7__providers_util_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], FindLocationPage);
    return FindLocationPage;
}());

//# sourceMappingURL=find-location.js.map

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export findVendorList */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportingUserActivityPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_global__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_http_service_http_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_util_alert_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_util_toast_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__find_sales_activity_find_sales_activity__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__new_sales_activity_new_sales_activity__ = __webpack_require__(73);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











/**
 * Generated class for the ReportingUserActivityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var findVendorList = /** @class */ (function () {
    function findVendorList() {
    }
    return findVendorList;
}());

var ReportingUserActivityPage = /** @class */ (function () {
    function ReportingUserActivityPage(navCtrl, navParams, globalService, modalCtrl, viewCtrl, nav, menu, toastCtrl, http, alertService, toastService, 
        // public baseURLProvider: BaseURLProvider,
        fb) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.globalService = globalService;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.nav = nav;
        this.menu = menu;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.alertService = alertService;
        this.toastService = toastService;
        this.fb = fb;
        this.BranchTbl = [];
        this.startDate = '';
        this.endtDate = '';
        this.VendorName = '';
        this.VendorCode = '';
        this.customerInfo = [];
        this.RpuserID = '0';
        this.responseFormAPI = [];
        this.title = "Search Reporting User Sales Activity";
        this.appBuildConfig = this.globalService.appBuildConfig;
        //  this.branchCode = localStorage.getItem('branchCode');
        // this.UserDetails = this.globalService.get('userDetails');
        // this.userID = localStorage.getItem('userId');
        // this.fetchedData = this.navParams.get('searchDetails');
        // this.userTbl = this.UserDetails[Object.keys(this.UserDetails)[1]]["Table5"];
        // this.BranchTbl = this.UserDetails[Object.keys(this.UserDetails)[1]]["Table4"];
        this.findList = new findVendorList();
        // debugger
        //     this.bvalue = localStorage.getItem('bvalue');
        //     this.btext = localStorage.getItem('btext');
        this.VenType = 'Search Reporting User Sales Activity';
        this.fromSaleLeadVal = this.navParams.get('fromSaleLeadVal');
        if (this.globalService.isCordovaAvailable()) {
            this.BranchTbl = JSON.parse(localStorage.getItem('BranchTable'));
            this.userTbl = JSON.parse(localStorage.getItem('reportingUSer'));
        }
        else {
            this.BranchTbl = JSON.parse(localStorage.getItem('BranchTable'));
            this.userTbl = JSON.parse(localStorage.getItem('reportingUSer'));
        }
    }
    // ionViewDidLoad() {
    //   console.log('ionViewDidLoad FindSalesActivityPage');
    // }
    ReportingUserActivityPage.prototype.ionViewDidEnter = function () {
        if (this.fetchedData != undefined) {
            if (this.fetchedData.length != 0) {
                this.branchCode = this.fetchedData.BranchCode;
            }
        }
    };
    ReportingUserActivityPage.prototype.backToDashboard = function () {
        this.globalService.setRootPage(__WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard__["a" /* DashboardPage */]);
    };
    ReportingUserActivityPage.prototype.ngOnInit = function () {
        this.branchCode = this.globalService.globalDefaultBranchCode;
        if (this.globalService.valueForLeadCutomer != '') {
            this.VendorName = this.globalService.valueForLeadCutomer.VendorName;
            // this.customerType = this.globalService.valueForLeadCutomer.VendorType;
            // this.addressline1 = this.globalService.valueForLeadCutomer.Address1;
            // this.addressline2 = this.globalService.valueForLeadCutomer.Address2;
            // this.addressline3 = this.globalService.valueForLeadCutomer.Address3;
            //this.branchCode = this.globalService.valueForLeadCutomer.BranchName;
            // this.vendorname = this.companyName;
        }
        // this.onItemChange();
    };
    // openModal() {
    //   // if (this.branchCode == '0') {
    //   //   this.toastService.show('Please select branch.', 3000, true, 'top', 'toast-container')
    //   //   return;
    //   // }
    //   const profileModal = this.modalCtrl.create(FindSalesActivityPage, { fromSaleLeadVal: '6' });
    //   profileModal.onDidDismiss(data => {
    //     console.log(data);
    //     if (data != undefined) {
    //       this.VendorName = this.globalService.handleJSON(data).VendorName;
    //       // this.Address1 = this.globalService.handleJSON(data).Address1;
    //       // this.ContactPerson = this.globalService.handleJSON(data).ContactPerson;
    //     }
    //   });
    //   profileModal.present();
    //   debugger
    //   this.globalService.store('branchCode', this.branchCode);
    // }
    ReportingUserActivityPage.prototype.openModal = function () {
        // this.saveActivity.BranchCode = this.branchCode;
        var _this = this;
        if (this.branchCode == '0') {
            this.toastService.show('Please select branch.', 3000, true, 'top', 'toast-container');
            return;
        }
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_9__find_sales_activity_find_sales_activity__["a" /* FindSalesActivityPage */], { fromSaleLeadVal: '6', branchCode: this.branchCode });
        profileModal.onDidDismiss(function (data) {
            console.log(data);
            if (data != undefined) {
                _this.VendorName = _this.globalService.handleJSON(data).VendorName;
            }
        });
        profileModal.present();
        this.globalService.store('branchCode', this.branchCode);
    };
    ReportingUserActivityPage.prototype.dismissModal = function () {
        var data = { 'foo': 'bar' };
        this.viewCtrl.dismiss(data);
    };
    ReportingUserActivityPage.prototype.GetSearchSalesActivityReportingToList = function () {
        var _this = this;
        if (this.RpuserID == '0') {
            this.toastService.show('Please select reporting user.', 3000, true, 'top', 'toast-container');
            //this.startDate.focus();
            return;
        }
        var a = Date.parse(this.startDate);
        var b = Date.parse(this.endtDate);
        if (b < a) {
            this.toastService.show('End Date should be greater than Start Date.', 3000, true, 'top', 'toast-container');
            return;
        }
        else if (b == a) {
            this.toastService.show('End Date should be greater than Start Date.', 3000, true, 'top', 'toast-container');
            return;
        }
        this.customerInfo = [];
        this.countOfRec = 0;
        this.findList.UserId = this.RpuserID;
        this.findList.BranchCode = this.branchCode;
        this.findList.VendorName = this.VendorName;
        this.findList.StartTime = this.startDate.replace("T", " ");
        this.findList.EndTime = this.endtDate.replace("T", " ");
        this.http.POST(__WEBPACK_IMPORTED_MODULE_3__constants__["a" /* Constants */].Corvi_Services.GetSearchSalesActivityReportingToList, this.findList).then(function (response) {
            console.log('response to check login method: ', response);
            if (response['Table'] == '') {
                _this.toastService.show('Data not found.', 3000, true, 'top', 'toast-container');
                return;
            }
            else {
                // this.customerInfo = response['Table'];
                if (_this.globalService.isCordovaAvailable()) {
                    debugger;
                    _this.responseFormAPI = response;
                    _this.customerInfo = JSON.parse(_this.responseFormAPI)["Table"];
                    _this.countOfRec = JSON.parse(_this.responseFormAPI)["Table"].length;
                    // this.flag = true;
                }
                else {
                    _this.customerInfo = response['Table'];
                    _this.countOfRec = response['Table'].length;
                }
            }
            // this.globalService.store('login_resp', response);
        }, function (err) {
            console.log('error Login ', err);
            console.log('response to check service link: ', __WEBPACK_IMPORTED_MODULE_3__constants__["a" /* Constants */].Corvi_Services.Login);
        });
        // }
        // else {
        //   this.globalService.showAlert('Invalid Customer Identity Code')
        // }
        // });
    };
    // passDataToNSA(custArray) {
    //   debugger
    //   if (this.fromSaleLeadVal == '1') {
    //     this.globalService.valueForLeadCutomer = custArray;
    //     this.viewCtrl.dismiss();
    //     this.globalService.setRootPage(NewSalesLeadPage);
    //   } else {
    //     localStorage.setItem('branchCode', this.branchCode)
    //     this.globalService.store('customerData', custArray);
    //     this.viewCtrl.dismiss();
    //     this.globalService.setRootPage(NewSalesActivityPage);
    //   }
    //   // this.navCtrl.remove(this.navCtrl.getActive().index - 0, 1,);
    // }
    ReportingUserActivityPage.prototype.passDataToNSA = function (item) {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__new_sales_activity_new_sales_activity__["a" /* NewSalesActivityPage */], { data: item, RpuserId: this.RpuserID, branch: this.branchCode });
    };
    ReportingUserActivityPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-reporting-user-activity',template:/*ion-inline-start:"D:\MobileApp\corviBL\corviBL\src\pages\reporting-user-activity\reporting-user-activity.html"*/'<!--\n  Generated template for the NewSalesActivityPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <!-- <ion-navbar color="primary">\n    junaid\'s navbar\n    <ion-title id="Dashboard" center text-center>\n      {{title}}\n      <ion-icon name=\'close-circle\' (click)=\'dismissModal()\' style=\'float: right;\'></ion-icon>\n    </ion-title>\n  </ion-navbar> -->\n\n  <ion-navbar color="primary">\n    <button right ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title id="Dashboard" center text-center>\n      {{title}}\n    </ion-title>\n\n    <ion-buttons left>\n      <button ion-button icon-only (click)="backToDashboard();">\n        <ion-icon name="ios-arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title center> {{title}}</ion-title>\n    <ion-icon name=\'close-circle\' (click)=\'dismissModal()\' style=\'float: right;\'></ion-icon>\n  </ion-toolbar>\n</ion-header> -->\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-row padding class="ShadowBox13" style="margin-top:10px">\n\n      <ion-col col-12>\n        <label>\n          Reporting User\n        </label>\n        <font color="red" class="margin12">*</font>\n      </ion-col>\n      <ion-col col-12>\n\n        <select id="ddlBrach" name="ddlBrach" [(ngModel)]="RpuserID" col-12 placeholder="">\n          <option [value]="0" disabled selected>Select</option>\n          <option *ngFor="let brData of userTbl" [value]="brData.UserId">{{brData.FirstName + \' \' + brData.LastName}}\n          </option>\n        </select>\n      </ion-col>\n\n      <!-- FirstName: "admin"\nLastName: ".."\nLoginName: "Admin"\nMiddleName: ""\nPassword: "Admin@123"\nProfileType: 1\nUserId: 1 -->\n\n      <ion-col col-12>\n        <label>\n          Branch\n        </label>\n        <!-- <font color="red" class="margin12">*</font> -->\n      </ion-col>\n      <ion-col col-12>\n\n        <select id="ddlBrach" name="ddlBrach" [(ngModel)]="branchCode" col-12 placeholder="">\n          <!-- <option [value]="0" disabled selected>Select</option> -->\n          <option *ngFor="let brData of BranchTbl" [value]="brData.BranchCode">{{brData.branch}}</option>\n        </select>\n      </ion-col>\n      <ion-col col-12>\n        <label>\n          Customer Name\n        </label>\n      </ion-col>\n      <ion-col col-10>\n\n        <input type="text" [(ngModel)]="VendorName" col-12 placeholder="">\n      </ion-col>\n      <ion-col col-2>\n        <button ion-fab class="ion-fab34" (click)="openModal();">\n          <ion-icon name="md-search" class=""></ion-icon>\n        </button>\n      </ion-col>\n\n      <ion-col col-6>\n        <label style="line-height: 3;">\n          From\n        </label>\n        <!-- <font color="red" class="margin12">*</font> -->\n      </ion-col>\n\n      <ion-col col-6 style="margin-top: 5px;">\n\n        <input col-12 type="date" [(ngModel)]="startDate">\n      </ion-col>\n\n      <ion-col col-6>\n        <label style="line-height: 3;">\n          To\n        </label>\n        <!-- <font color="red" class="margin12">*</font> -->\n      </ion-col>\n\n      <ion-col col-6 style="margin-top: 5px;">\n\n        <input col-12 type="date" [(ngModel)]="endtDate">\n      </ion-col>\n\n\n    </ion-row>\n\n\n    <ion-row padding>\n      <ion-col col-6>\n        <button ion-button round outline class=" btncancel" (click)="backToDashboard();">\n          <ion-icon></ion-icon>\n          Cancel\n        </button>\n      </ion-col>\n\n      <ion-col col-6>\n        <button type="button" ion-button icon-start block class="btnRadius"\n          (click)=\'GetSearchSalesActivityReportingToList();\'>\n          <ion-icon></ion-icon>\n          Search\n        </button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12>\n        <label>Search Result: {{countOfRec}} record found</label>\n      </ion-col>\n    </ion-row>\n    <!-- <ion-row padding class="ShadowBox13">\n      <ion-col col-12>\n        <table>\n          <tr *ngFor="let item of customerInfo; let i = index">\n            <td>\n              <label>\n                {{item.AppointmentCode}}\n              </label>\n            </td>\n            <td>\n              <label>\n                {{item.CustomerName}}\n              </label>\n            </td>\n\n            <td>\n              <label>\n                {{item.StartTime}}\n              </label>\n            </td>\n            <td><a href="#" (click)="passDataToNSA(item);">Select</a></td>\n          </tr>\n        </table>\n      </ion-col>\n    </ion-row> -->\n\n    <ion-row class="ShadowBox13" *ngFor="let item of customerInfo; let i = index;">\n      <ion-card>\n        <!-- <ion-item>\n\n          <div class="columnBlue">\n            <label>\n              <label for="">{{item.AppointmentCode }}</label>\n            </label>\n          </div>\n\n          <div class="column1">\n            <h4>\n              {{item.CustomerName}}\n            </h4>\n          </div>\n        </ion-item> -->\n\n        <ion-card-content>\n          <!-- <div class="column2"> -->\n            <!-- <label style="color: #0461AA;font-size: 16px;"><b> {{item.AppointmentCode}}</b></label><br> -->\n            <ion-row>\n              <ion-col>\n                <label class="labelFont">{{item.AppointmentCode}}</label><br />\n                <label class="labelFont">{{item.CustomerName}}</label><br />\n                <label class="labelFont">{{item.StartTime}} </label><br />\n              </ion-col>\n              <!-- <ion-col>\n                <label class="labelFont"><b>JOB NO.:</b></label><br />\n                <label class="labelFont">{{item.StartTime}} </label><br />\n              </ion-col> -->\n              <ion-col col-3>\n                <div class="divW">\n\n                  <a href="#" (click)="passDataToNSA(item);">Select</a>\n                  <!-- <ion-icon name="custom-dots" (click)="openPopOver($event)"> </ion-icon> -->\n                </div>\n              </ion-col>\n            </ion-row>\n          <!-- </div> -->\n        </ion-card-content>\n      </ion-card>\n    </ion-row>\n\n\n\n  </ion-list>\n</ion-content>\n<ion-footer class="ion-footer">\n\n  <div class="label-white toolbar-background-md" center text-center>\n    © Kale Logistics Solutions Private Limited. {{appBuildConfig.fullYear}} Version {{appBuildConfig.version}}\n  </div>\n</ion-footer>\n'/*ion-inline-end:"D:\MobileApp\corviBL\corviBL\src\pages\reporting-user-activity\reporting-user-activity.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_global_global__["a" /* GlobalProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["t" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_http_service_http_service__["a" /* HttpServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_util_alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_7__providers_util_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], ReportingUserActivityPage);
    return ReportingUserActivityPage;
}());

//# sourceMappingURL=reporting-user-activity.js.map

/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export findVendorList */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchSalesActivityPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_global__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_http_service_http_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_util_alert_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_util_toast_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__find_sales_activity_find_sales_activity__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__new_sales_activity_new_sales_activity__ = __webpack_require__(73);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











/**
 * Generated class for the SearchSalesActivityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var findVendorList = /** @class */ (function () {
    function findVendorList() {
    }
    return findVendorList;
}());

var SearchSalesActivityPage = /** @class */ (function () {
    function SearchSalesActivityPage(navCtrl, navParams, globalService, modalCtrl, viewCtrl, nav, menu, toastCtrl, http, alertService, toastService, 
        // public baseURLProvider: BaseURLProvider,
        fb) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.globalService = globalService;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.nav = nav;
        this.menu = menu;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.alertService = alertService;
        this.toastService = toastService;
        this.fb = fb;
        this.BranchTbl = [];
        this.branchCode = '0';
        this.RpuserID = '0';
        this.VendorName = '';
        this.VendorCode = '';
        this.customerInfo = [];
        this.responseFormAPI = [];
        this.CreatedDate = '';
        this.title = "Search Sales Activity";
        this.appBuildConfig = this.globalService.appBuildConfig;
        this.userID = localStorage.getItem('userId');
        //  this.branchCode = localStorage.getItem('branchCode');
        this.UserDetails = this.globalService.get('userDetails');
        this.fetchedData = this.navParams.get('searchDetails');
        // this.BranchTbl = this.UserDetails[Object.keys(this.UserDetails)[1]]["Table4"];
        this.BranchTbl = JSON.parse(localStorage.getItem('BranchTable'));
        this.findList = new findVendorList();
        // debugger
        //     this.bvalue = localStorage.getItem('bvalue');
        //     this.btext = localStorage.getItem('btext');
        this.VenType = 'Lead-Customer';
        this.fromSaleLeadVal = this.navParams.get('fromSaleLeadVal');
    }
    // ionViewDidLoad() {
    //   console.log('ionViewDidLoad FindSalesActivityPage');
    // }
    SearchSalesActivityPage.prototype.ionViewDidEnter = function () {
        if (this.fetchedData != undefined) {
            if (this.fetchedData.length != 0) {
                this.branchCode = this.fetchedData.BranchCode;
            }
        }
    };
    SearchSalesActivityPage.prototype.backToDashboard = function () {
        this.globalService.setRootPage(__WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard__["a" /* DashboardPage */]);
    };
    SearchSalesActivityPage.prototype.ngOnInit = function () {
        this.branchCode = this.globalService.globalDefaultBranchCode;
        if (this.globalService.valueForLeadCutomer != '') {
            this.VendorName = this.globalService.valueForLeadCutomer.VendorName;
        }
        // this.onItemChange();
    };
    SearchSalesActivityPage.prototype.dismissModal = function () {
        var data = { 'foo': 'bar' };
        this.viewCtrl.dismiss(data);
    };
    SearchSalesActivityPage.prototype.GetSearchSalesActivityList = function () {
        var _this = this;
        if (this.branchCode == undefined) {
            this.toastService.show('Please select branch.', 3000, true, 'top', 'toast-container');
            //this.startDate.focus();
            return;
        }
        this.customerInfo = [];
        this.findList.BranchCode = this.branchCode;
        this.findList.UserId = this.userID;
        this.findList.CreatedDate = this.CreatedDate;
        this.findList.VendorName = this.VendorName;
        this.countOfRec = 0;
        this.http.POST(__WEBPACK_IMPORTED_MODULE_3__constants__["a" /* Constants */].Corvi_Services.GetSearchSalesActivityList, this.findList).then(function (response) {
            console.log('response to check login method: ', response);
            if (response['Table'] == '') {
                _this.toastService.show('Data not found.', 3000, true, 'top', 'toast-container');
                return;
            }
            else {
                //this.customerInfo = response['Table'];
                if (_this.globalService.isCordovaAvailable()) {
                    _this.responseFormAPI = response;
                    _this.customerInfo = JSON.parse(_this.responseFormAPI)["Table"];
                    _this.countOfRec = JSON.parse(_this.responseFormAPI)["Table"].length;
                    // this.flag = true;
                }
                else {
                    _this.customerInfo = response['Table'];
                    _this.countOfRec = response['Table'].length;
                }
            }
            // this.globalService.store('login_resp', response);
        }, function (err) {
            console.log('error Login ', err);
            console.log('response to check service link: ', __WEBPACK_IMPORTED_MODULE_3__constants__["a" /* Constants */].Corvi_Services.Login);
        });
        // }
        // else {
        //   this.globalService.showAlert('Invalid Customer Identity Code')
        // }
        // });
    };
    SearchSalesActivityPage.prototype.passDataToNSA = function (item) {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__new_sales_activity_new_sales_activity__["a" /* NewSalesActivityPage */], { data: item, RpuserId: this.userID, branch: this.branchCode });
        ///this.globalService.setRootPage(NewSalesActivityPage);
    };
    SearchSalesActivityPage.prototype.openModal = function () {
        // this.saveActivity.BranchCode = this.branchCode;
        var _this = this;
        if (this.branchCode == '0') {
            this.toastService.show('Please select branch.', 3000, true, 'top', 'toast-container');
            return;
        }
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_9__find_sales_activity_find_sales_activity__["a" /* FindSalesActivityPage */], { fromSaleLeadVal: '5', branchCode: this.branchCode });
        profileModal.onDidDismiss(function (data) {
            console.log(data);
            if (data != undefined) {
                _this.VendorName = _this.globalService.handleJSON(data).VendorName;
            }
        });
        profileModal.present();
        this.globalService.store('branchCode', this.branchCode);
    };
    SearchSalesActivityPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-search-sales-activity',template:/*ion-inline-start:"D:\MobileApp\corviBL\corviBL\src\pages\search-sales-activity\search-sales-activity.html"*/'<!--\n  Generated template for the NewSalesActivityPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n  <ion-navbar color="primary">\n\n    <ion-title id="Dashboard" center text-center>\n      {{title}}\n      <ion-icon name=\'close-circle\' (click)=\'dismissModal()\' style=\'float: right;\'></ion-icon>\n    </ion-title>\n  </ion-navbar>\n</ion-header> -->\n\n<ion-header>\n  <ion-navbar color="primary">\n    <!-- <button right ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <button left ion-button menuToggle>\n      <ion-icon name="arrow-back"></ion-icon>\n    </button> -->\n    <ion-title id="Dashboard" center text-center>\n      {{title}}\n    </ion-title>\n\n    <ion-buttons left>\n      <button ion-button icon-only (click)="backToDashboard();">\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-buttons right>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title center> {{title}}</ion-title>\n    <ion-icon name=\'close-circle\' (click)=\'dismissModal()\' style=\'float: right;\'></ion-icon>\n  </ion-toolbar>\n</ion-header> -->\n\n\n<ion-content padding style="margin-top: 10px;">\n  <ion-list>\n\n\n    <ion-row class="ShadowBox13">\n\n      <ion-col col-12>\n        <label>\n          Branch\n        </label>\n        <font color="red" class="margin12">*</font>\n      </ion-col>\n      <ion-col col-12>\n\n        <select id="ddlBrach" name="ddlBrach" [(ngModel)]="branchCode" col-12 placeholder="">\n          <!-- <option [value]="0" disabled selected>Select</option> -->\n          <option *ngFor="let brData of BranchTbl" [value]="brData.BranchCode">{{brData.branch}}</option>\n        </select>\n      </ion-col>\n      <ion-col col-12>\n        <label>\n          Lead-Customer/Customer Name\n        </label>\n      </ion-col>\n      <ion-col col-10>\n\n        <input type="text" [(ngModel)]="VendorName" col-12 placeholder="">\n      </ion-col>\n      <ion-col col-2>\n        <button ion-fab class="ion-fab34" (click)="openModal();">\n          <ion-icon name="md-search" class=""></ion-icon>\n        </button>\n      </ion-col>\n      <h4><span>OR</span></h4>\n\n      <ion-col col-12>\n        <label>\n          Activity Date\n        </label>\n      </ion-col>\n      <ion-col col-12>\n\n        <input type="date" [(ngModel)]="CreatedDate" col-12 placeholder="">\n      </ion-col>\n\n    </ion-row>\n\n\n    <ion-row padding>\n      <ion-col col-6>\n        <button ion-button round outline class=" btncancel" (click)="backToDashboard();">\n          <ion-icon></ion-icon>\n          Cancel\n        </button>\n      </ion-col>\n\n      <ion-col col-6>\n        <button type="button" ion-button icon-start block class="btnRadius" (click)=\'GetSearchSalesActivityList();\'>\n          <ion-icon></ion-icon>\n          Search\n        </button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12>\n        <label>Search Result: {{countOfRec}} record found</label>\n      </ion-col>\n    </ion-row>\n    <ion-row padding class="ShadowBox13">\n      <ion-col col-12>\n        <table>\n          <tr *ngFor="let item of customerInfo; let i = index">\n            <td>\n              <label>\n                Branch: {{item.Branch}}\n              </label><br>\n              <label>\n                {{item.AppointmentCode}}\n              </label><br>\n              <label>\n                {{item.CustomerName}}\n              </label><br>\n              <label>\n                {{item.StartTime }}\n              </label><br>\n              <label>\n                {{item.Status }}\n              </label>\n              <label style="display:none;">\n                {{item.VendorId }}\n              </label>\n            </td>\n            <td><a href="#" (click)="passDataToNSA(item);">Select</a></td>\n            <!-- <td> <input [(ngModel)]="item.Address1" type="hidden" /> </td>\n            <td> <input [(ngModel)]="item.Address2" type="hidden" /> </td>\n            <td> <input [(ngModel)]="item.Address3" type="hidden" /> </td>\n            <td> <input [(ngModel)]="item.BranchName" type="hidden" /> </td>\n            <td> <input [(ngModel)]="item.GSTCategory" type="hidden" /> </td>\n            <td> <input [(ngModel)]="item.GSTRegistrationStatus" type="hidden" /> </td>\n            <td> <input [(ngModel)]="item.LocationCode" type="hidden" /> </td>\n            <td> <input [(ngModel)]="item.LocationID" type="hidden" /> </td>\n            <td> <input [(ngModel)]="item.LocationName" type="hidden" /> </td>\n            <td> <input [(ngModel)]="item.Pincode" type="hidden" /> </td>\n            <td> <input [(ngModel)]="item.VendorCode" type="hidden" /> </td>\n            <td> <input [(ngModel)]="item.VendorId" type="hidden" /> </td>\n            <td> <input [(ngModel)]="item.VendorName" type="hidden" /> </td>\n            <td> <input [(ngModel)]="item.VendorType" type="hidden" /> </td> -->\n            <!-- Address1: "Ideal Plaza"\n            Address2: "Sarat Bose Road"\n            Address3: ""\n            BranchName: "BALMER LAWRIE & CO. LTD - Kolkata"\n            GSTCategory: null\n            GSTIN: null\n            GSTRegistrationStatus: null\n            LocationCode: "IN CCU"\n            LocationID: 117603\n            LocationName: "KOLKATA"\n            Pincode: ""\n            SecretKey: null\n            StateName: null\n            VendorCode: "CCU/CUS/06586"\n            VendorId: 13929\n            VendorName: "OOCL"\n            VendorType: "Lead-Customer" -->\n          </tr>\n          <!-- <tr>\n            <td>\n              <label>\n                Babuline Pharma Pvt. Ltd.\n                Mumbai\n              </label>\n            </td>\n\n            <td><a href="#">Select</a></td>\n          </tr>\n          <tr>\n            <td>\n              <label>\n                BEC Chemicals Pvt. Ltd.\n                Mumbai\n              </label>\n            </td>\n\n            <td><a href="#">Select</a></td>\n          </tr>\n          <tr>\n            <td>\n              <label>\n                Cristopia Energy Systems (I) Pvt. Ltd.\n                Mumbai\n              </label>\n            </td>\n\n            <td><a href="#">Select</a></td>\n          </tr> -->\n        </table>\n      </ion-col>\n\n\n\n    </ion-row>\n\n\n\n  </ion-list>\n</ion-content>\n<ion-footer class="ion-footer">\n\n  <div class="label-white toolbar-background-md" center text-center>\n    © Kale Logistics Solutions Private Limited. {{appBuildConfig.fullYear}} Version {{appBuildConfig.version}}\n  </div>\n</ion-footer>\n'/*ion-inline-end:"D:\MobileApp\corviBL\corviBL\src\pages\search-sales-activity\search-sales-activity.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_global_global__["a" /* GlobalProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["t" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_http_service_http_service__["a" /* HttpServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_util_alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_7__providers_util_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], SearchSalesActivityPage);
    return SearchSalesActivityPage;
}());

//# sourceMappingURL=search-sales-activity.js.map

/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export searchInvoiceList */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchInvoicePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_http_service_http_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_invoice_results_search_invoice_results__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__search_port_airport_search_port_airport__ = __webpack_require__(142);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var searchInvoiceList = /** @class */ (function () {
    function searchInvoiceList() {
    }
    return searchInvoiceList;
}());

var SearchInvoicePage = /** @class */ (function () {
    function SearchInvoicePage(navCtrl, navParams, globalService, modalCtrl, http, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.globalService = globalService;
        this.modalCtrl = modalCtrl;
        this.http = http;
        this.viewCtrl = viewCtrl;
        this.UserDetails = [];
        this.BranchTbl = [];
        this.ModeTbl = [];
        this.ServiceTBl = [];
        this.ShipmentTbl = [];
        this.modes = [];
        this.services = [];
        this.shipments = [];
        this.branchCode = '0';
        this.transportMode = '';
        this.serviceCode = '';
        this.shipmentCode = '0';
        this.jobNumber = '';
        this.invoiceNumber = '';
        this.mawbNumber = '';
        this.hawbNumber = '';
        this.BeNo = '';
        this.BeDate = '';
        this.origin = '';
        this.destination = '';
        this.responseFormAPI = [];
        this.title = "Search Invoice";
        this.VenType = '1';
        this.appBuildConfig = this.globalService.appBuildConfig;
        this.UserDetails = this.globalService.get('userDetails');
        // this.BranchTbl = this.UserDetails[Object.keys(this.UserDetails)[1]]["Table4"];
        // this.ModeTbl = this.UserDetails[Object.keys(this.UserDetails)[1]]["Table3"];
        // this.ServiceTBl = this.UserDetails[Object.keys(this.UserDetails)[1]]["Table3"];
        // this.ShipmentTbl = this.UserDetails[Object.keys(this.UserDetails)[1]]["Table3"];
        // this.modes = this.ModeTbl.filter(a => a.Identifier == "TransportMode");
        // this.services = this.ModeTbl.filter(a => a.Identifier == "Service");
        // this.shipments = this.ModeTbl.filter(a => a.Identifier == "ShipmentType");
        if (this.globalService.isCordovaAvailable()) {
            this.modes = JSON.parse(localStorage.getItem('TransportMode'));
            this.services = JSON.parse(localStorage.getItem('ServiceType'));
            this.shipments = JSON.parse(localStorage.getItem('ShipmentType'));
            this.BranchTbl = JSON.parse(localStorage.getItem('BranchTable'));
        }
        else {
            this.modes = JSON.parse(localStorage.getItem('TransportMode'));
            this.services = JSON.parse(localStorage.getItem('ServiceType'));
            this.shipments = JSON.parse(localStorage.getItem('ShipmentType'));
            this.BranchTbl = JSON.parse(localStorage.getItem('BranchTable'));
        }
        this.searchList = new searchInvoiceList();
    }
    SearchInvoicePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchInvoicePage');
        this.transportMode == '';
    };
    SearchInvoicePage.prototype.dismissModal = function () {
        var data = { 'foo': 'bar' };
        this.viewCtrl.dismiss(data);
    };
    // ionViewWillEnter(){
    //   console.log('ion view will enter origin here: ', this.globalService.selectedOrigin);
    //   if(this.globalService.selectedOrigin != ''){
    //     this.origin = this.globalService.selectedOrigin.Locationtext;
    //   } else if(this.globalService.selectedOrigin == '') {
    //     this.origin = '';
    //   }
    //   if(this.globalService.selectedDest != ''){
    //     this.destination = this.globalService.selectedDest.Locationtext;
    //   } else if(this.globalService.selectedDest == '') {
    //     this.destination = '';
    //   }
    //   // console.log('data from modal: ', this.dataFromModal);
    // }
    // ionViewDidEnter(){
    //   console.log('check origin here: ', this.globalService.selectedOrigin);
    //   if(this.globalService.selectedOrigin != ''){
    //     this.origin = this.globalService.selectedOrigin.Locationtext;
    //   } else if(this.globalService.selectedOrigin == '') {
    //     this.origin = '';
    //   }
    //   if(this.globalService.selectedDest != ''){
    //     this.destination = this.globalService.selectedDest.Locationtext;
    //   } else if(this.globalService.selectedDest == '') {
    //     this.destination = '';
    //   }
    //   // this.destination = this.globalService.selectedDest;
    //   console.log('selected origin: ', this.origin);
    // }
    SearchInvoicePage.prototype.ionViewDidLeave = function () {
        this.globalService.selectedOrigin = '';
        this.globalService.selectedDest = '';
    };
    SearchInvoicePage.prototype.onModeChange = function (event) {
        var value = event.target.value;
        if (value == '1') {
            this.mawbLBL = 'MAWB/MBL No.';
            this.hawbLBL = 'HAWB/HBL No.';
            this.beSbLBL = 'BE/SB No.';
            this.sbDateBeDateLBL = 'BE/SB Date';
        }
        else if (value == '2') {
            this.mawbLBL = 'MAWB/MBL No.';
            this.hawbLBL = 'HAWB/HBL No.';
            this.beSbLBL = 'BE/SB No.';
            this.sbDateBeDateLBL = 'BE/SB Date';
        }
    };
    SearchInvoicePage.prototype.openOriginModal = function () {
        var _this = this;
        var originModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__search_port_airport_search_port_airport__["a" /* SearchPortAirportPage */], { portType: '0' });
        originModal.onDidDismiss(function (data) {
            // this.modalDismissData = JSON.stringify(data);
            // this.originFromModal = data;
            // console.log('origin ka data: ', data.foo.Locationname);
            // this.origin = data.foo.Locationname
            if (_this.globalService.selectedOrigin != '') {
                _this.origin = _this.globalService.handleJSON(data).Locationname;
            }
        });
        originModal.present();
        localStorage.setItem('Mode', this.transportMode);
    };
    SearchInvoicePage.prototype.openDestinationModal = function () {
        var _this = this;
        var destinationModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__search_port_airport_search_port_airport__["a" /* SearchPortAirportPage */], { portType: '1' });
        destinationModal.onDidDismiss(function (data) {
            // this.modalDismissData = JSON.stringify(data);
            // this.destFromModal = data;
            // console.log('dest ka data: ', data.foo.Locationname);
            // this.destination = data.foo.Locationname;
            if (_this.globalService.selectedOrigin != '') {
                _this.destination = _this.globalService.handleJSON(data).Locationname;
            }
        });
        destinationModal.present();
        localStorage.setItem('Mode', this.transportMode);
    };
    SearchInvoicePage.prototype.searchInvoices = function () {
        var _this = this;
        // console.log('check origin here: ', this.globalService.selectedOrigin);
        // if(this.globalService.selectedOrigin != ''){
        //   this.origin = this.globalService.selectedOrigin.Locationtext;
        // } else if(this.globalService.selectedOrigin == '') {
        //   this.origin = '';
        // }
        // if(this.globalService.selectedDest != ''){
        //   this.destination = this.globalService.selectedDest.Locationtext;
        // } else if(this.globalService.selectedDest == '') {
        //   this.destination = '';
        // }
        var conDate = this.BeDate.split("-").reverse().join("-");
        this.searchList.UserId = localStorage.getItem('userId'); //
        this.searchList.BranchCode = this.branchCode; //
        this.searchList.JobType = this.VenType; //
        this.searchList.Mode = this.transportMode;
        this.searchList.Service = this.serviceCode;
        this.searchList.MBLNo = this.mawbNumber; //
        this.searchList.HBLNo = this.hawbNumber; //
        this.searchList.JobNo = this.jobNumber; //
        this.searchList.SBNo = this.BeNo; //
        this.searchList.Destination = this.destination;
        this.searchList.Origin = this.origin;
        this.searchList.InvoiceNo = this.invoiceNumber;
        this.searchList.SBDate = conDate;
        this.http.POST(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* Constants */].Corvi_Services.GetSearchInvoiceList, this.searchList).then(function (response) {
            console.log('check response for invoice list: ', response);
            if (response != '') {
                if (_this.globalService.isCordovaAvailable()) {
                    _this.responseFormAPI = response;
                    var stageOne = JSON.parse(_this.responseFormAPI)["Table"];
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__search_invoice_results_search_invoice_results__["a" /* SearchInvoiceResultsPage */], { invoiceResults: stageOne });
                    // this.flag = true;
                }
                else {
                    var stageOne = response['Table'];
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__search_invoice_results_search_invoice_results__["a" /* SearchInvoiceResultsPage */], { invoiceResults: stageOne });
                }
                // let stageOne = response['Table'];
                // this.navCtrl.push(SearchInvoiceResultsPage, { invoiceResults: stageOne });
            }
        });
    };
    SearchInvoicePage.prototype.ngOnInit = function () {
        this.branchCode = this.globalService.globalDefaultBranchCode;
        this.transportMode = '';
        this.mawbLBL = 'MAWB/MBL No.';
        this.hawbLBL = 'HAWB/HBL No.';
        this.beSbLBL = 'BE/SB No.';
        this.sbDateBeDateLBL = 'BE/SB Date';
        this.serviceCode = '';
    };
    SearchInvoicePage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    SearchInvoicePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-search-invoice',template:/*ion-inline-start:"D:\MobileApp\corviBL\corviBL\src\pages\search-invoice\search-invoice.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title style="margin-left: 17%">\n      {{title}}\n    </ion-title>\n    <ion-buttons right>\n      <button ion-button icon-only menuToggle style="color: #1069ad;">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-row padding class="ShadowBox13">\n    <ion-col col-12>\n      <b>Job Type</b>\n    </ion-col>\n    <ion-col col-6>\n      <input [(ngModel)]="VenType" type="radio" class="stv-radio-button" name="jobType" value="1" id="1" />\n      <label for="1">Freight Forwarding</label>\n    </ion-col>\n    <ion-col col-6>\n      <input [(ngModel)]="VenType" type="radio" class="stv-radio-button" name="jobType" value="2" id="2" />\n      <label for="2">Customs</label>\n    </ion-col>\n\n    <ion-col col-12>\n      <label>\n        <b>Branch</b>\n      </label>\n    </ion-col>\n\n    <ion-col col-12>\n      <select id="ddlBrach" name="ddlBrach" [(ngModel)]="branchCode" col-12 placeholder="">\n        <!-- <option [value]="0" disabled selected>Select</option> -->\n        <option *ngFor="let brData of BranchTbl" [value]="brData.BranchCode">{{brData.branch}}</option>\n      </select>\n      <div class="errorbox" style="color:tomato" *ngIf="transportMode == \'0\'">*required</div>\n    </ion-col>\n\n    <ion-col col-12>\n      <label>\n        <b>Mode (By Air/Ocean/Road/Rail)</b>\n      </label>\n    </ion-col>\n\n    <ion-col col-12>\n      <select id="ddlMode" name="ddlMode" [(ngModel)]="transportMode" col-12 placeholder=""\n        (change)=\'onModeChange($event)\'>\n        <!-- <option [value]=""  selected>Select</option> -->\n        <option *ngFor="let modeData of modes" [value]="modeData.KeyValue">{{modeData.Description}}</option>\n      </select>\n      <div class="errorbox" style="color:tomato" *ngIf="transportMode == \'0\'">*required</div>\n    </ion-col>\n\n    <ion-col col-12>\n      <label>\n        <b>Service(Import/Export/Domestic)</b>\n      </label>\n    </ion-col>\n\n    <ion-col col-12>\n      <select id="ddlService" name="ddlService" [(ngModel)]="serviceCode" col-12 placeholder="">\n        <!-- <option [value]=""  selected>Select</option> -->\n        <option *ngFor="let serviceData of services" [value]="serviceData.KeyValue">{{serviceData.Description}}</option>\n      </select>\n      <div class="errorbox" style="color:tomato" *ngIf="serviceCode == \'0\'">*required</div>\n    </ion-col>\n\n\n    <ion-col col-12>\n      <label>\n        <b>Job No.</b>\n      </label>\n    </ion-col>\n    <ion-col col-12>\n      <input col-12 type="text" name="jobNumber" [(ngModel)]="jobNumber">\n    </ion-col>\n\n    <ion-col col-12>\n      <label>\n        <b>Invoice No.</b>\n      </label>\n    </ion-col>\n    <ion-col col-12>\n      <input col-12 type="text" name="invoiceNumber" [(ngModel)]="invoiceNumber">\n    </ion-col>\n\n\n    <ion-col col-12>\n      <label>\n        <b>{{mawbLBL}}</b>\n      </label>\n    </ion-col>\n    <ion-col col-12>\n      <input col-12 type="text" name="mawbNumber" [(ngModel)]="mawbNumber">\n    </ion-col>\n\n    <ion-col col-12>\n      <label>\n        <b>{{hawbLBL}}</b>\n      </label>\n    </ion-col>\n    <ion-col col-12>\n      <input col-12 type="text" name="hawbNumber" [(ngModel)]="hawbNumber">\n    </ion-col>\n\n    <ion-col col-12>\n      <label>\n        <b>{{beSbLBL}}</b>\n      </label>\n    </ion-col>\n    <ion-col col-12>\n      <input col-12 type="text" name="BeNo" [(ngModel)]="BeNo">\n    </ion-col>\n\n    <ion-col col-12>\n      <label>\n        <b>{{sbDateBeDateLBL}}</b>\n      </label>\n    </ion-col>\n    <ion-col col-12>\n      <input col-12 type="date" name="BeDate" [(ngModel)]="BeDate">\n    </ion-col>\n\n    <ion-col col-12>\n      <label>\n        <b>Origin</b>\n      </label>\n    </ion-col>\n\n\n    <ion-col col-10>\n\n      <input maxlength="50" disabled name="origin" type="text" [(ngModel)]="origin" col-12 placeholder="">\n\n    </ion-col>\n    <ion-col col-2>\n      <button ion-fab class="ion-fab34" (click)="openOriginModal();">\n        <ion-icon name="md-search" class=""></ion-icon>\n      </button>\n    </ion-col>\n    <!-- <ion-col col-9>\n      <input col-9 type="text" name="origin" [(ngModel)]="origin">\n    </ion-col>\n    <ion-col col-3 (click)="openOriginModal()">\n        <ion-icon class="icon ion-ios-search"></ion-icon>\n        <span class="text">Search</span>\n    </ion-col> -->\n\n\n    <ion-col col-12>\n      <label>\n        <b>Destination</b>\n      </label>\n    </ion-col>\n    <!-- <ion-col col-9>\n      <input col-9 type="text" name="destination" [(ngModel)]="destination">\n    </ion-col>\n    <ion-col col-3 (click)="openDestinationModal()">\n        <ion-icon class="icon ion-ios-search"></ion-icon>\n        <span class="text">Search</span>\n    </ion-col> -->\n\n    <ion-col col-10>\n\n      <input maxlength="50" disabled name="destination" type="text" [(ngModel)]="destination" col-12 placeholder="">\n\n    </ion-col>\n    <ion-col col-2>\n      <button ion-fab class="ion-fab34" (click)="openDestinationModal();">\n        <ion-icon name="md-search" class=""></ion-icon>\n      </button>\n    </ion-col>\n\n  </ion-row>\n\n\n</ion-content>\n<ion-footer class="ion-footer">\n  <ion-row padding class="">\n    <ion-col col-6>\n      <button ion-button block class="btnRadius btncancel" (click)="goBack();">\n        <ion-icon></ion-icon>\n        Cancel\n      </button>\n    </ion-col>\n\n    <ion-col col-6>\n      <button ion-button icon-start block class="btnRadius" (click)="searchInvoices();">\n        <ion-icon></ion-icon>\n        Search\n      </button>\n    </ion-col>\n  </ion-row>\n  <div class="label-white toolbar-background-md" center text-center>\n    © Kale Logistics Solutions Private Limited. {{appBuildConfig.fullYear}} Version {{appBuildConfig.version}}\n  </div>\n</ion-footer>\n'/*ion-inline-end:"D:\MobileApp\corviBL\corviBL\src\pages\search-invoice\search-invoice.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_http_service_http_service__["a" /* HttpServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ViewController */]])
    ], SearchInvoicePage);
    return SearchInvoicePage;
}());

//# sourceMappingURL=search-invoice.js.map

/***/ }),

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchInvoiceResultsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_global__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__popover_popover__ = __webpack_require__(141);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchInvoiceResultsPage = /** @class */ (function () {
    function SearchInvoiceResultsPage(navCtrl, navParams, globalService, popCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.globalService = globalService;
        this.popCtrl = popCtrl;
        this.title = 'Search Shipment Invoice';
        this.fetchedData = [];
        this.fetchedData = this.navParams.get('invoiceResults');
        this.appBuildConfig = this.globalService.appBuildConfig;
        if (this.globalService.isCordovaAvailable()) {
            // this.countOfRec = JSON.parse(this.fetchedData).length;
            this.countOfRec = this.fetchedData.length;
        }
        else {
            this.countOfRec = this.fetchedData.length;
        }
    }
    SearchInvoiceResultsPage.prototype.ionViewDidLoad = function () {
        console.log('fetched data: ', this.fetchedData);
        console.log('ionViewDidLoad SearchInvoiceResultsPage');
    };
    SearchInvoiceResultsPage.prototype.openPopOver = function (myEvent, data) {
        var popover = this.popCtrl.create(__WEBPACK_IMPORTED_MODULE_3__popover_popover__["a" /* PopoverPage */], { popoverData: data });
        popover.present({
            ev: myEvent
        });
    };
    SearchInvoiceResultsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-search-invoice-results',template:/*ion-inline-start:"D:\MobileApp\corviBL\corviBL\src\pages\search-invoice-results\search-invoice-results.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title style="margin-left: 17%">\n      {{title}}\n    </ion-title>\n    <ion-buttons right>\n      <button ion-button icon-only menuToggle style="color: #1069ad;">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-row>\n    <ion-col col-12>\n      <label>Search Result: {{countOfRec}} record found</label>\n    </ion-col>\n  </ion-row>\n  <ion-row class="ShadowBox13" *ngFor="let shipData of fetchedData; let i = index;">\n    <ion-card>\n      <ion-item>\n        <!-- <div class="column">\n          <label>\n            <span>&#9992;</span>&nbsp;&nbsp;\n            <ion-icon name="create"></ion-icon>&nbsp;&nbsp;&nbsp;\n            <label for="">{{shipData.InvoiceDate }}</label>\n          </label>\n        </div> -->\n\n        <div class="column" *ngIf="shipData.Service == \'Import\'">\n          <label>\n            <ion-icon *ngIf="shipData.Mode == \'AIR\'" name="plane"></ion-icon>\n            <ion-icon *ngIf="shipData.Mode == \'OCEAN\'" name="boat"></ion-icon>&nbsp;&nbsp;\n            <ion-icon name="create"></ion-icon>&nbsp;&nbsp;\n\n            <!-- <img src="assets/img/flight.png" *ngIf="shipData.Mode == \'AIR\'" class="">\n            <img src="assets/img/boat-with-containers.png" *ngIf="shipData.Mode == \'OCEAN\'" class="">&nbsp;&nbsp;\n            <img src="assets/img/import.png"  class="">&nbsp;&nbsp; -->\n            <label for="">{{shipData.InvoiceDate }}</label>\n          </label>\n        </div>\n\n        <div class="columnBlue" *ngIf="shipData.Service == \'Export\'">\n          <label>\n            <ion-icon *ngIf="shipData.Mode == \'AIR\'" name="plane"></ion-icon>\n            <ion-icon *ngIf="shipData.Mode == \'OCEAN\'" name="boat"></ion-icon>&nbsp;&nbsp;\n            <ion-icon name="create"></ion-icon>&nbsp;&nbsp;\n\n            <!-- <img src="assets/img/flight.png" *ngIf="shipData.Mode == \'AIR\'" class="">\n            <img src="assets/img/boat-with-containers.png" *ngIf="shipData.Mode == \'OCEAN\'" class="">&nbsp;&nbsp;\n            <img src="assets/img/export.png"  class="">&nbsp;&nbsp; -->\n            <label for="">{{shipData.InvoiceDate }}</label>\n          </label>\n        </div>\n\n        <div class="column1">\n          <h4>\n            {{shipData.MasterNo}}\n          </h4>\n        </div>\n      </ion-item>\n\n      <ion-card-content>\n        <div class="column2">\n          <label style="color: #0461AA;font-size: 16px;"><b> {{shipData.InvoiceNo}}</b></label><br>\n          <ion-row>\n            <ion-col>\n              <label class="labelFont"><b>INVOICE AMT.:</b></label><br />\n              <label class="labelFont">{{shipData.Amount}} </label><br />\n            </ion-col>\n            <ion-col>\n              <label class="labelFont"><b>JOB NO.:</b></label><br />\n              <label class="labelFont">{{shipData.JobNo}} </label><br />\n            </ion-col>\n            <ion-col col-1>\n              <div class="divW">\n                <ion-icon name="custom-dots" (click)="openPopOver($event,shipData)"> </ion-icon>\n              </div>\n            </ion-col>\n          </ion-row>\n\n          <label class="labelFont">POL / POD :</label>\n          <label class="labelFont">{{shipData.POL}} / {{shipData.POD}} </label>\n        </div>\n      </ion-card-content>\n    </ion-card>\n  </ion-row>\n\n</ion-content>\n<ion-footer class="ion-footer">\n  <div class="label-white toolbar-background-md" center text-center style="background-color: #1069ad;color: #fff;">\n    © Kale Logistics Solutions Private Limited. {{appBuildConfig.fullYear}} Version {{appBuildConfig.version}}\n  </div>\n</ion-footer>\n'/*ion-inline-end:"D:\MobileApp\corviBL\corviBL\src\pages\search-invoice-results\search-invoice-results.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* PopoverController */]])
    ], SearchInvoiceResultsPage);
    return SearchInvoiceResultsPage;
}());

//# sourceMappingURL=search-invoice-results.js.map

/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export searchCustomerJob */
/* unused harmony export saveMileStoneList */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerJobSearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_util_toast_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_http_service_http_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__search_port_airport_search_port_airport__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shipment_invoice_shipment_invoice__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shipment_status_shipment_status__ = __webpack_require__(74);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var searchCustomerJob = /** @class */ (function () {
    function searchCustomerJob() {
    }
    return searchCustomerJob;
}());

var saveMileStoneList = /** @class */ (function () {
    function saveMileStoneList() {
    }
    return saveMileStoneList;
}());

/**
 * Generated class for the CustomerJobSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CustomerJobSearchPage = /** @class */ (function () {
    function CustomerJobSearchPage(navCtrl, navParams, globalService, toastService, modalCtrl, http, alertCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.globalService = globalService;
        this.toastService = toastService;
        this.modalCtrl = modalCtrl;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.viewCtrl = viewCtrl;
        this.UserDetails = [];
        this.BranchTbl = [];
        this.ModeTbl = [];
        this.ServiceTBl = [];
        this.ShipmentTbl = [];
        this.modes = [];
        this.services = [];
        this.shipments = [];
        this.transportMode = '';
        this.serviceCode = '';
        this.shipmentCode = '0';
        this.fetchedJobs = [];
        this.bookingNoArr = [];
        this.activityIdArr = [];
        this.activityDate = new Date().toISOString();
        this.jobno = '';
        this.mblno = '';
        this.hblno = '';
        this.sbno = '';
        this.sbdate = '';
        this.origin = '';
        this.destination = '';
        this.modelbl = '';
        this.modelblH = '';
        this.modelblB = '';
        this.responseFormAPI = [];
        this.modelblMAWB = '';
        this.title = "Search Job(s)";
        this.appBuildConfig = this.globalService.appBuildConfig;
        this.UserDetails = this.globalService.get('userDetails');
        // this.BranchTbl = this.UserDetails[Object.keys(this.UserDetails)[1]]["Table4"];
        // this.ModeTbl = this.UserDetails[Object.keys(this.UserDetails)[1]]["Table3"];
        // this.ServiceTBl = this.UserDetails[Object.keys(this.UserDetails)[1]]["Table3"];
        // this.ShipmentTbl = this.UserDetails[Object.keys(this.UserDetails)[1]]["Table3"];
        // this.modes = this.ModeTbl.filter(a => a.Identifier == "TransportMode");
        // this.services = this.ModeTbl.filter(a => a.Identifier == "Service");
        // this.shipments = this.ModeTbl.filter(a => a.Identifier == "ShipmentType");
        this.BranchTbl = JSON.parse(localStorage.getItem('BranchTable'));
        this.modes = JSON.parse(localStorage.getItem('TransportMode'));
        this.services = JSON.parse(localStorage.getItem('ServiceType'));
        this.shipments = JSON.parse(localStorage.getItem('ShipmentType'));
        this.userID = localStorage.getItem('userId');
        this.VenType = '1';
        this.searchList = new searchCustomerJob();
        this.saveMileStoneList = new saveMileStoneList();
        this.modelblMAWB = 'MAWB/MBL No.';
        this.modelblH = 'HAWB/HBL No.';
        this.modelblB = 'BE No./SB No.';
        this.modelblS = 'BE Date/SB Date';
        if (this.globalService.selectedOrigin != '') {
            debugger;
            this.locationorigin = this.globalService.selectedCity.Locationtext;
            // this.origin = this.globalService.selectedOrigin;
            // var o = localStorage.getItem('origin1');
            // var c = localStorage.getItem('destination1');
            // if (o == 'origin1') {
            //   this.origin = this.locationorigin;
            // } else if (c == 'destination1') {
            //   this.destination = this.locationdest;
            // }
        }
        if (this.globalService.selectedDest != '') {
            this.locationdest = this.globalService.selectedCity.Locationtext;
            // this.destination = this.globalService.selectedDest;
            // debugger
            // var o = localStorage.getItem('origin1');
            // var c = localStorage.getItem('destination1');
            // if (o == 'origin1') {
            //   this.origin = this.locationorigin;
            // } else if (c == 'destination1') {
            //   this.destination = this.locationdest;
            // }
        }
    }
    CustomerJobSearchPage.prototype.dismissModal = function () {
        var data = { 'foo': 'bar' };
        this.viewCtrl.dismiss(data);
    };
    CustomerJobSearchPage.prototype.ngOnInit = function () {
        this.transportMode = '';
        this.serviceCode = '';
        // if (this.globalService.defaultMode != '') {
        //   this.transportMode = this.globalService.defaultMode;
        // } else {
        //   this.transportMode = '';
        // }
        // if (this.globalService.defaultService != '') {
        //   this.serviceCode = this.globalService.defaultService;
        // } else {
        //   this.serviceCode = '';
        // }
        // this.transportMode = this.globalService.defaultMode;
        // this.serviceCode = this.globalService.defaultService;
        this.branchCode = this.globalService.globalDefaultBranchCode;
        // this.serviceCode = this.globalService.defaultService;
    };
    CustomerJobSearchPage.prototype.onModeChange = function (event) {
        var value = event.target.value;
        if (value == '1') {
            this.modelblMAWB = 'MAWB/MBL No.';
        }
        else if (value == '2') {
            this.modelblMAWB = 'MAWB/MBL No.';
        }
        if (value == '1') {
            this.modelblH = 'HAWB/HBL No.';
        }
        else if (value == '2') {
            this.modelblH = 'HAWB/HBL No.';
        }
        if (value == 'Import') {
            this.modelblB = 'BE No./SB No.';
        }
        else if (value == 'Export') {
            this.modelblB = 'BE No./SB No.';
        }
        if (value == 'Import') {
            this.modelblS = 'BE Date/SB Date';
        }
        else if (value == 'Export') {
            this.modelblS = 'BE Date/SB Date';
        }
    };
    CustomerJobSearchPage.prototype.onServiceChange = function (event) {
        var value = event.target.value;
        if (value == '2') {
            this.modelblB = 'BE No./SB No.';
        }
        else if (value == '1') {
            this.modelblB = 'BE No./SB No.';
        }
        if (value == '2') {
            this.modelblS = 'BE Date/SB Date';
        }
        else if (value == '1') {
            this.modelblS = 'BE Date/SB Date';
        }
    };
    CustomerJobSearchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UpdateJobMilestonePage');
        this.VenType = '1';
    };
    CustomerJobSearchPage.prototype.ionViewDidEnter = function () {
        this.VenType = '1';
        // this.fetchedMilestone = this.navParams.get('milestone');
        this.fetchedMilestone = this.globalService.selectedMilestone;
        this.fetchedJobs = this.globalService.selectedJobsArray;
        console.log('check milestone !!!!!!!', this.fetchedMilestone);
        console.log('check jobsArray ', this.fetchedJobs);
        console.log('check job type: ', this.VenType);
    };
    CustomerJobSearchPage.prototype.ionViewDidLeave = function () {
        this.fetchedMilestone = '';
    };
    CustomerJobSearchPage.prototype.showAlert = function (title, msg) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: title,
            message: msg,
            buttons: [
                {
                    text: 'OK',
                    handler: function () {
                        _this.globalService.setRootPage(__WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard__["a" /* DashboardPage */]);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
            ]
        });
        alert.present();
    };
    CustomerJobSearchPage.prototype.backToDashboard = function () {
        this.globalService.setRootPage(__WEBPACK_IMPORTED_MODULE_8__shipment_invoice_shipment_invoice__["a" /* ShipmentInvoicePage */]);
    };
    // sendDataToSearchMilestone() {
    //   this.openModal();
    // }
    CustomerJobSearchPage.prototype.sendDataToSearchJobs = function () {
        // this.searchJobs();
    };
    CustomerJobSearchPage.prototype.openModalOrigin = function () {
        var _this = this;
        // localStorage.removeItem('origin');
        // localStorage.removeItem('destination');
        var searchMilestone = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__search_port_airport_search_port_airport__["a" /* SearchPortAirportPage */], { origin: '0' });
        searchMilestone.onDidDismiss(function (data) {
            console.log(data);
            // this.modalDismissData = JSON.stringify(data);
            if (_this.globalService.selectedOrigin != '') {
                _this.origin = _this.globalService.handleJSON(data).Locationname;
            }
        });
        searchMilestone.present();
        this.globalService.store('branchCode', this.branchCode);
        localStorage.setItem('Mode', this.transportMode);
        localStorage.setItem('jobType', this.VenType);
        console.log(localStorage.getItem('jobType'));
    };
    CustomerJobSearchPage.prototype.openModalDestination = function () {
        var _this = this;
        // localStorage.removeItem('origin');
        // localStorage.removeItem('destination');
        var searchMilestone = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__search_port_airport_search_port_airport__["a" /* SearchPortAirportPage */], { destination: '1' });
        searchMilestone.onDidDismiss(function (data) {
            console.log(data);
            _this.destination = _this.globalService.handleJSON(data).Locationname;
        });
        searchMilestone.present();
        this.globalService.store('branchCode', this.branchCode);
        localStorage.setItem('Mode', this.transportMode);
        localStorage.setItem('jobType', this.VenType);
        console.log(localStorage.getItem('jobType'));
    };
    // searchJobs(){
    //   if (this.branchCode == '0' || this.transportMode == '0' || this.serviceCode == '0' || this.shipmentCode == '0') {
    //     this.toastService.show('Please select the required fields.', 3000, true, 'top', 'toast-container')
    //     return;
    //   }
    //   this.navCtrl.push(SearchJobsPage, {searchDetails: this.searchList} );
    // }
    CustomerJobSearchPage.prototype.goBack = function () {
        this.globalService.setRootPage(__WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard__["a" /* DashboardPage */]);
        // this.navCtrl.pop();
    };
    CustomerJobSearchPage.prototype.removeJob = function (val) {
        var index = this.globalService.selectedJobsArray.indexOf(val);
        this.globalService.selectedJobsArray.splice(index, 1);
    };
    CustomerJobSearchPage.prototype.SearchJobList = function () {
        var _this = this;
        debugger;
        if (this.branchCode == '0') {
            this.toastService.show('Please select branch.', 3000, true, 'top', 'toast-container');
            //this.startDate.focus();
            return;
        }
        // if (this.transportMode == '0') {
        //   this.toastService.show('Please select mode.', 3000, true, 'top', 'toast-container');
        //   //this.startDate.focus();
        //   return;
        // }
        // if (this.serviceCode == '0') {
        //   this.toastService.show('Please select service.', 3000, true, 'top', 'toast-container');
        //   //this.startDate.focus();
        //   return;
        // }
        // this.searchList.UserId = '1244';// this.userID;
        // this.searchList.Mode = '1'// this.transportMode;
        // this.searchList.Service = '2';// this.serviceCode;
        // this.searchList.JobType = '1'//this.VenType;
        // this.searchList.BranchCode = 'BOM'// this.branchCode
        // this.searchList.JobNo = ''//this.jobno;
        // this.searchList.MBLNo = ''//this.mblno;
        // this.searchList.HBLNo = ''//this.hblno;
        // this.searchList.SBNo = ''// this.sbno
        // this.searchList.Origin = ''//this.origin;
        // this.searchList.Destination = ''// this.destination;
        var conDate = this.sbdate.split("-").reverse().join("-");
        this.searchList.UserId = this.userID;
        this.searchList.Mode = this.transportMode.toString();
        this.searchList.Service = this.serviceCode.toString();
        this.searchList.JobType = this.VenType;
        this.searchList.BranchCode = this.branchCode;
        this.searchList.JobNo = this.jobno;
        this.searchList.MBLNo = this.mblno;
        this.searchList.HBLNo = this.hblno;
        this.searchList.SBNo = this.sbno;
        this.searchList.SBDate = conDate;
        this.searchList.Origin = this.origin;
        this.searchList.Destination = this.destination;
        //'1244','1','2',1,'BOM','','','','','',''
        this.http.POST(__WEBPACK_IMPORTED_MODULE_6__constants__["a" /* Constants */].Corvi_Services.GetCustomerSearchJobList, this.searchList).then(function (response) {
            console.log('test saved milestone here: ', response);
            debugger;
            if (response != '') {
                if (_this.globalService.isCordovaAvailable()) {
                    _this.responseFormAPI = response;
                    _this.jobSearchData = JSON.parse(_this.responseFormAPI)["Table"];
                    localStorage.setItem('customerJobSearch', JSON.stringify(_this.jobSearchData));
                    localStorage.setItem('flagJobSearch', '1');
                    if (JSON.parse(_this.responseFormAPI)["Table"] != '') {
                        _this.viewCtrl.dismiss();
                        _this.globalService.setRootPage(__WEBPACK_IMPORTED_MODULE_9__shipment_status_shipment_status__["a" /* ShipmentStatusPage */]);
                    }
                    else {
                        _this.toastService.show('Data not found!', 3000, true, 'top', 'toast-container');
                        return;
                    }
                }
                else {
                    _this.jobSearchData = response['Table'];
                    localStorage.setItem('flagJobSearch', '1');
                    localStorage.setItem('customerJobSearch', JSON.stringify(_this.jobSearchData));
                    if (response['Table'] != '') {
                        _this.viewCtrl.dismiss();
                        _this.globalService.setRootPage(__WEBPACK_IMPORTED_MODULE_9__shipment_status_shipment_status__["a" /* ShipmentStatusPage */]);
                    }
                    else {
                        _this.toastService.show('Data not found!', 3000, true, 'top', 'toast-container');
                        return;
                    }
                }
            }
            else {
                _this.toastService.show('Form not submited !', 3000, true, 'top', 'toast-container');
                return;
            }
        });
    };
    CustomerJobSearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'page-customer-job-search',template:/*ion-inline-start:"D:\MobileApp\corviBL\corviBL\src\pages\customer-job-search\customer-job-search.html"*/'<ion-header>\n  <ion-navbar color="primary">\n\n    <ion-title id="Dashboard" center text-center>\n      {{title}}\n      <!-- <ion-icon name=\'close-circle\' (click)=\'dismissModal()\' style=\'float: right;\'></ion-icon> -->\n    </ion-title>\n    <ion-buttons left>\n      <button ion-button icon-only (click)="dismissModal();">\n        <ion-icon name="ios-arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons right>\n      <button ion-button icon-only menuToggle style="color: #1069ad;">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content padding>\n  <ion-row padding class="ShadowBox13">\n    <ion-col col-12>\n      <b> Type of Activity</b>\n    </ion-col>\n\n    <!-- <ion-col col-6>\n      <button ion-button icon-start block class="btnRadiusUpper">\n        <ion-icon></ion-icon>\n        Freight Forwarding\n      </button>\n    </ion-col>\n    <ion-col col-6>\n      <button ion-button block class="btnRadiusUpper btncancel">\n        <ion-icon></ion-icon>\n        Customs\n      </button>\n    </ion-col> -->\n\n    <ion-col col-6>\n      <input [(ngModel)]="VenType" type="radio" class="stv-radio-button" name="jobType" value="1" id="1" />\n      <label for="1"><b>Freight Forwarding</b></label>\n    </ion-col>\n    <ion-col col-6>\n      <input [(ngModel)]="VenType" type="radio" class="stv-radio-button" name="jobType" value="2" id="2" />\n      <label for="2"><b>Customs</b></label>\n    </ion-col>\n\n    <ion-col col-12>\n      <label>\n        <b>Branch</b>\n      </label>\n      <font color="red" class="margin12">*</font>\n    </ion-col>\n    <!-- <ion-col col-12>\n\n      <select col-12 placeholder="Select One">\n        <option value="f">Default</option>\n        <option value="m">1</option>\n      </select>\n\n    </ion-col> -->\n\n    <ion-col col-12>\n\n      <select id="ddlBrach" name="ddlBrach" [(ngModel)]="branchCode" col-12 placeholder="">\n        <!-- <option [value]="0" disabled selected>Select</option> -->\n        <option *ngFor="let brData of BranchTbl" [value]="brData.BranchCode">{{brData.branch}}</option>\n      </select>\n\n\n    </ion-col>\n\n    <ion-col col-12>\n      <label>\n        <b>Mode (By Air/Ocean/Road/Rail)</b>\n      </label>\n      <!-- <font color="red" class="margin12">*</font> -->\n    </ion-col>\n\n    <ion-col col-12>\n      <select id="ddlMode" name="ddlMode" [(ngModel)]="transportMode" col-12 placeholder=""\n        (change)=\'onModeChange($event)\'>\n        <option [value]="" disabled selected></option>\n        <option *ngFor="let modeData of modes" [value]="modeData.KeyValue">{{modeData.Description}}</option>\n      </select>\n\n    </ion-col>\n\n\n    <ion-col col-12>\n      <label>\n        <b> Service(Import/Export/Domestic)</b>\n      </label>\n      <!-- <font color="red" class="margin12">*</font> -->\n    </ion-col>\n\n    <ion-col col-12>\n      <select id="ddlService" name="ddlService" [(ngModel)]="serviceCode" col-12 placeholder=""\n        (change)=\'onServiceChange($event)\'>\n        <option [value]="" disabled selected></option>\n        <option *ngFor="let serviceData of services" [value]="serviceData.KeyValue">{{serviceData.Description}}</option>\n      </select>\n\n    </ion-col>\n\n\n\n    <ion-col col-12>\n      <label>\n        <b>Job No.</b>\n      </label>\n    </ion-col>\n\n    <ion-col col-12>\n      <input maxlength="50" col-12 placeholder="" type="text" [(ngModel)]="jobno">\n    </ion-col>\n\n    <ion-col col-12>\n      <label>\n        <b> {{modelblMAWB}}</b>\n      </label>\n\n    </ion-col>\n\n    <ion-col col-12>\n      <input maxlength="50" col-12 placeholder="" type="text" [(ngModel)]="mblno">\n    </ion-col>\n\n    <ion-col col-12>\n      <label>\n        <b>{{modelblH}}</b>\n      </label>\n    </ion-col>\n\n    <ion-col col-12>\n      <input maxlength="50" col-12 placeholder="" type="text" [(ngModel)]="hblno">\n    </ion-col>\n\n    <ion-col col-12>\n      <label>\n        <b>{{modelblB}}</b>\n      </label>\n    </ion-col>\n\n    <ion-col col-12>\n      <input maxlength="50" col-12 placeholder="" type="text" [(ngModel)]="sbno">\n    </ion-col>\n\n\n    <ion-col col-12>\n      <label>\n        <b>{{modelblS}} </b>\n      </label>\n    </ion-col>\n\n    <ion-col col-12>\n      <input maxlength="50" col-12 placeholder="" type="date" [(ngModel)]="sbdate">\n    </ion-col>\n\n    <ion-col col-12>\n      <label>\n        <b>Origin</b>\n      </label>\n      <!-- <font color="red" class="margin12">*</font> -->\n    </ion-col>\n\n    <ion-col col-10>\n\n      <input maxlength="50" disabled type="text" [(ngModel)]="origin" col-12 placeholder="">\n\n    </ion-col>\n    <ion-col col-2>\n      <button ion-fab class="ion-fab34" (click)="openModalOrigin();">\n        <ion-icon name="md-search" class=""></ion-icon>\n      </button>\n    </ion-col>\n\n    <ion-col col-12>\n      <label>\n        <b>Destination</b>\n      </label>\n      <!-- <font color="red" class="margin12">*</font> -->\n    </ion-col>\n\n    <ion-col col-10>\n\n      <input maxlength="50" disabled type="text" [(ngModel)]="destination" col-12 placeholder="">\n\n    </ion-col>\n    <ion-col col-2>\n      <button ion-fab class="ion-fab34" (click)="openModalDestination();">\n        <ion-icon name="md-search" class=""></ion-icon>\n      </button>\n    </ion-col>\n\n\n  </ion-row>\n\n\n</ion-content>\n<ion-footer class="ion-footer">\n  <ion-row padding class="">\n    <ion-col col-6>\n      <button ion-button block class="btnRadius btncancel" (click)="dismissModal()">\n        <ion-icon></ion-icon>\n        Cancel\n      </button>\n    </ion-col>\n\n    <ion-col col-6>\n      <button ion-button icon-start block class="btnRadius" (click)="SearchJobList()">\n        <ion-icon></ion-icon>\n        Search\n      </button>\n    </ion-col>\n  </ion-row>\n  <!-- <div class="label-white toolbar-background-md" center text-center>\n      © Kale Logistics Solutions Private Limited. {{appBuildConfig.fullYear}} Version {{appBuildConfig.version}}\n    </div> -->\n</ion-footer>\n'/*ion-inline-end:"D:\MobileApp\corviBL\corviBL\src\pages\customer-job-search\customer-job-search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_0__providers_util_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ModalController */], __WEBPACK_IMPORTED_MODULE_5__providers_http_service_http_service__["a" /* HttpServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["t" /* ViewController */]])
    ], CustomerJobSearchPage);
    return CustomerJobSearchPage;
}());

//# sourceMappingURL=customer-job-search.js.map

/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export searchMilestoneList */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobStatusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_global__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_http_service_http_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_util_alert_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_util_toast_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shipment_status_shipment_status__ = __webpack_require__(74);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the JobStatusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var searchMilestoneList = /** @class */ (function () {
    function searchMilestoneList() {
    }
    return searchMilestoneList;
}());

var JobStatusPage = /** @class */ (function () {
    function JobStatusPage(navCtrl, navParams, globalService, modalCtrl, nav, menu, toastCtrl, http, alertService, toastService, 
        // public baseURLProvider: BaseURLProvider,
        fb) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.globalService = globalService;
        this.modalCtrl = modalCtrl;
        this.nav = nav;
        this.menu = menu;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.alertService = alertService;
        this.toastService = toastService;
        this.fb = fb;
        this.AllData = [];
        this.gateMileStoneListArr = [];
        this.dataFlag = false;
        debugger;
        this.userID = localStorage.getItem('userId');
        this.searchList = new searchMilestoneList();
        this.title = "Job Status";
        this.appBuildConfig = this.globalService.appBuildConfig;
        if (this.globalService.jobStatusPArms != undefined) {
            //this.AllData = this.globalService.jobStatusPArms;
            this.GetJobDetailsById();
            //this.gateMileStoneListArr = JSON.parse(localStorage.getItem('filterMilestone'));
        }
        this.userID = localStorage.getItem('userId');
    }
    JobStatusPage.prototype.backToDashboard = function () {
        this.globalService.setRootPage(__WEBPACK_IMPORTED_MODULE_8__shipment_status_shipment_status__["a" /* ShipmentStatusPage */]);
        localStorage.removeItem('flagJobSearch');
    };
    JobStatusPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad JobStatusPage');
    };
    JobStatusPage.prototype.GetJobDetailsById = function () {
        var _this = this;
        debugger;
        this.searchList.WoDetailno = this.globalService.jobStatusPArms.DetailNo; // this.AllData.JobType;
        console.log('check one ');
        this.http.POST(__WEBPACK_IMPORTED_MODULE_3__constants__["a" /* Constants */].Corvi_Services.GetJobDetailsById, this.searchList).then(function (response) {
            console.log('LKO ', response);
            debugger;
            if (_this.globalService.isCordovaAvailable()) {
                _this.dataFlag = true;
                _this.AllData = JSON.parse(response)["Table"][0];
                _this.gateMileStoneListArr = JSON.parse(response)["Table1"];
            }
            else {
                _this.dataFlag = true;
                _this.AllData = response['Table'][0];
                // response['Table'][0].BranchName
                _this.gateMileStoneListArr = response['Table1'];
            }
        }, function (err) {
            console.log('GetJobDetailsById', err);
        });
    };
    JobStatusPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-job-status',template:/*ion-inline-start:"D:\MobileApp\corviBL\corviBL\src\pages\job-status\job-status.html"*/'<!--\n  Generated template for the NewSalesActivityPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <!-- <button right ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <button left ion-button menuToggle>\n      <ion-icon name="arrow-back"></ion-icon>\n    </button> -->\n    <ion-title id="Dashboard" center text-center>\n      {{title}}\n    </ion-title>\n\n    <ion-buttons left>\n      <button ion-button icon-only (click)="backToDashboard();">\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-buttons right>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list *ngIf="dataFlag">\n\n    <ion-row padding class="ShadowBox13">\n\n      <table>\n        <tr>\n          <td><b>Branch</b></td>\n          <td>{{AllData.BranchName}}</td>\n\n        </tr>\n        <tr>\n          <td><b>Job No.</b></td>\n          <td>{{AllData.JobNo}}</td>\n\n        </tr>\n        <tr>\n          <td><b>Service</b></td>\n          <td>{{AllData.Service}}</td>\n\n        </tr>\n        <tr>\n          <td><b>Mode</b></td>\n          <td>{{AllData.Mode}}</td>\n\n        </tr>\n      </table>\n\n      <table>\n        <tr>\n          <td><b>MAWB No.</b></td>\n          <td><b>Date</b></td>\n\n        </tr>\n        <tr>\n          <td>{{AllData.MasterNo}}</td>\n          <td>{{AllData.MasterDate}}</td>\n        </tr>\n        <tr>\n          <td><b>HAWB No.</b></td>\n          <td><b>Date</b></td>\n        </tr>\n        <tr>\n          <td>{{AllData.HouseNo}}</td>\n          <td>{{AllData.HouseDate}}</td>\n\n        </tr>\n\n        <tr>\n          <td><b>BE No.</b></td>\n          <td><b>Date</b></td>\n        </tr>\n        <tr>\n          <td>{{AllData.BENo}}</td>\n          <td>{{AllData.BEDate}}</td>\n\n        </tr>\n      </table>\n\n      <table>\n        <tr>\n          <td><b>Origin</b></td>\n          <td><b>Destination</b></td>\n\n        </tr>\n        <tr>\n          <td> {{AllData.Origin}}</td>\n          <td> {{AllData.Destination}}</td>\n\n        </tr>\n      </table>\n\n\n    </ion-row>\n\n    <ion-row padding class="ShadowBox14">\n      <h5>Job Milestone</h5>\n      <table>\n        <tr style="border-bottom: 1px solid #ddd;" *ngFor="let mileData of gateMileStoneListArr; let i = index;">\n          <td>\n            {{mileData.MileStoneName}}\n          </td>\n\n          <td>\n            {{mileData.ActivityDate}}\n          </td>\n        </tr>\n      </table>\n      <!-- <ion-item *ngFor="let mileData of gateMileStoneListArr; let i = index;">\n        <ion-label>\n          {{mileData.MileStoneName}}\n        </ion-label>\n        <ion-label>\n          {{mileData.MileStoneDate}}\n        </ion-label>\n      </ion-item> -->\n    </ion-row>\n\n  </ion-list>\n</ion-content>\n<ion-footer class="ion-footer">\n\n  <div class="label-white toolbar-background-md" center text-center>\n    © Kale Logistics Solutions Private Limited. {{appBuildConfig.fullYear}} Version {{appBuildConfig.version}}\n  </div>\n</ion-footer>\n'/*ion-inline-end:"D:\MobileApp\corviBL\corviBL\src\pages\job-status\job-status.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_global_global__["a" /* GlobalProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_http_service_http_service__["a" /* HttpServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_util_alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_7__providers_util_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], JobStatusPage);
    return JobStatusPage;
}());

//# sourceMappingURL=job-status.js.map

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortPopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SortPopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SortPopoverPage = /** @class */ (function () {
    function SortPopoverPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    SortPopoverPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SortPopoverPage');
    };
    SortPopoverPage.prototype.dismissModal = function (da) {
        var data = { 'foo': 'bar' };
        this.viewCtrl.dismiss(da);
    };
    SortPopoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-sort-popover',template:/*ion-inline-start:"D:\MobileApp\corviBL\corviBL\src\pages\sort-popover\sort-popover.html"*/'\n<ion-content class="main-view">\n  <div class="overlay" ></div>\n  <div class="modal_content">\n  <ion-list radio-group (ionChange)="dismissModal($event)">\n    <!-- <ion-radio-group > -->\n\n      <!-- <ion-item>\n        <ion-item-header style="text-align: center;">Sort by</ion-item-header>\n      </ion-item> -->\n      <ion-item>\n        <ion-label>Type: Export</ion-label>\n        <ion-radio slot="end" color="primary" value="export"></ion-radio>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Type: Import</ion-label>\n        <ion-radio slot="end" color="primary" value="import"></ion-radio>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Mode: Air</ion-label>\n        <ion-radio slot="end" color="primary" value="air"></ion-radio>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Mode: Ocean</ion-label>\n        <ion-radio slot="end" color="primary" value="ocean"></ion-radio>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Job No.</ion-label>\n        <ion-radio slot="end" color="primary" value="JobNo"></ion-radio>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Date</ion-label>\n        <ion-radio slot="end" color="primary" value="JobDate"></ion-radio>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>AWB No.</ion-label>\n        <ion-radio slot="end" color="primary" value="MasterNo"></ion-radio>\n      </ion-item>\n\n      <ion-item>\n        <ion-label style="text-align: end;" color="primary" (click)="dismissModal()">Cancel</ion-label>\n      </ion-item>\n    <!-- </ion-radio-group> -->\n  </ion-list>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"D:\MobileApp\corviBL\corviBL\src\pages\sort-popover\sort-popover.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ViewController */]])
    ], SortPopoverPage);
    return SortPopoverPage;
}());

//# sourceMappingURL=sort-popover.js.map

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export searchJobList */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchJobsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_http_service_http_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_global__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_util_toast_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__search_job_results_search_job_results__ = __webpack_require__(391);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var searchJobList = /** @class */ (function () {
    function searchJobList() {
    }
    return searchJobList;
}());

var SearchJobsPage = /** @class */ (function () {
    function SearchJobsPage(navCtrl, navParams, globalService, http, toastService, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.globalService = globalService;
        this.http = http;
        this.toastService = toastService;
        this.viewCtrl = viewCtrl;
        this.UserDetails = [];
        this.BranchTbl = [];
        this.branchCode = '0';
        this.fetchedData = [];
        this.responseData = [];
        this.customerName = '';
        this.jobNumber = '';
        this.mawbNumber = '';
        this.hawbNumber = '';
        this.BeSbNo = '';
        // FromDate: string = new Date().toISOString(); //newly commented
        // ToDate: string = new Date().toISOString(); //newly commented
        this.FromDate = ''; //newly uncommented
        this.ToDate = ''; //newly uncommented
        this.responseFormAPI = [];
        this.title = "Search Job(s)";
        this.appBuildConfig = this.globalService.appBuildConfig;
        this.UserDetails = this.globalService.get('userDetails');
        // this.BranchTbl = this.UserDetails[Object.keys(this.UserDetails)[1]]["Table4"];
        this.BranchTbl = JSON.parse(localStorage.getItem('BranchTable'));
        this.fetchedData = this.navParams.get('searchDetails');
        this.searchList = new searchJobList();
    }
    SearchJobsPage.prototype.ngOnInit = function () {
        this.branchCode = this.globalService.globalDefaultBranchCode;
        var currentDate = new Date();
        var day = currentDate.getDate();
        var month = currentDate.getMonth() + 1;
        var year = currentDate.getFullYear();
        this.TodayDate = year + "-" + month + "-" + day;
    };
    SearchJobsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchJobsPage');
    };
    SearchJobsPage.prototype.ionViewDidEnter = function () {
        if (this.fetchedData.length != 0) {
            this.searchList.UserId = localStorage.getItem('userId');
            this.searchList.BranchCode = this.fetchedData.branch;
            this.searchList.JobType = this.fetchedData.jobType;
        }
        else {
        }
        console.log('fetched data: ', this.fetchedData);
    };
    SearchJobsPage.prototype.searchJobs = function () {
        // if (this.fetchedData.mode == '') {
        //   this.toastService.show('Please select mode.', 3000, true, 'top', 'toast-container');
        //   //this.startDate.focus();
        //   return;
        // }
        var _this = this;
        // if (this.fetchedData.service == '') {
        //   this.toastService.show('Please select mode.', 3000, true, 'top', 'toast-container');
        //   //this.startDate.focus();
        //   return;
        // }
        // if (this.fetchedData.service == '') {
        //   this.toastService.show('Please select mode.', 3000, true, 'top', 'toast-container');
        //   //this.startDate.focus();
        //   return;
        // }
        this.searchList.UserId = localStorage.getItem('userId'); //
        this.searchList.BranchCode = this.fetchedData.branch; //
        this.searchList.JobType = this.fetchedData.jobType; //
        this.searchList.ShipmentType = this.fetchedData.shipmentType;
        this.searchList.Mode = this.fetchedData.mode;
        this.searchList.Service = this.fetchedData.service;
        this.searchList.MBLNo = this.mawbNumber; //
        this.searchList.HBLNo = this.hawbNumber; //
        this.searchList.CustomerName = this.customerName; //
        this.searchList.JobNo = this.jobNumber; //
        this.searchList.SBNo = this.BeSbNo; //
        // this.FromDate = moment(this.FromDate).format('MM/DD/YYYY'); //newly commented
        // this.ToDate = moment(this.ToDate).format('MM/DD/YYYY'); //newly commented
        this.searchList.FromDate = this.FromDate;
        // this.searchList.FromDate = '';
        this.searchList.ToDate = this.ToDate;
        // this.searchList.ToDate = '';
        this.http.POST(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* Constants */].Corvi_Services.GetSearchJobList, this.searchList).then(function (response) {
            console.log('check response here: ', response);
            // this.responseData = response;
            if (response != '') {
                console.log('yesssssss');
                // let stageOne = response['Table'];
                if (_this.globalService.isCordovaAvailable()) {
                    _this.responseFormAPI = response;
                    var stageOne = JSON.parse(_this.responseFormAPI)["Table"];
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__search_job_results_search_job_results__["a" /* SearchJobResultsPage */], { jobResults: stageOne });
                    _this.FromDate = ''; //new
                    _this.ToDate = '';
                    // this.flag = true;
                }
                else {
                    var stageOne = response['Table'];
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__search_job_results_search_job_results__["a" /* SearchJobResultsPage */], { jobResults: stageOne });
                    _this.FromDate = '';
                    _this.ToDate = '';
                }
            }
        });
    };
    // export ANDROID_SDK_ROOT=/Users/himeshpatel/Library/Android/sdk/android-sdk-macosx
    SearchJobsPage.prototype.cancelJobSearch = function () {
        this.navCtrl.pop();
    };
    SearchJobsPage.prototype.changed = function (endte) {
        var sdate = this.FromDate.slice(0, 10);
        var stime = this.FromDate.slice(11, 16);
        var sdatTime = sdate + ' ' + stime;
        var edate = endte.slice(0, 10);
        var etime = endte.slice(11, 16);
        var edatTime = edate + ' ' + etime;
        var a = Date.parse(sdate);
        var b = Date.parse(edate);
        var curDate = Date.parse(this.TodayDate);
        if (b < a) {
            this.toastService.show('The job date should be greater or equal to from date.', 3000, true, 'top', 'toast-container');
            this.ToDate = '0';
            return;
        }
        // if (a < curDate) {
        //   this.toastService.show('The job date should be greater or equal to from date.', 3000, true, 'top', 'toast-container')
        //   this.FromDate = '';
        //   return;
        // }
    };
    SearchJobsPage.prototype.getToday = function () {
        return new Date().toISOString().split('T')[0];
    };
    SearchJobsPage.prototype.changedFrom = function (endte) {
        var sdate = this.ToDate.slice(0, 10);
        var stime = this.ToDate.slice(11, 16);
        var sdatTime = sdate + ' ' + stime;
        var edate = endte.slice(0, 10);
        var etime = endte.slice(11, 16);
        var edatTime = edate + ' ' + etime;
        var a = Date.parse(sdate);
        var b = Date.parse(edate);
        var curDate = Date.parse(this.TodayDate);
        if (b > a) {
            this.toastService.show('The job date should be greater or equal to from date.', 3000, true, 'top', 'toast-container');
            this.FromDate = '0';
            return;
        }
        // if (a < curDate) {
        //   this.toastService.show('The job date should be greater or equal to from date.', 3000, true, 'top', 'toast-container')
        //   this.FromDate = '';
        //   return;
        // }
    };
    SearchJobsPage.prototype.dismissModal = function () {
        var data = { 'foo': 'bar' };
        // this.viewCtrl.dismiss(this.globalService.selectedJobType);
        this.viewCtrl.dismiss();
    };
    SearchJobsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
            selector: 'page-search-jobs',template:/*ion-inline-start:"D:\MobileApp\corviBL\corviBL\src\pages\search-jobs\search-jobs.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title center text-center style="margin-right: 70px">\n      {{title}}\n    </ion-title>\n\n    <!-- <ion-icon name=\'close-circle\' (click)=\'dismissModal()\' style=\'float: right;\'></ion-icon> -->\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-row padding class="ShadowBox13" style="margin-top: 10px;">\n    <ion-col col-12>\n      <label>\n        <b>Branch</b>\n      </label>\n    </ion-col>\n\n    <ion-col col-12>\n      <select id="ddlBrach" name="ddlBrach" [(ngModel)]="searchList.BranchCode" col-12 placeholder="">\n        <!-- <option [value]="0" disabled selected>Select</option> -->\n        <option *ngFor="let brData of BranchTbl" [value]="brData.BranchCode">{{brData.branch}}</option>\n      </select>\n    </ion-col>\n\n    <ion-col col-6>\n      <ion-label>\n        <b>Search job(s) from</b>\n      </ion-label>\n    </ion-col>\n    <ion-col style="text-align:end" col-6>\n      <!-- <ion-datetime displayFormat="MM/DD/YYYY" pickerFormat="MM/DD/YYYY" [(ngModel)]="FromDate"></ion-datetime> -->\n      <input col-12 type="date" placeholder="mm-dd-yyyy" [(ngModel)]="FromDate" (ngModelChange)="changedFrom($event)" >\n    </ion-col>\n    <br />\n    <ion-col col-6>\n      <ion-label>\n        <b>To</b>\n      </ion-label>\n    </ion-col>\n    <ion-col style="text-align:end" col-6>\n      <!-- <ion-datetime displayFormat="MM/DD/YYYY" pickerFormat="MM/DD/YYYY" [(ngModel)]="ToDate" (ngModelChange)="changed($event)"></ion-datetime> -->\n      <input col-12 type="date" placeholder="mm-dd-yyyy" [(ngModel)]="ToDate" (ngModelChange)="changed($event)" >\n    </ion-col>\n\n\n    <ion-col col-12>\n      <label>\n        <b>Customer Name</b>\n      </label>\n    </ion-col>\n    <ion-col col-12>\n      <input col-12 type="text" name="customerName" [(ngModel)]="customerName">\n    </ion-col>\n\n    <ion-col col-12>\n      <label>\n        <b>Job No.</b>\n      </label>\n    </ion-col>\n    <ion-col col-12>\n      <input col-12 type="text" name="jobNumber" [(ngModel)]="jobNumber">\n    </ion-col>\n\n    <ion-col col-12>\n      <label>\n        <b>MAWB/MBL No.</b>\n      </label>\n    </ion-col>\n    <ion-col col-12>\n      <input col-12 type="text" name="mawbNumber" [(ngModel)]="mawbNumber">\n    </ion-col>\n\n    <ion-col col-12>\n      <label>\n        <b>HAWB/HBL No.</b>\n      </label>\n    </ion-col>\n    <ion-col col-12>\n      <input col-12 type="text" name="hawbNumber" [(ngModel)]="hawbNumber">\n    </ion-col>\n\n    <ion-col col-12>\n      <label>\n        <b>BE/SB No.</b>\n      </label>\n    </ion-col>\n    <ion-col col-12>\n      <input col-12 type="text" name="BeSbNo" [(ngModel)]="BeSbNo">\n    </ion-col>\n\n  </ion-row>\n\n</ion-content>\n<ion-footer class="ion-footer">\n  <ion-row padding class="">\n    <ion-col col-6>\n      <button ion-button block class="btnRadius btncancel" (click)="cancelJobSearch()">\n        <ion-icon></ion-icon>\n        Cancel\n      </button>\n    </ion-col>\n\n    <ion-col col-6>\n      <button ion-button icon-start block class="btnRadius" (click)="searchJobs()">\n        <ion-icon></ion-icon>\n        Search\n      </button>\n    </ion-col>\n  </ion-row>\n  <!-- <div class="label-white toolbar-background-md" center text-center>\n      © Kale Logistics Solutions Private Limited. {{appBuildConfig.fullYear}} Version {{appBuildConfig.version}}\n    </div> -->\n</ion-footer>\n'/*ion-inline-end:"D:\MobileApp\corviBL\corviBL\src\pages\search-jobs\search-jobs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1__providers_http_service_http_service__["a" /* HttpServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_util_toast_service__["a" /* ToastService */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["t" /* ViewController */]])
    ], SearchJobsPage);
    return SearchJobsPage;
}());

//# sourceMappingURL=search-jobs.js.map

/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchJobResultsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_global__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchJobResultsPage = /** @class */ (function () {
    function SearchJobResultsPage(navCtrl, navParams, globalService, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.globalService = globalService;
        this.viewCtrl = viewCtrl;
        this.fetchedData = [];
        this.selectedJobsArray = [];
        this.title = 'Search Job Results';
        this.fetchedData = this.navParams.get('jobResults');
        if (this.globalService.isCordovaAvailable()) {
            // this.countOfRec = JSON.parse(this.fetchedData).length;
            this.countOfRec = this.fetchedData.length;
        }
        else {
            this.countOfRec = this.fetchedData.length;
        }
        // this.countOfRec = JSON.parse(this.fetchedData)["Table"].length;
        // this.countOfRec =this. fetchedData['Table'].length
        console.log('length of arr ', this.fetchedData.length);
    }
    SearchJobResultsPage.prototype.ionViewDidLoad = function () {
        console.log('fetched data: ', this.fetchedData);
        console.log('ionViewDidLoad SearchJobResultsPage');
    };
    SearchJobResultsPage.prototype.selectedJobs = function (val) {
        var index = this.selectedJobsArray.indexOf(val);
        if (index === -1) {
            // val not found, pushing onto array
            this.selectedJobsArray.push(val);
        }
        else {
            // val is found, removing from array
            this.selectedJobsArray.splice(index, 1);
        }
        // this.selectedJobsArray.push(data);
    };
    SearchJobResultsPage.prototype.confirmJobs = function () {
        this.globalService.selectedJobsArray = this.selectedJobsArray;
        this.navCtrl.remove(this.navCtrl.getActive().index - 1, 2);
        console.log('All selected jobs: ', this.selectedJobsArray);
    };
    SearchJobResultsPage.prototype.dismissModal = function () {
        var data = { 'foo': 'bar' };
        // this.viewCtrl.dismiss(this.globalService.selectedJobType);
        this.viewCtrl.dismiss();
    };
    SearchJobResultsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-search-job-results',template:/*ion-inline-start:"D:\MobileApp\corviBL\corviBL\src\pages\search-job-results\search-job-results.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title center text-center>\n      {{title}}\n    </ion-title>\n\n    <ion-buttons right>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n  <ion-row>\n    <ion-col col-12>\n      <label>Search Result: {{countOfRec}} record found</label>\n    </ion-col>\n  </ion-row>\n  <ion-list class="ShadowBox13">\n    <ion-item *ngFor="let data of fetchedData">\n      <ion-label style="padding: 5px;white-space: normal !important;">\n        <h4>{{data.JobNo}}</h4>\n        <h6>{{data.CustomerName}}</h6>\n\n      </ion-label>\n      <ion-checkbox slot="end" (ionChange)="selectedJobs(data)" class="float-right"></ion-checkbox>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n\n<ion-footer class="ion-footer">\n  <ion-row padding class="">\n    <ion-col col-6>\n      <button ion-button block class="btnRadius btncancel" (click)=\'dismissModal()\'>\n        <ion-icon></ion-icon>\n        Cancel\n      </button>\n    </ion-col>\n\n    <ion-col col-6>\n      <button ion-button icon-start block class="btnRadius" (click)="confirmJobs()">\n        <ion-icon></ion-icon>\n        Confirm\n      </button>\n    </ion-col>\n  </ion-row>\n  <!-- <div class="label-white toolbar-background-md" center text-center>\n      © Kale Logistics Solutions Private Limited. {{appBuildConfig.fullYear}} Version {{appBuildConfig.version}}\n    </div> -->\n</ion-footer>\n'/*ion-inline-end:"D:\MobileApp\corviBL\corviBL\src\pages\search-job-results\search-job-results.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ViewController */]])
    ], SearchJobResultsPage);
    return SearchJobResultsPage;
}());

//# sourceMappingURL=search-job-results.js.map

/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export searchMilestoneList */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchMilestonePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_http_service_http_service__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var searchMilestoneList = /** @class */ (function () {
    function searchMilestoneList() {
    }
    return searchMilestoneList;
}());

var SearchMilestonePage = /** @class */ (function () {
    function SearchMilestonePage(navCtrl, navParams, globalService, viewCtrl, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.globalService = globalService;
        this.viewCtrl = viewCtrl;
        this.http = http;
        this.UserDetails = [];
        this.BranchTbl = [];
        this.ModeTbl = [];
        this.ServiceTBl = [];
        this.ShipmentTbl = [];
        this.modes = [];
        this.services = [];
        this.shipments = [];
        this.fetchedData = [];
        this.responseFormAPI = [];
        this.title = "Search Milestone";
        this.fetchedData = this.navParams.get('searchDetails');
        if (this.fetchedData.length == 0) {
            this.VenType = '1';
        }
        else {
            this.VenType = this.fetchedData.jobType;
        }
        console.log('fetched data: ', this.fetchedData);
        this.appBuildConfig = this.globalService.appBuildConfig;
        this.UserDetails = this.globalService.get('userDetails');
        // this.BranchTbl = this.UserDetails[Object.keys(this.UserDetails)[1]]["Table4"];
        // this.ModeTbl = this.UserDetails[Object.keys(this.UserDetails)[1]]["Table3"];
        // this.ServiceTBl = this.UserDetails[Object.keys(this.UserDetails)[1]]["Table3"];
        // this.ShipmentTbl = this.UserDetails[Object.keys(this.UserDetails)[1]]["Table3"];
        //  this.modes = this.ModeTbl.filter(a => a.Identifier == "TransportMode");
        //  this.services = this.ModeTbl.filter(a => a.Identifier == "Service");
        //  this.shipments = this.ModeTbl.filter(a => a.Identifier == "ShipmentType");
        this.BranchTbl = JSON.parse(localStorage.getItem('BranchTable'));
        this.modes = JSON.parse(localStorage.getItem('TransportMode'));
        this.services = JSON.parse(localStorage.getItem('ServiceType'));
        // this.shipments = JSON.parse(localStorage.getItem('ShipmentType'));
        if (this.fetchedData.mode == 1) {
            this.shipments = JSON.parse(localStorage.getItem('ShipmentTypeAir'));
            console.log('shipments: ', this.shipments);
        }
        if (this.fetchedData.mode == 2) {
            this.shipments = JSON.parse(localStorage.getItem('ShipmentType'));
            console.log('shipments: ', this.shipments);
        }
        if (this.fetchedData.mode == 3) {
            this.shipments = JSON.parse(localStorage.getItem('ShipmentTypeRail'));
            console.log('shipments: ', this.shipments);
        }
        if (this.fetchedData.mode == 4) {
            this.shipments = JSON.parse(localStorage.getItem('ShipmentTypeRoad'));
            console.log('shipments: ', this.shipments);
        }
        this.searchList = new searchMilestoneList();
    }
    SearchMilestonePage.prototype.ngOnInit = function () {
        this.branchCode = this.globalService.globalDefaultBranchCode;
    };
    SearchMilestonePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchMilestonePage');
    };
    SearchMilestonePage.prototype.ionViewDidEnter = function () {
        if (this.fetchedData.length != 0) {
            this.branchCode = this.fetchedData.branch;
            this.shipmentCode = this.fetchedData.shipmentType;
            this.transportMode = this.fetchedData.mode;
            this.serviceCode = this.fetchedData.service;
            this.VenType = this.fetchedData.jobType;
            //  this.VenType = "1";
            this.getSearchMilestoneData();
        }
        else {
            this.VenType = '1';
        }
    };
    SearchMilestonePage.prototype.dismissModal = function () {
        var data = { 'foo': 'bar' };
        // this.viewCtrl.dismiss(this.globalService.selectedJobType);
        this.viewCtrl.dismiss();
    };
    SearchMilestonePage.prototype.getSearchMilestoneData = function () {
        var _this = this;
        debugger;
        this.mileStoneDetails = [];
        // console.log('get userid: ', localStorage.get(''))
        this.searchList.UserId = localStorage.getItem('userId');
        this.searchList.mode = this.transportMode;
        this.searchList.service = this.serviceCode;
        this.searchList.shipmentType = this.shipmentCode;
        this.searchList.jobType = this.VenType;
        console.log('check one ');
        this.http.POST(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* Constants */].Corvi_Services.GetSearchMilestoneList, this.searchList).then(function (response) {
            console.log('check search milestone data: ', response);
            if (_this.globalService.isCordovaAvailable()) {
                debugger;
                _this.responseFormAPI = response;
                _this.mileStoneDetails = JSON.parse(_this.responseFormAPI)["Table"];
                // this.flag = true;
                _this.countOfRec = JSON.parse(_this.responseFormAPI)["Table"].length;
            }
            else {
                _this.mileStoneDetails = response['Table'];
                _this.countOfRec = response['Table'].length;
            }
            console.log('check search milestone list data: ', _this.mileStoneDetails);
            // this.mileStoneDetails = response;
        });
        console.log('all the data: ', this.searchList.UserId, '+', this.serviceCode, '+', this.VenType, '+', this.shipmentCode, '+', this.transportMode);
    };
    SearchMilestonePage.prototype.onMilestoneSelect = function (selectedData) {
        this.globalService.selectedMilestone = selectedData;
        // this.globalService.selectedJobType = this.VenType; //new
        console.log('********', this.globalService.selectedMilestone.DocumentName);
        // this.navCtrl.push(UpdateJobMilestonePage, {milestone: selecetedData})
        this.navCtrl.remove(this.navCtrl.getActive().index - 0, 1);
    };
    SearchMilestonePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'page-search-milestone',template:/*ion-inline-start:"D:\MobileApp\corviBL\corviBL\src\pages\search-milestone\search-milestone.html"*/'<!--\n  Generated template for the SearchMilestonePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <!-- <button right ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button> -->\n    <ion-title center text-center>\n      {{title}}\n    </ion-title>\n\n    <ion-buttons left>\n      <button ion-button icon-only (click)="dismissModal();">\n        <ion-icon name="ios-arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <!-- <ion-buttons right>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons> -->\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <!-- <ion-list> -->\n  <ion-row padding class="ShadowBox13">\n    <ion-col col-12>\n      <b>Job Type</b>\n    </ion-col>\n\n    <ion-col col-6>\n      <input [(ngModel)]="VenType" type="radio" class="stv-radio-button" name="jobType" value="1" id="1" disabled />\n      <label for="1">Freight Forwarding</label>\n    </ion-col>\n    <ion-col col-6>\n      <input [(ngModel)]="VenType" type="radio" class="stv-radio-button" name="jobType" value="2" id="2" disabled />\n      <label for="2">Customs</label>\n    </ion-col>\n\n    <ion-col col-12>\n      <label>\n        Branch\n      </label>\n    </ion-col>\n\n    <ion-col col-12>\n\n      <select id="ddlBrach" name="ddlBrach" [(ngModel)]="branchCode" col-12 disabled>\n        <!-- <option [value]="0" disabled selected>Select</option> -->\n        <option *ngFor="let brData of BranchTbl" [value]="brData.BranchCode">{{brData.branch}}</option>\n\n      </select>\n\n    </ion-col>\n\n    <ion-col col-12>\n      <label>\n        Mode\n      </label>\n    </ion-col>\n\n    <ion-col col-12>\n      <select id="ddlMode" name="ddlMode" [(ngModel)]="transportMode" col-12 disabled>\n        <option [value]="0" disabled selected>Select</option>\n        <option *ngFor="let modeData of modes" [value]="modeData.KeyValue">{{modeData.Description}}</option>\n      </select>\n    </ion-col>\n\n\n    <ion-col col-12>\n      <label>\n        Service\n      </label>\n    </ion-col>\n\n    <ion-col col-12>\n      <select id="ddlService" name="ddlService" [(ngModel)]="serviceCode" col-12 disabled>\n        <option [value]="0" disabled selected>Select</option>\n        <option *ngFor="let serviceData of services" [value]="serviceData.KeyValue">{{serviceData.Description}}\n        </option>\n      </select>\n    </ion-col>\n\n\n    <ion-col col-12>\n      <label>\n        Shipment Type\n      </label>\n    </ion-col>\n\n    <ion-col col-12>\n      <select id="ddlShipment" name="ddlShipment" [(ngModel)]="shipmentCode" col-12 disabled>\n        <option [value]="0" disabled selected>Select</option>\n        <option *ngFor="let shipData of shipments" [value]="shipData.KeyValue">{{shipData.Description}}</option>\n      </select>\n    </ion-col>\n\n\n  </ion-row>\n\n  <ion-row>\n    <ion-col col-12>\n      <label>Search Result: {{countOfRec}} record found</label>\n    </ion-col>\n  </ion-row>\n\n  <!-- <ion-row padding>\n    <ion-col col-6>\n      <button ion-button round outline class=" btncancel" (click)="dismissModal();">\n        <ion-icon></ion-icon>\n        Cancel\n      </button>\n    </ion-col>\n\n    <ion-col col-6>\n      <button type="button" ion-button icon-start block class="btnRadius" (click)="getSearchMilestoneData()">\n        <ion-icon></ion-icon>\n        Search\n      </button>\n    </ion-col>\n  </ion-row> -->\n\n  <ion-row padding class="ShadowBox13">\n    <ion-col col-12>\n      <table>\n        <tr *ngFor="let data of mileStoneDetails">\n          <td>\n            <label>\n              {{data.DocumentName}}\n            </label>\n          </td>\n          <!-- <td><button (click)="onMilestoneSelect(data)">Select</button></td> -->\n          <td style="text-align: right;"><a href="#" (click)="onMilestoneSelect(data);">Select</a></td>\n\n        </tr>\n      </table>\n    </ion-col>\n  </ion-row>\n\n  <!-- </ion-list> -->\n</ion-content>\n\n<ion-footer class="ion-footer">\n\n  <!-- <div class="label-white toolbar-background-md" center text-center>\n      © Kale Logistics Solutions Private Limited. {{appBuildConfig.fullYear}} Version {{appBuildConfig.version}}\n    </div> -->\n</ion-footer>\n'/*ion-inline-end:"D:\MobileApp\corviBL\corviBL\src\pages\search-milestone\search-milestone.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["t" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_http_service_http_service__["a" /* HttpServiceProvider */]])
    ], SearchMilestonePage);
    return SearchMilestonePage;
}());

//# sourceMappingURL=search-milestone.js.map

/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomeuserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_global__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__customer_dashboard_customer_dashboard__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the WellcomeuserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WelcomeuserPage = /** @class */ (function () {
    // public prev(){
    //   this.globalService.routePage(DashboardPage);
    // }
    function WelcomeuserPage(navCtrl, navParams, globalService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.globalService = globalService;
        this.UserDetails = [];
        this.BranchTbl = [];
        this.title = "Welcome, CORVI User";
        this.BranchTbl = this.globalService.get('ProfileType');
        // this.BranchTbl = this.UserDetails[Object.keys(this.UserDetails)[1]]["Table"];
    }
    WelcomeuserPage.prototype.next = function () {
        this.slides.slideNext();
    };
    WelcomeuserPage.prototype.skip = function () {
        if (this.BranchTbl.__zone_symbol__value == '2') {
            this.globalService.setRootPage(__WEBPACK_IMPORTED_MODULE_3__customer_dashboard_customer_dashboard__["a" /* CustomerDashboardPage */]);
        }
        else {
            this.globalService.setRootPage(__WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard__["a" /* DashboardPage */]);
        }
    };
    WelcomeuserPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WellcomeuserPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('mySlider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* Slides */])
    ], WelcomeuserPage.prototype, "slides", void 0);
    WelcomeuserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-welcomeuser',template:/*ion-inline-start:"D:\MobileApp\corviBL\corviBL\src\pages\welcomeuser\welcomeuser.html"*/'<!--\n  Generated template for the WellcomeuserPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title id="Dashboard" center text-center>\n      {{title}}\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-slides #slides pager="true">\n    <ion-slide class="ShadowBox13">\n      <img src="assets/img/Group 3524.png">\n      <label>CORVI Freight Management System\n        Lorem ipsum dolor sit amet, consetetur\n        sadipscing elitr, sed diam nonumy eirmod\n        tempor invidunt ut labore et dolore magna\n        aliquyam erat, sed diam voluptua. At vero eos\n        et accusam et justo duo.</label>\n    </ion-slide>\n\n    <ion-slide class="ShadowBox13">\n      <img src="assets/img/Group 3525.png">\n      <!-- <label>\n        Features:\n        New Sales Activity\n        New Sales Lead\n        Upload Milestone</label> -->\n      <ion-row>\n        <ion-col col-12>\n          <h3 style="float: left;">Features:</h3>\n        </ion-col>\n        <ion-col col-2>\n        </ion-col>\n        <ion-col col-8>\n          <ion-list>\n            <ion-item>\n              <ion-icon name="checkmark" style="color:green"></ion-icon>&nbsp;&nbsp;&nbsp;New Sales Activity\n            </ion-item>\n            <ion-item>\n              <ion-icon name="checkmark" style="color:green"></ion-icon>&nbsp;&nbsp;&nbsp;New Sales Lead\n            </ion-item>\n            <ion-item>\n              <ion-icon name="checkmark" style="color:green"></ion-icon>&nbsp;&nbsp;&nbsp;Upload Milestone\n            </ion-item>\n          </ion-list>\n        </ion-col>\n      </ion-row>\n    </ion-slide>\n  </ion-slides>\n\n</ion-content>\n<ion-footer class="ion-footer">\n  <ion-toolbar>\n    <ion-row>\n      <ion-col col-1></ion-col>\n      <ion-col col-4>\n        <!-- <button text-left (click)="slides.slidePrev()"> Prev </button> -->\n        <a style="font-size: 2rem;" (click)="skip()">Skip</a>\n      </ion-col>\n      <ion-col col-1></ion-col>\n      <ion-col style="font-size: 2rem;" col-4> <a style="float: right;" (click)="slides.slideNext()"> Next </a>\n      </ion-col>\n      <ion-col col-1></ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"D:\MobileApp\corviBL\corviBL\src\pages\welcomeuser\welcomeuser.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */]])
    ], WelcomeuserPage);
    return WelcomeuserPage;
}());

//# sourceMappingURL=welcomeuser.js.map

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerDashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_global__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__find_sales_activity_find_sales_activity__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__new_sales_activity_new_sales_activity__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shipment_invoice_shipment_invoice__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shipment_status_shipment_status__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__update_job_milestone_update_job_milestone__ = __webpack_require__(143);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the CustomerDashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CustomerDashboardPage = /** @class */ (function () {
    function CustomerDashboardPage(navCtrl, navParams, menu, globalService, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.globalService = globalService;
        this.modalCtrl = modalCtrl;
        this.title = "Home";
    }
    CustomerDashboardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CustomerDashboardPage');
    };
    CustomerDashboardPage.prototype.goToFindSalesActivityPage = function () {
        // this.globalService.setRootPage(FindSalesActivityPage);
        this.openModal();
    };
    CustomerDashboardPage.prototype.goToShipmentInvoice = function () {
        this.globalService.valueForLeadCutomer = '';
        this.globalService.setRootPage(__WEBPACK_IMPORTED_MODULE_5__shipment_invoice_shipment_invoice__["a" /* ShipmentInvoicePage */]);
    };
    CustomerDashboardPage.prototype.openModal = function () {
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__find_sales_activity_find_sales_activity__["a" /* FindSalesActivityPage */], { searchDetails: '0' });
        profileModal.onDidDismiss(function (data) {
            console.log(data);
        });
        profileModal.present();
    };
    CustomerDashboardPage.prototype.goToShipmentStatus = function () {
        this.globalService.setRootPage(__WEBPACK_IMPORTED_MODULE_6__shipment_status_shipment_status__["a" /* ShipmentStatusPage */]);
        // this.globalService.setRootPage(searchCustomerJob);
    };
    CustomerDashboardPage.prototype.goToUpdateJobMilestonePage = function () {
        this.globalService.setRootPage(__WEBPACK_IMPORTED_MODULE_7__update_job_milestone_update_job_milestone__["a" /* UpdateJobMilestonePage */]);
    };
    CustomerDashboardPage.prototype.goToConfigureParam = function () {
        this.globalService.setRootPage(__WEBPACK_IMPORTED_MODULE_4__new_sales_activity_new_sales_activity__["a" /* NewSalesActivityPage */]);
        // this.navCtrl.push(NewSalesActivityPage);
    };
    CustomerDashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-customer-dashboard',template:/*ion-inline-start:"D:\MobileApp\corviBL\corviBL\src\pages\customer-dashboard\customer-dashboard.html"*/'<!--\n  Generated template for the DashboardPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <Corvi-header [title]="title"></Corvi-header> -->\n<ion-header>\n  <ion-navbar color="primary">\n    <button right ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title id="Dashboard" center text-center>\n      {{title}}\n    </ion-title>\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding scroll>\n  <img src="assets/img/Corvi_BL_Logo_360x70.png">\n  <ion-row style="margin-top:10px ;" class="text-center">\n    <ion-col col-4 class="text-center box" (click)=\'goToShipmentStatus();\'>\n      <div class="inner ShadowBox13">\n        <img src="assets/img/Group 3529.png" class="center">\n        <span>Shipment Status</span>\n      </div>\n    </ion-col>\n\n    <ion-col col-4 class="text-center box" (click)=\'goToShipmentInvoice();\'>\n      <div class="inner ShadowBox13">\n        <img src="assets/img/Group 3530.png" class="center">\n        <span>Shipment Invoice</span>\n      </div>\n    </ion-col>\n    <ion-col col-4 class="text-center box" (click)="goToConfigureParam();">\n      <div class="inner ShadowBox13">\n        <img src="assets/img/Group 3527.png" class="center">\n        <span>Configure Parameter</span>\n      </div>\n    </ion-col>\n\n\n\n    <!-- <ion-col col-4 class="text-center box" (click)="temp();">\n      <div class="inner ShadowBox13">\n        <img src="assets/img/Group 3527.png" class="center">\n        <span>Configure Parameter</span>\n      </div>\n    </ion-col> -->\n\n\n  </ion-row>\n\n\n\n</ion-content>\n\n<!-- <ion-footer class="ion-footer">\n  <ion-toolbar>\n    <ion-title class="label-white">Additional Services</ion-title>\n    <ion-row no-padding style="margin-top:10px ;">\n      <ion-col col-4 class="text-center  box">\n        <div class="inner footer-col-color">\n          <img src="assets/img/smartphone_moreservices.png" class="center-footer-img">\n          More Services\n        </div>\n\n      </ion-col>\n      <ion-col col-4 class="text-center box">\n        <div class="inner footer-col-color">\n          <img src="assets/img/phone-call_contactus-1.png" class="center-footer-img">\n          Contact Us\n        </div>\n\n      </ion-col>\n      <ion-col col-4 class="text-center  box">\n        <div class="inner footer-col-color">\n          <img src="assets/img/monitor_support.png" class="center-footer-img">\n          20 x 7 Support\n        </div>\n\n      </ion-col>\n    </ion-row>\n    <div class="label-white" center text-center>\n      © Kale Logistics Solutions Private Limited. {{appBuildConfig.fullYear}} Version {{appBuildConfig.version}}\n    </div>\n  </ion-toolbar>\n\n\n</ion-footer> -->\n\n<ion-footer>\n\n  <div class="toolbar-background-md">\n    <div class="addOnsText" style="margin-top:15px;">\n      <h4>Additional Services</h4>\n    </div>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n            <div class="container">\n                <img src="../assets/img/moreservices.png">\n                <h6>More Services</h6>\n              </div>\n        </ion-col>\n        <ion-col>\n            <div class="container">\n                <img src="../assets/img/contactus.png">\n                <h6>Contact Us</h6>\n              </div>\n        </ion-col>\n        <ion-col>\n            <div class="container">\n                <img src="../assets/img/monitor_support.png">\n                <h6>24 x 7 Support</h6>\n              </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n\n  </div>\n\n    <!-- <ion-row>\n      <ion-col col-2></ion-col>\n      <ion-col col-4>\n          <div class="inner footer-col-color">\n              <img src="assets/img/kale_power.png" class="center-footer-img">\n            </div>\n\n      </ion-col>\n      <ion-col col-2></ion-col>\n    </ion-row>\n      <ion-row>\n        <ion-col col-6>\n      <h6 style="text-align: center;" class = "title">Terms and conditions</h6>\n    </ion-col>\n\n    <ion-col col-6>\n        <h6 style="text-align: center;" class = "title">Privacy Policy</h6>\n      </ion-col>\n    </ion-row> -->\n\n</ion-footer>\n\n'/*ion-inline-end:"D:\MobileApp\corviBL\corviBL\src\pages\customer-dashboard\customer-dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */]])
    ], CustomerDashboardPage);
    return CustomerDashboardPage;
}());

//# sourceMappingURL=customer-dashboard.js.map

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Pdfviewer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_pdf_viewer__ = __webpack_require__(399);
/**
 * @author Sachin Semlety
 * @email sachin.semlety@kalelogistics.in
 * @create date 2018-08-14 10:37:07
 * @modify date 2018-08-14 10:37:07
 * @desc [description]
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Pdfviewer = /** @class */ (function () {
    function Pdfviewer(navParams, toastCtrl) {
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.zoom_to = 1;
        // Just to animate the fab
        this.fabGone = false;
        console.log('Hello PdfviewerComponent Component');
        this.pdfSrc = this.navParams.get('pdfUrl');
        this.title = "PDF Viewer";
    }
    Pdfviewer.prototype.ionViewDidLoad = function () {
        this.initHammer();
    };
    Pdfviewer.prototype.zoom_in = function () {
        this.zoom_to = this.zoom_to + 0.25;
    };
    Pdfviewer.prototype.zoom_out = function () {
        if (this.zoom_to > 1) {
            this.zoom_to = this.zoom_to - 0.25;
        }
    };
    Pdfviewer.prototype.ionViewWillEnter = function () {
        this.fabGone = false;
    };
    Pdfviewer.prototype.ionViewWillLeave = function () {
        this.fabGone = true;
    };
    Pdfviewer.prototype.onError = function (error) {
        // do anything
        this.showToast('Something went wrong');
    };
    Pdfviewer.prototype.onProgress = function (progressData) {
        // do anything with progress data. For example progress indicator
        console.log('progressData : ', progressData);
    };
    Pdfviewer.prototype.search = function (ev) {
        var stringToSearch = ev.target.value;
        if (stringToSearch && stringToSearch.trim() !== '') {
            this.pdfComponent.pdfFindController.executeCommand('find', {
                caseSensitive: false, findPrevious: undefined, highlightAll: true, phraseSearch: true, query: stringToSearch
            });
        }
    };
    Pdfviewer.prototype.initHammer = function () {
        var _this = this;
        var container = document.getElementById('pdf-file-container');
        var hammer = new Hammer(container, {
            domEvents: true
        });
        hammer.get('pinch').set({
            enable: true
        });
        hammer.on('pinchend', function (event) {
            // get the current zoom value
            var zoom = _this.zoom_to;
            // get the scaled amount
            var scale = zoom * event.scale / 10;
            // if the user is zooming in
            if (event.additionalEvent === 'pinchout') {
                zoom += scale;
            }
            else {
                // if zooming out
                zoom -= scale * 10;
            }
            // if zoom is too small or too big set them to max values
            if (zoom < 1) {
                zoom = 1;
            }
            else if (zoom > 2) {
                zoom = 2;
            }
            // set the current zoom
            _this.zoom_to = zoom;
        });
    };
    // due to circular dependencies error i have written this function again instead of calling from globalService
    Pdfviewer.prototype.showToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            //console.log('Dismissed toast');
        });
        toast.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ng2_pdf_viewer__["a" /* PdfViewerComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ng2_pdf_viewer__["a" /* PdfViewerComponent */])
    ], Pdfviewer.prototype, "pdfComponent", void 0);
    Pdfviewer = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'pdfviewer',template:/*ion-inline-start:"D:\MobileApp\corviBL\corviBL\src\components\pdfviewer\pdfviewer.html"*/'<Corvi-header [title]="title"></Corvi-header>\n\n\n\n<ion-content class="marginTop57">\n\n  <ion-searchbar placeholder="Search..." showCancelButton color="danger" (ionInput)="search($event)"></ion-searchbar>\n\n  <div id="pdf-file-container">\n\n    <pdf-viewer [src]="pdfSrc" [original-size]="false" style="display: block;" (on-progress)="onProgress($event)" (error)="onError($event)"\n\n      [zoom]="zoom_to"></pdf-viewer>\n\n  </div>\n\n</ion-content>\n\n\n\n<ion-fab right bottom #fab1>\n\n  <button class="pop-in" ion-fab mini color="primary" [ngClass]="{\'pop-out\': fabGone}" (click)="zoom_in()">\n\n    <ion-icon name="add"></ion-icon>\n\n  </button>\n\n  <!-- <ion-label>Zoom In</ion-label> -->\n\n\n\n</ion-fab>\n\n\n\n<ion-fab left bottom #fab2>\n\n  <button class="pop-in" ion-fab mini color="primary" [ngClass]="{\'pop-out\': fabGone}" (click)="zoom_out()">\n\n    <ion-icon name="remove"></ion-icon>\n\n  </button>\n\n  <!-- <ion-label>Zoom Out</ion-label> -->\n\n\n\n</ion-fab>'/*ion-inline-end:"D:\MobileApp\corviBL\corviBL\src\components\pdfviewer\pdfviewer.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ToastController */]])
    ], Pdfviewer);
    return Pdfviewer;
}());

//# sourceMappingURL=pdfviewer.js.map

/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuotationDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_global__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * @author Sachin Semlety
 * @email sachin.semlety@kalelogistics.in
 * @create date 2018-08-10 02:36:14
 * @modify date 2018-08-10 02:36:14
 * @desc [description]
*/



var QuotationDetailPage = /** @class */ (function () {
    function QuotationDetailPage(navParams, globalService, platform) {
        this.navParams = navParams;
        this.globalService = globalService;
        this.platform = platform;
        this.title = "Quotation Details";
        this.q_details = this.navParams.get('quot_details');
    }
    QuotationDetailPage.prototype.viewPDF = function () {
        var pdfSrc = 'https://devdactic.com/html/5-simple-hacks-LBT.pdf';
        this.globalService.viewPDF(pdfSrc);
    };
    QuotationDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-quotation-detail',template:/*ion-inline-start:"D:\MobileApp\corviBL\corviBL\src\pages\quotation\quotation-detail\quotation-detail.html"*/'<Corvi-header [title]="title"></Corvi-header>\n\n\n\n<ion-content class="marginTop57">\n\n  <!-- <ion-item>\n\n    <ion-label color="primary">Customer</ion-label>\n\n    <ion-input type="text" name="Customer" [(ngModel)]="q_details[0].Customer" [disabled]="true" text-right></ion-input>\n\n  </ion-item> -->\n\n  <ion-item>\n\n    <ion-label color="primary">Quotation No</ion-label>\n\n    <ion-input type="text" name="Quotation_No" [(ngModel)]="q_details[0].QuotationNo" [disabled]="true" text-right></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label color="primary">Quotation Amount</ion-label>\n\n    <ion-input type="text" name="Quotation_amount" [(ngModel)]="q_details[0].QuotationAmount == \'\' ? \'--\' :  q_details[0].QuotationAmount"\n\n      [disabled]="true" text-right></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label color="primary">Enquiry Reference</ion-label>\n\n    <ion-input type="text" name="EnquiryReference" [(ngModel)]="q_details[0].EnquiryReference == \'\' ? \'--\' :  q_details[0].EnquiryReference"\n\n      [disabled]="true" text-right></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label color="primary">Mode</ion-label>\n\n    <ion-input type="text" name="Mode" [(ngModel)]="q_details[0].Mode" [disabled]="true" text-right></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label color="primary">Quotation Date</ion-label>\n\n    <ion-input type="text" name="Quotation_Date" [(ngModel)]="q_details[0].QuotationDate" [disabled]="true" text-right></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label color="primary">Quotation ID</ion-label>\n\n    <ion-input type="text" name="Quotation_Id" [(ngModel)]="q_details[0].QuotationId" [disabled]="true" text-right></ion-input>\n\n  </ion-item>\n\n\n\n\n\n  <ion-item>\n\n    <ion-label color="primary">Service</ion-label>\n\n    <ion-input type="text" name="Service" [(ngModel)]="q_details[0].Service" [disabled]="true" text-right></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label color="primary">Status</ion-label>\n\n    <ion-input type="text" name="Status" [(ngModel)]="q_details[0].Status" [disabled]="true" text-right></ion-input>\n\n  </ion-item>\n\n\n\n</ion-content>\n\n\n\n<!-- <ion-fab right bottom #fab1>\n\n  <button class="pop-in" ion-fab mini color="primary" [ngClass]="{\'pop-out\': fabGone}" (click)="viewPDF()">\n\n    <ion-icon name="document"></ion-icon>\n\n  </button>\n\n  <ion-label>View PDF</ion-label>\n\n\n\n</ion-fab> -->'/*ion-inline-end:"D:\MobileApp\corviBL\corviBL\src\pages\quotation\quotation-detail\quotation-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */]])
    ], QuotationDetailPage);
    return QuotationDetailPage;
}());

//# sourceMappingURL=quotation-detail.js.map

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpenJobsPageDetails; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_global__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * @author Sachin Semlety
 * @email sachin.semlety@kalelogistics.in
 * @create date 2018-08-14 03:26:19
 * @modify date 2018-08-14 03:26:19
 * @desc [description]
*/



var OpenJobsPageDetails = /** @class */ (function () {
    function OpenJobsPageDetails(navCtrl, navParams, globalService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.globalService = globalService;
        this.title = "Open Jobs Details";
        this.open_jobs_details = this.navParams.get('open_Jobs');
    }
    OpenJobsPageDetails = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-open-jobs-details',template:/*ion-inline-start:"D:\MobileApp\corviBL\corviBL\src\pages\open-jobs\detail\open-jobs-details.html"*/'<Corvi-header [title]="title"></Corvi-header>\n\n<ion-content class="marginTop57">\n\n    <ion-item>\n\n        <ion-label color="primary">Job No</ion-label>\n\n        <ion-input type="text" name="Job_No" [(ngModel)]="open_jobs_details[0].JobNo" [disabled]="true" text-right></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label color="primary">Job Date</ion-label>\n\n        <ion-input type="text" name="Job_Date" [(ngModel)]="open_jobs_details[0].JobDate" [disabled]="true" text-right></ion-input>\n\n    </ion-item>\n\n    <!-- <ion-item>\n\n        <ion-label color="primary">WO Detail No</ion-label>\n\n        <ion-input type="text" name="WO_DetailNo" [(ngModel)]="open_jobs_details[0].WODetailNo" [disabled]="true" text-right></ion-input>\n\n    </ion-item> -->\n\n    <ion-item>\n\n        <ion-label color="primary">Mode</ion-label>\n\n        <ion-input type="text" name="Mode" [(ngModel)]="open_jobs_details[0].Mode" [disabled]="true" text-right></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label color="primary">Service</ion-label>\n\n        <ion-input type="text" name="Service" [(ngModel)]="open_jobs_details[0].Service" [disabled]="true" text-right></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label color="primary">Customer</ion-label>\n\n        <ion-input type="text" name="Customer" [(ngModel)]="open_jobs_details[0].Customer" [disabled]="true" text-right></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label color="primary">Origin</ion-label>\n\n        <ion-input type="text" name="Origin" [(ngModel)]="open_jobs_details[0].Origin" [disabled]="true" text-right></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label color="primary">Destination</ion-label>\n\n        <ion-input type="text" name="Destination" [(ngModel)]="open_jobs_details[0].Destination" [disabled]="true"\n\n            text-right></ion-input>\n\n    </ion-item>\n\n</ion-content>'/*ion-inline-end:"D:\MobileApp\corviBL\corviBL\src\pages\open-jobs\detail\open-jobs-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */]])
    ], OpenJobsPageDetails);
    return OpenJobsPageDetails;
}());

//# sourceMappingURL=open-jobs-details.js.map

/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClosedJobsPageDetails; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_global__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_util_alert_service__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * @author Sachin Semlety
 * @email sachin.semlety@kalelogistics.in
 * @create date 2018-08-14 03:26:19
 * @modify date 2018-08-14 03:26:19
 * @desc [description]
*/




var ClosedJobsPageDetails = /** @class */ (function () {
    function ClosedJobsPageDetails(navParams, globalService, platform, alertService) {
        this.navParams = navParams;
        this.globalService = globalService;
        this.platform = platform;
        this.alertService = alertService;
        this.title = "Closed Job Details";
        this.closed_jobs_details = this.navParams.get('closed_Jobs');
    }
    ClosedJobsPageDetails = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-closed-jobs-details',template:/*ion-inline-start:"D:\MobileApp\corviBL\corviBL\src\pages\closed-jobs\detail\closed-jobs-details.html"*/'<Corvi-header [title]="title"></Corvi-header>\n\n<ion-content class="marginTop57">\n\n    <ion-item>\n\n        <ion-label color="primary">Job No</ion-label>\n\n        <ion-input type="text" name="Job_No" [(ngModel)]="closed_jobs_details[0].JobNo" [disabled]="true" text-right></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label color="primary">Job Date</ion-label>\n\n        <ion-input type="text" name="Job_Date" [(ngModel)]="closed_jobs_details[0].JobDate" [disabled]="true"\n\n            text-right></ion-input>\n\n    </ion-item>\n\n    <!-- <ion-item>\n\n        <ion-label color="primary">WO Detail No</ion-label>\n\n        <ion-input type="text" name="WO_DetailNo" [(ngModel)]="closed_jobs_details[0].WODetailNo" [disabled]="true" text-right></ion-input>\n\n    </ion-item> -->\n\n    <ion-item>\n\n        <ion-label color="primary">Mode</ion-label>\n\n        <ion-input type="text" name="Mode" [(ngModel)]="closed_jobs_details[0].Mode" [disabled]="true" text-right></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label color="primary">Service</ion-label>\n\n        <ion-input type="text" name="Service" [(ngModel)]="closed_jobs_details[0].Service" [disabled]="true" text-right></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label color="primary">Customer</ion-label>\n\n        <ion-input type="text" name="Customer" [(ngModel)]="closed_jobs_details[0].Customer" [disabled]="true"\n\n            text-right></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label color="primary">Origin</ion-label>\n\n        <ion-input type="text" name="Origin" [(ngModel)]="closed_jobs_details[0].Origin" [disabled]="true" text-right></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label color="primary">Destination</ion-label>\n\n        <ion-input type="text" name="Destination" [(ngModel)]="closed_jobs_details[0].Destination" [disabled]="true"\n\n            text-right></ion-input>\n\n    </ion-item>\n\n</ion-content>\n\n\n\n<!-- <ion-fab right bottom #fab1>\n\n    <button class="pop-in" ion-fab mini color="primary" [ngClass]="{\'pop-out\': fabGone}">\n\n        <ion-icon name="document"></ion-icon>\n\n    </button>\n\n    <ion-label>View PDF</ion-label>\n\n\n\n</ion-fab> -->\n\n<!-- \n\n<ion-fab right bottom #fab2>\n\n    <button class="pop-in" ion-fab mini color="primary" [ngClass]="{\'pop-out\': fabGone}" (click)="followJob()">\n\n        <ion-icon name="help"></ion-icon>\n\n    </button>\n\n    <ion-label>Follow Job</ion-label>\n\n\n\n</ion-fab> -->'/*ion-inline-end:"D:\MobileApp\corviBL\corviBL\src\pages\closed-jobs\detail\closed-jobs-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__providers_util_alert_service__["a" /* AlertService */]])
    ], ClosedJobsPageDetails);
    return ClosedJobsPageDetails;
}());

//# sourceMappingURL=closed-jobs-details.js.map

/***/ }),

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoicesDetails; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_global__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_util_alert_service__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * @author Sachin Semlety
 * @email sachin.semlety@kalelogistics.in
 * @create date 2018-08-14 03:26:19
 * @modify date 2018-08-14 03:26:19
 * @desc [description]
*/




// import { Constants } from '../../../constants';
var InvoicesDetails = /** @class */ (function () {
    function InvoicesDetails(navParams, globalService, platform, alertService) {
        this.navParams = navParams;
        this.globalService = globalService;
        this.platform = platform;
        this.alertService = alertService;
        this.title = "Invoices Details";
        this.invoice_details = this.navParams.get('Invoices');
    }
    InvoicesDetails.prototype.viewPDF = function () {
        var _this = this;
        // let url = Constants.CORVI_PDF_URL + this.invoice_details[0].PDFPath;
        this.globalService.get('PDFURL').
            then(function (PDFURL) { return (PDFURL != null && PDFURL != "") ? _this.openPDF(PDFURL) : _this.globalService.showToast("something went wrong opening pdf"); }), function (error) { return console.error(error); }, this.globalService.showToast("something went wrong opening pdf");
    };
    InvoicesDetails.prototype.openPDF = function (pdfUrl) {
        var url = pdfUrl + this.invoice_details[0].PDFPath;
        this.invoice_details[0].hasOwnProperty('PDFPath') && this.invoice_details[0].PDFPath != '' && this.globalService.viewPDF(url);
    };
    InvoicesDetails = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-invoices-details',template:/*ion-inline-start:"D:\MobileApp\corviBL\corviBL\src\pages\invoices\detail\invoices-details.html"*/'<Corvi-header [title]="title"></Corvi-header>\n\n<ion-content class="marginTop57">\n\n\n\n\n\n    <ion-item>\n\n        <ion-label color="primary">Bill No</ion-label>\n\n        <ion-input type="text" name="BillingNo" [(ngModel)]="invoice_details[0].BillingNo" [disabled]="true" text-right></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label color="primary">Bill Date</ion-label>\n\n        <ion-input type="text" name="InvoiceDate" [(ngModel)]="invoice_details[0].InvoiceDate" [disabled]="true"\n\n            text-right></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label color="primary">Job No</ion-label>\n\n        <ion-input type="text" name="JobNo" [(ngModel)]="invoice_details[0].JobNo" [disabled]="true" text-right></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label color="primary">Amount</ion-label>\n\n        <ion-input type="text" name="Amount" [(ngModel)]="invoice_details[0].Amount" [disabled]="true" text-right></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n        <ion-label color="primary">Customer</ion-label>\n\n        <ion-input type="text" name="Customer" [(ngModel)]="invoice_details[0].Customer" [disabled]="true" text-right\n\n            style="font-size: 1.2rem;"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label color="primary">Branch</ion-label>\n\n        <ion-input type="text" name="Branch" [(ngModel)]="invoice_details[0].Branch" [disabled]="true" text-right></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label color="primary">Mode</ion-label>\n\n        <ion-input type="text" name="Mode" [(ngModel)]="invoice_details[0].Mode" [disabled]="true" text-right></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label color="primary">Service</ion-label>\n\n        <ion-input type="text" name="Service" [(ngModel)]="invoice_details[0].Service" [disabled]="true" text-right></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label color="primary">Reference No</ion-label>\n\n        <ion-input type="text" name="ReferenceNo" [(ngModel)]="invoice_details[0].ReferenceNo == \'\' ? \'--\' :invoice_details[0].ReferenceNo"\n\n            [disabled]="true" text-right></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label color="primary">Reference Date</ion-label>\n\n        <ion-input type="text" name="ReferenceDate" [(ngModel)]="invoice_details[0].ReferenceDate" [disabled]="true"\n\n            text-right></ion-input>\n\n    </ion-item>\n\n    <br>\n\n    <br>\n\n    <br>\n\n    <br>\n\n    <br>\n\n    <br>\n\n    <br>\n\n    <br>\n\n    <br>\n\n</ion-content>\n\n\n\n<ion-fab right bottom #fab1>\n\n    <button class="pop-in" ion-fab mini color="primary" [ngClass]="{\'pop-out\': fabGone}" (click)="viewPDF()">\n\n        <ion-icon name="document"></ion-icon>\n\n    </button>\n\n    <ion-label>View PDF</ion-label>\n\n\n\n</ion-fab>\n\n\n\n<!-- <ion-fab right bottom #fab2>\n\n    <button class="pop-in" ion-fab mini color="primary" [ngClass]="{\'pop-out\': fabGone}" (click)="followJob()">\n\n        <ion-icon name="help"></ion-icon>\n\n    </button>\n\n    <ion-label>Follow Job</ion-label>\n\n\n\n</ion-fab> -->'/*ion-inline-end:"D:\MobileApp\corviBL\corviBL\src\pages\invoices\detail\invoices-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__providers_util_alert_service__["a" /* AlertService */]])
    ], InvoicesDetails);
    return InvoicesDetails;
}());

//# sourceMappingURL=invoices-details.js.map

/***/ }),

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoreComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_login_login__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * @author Sachin Semlety
 * @email sachin.semlety@kalelogistics.in
 * @create date 2018-08-10 11:03:16
 * @modify date 2018-08-10 11:03:16
 * @desc [description]
*/



var MoreComponent = /** @class */ (function () {
    function MoreComponent(viewCtrl, nav, alertCtrl, app, events, platform) {
        this.viewCtrl = viewCtrl;
        this.nav = nav;
        this.alertCtrl = alertCtrl;
        this.app = app;
        this.events = events;
        this.platform = platform;
    }
    MoreComponent.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    MoreComponent.prototype.logOut = function () {
        this.confirmlogOut();
    };
    MoreComponent.prototype.notifications = function () {
    };
    /*Logout PopupModal*/
    MoreComponent.prototype.confirmlogOut = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Logout',
            message: 'Do you want to Logout???',
            buttons: [{
                    text: "Confirm",
                    handler: function () { _this.handleLogOut(); }
                }, {
                    text: "Cancel",
                    role: 'cancel'
                }]
        });
        alert.present();
    };
    MoreComponent.prototype.handleLogOut = function () {
        this.events.publish('app:loggedOut', true);
        this.clearLocalStorage();
    };
    MoreComponent.prototype.clearLocalStorage = function () {
        window.localStorage.removeItem('isLogged');
        window.localStorage.removeItem('login_resp');
        window.localStorage.removeItem('userDetails');
        this.routePage(__WEBPACK_IMPORTED_MODULE_2__pages_login_login__["a" /* LoginPage */]);
    };
    MoreComponent.prototype.routePage = function (page) {
        this.close();
        this.app.getActiveNavs()[0].push(page);
    };
    MoreComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'more-options',template:/*ion-inline-start:"D:\MobileApp\corviBL\corviBL\src\components\more\more.html"*/'<ion-list class="no-margin" style="margin:inherit !important">\n\n\n\n  <!-- <button ion-item class="text-1x" tappable (click)="notifications()">\n\n    <ion-icon ios="ios-notifications" md="md-notifications"></ion-icon>&nbsp;\n\n    <span ion-text color="primary">Notifications</span>\n\n  </button> -->\n\n  <button ion-item class="text-1x" tappable (click)="logOut()">\n\n    <ion-icon ios="ios-power" md="md-power"></ion-icon>&nbsp;\n\n    <span ion-text color="primary">Logout</span>\n\n\n\n  </button>\n\n</ion-list>'/*ion-inline-end:"D:\MobileApp\corviBL\corviBL\src\components\more\more.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */]])
    ], MoreComponent);
    return MoreComponent;
}());

//# sourceMappingURL=more.js.map

/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClosedJobsPageModule", function() { return ClosedJobsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__closed_jobs__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detail_closed_jobs_details__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pipes_pipes_module__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_util_alert_service__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * @author Sachin Semlety
 * @email sachin.semlety@kalelogistics.in
 * @create date 2018-08-17 02:09:51
 * @modify date 2018-08-17 02:09:51
 * @desc [description]
*/







var ClosedJobsPageModule = /** @class */ (function () {
    function ClosedJobsPageModule() {
    }
    ClosedJobsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__closed_jobs__["a" /* ClosedJobsPage */],
                __WEBPACK_IMPORTED_MODULE_3__detail_closed_jobs_details__["a" /* ClosedJobsPageDetails */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_5__pipes_pipes_module__["a" /* PipesModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__closed_jobs__["a" /* ClosedJobsPage */]),
            ], entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__detail_closed_jobs_details__["a" /* ClosedJobsPageDetails */]
            ], providers: [__WEBPACK_IMPORTED_MODULE_6__providers_util_alert_service__["a" /* AlertService */]]
        })
    ], ClosedJobsPageModule);
    return ClosedJobsPageModule;
}());

//# sourceMappingURL=closed-jobs.module.js.map

/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigureParametersPageModule", function() { return ConfigureParametersPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__configure_parameters__ = __webpack_require__(379);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ConfigureParametersPageModule = /** @class */ (function () {
    function ConfigureParametersPageModule() {
    }
    ConfigureParametersPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__configure_parameters__["a" /* ConfigureParametersPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__configure_parameters__["a" /* ConfigureParametersPage */]),
            ],
        })
    ], ConfigureParametersPageModule);
    return ConfigureParametersPageModule;
}());

//# sourceMappingURL=configure-parameters.module.js.map

/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerDashboardPageModule", function() { return CustomerDashboardPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__customer_dashboard__ = __webpack_require__(394);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CustomerDashboardPageModule = /** @class */ (function () {
    function CustomerDashboardPageModule() {
    }
    CustomerDashboardPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__customer_dashboard__["a" /* CustomerDashboardPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__customer_dashboard__["a" /* CustomerDashboardPage */]),
            ],
        })
    ], CustomerDashboardPageModule);
    return CustomerDashboardPageModule;
}());

//# sourceMappingURL=customer-dashboard.module.js.map

/***/ }),

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerJobSearchPageModule", function() { return CustomerJobSearchPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__customer_job_search__ = __webpack_require__(387);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CustomerJobSearchPageModule = /** @class */ (function () {
    function CustomerJobSearchPageModule() {
    }
    CustomerJobSearchPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__customer_job_search__["a" /* CustomerJobSearchPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__customer_job_search__["a" /* CustomerJobSearchPage */]),
            ],
        })
    ], CustomerJobSearchPageModule);
    return CustomerJobSearchPageModule;
}());

//# sourceMappingURL=customer-job-search.module.js.map

/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerSettingsPageModule", function() { return CustomerSettingsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__customer_settings__ = __webpack_require__(380);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CustomerSettingsPageModule = /** @class */ (function () {
    function CustomerSettingsPageModule() {
    }
    CustomerSettingsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__customer_settings__["a" /* CustomerSettingsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__customer_settings__["a" /* CustomerSettingsPage */]),
            ],
        })
    ], CustomerSettingsPageModule);
    return CustomerSettingsPageModule;
}());

//# sourceMappingURL=customer-settings.module.js.map

/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnquiryPageModule", function() { return EnquiryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__enquiry__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__detail_enquiry_cargo_detail__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__detail_enquiry_package_detail__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__detail_enquiry_contact_detail__ = __webpack_require__(377);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * @author Sachin Semlety
 * @email sachin.semlety@kalelogistics.in
 * @create date 2019-08-05 17:34:00
 * @modify date 2019-08-05 17:34:00
 * @desc [description]
 */







var EnquiryPageModule = /** @class */ (function () {
    function EnquiryPageModule() {
    }
    EnquiryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__enquiry__["a" /* EnquiryPage */],
                __WEBPACK_IMPORTED_MODULE_4__detail_enquiry_cargo_detail__["a" /* EnquiryCargoDetailPage */],
                __WEBPACK_IMPORTED_MODULE_5__detail_enquiry_package_detail__["a" /* EnquiryPackageDetailPage */],
                __WEBPACK_IMPORTED_MODULE_6__detail_enquiry_contact_detail__["a" /* EnquiryContactDetailPage */]
            ],
            imports: [__WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__enquiry__["a" /* EnquiryPage */]),
            ], entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__detail_enquiry_cargo_detail__["a" /* EnquiryCargoDetailPage */],
                __WEBPACK_IMPORTED_MODULE_5__detail_enquiry_package_detail__["a" /* EnquiryPackageDetailPage */],
                __WEBPACK_IMPORTED_MODULE_6__detail_enquiry_contact_detail__["a" /* EnquiryContactDetailPage */]
            ]
        })
    ], EnquiryPageModule);
    return EnquiryPageModule;
}());

//# sourceMappingURL=enquiry.module.js.map

/***/ }),

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindLocationPageModule", function() { return FindLocationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__find_location__ = __webpack_require__(382);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FindLocationPageModule = /** @class */ (function () {
    function FindLocationPageModule() {
    }
    FindLocationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__find_location__["a" /* FindLocationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__find_location__["a" /* FindLocationPage */]),
            ],
        })
    ], FindLocationPageModule);
    return FindLocationPageModule;
}());

//# sourceMappingURL=find-location.module.js.map

/***/ }),

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindSalesActivityPageModule", function() { return FindSalesActivityPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__find_sales_activity__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FindSalesActivityPageModule = /** @class */ (function () {
    function FindSalesActivityPageModule() {
    }
    FindSalesActivityPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__find_sales_activity__["a" /* FindSalesActivityPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__find_sales_activity__["a" /* FindSalesActivityPage */]),
            ],
        })
    ], FindSalesActivityPageModule);
    return FindSalesActivityPageModule;
}());

//# sourceMappingURL=find-sales-activity.module.js.map

/***/ }),

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoicesPageModule", function() { return InvoicesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__invoices__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__detail_invoices_details__ = __webpack_require__(411);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * @author Sachin Semlety
 * @email sachin.semlety@kalelogistics.in
 * @create date 2018-08-17 02:10:01
 * @modify date 2018-08-17 02:10:01
 * @desc [description]
*/






var InvoicesPageModule = /** @class */ (function () {
    function InvoicesPageModule() {
    }
    InvoicesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__invoices__["a" /* InvoicesPage */],
                __WEBPACK_IMPORTED_MODULE_5__detail_invoices_details__["a" /* InvoicesDetails */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__["a" /* PipesModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__invoices__["a" /* InvoicesPage */]),
            ], entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__detail_invoices_details__["a" /* InvoicesDetails */]
            ]
        })
    ], InvoicesPageModule);
    return InvoicesPageModule;
}());

//# sourceMappingURL=invoices.module.js.map

/***/ }),

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobStatusPageModule", function() { return JobStatusPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__job_status__ = __webpack_require__(388);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var JobStatusPageModule = /** @class */ (function () {
    function JobStatusPageModule() {
    }
    JobStatusPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__job_status__["a" /* JobStatusPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__job_status__["a" /* JobStatusPage */]),
            ],
        })
    ], JobStatusPageModule);
    return JobStatusPageModule;
}());

//# sourceMappingURL=job-status.module.js.map

/***/ }),

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewSalesActivityPageModule", function() { return NewSalesActivityPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__new_sales_activity__ = __webpack_require__(73);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NewSalesActivityPageModule = /** @class */ (function () {
    function NewSalesActivityPageModule() {
    }
    NewSalesActivityPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__new_sales_activity__["a" /* NewSalesActivityPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__new_sales_activity__["a" /* NewSalesActivityPage */]),
            ],
        })
    ], NewSalesActivityPageModule);
    return NewSalesActivityPageModule;
}());

//# sourceMappingURL=new-sales-activity.module.js.map

/***/ }),

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewSalesLeadPageModule", function() { return NewSalesLeadPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__new_sales_lead__ = __webpack_require__(381);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NewSalesLeadPageModule = /** @class */ (function () {
    function NewSalesLeadPageModule() {
    }
    NewSalesLeadPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__new_sales_lead__["a" /* NewSalesLeadPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__new_sales_lead__["a" /* NewSalesLeadPage */]),
            ],
        })
    ], NewSalesLeadPageModule);
    return NewSalesLeadPageModule;
}());

//# sourceMappingURL=new-sales-lead.module.js.map

/***/ }),

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverPageModule", function() { return PopoverPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__popover__ = __webpack_require__(141);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PopoverPageModule = /** @class */ (function () {
    function PopoverPageModule() {
    }
    PopoverPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__popover__["a" /* PopoverPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__popover__["a" /* PopoverPage */]),
            ],
        })
    ], PopoverPageModule);
    return PopoverPageModule;
}());

//# sourceMappingURL=popover.module.js.map

/***/ }),

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotationPageModule", function() { return QuotationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quotation__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__quotation_detail_quotation_detail__ = __webpack_require__(408);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * @author Sachin Semlety
 * @email sachin.semlety@kalelogistics.in
 * @create date 2018-08-10 02:36:23
 * @modify date 2018-08-10 02:36:23
 * @desc [description]
*/






var QuotationPageModule = /** @class */ (function () {
    function QuotationPageModule() {
    }
    QuotationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__quotation__["a" /* QuotationPage */],
                __WEBPACK_IMPORTED_MODULE_5__quotation_detail_quotation_detail__["a" /* QuotationDetailPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__quotation__["a" /* QuotationPage */])
            ], entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__quotation_detail_quotation_detail__["a" /* QuotationDetailPage */]
            ]
        })
    ], QuotationPageModule);
    return QuotationPageModule;
}());

//# sourceMappingURL=quotation.module.js.map

/***/ }),

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportingUserActivityPageModule", function() { return ReportingUserActivityPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reporting_user_activity__ = __webpack_require__(383);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ReportingUserActivityPageModule = /** @class */ (function () {
    function ReportingUserActivityPageModule() {
    }
    ReportingUserActivityPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__reporting_user_activity__["a" /* ReportingUserActivityPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__reporting_user_activity__["a" /* ReportingUserActivityPage */]),
            ],
        })
    ], ReportingUserActivityPageModule);
    return ReportingUserActivityPageModule;
}());

//# sourceMappingURL=reporting-user-activity.module.js.map

/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordPageModule", function() { return ResetPasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reset_password__ = __webpack_require__(378);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ResetPasswordPageModule = /** @class */ (function () {
    function ResetPasswordPageModule() {
    }
    ResetPasswordPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__reset_password__["a" /* ResetPasswordPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__reset_password__["a" /* ResetPasswordPage */]),
            ],
        })
    ], ResetPasswordPageModule);
    return ResetPasswordPageModule;
}());

//# sourceMappingURL=reset-password.module.js.map

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchInvoiceResultsPageModule", function() { return SearchInvoiceResultsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_invoice_results__ = __webpack_require__(386);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SearchInvoiceResultsPageModule = /** @class */ (function () {
    function SearchInvoiceResultsPageModule() {
    }
    SearchInvoiceResultsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__search_invoice_results__["a" /* SearchInvoiceResultsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__search_invoice_results__["a" /* SearchInvoiceResultsPage */]),
            ],
        })
    ], SearchInvoiceResultsPageModule);
    return SearchInvoiceResultsPageModule;
}());

//# sourceMappingURL=search-invoice-results.module.js.map

/***/ }),

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchInvoicePageModule", function() { return SearchInvoicePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_invoice__ = __webpack_require__(385);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SearchInvoicePageModule = /** @class */ (function () {
    function SearchInvoicePageModule() {
    }
    SearchInvoicePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__search_invoice__["a" /* SearchInvoicePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__search_invoice__["a" /* SearchInvoicePage */]),
            ],
        })
    ], SearchInvoicePageModule);
    return SearchInvoicePageModule;
}());

//# sourceMappingURL=search-invoice.module.js.map

/***/ }),

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchJobResultsPageModule", function() { return SearchJobResultsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_job_results__ = __webpack_require__(391);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SearchJobResultsPageModule = /** @class */ (function () {
    function SearchJobResultsPageModule() {
    }
    SearchJobResultsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__search_job_results__["a" /* SearchJobResultsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__search_job_results__["a" /* SearchJobResultsPage */]),
            ],
        })
    ], SearchJobResultsPageModule);
    return SearchJobResultsPageModule;
}());

//# sourceMappingURL=search-job-results.module.js.map

/***/ }),

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchJobsPageModule", function() { return SearchJobsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_jobs__ = __webpack_require__(390);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SearchJobsPageModule = /** @class */ (function () {
    function SearchJobsPageModule() {
    }
    SearchJobsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__search_jobs__["a" /* SearchJobsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__search_jobs__["a" /* SearchJobsPage */]),
            ],
        })
    ], SearchJobsPageModule);
    return SearchJobsPageModule;
}());

//# sourceMappingURL=search-jobs.module.js.map

/***/ }),

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchMilestonePageModule", function() { return SearchMilestonePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_milestone__ = __webpack_require__(392);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SearchMilestonePageModule = /** @class */ (function () {
    function SearchMilestonePageModule() {
    }
    SearchMilestonePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__search_milestone__["a" /* SearchMilestonePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__search_milestone__["a" /* SearchMilestonePage */]),
            ],
        })
    ], SearchMilestonePageModule);
    return SearchMilestonePageModule;
}());

//# sourceMappingURL=search-milestone.module.js.map

/***/ }),

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPortAirportPageModule", function() { return SearchPortAirportPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_port_airport__ = __webpack_require__(142);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SearchPortAirportPageModule = /** @class */ (function () {
    function SearchPortAirportPageModule() {
    }
    SearchPortAirportPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__search_port_airport__["a" /* SearchPortAirportPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__search_port_airport__["a" /* SearchPortAirportPage */]),
            ],
        })
    ], SearchPortAirportPageModule);
    return SearchPortAirportPageModule;
}());

//# sourceMappingURL=search-port-airport.module.js.map

/***/ }),

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchSalesActivityPageModule", function() { return SearchSalesActivityPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_sales_activity__ = __webpack_require__(384);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SearchSalesActivityPageModule = /** @class */ (function () {
    function SearchSalesActivityPageModule() {
    }
    SearchSalesActivityPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__search_sales_activity__["a" /* SearchSalesActivityPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__search_sales_activity__["a" /* SearchSalesActivityPage */]),
            ],
        })
    ], SearchSalesActivityPageModule);
    return SearchSalesActivityPageModule;
}());

//# sourceMappingURL=search-sales-activity.module.js.map

/***/ }),

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShipmentInvoicePageModule", function() { return ShipmentInvoicePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pipes_pipes_module__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shipment_invoice__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ShipmentInvoicePageModule = /** @class */ (function () {
    function ShipmentInvoicePageModule() {
    }
    ShipmentInvoicePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__shipment_invoice__["a" /* ShipmentInvoicePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__shipment_invoice__["a" /* ShipmentInvoicePage */]),
                __WEBPACK_IMPORTED_MODULE_2__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], ShipmentInvoicePageModule);
    return ShipmentInvoicePageModule;
}());

//# sourceMappingURL=shipment-invoice.module.js.map

/***/ }),

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShipmentStatusPageModule", function() { return ShipmentStatusPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pipes_pipes_module__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shipment_status__ = __webpack_require__(74);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ShipmentStatusPageModule = /** @class */ (function () {
    function ShipmentStatusPageModule() {
    }
    ShipmentStatusPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__shipment_status__["a" /* ShipmentStatusPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__shipment_status__["a" /* ShipmentStatusPage */]),
                __WEBPACK_IMPORTED_MODULE_2__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], ShipmentStatusPageModule);
    return ShipmentStatusPageModule;
}());

//# sourceMappingURL=shipment-status.module.js.map

/***/ }),

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortPopoverPageModule", function() { return SortPopoverPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sort_popover__ = __webpack_require__(389);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SortPopoverPageModule = /** @class */ (function () {
    function SortPopoverPageModule() {
    }
    SortPopoverPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sort_popover__["a" /* SortPopoverPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sort_popover__["a" /* SortPopoverPage */]),
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicModule */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], SortPopoverPageModule);
    return SortPopoverPageModule;
}());

//# sourceMappingURL=sort-popover.module.js.map

/***/ }),

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs__ = __webpack_require__(440);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TabsPageModule = /** @class */ (function () {
    function TabsPageModule() {
    }
    TabsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* TabsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* TabsPage */]),
            ],
        })
    ], TabsPageModule);
    return TabsPageModule;
}());

//# sourceMappingURL=tabs.module.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_http_service_http_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_util_alert_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_util_toast_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__enquiry_enquiry__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__reset_password_reset_password__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__dashboard_dashboard__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__welcomeuser_welcomeuser__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_baseUrlGenerator_baseurlgenerator__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * @author Sachin Semlety
 * @email sachin.semlety@kalelogistics.in
 * @create date 2018-08-10 11:03:45
 * @modify date 2018-08-10 11:03:45
 * @desc [description]
*/








// import { BaseURLProvider } from "../../providers/baseUrlGenerator/baseurlgenerator";







var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());

var LoginPage = /** @class */ (function () {
    function LoginPage(nav, menu, toastCtrl, globalService, http, alertService, toastService, events, platform, baseUrlProvider, modalCtrl, 
        // public baseURLProvider: BaseURLProvider,
        fb) {
        // var now = new Date();
        // var utcString = now.toISOString().substring(0, 19);
        // var year = now.getFullYear();
        // var month = now.getMonth() + 1;
        // var day = now.getDate();
        // var hour = now.getHours();
        // var minute = now.getMinutes();
        // var second = now.getSeconds();
        // var localDatetime = year + "-" +
        //   (month < 10 ? "0" + month.toString() : month) + "-" +
        //   (day < 10 ? "0" + day.toString() : day) + "T" +
        //   (hour < 10 ? "0" + hour.toString() : hour) + ":" +
        //   (minute < 10 ? "0" + minute.toString() : minute) +
        //   utcString.substring(16, 19);
        this.nav = nav;
        this.menu = menu;
        this.toastCtrl = toastCtrl;
        this.globalService = globalService;
        this.http = http;
        this.alertService = alertService;
        this.toastService = toastService;
        this.events = events;
        this.platform = platform;
        this.baseUrlProvider = baseUrlProvider;
        this.modalCtrl = modalCtrl;
        this.fb = fb;
        this.showCustIdCode = true;
        this.showPass = false;
        this.type = "password";
        this.custIdCode = 'TES';
        this.modesTwo = [];
        this.profileType = '';
        //   alert(localDatetime)
        this.menu.swipeEnable(false);
        this.menu.close();
        this.user = new User();
        // this.authForm = fb.group({
        //   'username' : [null, Validators.compose([Validators.required,Validators.minLength(3)])],
        //   'password' : [null, Validators.compose([Validators.required,Validators.minLength(3)])],
        //   'customerCode' : [null, Validators.compose([Validators.required,Validators.minLength(3)])],
        // });
    }
    //On page Load
    LoginPage.prototype.ionViewDidEnter = function () {
        this.RegisterNowButton();
        this.getUserDetails();
    };
    // go to register page
    LoginPage.prototype.register = function () {
        this.globalService.routePage(__WEBPACK_IMPORTED_MODULE_2__register_register__["a" /* RegisterPage */]);
    };
    LoginPage.prototype.showPassword = function () {
        this.showPass = !this.showPass;
        if (this.showPass) {
            this.type = "text";
        }
        else {
            this.type = "password";
        }
    };
    // login and go to home page
    LoginPage.prototype.logIn = function () {
        // this.globalService.remove('isLogged');
        // this.globalService.remove('login_resp');
        // this.globalService.remove('userDetails');
        var _this = this;
        this.globalService.remove('ActivityStatus');
        this.globalService.remove('SalesLeadStatus');
        this.globalService.remove('ActivityPriority');
        this.globalService.remove('bvalue');
        this.globalService.remove('ProfileType');
        this.globalService.remove('branchCode');
        this.globalService.remove('TransportMode');
        this.globalService.remove('CommunicationType');
        this.globalService.remove('reportingUSer');
        this.globalService.remove('BranchTable');
        this.globalService.remove('Activity');
        this.globalService.remove('ServiceType');
        this.globalService.remove('ShipmentType');
        this.globalService.remove('jobType');
        this.globalService.remove('TypeOfIndustry');
        this.globalService.remove('branchCode');
        this.globalService.remove('flagJobSearch');
        this.globalService.remove('customerJobSearch');
        this.globalService.remove('filterMilestone');
        try {
            // this.platform.ready().then(() => {
            var companyCode = this.user.IdentityCode.slice(0, 3);
            console.log('check CI code: ', companyCode);
            this.baseUrlProvider.setBaseURL(companyCode).then(function (msg) {
                console.log('check msg from login()', msg);
                // if (msg != null && msg != '') {
                // console.log('response to check 1');
                _this.http.POST(__WEBPACK_IMPORTED_MODULE_5__constants__["a" /* Constants */].Corvi_Services.Login, _this.user).then(function (response) {
                    console.log('response to check login method: ', response);
                    // this.globalService.store('custIdCode', this.user.custIdCode);
                    _this.user_Rememebered();
                    _this.globalService.store('login_resp', response);
                    (response.hasOwnProperty('access_token')) ? _this.fetchUserDetails() : _this.globalService.showToast('Something went wrong');
                }, function (err) {
                    console.log('error Login ', err);
                    console.log('response to check service link: ', __WEBPACK_IMPORTED_MODULE_5__constants__["a" /* Constants */].Corvi_Services.Login);
                    _this.LoginInvalid(err);
                });
                // }
                // else {
                //   this.globalService.showAlert('Invalid Customer Identity Code')
                // }
            }); // this.baseUrlProvider ends
            // }); //platform end
        }
        catch (msg) {
            this.globalService.showAlert('Enter valid Customer Identity code');
        }
    };
    LoginPage.prototype.forgotPass = function () {
        var _this = this;
        this.alertService.forgetPassword().then(function (data) {
            data && _this.sendPassword(data);
            // isSend && this.toastService.show('Email was sended successfully please check your email', 3000, true, 'top', 'dark-trans');
        });
    };
    LoginPage.prototype.forgotPwd = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_10__reset_password_reset_password__["a" /* ResetPasswordPage */]);
    };
    LoginPage.prototype.signUp = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__register_register__["a" /* RegisterPage */]);
    };
    LoginPage.prototype.openSupport = function () {
        window.open('http://support.kalelogistics.in/', '_system');
    };
    LoginPage.prototype.openContactModal = function () {
        // let contactModal = this.modalCtrl.create(ContactUsPage);
        // contactModal.present();
        window.open('https://www.kalelogistics.com/contact-us/', '_system');
    };
    LoginPage.prototype.user_Rememebered = function () {
        if (this.isRemembered) {
            this.globalService.store('userName', this.user.UserId);
            this.globalService.store('password', this.user.Password);
            this.globalService.store('CustIdCode', this.user.IdentityCode);
            this.globalService.store('isRemembered', "true");
        }
        else {
            this.globalService.store('userName', this.user.UserId);
            this.globalService.store('password', this.user.Password);
            this.globalService.store('CustIdCode', this.user.IdentityCode);
            this.globalService.store('isRemembered', "");
        }
    };
    // check input Valid
    // isInputValid(): boolean {
    //   if (this.user.Password != undefined && this.user.Username != undefined && this.user.CustIdCode != undefined && this.user.Password.trim() !== '' && this.user.Username.trim() !== '' && this.user.CustIdCode.trim() !== '' && this.user.CustIdCode.length > 2)
    //     return false;
    //   else
    //     return true;
    // }
    LoginPage.prototype.getUserDetails = function () {
        var _this = this;
        this.globalService.get('isRemembered')
            .then(function (isRemembered) { return isRemembered == '' ? _this.setUsernamePwd(false) : _this.setUsernamePwd(isRemembered); }, function (error) { return console.error(error); });
        this.globalService.get('custIdCode')
            .then(function (custIdCode) {
            // custIdCode == '' ? this.user.CustIdCode = "" : this.user.CustIdCode = custIdCode;
            custIdCode == '' ? _this.showCustIdCode = true : _this.showCustIdCode = false;
        }),
            function (error) { return console.error(error); };
    };
    LoginPage.prototype.setUsernamePwd = function (isRemembered) {
        var _this = this;
        if (isRemembered) {
            this.isRemembered = isRemembered;
            this.globalService.get('userName')
                .then(function (userId) { return _this.user.UserId = userId; }, function (error) { return console.error(error); });
            this.globalService.get('password')
                .then(function (pwd) { return _this.user.Password = pwd; }, function (error) { return console.error(error); });
            this.globalService.get('CustIdCode')
                .then(function (IdentityCode) { return _this.user.IdentityCode = IdentityCode; }, function (error) { return console.error(error); });
        }
        else {
            this.isRemembered = false;
        }
    };
    LoginPage.prototype.LoginInvalid = function (err) {
        if (this.globalService.isCordovaAvailable()) {
            var error = JSON.parse(err.error);
            if (error.hasOwnProperty('error') && err.status == 400 && error.error == 'invalid_grant') {
                this.user.Password = '';
                this.globalService.showAlert(error.error_description);
            }
        }
        else {
            var error = this.globalService.handleJSON(err._body);
            if (error.hasOwnProperty('error') && err.status == 400 && error.error == 'invalid_grant') {
                this.user.Password = '';
                this.globalService.showAlert(error.error_description);
            }
        }
    };
    LoginPage.prototype.fetchUserDetails = function () {
        var _this = this;
        this.globalService.get('userName')
            .then(function (UUID) { return _this.setDetails(UUID); }, function (error) { return console.error(error); });
    };
    LoginPage.prototype.setDetailsone = function (UUID) {
        var _this = this;
        debugger;
        this.user.UserId = UUID;
        this.http.POST(__WEBPACK_IMPORTED_MODULE_5__constants__["a" /* Constants */].Corvi_Services.UserDetails, this.user).then(function (userDetailsResp) {
            // this.globalService.store('userDetails', userDetailsResp); //old
            // this.stageOne = userDetailsResp['Table'][0]; // old
            if (_this.globalService.isCordovaAvailable()) {
                _this.stageOne = JSON.parse(userDetailsResp)['Table'][0];
                _this.globalService.store('userDetails', JSON.parse(userDetailsResp)); //old
            }
            else {
                _this.stageOne = userDetailsResp['Table'][0];
                _this.globalService.store('userDetails', userDetailsResp); //old
            }
            console.log('check userdetails', userDetailsResp);
            console.log('check userdetails2', _this.stageOne.UserId);
            localStorage.setItem('userId', _this.stageOne.UserId);
            localStorage.setItem('profileType', _this.stageOne.ProfileType);
            localStorage.setItem('reportingTo', _this.stageOne.ReportingTo);
            console.log('what profile: ', localStorage.getItem('profileType'));
            console.log('Is Reporting to: ', localStorage.getItem('reportingTo'));
            _this.profileType = localStorage.getItem('profileType');
            console.log('checking from local', localStorage.getItem('userId'));
            _this.globalService.publishEventwithData('app:userDetails', userDetailsResp);
            _this.globalService.publishEventwithData('login:sessionExpired', 5000000);
            // below is new for dynamic side menu
            _this.events.publish('user:created', _this.profileType, Date.now());
            _this.globalService.setRootPage(__WEBPACK_IMPORTED_MODULE_13__welcomeuser_welcomeuser__["a" /* WelcomeuserPage */]);
        }, function (err) {
            console.log('error Login ', err);
        });
    };
    LoginPage.prototype.setDetails = function (UUID) {
        var _this = this;
        this.user.UserId = UUID;
        this.http.POST(__WEBPACK_IMPORTED_MODULE_5__constants__["a" /* Constants */].Corvi_Services.UserDetails, this.user).then(function (userDetailsResp) {
            var parsed = JSON.stringify(userDetailsResp);
            var stageOne;
            var Activity = [];
            var ActivityPriority = [];
            var CommunicationType = [];
            var ActivityStatus = [];
            var BranchTable = [];
            var SalesLeadStatus = [];
            var TypeOfIndustry = [];
            var TypeOfIndustry = [];
            var reportingUSer = [];
            var dataT;
            //hemesh
            var TransportMode = [];
            var ShipmentType = [];
            var ShipmentTypeAir = [];
            var ShipmentTypeRail = [];
            var ShipmentTypeRoad = [];
            var ServiceType = [];
            var TypeOfCustomer = [];
            var MenuItems = [];
            if (_this.globalService.isCordovaAvailable()) {
                dataT = JSON.parse(userDetailsResp);
                console.log('I am from cordova');
                _this.globalService.store('userDetails', dataT);
                stageOne = dataT['Table'][0];
                _this.globalService.store('ProfileType', JSON.parse(userDetailsResp)["Table"][0]["ProfileType"]);
                _this.globalService.store('ReportingTo', JSON.parse(userDetailsResp)["Table"][0]["ReportingTo"]);
                Activity = JSON.parse(userDetailsResp)["Table3"].filter(function (t) { return t.Identifier == 'Activity'; });
                ActivityPriority = JSON.parse(userDetailsResp)["Table3"].filter(function (t) { return t.Identifier == 'ActivityPriority'; });
                CommunicationType = JSON.parse(userDetailsResp)["Table3"].filter(function (t) { return t.Identifier == 'CommunicationType'; });
                ActivityStatus = JSON.parse(userDetailsResp)["Table3"].filter(function (t) { return t.Identifier == 'ActivityStatus'; });
                BranchTable = JSON.parse(userDetailsResp)["Table4"];
                //himesh on 07/09
                if (typeof (JSON.parse(userDetailsResp)["Table6"][0]) != 'undefined') {
                    _this.globalService.defaultMode = JSON.parse(userDetailsResp)["Table6"][0]["Mode"];
                    _this.globalService.defaultService = JSON.parse(userDetailsResp)["Table6"][0]["Service"];
                    _this.globalService.defaultJobType = JSON.parse(userDetailsResp)["Table6"][0]["JobType"];
                    _this.globalService.defaultNoofRecords = JSON.parse(userDetailsResp)["Table6"][0]["NoofRecordsPrListing"];
                }
                //himesh on 08/09
                _this.globalService.menuItems = JSON.parse(userDetailsResp)["Table2"];
                // added on 09/07 to check role action
                for (var _i = 0, _a = _this.globalService.menuItems; _i < _a.length; _i++) {
                    var p = _a[_i];
                    if (p.MenuName == 'Sales Activity') {
                        localStorage.setItem('dashSales', '1');
                        if (p.View == '1') {
                            _this.globalService.viewSales == '1';
                            localStorage.setItem('viewSales', '1');
                        }
                        else {
                            _this.globalService.viewSales == '0';
                            localStorage.setItem('viewSales', '0');
                        }
                        if (p.Update == '1') {
                            _this.globalService.editSales == '1';
                            localStorage.setItem('editSales', '1');
                        }
                        else {
                            _this.globalService.editSales == '0';
                            localStorage.setItem('editSales', '0');
                        }
                        if (p.Create == '1') {
                            _this.globalService.createSales == '1';
                            localStorage.setItem('createSales', '1');
                        }
                        else {
                            _this.globalService.createSales == '0';
                            localStorage.setItem('createSales', '0');
                        }
                    }
                    if (p.MenuName == 'Sales Lead-Customer') {
                        localStorage.setItem('dashLead', '1');
                        if (p.View == '1') {
                            _this.globalService.viewLead == '1';
                            localStorage.setItem('viewLead', '1');
                        }
                        else {
                            _this.globalService.viewLead == '0';
                            localStorage.setItem('viewLead', '0');
                        }
                        if (p.Update == '1') {
                            _this.globalService.editLead == '1';
                            localStorage.setItem('editLead', '1');
                        }
                        else {
                            _this.globalService.editLead == '0';
                            localStorage.setItem('editLead', '0');
                        }
                        if (p.Create == '1') {
                            _this.globalService.createLead == '1';
                            localStorage.setItem('createLead', '1');
                        }
                        else {
                            _this.globalService.createLead == '0';
                            localStorage.setItem('createLead', '0');
                        }
                    }
                    if (p.MenuName == 'Update Job Milestone') {
                        localStorage.setItem('dashMilestone', '1');
                        if (p.View == '1') {
                            _this.globalService.viewMilestone == '1';
                            localStorage.setItem('viewMilestone', '1');
                        }
                        else {
                            _this.globalService.viewMilestone == '0';
                            localStorage.setItem('viewMilestone', '0');
                        }
                        if (p.Update == '1') {
                            _this.globalService.editMilestone == '1';
                            localStorage.setItem('editMilestone', '1');
                        }
                        else {
                            _this.globalService.editMilestone == '0';
                            localStorage.setItem('editMilestone', '0');
                        }
                        if (p.Create == '1') {
                            _this.globalService.createMilestone == '1';
                            localStorage.setItem('createMilestone', '1');
                        }
                        else {
                            _this.globalService.createMilestone == '0';
                            localStorage.setItem('createMilestone', '0');
                        }
                    }
                    if (p.MenuName == 'View Reporting User Activity') {
                        localStorage.setItem('dashReportingUser', '1');
                    }
                    if (p.MenuName == 'Shipment Status') {
                        localStorage.setItem('dashShipStatus', '1');
                    }
                    if (p.MenuName == 'Shipment Invoice') {
                        localStorage.setItem('dashShipInvoice', '1');
                    }
                }
                for (var i = 0; i < BranchTable.length; i++) {
                    if (BranchTable[i].IsDefault == '1') {
                        _this.globalService.globalDefaultBranchCode = BranchTable[i].BranchCode;
                    }
                }
                ShipmentType = JSON.parse(userDetailsResp)["Table3"].filter(function (t) { return t.Identifier == 'ShipmentType'; });
                ServiceType = JSON.parse(userDetailsResp)["Table3"].filter(function (t) { return t.Identifier == 'Service'; });
                TransportMode = JSON.parse(userDetailsResp)["Table3"].filter(function (t) { return t.Identifier == 'TransportMode'; });
                TypeOfCustomer = JSON.parse(userDetailsResp)["Table3"].filter(function (t) { return t.Identifier == 'TypeOfCustomer'; });
                ShipmentTypeAir = JSON.parse(userDetailsResp)["Table3"].filter(function (t) { return t.Identifier == 'ShipmentTypeAir'; });
                ShipmentTypeRail = JSON.parse(userDetailsResp)["Table3"].filter(function (t) { return t.Identifier == 'ShipmentTypeAir'; });
                //Himesh
                ShipmentType = JSON.parse(userDetailsResp)["Table3"].filter(function (t) { return t.Identifier == 'ShipmentType'; });
                ServiceType = JSON.parse(userDetailsResp)["Table3"].filter(function (t) { return t.Identifier == 'Service'; });
                TransportMode = JSON.parse(userDetailsResp)["Table3"].filter(function (t) { return t.Identifier == 'TransportMode'; });
                ShipmentTypeAir = JSON.parse(userDetailsResp)["Table3"].filter(function (t) { return t.Identifier == 'ShipmentTypeAir'; });
                ShipmentTypeRail = JSON.parse(userDetailsResp)["Table3"].filter(function (t) { return t.Identifier == 'ShipmentTypeAir'; });
                ShipmentTypeRoad = JSON.parse(userDetailsResp)["Table3"].filter(function (t) { return t.Identifier == 'ShipmentTypeRoad'; });
                reportingUSer = JSON.parse(userDetailsResp)["Table5"];
                SalesLeadStatus = JSON.parse(userDetailsResp)["Table3"].filter(function (t) { return t.Identifier == 'SalesLeadStatus'; });
                TypeOfIndustry = JSON.parse(userDetailsResp)["Table3"].filter(function (t) { return t.Identifier == 'TypeOfIndustry'; });
                TypeOfCustomer = JSON.parse(userDetailsResp)["Table3"].filter(function (t) { return t.Identifier == 'TypeOfCustomer'; });
                localStorage.setItem('Activity', JSON.stringify(Activity));
                localStorage.setItem('ActivityPriority', JSON.stringify(ActivityPriority));
                localStorage.setItem('CommunicationType', JSON.stringify(CommunicationType));
                localStorage.setItem('ActivityStatus', JSON.stringify(ActivityStatus));
                localStorage.setItem('BranchTable', JSON.stringify(BranchTable));
                localStorage.setItem('ShipmentType', JSON.stringify(ShipmentType));
                localStorage.setItem('ServiceType', JSON.stringify(ServiceType));
                localStorage.setItem('TransportMode', JSON.stringify(TransportMode));
                // localStorage.setItem('BranchTable', JSON.stringify(BranchTable));
                localStorage.setItem('ShipmentType', JSON.stringify(ShipmentType));
                localStorage.setItem('ServiceType', JSON.stringify(ServiceType));
                localStorage.setItem('TransportMode', JSON.stringify(TransportMode));
                localStorage.setItem('ShipmentTypeAir', JSON.stringify(ShipmentTypeAir));
                localStorage.setItem('ShipmentTypeRail', JSON.stringify(ShipmentTypeRail));
                localStorage.setItem('ShipmentTypeRoad', JSON.stringify(ShipmentTypeRoad));
                localStorage.setItem('reportingUSer', JSON.stringify(reportingUSer));
                localStorage.setItem('SalesLeadStatus', JSON.stringify(SalesLeadStatus));
                localStorage.setItem('TypeOfIndustry', JSON.stringify(TypeOfIndustry));
                localStorage.setItem('TypeOfCustomer', JSON.stringify(TypeOfCustomer));
            }
            else {
                _this.globalService.store('userDetails', userDetailsResp);
                console.log('I am from browser');
                stageOne = userDetailsResp['Table'][0];
                // tem = userDetailsResp["Table"][0]["ProfileType"];
                _this.globalService.store('ProfileType', userDetailsResp["Table"][0]["ProfileType"]);
                // this.globalService.store('ReportingTo', userDetailsResp["Table"][0]["ReportingTo"]);
                Activity = userDetailsResp["Table3"].filter(function (t) { return t.Identifier == 'Activity'; });
                ActivityPriority = userDetailsResp["Table3"].filter(function (t) { return t.Identifier == 'ActivityPriority'; });
                CommunicationType = userDetailsResp["Table3"].filter(function (t) { return t.Identifier == 'CommunicationType'; });
                ActivityStatus = userDetailsResp["Table3"].filter(function (t) { return t.Identifier == 'ActivityStatus'; });
                BranchTable = userDetailsResp["Table4"];
                //himesh on 07/09
                if (typeof (userDetailsResp["Table6"][0]) != 'undefined') {
                    _this.globalService.defaultMode = userDetailsResp["Table6"][0]["Mode"];
                    _this.globalService.defaultService = userDetailsResp["Table6"][0]["Service"];
                    _this.globalService.defaultJobType = userDetailsResp["Table6"][0]["JobType"];
                    _this.globalService.defaultNoofRecords = userDetailsResp["Table6"][0]["NoofRecordsPrListing"];
                }
                //himesh on 08/09
                _this.globalService.menuItems = userDetailsResp["Table2"];
                // added on 09/07 to check role action
                for (var _b = 0, _c = _this.globalService.menuItems; _b < _c.length; _b++) {
                    var p = _c[_b];
                    if (p.MenuName == 'Sales Activity') {
                        localStorage.setItem('dashSales', '1');
                        if (p.View == '1') {
                            _this.globalService.viewSales == '1';
                            localStorage.setItem('viewSales', '1');
                        }
                        else {
                            _this.globalService.viewSales == '0';
                            localStorage.setItem('viewSales', '0');
                        }
                        if (p.Update == '1') {
                            _this.globalService.editSales == '1';
                            localStorage.setItem('editSales', '1');
                        }
                        else {
                            _this.globalService.editSales == '0';
                            localStorage.setItem('editSales', '0');
                        }
                        if (p.Create == '1') {
                            _this.globalService.createSales == '1';
                            localStorage.setItem('createSales', '1');
                        }
                        else {
                            _this.globalService.createSales == '0';
                            localStorage.setItem('createSales', '0');
                        }
                    }
                    if (p.MenuName == 'Sales Lead-Customer') {
                        localStorage.setItem('dashLead', '1');
                        if (p.View == '1') {
                            _this.globalService.viewLead == '1';
                            localStorage.setItem('viewLead', '1');
                        }
                        else {
                            _this.globalService.viewLead == '0';
                            localStorage.setItem('viewLead', '0');
                        }
                        if (p.Update == '1') {
                            _this.globalService.editLead == '1';
                            localStorage.setItem('editLead', '1');
                        }
                        else {
                            _this.globalService.editLead == '0';
                            localStorage.setItem('editLead', '0');
                        }
                        if (p.Create == '1') {
                            _this.globalService.createLead == '1';
                            localStorage.setItem('createLead', '1');
                        }
                        else {
                            _this.globalService.createLead == '0';
                            localStorage.setItem('createLead', '0');
                        }
                    }
                    if (p.MenuName == 'Update Job Milestone') {
                        localStorage.setItem('dashMilestone', '1');
                        if (p.View == '1') {
                            _this.globalService.viewMilestone == '1';
                            localStorage.setItem('viewMilestone', '1');
                        }
                        else {
                            _this.globalService.viewMilestone == '0';
                            localStorage.setItem('viewMilestone', '0');
                        }
                        if (p.Update == '1') {
                            _this.globalService.editMilestone == '1';
                            localStorage.setItem('editMilestone', '1');
                        }
                        else {
                            _this.globalService.editMilestone == '0';
                            localStorage.setItem('editMilestone', '0');
                        }
                        if (p.Create == '1') {
                            _this.globalService.createMilestone == '1';
                            localStorage.setItem('createMilestone', '1');
                        }
                        else {
                            _this.globalService.createMilestone == '0';
                            localStorage.setItem('createMilestone', '0');
                        }
                    }
                    if (p.MenuName == 'View Reporting User Activity') {
                        localStorage.setItem('dashReportingUser', '1');
                    }
                    if (p.MenuName == 'Shipment Status') {
                        localStorage.setItem('dashShipStatus', '1');
                    }
                    if (p.MenuName == 'Shipment Invoice') {
                        localStorage.setItem('dashShipInvoice', '1');
                    }
                }
                console.log('check milestone: ', localStorage.getItem('viewSales'));
                console.log('check again milestone: ', _this.globalService.viewSales);
                // this.globalService.defaultMode = userDetailsResp["Table6"][0]["Mode"];
                console.log('***** check default mode *****: ', _this.globalService.defaultMode);
                for (var i = 0; i < BranchTable.length; i++) {
                    if (BranchTable[i].IsDefault == '1') {
                        _this.globalService.globalDefaultBranchCode = BranchTable[i].BranchCode;
                        //alert(this.globalService.globalDefaultBranchCode)
                    }
                }
                ShipmentType = userDetailsResp["Table3"].filter(function (t) { return t.Identifier == 'ShipmentType'; });
                ServiceType = userDetailsResp["Table3"].filter(function (t) { return t.Identifier == 'Service'; });
                TransportMode = userDetailsResp["Table3"].filter(function (t) { return t.Identifier == 'TransportMode'; });
                //Himesh
                ShipmentType = userDetailsResp["Table3"].filter(function (t) { return t.Identifier == 'ShipmentType'; });
                ServiceType = userDetailsResp["Table3"].filter(function (t) { return t.Identifier == 'Service'; });
                TransportMode = userDetailsResp["Table3"].filter(function (t) { return t.Identifier == 'TransportMode'; });
                TypeOfCustomer = userDetailsResp["Table3"].filter(function (t) { return t.Identifier == 'TypeOfCustomer'; });
                ShipmentTypeAir = userDetailsResp["Table3"].filter(function (t) { return t.Identifier == 'ShipmentTypeAir'; });
                ShipmentTypeRail = userDetailsResp["Table3"].filter(function (t) { return t.Identifier == 'ShipmentTypeRail'; });
                ShipmentTypeRoad = userDetailsResp["Table3"].filter(function (t) { return t.Identifier == 'ShipmentTypeRoad'; });
                reportingUSer = userDetailsResp["Table5"];
                SalesLeadStatus = userDetailsResp["Table3"].filter(function (t) { return t.Identifier == 'SalesLeadStatus'; });
                TypeOfIndustry = userDetailsResp["Table3"].filter(function (t) { return t.Identifier == 'TypeOfIndustry'; });
                TypeOfIndustry = userDetailsResp["Table3"].filter(function (t) { return t.Identifier == 'TypeOfIndustry'; });
                localStorage.setItem('Activity', JSON.stringify(Activity));
                localStorage.setItem('ActivityPriority', JSON.stringify(ActivityPriority));
                localStorage.setItem('CommunicationType', JSON.stringify(CommunicationType));
                localStorage.setItem('ActivityStatus', JSON.stringify(ActivityStatus));
                localStorage.setItem('BranchTable', JSON.stringify(BranchTable));
                localStorage.setItem('ShipmentType', JSON.stringify(ShipmentType));
                localStorage.setItem('ServiceType', JSON.stringify(ServiceType));
                localStorage.setItem('TransportMode', JSON.stringify(TransportMode));
                //Himesh
                localStorage.setItem('ShipmentType', JSON.stringify(ShipmentType));
                localStorage.setItem('ServiceType', JSON.stringify(ServiceType));
                localStorage.setItem('TransportMode', JSON.stringify(TransportMode));
                localStorage.setItem('ShipmentTypeAir', JSON.stringify(ShipmentTypeAir));
                localStorage.setItem('ShipmentTypeRail', JSON.stringify(ShipmentTypeRail));
                localStorage.setItem('ShipmentTypeRoad', JSON.stringify(ShipmentTypeRoad));
                localStorage.setItem('SalesLeadStatus', JSON.stringify(SalesLeadStatus));
                localStorage.setItem('TypeOfIndustry', JSON.stringify(TypeOfIndustry));
                // localStorage.setItem('TypeOfIndustry', JSON.stringify(TypeOfIndustry));
                localStorage.setItem('reportingUSer', JSON.stringify(reportingUSer));
                localStorage.setItem('TypeOfCustomer', JSON.stringify(TypeOfCustomer));
            }
            console.log('check userdetails2', stageOne.UserId);
            localStorage.setItem('userId', stageOne.UserId);
            localStorage.setItem('profileType', stageOne.ProfileType);
            localStorage.setItem('reportingTo', stageOne.ReportingTo);
            console.log('what profile: ', localStorage.getItem('profileType'));
            console.log('Is Reporting to: ', localStorage.getItem('reportingTo'));
            _this.profileType = localStorage.getItem('profileType');
            console.log('checking from local', localStorage.getItem('userId'));
            _this.globalService.publishEventwithData('app:userDetails', userDetailsResp);
            _this.globalService.publishEventwithData('login:sessionExpired', 5000000);
            // below is new for dynamic side menu
            _this.events.publish('user:created', _this.profileType, Date.now());
            _this.globalService.setRootPage(__WEBPACK_IMPORTED_MODULE_12__dashboard_dashboard__["a" /* DashboardPage */]); // here junaid's customerdashboard was there
        }, function (err) {
            console.log('error Login ', err);
        });
    };
    LoginPage.prototype.sendPassword = function (data) {
        var _this = this;
        var Username = data.forgotPwd.username;
        if (Username.trim() !== "" && Username !== undefined) {
            this.http.POST(__WEBPACK_IMPORTED_MODULE_5__constants__["a" /* Constants */].Corvi_Services.ForgetPassword, {
                "UserId": Username
            }).then(function (res) {
                var response = JSON.parse(res);
                var forgotPwdRes = response['Table'][0];
                forgotPwdRes['MSG'] == "Success" ? _this.sendMailToUser(forgotPwdRes) : _this.toastService.show(forgotPwdRes['MSG'], 3000, true, 'top', 'dark-trans');
            });
        }
        else {
            this.globalService.showToast('Please enter username');
        }
    };
    LoginPage.prototype.sendMailToUser = function (res) {
        var _this = this;
        var Password = res['Password'];
        var emailId = res['Email'].replace(/,/g, "");
        Email.send({
            Host: __WEBPACK_IMPORTED_MODULE_5__constants__["a" /* Constants */].SMTP_Credentails.Host,
            Username: __WEBPACK_IMPORTED_MODULE_5__constants__["a" /* Constants */].SMTP_Credentails.Username,
            Password: __WEBPACK_IMPORTED_MODULE_5__constants__["a" /* Constants */].SMTP_Credentails.Password,
            To: emailId,
            From: __WEBPACK_IMPORTED_MODULE_5__constants__["a" /* Constants */].SMTP_Credentails.From,
            Subject: "Corvi - Forgot Password",
            Body: "Your Password is " + Password
        }).then(function (message) { return _this.showToast(message, emailId); });
    };
    LoginPage.prototype.showToast = function (message, EmailId) {
        message == "OK" ? this.toastService.show("Password has been sent to " + EmailId + ",please check your mail", 3000, true, 'top', 'dark-trans') : this.toastService.show('Something went wrong', 3000, true, 'top', 'dark-trans');
    };
    LoginPage.prototype.EnquiryForm = function () {
        this.globalService.routePage(__WEBPACK_IMPORTED_MODULE_8__enquiry_enquiry__["a" /* EnquiryPage */]);
    };
    LoginPage.prototype.goToDashboard = function () {
        this.globalService.routePage(__WEBPACK_IMPORTED_MODULE_9__home_home__["a" /* HomePage */]);
    };
    LoginPage.prototype.dashboard = function () {
        this.globalService.setRootPage(__WEBPACK_IMPORTED_MODULE_13__welcomeuser_welcomeuser__["a" /* WelcomeuserPage */]);
    };
    LoginPage.prototype.RegisterNowButton = function () {
        var _this = this;
        this.baseUrlProvider.setBaseURL('BLL').then(function (msg) {
            console.log('check msg from login()', msg);
            // if (msg != null && msg != '') {
            // console.log('response to check 1');
            _this.http.GET(__WEBPACK_IMPORTED_MODULE_5__constants__["a" /* Constants */].Corvi_Services.RegisterNowButton).then(function (response) {
                console.log('response to check login method: ', response);
                // this.globalService.store('custIdCode', this.user.custIdCode);
                _this.signUpButtonshowHide = JSON.stringify(response['Status']);
                _this.finalStatus = _this.signUpButtonshowHide.replace(/^"|"$/g, '');
                // if (response == '1') {
                // } else {
                // }
            }, function (err) {
                console.log('error Login ', err);
                console.log('response to check service link: ', __WEBPACK_IMPORTED_MODULE_5__constants__["a" /* Constants */].Corvi_Services.Login);
                _this.LoginInvalid(err);
            });
            // }
            // else {
            //   this.globalService.showAlert('Invalid Customer Identity Code')
            // }
        }); // this.baseUrlProvider ends
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"D:\MobileApp\corviBL\corviBL\src\pages\login\login.html"*/'<!-- -->\n<ion-header no-border style="margin-bottom: 100px;">\n  <ion-grid class="gridDesign">\n    <ion-row>\n      <ion-col col-6>\n        <div padding-horizontal class="animated fadeInDown ">\n          <div class="logoLeft">\n            <img class="imgLeft" src="../assets/img/Corvi_Logo.png">\n          </div>\n        </div>\n      </ion-col>\n\n      <ion-col col-6>\n        <div padding-horizontal class="animated fadeInDown">\n          <div class="logoRight"></div>\n          <img class="imgRight" src="../assets/img/Kale_Logo.png">\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-header>\n<ion-content padding class="animated fadeInDown login">\n  <!-- <div class="login-content ShadowBox13" center> -->\n  <!-- Login form -->\n  <!-- <form [formGroup]="authForm" class="list-form" > -->\n  <form #f="ngForm" class="list-form ShadowBox13">\n    <!-- <div class="contaier-login"> -->\n\n    <ion-row>\n      <ion-col>\n\n        <h3 style="text-align: center;">Sign in to your account</h3>\n\n      </ion-col>\n    </ion-row>\n    <ion-item>\n      <ion-label stacked>\n        <!-- <ion-icon name="person" item-start class="text-primary"></ion-icon> -->\n        Enter Username\n      </ion-label>\n      <ion-input type="text" [(ngModel)]="user.UserId" #nameCtrl="ngModel" name="userId" required></ion-input>\n    </ion-item>\n    <!-- <div class="errorbox" style="color:tomato" *ngIf="!nameCtrl.valid && nameCtrl.touched">required</div> -->\n    <!-- <ion-item *ngIf="!nameCtrl.valid && nameCtrl.touched">\n            <ion-label color="danger">Name is required</ion-label>\n          </ion-item>\n           -->\n\n    <ion-item>\n      <ion-label stacked>\n        Enter Password\n      </ion-label>\n      <ion-input type="{{type}}" [(ngModel)]="user.Password" #passwordCtrl="ngModel" name="password" required>\n      </ion-input>\n      <button *ngIf="!showPass" ion-button clear color="dark" type="button" item-right (click)="showPassword()">\n        <ion-icon name="ios-eye-off-outline"></ion-icon>\n      </button>\n      <button *ngIf="showPass" ion-button clear color="dark" type="button" item-right (click)="showPassword()">\n        <ion-icon name="ios-eye-outline"></ion-icon>\n      </button>\n      <!-- <ion-input name="p2" type="password" *ngIf="!showPwd" [(ngModel)]="user.Password" required></ion-input> -->\n      <!-- <button icon-only ion-button clear type="button" item-right (click)="showPwd=!showPwd">\n            <ion-icon *ngIf="showPwd" name="eye"></ion-icon>\n            <ion-icon *ngIf="!showPwd" name="eye-off"></ion-icon>\n          </button> -->\n    </ion-item>\n    <!-- <div class="errorbox" style="color:tomato" *ngIf="!passwordCtrl.valid && passwordCtrl.touched">required</div> -->\n    <!-- <ion-item *ngIf="!passwordCtrl.valid && passwordCtrl.touched">\n            <ion-label color="danger">Password is required</ion-label>\n          </ion-item> -->\n\n    <ion-item>\n      <!-- *ngIf="showCustIdCode" -->\n      <ion-label stacked>\n        Enter Customer Identity Code\n      </ion-label>\n      <ion-input type="text" [(ngModel)]="user.IdentityCode" #codeCtrl="ngModel" name="customerCode" required>\n      </ion-input>\n    </ion-item>\n    <!-- <div class="errorbox" style="color:tomato" *ngIf="!codeCtrl.valid && codeCtrl.touched">required</div> -->\n    <!-- <ion-item *ngIf="!codeCtrl.valid && codeCtrl.touched">\n            <ion-label color="danger">code is required</ion-label>\n          </ion-item> -->\n\n    <br />\n    <ion-row>\n      <ion-checkbox checked name=\'remember\' [(ngModel)]="isRemembered" style="margin-top: 13px;"></ion-checkbox>\n      &nbsp;&nbsp;\n      <ion-label id="checkboxRemember" color="secondary">Remember Me</ion-label>\n      <p text-right ion-text color="secondary" tappable (click)="forgotPwd()">\n        <strong>Forgot Password?</strong>\n      </p>\n\n    </ion-row>\n    <ion-row>\n      <ion-col>\n\n        <a style="text-align: right;" *ngIf="finalStatus == 1" (click)="signUp();">Don\'t have an account yet?  Sign Up here</a>\n\n      </ion-col>\n    </ion-row>\n    <br />\n    <div>\n      <button style="border-radius: 10px;" ion-button block color="primary" tappable [disabled]="!f.valid"\n        (click)="logIn()">\n        <!-- <ion-icon name="log-in"></ion-icon> -->\n        Sign In\n      </button>\n\n    </div>\n\n    <!-- </div> -->\n  </form>\n  <!-- </div> -->\n\n  <!-- <div class="addOns">\n    <div class="addOnsText">\n      <h4>Additional Services</h4>\n    </div>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <div class="container" style="opacity: 0.2">\n            <img src="../assets/img/moreservices.png">\n            <h6>More Services</h6>\n          </div>\n        </ion-col>\n        <ion-col>\n          <div class="container" (click)="openContactModal()">\n            <img src="../assets/img/contactus.png">\n            <h6>Contact Us</h6>\n          </div>\n        </ion-col>\n        <ion-col>\n          <div class="container" (click)="openSupport()">\n            <img src="../assets/img/monitor_support.png">\n            <h6>24 x 7 Support</h6>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n\n  </div> -->\n\n</ion-content>\n<ion-footer>\n\n  <ion-row style="background-color: #1f63a6;padding-bottom: 10px">\n\n    <ion-col col-12 style="color: white;">\n      <span>Additional Services</span>\n    </ion-col>\n\n\n    <ion-col col-4>\n      <div class="container" style="opacity: 0.2">\n        <img src="../assets/img/moreservices.png">\n        <span>More Services</span>\n      </div>\n    </ion-col>\n    <ion-col col-4>\n      <div class="container" (click)="openContactModal()">\n        <img src="../assets/img/contactus.png">\n        <span>Contact Us</span>\n      </div>\n    </ion-col>\n    <ion-col col-4>\n      <div class="container" (click)="openSupport()">\n        <img src="../assets/img/monitor_support.png">\n        <span>24 x 7 Support</span>\n      </div>\n    </ion-col>\n  </ion-row>\n  <div class="bar bar-footer" center text-center>\n    <!-- <ion-row>\n      <ion-col col-4></ion-col>\n      <ion-col col-4>\n        <div class="inner footer-col-color">\n          <img src="assets/img/kale_power.png" class="center-footer-img">\n        </div>\n\n      </ion-col>\n      <ion-col col-2></ion-col>\n    </ion-row> -->\n    <ion-row>\n      <ion-col col-6 style="color:lightgray;">\n        <em style="text-align: center;" class="title">Terms and conditions</em>\n      </ion-col>\n\n      <ion-col col-6 style="color: lightgray;">\n        <em style="text-align: center;" class="title">Privacy Policy</em>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-footer>\n<!-- <ion-footer>\n  <ion-row style="background-color: #1f63a6;">\n    <ion-col>\n      <div class="container" style="opacity: 0.2">\n        <img src="../assets/img/moreservices.png">\n        <span>More Services</span>\n      </div>\n    </ion-col>\n    <ion-col>\n      <div class="container" (click)="openContactModal()">\n        <img src="../assets/img/contactus.png">\n        <span>Contact Us</span>\n      </div>\n    </ion-col>\n    <ion-col>\n      <div class="container" (click)="openSupport()">\n        <img src="../assets/img/monitor_support.png">\n        <span>24 x 7 Support</span>\n      </div>\n    </ion-col>\n  </ion-row>\n  <div class="bar bar-footer" center text-center>\n    <ion-row>\n      <ion-col col-6 style="color: black;">\n        <em style="text-align: center;" class="title">Terms and conditions</em>\n      </ion-col>\n\n      <ion-col col-6 style="color: black;">\n        <em style="text-align: center;" class="title">Privacy Policy</em>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-footer> -->\n'/*ion-inline-end:"D:\MobileApp\corviBL\corviBL\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_http_service_http_service__["a" /* HttpServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_util_alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_7__providers_util_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_14__providers_baseUrlGenerator_baseurlgenerator__["a" /* BaseURLProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_11__angular_forms__["a" /* FormBuilder */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_http_service_http_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__quotation_quotation__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__invoices_invoices__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__open_jobs_open_jobs__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__closed_jobs_closed_jobs__ = __webpack_require__(148);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * @author Sachin Semlety
 * @email sachin.semlety@kalelogistics.in
 * @create date 2018-08-27 02:51:50
 * @modify date 2018-08-27 02:51:50
 * @desc [description]
*/









var TabsPage = /** @class */ (function () {
    function TabsPage(navCtrl, navParams, globalService, event, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.globalService = globalService;
        this.event = event;
        this.http = http;
        this.HomePage = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.QuotationPage = __WEBPACK_IMPORTED_MODULE_5__quotation_quotation__["a" /* QuotationPage */];
        this.OpenJobsPage = __WEBPACK_IMPORTED_MODULE_7__open_jobs_open_jobs__["a" /* OpenJobsPage */];
        this.ClosedJobsPage = __WEBPACK_IMPORTED_MODULE_8__closed_jobs_closed_jobs__["a" /* ClosedJobsPage */];
        this.InvoicesPage = __WEBPACK_IMPORTED_MODULE_6__invoices_invoices__["a" /* InvoicesPage */];
        this.tabsCount = {
            QuotationCount: 0,
            OpenJobsCount: 0,
            ClosedJobsCount: 0,
            InvoicesCount: 0,
            EnquiryCount: 0
        };
        console.log('navparams : ', this.tabsCount);
    }
    TabsPage.prototype.ionViewDidEnter = function () {
        // this.getTabsCount();
    };
    TabsPage.prototype.ionViewDidLoad = function () {
        this.setTabsCount();
    };
    TabsPage.prototype.selectTab = function (page) {
        this.globalService.setRootPage(page);
    };
    TabsPage.prototype.setTabsCount = function () {
        var _this = this;
        this.globalService.get('userDetails').then(function (userDetails) {
            var DashboardCount = _this.globalService.handleJSON(userDetails).Table1[0];
            _this.tabsCount.QuotationCount = DashboardCount.QuotationCount;
            _this.tabsCount.OpenJobsCount = DashboardCount.OpenJobCount;
            _this.tabsCount.ClosedJobsCount = DashboardCount.CloseJobCount;
            _this.tabsCount.InvoicesCount = DashboardCount.InvoiceCount;
            _this.showTabs = true;
        });
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"D:\MobileApp\corviBL\corviBL\src\pages\tabs\tabs.html"*/'<ion-tabs *ngIf="showTabs">\n\n  <!-- *ngIf="showTabs"-->\n\n  <ion-tab [root]="HomePage" tabTitle="Home" tabIcon="home"></ion-tab>\n\n  <ion-tab [root]="QuotationPage" tabTitle="Quotation" [tabBadge]="tabsCount.QuotationCount" tabIcon="quote"></ion-tab>\n\n  <ion-tab [root]="OpenJobsPage" tabTitle="Open Jobs" [tabBadge]="tabsCount.OpenJobsCount" tabIcon="open"></ion-tab>\n\n  <ion-tab [root]="ClosedJobsPage" tabTitle="Closed Jobs" [tabBadge]="tabsCount.ClosedJobsCount" tabIcon="close">\n\n  </ion-tab>\n\n  <ion-tab [root]="InvoicesPage" tabTitle="Invoices" [tabBadge]="tabsCount.InvoicesCount" tabIcon="print"></ion-tab>\n\n  <ion-tab [root]="EnquiryPage" tabTitle="Enquiry" [tabBadge]="tabsCount.EnquiryCount" tabIcon="clipboard"></ion-tab>\n\n\n\n</ion-tabs>'/*ion-inline-end:"D:\MobileApp\corviBL\corviBL\src\pages\tabs\tabs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_4__providers_http_service_http_service__["a" /* HttpServiceProvider */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateJobMilestonePageModule", function() { return UpdateJobMilestonePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__update_job_milestone__ = __webpack_require__(143);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UpdateJobMilestonePageModule = /** @class */ (function () {
    function UpdateJobMilestonePageModule() {
    }
    UpdateJobMilestonePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__update_job_milestone__["a" /* UpdateJobMilestonePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__update_job_milestone__["a" /* UpdateJobMilestonePage */]),
            ],
        })
    ], UpdateJobMilestonePageModule);
    return UpdateJobMilestonePageModule;
}());

//# sourceMappingURL=update-job-milestone.module.js.map

/***/ }),

/***/ 442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeuserPageModule", function() { return WelcomeuserPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__welcomeuser__ = __webpack_require__(393);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WelcomeuserPageModule = /** @class */ (function () {
    function WelcomeuserPageModule() {
    }
    WelcomeuserPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__welcomeuser__["a" /* WelcomeuserPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__welcomeuser__["a" /* WelcomeuserPage */]),
            ],
        })
    ], WelcomeuserPageModule);
    return WelcomeuserPageModule;
}());

//# sourceMappingURL=welcomeuser.module.js.map

/***/ }),

/***/ 443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenJobsPageModule", function() { return OpenJobsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__open_jobs__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detail_open_jobs_details__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pipes_pipes_module__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * @author Sachin Semlety
 * @email sachin.semlety@kalelogistics.in
 * @create date 2018-08-14 03:26:24
 * @modify date 2018-08-14 03:26:24
 * @desc [description]
*/






var OpenJobsPageModule = /** @class */ (function () {
    function OpenJobsPageModule() {
    }
    OpenJobsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__open_jobs__["a" /* OpenJobsPage */],
                __WEBPACK_IMPORTED_MODULE_3__detail_open_jobs_details__["a" /* OpenJobsPageDetails */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_5__pipes_pipes_module__["a" /* PipesModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__open_jobs__["a" /* OpenJobsPage */]),
            ], entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__detail_open_jobs_details__["a" /* OpenJobsPageDetails */]
            ]
        })
    ], OpenJobsPageModule);
    return OpenJobsPageModule;
}());

//# sourceMappingURL=open-jobs.module.js.map

/***/ }),

/***/ 444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function() { return DashboardPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DashboardPageModule = /** @class */ (function () {
    function DashboardPageModule() {
    }
    DashboardPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__dashboard__["a" /* DashboardPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__dashboard__["a" /* DashboardPage */]),
            ],
        })
    ], DashboardPageModule);
    return DashboardPageModule;
}());

//# sourceMappingURL=dashboard.module.js.map

/***/ }),

/***/ 486:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppState; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * @author Sachin Semlety
 * @email sachin.semlety@kalelogistics.in
 * @create date 2018-08-10 11:02:53
 * @modify date 2018-08-10 11:02:53
 * @desc [description]
*/

var AppState = /** @class */ (function () {
    function AppState() {
        this._state = {};
    }
    Object.defineProperty(AppState.prototype, "state", {
        // already return a clone of the current state
        get: function () {
            return this._state = this.clone(this._state);
        },
        // never allow mutation
        set: function (value) {
            throw new Error('do not mutate the `.state` directly');
        },
        enumerable: true,
        configurable: true
    });
    AppState.prototype.get = function (prop) {
        // use our state getter for the clone
        var state = this.state;
        return state.hasOwnProperty(prop) ? state[prop] : state;
    };
    AppState.prototype.set = function (prop, value) {
        // internally mutate our state
        return this._state[prop] = value;
    };
    AppState.prototype.clone = function (object) {
        // simple object clone
        return JSON.parse(JSON.stringify(object));
    };
    AppState = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
    ], AppState);
    return AppState;
}());

//# sourceMappingURL=app.global.js.map

/***/ }),

/***/ 487:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ConnectionStatusEnum */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetworkProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__ = __webpack_require__(488);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConnectionStatusEnum;
(function (ConnectionStatusEnum) {
    ConnectionStatusEnum[ConnectionStatusEnum["Online"] = 0] = "Online";
    ConnectionStatusEnum[ConnectionStatusEnum["Offline"] = 1] = "Offline";
})(ConnectionStatusEnum || (ConnectionStatusEnum = {}));
/**
 * @name NetworkProvider
 * @author Sachin Semlety
 * @description
 * This Class is used to see the Network Operations like internet Access Avialable or not for the app.
**/
var NetworkProvider = /** @class */ (function () {
    function NetworkProvider(alertCtrl, network, eventCtrl) {
        //console.log('Hello NetworkProvider Provider');
        this.alertCtrl = alertCtrl;
        this.network = network;
        this.eventCtrl = eventCtrl;
        this.previousStatus = ConnectionStatusEnum.Online;
    }
    NetworkProvider.prototype.initializeNetworkEvents = function () {
        var _this = this;
        this.network.onDisconnect().subscribe(function () {
            if (_this.previousStatus === ConnectionStatusEnum.Online) {
                _this.eventCtrl.publish('network:offline');
            }
            _this.previousStatus = ConnectionStatusEnum.Offline;
        });
        this.network.onConnect().subscribe(function () {
            if (_this.previousStatus === ConnectionStatusEnum.Offline) {
                _this.eventCtrl.publish('network:online');
            }
            _this.previousStatus = ConnectionStatusEnum.Online;
        });
    };
    NetworkProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
    ], NetworkProvider);
    return NetworkProvider;
}());

//# sourceMappingURL=network.js.map

/***/ }),

/***/ 489:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hammerjs__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(510);
/**
 * @author Sachin Semlety
 * @email sachin.semlety@kalelogistics.in
 * @create date 2018-08-10 11:03:09
 * @modify date 2018-08-10 11:03:09
 * @desc [description]
*/



Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 5:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_opener__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_pdfviewer_pdfviewer__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_native_storage__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_crypto_js__ = __webpack_require__(644);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_crypto_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_crypto_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_spinner_dialog__ = __webpack_require__(134);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












/**
 * @name GlobalProvider
 * @author Sachin Semlety
 * @description
 * This Class is used to set the global Operations for the app.
**/
var GlobalProvider = /** @class */ (function () {
    function GlobalProvider(http, app, alertCtrl, toastCtrl, platform, loadingCtrl, eventCtrl, actionSheetCtrl, file, transfer, fileOpener, nativeStorage, spinnerDialog) {
        this.http = http;
        this.app = app;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.eventCtrl = eventCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.file = file;
        this.transfer = transfer;
        this.fileOpener = fileOpener;
        this.nativeStorage = nativeStorage;
        this.spinnerDialog = spinnerDialog;
        /*Configuration for the app */
        this.appConfig = {
            version: 'v1.1.6'
        };
        this.appBuildConfig = {
            version: 'V1.25.0',
            fullYear: (new Date).getFullYear().toString()
        };
        this.selectedCity = '';
        this.valueForLeadCutomer = '';
        this.selectedMilestone = [];
        this.selectedJobsArray = [];
        this.selectedOrigin = '';
        this.selectedDest = '';
        this.globalDefaultBranchCode = '';
        this.defaultUsername = '';
        this.defaultEmailId = '';
        this.defaultMode = '';
        this.defaultService = '';
        this.defaultJobType = '';
        this.defaultNoofRecords = '';
        this.menuItems = '';
        this.viewSales = '';
        this.editSales = '';
        this.viewLead = '';
        this.createLead = '';
        this.editLead = '';
        this.createSales = '';
        this.viewMilestone = '';
        this.editMilestone = '';
        this.createMilestone = '';
        this.selectedJobType = '';
    }
    /* To set the RootPage in App*/
    GlobalProvider.prototype.setRootPage = function (page) {
        this.app.getRootNavs()[0].setRoot(page);
    };
    /* To Route the Page in the App*/
    GlobalProvider.prototype.routePage = function (page) {
        this.app.getActiveNavs()[0].push(page);
    };
    /* Route To other Page with the data params*/
    GlobalProvider.prototype.routePageWithData = function (page, data) {
        this.app.getActiveNavs()[0].push(page, data);
    };
    /*Logout PopupModal*/
    GlobalProvider.prototype.confirmlogOut = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            // title: 'Logout',
            message: 'Are you sure you want to sign out?',
            buttons: [{
                    text: "No",
                    role: 'cancel'
                }, {
                    text: "Yes",
                    cssClass: 'alertDanger',
                    handler: function () {
                        _this.handleLogOut();
                    }
                }]
        });
        alert.present();
    };
    GlobalProvider.prototype.handleLogOut = function () {
        this.eventCtrl.publish('app:loggedOut', true);
        this.clearLocalStorage();
    };
    GlobalProvider.prototype.clearLocalStorage = function () {
        this.remove('isLogged');
        this.remove('login_resp');
        this.remove('userDetails');
        this.remove('ActivityStatus');
        this.remove('SalesLeadStatus');
        this.remove('ActivityPriority');
        this.remove('bvalue');
        this.remove('profileType');
        //  this.remove('isRemembered');
        this.remove('TransportMode');
        this.remove('CommunicationType');
        this.remove('reportingUSer');
        this.remove('BranchTable');
        this.remove('Activity');
        this.remove('ServiceType');
        this.remove('ShipmentType');
        this.remove('jobType');
        this.remove('TypeOfIndustry');
        localStorage.removeItem('dashSales');
        localStorage.removeItem('dashLead');
        localStorage.removeItem('dashMilestone');
        localStorage.removeItem('dashShipStatus');
        localStorage.removeItem('dashShipInvoice');
        localStorage.removeItem('dashReportingUser');
        this.routePage(__WEBPACK_IMPORTED_MODULE_3__pages_login_login__["a" /* LoginPage */]);
    };
    /* To Exit the App */
    GlobalProvider.prototype.ExitApp = function () {
        this.platform.exitApp();
    };
    /* Toast for the App*/
    GlobalProvider.prototype.showToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            //console.log('Dismissed toast');
        });
        toast.present();
    };
    /* PopupModal Alert*/
    GlobalProvider.prototype.showAlert = function (msg) {
        var alert = this.alertCtrl.create({
            subTitle: msg,
            buttons: ['OK']
        });
        alert.present();
    };
    /* check is cordova Available*/
    GlobalProvider.prototype.isCordovaAvailable = function () {
        return !!window['cordova'];
    };
    /* To Convert String into Boolean*/
    GlobalProvider.prototype.convertToBoolean = function (input) {
        try {
            return this.handleJSON(input);
        }
        catch (e) {
            return undefined;
        }
    };
    /* Encrypt and store the local storage data*/
    GlobalProvider.prototype.store = function (key, value) {
        if (this.isCordovaAvailable()) {
            this.nativeStorage.setItem(key, value)
                .then(function () { return console.log('Stored item!'); }, function (error) { return console.error('Error storing item', error); });
        }
        else {
            var encryptedData = __WEBPACK_IMPORTED_MODULE_10_crypto_js__["AES"].encrypt(JSON.stringify(value), __WEBPACK_IMPORTED_MODULE_4__constants__["a" /* Constants */].SECRET_KEY).toString();
            window.localStorage.setItem(key, encryptedData);
        }
    };
    /* get the stored localStorage Value after decryption */
    GlobalProvider.prototype.get = function (key) {
        if (this.isCordovaAvailable()) {
            return this.nativeStorage.getItem(key);
        }
        else {
            return this.getlocalStorageWeb(key);
        }
    };
    GlobalProvider.prototype.getlocalStorageWeb = function (key) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var encryptedData = window.localStorage.getItem(key);
            if (encryptedData != null)
                resolve(_this.handleJSON(__WEBPACK_IMPORTED_MODULE_10_crypto_js__["AES"].decrypt(encryptedData, __WEBPACK_IMPORTED_MODULE_4__constants__["a" /* Constants */].SECRET_KEY).toString(__WEBPACK_IMPORTED_MODULE_10_crypto_js__["enc"].Utf8)));
            return resolve('');
        });
    };
    GlobalProvider.prototype.remove = function (key) {
        if (this.isCordovaAvailable()) {
            this.nativeStorage.remove(key)
                .then(function () { return console.log('Item removed!'); }, function (error) { return console.error('Error removing item', error); });
        }
        else {
            window.localStorage.removeItem(key);
        }
    };
    /* to check the Platform current running*/
    GlobalProvider.prototype._platform = function (platform_name1, platform_name2) {
        return this.platform.is(platform_name1) || this.platform.is(platform_name2);
    };
    /* To format the date in DD/MM/YYYY format */
    GlobalProvider.prototype.formatDate = function (date) {
        var splitArr = date.split('-');
        return splitArr[2] + "/" + splitArr[1] + "/" + splitArr[0];
    };
    GlobalProvider.prototype.showLoader = function () {
        var loader = this.loadingCtrl.create({
            content: "Loading..."
        });
        loader.present();
        return loader;
    };
    GlobalProvider.prototype.clone = function (object) {
        // simple object clone
        return this.handleJSON(JSON.stringify(object));
    };
    GlobalProvider.prototype.publishEventwithData = function (ev_name, data) {
        this.eventCtrl.publish(ev_name, data);
    };
    GlobalProvider.prototype.handleJSON = function (data) {
        try {
            return JSON.parse(data);
        }
        catch (e) {
            return data;
        }
    };
    GlobalProvider.prototype.hideElementByClass = function (className) {
        var divsToHide = document.getElementsByClassName(className); //divsToHide is an array
        for (var i = 0; i < divsToHide.length; i++) {
            divsToHide[i]['style'].visibility = "hidden"; // or
            divsToHide[i]['style'].display = "none"; // depending on what you're doing
        }
    };
    GlobalProvider.prototype.unhideElementByClass = function (className) {
        var divsToHide = document.getElementsByClassName(className); //divsToHide is an array
        for (var i = 0; i < divsToHide.length; i++) {
            divsToHide[i]['style'].visibility = "inherit"; // or
            divsToHide[i]['style'].display = "flex"; // depending on what you're doing
        }
    };
    GlobalProvider.prototype.viewPDF = function (url) {
        var connectionStatus = navigator.onLine ? 'online' : 'offline';
        connectionStatus == 'online' ? (this.platform.is('cordova')) ? this.nativePDFViewer(url) : this.browserPDFViewer(url) : connectionStatus == 'offline' ? this.showAlert('No Internet Connection') : '';
    };
    GlobalProvider.prototype.nativePDFViewer = function (url) {
        var _this = this;
        this.spinnerDialog.show(null, null, true);
        var path = null;
        if (this.platform.is('ios')) {
            path = this.file.documentsDirectory;
        }
        else if (this.platform.is('android')) {
            path = this.file.dataDirectory;
        }
        var transfer = this.transfer.create();
        var filename = url.match(/\/([^/]*)$/)[1];
        transfer.download(url, path + filename).then(function (entry) {
            var url = entry.toURL();
            _this.fileOpener.open(url, __WEBPACK_IMPORTED_MODULE_4__constants__["a" /* Constants */].MIME_TYPE).then(function () {
                _this.spinnerDialog.hide();
            }).catch(function (err) {
                _this.spinnerDialog.hide();
                _this.browserPDFViewer(url);
            });
        }).catch(function (err) {
            _this.spinnerDialog.hide();
            // this.browserPDFViewer(url);
        });
    };
    GlobalProvider.prototype.browserPDFViewer = function (url) {
        this.routePageWithData(__WEBPACK_IMPORTED_MODULE_8__components_pdfviewer_pdfviewer__["a" /* Pdfviewer */], { 'pdfUrl': url });
    };
    GlobalProvider.prototype.isTabsAvailable = function () {
        var className = this.platform.is('ios') ? 'tabs tabs-ios' : 'tabs tabs-md';
        var tabs = document.getElementsByClassName(className);
        return tabs.length > 0 ? true : false;
    };
    /* Encrypt and store the local storage data*/
    GlobalProvider.prototype.setBaseURL = function (key, value) {
        if (this.isCordovaAvailable()) {
            return this.nativeStorage.setItem(key, value);
        }
        else {
            return new Promise(function (resolve, reject) {
                var encryptedData = __WEBPACK_IMPORTED_MODULE_10_crypto_js__["AES"].encrypt(JSON.stringify(value), __WEBPACK_IMPORTED_MODULE_4__constants__["a" /* Constants */].SECRET_KEY).toString();
                window.localStorage.setItem(key, encryptedData);
                if (encryptedData != null)
                    resolve("Success");
                return resolve('');
            });
        }
    };
    GlobalProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* Platform */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_opener__["a" /* FileOpener */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_11__ionic_native_spinner_dialog__["a" /* SpinnerDialog */]])
    ], GlobalProvider);
    return GlobalProvider;
}());

//# sourceMappingURL=global.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(690);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_http_service_http_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_global_global__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_global__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home_module__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_login_login_module__ = __webpack_require__(691);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_register_register_module__ = __webpack_require__(692);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_components_module__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_quotation_quotation_module__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_network_network__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_network__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_open_jobs_open_jobs_module__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_closed_jobs_closed_jobs_module__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_invoices_invoices_module__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_file__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_file_transfer__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_file_opener__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_onesignal__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_push_notification_push_notification__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_tabs_tabs_module__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_native_storage__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_http__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_spinner_dialog__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_baseUrlGenerator_baseurlgenerator__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_enquiry_enquiry_module__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_dashboard_dashboard_module__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_welcomeuser_welcomeuser_module__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_new_sales_activity_new_sales_activity_module__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_find_sales_activity_find_sales_activity_module__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_new_sales_lead_new_sales_lead_module__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_find_location_find_location_module__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_update_job_milestone_update_job_milestone_module__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_search_milestone_search_milestone_module__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_search_jobs_search_jobs_module__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_reset_password_reset_password_module__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_search_job_results_search_job_results_module__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_configure_parameters_configure_parameters_module__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_customer_dashboard_customer_dashboard_module__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_shipment_status_shipment_status_module__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_job_status_job_status_module__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pages_customer_job_search_customer_job_search_module__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__pages_search_port_airport_search_port_airport_module__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__pages_reporting_user_activity_reporting_user_activity_module__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__pages_search_sales_activity_search_sales_activity_module__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__pages_shipment_invoice_shipment_invoice_module__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__pages_popover_popover_module__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__pages_sort_popover_sort_popover_module__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__pages_customer_settings_customer_settings_module__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__pages_search_invoice_search_invoice_module__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__pages_search_invoice_results_search_invoice_results_module__ = __webpack_require__(429);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * @author Sachin Semlety
 * @email sachin.semlety@kalelogistics.in
 * @create date 2018-08-10 11:03:03
 * @modify date 2018-08-10 11:03:03
 * @desc [description]
*/


























































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* CorviApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* CorviApp */], {
                    // platform: 'ios',
                    // Tabs config
                    tabsHideOnSubPages: true,
                }, {
                    links: [
                        { loadChildren: '../pages/_home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/closed-jobs/closed-jobs.module#ClosedJobsPageModule', name: 'ClosedJobsPage', segment: 'closed-jobs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/configure-parameters/configure-parameters.module#ConfigureParametersPageModule', name: 'ConfigureParametersPage', segment: 'configure-parameters', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/customer-dashboard/customer-dashboard.module#CustomerDashboardPageModule', name: 'CustomerDashboardPage', segment: 'customer-dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/customer-job-search/customer-job-search.module#CustomerJobSearchPageModule', name: 'CustomerJobSearchPage', segment: 'customer-job-search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/customer-settings/customer-settings.module#CustomerSettingsPageModule', name: 'CustomerSettingsPage', segment: 'customer-settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/enquiry/enquiry.module#EnquiryPageModule', name: 'EnquiryPage', segment: 'enquiry', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/find-location/find-location.module#FindLocationPageModule', name: 'FindLocationPage', segment: 'find-location', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/find-sales-activity/find-sales-activity.module#FindSalesActivityPageModule', name: 'FindSalesActivityPage', segment: 'find-sales-activity', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/invoices/invoices.module#InvoicesPageModule', name: 'InvoicesPage', segment: 'invoices', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/job-status/job-status.module#JobStatusPageModule', name: 'JobStatusPage', segment: 'job-status', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/new-sales-activity/new-sales-activity.module#NewSalesActivityPageModule', name: 'NewSalesActivityPage', segment: 'new-sales-activity', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/new-sales-lead/new-sales-lead.module#NewSalesLeadPageModule', name: 'NewSalesLeadPage', segment: 'new-sales-lead', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/popover/popover.module#PopoverPageModule', name: 'PopoverPage', segment: 'popover', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/quotation/quotation.module#QuotationPageModule', name: 'QuotationPage', segment: 'quotation', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reporting-user-activity/reporting-user-activity.module#ReportingUserActivityPageModule', name: 'ReportingUserActivityPage', segment: 'reporting-user-activity', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reset-password/reset-password.module#ResetPasswordPageModule', name: 'ResetPasswordPage', segment: 'reset-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search-invoice-results/search-invoice-results.module#SearchInvoiceResultsPageModule', name: 'SearchInvoiceResultsPage', segment: 'search-invoice-results', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search-invoice/search-invoice.module#SearchInvoicePageModule', name: 'SearchInvoicePage', segment: 'search-invoice', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search-job-results/search-job-results.module#SearchJobResultsPageModule', name: 'SearchJobResultsPage', segment: 'search-job-results', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search-jobs/search-jobs.module#SearchJobsPageModule', name: 'SearchJobsPage', segment: 'search-jobs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search-milestone/search-milestone.module#SearchMilestonePageModule', name: 'SearchMilestonePage', segment: 'search-milestone', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search-port-airport/search-port-airport.module#SearchPortAirportPageModule', name: 'SearchPortAirportPage', segment: 'search-port-airport', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search-sales-activity/search-sales-activity.module#SearchSalesActivityPageModule', name: 'SearchSalesActivityPage', segment: 'search-sales-activity', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/shipment-invoice/shipment-invoice.module#ShipmentInvoicePageModule', name: 'ShipmentInvoicePage', segment: 'shipment-invoice', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/shipment-status/shipment-status.module#ShipmentStatusPageModule', name: 'ShipmentStatusPage', segment: 'shipment-status', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sort-popover/sort-popover.module#SortPopoverPageModule', name: 'SortPopoverPage', segment: 'sort-popover', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/update-job-milestone/update-job-milestone.module#UpdateJobMilestonePageModule', name: 'UpdateJobMilestonePage', segment: 'update-job-milestone', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcomeuser/welcomeuser.module#WelcomeuserPageModule', name: 'WelcomeuserPage', segment: 'welcomeuser', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/open-jobs/open-jobs.module#OpenJobsPageModule', name: 'OpenJobsPage', segment: 'open-jobs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule', name: 'DashboardPage', segment: 'dashboard', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home_module__["HomePageModule"],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login_module__["a" /* LoginPageModule */],
                __WEBPACK_IMPORTED_MODULE_13__pages_register_register_module__["a" /* RegisterPageModule */],
                __WEBPACK_IMPORTED_MODULE_14__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_15__pages_quotation_quotation_module__["QuotationPageModule"],
                __WEBPACK_IMPORTED_MODULE_19__pages_closed_jobs_closed_jobs_module__["ClosedJobsPageModule"],
                __WEBPACK_IMPORTED_MODULE_18__pages_open_jobs_open_jobs_module__["OpenJobsPageModule"],
                __WEBPACK_IMPORTED_MODULE_20__pages_invoices_invoices_module__["InvoicesPageModule"],
                __WEBPACK_IMPORTED_MODULE_26__pages_tabs_tabs_module__["TabsPageModule"],
                __WEBPACK_IMPORTED_MODULE_31__pages_enquiry_enquiry_module__["EnquiryPageModule"], __WEBPACK_IMPORTED_MODULE_33__pages_dashboard_dashboard_module__["DashboardPageModule"],
                __WEBPACK_IMPORTED_MODULE_34__pages_welcomeuser_welcomeuser_module__["WelcomeuserPageModule"], __WEBPACK_IMPORTED_MODULE_35__pages_new_sales_activity_new_sales_activity_module__["NewSalesActivityPageModule"], __WEBPACK_IMPORTED_MODULE_36__pages_find_sales_activity_find_sales_activity_module__["FindSalesActivityPageModule"],
                __WEBPACK_IMPORTED_MODULE_37__pages_new_sales_lead_new_sales_lead_module__["NewSalesLeadPageModule"], __WEBPACK_IMPORTED_MODULE_38__pages_find_location_find_location_module__["FindLocationPageModule"], __WEBPACK_IMPORTED_MODULE_39__pages_update_job_milestone_update_job_milestone_module__["UpdateJobMilestonePageModule"],
                __WEBPACK_IMPORTED_MODULE_42__pages_reset_password_reset_password_module__["ResetPasswordPageModule"],
                __WEBPACK_IMPORTED_MODULE_40__pages_search_milestone_search_milestone_module__["SearchMilestonePageModule"],
                __WEBPACK_IMPORTED_MODULE_32__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_41__pages_search_jobs_search_jobs_module__["SearchJobsPageModule"],
                __WEBPACK_IMPORTED_MODULE_43__pages_search_job_results_search_job_results_module__["SearchJobResultsPageModule"],
                __WEBPACK_IMPORTED_MODULE_44__pages_configure_parameters_configure_parameters_module__["ConfigureParametersPageModule"], __WEBPACK_IMPORTED_MODULE_45__pages_customer_dashboard_customer_dashboard_module__["CustomerDashboardPageModule"], __WEBPACK_IMPORTED_MODULE_46__pages_shipment_status_shipment_status_module__["ShipmentStatusPageModule"], __WEBPACK_IMPORTED_MODULE_47__pages_job_status_job_status_module__["JobStatusPageModule"],
                __WEBPACK_IMPORTED_MODULE_48__pages_customer_job_search_customer_job_search_module__["CustomerJobSearchPageModule"], __WEBPACK_IMPORTED_MODULE_49__pages_search_port_airport_search_port_airport_module__["SearchPortAirportPageModule"], __WEBPACK_IMPORTED_MODULE_50__pages_reporting_user_activity_reporting_user_activity_module__["ReportingUserActivityPageModule"], __WEBPACK_IMPORTED_MODULE_51__pages_search_sales_activity_search_sales_activity_module__["SearchSalesActivityPageModule"],
                __WEBPACK_IMPORTED_MODULE_52__pages_shipment_invoice_shipment_invoice_module__["ShipmentInvoicePageModule"], __WEBPACK_IMPORTED_MODULE_53__pages_popover_popover_module__["PopoverPageModule"], __WEBPACK_IMPORTED_MODULE_54__pages_sort_popover_sort_popover_module__["SortPopoverPageModule"],
                __WEBPACK_IMPORTED_MODULE_55__pages_customer_settings_customer_settings_module__["CustomerSettingsPageModule"], __WEBPACK_IMPORTED_MODULE_56__pages_search_invoice_search_invoice_module__["SearchInvoicePageModule"], __WEBPACK_IMPORTED_MODULE_57__pages_search_invoice_results_search_invoice_results_module__["SearchInvoiceResultsPageModule"],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* CorviApp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_6__providers_http_service_http_service__["a" /* HttpServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_9__providers_global_global__["a" /* GlobalProvider */],
                __WEBPACK_IMPORTED_MODULE_10__app_global__["a" /* AppState */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_16__providers_network_network__["a" /* NetworkProvider */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_file_opener__["a" /* FileOpener */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_onesignal__["a" /* OneSignal */],
                __WEBPACK_IMPORTED_MODULE_25__providers_push_notification_push_notification__["a" /* PushNotificationProvider */],
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_native_storage__["a" /* NativeStorage */],
                __WEBPACK_IMPORTED_MODULE_28__ionic_native_http__["a" /* HTTP */],
                __WEBPACK_IMPORTED_MODULE_29__ionic_native_spinner_dialog__["a" /* SpinnerDialog */],
                __WEBPACK_IMPORTED_MODULE_30__providers_baseUrlGenerator_baseurlgenerator__["a" /* BaseURLProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__more_more__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__header_header__ = __webpack_require__(668);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pdfviewer_pdfviewer__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_pdf_viewer__ = __webpack_require__(399);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * @author Sachin Semlety
 * @email sachin.semlety@kalelogistics.in
 * @create date 2018-08-10 11:03:21
 * @modify date 2018-08-10 11:03:21
 * @desc [description]
*/






var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__more_more__["a" /* MoreComponent */],
                __WEBPACK_IMPORTED_MODULE_3__header_header__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_4__pdfviewer_pdfviewer__["a" /* Pdfviewer */],
            ],
            imports: [__WEBPACK_IMPORTED_MODULE_5_ng2_pdf_viewer__["b" /* PdfViewerModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_1__more_more__["a" /* MoreComponent */])],
            exports: [__WEBPACK_IMPORTED_MODULE_1__more_more__["a" /* MoreComponent */],
                __WEBPACK_IMPORTED_MODULE_3__header_header__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_4__pdfviewer_pdfviewer__["a" /* Pdfviewer */],
            ], entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__pdfviewer_pdfviewer__["a" /* Pdfviewer */],
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 561:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 233,
	"./af.js": 233,
	"./ar": 234,
	"./ar-dz": 235,
	"./ar-dz.js": 235,
	"./ar-kw": 236,
	"./ar-kw.js": 236,
	"./ar-ly": 237,
	"./ar-ly.js": 237,
	"./ar-ma": 238,
	"./ar-ma.js": 238,
	"./ar-sa": 239,
	"./ar-sa.js": 239,
	"./ar-tn": 240,
	"./ar-tn.js": 240,
	"./ar.js": 234,
	"./az": 241,
	"./az.js": 241,
	"./be": 242,
	"./be.js": 242,
	"./bg": 243,
	"./bg.js": 243,
	"./bm": 244,
	"./bm.js": 244,
	"./bn": 245,
	"./bn.js": 245,
	"./bo": 246,
	"./bo.js": 246,
	"./br": 247,
	"./br.js": 247,
	"./bs": 248,
	"./bs.js": 248,
	"./ca": 249,
	"./ca.js": 249,
	"./cs": 250,
	"./cs.js": 250,
	"./cv": 251,
	"./cv.js": 251,
	"./cy": 252,
	"./cy.js": 252,
	"./da": 253,
	"./da.js": 253,
	"./de": 254,
	"./de-at": 255,
	"./de-at.js": 255,
	"./de-ch": 256,
	"./de-ch.js": 256,
	"./de.js": 254,
	"./dv": 257,
	"./dv.js": 257,
	"./el": 258,
	"./el.js": 258,
	"./en-au": 259,
	"./en-au.js": 259,
	"./en-ca": 260,
	"./en-ca.js": 260,
	"./en-gb": 261,
	"./en-gb.js": 261,
	"./en-ie": 262,
	"./en-ie.js": 262,
	"./en-il": 263,
	"./en-il.js": 263,
	"./en-nz": 264,
	"./en-nz.js": 264,
	"./eo": 265,
	"./eo.js": 265,
	"./es": 266,
	"./es-do": 267,
	"./es-do.js": 267,
	"./es-us": 268,
	"./es-us.js": 268,
	"./es.js": 266,
	"./et": 269,
	"./et.js": 269,
	"./eu": 270,
	"./eu.js": 270,
	"./fa": 271,
	"./fa.js": 271,
	"./fi": 272,
	"./fi.js": 272,
	"./fo": 273,
	"./fo.js": 273,
	"./fr": 274,
	"./fr-ca": 275,
	"./fr-ca.js": 275,
	"./fr-ch": 276,
	"./fr-ch.js": 276,
	"./fr.js": 274,
	"./fy": 277,
	"./fy.js": 277,
	"./gd": 278,
	"./gd.js": 278,
	"./gl": 279,
	"./gl.js": 279,
	"./gom-latn": 280,
	"./gom-latn.js": 280,
	"./gu": 281,
	"./gu.js": 281,
	"./he": 282,
	"./he.js": 282,
	"./hi": 283,
	"./hi.js": 283,
	"./hr": 284,
	"./hr.js": 284,
	"./hu": 285,
	"./hu.js": 285,
	"./hy-am": 286,
	"./hy-am.js": 286,
	"./id": 287,
	"./id.js": 287,
	"./is": 288,
	"./is.js": 288,
	"./it": 289,
	"./it.js": 289,
	"./ja": 290,
	"./ja.js": 290,
	"./jv": 291,
	"./jv.js": 291,
	"./ka": 292,
	"./ka.js": 292,
	"./kk": 293,
	"./kk.js": 293,
	"./km": 294,
	"./km.js": 294,
	"./kn": 295,
	"./kn.js": 295,
	"./ko": 296,
	"./ko.js": 296,
	"./ky": 297,
	"./ky.js": 297,
	"./lb": 298,
	"./lb.js": 298,
	"./lo": 299,
	"./lo.js": 299,
	"./lt": 300,
	"./lt.js": 300,
	"./lv": 301,
	"./lv.js": 301,
	"./me": 302,
	"./me.js": 302,
	"./mi": 303,
	"./mi.js": 303,
	"./mk": 304,
	"./mk.js": 304,
	"./ml": 305,
	"./ml.js": 305,
	"./mn": 306,
	"./mn.js": 306,
	"./mr": 307,
	"./mr.js": 307,
	"./ms": 308,
	"./ms-my": 309,
	"./ms-my.js": 309,
	"./ms.js": 308,
	"./mt": 310,
	"./mt.js": 310,
	"./my": 311,
	"./my.js": 311,
	"./nb": 312,
	"./nb.js": 312,
	"./ne": 313,
	"./ne.js": 313,
	"./nl": 314,
	"./nl-be": 315,
	"./nl-be.js": 315,
	"./nl.js": 314,
	"./nn": 316,
	"./nn.js": 316,
	"./pa-in": 317,
	"./pa-in.js": 317,
	"./pl": 318,
	"./pl.js": 318,
	"./pt": 319,
	"./pt-br": 320,
	"./pt-br.js": 320,
	"./pt.js": 319,
	"./ro": 321,
	"./ro.js": 321,
	"./ru": 322,
	"./ru.js": 322,
	"./sd": 323,
	"./sd.js": 323,
	"./se": 324,
	"./se.js": 324,
	"./si": 325,
	"./si.js": 325,
	"./sk": 326,
	"./sk.js": 326,
	"./sl": 327,
	"./sl.js": 327,
	"./sq": 328,
	"./sq.js": 328,
	"./sr": 329,
	"./sr-cyrl": 330,
	"./sr-cyrl.js": 330,
	"./sr.js": 329,
	"./ss": 331,
	"./ss.js": 331,
	"./sv": 332,
	"./sv.js": 332,
	"./sw": 333,
	"./sw.js": 333,
	"./ta": 334,
	"./ta.js": 334,
	"./te": 335,
	"./te.js": 335,
	"./tet": 336,
	"./tet.js": 336,
	"./tg": 337,
	"./tg.js": 337,
	"./th": 338,
	"./th.js": 338,
	"./tl-ph": 339,
	"./tl-ph.js": 339,
	"./tlh": 340,
	"./tlh.js": 340,
	"./tr": 341,
	"./tr.js": 341,
	"./tzl": 342,
	"./tzl.js": 342,
	"./tzm": 343,
	"./tzm-latn": 344,
	"./tzm-latn.js": 344,
	"./tzm.js": 343,
	"./ug-cn": 345,
	"./ug-cn.js": 345,
	"./uk": 346,
	"./uk.js": 346,
	"./ur": 347,
	"./ur.js": 347,
	"./uz": 348,
	"./uz-latn": 349,
	"./uz-latn.js": 349,
	"./uz.js": 348,
	"./vi": 350,
	"./vi.js": 350,
	"./x-pseudo": 351,
	"./x-pseudo.js": 351,
	"./yo": 352,
	"./yo.js": 352,
	"./zh-cn": 353,
	"./zh-cn.js": 353,
	"./zh-hk": 354,
	"./zh-hk.js": 354,
	"./zh-tw": 355,
	"./zh-tw.js": 355
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 561;

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export findVendorList */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindSalesActivityPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_global__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_http_service_http_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_util_alert_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_util_toast_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var findVendorList = /** @class */ (function () {
    function findVendorList() {
    }
    return findVendorList;
}());

/**
 * Generated class for the FindSalesActivityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FindSalesActivityPage = /** @class */ (function () {
    function FindSalesActivityPage(navCtrl, navParams, globalService, modalCtrl, viewCtrl, nav, menu, toastCtrl, http, alertService, toastService, 
        // public baseURLProvider: BaseURLProvider,
        fb) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.globalService = globalService;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.nav = nav;
        this.menu = menu;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.alertService = alertService;
        this.toastService = toastService;
        this.fb = fb;
        this.BranchTbl = [];
        this.branchCode = '0';
        this.VendorName = '';
        this.VendorCode = '';
        this.customerInfo = [];
        this.responseFormAPI = [];
        this.title = "Find Customer/Lead-Customer";
        this.appBuildConfig = this.globalService.appBuildConfig;
        //  this.branchCode = localStorage.getItem('branchCode');
        this.UserDetails = this.globalService.get('userDetails');
        debugger;
        this.fetchedData = this.navParams.get('searchDetails');
        this.branchCode = this.navParams.get('branchCode');
        // this.BranchTbl = this.UserDetails[Object.keys(this.UserDetails)[1]]["Table4"];
        this.BranchTbl = JSON.parse(localStorage.getItem('BranchTable'));
        this.findList = new findVendorList();
        // debugger
        //     this.bvalue = localStorage.getItem('bvalue');
        //     this.btext = localStorage.getItem('btext');
        this.VenType = 'Lead-Customer';
        this.fromSaleLeadVal = this.navParams.get('fromSaleLeadVal');
        // this.fromSaleLeadVal = this.navParams.get('fromSearch');
    }
    // ionViewDidLoad() {
    //   console.log('ionViewDidLoad FindSalesActivityPage');
    // }
    FindSalesActivityPage.prototype.ionViewDidEnter = function () {
        if (this.fetchedData != undefined) {
            if (this.fetchedData.length != 0) {
                this.branchCode = this.fetchedData.BranchCode;
            }
        }
    };
    FindSalesActivityPage.prototype.backToDashboard = function () {
        this.globalService.setRootPage(__WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard__["a" /* DashboardPage */]);
    };
    FindSalesActivityPage.prototype.ngOnInit = function () {
        // this.branchCode = this.globalService.globalDefaultBranchCode;
    };
    FindSalesActivityPage.prototype.dismissModal = function () {
        // let data = { 'foo': 'bar' };
        // this.viewCtrl.dismiss(data);
        this.viewCtrl.dismiss();
    };
    FindSalesActivityPage.prototype.searchVenderList = function () {
        var _this = this;
        if (this.branchCode == '0') {
            this.toastService.show('Please select branch.', 3000, true, 'top', 'toast-container');
            //this.startDate.focus();
            return;
        }
        this.customerInfo = [];
        this.findList.BranchCode = this.branchCode;
        this.findList.VendorType = this.VenType;
        this.findList.VendorCode = this.VendorCode;
        this.findList.VendorName = this.VendorName;
        this.countOfRec = 0;
        this.http.POST(__WEBPACK_IMPORTED_MODULE_3__constants__["a" /* Constants */].Corvi_Services.GetVendorMasterList, this.findList).then(function (response) {
            console.log('response to check login method: ', response);
            if (response['Table'] == '') {
                _this.toastService.show('Data not found.', 3000, true, 'top', 'toast-container');
                return;
            }
            else {
                //this.customerInfo = response['Table'];
                if (_this.globalService.isCordovaAvailable()) {
                    if (JSON.parse(response)["Table"].length == 0) {
                        _this.toastService.show('Data not found.', 3000, true, 'top', 'toast-container');
                        return;
                    }
                    else {
                        _this.responseFormAPI = response;
                        _this.customerInfo = JSON.parse(_this.responseFormAPI)["Table"];
                        _this.countOfRec = JSON.parse(_this.responseFormAPI)["Table"].length;
                        // this.flag = true;
                    }
                }
                else {
                    _this.customerInfo = response['Table'];
                    _this.countOfRec = response['Table'].length;
                }
            }
            // this.globalService.store('login_resp', response);
        }, function (err) {
            console.log('error Login ', err);
            console.log('response to check service link: ', __WEBPACK_IMPORTED_MODULE_3__constants__["a" /* Constants */].Corvi_Services.Login);
        });
        // }
        // else {
        //   this.globalService.showAlert('Invalid Customer Identity Code')
        // }
        // });
    };
    FindSalesActivityPage.prototype.passDataToNSA = function (custArray) {
        this.globalService.valueForLeadCutomer = custArray;
        this.viewCtrl.dismiss(JSON.stringify(this.globalService.valueForLeadCutomer));
        // // if (this.fromSaleLeadVal == '1') {
        // //   this.globalService.valueForLeadCutomer = custArray;
        // //   this.viewCtrl.dismiss();
        // //   this.globalService.setRootPage(NewSalesLeadPage);
        // //   // this.navCtrl.remove(this.navCtrl.getActive().index - 0, 1,);
        // // } else if (this.fromSaleLeadVal == '5') {
        // //   this.globalService.valueForLeadCutomer = custArray;
        // //   this.viewCtrl.dismiss();
        // //   this.globalService.setRootPage(SearchSalesActivityPage);
        // //   // this.navCtrl.remove(this.navCtrl.getActive().index - 0, 1,);
        // // } else if (this.fromSaleLeadVal == '6') {
        // //   this.globalService.valueForLeadCutomer = custArray;
        // //   this.viewCtrl.dismiss();
        // //   this.globalService.setRootPage(ReportingUserActivityPage);
        // //   // this.navCtrl.remove(this.navCtrl.getActive().index - 0, 1,);
        // // } else {
        // //   this.globalService.valueForLeadCutomer = custArray;
        // //   localStorage.setItem('branchCode', this.branchCode)
        // //   this.globalService.store('customerData', custArray);
        // //   this.viewCtrl.dismiss();
        // //   this.globalService.setRootPage(NewSalesActivityPage);
        // //   // this.navCtrl.remove(this.navCtrl.getActive().index - 0, 1,);
        // // }
        // this.navCtrl.remove(this.navCtrl.getActive().index - 0, 1,);
        // this.globalService.valueForLeadCutomer = custArray;
        // this.navCtrl.remove(this.navCtrl.getActive().index - 0, 1,);
    };
    FindSalesActivityPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-find-sales-activity',template:/*ion-inline-start:"D:\MobileApp\corviBL\corviBL\src\pages\find-sales-activity\find-sales-activity.html"*/'<!--\n  Generated template for the NewSalesActivityPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n\n    <ion-title id="Dashboard" center text-center>\n      {{title}}\n      <ion-icon name=\'close-circle\' (click)=\'dismissModal()\' style=\'float: right;\'></ion-icon>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title center> {{title}}</ion-title>\n    <ion-icon name=\'close-circle\' (click)=\'dismissModal()\' style=\'float: right;\'></ion-icon>\n  </ion-toolbar>\n</ion-header> -->\n\n\n<ion-content padding >\n  <ion-list>\n    <ion-row padding class="">\n      <ion-col col-6>\n        <input [(ngModel)]="VenType" type="radio" class="stv-radio-button" name="Customer" value="Customer"\n          id="Customer" />\n        <label for="Customer">Customer</label>\n      </ion-col>\n      <ion-col col-6>\n        <input [(ngModel)]="VenType" type="radio" class="stv-radio-button" name="Customer" value="Lead-Customer"\n          id="LeadCustomer" checked />\n        <label for="LeadCustomer">Lead-Customer</label>\n      </ion-col>\n    </ion-row>\n\n    <ion-row padding class="ShadowBox13">\n\n      <ion-col col-12>\n        <label>\n          Branch\n        </label>\n        <font color="red" class="margin12">*</font>\n      </ion-col>\n      <ion-col col-12>\n\n        <select disabled id="ddlBrach" name="ddlBrach" [(ngModel)]="branchCode" col-12 placeholder="">\n          <!-- <option [value]="0" disabled selected>Select</option> -->\n          <option *ngFor="let brData of BranchTbl" [value]="brData.BranchCode">{{brData.branch}}</option>\n        </select>\n      </ion-col>\n      <ion-col col-12>\n        <label>\n          Lead-Customer/Customer Name\n        </label>\n      </ion-col>\n      <ion-col col-12>\n\n        <input type="text" [(ngModel)]="VendorName" col-12 placeholder="">\n      </ion-col>\n      <h4><span>OR</span></h4>\n\n      <ion-col col-12>\n        <label>\n          Lead-Customer/Customer Code\n        </label>\n      </ion-col>\n      <ion-col col-12>\n\n        <input type="text" [(ngModel)]="VendorCode" col-12 placeholder="">\n      </ion-col>\n\n    </ion-row>\n\n\n    <ion-row padding>\n      <ion-col col-6>\n        <button ion-button round outline class=" btncancel" (click)="dismissModal();">\n          <ion-icon></ion-icon>\n          Cancel\n        </button>\n      </ion-col>\n\n      <ion-col col-6>\n        <button type="button" ion-button icon-start block class="btnRadius" (click)=\'searchVenderList();\'>\n          <ion-icon></ion-icon>\n          Search\n        </button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12>\n        <label>Search Result: {{countOfRec}} record found</label>\n      </ion-col>\n    </ion-row>\n    <ion-row padding class="ShadowBox13">\n      <ion-col col-12>\n        <table>\n          <tr *ngFor="let item of customerInfo; let i = index">\n            <td>\n              <label>\n                {{item.VendorName}} </label>\n\n              <br>\n              <label>\n                {{item.LocationName}} </label>\n\n            <td style="text-align: right;"><a href="#" (click)="passDataToNSA(item);">Select</a></td>\n            <!-- <td> <input [(ngModel)]="item.Address1" type="hidden" /> </td>\n            <td> <input [(ngModel)]="item.Address2" type="hidden" /> </td>\n            <td> <input [(ngModel)]="item.Address3" type="hidden" /> </td>\n            <td> <input [(ngModel)]="item.BranchName" type="hidden" /> </td>\n            <td> <input [(ngModel)]="item.GSTCategory" type="hidden" /> </td>\n            <td> <input [(ngModel)]="item.GSTRegistrationStatus" type="hidden" /> </td>\n            <td> <input [(ngModel)]="item.LocationCode" type="hidden" /> </td>\n            <td> <input [(ngModel)]="item.LocationID" type="hidden" /> </td>\n            <td> <input [(ngModel)]="item.LocationName" type="hidden" /> </td>\n            <td> <input [(ngModel)]="item.Pincode" type="hidden" /> </td>\n            <td> <input [(ngModel)]="item.VendorCode" type="hidden" /> </td>\n            <td> <input [(ngModel)]="item.VendorId" type="hidden" /> </td>\n            <td> <input [(ngModel)]="item.VendorName" type="hidden" /> </td>\n            <td> <input [(ngModel)]="item.VendorType" type="hidden" /> </td> -->\n            <!-- Address1: "Ideal Plaza"\n            Address2: "Sarat Bose Road"\n            Address3: ""\n            BranchName: "BALMER LAWRIE & CO. LTD - Kolkata"\n            GSTCategory: null\n            GSTIN: null\n            GSTRegistrationStatus: null\n            LocationCode: "IN CCU"\n            LocationID: 117603\n            LocationName: "KOLKATA"\n            Pincode: ""\n            SecretKey: null\n            StateName: null\n            VendorCode: "CCU/CUS/06586"\n            VendorId: 13929\n            VendorName: "OOCL"\n            VendorType: "Lead-Customer" -->\n          </tr>\n          <!-- <tr>\n            <td>\n              <label>\n                Babuline Pharma Pvt. Ltd.\n                Mumbai\n              </label>\n            </td>\n\n            <td><a href="#">Select</a></td>\n          </tr>\n          <tr>\n            <td>\n              <label>\n                BEC Chemicals Pvt. Ltd.\n                Mumbai\n              </label>\n            </td>\n\n            <td><a href="#">Select</a></td>\n          </tr>\n          <tr>\n            <td>\n              <label>\n                Cristopia Energy Systems (I) Pvt. Ltd.\n                Mumbai\n              </label>\n            </td>\n\n            <td><a href="#">Select</a></td>\n          </tr> -->\n        </table>\n      </ion-col>\n\n\n\n    </ion-row>\n\n\n\n  </ion-list>\n</ion-content>\n<ion-footer class="ion-footer">\n\n  <div class="label-white toolbar-background-md" center text-center>\n    © Kale Logistics Solutions Private Limited. {{appBuildConfig.fullYear}} Version {{appBuildConfig.version}}\n  </div>\n</ion-footer>\n'/*ion-inline-end:"D:\MobileApp\corviBL\corviBL\src\pages\find-sales-activity\find-sales-activity.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_global_global__["a" /* GlobalProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["t" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_http_service_http_service__["a" /* HttpServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_util_alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_7__providers_util_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], FindSalesActivityPage);
    return FindSalesActivityPage;
}());

//# sourceMappingURL=find-sales-activity.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__moment_moment__ = __webpack_require__(670);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sort_sort__ = __webpack_require__(671);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_search__ = __webpack_require__(672);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * @author Sachin Semlety
 * @email sachin.semlety@kalelogistics.in
 * @create date 2018-08-17 02:10:54
 * @modify date 2018-08-17 02:10:54
 * @desc [description]
*/




var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__moment_moment__["a" /* MomentPipe */],
                __WEBPACK_IMPORTED_MODULE_2__sort_sort__["a" /* SortPipe */],
                __WEBPACK_IMPORTED_MODULE_3__search_search__["a" /* SearchPipe */]
                // SortPipe
            ],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__moment_moment__["a" /* MomentPipe */],
                __WEBPACK_IMPORTED_MODULE_2__sort_sort__["a" /* SortPipe */], __WEBPACK_IMPORTED_MODULE_3__search_search__["a" /* SearchPipe */]
                // SortPipe
            ]
        })
    ], PipesModule);
    return PipesModule;
}());

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 611:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 613:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 634:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 635:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 636:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 668:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__more_more__ = __webpack_require__(412);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * @author Sachin Semlety
 * @email sachin.semlety@kalelogistics.in
 * @create date 2018-08-17 02:09:25
 * @modify date 2018-08-17 02:09:25
 * @desc [description]
*/



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(popoverCtrl) {
        this.popoverCtrl = popoverCtrl;
        console.log('Hello HeaderComponent Component');
    }
    HeaderComponent.prototype.presentOptions = function (myEvent) {
        // console.log(myEvent);
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__more_more__["a" /* MoreComponent */]);
        popover.present({
            ev: myEvent
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('title'),
        __metadata("design:type", String)
    ], HeaderComponent.prototype, "title", void 0);
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'Corvi-header',template:/*ion-inline-start:"D:\MobileApp\corviBL\corviBL\src\components\header\header.html"*/'<ion-header>\n  <ion-navbar color="primary">\n\n    <ion-title id="Dashboard" center text-center>\n      {{title}}\n    </ion-title>\n\n    <ion-buttons end>\n      <!-- <button ion-button icon-only (click)="presentOptions($event)">\n        <ion-icon name="more"></ion-icon>\n      </button> -->\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n'/*ion-inline-end:"D:\MobileApp\corviBL\corviBL\src\components\header\header.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* PopoverController */]])
    ], HeaderComponent);
    return HeaderComponent;
}());

//# sourceMappingURL=header.js.map

/***/ }),

/***/ 669:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_http_service_http_service__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * @author Sachin Semlety
 * @email sachin.semlety@kalelogistics.in
 * @create date 2018-08-10 11:03:35
 * @modify date 2018-08-10 11:03:35
 * @desc [description]
*/






var HomeDetailPage = /** @class */ (function () {
    function HomeDetailPage(navCtrl, popoverCtrl, menu, globalService, http, event) {
        this.navCtrl = navCtrl;
        this.popoverCtrl = popoverCtrl;
        this.menu = menu;
        this.globalService = globalService;
        this.http = http;
        this.event = event;
        this.slidesArray = __WEBPACK_IMPORTED_MODULE_4__constants__["a" /* Constants */].SlidesJSONArray;
    }
    HomeDetailPage.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.dashboardPageSetup();
        });
    };
    HomeDetailPage.prototype.dashboardPageSetup = function () {
        var _this = this;
        this.globalService.get('userDetails').then(function (userDetails) {
            _this.setUpDashboardCount(userDetails);
        });
    };
    HomeDetailPage.prototype.setUpDashboardCount = function (data, refresher) {
        var DashboardCount = this.globalService.handleJSON(data).Table1[0];
        this.slidesArray[0].count = DashboardCount.QuotationCount;
        this.slidesArray[1].count = DashboardCount.OpenJobCount;
        this.slidesArray[2].count = DashboardCount.CloseJobCount;
        this.slidesArray[3].count = DashboardCount.InvoiceCount;
        this.pieChart = this.getPieChart(DashboardCount);
        this.barChart = this.getBarChart(DashboardCount);
        this.showView = true;
        refresher != undefined && refresher.complete();
    };
    HomeDetailPage.prototype.getPieChart = function (DashboardCount) {
        __WEBPACK_IMPORTED_MODULE_4__constants__["a" /* Constants */].PIE_CHART_DATA.datasets[0].data = [DashboardCount.QuotationCount, DashboardCount.OpenJobCount, DashboardCount.CloseJobCount, DashboardCount.InvoiceCount];
        return this.getChart(this.pieCanvas.nativeElement, 'pie', __WEBPACK_IMPORTED_MODULE_4__constants__["a" /* Constants */].PIE_CHART_DATA);
    };
    HomeDetailPage.prototype.getBarChart = function (DashboardCount) {
        __WEBPACK_IMPORTED_MODULE_4__constants__["a" /* Constants */].BAR_CHART_DATA.datasets[0].data = [DashboardCount.QuotationCount, DashboardCount.OpenJobCount, DashboardCount.CloseJobCount, DashboardCount.InvoiceCount];
        return this.getChart(this.barCanvas.nativeElement, 'bar', __WEBPACK_IMPORTED_MODULE_4__constants__["a" /* Constants */].BAR_CHART_DATA, __WEBPACK_IMPORTED_MODULE_4__constants__["a" /* Constants */].BAR_CHART_OPTIONS);
    };
    HomeDetailPage.prototype.getChart = function (context, chartType, data, options) {
        return new __WEBPACK_IMPORTED_MODULE_2_chart_js___default.a(context, {
            data: data,
            options: options,
            type: chartType,
        });
    };
    HomeDetailPage.prototype.viewDetails = function (page) {
        this.globalService.routePageWithData(page, { 'tabsDisabled': true });
    };
    HomeDetailPage.prototype.setDetails = function (UUID, refresher) {
        var _this = this;
        this.globalService.get('userName')
            .then(function (userId) { return _this.user.UserId = userId; }, function (error) { return console.error(error); });
        this.globalService.get('password')
            .then(function (pwd) { return _this.user.Password = pwd; }, function (error) { return console.error(error); });
        this.user.UserId = UUID;
        this.http.POST(__WEBPACK_IMPORTED_MODULE_4__constants__["a" /* Constants */].Corvi_Services.UserDetails, this.user).then(function (userDetailsResp) {
            _this.globalService.publishEventwithData('app:userDetails', userDetailsResp);
            _this.setUpDashboardCount(userDetailsResp, refresher);
        }, function (err) {
            refresher != undefined && refresher.complete();
            console.log('error Login ', err);
        });
    };
    HomeDetailPage.prototype.doRefresh = function (refresher) {
        this.fetchDashboardDetails(refresher);
    };
    HomeDetailPage.prototype.fetchDashboardDetails = function (refresher) {
        var _this = this;
        this.globalService.get('playerId')
            .then(function (UUID) { return _this.setDetails(UUID, refresher); }, function (error) { return console.error(error); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('pieCanvas'),
        __metadata("design:type", Object)
    ], HomeDetailPage.prototype, "pieCanvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('barCanvas'),
        __metadata("design:type", Object)
    ], HomeDetailPage.prototype, "barCanvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* Slides */])
    ], HomeDetailPage.prototype, "slides", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('mySlider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* Slides */])
    ], HomeDetailPage.prototype, "slider", void 0);
    HomeDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home-detail',template:/*ion-inline-start:"D:\MobileApp\corviBL\corviBL\src\pages\_home\home-detail-page.html"*/'<ion-content>\n  <ion-card>\n    <ion-label>Total Enquiries : 10</ion-label>\n    <ion-slides autoplay="3000" pager slidesPerView="1" effect=\'coverflow\'>\n      <ion-slide *ngFor="let slide of slidesArray" class="text-center slider-item" (click)="viewDetails(slide.page)"\n        [ngStyle]="{\'background\': slide.bgColor}">\n        <div class="slide-text">\n          <h2 class="h2customClass">{{slide.title}}</h2>\n          <p text-center class="pCustomcls">{{slide.count}} </p>\n        </div>\n      </ion-slide>\n    </ion-slides>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n      Pie Chart\n    </ion-card-header>\n    <ion-card-content>\n      <canvas #pieCanvas></canvas>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n      Bar Chart\n    </ion-card-header>\n    <ion-card-content>\n      <canvas #barCanvas></canvas>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n\n'/*ion-inline-end:"D:\MobileApp\corviBL\corviBL\src\pages\_home\home-detail-page.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* MenuController */], __WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_http_service_http_service__["a" /* HttpServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
    ], HomeDetailPage);
    return HomeDetailPage;
}());

//# sourceMappingURL=home-detail-page.js.map

/***/ }),

/***/ 670:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MomentPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * @author Sachin Semlety
 * @email sachin.semlety@kalelogistics.in
 * @create date 2018-08-17 02:10:51
 * @modify date 2018-08-17 02:10:51
 * @desc [description]
*/


var MomentPipe = /** @class */ (function () {
    function MomentPipe() {
    }
    MomentPipe.prototype.transform = function (value, args) {
        args = args || '';
        return args === 'ago' ? __WEBPACK_IMPORTED_MODULE_1_moment___default()(value).fromNow() : args === 'date-MM/DD/YYYY' ? __WEBPACK_IMPORTED_MODULE_1_moment___default()(value, 'MM/DD/YYYY').format('DD') : args === 'date-DD/MM/YYYY' ? __WEBPACK_IMPORTED_MODULE_1_moment___default()(value, 'DD/MM/YYYY').format('DD') : args === 'month-MM/DD/YYYY' ? __WEBPACK_IMPORTED_MODULE_1_moment___default()(value, 'MM').format('MMM') : args === 'month-DD/MM/YYYY' ? __WEBPACK_IMPORTED_MODULE_1_moment___default()(value, 'DD/MM/YYYY').format('MMM') : args === 'date' ? __WEBPACK_IMPORTED_MODULE_1_moment___default()(value, 'MM/DD/YYYY').year() : __WEBPACK_IMPORTED_MODULE_1_moment___default()(value).format(args);
    };
    MomentPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'moment'
        })
    ], MomentPipe);
    return MomentPipe;
}());

//# sourceMappingURL=moment.js.map

/***/ }),

/***/ 671:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SortPipe = /** @class */ (function () {
    function SortPipe() {
    }
    SortPipe.prototype.transform = function (array, args) {
        return array.sort(function (a, b) {
            if (a[args.property] < b[args.property]) {
                return -1 * args.order;
            }
            else if (a[args.property] > b[args.property]) {
                return 1 * args.order;
            }
            else {
                return 0;
            }
        });
    };
    SortPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'sort',
        })
    ], SortPipe);
    return SortPipe;
}());

//# sourceMappingURL=sort.js.map

/***/ }),

/***/ 672:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchPipe = /** @class */ (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (items, terms) {
        if (!items)
            return [];
        if (!terms)
            return items;
        terms = terms.toLowerCase();
        return items.filter(function (it) {
            console.log('from search pipe: ', it);
            return it.BillingNo.toLowerCase().includes(terms); // only filter country name
        });
    };
    SearchPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'search',
        })
    ], SearchPipe);
    return SearchPipe;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 690:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CorviApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_global__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_global_global__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__constants__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_network_network__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_push_notification_push_notification__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__ = __webpack_require__(440);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * @author Sachin Semlety
 * @email sachin.semlety@kalelogistics.in
 * @create date 2018-08-10 11:02:49
 * @modify date 2018-08-10 11:02:49
 * @desc [description]
*/







// import { HomePage } from '../pages/_home/home';





var CorviApp = /** @class */ (function () {
    function CorviApp(platform, statusBar, splashscreen, global, menuCtrl, app, globalService, networkProvider, events, pushNotification, alertCtrl) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashscreen = splashscreen;
        this.global = global;
        this.menuCtrl = menuCtrl;
        this.app = app;
        this.globalService = globalService;
        this.networkProvider = networkProvider;
        this.events = events;
        this.pushNotification = pushNotification;
        this.alertCtrl = alertCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
        this.activePage = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__["Subject"]();
        this.placeholder = 'assets/img/person.png';
        this.events.subscribe('user:created', function (profile, time) {
            console.log('Welcome', profile, 'at', time);
            _this.profileType = profile;
            if (_this.profileType == 1) {
                // this.pages = Constants.MENU_PAGES_ARRAY;
                _this.pages = _this.globalService.menuItems;
            }
            if (_this.profileType == 2) {
                // this.pages = Constants.MENU_PAGES_ARRAY_CUST;
                _this.pages = _this.globalService.menuItems;
            }
            if (_this.profileType == 3) {
                _this.pages = __WEBPACK_IMPORTED_MODULE_8__constants__["a" /* Constants */].MENU_PAGES_ARRAY_MANAGER;
            }
        });
        // App Initialisation
        this.initializeApp();
        console.log('from app component: ', localStorage.getItem('profileType'));
        // Stores JSON Array of Pages for Init.
        if (this.profileType == 1) {
            // this.pages = Constants.MENU_PAGES_ARRAY;
            this.pages = this.globalService.menuItems;
        }
        if (this.profileType == 2) {
            this.pages = __WEBPACK_IMPORTED_MODULE_8__constants__["a" /* Constants */].MENU_PAGES_ARRAY_CUST;
        }
        this.activePage.subscribe(function (selectedPage) {
            _this.pages.map(function (page) {
                page.active = page.title === selectedPage.title;
            });
        });
    }
    CorviApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.global.set('theme', '');
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.appVersion = _this.globalService.appConfig.version;
            _this.statusBar.overlaysWebView(false);
            _this.statusBar.backgroundColorByHexString('#104b79');
            _this.splashscreen.hide();
            _this.menuCtrl.enable(false, 'right');
            //Menu Changes based on the platform
            _this.platform.is('android') ? _this.changeMenu(__WEBPACK_IMPORTED_MODULE_8__constants__["a" /* Constants */].MENU.MATERIAL) : _this.platform.is('ios') ? _this.changeMenu(__WEBPACK_IMPORTED_MODULE_8__constants__["a" /* Constants */].MENU.AVATAR) : _this.changeMenu(__WEBPACK_IMPORTED_MODULE_8__constants__["a" /* Constants */].MENU.MATERIAL);
            _this.menuCtrl.swipeEnable(false);
            _this.networkEventInit(); // Network Initialistaion
            _this.handleLogout(); // Event to be received after Logout
            _this.recieveUserDetailsEvent(); // Event to be received userdetails
            _this.setSessionExpired(); // To Expire the current session
            _this.globalService.isCordovaAvailable() &&
                _this.pushNotification.Init(); // Push Notification Initialisation
        });
        // handle back button event
        // this.handleBackEvent();
        this.handleBackEvent2();
    };
    CorviApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.app.getRootNavs()[0].setRoot(page.component, { 'tabsDisabled': true });
        this.activePage.next(page);
    };
    CorviApp.prototype.changeMenu = function (menu) {
        var _this = this;
        // Disables all other sidemenus
        Object.keys(__WEBPACK_IMPORTED_MODULE_8__constants__["a" /* Constants */].MENU).map(function (k) { return _this.menuCtrl.enable(false, __WEBPACK_IMPORTED_MODULE_8__constants__["a" /* Constants */].MENU[k]); });
        // Enables the selected menu
        this.menuCtrl.enable(true, menu);
        // this.menuCtrl.open(menu);
    };
    CorviApp.prototype.handleBackEvent = function () {
        var _this = this;
        this.platform.registerBackButtonAction(function () {
            var activeNav = _this.app.getActiveNavs()[0];
            //console.log("Back button action called");
            var activePage = activeNav.getActive().instance;
            var whitelistPages = ["", __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */], __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */]];
            // if current page is not in whitelistPages
            // then back to home or login page first
            (whitelistPages.indexOf(activePage.constructor) > 0) ? _this.globalService.ExitApp() : _this.app.goBack();
        }, 0);
    };
    CorviApp.prototype.handleBackEvent2 = function () {
        var _this = this;
        this.platform.registerBackButtonAction(function () {
            // Catches the active view
            var nav = _this.app.getActiveNavs()[0];
            var activeView = nav.getActive();
            // Checks if can go back before show up the alert
            if (activeView.name === 'HomePage') {
                if (nav.canGoBack()) {
                    nav.pop();
                }
                else {
                    var alert_1 = _this.alertCtrl.create({
                        title: 'Close the App',
                        message: 'Are you sure?',
                        buttons: [{
                                text: 'Cancel',
                                role: 'cancel',
                                handler: function () {
                                    console.log('** App Exit cancelled! **');
                                }
                            }, {
                                text: 'Yes',
                                handler: function () {
                                    _this.Logout();
                                    _this.platform.exitApp();
                                }
                            }]
                    });
                    alert_1.present();
                }
            }
        });
    };
    CorviApp.prototype.networkEventInit = function () {
        var _this = this;
        // Network Events
        this.networkProvider.initializeNetworkEvents();
        // Offline event
        this.events.subscribe('network:offline', function () {
            _this.globalService.showToast('No Internet Connection!');
        });
        // Online event
        this.events.subscribe('network:online', function () {
            _this.globalService.showToast('Back Online');
        });
    };
    CorviApp.prototype.Logout = function () {
        this.globalService.confirmlogOut();
    };
    CorviApp.prototype.recieveUserDetailsEvent = function () {
        var _this = this;
        this.events.subscribe('app:userDetails', function (userDetails) {
            _this.globalService.get('userDetails')
                .then(function (data) { return _this.setUserName(_this.globalService.handleJSON(data)); }, function (error) { return console.error(error); });
        });
    };
    CorviApp.prototype.setUserName = function (data) {
        var UserName = data.Table[0].LoginName;
        this.UserName = (UserName != undefined || UserName != '' || UserName != null) ? UserName : '';
        var emailID = data.Table[0].Email;
        this.globalService.defaultEmailId = (emailID != undefined || emailID != '' || emailID != null) ? emailID : '';
        this.globalService.defaultUsername = (UserName != undefined || UserName != '' || UserName != null) ? UserName : '';
        // this.globalService.defaultMode = data.Table[6].Mode;
        // this.globalService.defaultService = data.Table[6].Service;
        // this.globalService.defaultJobType = data.Table[6].JobType;
        // console.log('***** check default mode *****: ', this.globalService.defaultMode);
    };
    CorviApp.prototype.setSessionExpired = function () {
        var _this = this;
        this.events.subscribe('login:sessionExpired', function (expireTime) {
            setTimeout(function () {
                _this.setupLoginPage();
            }, expireTime);
        });
    };
    CorviApp.prototype.setupLoginPage = function () {
        this.globalService.clearLocalStorage();
        this.removeViewByClass();
        this.pages = __WEBPACK_IMPORTED_MODULE_8__constants__["a" /* Constants */].MENU_PAGES_ARRAY;
        this.globalService.showAlert('Session Expired !');
        this.events.unsubscribe('login:sessionExpired');
        this.globalService.setRootPage(__WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */]);
    };
    CorviApp.prototype.handleLogout = function () {
        var _this = this;
        this.events.subscribe('app:loggedOut', function (isLoggedOut) {
            isLoggedOut && (_this.pages = __WEBPACK_IMPORTED_MODULE_8__constants__["a" /* Constants */].MENU_PAGES_ARRAY);
        });
    };
    CorviApp.prototype.removeViewByClass = function () {
        var className = this.platform.is('ios') ? 'popover-ios' : 'popover-md';
        this.globalService.hideElementByClass(className);
    };
    CorviApp.prototype.ngOnDestroy = function () {
        this.events.unsubscribe('login:sessionExpired');
        this.events.unsubscribe('app:loggedOut');
        this.events.unsubscribe('network:online');
        this.events.unsubscribe('network:offline');
        this.events.unsubscribe('app:userDetails');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* Nav */])
    ], CorviApp.prototype, "nav", void 0);
    CorviApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\MobileApp\corviBL\corviBL\src\app\app.html"*/'<div class="{{global.state[\'theme\']}}">\n\n\n\n    <!--Side Menu with avatar(IOS)-->\n\n    <ion-menu side="end" [content]="content" id="menu-avatar">\n\n        <ion-content>\n\n            <div #header>\n\n                <ion-row style="align-items:center;justify-content: center;">\n\n                    <ion-col col-6 menuClose style="max-width:40% !important">\n\n                        <img class="user-avatar round" [src]="chosenPicture || placeholder"\n\n                            onerror="this.src=\'assets/img/person.png\'" />\n\n                    </ion-col>\n\n\n\n                </ion-row>\n\n                <div style="justify-content: center;" menuClose>\n\n                    <h3 class="name" style="text-align: center;margin-top: 0px;font-family: monospace;">\n\n                        Hello,{{UserName}}</h3>\n\n                    <!-- <p class="e-mail" style="text-align: center;color: #ffffff;">example@email.com</p> -->\n\n                </div>\n\n            </div>\n\n            <ion-list no-lines>\n\n                <button menuClose ion-item detail-none *ngFor="let p of globalService.menuItems" (click)="openPage(p)"\n\n                    [ngClass]="(p.active)?\'active-menu-item-color\':\'\'">\n\n                    <!-- <ion-icon [name]="p.icon" item-left [ngClass]="(p.icon == \'close\')?\'font-bold\':\'\'"></ion-icon> -->\n\n                    <!-- {{p.title}} -->\n\n                    {{p.title}}\n\n                </button>\n\n            </ion-list>\n\n        </ion-content>\n\n    </ion-menu>\n\n\n\n\n\n    <!--Material Design Menu(Android)-->\n\n    <div class="abc">\n\n        <ion-icon name="close"></ion-icon>\n\n    </div>\n\n    <ion-menu side="end" [content]="content" id="menu-material">\n\n        <ion-content>\n\n            <div class="menu-header">\n\n                <!--material-design-background-->\n\n                <img menuClose class="user-avatar round" [src]="chosenPicture || placeholder"\n\n                    onerror="this.src=\'assets/img/person.png\'" />\n\n                <p menuClose class="name" style="color: #626262;font-weight: bold;font-family: sans-serif;">\n\n                    Hello,{{UserName}}\n\n                </p>\n\n                <!-- <p menuClose class="e-mail">example@email.com</p> -->\n\n            </div>\n\n            <ion-list no-lines>\n\n                <button menuClose ion-item detail-none *ngFor="let p of pages" (click)="openPage(p)"\n\n                    [ngClass]="(p.active)?\'active-menu-item-color\':\'\'">\n\n                    <!-- <ion-icon [name]="p.icon" item-left></ion-icon> -->\n\n                    <!-- {{p.title}} -->\n\n                    {{p.title}}\n\n                </button>\n\n            </ion-list>\n\n        </ion-content>\n\n\n\n        <ion-footer>\n\n            <ion-toolbar id="toolbar">\n\n                <button menuClose="left" ion-item (click)="Logout()">\n\n                    <ion-icon name="power" item-left></ion-icon>\n\n                    <ion-grid>\n\n                        <ion-row>\n\n                            <ion-col>\n\n                                Logout\n\n                            </ion-col>\n\n                            <ion-col text-end style="font-size: 1.2rem;top: 2px;">\n\n                                {{appVersion}}\n\n                            </ion-col>\n\n                        </ion-row>\n\n                    </ion-grid>\n\n                </button>\n\n            </ion-toolbar>\n\n        </ion-footer>\n\n    </ion-menu>\n\n    <!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n    <ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n</div>'/*ion-inline-end:"D:\MobileApp\corviBL\corviBL\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_0__app_global__["a" /* AppState */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_7__providers_global_global__["a" /* GlobalProvider */],
            __WEBPACK_IMPORTED_MODULE_9__providers_network_network__["a" /* NetworkProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_10__providers_push_notification_push_notification__["a" /* PushNotificationProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */]])
    ], CorviApp);
    return CorviApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 691:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_util_toast_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_util_alert_service__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * @author Sachin Semlety
 * @email sachin.semlety@kalelogistics.in
 * @create date 2018-08-10 11:03:43
 * @modify date 2018-08-10 11:03:43
 * @desc [description]
*/





var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]
            ], providers: [
                __WEBPACK_IMPORTED_MODULE_3__providers_util_toast_service__["a" /* ToastService */],
                __WEBPACK_IMPORTED_MODULE_4__providers_util_alert_service__["a" /* AlertService */]
            ]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 692:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register__ = __webpack_require__(357);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * @author Sachin Semlety
 * @email sachin.semlety@kalelogistics.in
 * @create date 2018-08-10 11:03:50
 * @modify date 2018-08-10 11:03:50
 * @desc [description]
*/



var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */]
            ]
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());

//# sourceMappingURL=register.module.js.map

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PushNotificationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_onesignal__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_global__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__http_service_http_service__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { Notifications } from '../../pages/notifications/notifications';
/**
 * @name PushNotificationProvider
 * @author Sachin Semlety
 * @description
 * This Class is used for the Push Notifications of the App.
**/
var PushNotificationProvider = /** @class */ (function () {
    function PushNotificationProvider(oneSignal, global, http) {
        this.oneSignal = oneSignal;
        this.global = global;
        this.http = http;
        // console.log('Hello PushNotificationServiceProvider Provider');
    }
    PushNotificationProvider.prototype.Init = function () {
        var _this = this;
        this.oneSignal.startInit(__WEBPACK_IMPORTED_MODULE_3__constants__["a" /* Constants */].APP_ID, __WEBPACK_IMPORTED_MODULE_3__constants__["a" /* Constants */].GOOOGLE_PROJECT_NUMBER);
        this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
        this.oneSignal.handleNotificationReceived().subscribe(function () {
            // do something when notification is received
        });
        this.oneSignal.handleNotificationOpened().subscribe(function () {
            // do something when a notification is opened
            // this.global.routePage(Notifications)
        });
        // console.log(this.oneSignal.getPermissionSubscriptionState)
        this.oneSignal.endInit();
        // AND THIS METHOD RETURN YOUR DEVICES USER_ID
        this.oneSignal.getIds().then(function (identity) {
            console.log('identity ', identity);
            _this.global.store('playerId', identity.userId);
        });
    };
    PushNotificationProvider.prototype.createNotification = function (item) {
        var _this = this;
        this.global.get('userDetails')
            .then(function (data) { return _this.setDetails(_this.global.handleJSON(data).Table[0].UserId, item); }, function (error) { return console.error(error); });
    };
    PushNotificationProvider.prototype.setDetails = function (userId, item) {
        var _this = this;
        this.global.get('playerId').
            then(function (playerId) { return _this.setNotificationStatus(userId, item, playerId); }, function (error) { return console.error(error); });
    };
    PushNotificationProvider.prototype.setNotificationStatus = function (userId, item, playerId) {
        var _this = this;
        console.log('playerId : ', playerId);
        var obj = {
            "DeviceId": playerId,
            "JobNo": item.JobNo,
            "UserId": userId,
            "WoDetailNo": item.WODetailNo
        };
        this.http.POST(__WEBPACK_IMPORTED_MODULE_3__constants__["a" /* Constants */].Corvi_Services.FollowUp, obj).then(function (res) {
            console.log('notification success ', res);
            _this.global.showToast('Job successfully followed, now you will receive notifications about this job');
        }, function (error) { _this.global.showToast('Something went wrong'); });
    };
    PushNotificationProvider.prototype.getNotification_data_binary = function (playerId, title, msg) {
        return {
            "app_id": __WEBPACK_IMPORTED_MODULE_3__constants__["a" /* Constants */].APP_ID,
            "headings": {
                "en": title
            },
            "contents": {
                "en": msg
            },
            "include_player_ids": [
                playerId
            ]
        };
    };
    PushNotificationProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_onesignal__["a" /* OneSignal */], __WEBPACK_IMPORTED_MODULE_2__global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_4__http_service_http_service__["a" /* HttpServiceProvider */]])
    ], PushNotificationProvider);
    return PushNotificationProvider;
}());

//# sourceMappingURL=push-notification.js.map

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export saveNewSalesActivityPage */
/* unused harmony export emailSending */
/* unused harmony export fetchSalesActivity */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewSalesActivityPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_global__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_http_service_http_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_util_alert_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_util_toast_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__find_sales_activity_find_sales_activity__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










/**
 * Generated class for the NewSalesActivityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var saveNewSalesActivityPage = /** @class */ (function () {
    function saveNewSalesActivityPage() {
    }
    return saveNewSalesActivityPage;
}());

var emailSending = /** @class */ (function () {
    function emailSending() {
    }
    return emailSending;
}());

var fetchSalesActivity = /** @class */ (function () {
    function fetchSalesActivity() {
    }
    return fetchSalesActivity;
}());

var NewSalesActivityPage = /** @class */ (function () {
    function NewSalesActivityPage(navCtrl, navParams, globalService, modalCtrl, nav, menu, toastCtrl, alertCtrl, http, alertService, toastService, 
        // public baseURLProvider: BaseURLProvider,
        fb) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.globalService = globalService;
        this.modalCtrl = modalCtrl;
        this.nav = nav;
        this.menu = menu;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.alertService = alertService;
        this.toastService = toastService;
        this.fb = fb;
        this.UserDetails = [];
        this.BranchTbl = [];
        this.ActivityTbl = [];
        // startDate: String = new Date().toISOString();
        // endtDate: String = new Date().toISOString();
        this.startDate = '';
        this.endtDate = '';
        this.customerData = [];
        this.commMode = '1';
        this.activityType = '1';
        this.priority = '1';
        this.status = '1';
        this.vCode = '';
        this.sTime = '';
        this.bDesc = '';
        this.notes = '';
        this.userID = '';
        this.currDate = new Date();
        this.isenabled = false;
        this.filterActivity = [];
        this.dataFromReporting = [];
        this.fetchedAppointmentId = '';
        this.fetchedUserId = '';
        this.fetchedBranch = '';
        this.VendorIds = 0;
        this.AppointmentId = '0';
        this.title = "New Sales Activity";
        this.appBuildConfig = this.globalService.appBuildConfig;
        this.UserDetails = this.globalService.get('userDetails');
        this.customerData = this.globalService.get('customerData');
        this.filterCustomerData = this.customerData[Object.keys(this.customerData)[1]];
        // this.BranchTbl = this.UserDetails[Object.keys(this.UserDetails)[1]]["Table4"];
        // this.ActivityTbl = this.UserDetails[Object.keys(this.UserDetails)[1]]["Table3"];
        // //this.filterActivity = this.ActivityTbl.filter(t => t.Identifier == 'Activity');
        // this.filterActivityPriority = this.ActivityTbl.filter(t => t.Identifier == 'ActivityPriority');
        // this.filterMode = this.ActivityTbl.filter(t => t.Identifier == 'CommunicationType');
        // this.filterActivityStatus = this.ActivityTbl.filter(t => t.Identifier == 'ActivityStatus');
        this.userID = localStorage.getItem('userId');
        this.saveActivity = new saveNewSalesActivityPage();
        this.emailSend = new emailSending();
        // this.fetchedData = this.navParams.get('searchDetails');
        this.tempBranch = localStorage.getItem('branchCode');
        // if (this.filterCustomerData.VendorName) {
        //   this.isenabled = true;
        // }
        this.fetchSales = new fetchSalesActivity();
        if (this.globalService.valueForLeadCutomer != '') {
            this.VendorName = this.globalService.valueForLeadCutomer.VendorName;
            this.Address1 = this.globalService.valueForLeadCutomer.Address1 + ' ' + this.globalService.valueForLeadCutomer.Address2 + ' ' + this.globalService.valueForLeadCutomer.Address3 + ' ' + this.globalService.valueForLeadCutomer.LocationName + ' ' + this.globalService.valueForLeadCutomer.StateName + this.globalService.valueForLeadCutomer.Pincode;
            this.Address1 = this.Address1.split("undefined");
            this.ContactPerson = this.globalService.valueForLeadCutomer.ContactPerson;
            this.isenabled = true;
        }
    }
    NewSalesActivityPage.prototype.ngOnInit = function () {
        this.branchCode = this.globalService.globalDefaultBranchCode;
        // var now = new Date();
        // var utcString = now.toISOString().substring(0, 19);
        // var year = now.getFullYear();
        // var month = now.getMonth() + 1;
        // var day = now.getDate();
        // var hour = now.getHours();
        // var minute = now.getMinutes();
        // var second = now.getSeconds();
        // var localDatetime = year + "-" +
        //   (month < 10 ? "0" + month.toString() : month) + "-" +
        //   (day < 10 ? "0" + day.toString() : day) + "T" +
        //   (hour < 10 ? "0" + hour.toString() : hour) + ":" +
        //   (minute < 10 ? "0" + minute.toString() : minute) +
        //   utcString.substring(16, 19);
        // var datetimeField = document.getElementById("myDatetimeField");
        // this.startDate = localDatetime;
        // this.endtDate = localDatetime;
        this.status = 5;
        this.commMode = 4;
    };
    NewSalesActivityPage.prototype.ionViewWillEnter = function () {
        var now = new Date();
        now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
        this.startDate = now.toISOString().slice(0, 16);
        this.endtDate = now.toISOString().slice(0, 16);
        this.dataFromReporting = this.navParams.get('data');
        this.fetchedUserId = this.navParams.get('RpuserId');
        this.fetchedBranch = this.navParams.get('branch');
        if (typeof (this.dataFromReporting) != 'undefined') {
            console.log('data from.....', this.dataFromReporting);
            this.fetchedAppointmentId = this.dataFromReporting.AppointmentId;
            this.AppointmentId = this.dataFromReporting.AppointmentId;
            //  this.VendorIds = this.dataFromReporting.VendorId;
            console.log('AppointmentId: ', this.fetchedAppointmentId);
            console.log('RpuserId: ', this.fetchedUserId);
            console.log('Branch: ', this.fetchedBranch);
            this.isenabled = true;
            this.fetchSalesActivityFunc();
        }
        var Activity = [];
        var ActivityPriority = [];
        var CommunicationType = [];
        var ActivityStatus = [];
        var BranchTable = [];
        // Activity = this.globalService.get('Activity');
        // ActivityPriority = this.globalService.get('ActivityPriority');
        // CommunicationType = this.globalService.get('CommunicationType');
        // ActivityStatus = this.globalService.get('ActivityStatus');
        // BranchTable = this.globalService.get('BranchTable');
        if (this.globalService.isCordovaAvailable()) {
            this.filterActivity = JSON.parse(localStorage.getItem('Activity'));
            this.filterActivityPriority = JSON.parse(localStorage.getItem('ActivityPriority'));
            this.filterMode = JSON.parse(localStorage.getItem('CommunicationType'));
            this.filterActivityStatus = JSON.parse(localStorage.getItem('ActivityStatus'));
            this.BranchTbl = JSON.parse(localStorage.getItem('BranchTable'));
        }
        else {
            this.filterActivity = JSON.parse(localStorage.getItem('Activity'));
            this.filterActivityPriority = JSON.parse(localStorage.getItem('ActivityPriority'));
            this.filterMode = JSON.parse(localStorage.getItem('CommunicationType'));
            this.filterActivityStatus = JSON.parse(localStorage.getItem('ActivityStatus'));
            this.BranchTbl = JSON.parse(localStorage.getItem('BranchTable'));
            // this.filterActivity = localStorage.getItem('Activity');
            // this.filterActivityPriority = localStorage.getItem('ActivityPriority');
            // this.filterMode = localStorage.getItem('CommunicationType');
            // this.filterActivityStatus = localStorage.getItem('ActivityStatus');
            // this.BranchTbl = localStorage.getItem('BranchTable');
            // localStorage.getItem('Activity');
            // localStorage.getItem('ActivityPriority');
            // localStorage.getItem('CommunicationType');
            // localStorage.getItem('ActivityStatus');
            // localStorage.getItem('BranchTable');
        }
        // this.filterActivity = JSON.parse(Activity.__zone_symbol__value);
        // this.filterActivityPriority = JSON.parse(ActivityPriority.__zone_symbol__value);
        // this.filterMode = JSON.parse(CommunicationType.__zone_symbol__value);
        // this.filterActivityStatus = JSON.parse(ActivityStatus.__zone_symbol__value);
        // this.BranchTbl = JSON.parse(BranchTable.__zone_symbol__value);
    };
    NewSalesActivityPage.prototype.fetchSalesActivityFunc = function () {
        var _this = this;
        this.fetchSales.UserId = this.fetchedUserId;
        this.fetchSales.AppointmentID = this.fetchedAppointmentId.toString();
        this.http.POST(__WEBPACK_IMPORTED_MODULE_3__constants__["a" /* Constants */].Corvi_Services.GetSalesActivityById, this.fetchSales).then(function (response) {
            console.log('single User', response);
            if (response != '') {
                _this.activityType = _this.globalService.handleJSON(response).Table[0].Activity;
                _this.commMode = _this.globalService.handleJSON(response).Table[0].CommunicationMode;
                _this.priority = _this.globalService.handleJSON(response).Table[0].Priority;
                _this.status = _this.globalService.handleJSON(response).Table[0].Status;
                _this.bDesc = _this.globalService.handleJSON(response).Table[0].Remarks;
                _this.notes = _this.globalService.handleJSON(response).Table[0].Note;
                _this.endtDate = _this.globalService.handleJSON(response).Table[0].EndTime;
                _this.startDate = _this.globalService.handleJSON(response).Table[0].StartTime;
                _this.branchCode = _this.fetchedBranch;
                _this.VendorName = _this.globalService.handleJSON(response).Table[0].VendorName;
                //this.Address1 = this.globalService.handleJSON(response).Table[0].Address1;
                _this.Address1 = _this.globalService.handleJSON(response).Table[0].Address1 + ' ' + _this.globalService.handleJSON(response).Table[0].Address2 + ' ' + _this.globalService.handleJSON(response).Table[0].Address3 + ' ' + _this.globalService.handleJSON(response).Table[0].LocationName + ' ' + _this.globalService.handleJSON(response).Table[0].StateName + '  ' + _this.globalService.handleJSON(response).Table[0].Pincode;
                _this.Address1 = _this.Address1.split("undefined");
                _this.ContactPerson = _this.globalService.handleJSON(response).Table[0].VendorPic;
                _this.VendorIds = _this.globalService.handleJSON(response).Table[0].VendorId;
                // if (this.globalService.isCordovaAvailable()) {
                //   this.activityType = JSON.parse(response)["Table"][0].Activity;
                //   this.commMode = JSON.parse(response)["Table"][0].CommunicationMode;
                //   this.priority = JSON.parse(response)["Table"][0].Priority;
                //   this.status = JSON.parse(response)["Table"][0].Status;
                //   this.bDesc = JSON.parse(response)["Table"][0].Remarks;
                //   this.notes = JSON.parse(response)["Table"][0].Note;
                //   this.endtDate = JSON.parse(response)["Table"][0].EndTime;
                //   this.startDate = JSON.parse(response)["Table"][0].StartTime;
                //   this.branchCode = this.fetchedBranch;
                //   this.VendorName = JSON.parse(response)["Table"][0].VendorName;
                //   this.Address1 = JSON.parse(response)["Table"][0].Address1;
                //   this.ContactPerson = JSON.parse(response)["Table"][0].VendorPic;
                // } else {
                //   this.activityType = this.globalService.handleJSON(response).Table[0].Activity;
                //   this.commMode = this.globalService.handleJSON(response).Table[0].CommunicationMode;
                //   this.priority = this.globalService.handleJSON(response).Table[0].Priority;
                //   this.status = this.globalService.handleJSON(response).Table[0].Status;
                //   this.bDesc = this.globalService.handleJSON(response).Table[0].Remarks;
                //   this.notes = this.globalService.handleJSON(response).Table[0].Note;
                //   this.endtDate = this.globalService.handleJSON(response).Table[0].EndTime;
                //   this.startDate = this.globalService.handleJSON(response).Table[0].StartTime;
                //   this.branchCode = this.fetchedBranch;
                //   this.VendorName = this.globalService.handleJSON(response).Table[0].VendorName;
                //   this.Address1 = this.globalService.handleJSON(response).Table[0].Address1;
                //   this.ContactPerson = this.globalService.handleJSON(response).Table[0].VendorPic;
                // }
                //  this.ContactPerson = this.globalService.handleJSON(response).Table[0].VendorPic;
                //  JSON.parse(response)["Table"][0].Address1
                console.log('this.VendorIds', _this.VendorIds);
            }
        });
    };
    NewSalesActivityPage.prototype.openModal = function () {
        var _this = this;
        this.saveActivity.BranchCode = this.branchCode;
        if (this.branchCode == '0') {
            this.toastService.show('Please select branch.', 3000, true, 'top', 'toast-container');
            return;
        }
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_9__find_sales_activity_find_sales_activity__["a" /* FindSalesActivityPage */], { searchDetails: this.saveActivity });
        profileModal.onDidDismiss(function (data) {
            console.log(data);
            if (_this.globalService.valueForLeadCutomer != '') {
                _this.VendorName = _this.globalService.handleJSON(data).VendorName;
                // this.Address1 = this.globalService.handleJSON(data).Address1;
                _this.Address1 = _this.globalService.valueForLeadCutomer.Address1 + ' ' + _this.globalService.valueForLeadCutomer.Address2 + ' ' + _this.globalService.valueForLeadCutomer.Address3 + ' ' + _this.globalService.valueForLeadCutomer.LocationName + ' ' + _this.globalService.valueForLeadCutomer.StateName + '  ' + _this.globalService.valueForLeadCutomer.Pincode;
                _this.Address1 = _this.Address1.split("undefined");
                _this.ContactPerson = _this.globalService.handleJSON(data).ContactPerson;
                _this.VendorIds = _this.globalService.handleJSON(data).VendorId;
                _this.isenabled = true;
            }
            // this.companyName = this.globalService.handleJSON(data).VendorName;
            // this.customerType = this.globalService.handleJSON(data).VendorType;
            // this.addressline1 = this.globalService.handleJSON(data).Address1;
            // this.addressline2 = this.globalService.handleJSON(data).Address2;
            // this.addressline3 = this.globalService.handleJSON(data).Address3;
            // this.Locationid = this.globalService.handleJSON(data).LocationID;
            // this.status = this.globalService.handleJSON(data).Status.toString();
            // this.typeOfIndus = this.globalService.handleJSON(data).TypeofIndustry.toString();
            // this.typeOfCust = this.globalService.handleJSON(data).TypeOfCustomer.toString();
            // this.location = this.globalService.handleJSON(data).LocationName;
            // this.firstname = this.globalService.handleJSON(data).FirstName;
            // this.lastname = this.globalService.handleJSON(data).LastName;
            // this.designation = this.globalService.handleJSON(data).Designation;
            // this.mobileno = this.globalService.handleJSON(data).Mobile;
            // this.contactemail = this.globalService.handleJSON(data).Email;
            // this.pincode = this.globalService.handleJSON(data).Pincode
            // this.vendorname = this.globalService.handleJSON(data).VendorName;
        });
        profileModal.present();
        this.globalService.store('branchCode', this.branchCode);
    };
    NewSalesActivityPage.prototype.ionViewDidLoad = function () {
        //this.branchCode = '0';
        //this.branchCode = localStorage.getItem('branchCode');
        // console.log('ionViewDidLoad NewSalesActivityPage');
        if (this.tempBranch != null) {
            this.branchCode = this.tempBranch;
        }
    };
    NewSalesActivityPage.prototype.ionViewDidLeave = function () {
        this.dataFromReporting = '';
    };
    NewSalesActivityPage.prototype.backToDashboard = function () {
        localStorage.removeItem('branchCode');
        localStorage.removeItem('customerData');
        localStorage.removeItem('branchCode');
        this.globalService.setRootPage(__WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard__["a" /* DashboardPage */]);
    };
    NewSalesActivityPage.prototype.changed = function (endte) {
        // let sdate = this.startDate.slice(0, 10);
        // let stime = this.startDate.slice(11, 16);
        // let sdatTime = sdate + ' ' + stime;
        // let edate = endte.slice(0, 10);
        // let etime = endte.slice(11, 16);
        // let edatTime = edate + ' ' + etime;
        // debugger
        // var a = Date.parse(sdate);
        // var b = Date.parse(edate);
        // debugger
        // var now = new Date();
        // var utcString = now.toISOString().substring(0, 19);
        // var year = now.getFullYear();
        // var month = now.getMonth() + 1;
        // var day = now.getDate();
        // var hour = now.getHours();
        // var minute = now.getMinutes();
        // var second = now.getSeconds();
        // var localDatetime = year + "-" +
        //   (month < 10 ? "0" + month.toString() : month) + "-" +
        //   (day < 10 ? "0" + day.toString() : day) + "T" +
        //   (hour < 10 ? "0" + hour.toString() : hour) + ":" +
        //   (minute < 10 ? "0" + minute.toString() : minute) +
        //   utcString.substring(16, 19);
        // var datetimeField = document.getElementById("myDatetimeField");
        // this.startDate = localDatetime;
        // this.endtDate = localDatetime;
        var a = Date.parse(this.startDate);
        var b = Date.parse(this.endtDate);
        if (b < a) {
            this.toastService.show('End Time should be greater than Start Time.', 3000, true, 'top', 'toast-container');
            return;
        }
        else if (b == a) {
            this.toastService.show('End Time should be greater than Start Time.', 3000, true, 'top', 'toast-container');
            return;
        }
    };
    NewSalesActivityPage.prototype.SalesActivitySave = function () {
        var _this = this;
        if (this.branchCode == '0') {
            this.toastService.show('Please select branch.', 3000, true, 'top', 'toast-container');
            //this.startDate.focus();
            return;
        }
        if (this.globalService.valueForLeadCutomer.BranchName == '') {
            this.toastService.show('Please search company.', 3000, true, 'top', 'toast-container');
            //this.startDate.focus();
            return;
        }
        if (this.contPerson == '') {
            this.toastService.show('Enter contact person.', 3000, true, 'top', 'toast-container');
            //this.startDate.focus();
            return;
        }
        if (this.startDate == '') {
            this.toastService.show('Please select start date.', 3000, true, 'top', 'toast-container');
            //this.startDate.focus();
            return;
        }
        if (this.endtDate == '') {
            this.toastService.show('Please select end date.', 3000, true, 'top', 'toast-container');
            // this.startDate.focus();
            return;
        }
        if (this.bDesc == '') {
            this.toastService.show('Please enter general remarks.', 3000, true, 'top', 'toast-container');
            // this.startDate.focus();
            return;
        }
        var now = new Date();
        var utcString = now.toISOString().substring(0, 19);
        var year = now.getFullYear();
        var month = now.getMonth() + 1;
        var day = now.getDate();
        var hour = now.getHours();
        var minute = now.getMinutes();
        var second = now.getSeconds();
        var localDatetime = year + "-" +
            (month < 10 ? "0" + month.toString() : month) + "-" +
            (day < 10 ? "0" + day.toString() : day) + "T" +
            (hour < 10 ? "0" + hour.toString() : hour) + ":" +
            (minute < 10 ? "0" + minute.toString() : minute) +
            utcString.substring(16, 19);
        var a = Date.parse(this.startDate);
        var b = Date.parse(this.endtDate);
        if (b < a) {
            this.toastService.show('End Time should be greater than Start Time.', 3000, true, 'top', 'toast-container');
            return;
        }
        else if (b == a) {
            this.toastService.show('End Time should be greater than Start Time.', 3000, true, 'top', 'toast-container');
            return;
        }
        this.saveActivity.AppointmentID = this.AppointmentId.toString();
        this.saveActivity.BranchCode = this.branchCode;
        this.saveActivity.CommunicationMode = this.commMode.toString();
        this.saveActivity.ActivityType = this.activityType;
        this.saveActivity.Priority = this.priority;
        this.saveActivity.Status = this.status.toString();
        this.saveActivity.VendorCode = this.VendorIds.toString();
        this.saveActivity.ContactPerson = this.ContactPerson;
        this.saveActivity.StartTime = this.startDate.replace("T", " ");
        this.saveActivity.EndTime = this.endtDate.replace("T", " ");
        ;
        this.saveActivity.BriefDescription = this.bDesc;
        this.saveActivity.Notes = this.notes;
        this.saveActivity.UserId = this.userID;
        this.saveActivity.CreatedDate = localDatetime.replace("T", " ");
        ; //this.currDate;
        this.http.POST(__WEBPACK_IMPORTED_MODULE_3__constants__["a" /* Constants */].Corvi_Services.SalesActivitySave, this.saveActivity).then(function (response) {
            console.log('response to check login method: ', response);
            debugger;
            if (response != '') {
                var str = response;
                _this.OAppointmentID = str.split('~')[1];
                // localStorage.removeItem('login_resp');
                // localStorage.removeItem('userDetails');
                localStorage.removeItem('branchCode');
                localStorage.removeItem('customerData');
                localStorage.removeItem('branchCode');
                _this.sendEmailToManager('Success', 'Activity Saved, Do you want to Email your Sales Activity to your Reporting Manager?');
                // if (confirm('Activity Saved, Do you want to Email your Sales Activity to your Reporting Manager?')) {
                //   this.SendMailSalesActivityToReporting();
                // } else {
                //   this.globalService.setRootPage(DashboardPage);
                //   console.log('Thing was not saved to the database.');
                // }
                // this.toastService.show(response, 3000, true, 'top', 'toast-success');
                // this.globalService.setRootPage(DashboardPage);
                //this.OAppointmentID;
            }
            else {
                _this.sendEmailToManager('Success', 'Activity Saved, Do you want to Email your Sales Activity to your Reporting Manager?');
            }
            // this.globalService.store('login_resp', response);
        }, function (err) {
            console.log('error Login ', err);
            console.log('response to check service link: ', __WEBPACK_IMPORTED_MODULE_3__constants__["a" /* Constants */].Corvi_Services.Login);
        });
        // }
        // else {
        //   this.globalService.showAlert('Invalid Customer Identity Code')
        // }
        // });
    };
    NewSalesActivityPage.prototype.SendMailSalesActivityToReporting = function () {
        debugger;
        this.emailSend.AppointmentID = this.OAppointmentID;
        this.emailSend.UserId = this.userID;
        this.http.POST(__WEBPACK_IMPORTED_MODULE_3__constants__["a" /* Constants */].Corvi_Services.SendMailSalesActivityToReporting, this.emailSend).then(function (response) {
            debugger;
            // if (response != '') {
            //   this.globalService.setRootPage(DashboardPage);
            // }
            // this.globalService.setRootPage(DashboardPage);
        }, function (err) {
            console.log('error Login ', err);
            console.log('response to check service link: ', __WEBPACK_IMPORTED_MODULE_3__constants__["a" /* Constants */].Corvi_Services.Login);
        });
    };
    NewSalesActivityPage.prototype.getSelectedOptionText = function () {
        // debugger
        // alert(this.branchCode);
        // alert(this.branchCode);
        localStorage.setItem('bvalue', this.branchCode);
        // localStorage.setItem('btext', this.branchCode.branch);
    };
    NewSalesActivityPage.prototype.showAlert = function (title, msg) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: title,
            message: msg,
            buttons: [
                {
                    text: 'OK',
                    handler: function () {
                        _this.globalService.setRootPage(__WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard__["a" /* DashboardPage */]);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
            ]
        });
        alert.present();
    };
    NewSalesActivityPage.prototype.sendEmailToManager = function (title, msg) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: title,
            message: msg,
            buttons: [
                {
                    text: 'YES',
                    handler: function () {
                        debugger;
                        _this.SendMailSalesActivityToReporting();
                        _this.globalService.setRootPage(__WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard__["a" /* DashboardPage */]);
                    }
                },
                {
                    text: 'NO',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                        _this.globalService.setRootPage(__WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard__["a" /* DashboardPage */]);
                    }
                },
            ]
        });
        alert.present();
    };
    NewSalesActivityPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-new-sales-activity',template:/*ion-inline-start:"D:\MobileApp\corviBL\corviBL\src\pages\new-sales-activity\new-sales-activity.html"*/'<!--\n  Generated template for the NewSalesActivityPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <!-- <button right ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <button left ion-button menuToggle>\n      <ion-icon name="arrow-back"></ion-icon>\n    </button> -->\n    <ion-title id="Dashboard" center text-center>\n      {{title}}\n    </ion-title>\n\n    <ion-buttons left>\n      <button ion-button icon-only (click)="backToDashboard();">\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-buttons right>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-row padding class="ShadowBox13" style=\'margin-top:10px;\'>\n      <ion-col col-12>\n        <label>\n          Branch\n        </label>\n        <font color="red" class="margin12">*</font>\n      </ion-col>\n      <ion-col col-12>\n\n        <select id="ddlBrach" name="ddlBrach" [(ngModel)]="branchCode" (change)="getSelectedOptionText()" col-12\n          placeholder="">\n          <!-- <option [value]="0" disabled selected>Select</option> -->\n          <option *ngFor="let brData of BranchTbl" [value]="brData.BranchCode">{{brData.branch}}</option>\n\n        </select>\n\n      </ion-col>\n      <ion-col col-6>\n        <label>\n          Communication Mode\n        </label>\n        <font color="red" class="margin12">*</font>\n      </ion-col>\n      <ion-col col-6>\n        <label>\n          Activity\n        </label>\n        <font color="red" class="margin12">*</font>\n      </ion-col>\n      <ion-col col-6>\n\n        <select col-12 placeholder="" [(ngModel)]="commMode">\n          <!-- <option [value]="5" disabled selected>Visit</option> -->\n          <option *ngFor="let acData of filterMode " [value]="acData.KeyValue">{{acData.Description}}</option>\n        </select>\n      </ion-col>\n\n      <ion-col col-6>\n        <select col-12 placeholder="" [(ngModel)]="activityType">\n          <option *ngFor="let acData of filterActivity" [value]="acData.KeyValue">{{acData.Description}}</option>\n        </select>\n      </ion-col>\n      <ion-col col-6>\n        <label>\n          Priority\n        </label>\n        <font color="red" class="margin12">*</font>\n      </ion-col>\n      <ion-col col-6>\n        <label>\n          Status\n        </label>\n        <font color="red" class="margin12">*</font>\n      </ion-col>\n      <ion-col col-6>\n\n        <select col-12 placeholder="" [(ngModel)]="priority">\n          <option *ngFor="let acData of filterActivityPriority" [value]="acData.KeyValue">{{acData.Description}}\n          </option>\n        </select>\n      </ion-col>\n\n\n\n      <ion-col col-6>\n\n        <select col-12 placeholder="" [(ngModel)]="status">\n          <!-- <option [value]="5" disabled selected>Yet to start</option> -->\n          <option *ngFor="let acData of filterActivityStatus" [value]="acData.KeyValue">{{acData.Description}}</option>\n\n        </select>\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row padding class="ShadowBox13">\n\n      <ion-col col-12>\n        <label>\n          Company\n        </label>\n        <font color="red" class="margin12">*</font>\n      </ion-col>\n\n      <ion-col col-10>\n\n        <input maxlength="50" disabled type="text" [(ngModel)]="VendorName" col-12 placeholder="">\n\n      </ion-col>\n      <ion-col col-2>\n        <button ion-fab class="ion-fab34" (click)="openModal();">\n          <ion-icon name="md-search" class=""></ion-icon>\n        </button>\n      </ion-col>\n\n      <ion-col col-12>\n        <label>\n          Address\n        </label>\n      </ion-col>\n\n\n      <ion-col col-12>\n\n        <textarea maxlength="250" col-12 placeholder="" [(ngModel)]="Address1">\n        </textarea>\n      </ion-col>\n\n\n      <ion-col col-12>\n        <label>\n          Contact Person\n        </label>\n        <font color="red" class="margin12">*</font>\n      </ion-col>\n\n      <ion-col col-12 style="margin-top: 5px;">\n\n        <input maxlength="50" col-12 placeholder="" type="text" [(ngModel)]="ContactPerson">\n      </ion-col>\n    </ion-row>\n    <ion-row padding class="ShadowBox13">\n      <ion-col col-4>\n        <label style="line-height: 3;">\n          Start Time\n        </label>\n        <font color="red" class="margin12">*</font>\n      </ion-col>\n\n      <ion-col col-8 style="margin-top: 5px;">\n\n        <input col-12 type="datetime-local" [(ngModel)]="startDate">\n      </ion-col>\n\n      <ion-col col-4>\n        <label style="line-height: 3;">\n          End Time\n        </label>\n        <font color="red" class="margin12">*</font>\n      </ion-col>\n\n      <ion-col col-8 style="margin-top: 5px;">\n\n        <input col-12 type="datetime-local" [(ngModel)]="endtDate" (ngModelChange)="changed($event)">\n      </ion-col>\n\n      <ion-col col-12>\n        <!-- <table>\n          <tr>\n\n            <td>\n              <ion-item>\n                <ion-label style="color: #000;">Start Time</ion-label>\n                <input type="date" displayFormat="DD/MM/YYYY HH:mm" [(ngModel)]="startDate">\n              </ion-item>\n            </td>\n\n          </tr>\n          <tr>\n\n            <td>\n              <ion-item>\n                <ion-label style="color: #000;">End Time</ion-label>\n                <input type="date" displayFormat="DD/MM/YYYY HH:mm" [(ngModel)]="endtDate" (ngModelChange)="changed($event)">\n\n              </ion-item>\n            </td>\n\n          </tr>\n        </table> -->\n      </ion-col>\n      <ion-col col-12>\n        <label>\n          General Remarks\n        </label>\n        <!-- <font color="red" class="margin12">*</font> -->\n      </ion-col>\n      <ion-col col-12>\n\n        <textarea maxlength="1000" col-12 placeholder="" [(ngModel)]="bDesc">\n        </textarea>\n      </ion-col>\n      <ion-col col-12>\n        <label>\n          Notes\n        </label>\n      </ion-col>\n      <ion-col col-12 style="margin-top: 5px;">\n\n        <textarea maxlength="1000" col-12 placeholder="" [(ngModel)]="notes">\n        </textarea>\n      </ion-col>\n\n    </ion-row>\n\n\n\n  </ion-list>\n</ion-content>\n<ion-footer class="ion-footer">\n  <ion-row padding class="">\n    <ion-col col-12>\n      <span style="color: red;">(*) Marks field are mandatory to fill up</span>\n    </ion-col>\n    <ion-col col-6>\n      <button ion-button round outline class="btncancel" (click)="backToDashboard();">\n        <ion-icon></ion-icon>\n        Cancel\n      </button>\n    </ion-col>\n\n    <ion-col col-6>\n      <button ion-button icon-start block class="btnRadius" [disabled]="!isenabled" (click)="SalesActivitySave();">\n        <ion-icon></ion-icon>\n        Save\n      </button>\n    </ion-col>\n  </ion-row>\n  <div class="label-white toolbar-background-md" center text-center>\n    © Kale Logistics Solutions Private Limited. {{appBuildConfig.fullYear}} Version {{appBuildConfig.version}}\n  </div>\n</ion-footer>\n'/*ion-inline-end:"D:\MobileApp\corviBL\corviBL\src\pages\new-sales-activity\new-sales-activity.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_global_global__["a" /* GlobalProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_http_service_http_service__["a" /* HttpServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_util_alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_7__providers_util_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], NewSalesActivityPage);
    return NewSalesActivityPage;
}());

//# sourceMappingURL=new-sales-activity.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export OpenJobListClass */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShipmentStatusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_global__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_http_service_http_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_util_alert_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_util_toast_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__customer_job_search_customer_job_search__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dashboard_dashboard__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__job_status_job_status__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__sort_popover_sort_popover__ = __webpack_require__(389);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












/**
 * Generated class for the ShipmentStatusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OpenJobListClass = /** @class */ (function () {
    function OpenJobListClass() {
    }
    return OpenJobListClass;
}());

var ShipmentStatusPage = /** @class */ (function () {
    function ShipmentStatusPage(navCtrl, navParams, globalService, modalCtrl, nav, menu, toastCtrl, http, alertService, toastService, 
        // public baseURLProvider: BaseURLProvider,
        fb, popCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.globalService = globalService;
        this.modalCtrl = modalCtrl;
        this.nav = nav;
        this.menu = menu;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.alertService = alertService;
        this.toastService = toastService;
        this.fb = fb;
        this.popCtrl = popCtrl;
        this.shipmentAllData = [];
        this.responseFormAPI = [];
        this.searchTerm = "";
        this.flag = false;
        this.closedJobs = [];
        this.milestoneAllData = [];
        this.filterMilestone = [];
        this.gateMileStoneListArr = [];
        this.descending = false;
        this.column = '';
        this.shipmentAllDataFilterd = [];
        this.shipmentAllDataFromJobSearch = [];
        this.title = "Shipment Status";
        this.appBuildConfig = this.globalService.appBuildConfig;
        this.openList = new OpenJobListClass();
        this.userID = localStorage.getItem('userId');
        debugger;
        this.flagJobSearch = localStorage.getItem('flagJobSearch');
        if (this.flagJobSearch == '1') {
            this.shipmentAllDataFilterd = JSON.parse(localStorage.getItem('customerJobSearch'));
            // this.shipmentAllDataFilterd = this.shipmentAllDataFromJobSearch[0];
            this.flagDataFilterData = true;
        }
        else {
            this.OpenJobListShipment();
        }
    }
    ShipmentStatusPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ShipmentStatusPage');
    };
    ShipmentStatusPage.prototype.backToDashboard = function () {
        localStorage.removeItem('branchCode');
        localStorage.removeItem('customerData');
        localStorage.removeItem('branchCode');
        localStorage.removeItem('flagJobSearch');
        this.globalService.setRootPage(__WEBPACK_IMPORTED_MODULE_9__dashboard_dashboard__["a" /* DashboardPage */]);
        // this.globalService.setRootPage(CustomerDashboardPage);
    };
    ShipmentStatusPage.prototype.sort = function () {
        this.descending = !this.descending;
        this.order = this.descending ? 1 : -1;
    };
    ShipmentStatusPage.prototype.openPopOver = function (myEvent) {
        var popover = this.popCtrl.create(__WEBPACK_IMPORTED_MODULE_11__sort_popover_sort_popover__["a" /* SortPopoverPage */]);
        popover.present({
            ev: myEvent
        });
    };
    ShipmentStatusPage.prototype.openSortModel = function () {
        var _this = this;
        var sortModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_11__sort_popover_sort_popover__["a" /* SortPopoverPage */], { cssClass: 'my-modal' });
        sortModal.onDidDismiss(function (data) {
            console.log('check modal data: ', data);
            _this.column = data;
            _this.sort();
        });
        sortModal.present();
    };
    ShipmentStatusPage.prototype.OpenJobListShipment = function () {
        var _this = this;
        this.openList.UserId = this.userID;
        this.openList.Type = 'Open';
        this.http.POST(__WEBPACK_IMPORTED_MODULE_3__constants__["a" /* Constants */].Corvi_Services.OpenJobList, this.openList).then(function (response) {
            // console.log('response to check login method: ', response);
            // if (response['Table'] == '') {
            //   this.toastService.show('Data not found.', 3000, true, 'top', 'toast-container');
            //   return;
            // } else {
            //   debugger
            //   this.shipmentAllData = response['Table'];
            // }
            if (response['Table'] == '') {
                _this.toastService.show('Data not found.', 3000, true, 'top', 'toast-container');
                return;
            }
            else {
                if (_this.globalService.isCordovaAvailable()) {
                    _this.flagDataAllData = true;
                    _this.flagDataFilterData = false;
                    _this.responseFormAPI = response;
                    _this.shipmentAllData = JSON.parse(_this.responseFormAPI)["Table"];
                    _this.milestoneAllData = JSON.parse(_this.responseFormAPI)["Table1"];
                }
                else {
                    _this.flagDataAllData = true;
                    _this.flagDataFilterData = false;
                    _this.shipmentAllData = response['Table'];
                    _this.milestoneAllData = response['Table1'];
                    //  this.setClonedArray();
                }
            }
        }, function (err) {
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
    };
    ShipmentStatusPage.prototype.setClonedArray = function () {
        this.clonedItems = this.globalService.clone(this.shipmentAllData);
    };
    ShipmentStatusPage.prototype.goToSearchJob = function (jobDAta) {
        debugger;
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
        this.globalService.setRootPage(__WEBPACK_IMPORTED_MODULE_10__job_status_job_status__["a" /* JobStatusPage */]);
    };
    // this.navCtrl.remove(this.navCtrl.getActive().index - 0, 1,);
    // goToCustomerJobSearch() {
    //   //this.globalService.setRootPage(CustomerJobSearchPage);
    // }
    ShipmentStatusPage.prototype.goToCustomerJobSearch = function () {
        // this.saveActivity.BranchCode = this.branchCode;
        // if (this.branchCode == '0') {
        //   this.toastService.show('Please select branch.', 3000, true, 'top', 'toast-container')
        //   return;
        // }
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_8__customer_job_search_customer_job_search__["a" /* CustomerJobSearchPage */], { searchDetails: '1' });
        profileModal.onDidDismiss(function (data) {
            console.log(data);
            //this.madalDismissData = JSON.stringify(data);
        });
        profileModal.present();
        // this.globalService.store('branchCode', this.branchCode);
    };
    ShipmentStatusPage.prototype.filterItems = function (ev) {
        var _this = this;
        this.closedJobs = this.shipmentAllData;
        var val = ev.target.value;
        if (val == '' || val == undefined) {
            this.OpenJobListShipment();
        }
        console.log('val', val);
        if (val && val.trim() !== '') {
            this.shipmentAllDataFilterd = this.closedJobs.filter(function (item) {
                _this.flagDataAllData = false;
                _this.flagDataFilterData = true;
                console.log('aaa', _this.shipmentAllDataFilterd);
                for (var key in item) {
                    if (item.hasOwnProperty(key)) {
                        var element = item[key];
                        if (String(element).toLowerCase().includes(val.toLowerCase())) {
                            // console.log(item)
                            return item;
                        }
                    }
                }
            });
        }
    };
    //   setFilteredItems() {
    //     this.shipmentAllData = this.shipmentAllData.filterItems(this.searchTerm);
    //   }
    //   filterItems(searchTerm){
    //     return this.shipmentAllData.filter((item) => {
    //          return item.name.toLowerCase().includes(searchTerm.toLowerCase());
    //      });
    //  }
    ShipmentStatusPage.prototype.showSearch = function () {
        this.showSearchBar = true;
        this.searchbar.setFocus();
    };
    ShipmentStatusPage.prototype.onCancel = function (ev) {
        //this.showSearchBar = false;
        //this.OpenJobListShipment();
        ev.target.value = '';
    };
    ShipmentStatusPage.prototype.ionViewWillLeave = function () {
        this.showSearchBar = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('searchbar'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* Searchbar */])
    ], ShipmentStatusPage.prototype, "searchbar", void 0);
    ShipmentStatusPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-shipment-status',template:/*ion-inline-start:"D:\MobileApp\corviBL\corviBL\src\pages\shipment-status\shipment-status.html"*/'<!--\n  Generated template for the NewSalesActivityPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <!-- <button right ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <button left ion-button menuToggle>\n      <ion-icon name="arrow-back"></ion-icon>\n    </button> -->\n    <ion-title id="Dashboard" center text-center>\n      {{title}}\n    </ion-title>\n\n    <ion-buttons left>\n      <button ion-button icon-only (click)="backToDashboard();">\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-buttons right>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  <ion-searchbar #searchbar placeholder="Search..." showCancelButton="never" color="primary" [animated]="true"\n    (ionInput)="filterItems($event)" [(ngModel)]="searchQuery" (ionCancel)="onCancel($event)"></ion-searchbar>\n\n  <ion-toolbar>\n    <ion-label>Jobs - In progress</ion-label>\n    <ion-buttons right>\n      <button ion-button icon-only (click)="openSortModel($event);">\n        <ion-icon ios="ios-funnel" md="md-funnel"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content  padding style="margin-top: 10px;">\n  <ion-list *ngIf=\'flagDataAllData\'>\n    <ion-row class="ShadowBox13"\n      *ngFor="let shipData of shipmentAllData | sort: {property: column, order: order}; let i = index;"\n      (click)="goToSearchJob(shipData);">\n      <div class="column" *ngIf="shipData.Service == \'Import\'">\n        <label>\n          <img src="assets/img/flight.png" *ngIf="shipData.Mode == \'AIR\'" class="">\n          <img src="assets/img/boat-with-containers.png" *ngIf="shipData.Mode == \'OCEAN\'" class="">\n          <img src="assets/img/import.png" class="">\n          <label style="font-size: 15px;" for="">{{shipData.JobDate }}</label>\n        </label>\n      </div>\n      <div class="columnBlue" *ngIf="shipData.Service == \'Export\'">\n        <label>\n          <img src="assets/img/flight.png" *ngIf="shipData.Mode == \'AIR\'" class="">\n          <img src="assets/img/boat-with-containers.png" *ngIf="shipData.Mode == \'OCEAN\'" class="">\n          <img src="assets/img/import.png" class="">\n          <label style="font-size: smaller;" for="">{{shipData.JobDate }}</label>\n        </label>\n      </div>\n      <div class="column1">\n        <h6>\n          {{shipData.MasterNo}}\n        </h6>\n\n      </div>\n      <div class="column2">\n        <label style="color: #0461AA;font-size: 20px;"><b> {{shipData.JobNo}}</b></label><br>\n        <label>{{shipData.Origin + \'/\' +shipData.Destination}} </label>\n      </div>\n      <div class="divW">\n        <img class="imgSize" src="assets/img/Icon - Keyboard Arrow - Up - Dark.png">\n      </div>\n    </ion-row>\n  </ion-list>\n\n\n  <ion-list *ngIf=\'flagDataFilterData\'>\n    <ion-row class="ShadowBox13"\n      *ngFor="let shipData of shipmentAllDataFilterd | sort: {property: column, order: order}; let i = index;"\n      (click)="goToSearchJob(shipData);">\n      <div class="column" *ngIf="shipData.Service == \'Import\'">\n        <label>\n          <img src="assets/img/flight.png" *ngIf="shipData.Mode == \'AIR\'" class="">\n          <img src="assets/img/boat-with-containers.png" *ngIf="shipData.Mode == \'OCEAN\'" class="">\n          <img src="assets/img/import.png" class="">\n          <label style="font-size: 15px;" for="">{{shipData.JobDate }}</label>\n        </label>\n      </div>\n      <div class="columnBlue" *ngIf="shipData.Service == \'Export\'">\n        <label>\n          <img src="assets/img/flight.png" *ngIf="shipData.Mode == \'AIR\'" class="">\n          <img src="assets/img/boat-with-containers.png" *ngIf="shipData.Mode == \'OCEAN\'" class="">\n          <img src="assets/img/import.png" class="">\n          <label style="font-size: smaller;" for="">{{shipData.JobDate }}</label>\n        </label>\n      </div>\n      <div class="column1">\n        <h6>\n          {{shipData.MasterNo}}\n        </h6>\n\n      </div>\n      <div class="column2">\n        <label style="color: #0461AA;font-size: 20px;"><b> {{shipData.JobNo}}</b></label><br>\n        <label>{{shipData.Origin + \'/\' +shipData.Destination}} </label>\n      </div>\n      <div class="divW">\n        <img class="imgSize" src="assets/img/Icon - Keyboard Arrow - Up - Dark.png">\n      </div>\n    </ion-row>\n  </ion-list>\n</ion-content>\n\n\n\n\n<ion-footer class="ion-footer">\n  <ion-row padding class="">\n\n    <ion-col col-12>\n      <button ion-button icon-start block round class="btnRadius" (click)="goToCustomerJobSearch();">\n        <ion-icon></ion-icon>\n        Search Job\n      </button>\n    </ion-col>\n  </ion-row>\n  <div class="label-white toolbar-background-md" center text-center>\n    © Kale Logistics Solutions Private Limited. {{appBuildConfig.fullYear}} Version {{appBuildConfig.version}}\n  </div>\n</ion-footer>\n'/*ion-inline-end:"D:\MobileApp\corviBL\corviBL\src\pages\shipment-status\shipment-status.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_global_global__["a" /* GlobalProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_http_service_http_service__["a" /* HttpServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_util_alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_7__providers_util_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* PopoverController */]])
    ], ShipmentStatusPage);
    return ShipmentStatusPage;
}());

//# sourceMappingURL=shipment-status.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseURLProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global_global__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * @name BaseURLProvider
 * @author Sachin Semlety
 * @description
 * This Class is used to set the global Operations for the app.
**/
var BaseURLProvider = /** @class */ (function () {
    /*Configuration for the app */
    function BaseURLProvider(global) {
        this.global = global;
    }
    BaseURLProvider.prototype.setBaseURL = function (CompanyCode) {
        switch (CompanyCode) {
            case 'ISF':
                // this.global.store('PDFURL', '192.168.10.22/staging/');
                return this.global.setBaseURL('baseURL', 'http://10.22.2.31:8080/CORVI_SF_MOB_API/MobileApi/');
            case 'IBL':
                // this.global.store('PDFURL', '192.168.10.22/staging/');
                return this.global.setBaseURL('baseURL', 'http://10.22.2.31:8080/CORVI_SOMA_MOB_API/MobileApi/');
            // return this.global.setBaseURL('baseURL', 'https://lmsinv.balmerlawrie.co.in/Mobapi/MobileAPI/');
            case 'EFS':
                // this.global.store('PDFURL', '192.168.10.22/staging/');
                return this.global.setBaseURL('baseURL', 'http://212.107.125.154/CORVI_MOB_API/MobileApi/');
            case 'GLX':
                // this.global.store('PDFURL', '192.168.10.22/staging/');
                return this.global.setBaseURL('baseURL', 'http://104.211.244.239/CORVI_MOB_API/MobileApi/');
            case 'HMT':
                // this.global.store('PDFURL', '192.168.10.22/staging/');
                return this.global.setBaseURL('baseURL', 'http://52.172.36.110/Harmes_CORVI_MOB_API/MobileApi/');
            case 'SUD':
                // this.global.store('PDFURL', '192.168.10.22/staging/');
                return this.global.setBaseURL('baseURL', 'http://52.172.36.110/Sudarshan_CORVI_MOB_API/MobileApi/');
            case 'BML':
                // this.global.store('PDFURL', 'http://125.19.68.249/Staging/');
                return this.global.setBaseURL('baseURL', 'https://lms.balmerlawrie.co.in/MobapiLive/MobileAPI/');
            // return this.global.setBaseURL('baseURL', 'https://lms.balmerlawrie.co.in/Mobapi/MobileAPI/');
            case 'BLL':
                // this.global.store('PDFURL', '192.168.10.22/staging/');
                return this.global.setBaseURL('baseURL', 'https://lms.balmerlawrie.co.in/MobapiLive/MobileAPI/');
            // return this.global.setBaseURL('baseURL', 'https://lms.balmerlawrie.co.in/Mobapi/MobileAPI/');
            case 'SIC':
                // this.global.store('PDFURL', '192.168.10.22/staging/');
                return this.global.setBaseURL('baseURL', 'https://lms.balmerlawrie.co.in/Mobapi/MobileAP/');
            case 'DEM':
                // this.global.store('PDFURL', '192.168.10.22/staging/');
                return this.global.setBaseURL('baseURL', 'http://104.211.164.207/MobileApi/MobileApi/');
            case 'SSF':
                this.global.store('PDFURL', '192.168.10.22/staging/');
                return this.global.setBaseURL('baseURL', 'http://192.168.10.22/StagingMobileApi/MobileApi/');
        }
    };
    BaseURLProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__global_global__["a" /* GlobalProvider */]])
    ], BaseURLProvider);
    return BaseURLProvider;
}());

//# sourceMappingURL=baseurlgenerator.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export searchInvoiceList */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShipmentInvoicePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_http_service_http_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_util_toast_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__popover_popover__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__search_invoice_search_invoice__ = __webpack_require__(385);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var searchInvoiceList = /** @class */ (function () {
    function searchInvoiceList() {
    }
    return searchInvoiceList;
}());

var ShipmentInvoicePage = /** @class */ (function () {
    function ShipmentInvoicePage(navCtrl, navParams, globalService, http, toastCtrl, toastService, popCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.globalService = globalService;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.toastService = toastService;
        this.popCtrl = popCtrl;
        this.responseFormAPI = [];
        this.toggled = false;
        this.closedJobs = [];
        this.title = 'Shipment Invoice';
        this.appBuildConfig = this.globalService.appBuildConfig;
        this.userId = localStorage.getItem('userId');
        this.invoiceList = new searchInvoiceList();
        this.shipmentInvoiceList();
        this.toggled = false;
    }
    ShipmentInvoicePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ShipmentInvoicePage');
    };
    ShipmentInvoicePage.prototype.goBack = function () {
        this.globalService.setRootPage(__WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard__["a" /* DashboardPage */]);
    };
    ShipmentInvoicePage.prototype.toggle = function () {
        console.log('toggle clicked !');
        this.toggled = !this.toggled;
    };
    ShipmentInvoicePage.prototype.shipmentInvoiceList = function () {
        var _this = this;
        this.invoiceList.UserId = this.userId;
        this.invoiceList.Type = 'Open';
        this.http.POST(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* Constants */].Corvi_Services.InvoiceList, this.invoiceList).then(function (response) {
            console.log('response to check shipment invoice list method: ', response);
            if (response['Table'] == '') {
                _this.toastService.show('Data not found.', 3000, true, 'top', 'toast-container');
                return;
            }
            else {
                // this.shipmentInvoiceData = response['Table'];
                if (_this.globalService.isCordovaAvailable()) {
                    debugger;
                    _this.responseFormAPI = response;
                    _this.shipmentInvoiceData = JSON.parse(_this.responseFormAPI)["Table"];
                    if (_this.shipmentInvoiceData == '') {
                        _this.toastService.show('Data not found.', 3000, true, 'top', 'toast-container');
                    } //new if
                    // this.flag = true;
                }
                else {
                    _this.shipmentInvoiceData = response['Table'];
                    console.log('check invoices here: ', _this.shipmentInvoiceData.length);
                }
            }
            // this.globalService.store('login_resp', response);
        }, function (err) {
            console.log('error Login ', err);
            console.log('response to check service link: ', __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* Constants */].Corvi_Services.Login);
        });
    };
    ShipmentInvoicePage.prototype.ionViewDidEnter = function () {
        // this.invoiceList.UserId = this.userId;
        // this.http.POST(Constants.Corvi_Services.InvoiceList, this.invoiceList).then((response) => {
        //   console.log('check invoices here: ', response);
        // })
    };
    ShipmentInvoicePage.prototype.filterItems = function (ev) {
        console.log('check ev: ', ev.value);
        this.closedJobs = this.shipmentInvoiceData;
        var val = ev.value;
        if (val == '' || val == undefined) {
            this.shipmentInvoiceList();
        }
        // if (val && val.trim() !== '') {
        //   this.shipmentInvoiceData = this.closedJobs.filter((item) => {
        //     for (const key in item) {
        //       if (item.hasOwnProperty(key)) {
        //         const element = item[key];
        //         if (String(element).toLowerCase().includes(val.toLowerCase())) {
        //           return item;
        //         }
        //       }
        //     }
        //   });
        // }
        if (val && val.trim() != '') {
            this.shipmentInvoiceData = this.closedJobs.filter(function (item) {
                return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    ShipmentInvoicePage.prototype.onCancel = function (ev) {
        //this.showSearchBar = false;
        //this.OpenJobListShipment();
        ev.target.value = '';
    };
    ShipmentInvoicePage.prototype.goToSearchInvoice = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__search_invoice_search_invoice__["a" /* SearchInvoicePage */]);
    };
    ShipmentInvoicePage.prototype.testWorld = function () {
        console.log('icon clicked !');
    };
    ShipmentInvoicePage.prototype.openPopOver = function (myEvent, data) {
        var popover = this.popCtrl.create(__WEBPACK_IMPORTED_MODULE_7__popover_popover__["a" /* PopoverPage */], { popoverData: data });
        popover.present({
            ev: myEvent
        });
    };
    ShipmentInvoicePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-shipment-invoice',template:/*ion-inline-start:"D:\MobileApp\corviBL\corviBL\src\pages\shipment-invoice\shipment-invoice.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title center text-center>\n      {{title}}\n    </ion-title>\n\n    <!-- <ion-buttons right>\n       <button ion-button icon-only>\n        <ion-icon ios="ios-search" md="md-search"></ion-icon>\n    </button>\n\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-buttons> -->\n\n    <ion-buttons right class="iconDiv">\n      <button ion-button icon-only (click)="toggle()">\n        <ion-icon ios="ios-search" md="md-search"></ion-icon>\n      </button>\n\n      <button ion-button icon-only menuToggle>\n        <ion-icon ios="ios-menu" md="md-menu"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-buttons left>\n      <button ion-button icon-only (click)="goBack();">\n        <ion-icon name="ios-arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n\n\n    <!-- <ion-buttons right>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons> -->\n\n\n  </ion-navbar>\n  <!-- <ion-searchbar\n       *ngIf="toggled" (ionInput)="filterItems($event)" (ionCancel)="onCancel($event)" [(ngModel)]="terms">\n    </ion-searchbar> -->\n\n    <ion-searchbar\n       *ngIf="toggled" (ionCancel)="onCancel($event)" [(ngModel)]="terms">\n    </ion-searchbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-row class="ShadowBox13" *ngFor="let shipData of shipmentInvoiceData | search: terms; let i = index;">\n    <ion-card>\n      <ion-item>\n        <!-- <div class="column">\n          <label>\n            <ion-icon name="ios-plane-outline"></ion-icon>&nbsp;&nbsp;\n            <ion-icon name="ios-create-outline"></ion-icon>&nbsp;&nbsp;&nbsp;\n            <label for="">{{shipData.InvoiceDate }}</label>\n          </label>\n        </div> -->\n\n        <div class="column" *ngIf="shipData.Service == \'Import\'">\n          <label>\n            <ion-icon *ngIf="shipData.Mode == \'AIR\'" name="plane"></ion-icon>\n            <ion-icon *ngIf="shipData.Mode == \'OCEAN\'" name="boat"></ion-icon>&nbsp;&nbsp;\n            <ion-icon name="create"></ion-icon>&nbsp;&nbsp;\n\n            <!-- <img src="assets/img/flight.png" *ngIf="shipData.Mode == \'AIR\'" class="">\n            <img src="assets/img/boat-with-containers.png" *ngIf="shipData.Mode == \'OCEAN\'" class="">&nbsp;&nbsp;\n            <img src="assets/img/import.png"  class="">&nbsp;&nbsp; -->\n            <label for="">{{shipData.InvoiceDate }}</label>\n          </label>\n        </div>\n\n        <div class="columnBlue" *ngIf="shipData.Service == \'Export\'">\n          <label>\n            <ion-icon *ngIf="shipData.Mode == \'AIR\'" name="plane"></ion-icon>\n            <ion-icon *ngIf="shipData.Mode == \'OCEAN\'" name="boat"></ion-icon>&nbsp;&nbsp;\n            <ion-icon name="create"></ion-icon>&nbsp;&nbsp;\n\n            <!-- <img src="assets/img/flight.png" *ngIf="shipData.Mode == \'AIR\'" class="">\n            <img src="assets/img/boat-with-containers.png" *ngIf="shipData.Mode == \'OCEAN\'" class="">&nbsp;&nbsp;\n            <img src="assets/img/export.png"  class="">&nbsp;&nbsp; -->\n            <label for="">{{shipData.InvoiceDate }}</label>\n          </label>\n        </div>\n\n        <div class="column1">\n          <h4>\n            {{shipData.MasterNo}}\n          </h4>\n        </div>\n      </ion-item>\n\n      <ion-card-content>\n        <div class="column2">\n          <label style="color: #0461AA;font-size: 16px;"><b> {{shipData.BillingNo}}</b></label><br>\n          <ion-row>\n            <ion-col>\n              <label class="labelFont"><b>INVOICE AMT.:</b></label><br />\n              <label class="labelFont">{{shipData.Amount}} </label><br />\n            </ion-col>\n            <ion-col>\n              <label class="labelFont"><b>JOB NO.:</b></label><br />\n              <label class="labelFont">{{shipData.JobNo}} </label><br />\n            </ion-col>\n            <ion-col col-1>\n              <div class="divW">\n                <!-- <img class="imgSize" src="assets/img/Icon - Keyboard Arrow - Up - Dark.png"> -->\n                <!-- <ion-icon ios="ios-more" md="md-more"></ion-icon> -->\n                <ion-icon name="custom-dots" (click)="openPopOver($event, shipData)"> </ion-icon>\n              </div>\n            </ion-col>\n          </ion-row>\n\n          <!-- <table>\n        <tr>\n        <th>INVOICE AMT.:</th>\n        <th>JOB NO.:</th>\n        <th></th>\n      </tr>\n      <tr>\n        <td>{{shipData.Amount}}</td>\n        <td>{{shipData.BillingNo}}</td>\n        <td>\n          <ion-icon name="more"></ion-icon>\n        </td>\n      </tr>\n      </table> -->\n\n          <label class="labelFont">POL / POD :</label>\n          <label class="labelFont">{{shipData.POL}} / {{shipData.POD}} </label>\n        </div>\n      </ion-card-content>\n    </ion-card>\n  </ion-row>\n\n  <!-- <ion-list> -->\n\n  <!-- <ion-row class="ShadowBox13" *ngFor="let shipData of shipmentInvoiceData; let i = index;">\n      <div class="column">\n        <label>\n          <span>&#9992;</span>&nbsp;&nbsp;\n          <ion-icon name="create"></ion-icon>&nbsp;&nbsp;&nbsp;\n          <label for="">{{shipData.HouseDate }}</label>\n        </label>\n      </div>\n      <div class="column1">\n        <h4>\n          {{shipData.MasterNo}}\n        </h4>\n\n      </div>\n      <div class="column2">\n        <label style="color: #0461AA;font-size: 20px;"><b> {{shipData.JobNo}}</b></label><br>\n        <label>{{shipData.POL}} </label>\n      </div>\n      <div class="divW">\n        <img class="imgSize" src="assets/img/Icon - Keyboard Arrow - Up - Dark.png">\n      </div>\n\n    </ion-row>\n\n  </ion-list> -->\n\n</ion-content>\n<ion-footer class="ion-footer">\n  <ion-row padding class="">\n    <ion-col col-12>\n      <button ion-button class="btnRadius" icon-start block (click)="goToSearchInvoice()">\n        <ion-icon></ion-icon>\n        Search Invoice\n      </button>\n    </ion-col>\n  </ion-row>\n  <div class="label-white toolbar-background-md" center text-center style="background-color: #0461b2;color: #fff;">\n    © Kale Logistics Solutions Private Limited. {{appBuildConfig.fullYear}} Version {{appBuildConfig.version}}\n  </div>\n</ion-footer>\n'/*ion-inline-end:"D:\MobileApp\corviBL\corviBL\src\pages\shipment-invoice\shipment-invoice.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_http_service_http_service__["a" /* HttpServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ToastController */], __WEBPACK_IMPORTED_MODULE_5__providers_util_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* PopoverController */]])
    ], ShipmentInvoicePage);
    return ShipmentInvoicePage;
}());

//# sourceMappingURL=shipment-invoice.js.map

/***/ })

},[489]);
//# sourceMappingURL=main.js.map