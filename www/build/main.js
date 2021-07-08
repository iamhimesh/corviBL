webpackJsonp([2],{

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_opener__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_pdfviewer_pdfviewer__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_native_storage__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_crypto_js__ = __webpack_require__(601);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_crypto_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_crypto_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_spinner_dialog__ = __webpack_require__(127);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_opener__["a" /* FileOpener */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_11__ionic_native_spinner_dialog__["a" /* SpinnerDialog */]])
    ], GlobalProvider);
    return GlobalProvider;
}());

//# sourceMappingURL=global.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_http_service_http_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__quotation_quotation__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__open_jobs_open_jobs__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__closed_jobs_closed_jobs__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__invoices_invoices__ = __webpack_require__(140);
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
    function HomePage(navCtrl, popoverCtrl, menu, globalService, http, event) {
        this.navCtrl = navCtrl;
        this.popoverCtrl = popoverCtrl;
        this.menu = menu;
        this.globalService = globalService;
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('pieCanvas'),
        __metadata("design:type", Object)
    ], HomePage.prototype, "pieCanvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('barCanvas'),
        __metadata("design:type", Object)
    ], HomePage.prototype, "barCanvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('mySlider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Slides */])
    ], HomePage.prototype, "slider", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/himeshpatel/KaleLogistics/Corvi/src/pages/_home/home.html"*/'<!-- <Corvi-header [title]="title"></Corvi-header> -->\n<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title id="Dashboard" center text-center>\n      {{title}}\n    </ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="presentOptions($event)">\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  <ion-toolbar no-border-top mode=\'md\'>\n    <ion-segment mode=\'md\' [(ngModel)]="selectedSegment" (ionChange)="onSegmentChanged($event)">\n      <ion-segment-button value="Enquiry" color="secondary">\n        Enquiry\n      </ion-segment-button>\n      <ion-segment-button value="Quotation">\n        Quotation\n      </ion-segment-button>\n      <ion-segment-button value="Invoice">\n        Invoice\n      </ion-segment-button>\n\n      <ion-segment-button value="Jobs">\n        Jobs\n      </ion-segment-button>\n      <ion-segment-button value="Milestones">\n        Milestones\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n<ion-content class="pop-in">\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <page-home-detail></page-home-detail>\n  <!-- <ion-slides *ngIf="slides && slides.length" #mySlider (ionSlideDidChange)="onSlideChanged($event)">\n    <ion-slide>\n      <page-home-detail></page-home-detail>\n\n    </ion-slide>\n\n    <ion-slide>\n      <page-home-detail></page-home-detail>\n    </ion-slide>\n\n    <ion-slide>\n      <page-home-detail></page-home-detail>\n\n    </ion-slide>\n\n    <ion-slide>\n      <page-home-detail></page-home-detail>\n\n    </ion-slide>\n\n    <ion-slide>\n      <page-home-detail></page-home-detail>\n\n    </ion-slide>\n  </ion-slides> -->\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n  <!-- </div> -->\n</ion-content>'/*ion-inline-end:"/Users/himeshpatel/KaleLogistics/Corvi/src/pages/_home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* MenuController */], __WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_http_service_http_service__["a" /* HttpServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnquiryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_global__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detail_enquiry_cargo_detail__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(41);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-enquiry',template:/*ion-inline-start:"/Users/himeshpatel/KaleLogistics/Corvi/src/pages/enquiry/enquiry.html"*/'<Corvi-header [title]="title" [hidden]="showSearchBar"></Corvi-header>\n<ion-content class="marginTop57">\n  <ion-list>\n    <!-- <ion-list-header>Enquiry Form</ion-list-header> -->\n\n    <ion-item>\n      <ion-label>Select Mode</ion-label>\n      <ion-select placeholder="Select">\n        <ion-option value="air">AIR</ion-option>\n        <ion-option value="ocean">OCEAN</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Select Service</ion-label>\n      <ion-select placeholder="Select">\n        <ion-option value="air">AIR</ion-option>\n        <ion-option value="ocean">OCEAN</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Shipment Type</ion-label>\n      <ion-select placeholder="Select">\n        <ion-option value="air">AIR</ion-option>\n        <ion-option value="ocean">OCEAN</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Shipment Service</ion-label>\n      <ion-select placeholder="Select">\n        <ion-option value="air">AIR</ion-option>\n        <ion-option value="ocean">OCEAN</ion-option>\n      </ion-select>\n    </ion-item>\n\n  </ion-list>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col> <button ion-button icon-start block color="primary" tappable (click)="goToCargoDetailPage()">\n          <ion-icon name="arrow-round-forward"></ion-icon>\n          Proceed\n        </button></ion-col>\n      <ion-col><button ion-button icon-start block color="primary" tappable (click)="goTologinPage()">\n          <ion-icon name="close-circle"></ion-icon>\n          Cancel\n        </button></ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/himeshpatel/KaleLogistics/Corvi/src/pages/enquiry/enquiry.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */]])
    ], EnquiryPage);
    return EnquiryPage;
}());

//# sourceMappingURL=enquiry.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_global__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__new_sales_activity_new_sales_activity__ = __webpack_require__(373);
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
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DashboardPage = /** @class */ (function () {
    function DashboardPage(navCtrl, navParams, menu, globalService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.globalService = globalService;
        this.appBuildConfig = {
            version: 'V1.0.0',
            fullYear: (new Date).getFullYear().toString()
        };
        this.title = "Home";
    }
    DashboardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DashboardPage');
    };
    DashboardPage.prototype.goToNewSalesActivity = function () {
        this.globalService.setRootPage(__WEBPACK_IMPORTED_MODULE_3__new_sales_activity_new_sales_activity__["a" /* NewSalesActivityPage */]);
    };
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dashboard',template:/*ion-inline-start:"/Users/himeshpatel/KaleLogistics/Corvi/src/pages/dashboard/dashboard.html"*/'<!--\n  Generated template for the DashboardPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <Corvi-header [title]="title"></Corvi-header> -->\n<ion-header>\n  <ion-navbar color="primary">\n    <button right ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title id="Dashboard" center text-center>\n      {{title}}\n    </ion-title>\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <img src="assets/img/Corvi_BL_Logo_360x70.png">\n  <ion-row style="margin-top:10px ;" class="text-center">\n    <ion-col col-4 class="text-center box" (click)= \'goToNewSalesActivity();\'>\n      <div class="inner ShadowBox13">\n        <img src="assets/img/add-file.png" class="center">\n        <label>New Sales Activity</label>\n      </div>\n    </ion-col>\n\n    <ion-col col-4 class="text-center box">\n      <div class="inner ShadowBox13">\n        <img src="assets/img/search2.png" class="center">\n        <label>Find Sales Activity</label>\n      </div>\n    </ion-col>\n    <ion-col col-4 class="text-center box">\n      <div class="inner ShadowBox13">\n        <img src="assets/img/Group 3473.png" class="center">\n        <label>New Sales Lead</label>\n      </div>\n    </ion-col>\n  </ion-row>\n  <ion-row style="margin-top:10px ;">\n    <ion-col col-4 class="text-center box">\n      <div class="inner ShadowBox13">\n        <img src="assets/img/Group 3526.png" class="center">\n        <label>New Sales Lead</label>\n      </div>\n    </ion-col>\n    <ion-col col-4 class="text-center box">\n      <div class="inner ShadowBox13">\n        <img src="assets/img/Group 3527.png" class="center">\n        <label>New Sales Lead</label>\n      </div>\n    </ion-col>\n  </ion-row>\n\n  <div class="addOns">\n    <div class="addOnsText" style="margin-top:15px;">\n      <h4>Additional Services</h4>\n    </div>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n            <div class="container">\n                <img src="../assets/img/moreservices.png">\n                <h6>More Services</h6>\n              </div>\n        </ion-col>\n        <ion-col>\n            <div class="container">\n                <img src="../assets/img/contactus.png">\n                <h6>Contact Us</h6>\n              </div>\n        </ion-col>\n        <ion-col>\n            <div class="container">\n                <img src="../assets/img/monitor_support.png">\n                <h6>24 x 7 Support</h6>\n              </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n   \n\n  </div>\n\n</ion-content>\n\n<!-- <ion-footer class="ion-footer">\n  <ion-toolbar>\n    <ion-title class="label-white">Additional Services</ion-title>\n    <ion-row no-padding style="margin-top:10px ;">\n      <ion-col col-4 class="text-center  box">\n        <div class="inner footer-col-color">\n          <img src="assets/img/smartphone_moreservices.png" class="center-footer-img">\n         More Services\n        </div>\n\n      </ion-col>\n      <ion-col col-4 class="text-center box">\n        <div class="inner footer-col-color">\n          <img src="assets/img/phone-call_contactus-1.png" class="center-footer-img">\n          Contact Us\n        </div>\n\n      </ion-col>\n      <ion-col col-4 class="text-center  box">\n        <div class="inner footer-col-color">\n          <img src="assets/img/monitor_support.png" class="center-footer-img">\n          20 x 7 Support\n        </div>\n\n      </ion-col>\n    </ion-row>\n    <div class="label-white" center text-center>\n      © Kale Logistics Solutions Private Limited. {{appBuildConfig.fullYear}} Version {{appBuildConfig.version}}\n    </div>\n  </ion-toolbar>\n\n\n</ion-footer> -->\n\n<ion-footer>\n  <div class = "bar bar-footer">\n    <ion-row>\n      <ion-col col-2></ion-col>\n      <ion-col col-4>\n          <div class="inner footer-col-color">\n              <img src="assets/img/kale_power.png" class="center-footer-img">\n            </div>\n    \n      </ion-col>\n      <ion-col col-2></ion-col>\n    </ion-row>\n      <ion-row>\n        <ion-col col-6>\n      <h6 style="text-align: center;" class = "title">Terms and conditions</h6>\n    </ion-col>\n\n    <ion-col col-6>\n        <h6 style="text-align: center;" class = "title">Privacy Policy</h6>\n      </ion-col>\n    </ion-row>\n   </div>\n</ion-footer>\n\n'/*ion-inline-end:"/Users/himeshpatel/KaleLogistics/Corvi/src/pages/dashboard/dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* MenuController */], __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */]])
    ], DashboardPage);
    return DashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuotationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_global__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_http_service_http_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__quotation_detail_quotation_detail__ = __webpack_require__(387);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-quotation',template:/*ion-inline-start:"/Users/himeshpatel/KaleLogistics/Corvi/src/pages/quotation/quotation.html"*/'<Corvi-header [title]="title" [hidden]="showSearchBar"></Corvi-header>\n<ion-searchbar [hidden]="!showSearchBar" placeholder="Search..." showCancelButton color="primary" [animated]="true"\n  (ionInput)="filterItems($event)" [(ngModel)]="searchQuery" (ionCancel)="onCancel($event)"></ion-searchbar>\n<ion-content class="marginTop57">\n\n  <ion-list [virtualScroll]="quotationList" approxItemHeight="40px">\n    <ion-item-sliding *virtualItem="let item">\n      <ion-item (click)="goToQuotationDetails(item)">\n\n        <ion-avatar item-start>\n          <div class="customised_avatar_Img">\n            {{item.QuotationDate | moment:"date-DD/MM/YYYY"}}\n          </div>\n          <div style="text-align: center">{{item.QuotationDate | moment:"month-DD/MM/YYYY"}}</div>\n        </ion-avatar>\n        <h3>Quotation No : {{item.QuotationNo}}</h3>\n        <p> Quotation Id : {{item.QuotationId }}</p>\n        <!-- <p> Quotation Date : {{item.QuotationDate }}</p> -->\n        <!-- <p>Mode : {{item.Mode}}</p> -->\n        <p>Service : {{item.Service}}</p>\n        <p>Status : {{item.Status}}</p>\n\n      </ion-item>\n    </ion-item-sliding>\n  </ion-list>\n  <br>\n  <br>\n  <br>\n  <div *ngIf="quotationList.length <= 0" style="text-align:center">No Quotation Found</div>\n\n</ion-content>\n\n<ion-fab right bottom #fab1 *ngIf="quotationList.length > 0" [ngClass]="{\'bottom63px\': !tabsDisabled}">\n  <button class="pop-in" ion-fab mini color="primary" [ngClass]="{\'pop-out\': fabGone}" (click)="showSearch()">\n    <ion-icon name="search"></ion-icon>\n  </button>\n</ion-fab>'/*ion-inline-end:"/Users/himeshpatel/KaleLogistics/Corvi/src/pages/quotation/quotation.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_http_service_http_service__["a" /* HttpServiceProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */]])
    ], QuotationPage);
    return QuotationPage;
}());

//# sourceMappingURL=quotation.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpenJobsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_service_http_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_global__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__detail_open_jobs_details__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_util_alert_service__ = __webpack_require__(43);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-open-jobs',template:/*ion-inline-start:"/Users/himeshpatel/KaleLogistics/Corvi/src/pages/open-jobs/open-jobs.html"*/'<Corvi-header [title]="title" [hidden]="showSearchBar"></Corvi-header>\n<ion-searchbar [hidden]="!showSearchBar" placeholder="Search..." showCancelButton color="primary" [animated]="true"\n    (ionInput)="filterItems($event)" [(ngModel)]="searchQuery" (ionCancel)="onCancel($event)"></ion-searchbar>\n<ion-content class="marginTop57">\n\n    <ion-list [virtualScroll]="openJobs" approxItemHeight="40px">\n        <ion-item-sliding *virtualItem="let item">\n            <ion-item>\n                <ion-avatar item-start (click)="goToOpenJobsDetail(item)">\n                    <div class="customised_avatar_Img">\n                        {{item.JobDate | moment:"date-MM/DD/YYYY"}}\n                    </div>\n                    <div style="text-align: center">{{item.JobDate | moment:"month-MM/DD/YYYY"}}</div>\n                </ion-avatar>\n                <ion-label (click)="goToOpenJobsDetail(item)" style="overflow: initial !important;">\n                    <h3>Job No : {{item.JobNo}}</h3>\n                    <p>\n                        {{item.MasterNo}}/{{item.HouseNo}}</p>\n                    <!--Master/House No.-->\n                    <p>{{item.Mode}}/{{item.Service}}</p>\n                    <!--Ocean/Export-->\n                </ion-label>\n                <!-- <ion-toggle [(ngModel)]="item.checked" (ionChange)="updateItem(item)"></ion-toggle> -->\n                <!-- <ion-label icon-only ion-button (click)="updateItem(item)">\n                            <ion-icon name="more"></ion-icon>\n                        </ion-label> -->\n                <ion-label (click)="followJob(item)" text-end>\n                    <ion-icon name="more"></ion-icon>\n                </ion-label>\n            </ion-item>\n\n\n            <!-- <ion-item-options side="right">\n                        <button ion-button color="primary" (click)="ViewPDFNative(item)">\n                            <ion-icon name="information"></ion-icon>\n                            Follow this Job\n                        </button>\n                    </ion-item-options> -->\n        </ion-item-sliding>\n    </ion-list>\n    <br>\n    <br>\n    <br>\n    <div *ngIf="openJobs.length <= 0" style="text-align:center">No open Jobs Found</div>\n\n</ion-content>\n\n<ion-fab right bottom #fab1 *ngIf="openJobs.length > 0" [ngClass]="{\'bottom63px\': !tabsDisabled}">\n    <button class="pop-in" ion-fab mini color="primary" [ngClass]="{\'pop-out\': fabGone}" (click)="showSearch()">\n        <ion-icon name="search"></ion-icon>\n    </button>\n</ion-fab>'/*ion-inline-end:"/Users/himeshpatel/KaleLogistics/Corvi/src/pages/open-jobs/open-jobs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_http_service_http_service__["a" /* HttpServiceProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_util_alert_service__["a" /* AlertService */]])
    ], OpenJobsPage);
    return OpenJobsPage;
}());

//# sourceMappingURL=open-jobs.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClosedJobsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_service_http_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__detail_closed_jobs_details__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_push_notification_push_notification__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_util_alert_service__ = __webpack_require__(43);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('searchbar'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Searchbar */])
    ], ClosedJobsPage.prototype, "searchbar", void 0);
    ClosedJobsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-closed-jobs',template:/*ion-inline-start:"/Users/himeshpatel/KaleLogistics/Corvi/src/pages/closed-jobs/closed-jobs.html"*/'<Corvi-header [title]="title" [hidden]="showSearchBar"></Corvi-header>\n<ion-searchbar #searchbar [hidden]="!showSearchBar" placeholder="Search..." showCancelButton color="primary" [animated]="true"\n    (ionInput)="filterItems($event)" [(ngModel)]="searchQuery" (ionCancel)="onCancel($event)"></ion-searchbar>\n<ion-content class="marginTop57">\n\n    <ion-list [virtualScroll]="closedJobs" approxItemHeight="40px">\n        <ion-item-sliding *virtualItem="let item">\n            <ion-item>\n                <ion-avatar item-start (click)="goToClosedJobsDetail(item)">\n                    <div class="customised_avatar_Img">\n                        {{item.JobDate | moment:"date-MM/DD/YYYY"}}\n                    </div>\n                    <div style="text-align: center">{{item.JobDate | moment:"month-MM/DD/YYYY"}}</div>\n                </ion-avatar>\n                <ion-label (click)="goToClosedJobsDetail(item)" style="overflow: initial !important;">\n                    <h3>Job No : {{item.JobNo}}</h3>\n                    <p>\n                        {{item.MasterNo}}/{{item.HouseNo}}</p>\n                    <!--Master/House No.-->\n                    <p>{{item.Mode}}/{{item.Service}}</p>\n                    <!--Ocean/Export-->\n                    <!-- <p *ngIf="item?.milestones">Last Milestones : {{item.milestones}}</p>\n                    <p *ngIf="item?.weight">Total packages/weight : {{item.weight}}</p> -->\n                </ion-label>\n                <!-- <ion-label (click)="followJob(item)" text-end>\n                    <ion-icon name="more"></ion-icon>\n                </ion-label> -->\n            </ion-item>\n\n\n            <!-- <ion-item-options side="right">\n                <button ion-button color="primary" (click)="ViewPDFNative(item)">\n                    <ion-icon name="information"></ion-icon>\n                    Follow this Job\n                </button>\n            </ion-item-options> -->\n        </ion-item-sliding>\n    </ion-list>\n    <br>\n    <br>\n    <br>\n    <div *ngIf="closedJobs.length <= 0" style="text-align:center">No Closed Jobs Found</div>\n\n</ion-content>\n\n<ion-fab right bottom #fab1 *ngIf="closedJobs.length > 0" [ngClass]="{\'bottom63px\': !tabsDisabled}">\n    <button class="pop-in" ion-fab mini color="primary" [ngClass]="{\'pop-out\': fabGone}" (click)="showSearch()">\n        <ion-icon name="search"></ion-icon>\n    </button>\n</ion-fab>'/*ion-inline-end:"/Users/himeshpatel/KaleLogistics/Corvi/src/pages/closed-jobs/closed-jobs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_http_service_http_service__["a" /* HttpServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_push_notification_push_notification__["a" /* PushNotificationProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_7__providers_util_alert_service__["a" /* AlertService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
    ], ClosedJobsPage);
    return ClosedJobsPage;
}());

//# sourceMappingURL=closed-jobs.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoicesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_service_http_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_push_notification_push_notification__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_util_alert_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__detail_invoices_details__ = __webpack_require__(390);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-invoices',template:/*ion-inline-start:"/Users/himeshpatel/KaleLogistics/Corvi/src/pages/invoices/invoices.html"*/'<Corvi-header [title]="title" [hidden]="showSearchBar"></Corvi-header>\n<ion-searchbar [hidden]="!showSearchBar" placeholder="Search..." showCancelButton color="primary" [animated]="true"\n    (ionInput)="filterItems($event)" [(ngModel)]="searchQuery" (ionCancel)="onCancel($event)"></ion-searchbar>\n\n<ion-content class="marginTop57">\n    <ion-list [virtualScroll]="Invoices" approxItemHeight="40px">\n        <ion-item-sliding *virtualItem="let item">\n            <ion-item>\n                <ion-avatar item-start (click)="gotoInvoiceDetails(item)">\n                    <div class="customised_avatar_Img">\n                        {{item.InvoiceDate | moment:"date-MM/DD/YYYY"}}\n                    </div>\n                    <div style="text-align: center">{{item.InvoiceDate | moment:"month-MM/DD/YYYY"}}</div>\n                </ion-avatar>\n                <ion-label (click)="gotoInvoiceDetails(item)" style="overflow: initial !important;">\n                    <h3>Bill No: {{item.BillingNo}}</h3>\n                    <p *ngIf=\'item?.BillDate\'>Bill Date : {{item.BillDate}}</p>\n                    <p>Job No : {{item.JobNo}}</p>\n                    <!-- <p >Customer: {{item.Customer}}</p> -->\n                    <!-- <p>Detail No : {{item.DetailNo }}</p> -->\n                    <p>Amount : {{item.Amount }}</p>\n                </ion-label>\n            </ion-item>\n\n\n            <ion-item-options side="right">\n                <button ion-button color="primary" (click)="viewPDF(item)">\n                    <ion-icon name="document"></ion-icon>\n                    View PDF\n                </button>\n            </ion-item-options>\n        </ion-item-sliding>\n    </ion-list>\n    <br>\n    <br>\n    <br>\n    <div *ngIf="Invoices.length <= 0" style="text-align:center">No Invoices Found</div>\n\n</ion-content>\n\n<ion-fab right bottom #fab1 *ngIf="Invoices.length > 0" [ngClass]="{\'bottom63px\': !tabsDisabled}">\n    <button class="pop-in" ion-fab mini color="primary" [ngClass]="{\'pop-out\': fabGone}" (click)="showSearch()">\n        <ion-icon name="search"></ion-icon>\n    </button>\n</ion-fab>'/*ion-inline-end:"/Users/himeshpatel/KaleLogistics/Corvi/src/pages/invoices/invoices.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_http_service_http_service__["a" /* HttpServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_push_notification_push_notification__["a" /* PushNotificationProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_6__providers_util_alert_service__["a" /* AlertService */]])
    ], InvoicesPage);
    return InvoicesPage;
}());

//# sourceMappingURL=invoices.js.map

/***/ }),

/***/ 173:
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
webpackEmptyAsyncContext.id = 173;

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordPageModule", function() { return ResetPasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reset_password__ = __webpack_require__(371);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
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

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/_home/home.module": [
		216
	],
	"../pages/closed-jobs/closed-jobs.module": [
		392
	],
	"../pages/dashboard/dashboard.module": [
		393
	],
	"../pages/enquiry/enquiry.module": [
		394
	],
	"../pages/find-sales-activity/find-sales-activity.module": [
		650,
		0
	],
	"../pages/invoices/invoices.module": [
		395
	],
	"../pages/new-sales-activity/new-sales-activity.module": [
		396
	],
	"../pages/open-jobs/open-jobs.module": [
		397
	],
	"../pages/quotation/quotation.module": [
		398
	],
	"../pages/reset-password/reset-password.module": [
		174
	],
	"../pages/tabs/tabs.module": [
		399
	],
	"../pages/welcomeuser/welcomeuser.module": [
		401
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
webpackAsyncContext.id = 215;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_detail_page__ = __webpack_require__(626);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
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

/***/ 25:
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
                { title: 'Search Sales Activity', component: 'OpenJobsPage', active: false, icon: 'open' },
                { title: 'New Sales Lead', component: 'ClosedJobsPage', active: false, icon: 'close' },
                { title: 'Update Job Milestone', component: 'InvoicesPage', active: false, icon: 'print' },
                { title: 'Configure Parameters', component: 'EnquiryPage', active: false, icon: 'clipboard' },
                { title: 'Settings', component: 'EnquiryPage', active: false, icon: 'clipboard' },
                { title: 'Notification', component: 'EnquiryPage', active: false, icon: 'clipboard' }
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
    Object.defineProperty(Constants, "ONE_SIGNAL_BASE_URL", {
        get: function () { return "https://onesignal.com/api/v1/notifications"; },
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

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__ = __webpack_require__(545);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_finally__ = __webpack_require__(550);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_finally___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_finally__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__constants__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__global_global__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_http__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_spinner_dialog__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_xml2js__ = __webpack_require__(558);
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
                            // url: baseURL + service_name,
                            url: __WEBPACK_IMPORTED_MODULE_8__constants__["a" /* Constants */].CORVI_Base_URL + service_name,
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_10__ionic_native_http__["a" /* HTTP */], __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["r" /* ToastController */], __WEBPACK_IMPORTED_MODULE_9__global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_11__ionic_native_spinner_dialog__["a" /* SpinnerDialog */]])
    ], HttpServiceProvider);
    return HttpServiceProvider;
}());

//# sourceMappingURL=http-service.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(12);
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



// import { HomePage } from "../_home/home";

var RegisterPage = /** @class */ (function () {
    function RegisterPage(nav, globalService) {
        this.nav = nav;
        this.globalService = globalService;
    }
    // register and go to home page
    RegisterPage.prototype.register = function () {
        // this.globalService.routePage(HomePage)
    };
    // go to login page
    RegisterPage.prototype.login = function () {
        this.globalService.routePage(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/Users/himeshpatel/KaleLogistics/Corvi/src/pages/register/register.html"*/'<!-- -->\n<ion-content class="auth-page">\n  <div class="login-content">\n\n    <!-- Logo -->\n    <div padding text-center>\n      <div class="logo"></div>\n      <!-- <h2 ion-text class="text-primary">\n        <strong>CORVI</strong>\n      </h2> -->\n    </div>\n\n    <!-- Login form -->\n    <form class="list-form">\n      <ion-item>\n        <ion-label floating>\n          <ion-icon name="person" item-start class="text-primary"></ion-icon>\n          Full Name\n        </ion-label>\n        <ion-input type="text"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>\n          <ion-icon name="mail" item-start class="text-primary"></ion-icon>\n          Email\n        </ion-label>\n        <ion-input type="email"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>\n          <ion-icon name="lock" item-start class="text-primary"></ion-icon>\n          Password\n        </ion-label>\n        <ion-input type="password"></ion-input>\n      </ion-item>\n    </form>\n\n    <div margin-top>\n      <button ion-button block color="dark" tappable (click)="register()">\n        SIGN UP\n      </button>\n\n    </div>\n\n    <!-- Other links -->\n    <div text-center margin-top>\n      <span ion-text color="primary" tappable (click)="login()">I have an account</span>\n    </div>\n\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/himeshpatel/KaleLogistics/Corvi/src/pages/register/register.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ToastController */]])
    ], ToastService);
    return ToastService;
}());

//# sourceMappingURL=toast.service.js.map

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnquiryCargoDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__enquiry__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__enquiry_package_detail__ = __webpack_require__(369);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-enquiry-cargo-detail',template:/*ion-inline-start:"/Users/himeshpatel/KaleLogistics/Corvi/src/pages/enquiry/detail/enquiry-cargo-details.html"*/'<Corvi-header [title]="title" [hidden]="showSearchBar"></Corvi-header>\n<ion-content class="marginTop57">\n  <form [formGroup]="cargoDetailsForm" (ngSubmit)="logForm()" style="margin-bottom: 160px;">\n    <ion-item>\n      <ion-label floating>Origin(Country-City-POL)</ion-label>\n      <ion-input type="text" class="text-primary" formControlName="origin"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Destination(Country-City-POD)</ion-label>\n      <ion-input type="text" class="text-primary" formControlName="destination"></ion-input>\n    </ion-item>\n    <ion-item class="margin-top-16">\n      <ion-label>Incoterms</ion-label>\n      <ion-select placeholder="Select">\n        <ion-option value="air">AIR</ion-option>\n        <ion-option value="ocean">OCEAN</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item class="margin-top-16">\n      <ion-label>Delivery Terms</ion-label>\n      <ion-select placeholder="Select">\n        <ion-option value="air">AIR</ion-option>\n        <ion-option value="ocean">OCEAN</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-grid style="padding: 0px !important;">\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label floating>Commodity</ion-label>\n            <ion-input type="text" class="text-primary" formControlName="commodity"></ion-input>\n          </ion-item>\n        </ion-col>\n        <!-- <ion-col>  -->\n        <button [round]="true" color="primary" ion-button icon-only clear style="margin-top: 30px;">\n          <ion-icon name="create"></ion-icon>\n        </button>\n        <!-- </ion-col> -->\n      </ion-row>\n    </ion-grid>\n    <ion-item>\n      <ion-label floating>Cargo Description</ion-label>\n      <ion-textarea formControlName="cargo_description"></ion-textarea>\n    </ion-item>\n    <ion-grid style="padding: 0px !important;">\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label floating>Gross Wt.</ion-label>\n            <ion-input type="text" class="text-primary" formControlName="gross_wt"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label>KGS</ion-label>\n            <ion-select placeholder="Select">\n              <ion-option value="air">AIR</ion-option>\n              <ion-option value="ocean">OCEAN</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-label floating>Chargeable Wt.</ion-label>\n            <ion-input type="text" class="text-primary" formControlName="chargeable_wt"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label>KGS</ion-label>\n            <ion-select placeholder="Select">\n              <ion-option value="air">AIR</ion-option>\n              <ion-option value="ocean">OCEAN</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-grid style="padding: 0px !important;">\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label floating>Volume</ion-label>\n            <ion-input type="text" class="text-primary" formControlName="volume"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-label floating>Chargeable Volume</ion-label>\n            <ion-input type="text" class="text-primary" formControlName="chargeable_volume"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-item>\n      <ion-label floating>Total packages</ion-label>\n      <ion-input type="text" class="text-primary" formControlName="commodity"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Remarks</ion-label>\n      <ion-input type="text" class="text-primary" formControlName="commodity"></ion-input>\n    </ion-item>\n    <button ion-button type="submit" [disabled]="!cargoDetailsForm.valid">Package Details>></button>\n  </form>\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n</ion-content>\n<ion-fab left bottom #fab1>\n  <button class="pop-in" ion-fab color="primary" [ngClass]="{\'pop-out\': fabGone}" (click)="previous()">\n    <ion-icon name="arrow-round-back"></ion-icon>\n  </button>\n</ion-fab>\n\n<ion-fab right bottom #fab2>\n  <button class="pop-in" ion-fab color="primary" [ngClass]="{\'pop-out\': fabGone}" (click)="next()">\n    <ion-icon name="arrow-round-forward"></ion-icon>\n  </button>\n</ion-fab>'/*ion-inline-end:"/Users/himeshpatel/KaleLogistics/Corvi/src/pages/enquiry/detail/enquiry-cargo-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */]])
    ], EnquiryCargoDetailPage);
    return EnquiryCargoDetailPage;
}());

//# sourceMappingURL=enquiry-cargo-detail.js.map

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnquiryPackageDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__enquiry_contact_detail__ = __webpack_require__(370);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-enquiry-package-detail',template:/*ion-inline-start:"/Users/himeshpatel/KaleLogistics/Corvi/src/pages/enquiry/detail/enquiry-package-details.html"*/'<Corvi-header [title]="title" [hidden]="showSearchBar"></Corvi-header>\n<ion-content class="marginTop57">\n  <form [formGroup]="packageDetailsForm">\n    <ion-item>\n      <ion-label floating>No. of packages</ion-label>\n      <ion-input type="text" class="text-primary" formControlName="Nop"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Units</ion-label>\n      <ion-select placeholder="Select">\n        <ion-option value="one">1</ion-option>\n        <ion-option value="two">2</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-grid class="marginTop12">\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label>L*W*H</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col col-2>\n          <ion-input type="text" class="text-primary border_solid" formControlName="length"></ion-input>\n        </ion-col>\n        <ion-col class="star">*</ion-col>\n        <ion-col col-2>\n          <ion-input type="text" class="text-primary border_solid" formControlName="width"></ion-input>\n        </ion-col>\n        <ion-col class="star">*</ion-col>\n        <ion-col col-2>\n          <ion-input type="text" class="text-primary border_solid" formControlName="height"></ion-input>\n        </ion-col>\n        <ion-col>\n          <ion-item class="marginTop12">\n            <ion-label>Inches</ion-label>\n            <ion-select placeholder="Select">\n              <ion-option value="one">1</ion-option>\n              <ion-option value="two">2</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label floating>Gross Wt.</ion-label>\n            <ion-input type="text" class="text-primary" formControlName="GrossWt"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item style="margin-top: 22px;">\n            <ion-label>KGS</ion-label>\n            <ion-select placeholder="Select">\n              <ion-option value="one">1</ion-option>\n              <ion-option value="two">2</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-item>\n      <ion-label>Remarks</ion-label>\n      <ion-textarea></ion-textarea>\n    </ion-item>\n    <ion-grid>\n      <ion-row>\n        <ion-col> <button ion-button icon-start block color="primary" tappable>\n            <!-- <ion-icon name="save"></ion-icon> -->\n            Save\n          </button></ion-col>\n        <ion-col><button ion-button icon-start block color="primary" tappable>\n            <!-- <ion-icon name="close-circle"></ion-icon> -->\n            View\n          </button></ion-col>\n        <ion-col> <button ion-button icon-start block color="primary" tappable (click)="contact()">\n            <!-- <ion-icon name="save"></ion-icon> -->\n            Next\n          </button></ion-col>\n        <ion-col><button ion-button icon-start block color="primary" tappable>\n            <!-- <ion-icon name="close-circle"></ion-icon> -->\n            Back\n          </button></ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n</ion-content>'/*ion-inline-end:"/Users/himeshpatel/KaleLogistics/Corvi/src/pages/enquiry/detail/enquiry-package-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */]])
    ], EnquiryPackageDetailPage);
    return EnquiryPackageDetailPage;
}());

//# sourceMappingURL=enquiry-package-detail.js.map

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnquiryContactDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(18);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-enquiry-contact-detail',template:/*ion-inline-start:"/Users/himeshpatel/KaleLogistics/Corvi/src/pages/enquiry/detail/enquiry-contact-detail.html"*/'<Corvi-header [title]="title" [hidden]="showSearchBar"></Corvi-header>\n<ion-content class="marginTop57">\n  <form [formGroup]="contactDetailsForm" (ngSubmit)="logForm()">\n    <ion-item>\n      <ion-label floating>Name</ion-label>\n      <ion-input type="text" class="text-primary" formControlName="name"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Location</ion-label>\n      <ion-input type="text" class="text-primary" formControlName="location"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Email Id</ion-label>\n      <ion-input type="email" class="text-primary" formControlName="emailID"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Organization</ion-label>\n      <ion-input type="text" class="text-primary" formControlName="organization"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Contact No.</ion-label>\n      <ion-input type="number" class="text-primary" formControlName="contact_No"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Address</ion-label>\n      <ion-input type="text" class="text-primary" formControlName="Address"></ion-input>\n    </ion-item>\n    <ion-grid>\n      <ion-row>\n        <ion-col> <button ion-button icon-start block color="primary" tappable>\n            <!-- <ion-icon name="save"></ion-icon> -->\n            Back\n          </button></ion-col>\n        <ion-col><button ion-button icon-start block color="primary" type="submit"\n            [disabled]="!contactDetailsForm.valid" tappable>\n            <!-- <ion-icon name="close-circle"></ion-icon> -->\n            Submit\n          </button></ion-col>\n        <ion-col> <button ion-button icon-start block color="primary" tappable>\n            <!-- <ion-icon name="save"></ion-icon> -->\n            Cancel\n          </button></ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n</ion-content>'/*ion-inline-end:"/Users/himeshpatel/KaleLogistics/Corvi/src/pages/enquiry/detail/enquiry-contact-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], EnquiryContactDetailPage);
    return EnquiryContactDetailPage;
}());

//# sourceMappingURL=enquiry-contact-detail.js.map

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_login__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
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
 * Generated class for the ResetPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ResetPasswordPage = /** @class */ (function () {
    function ResetPasswordPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.showPass = false;
        this.type = "password";
    }
    ResetPasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ResetPasswordPage');
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
    ResetPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-reset-password',template:/*ion-inline-start:"/Users/himeshpatel/KaleLogistics/Corvi/src/pages/reset-password/reset-password.html"*/'<ion-header no-border>\n    <ion-grid class="gridDesign">\n        <ion-row>\n          <ion-col col-6>\n            <div padding-horizontal class="animated fadeInDown">\n              <div class="logoLeft">\n               <img class="imgLeft" src="../assets/img/Corvi_Logo.png">\n              </div>\n            </div>\n          </ion-col>\n  \n          <ion-col col-6>\n            <div padding-horizontal class="animated fadeInDown">\n              <div class="logoRight"></div>\n              <img class="imgRight" src="../assets/img/Kale_Logo.png">\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n  \n</ion-header>\n\n\n<ion-content padding class="animated fadeIn login">\n    <div class="login-content">\n    \n        <!-- Login form -->\n        <form class="list-form" #f="ngForm" >\n          <div class="contaier-login">\n    \n            <ion-row>\n              <ion-col>\n    \n                <h3 style="text-align: center;">Reset Password</h3>\n    \n              </ion-col>\n            </ion-row>\n            <ion-item>\n              <ion-label stacked>\n                <!-- <ion-icon name="person" item-start class="text-primary"></ion-icon> -->\n                Enter Username\n              </ion-label>\n              <ion-input type="text" [(ngModel)]="username"\n              #nameCtrl="ngModel" name="username" required \n              ></ion-input>  \n            </ion-item>\n            <div class="errorbox" style="color:tomato" *ngIf="!nameCtrl.valid && nameCtrl.touched">required</div>\n    \n            <ion-item>\n              <ion-label stacked>\n                <!-- <ion-icon name="lock" item-start class="text-primary"></ion-icon> -->\n                Temporary Password\n              </ion-label>\n              <ion-input type="{{type}}" [(ngModel)]="temppassword"\n          #temppasswordCtrl="ngModel" name="temppassword" required\n          ></ion-input>\n          <button *ngIf="!showPass" ion-button clear color="dark" type="button" item-right (click)="showPassword()"><ion-icon name="ios-eye-off-outline"></ion-icon></button>\n          <button *ngIf="showPass" ion-button clear color="dark" type="button" item-right (click)="showPassword()"><ion-icon name="ios-eye-outline"></ion-icon></button>\n            </ion-item>\n            <div class="errorbox" style="color:tomato" *ngIf="!temppasswordCtrl.valid && temppasswordCtrl.touched">required</div>\n    \n            <ion-item>\n                <ion-label stacked>\n                  <!-- <ion-icon name="person" item-start class="text-primary"></ion-icon> -->\n                  New Password\n                </ion-label>\n                <ion-input type="text" [(ngModel)]="password"\n                #passwordCtrl="ngModel" name="password" required></ion-input>\n              </ion-item>\n              <div class="errorbox" style="color:tomato" *ngIf="!passwordCtrl.valid && passwordCtrl.touched">required</div>\n\n              <ion-item>\n                  <ion-label stacked>\n                    <!-- <ion-icon name="person" item-start class="text-primary"></ion-icon> -->\n                    Re-Type New Password\n                  </ion-label>\n                  <ion-input type="text" [(ngModel)]="confpassword"\n                  #confpasswordCtrl="ngModel" name="confpassword" required></ion-input>\n                </ion-item>\n                <div class="errorbox" style="color:tomato" *ngIf="!confpasswordCtrl.valid && confpasswordCtrl.touched">required</div>\n      \n            <div>\n              <ion-row>\n                <ion-col col-6 class="my-width" large>\n                <button class="button button-dark customBtn" ion-button color="light" (click)="toLogin()">\n                     CANCEL\n                  </button>\n                </ion-col>\n                <!-- <ion-col col-4></ion-col> -->\n                <ion-col col-6 class="my-width" large>\n                  <button class="button button-dark customBtn" ion-button color="primary" [disabled]="!f.valid">\n                       SAVE\n                    </button>\n                  </ion-col>\n                  </ion-row>\n            </div>\n    \n          </div>\n        </form>\n    \n    \n      </div>\n      <div class="addOns">\n          <div class="addOnsText">\n            <h4>Additional Services</h4>\n          </div>\n      \n          <ion-grid>\n            <ion-row>\n              <ion-col>\n                  <div class="container">\n                      <img src="../assets/img/moreservices.png">\n                      <h6>More Services</h6>\n                    </div>\n              </ion-col>\n              <ion-col>\n                  <div class="container">\n                      <img src="../assets/img/contactus.png">\n                      <h6>Contact Us</h6>\n                    </div>\n              </ion-col>\n              <ion-col>\n                  <div class="container">\n                      <img src="../assets/img/monitor_support.png">\n                      <h6>24 x 7 Support</h6>\n                    </div>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </div>\n    </ion-content>\n    <ion-footer>\n        <div class = "bar bar-footer">\n            <ion-row>\n              <ion-col col-6>\n            <h6 style="text-align: center;" class = "title">Terms and conditions</h6>\n          </ion-col>\n    \n          <ion-col col-6>\n              <h6 style="text-align: center;" class = "title">Privacy Policy</h6>\n            </ion-col>\n          </ion-row>\n         </div>\n    </ion-footer>\n'/*ion-inline-end:"/Users/himeshpatel/KaleLogistics/Corvi/src/pages/reset-password/reset-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavParams */]])
    ], ResetPasswordPage);
    return ResetPasswordPage;
}());

//# sourceMappingURL=reset-password.js.map

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomeuserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_global__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard__ = __webpack_require__(134);
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
    function WelcomeuserPage(navCtrl, navParams, globalService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.globalService = globalService;
        this.title = "Welcome, CORVI User";
    }
    WelcomeuserPage.prototype.next = function () {
        this.slides.slideNext();
    };
    // public prev(){
    //   this.globalService.routePage(DashboardPage);
    // }
    WelcomeuserPage.prototype.skip = function () {
        this.globalService.setRootPage(__WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard__["a" /* DashboardPage */]);
    };
    WelcomeuserPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WellcomeuserPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('mySlider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Slides */])
    ], WelcomeuserPage.prototype, "slides", void 0);
    WelcomeuserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-welcomeuser',template:/*ion-inline-start:"/Users/himeshpatel/KaleLogistics/Corvi/src/pages/welcomeuser/welcomeuser.html"*/'<!--\n  Generated template for the WellcomeuserPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title id="Dashboard" center text-center>\n      {{title}}\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-slides #slides pager="true">\n    <ion-slide class="ShadowBox13">\n      <img src="assets/img/Group 3524.png">\n      <label>CORVI Freight Management System\n        Lorem ipsum dolor sit amet, consetetur\n        sadipscing elitr, sed diam nonumy eirmod\n        tempor invidunt ut labore et dolore magna\n        aliquyam erat, sed diam voluptua. At vero eos\n        et accusam et justo duo.</label>\n    </ion-slide>\n\n    <ion-slide class="ShadowBox13">\n      <img src="assets/img/Group 3525.png">\n      <!-- <label>\n        Features:\n        New Sales Activity\n        New Sales Lead\n        Upload Milestone</label> -->\n      <ion-row>\n        <ion-col col-12>\n          <h3 style="float: left;">Features:</h3>\n        </ion-col>\n        <ion-col col-2>\n        </ion-col>\n        <ion-col col-8>\n          <ion-list>\n            <ion-item>\n              <ion-icon name="checkmark" style="color:green"></ion-icon>&nbsp;&nbsp;&nbsp;New Sales Activity\n            </ion-item>\n            <ion-item>\n              <ion-icon name="checkmark" style="color:green"></ion-icon>&nbsp;&nbsp;&nbsp;New Sales Lead\n            </ion-item>\n            <ion-item>\n              <ion-icon name="checkmark" style="color:green"></ion-icon>&nbsp;&nbsp;&nbsp;Upload Milestone\n            </ion-item>\n          </ion-list>\n        </ion-col>\n      </ion-row>\n    </ion-slide>\n  </ion-slides>\n\n</ion-content>\n<ion-footer class="ion-footer">\n  <ion-toolbar>\n    <ion-row>\n      <ion-col col-1></ion-col>\n      <ion-col col-4>\n        <!-- <button text-left (click)="slides.slidePrev()"> Prev </button> -->\n        <a style="font-size: 2rem;" (click)="skip()">Skip</a>\n      </ion-col>\n      <ion-col col-1></ion-col>\n      <ion-col style="font-size: 2rem;" col-4> <a style="float: right;" (click)="slides.slideNext()"> Next </a>\n      </ion-col>\n      <ion-col col-1></ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/himeshpatel/KaleLogistics/Corvi/src/pages/welcomeuser/welcomeuser.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */]])
    ], WelcomeuserPage);
    return WelcomeuserPage;
}());

//# sourceMappingURL=welcomeuser.js.map

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewSalesActivityPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_global__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard__ = __webpack_require__(134);
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
var NewSalesActivityPage = /** @class */ (function () {
    function NewSalesActivityPage(navCtrl, navParams, globalService, menuCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.globalService = globalService;
        this.menuCtrl = menuCtrl;
        this.appBuildConfig = {
            version: 'V1.0.0',
            fullYear: (new Date).getFullYear().toString()
        };
        this.title = "New Sales Activity";
    }
    NewSalesActivityPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewSalesActivityPage');
    };
    NewSalesActivityPage.prototype.backToDashboard = function () {
        this.globalService.setRootPage(__WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard__["a" /* DashboardPage */]);
    };
    NewSalesActivityPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-new-sales-activity',template:/*ion-inline-start:"/Users/himeshpatel/KaleLogistics/Corvi/src/pages/new-sales-activity/new-sales-activity.html"*/'<!--\n  Generated template for the NewSalesActivityPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <button right ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <button left ion-button menuToggle (click)="backToDashboard();">\n      <ion-icon name="arrow-back"></ion-icon>\n    </button>\n    <ion-title id="Dashboard" center text-center>\n      {{title}}\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-row padding class="ShadowBox13">\n      <ion-col col-12>\n        <label>\n          Branch\n        </label>\n        <select col-12 placeholder="Select One">\n          <option value="f">Default</option>\n          <option value="m">1</option>\n        </select>\n\n      </ion-col>\n      <ion-col col-6>\n        <label>\n          Communication Mode\n        </label>\n        <select col-12 placeholder="Select One">\n          <option value="f">Visit</option>\n          <option value="m">1</option>\n        </select>\n      </ion-col>\n      <ion-col col-6>\n        <label>\n          Activity\n        </label><br>\n        <select col-12 placeholder="Select One">\n          <option value="f">Sales Call</option>\n          <option value="m">1</option>\n        </select>\n      </ion-col>\n\n      <ion-col col-6>\n        <label>\n          Priority\n        </label>\n        <select col-12 placeholder="Select One">\n          <option value="f">High</option>\n          <option value="m">1</option>\n        </select>\n      </ion-col>\n      <ion-col col-6>\n        <label>\n          Status\n        </label><br>\n        <select col-12 placeholder="Select One">\n          <option value="f">Yet To Start</option>\n          <option value="m">1</option>\n        </select>\n      </ion-col>\n    </ion-row>\n\n    <ion-row padding class="ShadowBox13">\n      <ion-col col-10>\n        <label>\n          Company\n        </label>\n        <input col-12 placeholder="">\n\n      </ion-col>\n      <ion-col col-2 style="margin-top: 18px;">\n        <button ion-fab class="ion-fab34">\n          <ion-icon name="md-search" class="margin4"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col col-12>\n        <label>\n          Address\n        </label>\n        <textarea col-12 placeholder="">\n        </textarea>\n      </ion-col>\n      <ion-col col-12 style="margin-top: 5px;">\n        <label>\n          Contact Person\n        </label>\n        <input col-12 placeholder="Select One">\n      </ion-col>\n    </ion-row>\n    <ion-row padding class="ShadowBox13">\n      <ion-col col-12>\n        <table>\n          <tr>\n            <td>\n              <label>\n                Start Time\n              </label>\n            </td>\n            <td><a href="#">19 APR 2021</a></td>\n            <td><a href="#">16:30</a></td>\n          </tr>\n          <tr>\n            <td>\n              <label>\n                End Time\n              </label>\n            </td>\n            <td><a href="#">19 APR 2021</a></td>\n            <td><a href="#">16:30</a></td>\n          </tr>\n        </table>\n      </ion-col>\n\n      <ion-col col-12>\n        <label>\n          General Remarks\n        </label>\n        <textarea col-12 placeholder="">\n        </textarea>\n      </ion-col>\n\n      <ion-col col-12 style="margin-top: 5px;">\n        <label>\n          Notes\n        </label>\n        <textarea col-12 placeholder="">\n        </textarea>\n      </ion-col>\n\n    </ion-row>\n\n\n\n  </ion-list>\n</ion-content>\n<ion-footer class="ion-footer">\n  <ion-row padding class="ShadowBox13">\n    <ion-col col-6>\n      <button ion-button  block class="btnRadius btncancel" (click)="backToDashboard();">\n        <ion-icon ></ion-icon>\n        Cancel\n      </button>\n    </ion-col>\n\n    <ion-col col-6>\n      <button ion-button icon-start block class="btnRadius ">\n        <ion-icon ></ion-icon>\n       Save\n      </button>\n    </ion-col>\n  </ion-row>\n  <div class="label-white toolbar-background-md" center text-center>\n    © Kale Logistics Solutions Private Limited. {{appBuildConfig.fullYear}} Version {{appBuildConfig.version}}\n  </div>\n</ion-footer>\n'/*ion-inline-end:"/Users/himeshpatel/KaleLogistics/Corvi/src/pages/new-sales-activity/new-sales-activity.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* MenuController */]) === "function" && _d || Object])
    ], NewSalesActivityPage);
    return NewSalesActivityPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=new-sales-activity.js.map

/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Pdfviewer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_pdf_viewer__ = __webpack_require__(378);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ng2_pdf_viewer__["a" /* PdfViewerComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ng2_pdf_viewer__["a" /* PdfViewerComponent */])
    ], Pdfviewer.prototype, "pdfComponent", void 0);
    Pdfviewer = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'pdfviewer',template:/*ion-inline-start:"/Users/himeshpatel/KaleLogistics/Corvi/src/components/pdfviewer/pdfviewer.html"*/'<Corvi-header [title]="title"></Corvi-header>\n\n<ion-content class="marginTop57">\n  <ion-searchbar placeholder="Search..." showCancelButton color="danger" (ionInput)="search($event)"></ion-searchbar>\n  <div id="pdf-file-container">\n    <pdf-viewer [src]="pdfSrc" [original-size]="false" style="display: block;" (on-progress)="onProgress($event)" (error)="onError($event)"\n      [zoom]="zoom_to"></pdf-viewer>\n  </div>\n</ion-content>\n\n<ion-fab right bottom #fab1>\n  <button class="pop-in" ion-fab mini color="primary" [ngClass]="{\'pop-out\': fabGone}" (click)="zoom_in()">\n    <ion-icon name="add"></ion-icon>\n  </button>\n  <!-- <ion-label>Zoom In</ion-label> -->\n\n</ion-fab>\n\n<ion-fab left bottom #fab2>\n  <button class="pop-in" ion-fab mini color="primary" [ngClass]="{\'pop-out\': fabGone}" (click)="zoom_out()">\n    <ion-icon name="remove"></ion-icon>\n  </button>\n  <!-- <ion-label>Zoom Out</ion-label> -->\n\n</ion-fab>'/*ion-inline-end:"/Users/himeshpatel/KaleLogistics/Corvi/src/components/pdfviewer/pdfviewer.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ToastController */]])
    ], Pdfviewer);
    return Pdfviewer;
}());

//# sourceMappingURL=pdfviewer.js.map

/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuotationDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_global__ = __webpack_require__(12);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-quotation-detail',template:/*ion-inline-start:"/Users/himeshpatel/KaleLogistics/Corvi/src/pages/quotation/quotation-detail/quotation-detail.html"*/'<Corvi-header [title]="title"></Corvi-header>\n\n<ion-content class="marginTop57">\n  <!-- <ion-item>\n    <ion-label color="primary">Customer</ion-label>\n    <ion-input type="text" name="Customer" [(ngModel)]="q_details[0].Customer" [disabled]="true" text-right></ion-input>\n  </ion-item> -->\n  <ion-item>\n    <ion-label color="primary">Quotation No</ion-label>\n    <ion-input type="text" name="Quotation_No" [(ngModel)]="q_details[0].QuotationNo" [disabled]="true" text-right></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label color="primary">Quotation Amount</ion-label>\n    <ion-input type="text" name="Quotation_amount" [(ngModel)]="q_details[0].QuotationAmount == \'\' ? \'--\' :  q_details[0].QuotationAmount"\n      [disabled]="true" text-right></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label color="primary">Enquiry Reference</ion-label>\n    <ion-input type="text" name="EnquiryReference" [(ngModel)]="q_details[0].EnquiryReference == \'\' ? \'--\' :  q_details[0].EnquiryReference"\n      [disabled]="true" text-right></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label color="primary">Mode</ion-label>\n    <ion-input type="text" name="Mode" [(ngModel)]="q_details[0].Mode" [disabled]="true" text-right></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label color="primary">Quotation Date</ion-label>\n    <ion-input type="text" name="Quotation_Date" [(ngModel)]="q_details[0].QuotationDate" [disabled]="true" text-right></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label color="primary">Quotation ID</ion-label>\n    <ion-input type="text" name="Quotation_Id" [(ngModel)]="q_details[0].QuotationId" [disabled]="true" text-right></ion-input>\n  </ion-item>\n\n\n  <ion-item>\n    <ion-label color="primary">Service</ion-label>\n    <ion-input type="text" name="Service" [(ngModel)]="q_details[0].Service" [disabled]="true" text-right></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label color="primary">Status</ion-label>\n    <ion-input type="text" name="Status" [(ngModel)]="q_details[0].Status" [disabled]="true" text-right></ion-input>\n  </ion-item>\n\n</ion-content>\n\n<!-- <ion-fab right bottom #fab1>\n  <button class="pop-in" ion-fab mini color="primary" [ngClass]="{\'pop-out\': fabGone}" (click)="viewPDF()">\n    <ion-icon name="document"></ion-icon>\n  </button>\n  <ion-label>View PDF</ion-label>\n\n</ion-fab> -->'/*ion-inline-end:"/Users/himeshpatel/KaleLogistics/Corvi/src/pages/quotation/quotation-detail/quotation-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]])
    ], QuotationDetailPage);
    return QuotationDetailPage;
}());

//# sourceMappingURL=quotation-detail.js.map

/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpenJobsPageDetails; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_global__ = __webpack_require__(12);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-open-jobs-details',template:/*ion-inline-start:"/Users/himeshpatel/KaleLogistics/Corvi/src/pages/open-jobs/detail/open-jobs-details.html"*/'<Corvi-header [title]="title"></Corvi-header>\n\n<ion-content class="marginTop57">\n\n    <ion-item>\n\n        <ion-label color="primary">Job No</ion-label>\n\n        <ion-input type="text" name="Job_No" [(ngModel)]="open_jobs_details[0].JobNo" [disabled]="true" text-right></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label color="primary">Job Date</ion-label>\n\n        <ion-input type="text" name="Job_Date" [(ngModel)]="open_jobs_details[0].JobDate" [disabled]="true" text-right></ion-input>\n\n    </ion-item>\n\n    <!-- <ion-item>\n\n        <ion-label color="primary">WO Detail No</ion-label>\n\n        <ion-input type="text" name="WO_DetailNo" [(ngModel)]="open_jobs_details[0].WODetailNo" [disabled]="true" text-right></ion-input>\n\n    </ion-item> -->\n\n    <ion-item>\n\n        <ion-label color="primary">Mode</ion-label>\n\n        <ion-input type="text" name="Mode" [(ngModel)]="open_jobs_details[0].Mode" [disabled]="true" text-right></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label color="primary">Service</ion-label>\n\n        <ion-input type="text" name="Service" [(ngModel)]="open_jobs_details[0].Service" [disabled]="true" text-right></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label color="primary">Customer</ion-label>\n\n        <ion-input type="text" name="Customer" [(ngModel)]="open_jobs_details[0].Customer" [disabled]="true" text-right></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label color="primary">Origin</ion-label>\n\n        <ion-input type="text" name="Origin" [(ngModel)]="open_jobs_details[0].Origin" [disabled]="true" text-right></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label color="primary">Destination</ion-label>\n\n        <ion-input type="text" name="Destination" [(ngModel)]="open_jobs_details[0].Destination" [disabled]="true"\n\n            text-right></ion-input>\n\n    </ion-item>\n\n</ion-content>'/*ion-inline-end:"/Users/himeshpatel/KaleLogistics/Corvi/src/pages/open-jobs/detail/open-jobs-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */]])
    ], OpenJobsPageDetails);
    return OpenJobsPageDetails;
}());

//# sourceMappingURL=open-jobs-details.js.map

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClosedJobsPageDetails; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_global__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_util_alert_service__ = __webpack_require__(43);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-closed-jobs-details',template:/*ion-inline-start:"/Users/himeshpatel/KaleLogistics/Corvi/src/pages/closed-jobs/detail/closed-jobs-details.html"*/'<Corvi-header [title]="title"></Corvi-header>\n\n<ion-content class="marginTop57">\n\n    <ion-item>\n\n        <ion-label color="primary">Job No</ion-label>\n\n        <ion-input type="text" name="Job_No" [(ngModel)]="closed_jobs_details[0].JobNo" [disabled]="true" text-right></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label color="primary">Job Date</ion-label>\n\n        <ion-input type="text" name="Job_Date" [(ngModel)]="closed_jobs_details[0].JobDate" [disabled]="true"\n\n            text-right></ion-input>\n\n    </ion-item>\n\n    <!-- <ion-item>\n\n        <ion-label color="primary">WO Detail No</ion-label>\n\n        <ion-input type="text" name="WO_DetailNo" [(ngModel)]="closed_jobs_details[0].WODetailNo" [disabled]="true" text-right></ion-input>\n\n    </ion-item> -->\n\n    <ion-item>\n\n        <ion-label color="primary">Mode</ion-label>\n\n        <ion-input type="text" name="Mode" [(ngModel)]="closed_jobs_details[0].Mode" [disabled]="true" text-right></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label color="primary">Service</ion-label>\n\n        <ion-input type="text" name="Service" [(ngModel)]="closed_jobs_details[0].Service" [disabled]="true" text-right></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label color="primary">Customer</ion-label>\n\n        <ion-input type="text" name="Customer" [(ngModel)]="closed_jobs_details[0].Customer" [disabled]="true"\n\n            text-right></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label color="primary">Origin</ion-label>\n\n        <ion-input type="text" name="Origin" [(ngModel)]="closed_jobs_details[0].Origin" [disabled]="true" text-right></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label color="primary">Destination</ion-label>\n\n        <ion-input type="text" name="Destination" [(ngModel)]="closed_jobs_details[0].Destination" [disabled]="true"\n\n            text-right></ion-input>\n\n    </ion-item>\n\n</ion-content>\n\n\n\n<!-- <ion-fab right bottom #fab1>\n\n    <button class="pop-in" ion-fab mini color="primary" [ngClass]="{\'pop-out\': fabGone}">\n\n        <ion-icon name="document"></ion-icon>\n\n    </button>\n\n    <ion-label>View PDF</ion-label>\n\n\n\n</ion-fab> -->\n\n<!-- \n\n<ion-fab right bottom #fab2>\n\n    <button class="pop-in" ion-fab mini color="primary" [ngClass]="{\'pop-out\': fabGone}" (click)="followJob()">\n\n        <ion-icon name="help"></ion-icon>\n\n    </button>\n\n    <ion-label>Follow Job</ion-label>\n\n\n\n</ion-fab> -->'/*ion-inline-end:"/Users/himeshpatel/KaleLogistics/Corvi/src/pages/closed-jobs/detail/closed-jobs-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__providers_util_alert_service__["a" /* AlertService */]])
    ], ClosedJobsPageDetails);
    return ClosedJobsPageDetails;
}());

//# sourceMappingURL=closed-jobs-details.js.map

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoicesDetails; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_global__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_util_alert_service__ = __webpack_require__(43);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-invoices-details',template:/*ion-inline-start:"/Users/himeshpatel/KaleLogistics/Corvi/src/pages/invoices/detail/invoices-details.html"*/'<Corvi-header [title]="title"></Corvi-header>\n\n<ion-content class="marginTop57">\n\n\n\n\n\n    <ion-item>\n\n        <ion-label color="primary">Bill No</ion-label>\n\n        <ion-input type="text" name="BillingNo" [(ngModel)]="invoice_details[0].BillingNo" [disabled]="true" text-right></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label color="primary">Bill Date</ion-label>\n\n        <ion-input type="text" name="InvoiceDate" [(ngModel)]="invoice_details[0].InvoiceDate" [disabled]="true"\n\n            text-right></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label color="primary">Job No</ion-label>\n\n        <ion-input type="text" name="JobNo" [(ngModel)]="invoice_details[0].JobNo" [disabled]="true" text-right></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label color="primary">Amount</ion-label>\n\n        <ion-input type="text" name="Amount" [(ngModel)]="invoice_details[0].Amount" [disabled]="true" text-right></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n        <ion-label color="primary">Customer</ion-label>\n\n        <ion-input type="text" name="Customer" [(ngModel)]="invoice_details[0].Customer" [disabled]="true" text-right\n\n            style="font-size: 1.2rem;"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label color="primary">Branch</ion-label>\n\n        <ion-input type="text" name="Branch" [(ngModel)]="invoice_details[0].Branch" [disabled]="true" text-right></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label color="primary">Mode</ion-label>\n\n        <ion-input type="text" name="Mode" [(ngModel)]="invoice_details[0].Mode" [disabled]="true" text-right></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label color="primary">Service</ion-label>\n\n        <ion-input type="text" name="Service" [(ngModel)]="invoice_details[0].Service" [disabled]="true" text-right></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label color="primary">Reference No</ion-label>\n\n        <ion-input type="text" name="ReferenceNo" [(ngModel)]="invoice_details[0].ReferenceNo == \'\' ? \'--\' :invoice_details[0].ReferenceNo"\n\n            [disabled]="true" text-right></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label color="primary">Reference Date</ion-label>\n\n        <ion-input type="text" name="ReferenceDate" [(ngModel)]="invoice_details[0].ReferenceDate" [disabled]="true"\n\n            text-right></ion-input>\n\n    </ion-item>\n\n    <br>\n\n    <br>\n\n    <br>\n\n    <br>\n\n    <br>\n\n    <br>\n\n    <br>\n\n    <br>\n\n    <br>\n\n</ion-content>\n\n\n\n<ion-fab right bottom #fab1>\n\n    <button class="pop-in" ion-fab mini color="primary" [ngClass]="{\'pop-out\': fabGone}" (click)="viewPDF()">\n\n        <ion-icon name="document"></ion-icon>\n\n    </button>\n\n    <ion-label>View PDF</ion-label>\n\n\n\n</ion-fab>\n\n\n\n<!-- <ion-fab right bottom #fab2>\n\n    <button class="pop-in" ion-fab mini color="primary" [ngClass]="{\'pop-out\': fabGone}" (click)="followJob()">\n\n        <ion-icon name="help"></ion-icon>\n\n    </button>\n\n    <ion-label>Follow Job</ion-label>\n\n\n\n</ion-fab> -->'/*ion-inline-end:"/Users/himeshpatel/KaleLogistics/Corvi/src/pages/invoices/detail/invoices-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__providers_util_alert_service__["a" /* AlertService */]])
    ], InvoicesDetails);
    return InvoicesDetails;
}());

//# sourceMappingURL=invoices-details.js.map

/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoreComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_login_login__ = __webpack_require__(41);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'more-options',template:/*ion-inline-start:"/Users/himeshpatel/KaleLogistics/Corvi/src/components/more/more.html"*/'<ion-list class="no-margin" style="margin:inherit !important">\n\n  <!-- <button ion-item class="text-1x" tappable (click)="notifications()">\n    <ion-icon ios="ios-notifications" md="md-notifications"></ion-icon>&nbsp;\n    <span ion-text color="primary">Notifications</span>\n  </button> -->\n  <button ion-item class="text-1x" tappable (click)="logOut()">\n    <ion-icon ios="ios-power" md="md-power"></ion-icon>&nbsp;\n    <span ion-text color="primary">Logout</span>\n\n  </button>\n</ion-list>'/*ion-inline-end:"/Users/himeshpatel/KaleLogistics/Corvi/src/components/more/more.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]])
    ], MoreComponent);
    return MoreComponent;
}());

//# sourceMappingURL=more.js.map

/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClosedJobsPageModule", function() { return ClosedJobsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__closed_jobs__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detail_closed_jobs_details__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pipes_pipes_module__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_util_alert_service__ = __webpack_require__(43);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
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

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function() { return DashboardPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard__ = __webpack_require__(134);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
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

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnquiryPageModule", function() { return EnquiryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__enquiry__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__detail_enquiry_cargo_detail__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__detail_enquiry_package_detail__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__detail_enquiry_contact_detail__ = __webpack_require__(370);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
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

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoicesPageModule", function() { return InvoicesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__invoices__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__detail_invoices_details__ = __webpack_require__(390);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
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

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewSalesActivityPageModule", function() { return NewSalesActivityPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__new_sales_activity__ = __webpack_require__(373);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
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

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenJobsPageModule", function() { return OpenJobsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__open_jobs__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detail_open_jobs_details__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pipes_pipes_module__ = __webpack_require__(94);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
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

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotationPageModule", function() { return QuotationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quotation__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__quotation_detail_quotation_detail__ = __webpack_require__(387);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
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

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs__ = __webpack_require__(400);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
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

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_http_service_http_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__quotation_quotation__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__invoices_invoices__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__open_jobs_open_jobs__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__closed_jobs_closed_jobs__ = __webpack_require__(139);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"/Users/himeshpatel/KaleLogistics/Corvi/src/pages/tabs/tabs.html"*/'<ion-tabs *ngIf="showTabs">\n  <!-- *ngIf="showTabs"-->\n  <ion-tab [root]="HomePage" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="QuotationPage" tabTitle="Quotation" [tabBadge]="tabsCount.QuotationCount" tabIcon="quote"></ion-tab>\n  <ion-tab [root]="OpenJobsPage" tabTitle="Open Jobs" [tabBadge]="tabsCount.OpenJobsCount" tabIcon="open"></ion-tab>\n  <ion-tab [root]="ClosedJobsPage" tabTitle="Closed Jobs" [tabBadge]="tabsCount.ClosedJobsCount" tabIcon="close">\n  </ion-tab>\n  <ion-tab [root]="InvoicesPage" tabTitle="Invoices" [tabBadge]="tabsCount.InvoicesCount" tabIcon="print"></ion-tab>\n  <ion-tab [root]="EnquiryPage" tabTitle="Enquiry" [tabBadge]="tabsCount.EnquiryCount" tabIcon="clipboard"></ion-tab>\n\n</ion-tabs>'/*ion-inline-end:"/Users/himeshpatel/KaleLogistics/Corvi/src/pages/tabs/tabs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_4__providers_http_service_http_service__["a" /* HttpServiceProvider */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeuserPageModule", function() { return WelcomeuserPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__welcomeuser__ = __webpack_require__(372);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
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

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_http_service_http_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_util_alert_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_util_toast_service__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__enquiry_enquiry__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__reset_password_reset_password__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__welcomeuser_welcomeuser__ = __webpack_require__(372);
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
    function LoginPage(nav, menu, toastCtrl, globalService, http, alertService, toastService, 
        // public baseURLProvider: BaseURLProvider,
        fb) {
        this.nav = nav;
        this.menu = menu;
        this.toastCtrl = toastCtrl;
        this.globalService = globalService;
        this.http = http;
        this.alertService = alertService;
        this.toastService = toastService;
        this.fb = fb;
        this.showCustIdCode = true;
        this.showPass = false;
        this.type = "password";
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
        var _this = this;
        // let companyCode = this.user.custIdCode.substring(0, 3);
        // this.baseURLProvider.setBaseURL(companyCode).then((msg) => {
        // if (msg != null && msg != '') {
        // console.log('response to check 1');
        this.http.POST(__WEBPACK_IMPORTED_MODULE_5__constants__["a" /* Constants */].Corvi_Services.Login, this.user).then(function (response) {
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
        // });
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
    LoginPage.prototype.user_Rememebered = function () {
        if (this.isRemembered) {
            this.globalService.store('userName', this.user.UserId);
            this.globalService.store('password', this.user.Password);
            this.globalService.store('isRemembered', "true");
        }
        else {
            this.globalService.store("userName", "");
            this.globalService.store("password", "");
            this.globalService.remove('isRemembered');
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
        this.globalService.get('playerId')
            .then(function (UUID) { return _this.setDetails(UUID); }, function (error) { return console.error(error); });
    };
    LoginPage.prototype.setDetails = function (UUID) {
        var _this = this;
        this.user.UserId = UUID;
        this.http.POST(__WEBPACK_IMPORTED_MODULE_5__constants__["a" /* Constants */].Corvi_Services.UserDetails, this.user).then(function (userDetailsResp) {
            _this.globalService.store('userDetails', userDetailsResp);
            _this.globalService.publishEventwithData('app:userDetails', userDetailsResp);
            _this.globalService.publishEventwithData('login:sessionExpired', 500000);
            _this.globalService.setRootPage(__WEBPACK_IMPORTED_MODULE_12__welcomeuser_welcomeuser__["a" /* WelcomeuserPage */]);
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
        this.globalService.setRootPage(__WEBPACK_IMPORTED_MODULE_12__welcomeuser_welcomeuser__["a" /* WelcomeuserPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/himeshpatel/KaleLogistics/Corvi/src/pages/login/login.html"*/'<!-- -->\n<ion-header no-border>\n    <ion-grid class="gridDesign">\n        <ion-row>\n          <ion-col col-6>\n            <div padding-horizontal class="animated fadeInDown">\n              <div class="logoLeft">\n               <img class="imgLeft" src="../assets/img/Corvi_Logo.png">\n              </div>\n            </div>\n          </ion-col>\n  \n          <ion-col col-6>\n            <div padding-horizontal class="animated fadeInDown">\n              <div class="logoRight"></div>\n              <img class="imgRight" src="../assets/img/Kale_Logo.png">\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n  \n</ion-header>\n<ion-content padding class="animated fadeIn login">\n  <div class="login-content">\n\n    <!-- Login form -->\n    <!-- <form [formGroup]="authForm" class="list-form" > -->\n        <form #f="ngForm" class="list-form" >\n      <div class="contaier-login">\n\n        <ion-row>\n          <ion-col>\n\n            <h3 style="text-align: center;">Sign in to your account</h3>\n\n          </ion-col>\n        </ion-row>\n        <ion-item>\n          <ion-label stacked>\n            <!-- <ion-icon name="person" item-start class="text-primary"></ion-icon> -->\n            Enter Username\n          </ion-label>\n          <ion-input type="text" [(ngModel)]="user.UserId"\n          #nameCtrl="ngModel" name="userId" required \n          ></ion-input>\n        </ion-item>\n        <div class="errorbox" style="color:tomato" *ngIf="!nameCtrl.valid && nameCtrl.touched">required</div>\n        <!-- <ion-item *ngIf="!nameCtrl.valid && nameCtrl.touched">\n            <ion-label color="danger">Name is required</ion-label>\n          </ion-item>\n           -->\n\n        <ion-item>\n          <ion-label stacked>\n            Enter Password\n          </ion-label>\n        <ion-input type="{{type}}" [(ngModel)]="user.Password"\n          #passwordCtrl="ngModel" name="password" required\n          ></ion-input>\n          <button *ngIf="!showPass" ion-button clear color="dark" type="button" item-right (click)="showPassword()"><ion-icon name="ios-eye-off-outline"></ion-icon></button>\n          <button *ngIf="showPass" ion-button clear color="dark" type="button" item-right (click)="showPassword()"><ion-icon name="ios-eye-outline"></ion-icon></button>\n          <!-- <ion-input name="p2" type="password" *ngIf="!showPwd" [(ngModel)]="user.Password" required></ion-input> -->\n          <!-- <button icon-only ion-button clear type="button" item-right (click)="showPwd=!showPwd">\n            <ion-icon *ngIf="showPwd" name="eye"></ion-icon>\n            <ion-icon *ngIf="!showPwd" name="eye-off"></ion-icon>\n          </button> -->\n        </ion-item>\n        <div class="errorbox" style="color:tomato" *ngIf="!passwordCtrl.valid && passwordCtrl.touched">required</div>\n        <!-- <ion-item *ngIf="!passwordCtrl.valid && passwordCtrl.touched">\n            <ion-label color="danger">Password is required</ion-label>\n          </ion-item> -->\n\n        <ion-item>\n          <!-- *ngIf="showCustIdCode" -->\n          <ion-label stacked>\n            Enter Customer Identity Code\n          </ion-label>\n          <ion-input type="text" [(ngModel)]="customerCode"\n          #codeCtrl="ngModel" name="customerCode" required\n          ></ion-input>\n        </ion-item>\n        <div class="errorbox" style="color:tomato" *ngIf="!codeCtrl.valid && codeCtrl.touched">required</div>\n        <!-- <ion-item *ngIf="!codeCtrl.valid && codeCtrl.touched">\n            <ion-label color="danger">code is required</ion-label>\n          </ion-item> -->\n\n        <br/>\n        <ion-row>\n          <ion-checkbox name=\'remember\' [(ngModel)]="isRemembered" style="margin-top: 13px;"></ion-checkbox>&nbsp;&nbsp;\n          <ion-label id="checkboxRemember" color="secondary">Remember Me</ion-label>\n          <p text-right ion-text color="secondary" tappable (click)="forgotPwd()">\n            <strong>Forgot Password?</strong>\n          </p>\n\n        </ion-row>\n        <br/>\n        <div>\n          <button style="border-radius: 10px;" ion-button block color="primary" tappable [disabled]="!f.valid" (click)="logIn()">\n            <!-- <ion-icon name="log-in"></ion-icon> -->\n            Sign In\n          </button>\n          \n        </div>\n\n      </div>\n    </form>\n  </div>\n\n  <div class="addOns">\n    <div class="addOnsText">\n      <h4>Additional Services</h4>\n    </div>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n            <div class="container">\n                <img src="../assets/img/moreservices.png">\n                <h6>More Services</h6>\n              </div>\n        </ion-col>\n        <ion-col>\n            <div class="container">\n                <img src="../assets/img/contactus.png">\n                <h6>Contact Us</h6>\n              </div>\n        </ion-col>\n        <ion-col>\n            <div class="container">\n                <img src="../assets/img/monitor_support.png">\n                <h6>24 x 7 Support</h6>\n              </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n   \n\n  </div>\n\n</ion-content>\n\n<ion-footer>\n    <div class = "bar bar-footer">\n        <ion-row>\n          <ion-col col-6>\n        <h6 style="text-align: center;" class = "title">Terms and conditions</h6>\n      </ion-col>\n\n      <ion-col col-6>\n          <h6 style="text-align: center;" class = "title">Privacy Policy</h6>\n        </ion-col>\n      </ion-row>\n     </div>\n</ion-footer>\n'/*ion-inline-end:"/Users/himeshpatel/KaleLogistics/Corvi/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_http_service_http_service__["a" /* HttpServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_util_alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_7__providers_util_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_11__angular_forms__["a" /* FormBuilder */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__push_notification_push_notification__ = __webpack_require__(68);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_2__push_notification_push_notification__["a" /* PushNotificationProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ToastController */]])
    ], AlertService);
    return AlertService;
}());

//# sourceMappingURL=alert.service.js.map

/***/ }),

/***/ 443:
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], AppState);
    return AppState;
}());

//# sourceMappingURL=app.global.js.map

/***/ }),

/***/ 444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ConnectionStatusEnum */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetworkProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__ = __webpack_require__(445);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
    ], NetworkProvider);
    return NetworkProvider;
}());

//# sourceMappingURL=network.js.map

/***/ }),

/***/ 446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hammerjs__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(467);
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

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_reset_password_reset_password_module__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(645);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_http_service_http_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_global_global__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_global__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_home_home_module__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_login_login_module__ = __webpack_require__(646);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_register_register_module__ = __webpack_require__(647);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_components_module__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_quotation_quotation_module__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_network_network__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_network__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_open_jobs_open_jobs_module__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_closed_jobs_closed_jobs_module__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_invoices_invoices_module__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_file__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_file_transfer__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_file_opener__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_onesignal__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_push_notification_push_notification__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_tabs_tabs_module__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_native_storage__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_http__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_spinner_dialog__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__providers_baseUrlGenerator_baseurlgenerator__ = __webpack_require__(648);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_enquiry_enquiry_module__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_dashboard_dashboard_module__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_welcomeuser_welcomeuser_module__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_new_sales_activity_new_sales_activity_module__ = __webpack_require__(396);
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
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* CorviApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* CorviApp */], {
                    // platform: 'ios',
                    // Tabs config
                    tabsHideOnSubPages: true,
                }, {
                    links: [
                        { loadChildren: '../pages/_home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/closed-jobs/closed-jobs.module#ClosedJobsPageModule', name: 'ClosedJobsPage', segment: 'closed-jobs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule', name: 'DashboardPage', segment: 'dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/enquiry/enquiry.module#EnquiryPageModule', name: 'EnquiryPage', segment: 'enquiry', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/find-sales-activity/find-sales-activity.module#FindSalesActivityPageModule', name: 'FindSalesActivityPage', segment: 'find-sales-activity', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/invoices/invoices.module#InvoicesPageModule', name: 'InvoicesPage', segment: 'invoices', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/new-sales-activity/new-sales-activity.module#NewSalesActivityPageModule', name: 'NewSalesActivityPage', segment: 'new-sales-activity', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/open-jobs/open-jobs.module#OpenJobsPageModule', name: 'OpenJobsPage', segment: 'open-jobs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/quotation/quotation.module#QuotationPageModule', name: 'QuotationPage', segment: 'quotation', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reset-password/reset-password.module#ResetPasswordPageModule', name: 'ResetPasswordPage', segment: 'reset-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcomeuser/welcomeuser.module#WelcomeuserPageModule', name: 'WelcomeuserPage', segment: 'welcomeuser', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_12__pages_home_home_module__["HomePageModule"],
                __WEBPACK_IMPORTED_MODULE_13__pages_login_login_module__["a" /* LoginPageModule */],
                __WEBPACK_IMPORTED_MODULE_14__pages_register_register_module__["a" /* RegisterPageModule */],
                __WEBPACK_IMPORTED_MODULE_15__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_16__pages_quotation_quotation_module__["QuotationPageModule"],
                __WEBPACK_IMPORTED_MODULE_20__pages_closed_jobs_closed_jobs_module__["ClosedJobsPageModule"],
                __WEBPACK_IMPORTED_MODULE_19__pages_open_jobs_open_jobs_module__["OpenJobsPageModule"],
                __WEBPACK_IMPORTED_MODULE_21__pages_invoices_invoices_module__["InvoicesPageModule"],
                __WEBPACK_IMPORTED_MODULE_27__pages_tabs_tabs_module__["TabsPageModule"],
                __WEBPACK_IMPORTED_MODULE_32__pages_enquiry_enquiry_module__["EnquiryPageModule"],
                __WEBPACK_IMPORTED_MODULE_0__pages_reset_password_reset_password_module__["ResetPasswordPageModule"],
                __WEBPACK_IMPORTED_MODULE_33__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_32__pages_enquiry_enquiry_module__["EnquiryPageModule"], __WEBPACK_IMPORTED_MODULE_34__pages_dashboard_dashboard_module__["DashboardPageModule"], __WEBPACK_IMPORTED_MODULE_35__pages_welcomeuser_welcomeuser_module__["WelcomeuserPageModule"], __WEBPACK_IMPORTED_MODULE_36__pages_new_sales_activity_new_sales_activity_module__["NewSalesActivityPageModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* CorviApp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_7__providers_http_service_http_service__["a" /* HttpServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_10__providers_global_global__["a" /* GlobalProvider */],
                __WEBPACK_IMPORTED_MODULE_11__app_global__["a" /* AppState */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_17__providers_network_network__["a" /* NetworkProvider */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_file_opener__["a" /* FileOpener */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_onesignal__["a" /* OneSignal */],
                __WEBPACK_IMPORTED_MODULE_26__providers_push_notification_push_notification__["a" /* PushNotificationProvider */],
                __WEBPACK_IMPORTED_MODULE_28__ionic_native_native_storage__["a" /* NativeStorage */],
                __WEBPACK_IMPORTED_MODULE_29__ionic_native_http__["a" /* HTTP */],
                __WEBPACK_IMPORTED_MODULE_30__ionic_native_spinner_dialog__["a" /* SpinnerDialog */],
                __WEBPACK_IMPORTED_MODULE_31__providers_baseUrlGenerator_baseurlgenerator__["a" /* BaseURLProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 518:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 225,
	"./af.js": 225,
	"./ar": 226,
	"./ar-dz": 227,
	"./ar-dz.js": 227,
	"./ar-kw": 228,
	"./ar-kw.js": 228,
	"./ar-ly": 229,
	"./ar-ly.js": 229,
	"./ar-ma": 230,
	"./ar-ma.js": 230,
	"./ar-sa": 231,
	"./ar-sa.js": 231,
	"./ar-tn": 232,
	"./ar-tn.js": 232,
	"./ar.js": 226,
	"./az": 233,
	"./az.js": 233,
	"./be": 234,
	"./be.js": 234,
	"./bg": 235,
	"./bg.js": 235,
	"./bm": 236,
	"./bm.js": 236,
	"./bn": 237,
	"./bn.js": 237,
	"./bo": 238,
	"./bo.js": 238,
	"./br": 239,
	"./br.js": 239,
	"./bs": 240,
	"./bs.js": 240,
	"./ca": 241,
	"./ca.js": 241,
	"./cs": 242,
	"./cs.js": 242,
	"./cv": 243,
	"./cv.js": 243,
	"./cy": 244,
	"./cy.js": 244,
	"./da": 245,
	"./da.js": 245,
	"./de": 246,
	"./de-at": 247,
	"./de-at.js": 247,
	"./de-ch": 248,
	"./de-ch.js": 248,
	"./de.js": 246,
	"./dv": 249,
	"./dv.js": 249,
	"./el": 250,
	"./el.js": 250,
	"./en-au": 251,
	"./en-au.js": 251,
	"./en-ca": 252,
	"./en-ca.js": 252,
	"./en-gb": 253,
	"./en-gb.js": 253,
	"./en-ie": 254,
	"./en-ie.js": 254,
	"./en-il": 255,
	"./en-il.js": 255,
	"./en-nz": 256,
	"./en-nz.js": 256,
	"./eo": 257,
	"./eo.js": 257,
	"./es": 258,
	"./es-do": 259,
	"./es-do.js": 259,
	"./es-us": 260,
	"./es-us.js": 260,
	"./es.js": 258,
	"./et": 261,
	"./et.js": 261,
	"./eu": 262,
	"./eu.js": 262,
	"./fa": 263,
	"./fa.js": 263,
	"./fi": 264,
	"./fi.js": 264,
	"./fo": 265,
	"./fo.js": 265,
	"./fr": 266,
	"./fr-ca": 267,
	"./fr-ca.js": 267,
	"./fr-ch": 268,
	"./fr-ch.js": 268,
	"./fr.js": 266,
	"./fy": 269,
	"./fy.js": 269,
	"./gd": 270,
	"./gd.js": 270,
	"./gl": 271,
	"./gl.js": 271,
	"./gom-latn": 272,
	"./gom-latn.js": 272,
	"./gu": 273,
	"./gu.js": 273,
	"./he": 274,
	"./he.js": 274,
	"./hi": 275,
	"./hi.js": 275,
	"./hr": 276,
	"./hr.js": 276,
	"./hu": 277,
	"./hu.js": 277,
	"./hy-am": 278,
	"./hy-am.js": 278,
	"./id": 279,
	"./id.js": 279,
	"./is": 280,
	"./is.js": 280,
	"./it": 281,
	"./it.js": 281,
	"./ja": 282,
	"./ja.js": 282,
	"./jv": 283,
	"./jv.js": 283,
	"./ka": 284,
	"./ka.js": 284,
	"./kk": 285,
	"./kk.js": 285,
	"./km": 286,
	"./km.js": 286,
	"./kn": 287,
	"./kn.js": 287,
	"./ko": 288,
	"./ko.js": 288,
	"./ky": 289,
	"./ky.js": 289,
	"./lb": 290,
	"./lb.js": 290,
	"./lo": 291,
	"./lo.js": 291,
	"./lt": 292,
	"./lt.js": 292,
	"./lv": 293,
	"./lv.js": 293,
	"./me": 294,
	"./me.js": 294,
	"./mi": 295,
	"./mi.js": 295,
	"./mk": 296,
	"./mk.js": 296,
	"./ml": 297,
	"./ml.js": 297,
	"./mn": 298,
	"./mn.js": 298,
	"./mr": 299,
	"./mr.js": 299,
	"./ms": 300,
	"./ms-my": 301,
	"./ms-my.js": 301,
	"./ms.js": 300,
	"./mt": 302,
	"./mt.js": 302,
	"./my": 303,
	"./my.js": 303,
	"./nb": 304,
	"./nb.js": 304,
	"./ne": 305,
	"./ne.js": 305,
	"./nl": 306,
	"./nl-be": 307,
	"./nl-be.js": 307,
	"./nl.js": 306,
	"./nn": 308,
	"./nn.js": 308,
	"./pa-in": 309,
	"./pa-in.js": 309,
	"./pl": 310,
	"./pl.js": 310,
	"./pt": 311,
	"./pt-br": 312,
	"./pt-br.js": 312,
	"./pt.js": 311,
	"./ro": 313,
	"./ro.js": 313,
	"./ru": 314,
	"./ru.js": 314,
	"./sd": 315,
	"./sd.js": 315,
	"./se": 316,
	"./se.js": 316,
	"./si": 317,
	"./si.js": 317,
	"./sk": 318,
	"./sk.js": 318,
	"./sl": 319,
	"./sl.js": 319,
	"./sq": 320,
	"./sq.js": 320,
	"./sr": 321,
	"./sr-cyrl": 322,
	"./sr-cyrl.js": 322,
	"./sr.js": 321,
	"./ss": 323,
	"./ss.js": 323,
	"./sv": 324,
	"./sv.js": 324,
	"./sw": 325,
	"./sw.js": 325,
	"./ta": 326,
	"./ta.js": 326,
	"./te": 327,
	"./te.js": 327,
	"./tet": 328,
	"./tet.js": 328,
	"./tg": 329,
	"./tg.js": 329,
	"./th": 330,
	"./th.js": 330,
	"./tl-ph": 331,
	"./tl-ph.js": 331,
	"./tlh": 332,
	"./tlh.js": 332,
	"./tr": 333,
	"./tr.js": 333,
	"./tzl": 334,
	"./tzl.js": 334,
	"./tzm": 335,
	"./tzm-latn": 336,
	"./tzm-latn.js": 336,
	"./tzm.js": 335,
	"./ug-cn": 337,
	"./ug-cn.js": 337,
	"./uk": 338,
	"./uk.js": 338,
	"./ur": 339,
	"./ur.js": 339,
	"./uz": 340,
	"./uz-latn": 341,
	"./uz-latn.js": 341,
	"./uz.js": 340,
	"./vi": 342,
	"./vi.js": 342,
	"./x-pseudo": 343,
	"./x-pseudo.js": 343,
	"./yo": 344,
	"./yo.js": 344,
	"./zh-cn": 345,
	"./zh-cn.js": 345,
	"./zh-hk": 346,
	"./zh-hk.js": 346,
	"./zh-tw": 347,
	"./zh-tw.js": 347
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
webpackContext.id = 518;

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__more_more__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__header_header__ = __webpack_require__(625);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pdfviewer_pdfviewer__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_pdf_viewer__ = __webpack_require__(378);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
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

/***/ 568:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 570:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 591:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 592:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 593:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 625:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__more_more__ = __webpack_require__(391);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('title'),
        __metadata("design:type", String)
    ], HeaderComponent.prototype, "title", void 0);
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'Corvi-header',template:/*ion-inline-start:"/Users/himeshpatel/KaleLogistics/Corvi/src/components/header/header.html"*/'<ion-header>\n  <ion-navbar color="primary">\n\n    <ion-title id="Dashboard" center text-center>\n      {{title}}\n    </ion-title>\n\n    <ion-buttons end>\n      <!-- <button ion-button icon-only (click)="presentOptions($event)">\n        <ion-icon name="more"></ion-icon>\n      </button> -->\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n'/*ion-inline-end:"/Users/himeshpatel/KaleLogistics/Corvi/src/components/header/header.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* PopoverController */]])
    ], HeaderComponent);
    return HeaderComponent;
}());

//# sourceMappingURL=header.js.map

/***/ }),

/***/ 626:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_http_service_http_service__ = __webpack_require__(30);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('pieCanvas'),
        __metadata("design:type", Object)
    ], HomeDetailPage.prototype, "pieCanvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('barCanvas'),
        __metadata("design:type", Object)
    ], HomeDetailPage.prototype, "barCanvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Slides */])
    ], HomeDetailPage.prototype, "slides", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('mySlider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Slides */])
    ], HomeDetailPage.prototype, "slider", void 0);
    HomeDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home-detail',template:/*ion-inline-start:"/Users/himeshpatel/KaleLogistics/Corvi/src/pages/_home/home-detail-page.html"*/'<ion-content>\n  <ion-card>\n    <ion-label>Total Enquiries : 10</ion-label>\n    <ion-slides autoplay="3000" pager slidesPerView="1" effect=\'coverflow\'>\n      <ion-slide *ngFor="let slide of slidesArray" class="text-center slider-item" (click)="viewDetails(slide.page)"\n        [ngStyle]="{\'background\': slide.bgColor}">\n        <div class="slide-text">\n          <h2 class="h2customClass">{{slide.title}}</h2>\n          <p text-center class="pCustomcls">{{slide.count}} </p>\n        </div>\n      </ion-slide>\n    </ion-slides>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n      Pie Chart\n    </ion-card-header>\n    <ion-card-content>\n      <canvas #pieCanvas></canvas>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n      Bar Chart\n    </ion-card-header>\n    <ion-card-content>\n      <canvas #barCanvas></canvas>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n\n'/*ion-inline-end:"/Users/himeshpatel/KaleLogistics/Corvi/src/pages/_home/home-detail-page.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* MenuController */], __WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_http_service_http_service__["a" /* HttpServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
    ], HomeDetailPage);
    return HomeDetailPage;
}());

//# sourceMappingURL=home-detail-page.js.map

/***/ }),

/***/ 627:
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'moment'
        })
    ], MomentPipe);
    return MomentPipe;
}());

//# sourceMappingURL=moment.js.map

/***/ }),

/***/ 645:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CorviApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_global__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_global_global__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__constants__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_network_network__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_push_notification_push_notification__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__ = __webpack_require__(400);
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
    function CorviApp(platform, statusBar, splashscreen, global, menuCtrl, app, globalService, networkProvider, events, pushNotification) {
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
        this.activePage = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__["Subject"]();
        this.placeholder = 'assets/img/person.png';
        // App Initialisation
        this.initializeApp();
        // Stores JSON Array of Pages for Init.
        this.pages = __WEBPACK_IMPORTED_MODULE_8__constants__["a" /* Constants */].MENU_PAGES_ARRAY;
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
        this.handleBackEvent();
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* Nav */])
    ], CorviApp.prototype, "nav", void 0);
    CorviApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/himeshpatel/KaleLogistics/Corvi/src/app/app.html"*/'<div class="{{global.state[\'theme\']}}">\n\n    <!--Side Menu with avatar(IOS)-->\n    <ion-menu side="end" [content]="content" id="menu-avatar">\n        <ion-content>\n            <div #header>\n                <ion-row style="align-items:center;justify-content: center;">\n                    <ion-col col-6 menuClose style="max-width:40% !important">\n                        <img class="user-avatar round" [src]="chosenPicture || placeholder"\n                            onerror="this.src=\'assets/img/person.png\'" />\n                    </ion-col>\n\n                </ion-row>\n                <div style="justify-content: center;" menuClose>\n                    <h3 class="name" style="text-align: center;margin-top: 0px;font-family: monospace;">\n                        Hello,{{UserName}}</h3>\n                    <!-- <p class="e-mail" style="text-align: center;color: #ffffff;">example@email.com</p> -->\n                </div>\n            </div>\n            <ion-list no-lines>\n                <button menuClose ion-item detail-none *ngFor="let p of pages" (click)="openPage(p)"\n                    [ngClass]="(p.active)?\'active-menu-item-color\':\'\'">\n                    <!-- <ion-icon [name]="p.icon" item-left [ngClass]="(p.icon == \'close\')?\'font-bold\':\'\'"></ion-icon> -->\n                    {{p.title}}\n                </button>\n            </ion-list>\n        </ion-content>\n    </ion-menu>\n\n\n    <!--Material Design Menu(Android)-->\n    <ion-menu side="end" [content]="content" id="menu-material">\n        <ion-content>\n            <div class="menu-header">\n                <!--material-design-background-->\n                <img menuClose class="user-avatar round" [src]="chosenPicture || placeholder"\n                    onerror="this.src=\'assets/img/person.png\'" />\n                <p menuClose class="name" style="color: #626262;font-weight: bold;font-family: sans-serif;">\n                    Hello,{{UserName}}\n                </p>\n                <!-- <p menuClose class="e-mail">example@email.com</p> -->\n            </div>\n            <ion-list no-lines>\n                <button menuClose ion-item detail-none *ngFor="let p of pages" (click)="openPage(p)"\n                    [ngClass]="(p.active)?\'active-menu-item-color\':\'\'">\n                    <!-- <ion-icon [name]="p.icon" item-left></ion-icon> -->\n                    {{p.title}}\n                </button>\n            </ion-list>\n        </ion-content>\n\n        <ion-footer>\n            <ion-toolbar id="toolbar">\n                <button menuClose="left" ion-item (click)="Logout()">\n                    <ion-icon name="power" item-left></ion-icon>\n                    <ion-grid>\n                        <ion-row>\n                            <ion-col>\n                                Logout\n                            </ion-col>\n                            <ion-col text-end style="font-size: 1.2rem;top: 2px;">\n                                {{appVersion}}\n                            </ion-col>\n                        </ion-row>\n                    </ion-grid>\n                </button>\n            </ion-toolbar>\n        </ion-footer>\n    </ion-menu>\n    <!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n    <ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n</div>'/*ion-inline-end:"/Users/himeshpatel/KaleLogistics/Corvi/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_0__app_global__["a" /* AppState */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_7__providers_global_global__["a" /* GlobalProvider */],
            __WEBPACK_IMPORTED_MODULE_9__providers_network_network__["a" /* NetworkProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_10__providers_push_notification_push_notification__["a" /* PushNotificationProvider */]])
    ], CorviApp);
    return CorviApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 646:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_util_toast_service__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_util_alert_service__ = __webpack_require__(43);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
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

/***/ 647:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register__ = __webpack_require__(349);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
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

/***/ 648:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseURLProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global_global__ = __webpack_require__(12);
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
                // return this.global.setBaseURL('baseURL', 'http://10.22.2.31:8080/CORVI_SOMA_MOB_API/MobileApi/');
                return this.global.setBaseURL('baseURL', 'https://lmsinv.balmerlawrie.co.in/Mobapi/MobileAPI/');
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
                // this.global.store('PDFURL', '192.168.10.22/staging/');
                return this.global.setBaseURL('baseURL', 'http://61.95.145.131/CORVI_MOB_API/MobileApi/');
            case 'SIC':
                // this.global.store('PDFURL', '192.168.10.22/staging/');
                return this.global.setBaseURL('baseURL', 'http://223.31.96.135/Corvi_MOB_API/MobileApi/');
            case 'DEM':
                // this.global.store('PDFURL', '192.168.10.22/staging/');
                return this.global.setBaseURL('baseURL', 'http://104.211.164.207/MobileApi/MobileApi/');
            case 'SSF':
                this.global.store('PDFURL', '192.168.10.22/staging/');
                return this.global.setBaseURL('baseURL', 'http://192.168.10.22/StagingMobileApi/MobileApi/');
            default:
                return new Promise(function (resolve, reject) {
                    return resolve('');
                });
        }
    };
    BaseURLProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__global_global__["a" /* GlobalProvider */]])
    ], BaseURLProvider);
    return BaseURLProvider;
}());

//# sourceMappingURL=baseurlgenerator.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PushNotificationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_onesignal__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_global__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__http_service_http_service__ = __webpack_require__(30);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_onesignal__["a" /* OneSignal */], __WEBPACK_IMPORTED_MODULE_2__global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_4__http_service_http_service__["a" /* HttpServiceProvider */]])
    ], PushNotificationProvider);
    return PushNotificationProvider;
}());

//# sourceMappingURL=push-notification.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__moment_moment__ = __webpack_require__(627);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__moment_moment__["a" /* MomentPipe */]],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__moment_moment__["a" /* MomentPipe */]]
        })
    ], PipesModule);
    return PipesModule;
}());

//# sourceMappingURL=pipes.module.js.map

/***/ })

},[446]);
//# sourceMappingURL=main.js.map