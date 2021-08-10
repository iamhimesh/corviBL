webpackJsonp([1],{

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_http_service_http_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__quotation_quotation__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__open_jobs_open_jobs__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__closed_jobs_closed_jobs__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__invoices_invoices__ = __webpack_require__(144);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('pieCanvas'),
        __metadata("design:type", Object)
    ], HomePage.prototype, "pieCanvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('barCanvas'),
        __metadata("design:type", Object)
    ], HomePage.prototype, "barCanvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('mySlider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* Slides */])
    ], HomePage.prototype, "slider", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/himeshpatel/Documents/kaleLogistics/Corvi/src/pages/_home/home.html"*/'<!-- <Corvi-header [title]="title"></Corvi-header> -->\n<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title id="Dashboard" center text-center>\n      {{title}}\n    </ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only >\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  <ion-toolbar no-border-top mode=\'md\'>\n    <ion-segment mode=\'md\' [(ngModel)]="selectedSegment" (ionChange)="onSegmentChanged($event)">\n      <ion-segment-button value="Enquiry" color="secondary">\n        Enquiry\n      </ion-segment-button>\n      <ion-segment-button value="Quotation">\n        Quotation\n      </ion-segment-button>\n      <ion-segment-button value="Invoice">\n        Invoice\n      </ion-segment-button>\n\n      <ion-segment-button value="Jobs">\n        Jobs\n      </ion-segment-button>\n      <ion-segment-button value="Milestones">\n        Milestones\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n<ion-content class="pop-in">\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <page-home-detail></page-home-detail>\n  <!-- <ion-slides *ngIf="slides && slides.length" #mySlider (ionSlideDidChange)="onSlideChanged($event)">\n    <ion-slide>\n      <page-home-detail></page-home-detail>\n\n    </ion-slide>\n\n    <ion-slide>\n      <page-home-detail></page-home-detail>\n    </ion-slide>\n\n    <ion-slide>\n      <page-home-detail></page-home-detail>\n\n    </ion-slide>\n\n    <ion-slide>\n      <page-home-detail></page-home-detail>\n\n    </ion-slide>\n\n    <ion-slide>\n      <page-home-detail></page-home-detail>\n\n    </ion-slide>\n  </ion-slides> -->\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n  <!-- </div> -->\n</ion-content>\n'/*ion-inline-end:"/Users/himeshpatel/Documents/kaleLogistics/Corvi/src/pages/_home/home.html"*/
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

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnquiryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_global__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detail_enquiry_cargo_detail__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(43);
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
            selector: 'page-enquiry',template:/*ion-inline-start:"/Users/himeshpatel/Documents/kaleLogistics/Corvi/src/pages/enquiry/enquiry.html"*/'<Corvi-header [title]="title" [hidden]="showSearchBar"></Corvi-header>\n<ion-content class="marginTop57">\n  <ion-list>\n    <!-- <ion-list-header>Enquiry Form</ion-list-header> -->\n\n    <ion-item>\n      <ion-label>Select Mode</ion-label>\n      <ion-select placeholder="Select">\n        <ion-option value="air">AIR</ion-option>\n        <ion-option value="ocean">OCEAN</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Select Service</ion-label>\n      <ion-select placeholder="Select">\n        <ion-option value="air">AIR</ion-option>\n        <ion-option value="ocean">OCEAN</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Shipment Type</ion-label>\n      <ion-select placeholder="Select">\n        <ion-option value="air">AIR</ion-option>\n        <ion-option value="ocean">OCEAN</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Shipment Service</ion-label>\n      <ion-select placeholder="Select">\n        <ion-option value="air">AIR</ion-option>\n        <ion-option value="ocean">OCEAN</ion-option>\n      </ion-select>\n    </ion-item>\n\n  </ion-list>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col> <button ion-button icon-start block color="primary" tappable (click)="goToCargoDetailPage()">\n          <ion-icon name="arrow-round-forward"></ion-icon>\n          Proceed\n        </button></ion-col>\n      <ion-col><button ion-button icon-start block color="primary" tappable (click)="goTologinPage()">\n          <ion-icon name="close-circle"></ion-icon>\n          Cancel\n        </button></ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/himeshpatel/Documents/kaleLogistics/Corvi/src/pages/enquiry/enquiry.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */]])
    ], EnquiryPage);
    return EnquiryPage;
}());

//# sourceMappingURL=enquiry.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export saveNewSalesActivityPage */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewSalesActivityPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_global__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_http_service_http_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_util_alert_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_util_toast_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__find_sales_activity_find_sales_activity__ = __webpack_require__(94);
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

var NewSalesActivityPage = /** @class */ (function () {
    function NewSalesActivityPage(navCtrl, navParams, globalService, modalCtrl, nav, menu, toastCtrl, http, alertService, toastService, 
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
        this.UserDetails = [];
        this.BranchTbl = [];
        this.ActivityTbl = [];
        this.branchCode = '0';
        // startDate: String = new Date().toISOString();
        // endtDate: String = new Date().toISOString();
        this.startDate = '';
        this.endtDate = '';
        this.customerData = [];
        this.commMode = '5';
        this.activityType = '1';
        this.priority = '1';
        this.status = '5';
        this.vCode = '';
        this.sTime = '';
        this.bDesc = '';
        this.notes = '';
        this.userID = '';
        this.currDate = new Date();
        this.isenabled = false;
        this.title = "New Sales Activity";
        this.appBuildConfig = this.globalService.appBuildConfig;
        this.UserDetails = this.globalService.get('userDetails');
        this.customerData = this.globalService.get('customerData');
        this.filterCustomerData = this.customerData[Object.keys(this.customerData)[1]];
        this.BranchTbl = this.UserDetails[Object.keys(this.UserDetails)[1]]["Table4"];
        this.ActivityTbl = this.UserDetails[Object.keys(this.UserDetails)[1]]["Table3"];
        this.filterActivity = this.ActivityTbl.filter(function (t) { return t.Identifier == 'Activity'; });
        this.filterActivityPriority = this.ActivityTbl.filter(function (t) { return t.Identifier == 'ActivityPriority'; });
        this.filterMode = this.ActivityTbl.filter(function (t) { return t.Identifier == 'CommunicationType'; });
        this.filterActivityStatus = this.ActivityTbl.filter(function (t) { return t.Identifier == 'ActivityStatus'; });
        this.userID = localStorage.getItem('userId');
        this.saveActivity = new saveNewSalesActivityPage();
        // this.fetchedData = this.navParams.get('searchDetails');
        this.tempBranch = localStorage.getItem('branchCode');
        if (this.filterCustomerData.VendorName) {
            this.isenabled = true;
        }
    }
    NewSalesActivityPage.prototype.ngOnInit = function () {
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
            _this.madalDismissData = JSON.stringify(data);
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
        debugger;
        if (this.branchCode == '0') {
            this.toastService.show('Please select branch.', 3000, true, 'top', 'toast-container');
            //this.startDate.focus();
            return;
        }
        if (this.filterCustomerData.BranchName == '') {
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
        this.saveActivity.AppointmentID = '0';
        this.saveActivity.BranchCode = this.branchCode;
        this.saveActivity.CommunicationMode = this.commMode;
        this.saveActivity.ActivityType = this.activityType;
        this.saveActivity.Priority = this.priority;
        this.saveActivity.Status = this.status;
        this.saveActivity.VendorCode = this.filterCustomerData.VendorId.toString();
        this.saveActivity.ContactPerson = this.filterCustomerData.VendorName;
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
                // localStorage.removeItem('login_resp');
                // localStorage.removeItem('userDetails');
                localStorage.removeItem('branchCode');
                localStorage.removeItem('customerData');
                localStorage.removeItem('branchCode');
                _this.toastService.show(response, 3000, true, 'top', 'toast-success');
                _this.globalService.setRootPage(__WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard__["a" /* DashboardPage */]);
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
    NewSalesActivityPage.prototype.getSelectedOptionText = function () {
        // debugger
        // alert(this.branchCode);
        // alert(this.branchCode);
        localStorage.setItem('bvalue', this.branchCode);
        // localStorage.setItem('btext', this.branchCode.branch);
    };
    NewSalesActivityPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-new-sales-activity',template:/*ion-inline-start:"/Users/himeshpatel/Documents/kaleLogistics/Corvi/src/pages/new-sales-activity/new-sales-activity.html"*/'<!--\n  Generated template for the NewSalesActivityPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <!-- <button right ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <button left ion-button menuToggle>\n      <ion-icon name="arrow-back"></ion-icon>\n    </button> -->\n    <ion-title id="Dashboard" center text-center>\n      {{title}}\n    </ion-title>\n\n    <ion-buttons left>\n      <button ion-button icon-only (click)="backToDashboard();">\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-buttons right>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-row padding class="ShadowBox13">\n      <ion-col col-12>\n        <label>\n          Branch\n        </label>\n        <font color="red" class="margin12">*</font>\n      </ion-col>\n      <ion-col col-12>\n\n        <select id="ddlBrach" name="ddlBrach" [(ngModel)]="branchCode" (change)="getSelectedOptionText()" col-12\n          placeholder="">\n          <option [value]="0" disabled selected>Select</option>\n          <option *ngFor="let brData of BranchTbl" [value]="brData.BranchCode">{{brData.branch}}</option>\n\n        </select>\n\n      </ion-col>\n      <ion-col col-6>\n        <label>\n          Communication Mode\n        </label>\n        <font color="red" class="margin12">*</font>\n      </ion-col>\n      <ion-col col-6>\n        <label>\n          Activity\n        </label>\n        <font color="red" class="margin12">*</font>\n      </ion-col>\n      <ion-col col-6>\n\n        <select col-12 placeholder="" [(ngModel)]="commMode">\n          <option [value]="5" disabled selected>Visit</option>\n          <option *ngFor="let acData of filterMode " [value]="acData.KeyValue">{{acData.Description}}</option>\n        </select>\n      </ion-col>\n\n      <ion-col col-6>\n        <select col-12 placeholder="" [(ngModel)]="activityType">\n          <option *ngFor="let acData of filterActivity" [value]="acData.KeyValue">{{acData.Description}}</option>\n        </select>\n      </ion-col>\n      <ion-col col-6>\n        <label>\n          Priority\n        </label>\n        <font color="red" class="margin12">*</font>\n      </ion-col>\n      <ion-col col-6>\n        <label>\n          Status\n        </label>\n        <font color="red" class="margin12">*</font>\n      </ion-col>\n      <ion-col col-6>\n\n        <select col-12 placeholder="" [(ngModel)]="priority">\n          <option *ngFor="let acData of filterActivityPriority" [value]="acData.KeyValue">{{acData.Description}}\n          </option>\n        </select>\n      </ion-col>\n\n\n\n      <ion-col col-6>\n\n        <select col-12 placeholder="" [(ngModel)]="status">\n          <option [value]="5" disabled selected>Yet to start</option>\n          <option *ngFor="let acData of filterActivityStatus" [value]="5">{{acData.Description}}</option>\n\n        </select>\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row padding class="ShadowBox13">\n\n      <ion-col col-12>\n        <label>\n          Company\n        </label>\n        <font color="red" class="margin12">*</font>\n      </ion-col>\n\n      <ion-col col-10>\n\n        <input maxlength="50" disabled type="text" [(ngModel)]="filterCustomerData.BranchName" col-12 placeholder="">\n\n      </ion-col>\n      <ion-col col-2>\n        <button ion-fab class="ion-fab34" (click)="openModal();">\n          <ion-icon name="md-search" class=""></ion-icon>\n        </button>\n      </ion-col>\n\n      <ion-col col-12>\n        <label>\n          Address\n        </label>\n      </ion-col>\n\n\n      <ion-col col-12>\n\n        <textarea maxlength="250" col-12 placeholder="" [(ngModel)]="filterCustomerData.Address1">\n        </textarea>\n      </ion-col>\n\n\n      <ion-col col-12>\n        <label>\n          Contact Person\n        </label>\n        <font color="red" class="margin12">*</font>\n      </ion-col>\n\n      <ion-col col-12 style="margin-top: 5px;">\n\n        <input maxlength="50" col-12 placeholder="" type="text" [(ngModel)]="filterCustomerData.VendorName">\n      </ion-col>\n    </ion-row>\n    <ion-row padding class="ShadowBox13">\n      <ion-col col-6>\n        <label style="line-height: 3;">\n          Start Time\n        </label>\n        <font color="red" class="margin12">*</font>\n      </ion-col>\n\n      <ion-col col-6 style="margin-top: 5px;">\n\n        <input col-12 type="datetime-local" [(ngModel)]="startDate">\n      </ion-col>\n\n      <ion-col col-6>\n        <label style="line-height: 3;">\n          End Time\n        </label>\n        <font color="red" class="margin12">*</font>\n      </ion-col>\n\n      <ion-col col-6 style="margin-top: 5px;">\n\n        <input col-12 type="datetime-local" [(ngModel)]="endtDate" (ngModelChange)="changed($event)">\n      </ion-col>\n\n      <ion-col col-12>\n        <!-- <table>\n          <tr>\n\n            <td>\n              <ion-item>\n                <ion-label style="color: #000;">Start Time</ion-label>\n                <input type="date" displayFormat="DD/MM/YYYY HH:mm" [(ngModel)]="startDate">\n              </ion-item>\n            </td>\n\n          </tr>\n          <tr>\n\n            <td>\n              <ion-item>\n                <ion-label style="color: #000;">End Time</ion-label>\n                <input type="date" displayFormat="DD/MM/YYYY HH:mm" [(ngModel)]="endtDate" (ngModelChange)="changed($event)">\n\n              </ion-item>\n            </td>\n\n          </tr>\n        </table> -->\n      </ion-col>\n      <ion-col col-12>\n        <label>\n          General Remarks\n        </label>\n        <font color="red" class="margin12">*</font>\n      </ion-col>\n      <ion-col col-12>\n\n        <textarea maxlength="1000" col-12 placeholder="" [(ngModel)]="bDesc">\n        </textarea>\n      </ion-col>\n      <ion-col col-12>\n        <label>\n          Notes\n        </label>\n      </ion-col>\n      <ion-col col-12 style="margin-top: 5px;">\n\n        <textarea maxlength="1000" col-12 placeholder="" [(ngModel)]="notes">\n        </textarea>\n      </ion-col>\n\n    </ion-row>\n\n\n\n  </ion-list>\n</ion-content>\n<ion-footer class="ion-footer">\n  <ion-row padding class="ShadowBox13">\n    <ion-col col-12>\n      <span style="color: red;">(*) Marks field are mandatory to fill up</span>\n    </ion-col>\n    <ion-col col-6>\n      <button ion-button round outline class="btncancel" (click)="backToDashboard();">\n        <ion-icon></ion-icon>\n        Cancel\n      </button>\n    </ion-col>\n\n    <ion-col col-6>\n      <button ion-button icon-start block class="btnRadius" [disabled]="!isenabled" (click)="SalesActivitySave();">\n        <ion-icon></ion-icon>\n        Save\n      </button>\n    </ion-col>\n  </ion-row>\n  <div class="label-white toolbar-background-md" center text-center>\n    © Kale Logistics Solutions Private Limited. {{appBuildConfig.fullYear}} Version {{appBuildConfig.version}}\n  </div>\n</ion-footer>\n'/*ion-inline-end:"/Users/himeshpatel/Documents/kaleLogistics/Corvi/src/pages/new-sales-activity/new-sales-activity.html"*/,
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
    ], NewSalesActivityPage);
    return NewSalesActivityPage;
}());

//# sourceMappingURL=new-sales-activity.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuotationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_global__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_http_service_http_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__quotation_detail_quotation_detail__ = __webpack_require__(394);
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
            selector: 'page-quotation',template:/*ion-inline-start:"/Users/himeshpatel/Documents/kaleLogistics/Corvi/src/pages/quotation/quotation.html"*/'<Corvi-header [title]="title" [hidden]="showSearchBar"></Corvi-header>\n<ion-searchbar [hidden]="!showSearchBar" placeholder="Search..." showCancelButton color="primary" [animated]="true"\n  (ionInput)="filterItems($event)" [(ngModel)]="searchQuery" (ionCancel)="onCancel($event)"></ion-searchbar>\n<ion-content class="marginTop57">\n\n  <ion-list [virtualScroll]="quotationList" approxItemHeight="40px">\n    <ion-item-sliding *virtualItem="let item">\n      <ion-item (click)="goToQuotationDetails(item)">\n\n        <ion-avatar item-start>\n          <div class="customised_avatar_Img">\n            {{item.QuotationDate | moment:"date-DD/MM/YYYY"}}\n          </div>\n          <div style="text-align: center">{{item.QuotationDate | moment:"month-DD/MM/YYYY"}}</div>\n        </ion-avatar>\n        <h3>Quotation No : {{item.QuotationNo}}</h3>\n        <p> Quotation Id : {{item.QuotationId }}</p>\n        <!-- <p> Quotation Date : {{item.QuotationDate }}</p> -->\n        <!-- <p>Mode : {{item.Mode}}</p> -->\n        <p>Service : {{item.Service}}</p>\n        <p>Status : {{item.Status}}</p>\n\n      </ion-item>\n    </ion-item-sliding>\n  </ion-list>\n  <br>\n  <br>\n  <br>\n  <div *ngIf="quotationList.length <= 0" style="text-align:center">No Quotation Found</div>\n\n</ion-content>\n\n<ion-fab right bottom #fab1 *ngIf="quotationList.length > 0" [ngClass]="{\'bottom63px\': !tabsDisabled}">\n  <button class="pop-in" ion-fab mini color="primary" [ngClass]="{\'pop-out\': fabGone}" (click)="showSearch()">\n    <ion-icon name="search"></ion-icon>\n  </button>\n</ion-fab>'/*ion-inline-end:"/Users/himeshpatel/Documents/kaleLogistics/Corvi/src/pages/quotation/quotation.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_http_service_http_service__["a" /* HttpServiceProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */]])
    ], QuotationPage);
    return QuotationPage;
}());

//# sourceMappingURL=quotation.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpenJobsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_service_http_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_global__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__detail_open_jobs_details__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_util_alert_service__ = __webpack_require__(23);
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
            selector: 'page-open-jobs',template:/*ion-inline-start:"/Users/himeshpatel/Documents/kaleLogistics/Corvi/src/pages/open-jobs/open-jobs.html"*/'<Corvi-header [title]="title" [hidden]="showSearchBar"></Corvi-header>\n<ion-searchbar [hidden]="!showSearchBar" placeholder="Search..." showCancelButton color="primary" [animated]="true"\n    (ionInput)="filterItems($event)" [(ngModel)]="searchQuery" (ionCancel)="onCancel($event)"></ion-searchbar>\n<ion-content class="marginTop57">\n\n    <ion-list [virtualScroll]="openJobs" approxItemHeight="40px">\n        <ion-item-sliding *virtualItem="let item">\n            <ion-item>\n                <ion-avatar item-start (click)="goToOpenJobsDetail(item)">\n                    <div class="customised_avatar_Img">\n                        {{item.JobDate | moment:"date-MM/DD/YYYY"}}\n                    </div>\n                    <div style="text-align: center">{{item.JobDate | moment:"month-MM/DD/YYYY"}}</div>\n                </ion-avatar>\n                <ion-label (click)="goToOpenJobsDetail(item)" style="overflow: initial !important;">\n                    <h3>Job No : {{item.JobNo}}</h3>\n                    <p>\n                        {{item.MasterNo}}/{{item.HouseNo}}</p>\n                    <!--Master/House No.-->\n                    <p>{{item.Mode}}/{{item.Service}}</p>\n                    <!--Ocean/Export-->\n                </ion-label>\n                <!-- <ion-toggle [(ngModel)]="item.checked" (ionChange)="updateItem(item)"></ion-toggle> -->\n                <!-- <ion-label icon-only ion-button (click)="updateItem(item)">\n                            <ion-icon name="more"></ion-icon>\n                        </ion-label> -->\n                <ion-label (click)="followJob(item)" text-end>\n                    <ion-icon name="more"></ion-icon>\n                </ion-label>\n            </ion-item>\n\n\n            <!-- <ion-item-options side="right">\n                        <button ion-button color="primary" (click)="ViewPDFNative(item)">\n                            <ion-icon name="information"></ion-icon>\n                            Follow this Job\n                        </button>\n                    </ion-item-options> -->\n        </ion-item-sliding>\n    </ion-list>\n    <br>\n    <br>\n    <br>\n    <div *ngIf="openJobs.length <= 0" style="text-align:center">No open Jobs Found</div>\n\n</ion-content>\n\n<ion-fab right bottom #fab1 *ngIf="openJobs.length > 0" [ngClass]="{\'bottom63px\': !tabsDisabled}">\n    <button class="pop-in" ion-fab mini color="primary" [ngClass]="{\'pop-out\': fabGone}" (click)="showSearch()">\n        <ion-icon name="search"></ion-icon>\n    </button>\n</ion-fab>'/*ion-inline-end:"/Users/himeshpatel/Documents/kaleLogistics/Corvi/src/pages/open-jobs/open-jobs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_http_service_http_service__["a" /* HttpServiceProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_util_alert_service__["a" /* AlertService */]])
    ], OpenJobsPage);
    return OpenJobsPage;
}());

//# sourceMappingURL=open-jobs.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClosedJobsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_service_http_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__detail_closed_jobs_details__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_push_notification_push_notification__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_util_alert_service__ = __webpack_require__(23);
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
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Searchbar */])
    ], ClosedJobsPage.prototype, "searchbar", void 0);
    ClosedJobsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-closed-jobs',template:/*ion-inline-start:"/Users/himeshpatel/Documents/kaleLogistics/Corvi/src/pages/closed-jobs/closed-jobs.html"*/'<Corvi-header [title]="title" [hidden]="showSearchBar"></Corvi-header>\n<ion-searchbar #searchbar [hidden]="!showSearchBar" placeholder="Search..." showCancelButton color="primary" [animated]="true"\n    (ionInput)="filterItems($event)" [(ngModel)]="searchQuery" (ionCancel)="onCancel($event)"></ion-searchbar>\n<ion-content class="marginTop57">\n\n    <ion-list [virtualScroll]="closedJobs" approxItemHeight="40px">\n        <ion-item-sliding *virtualItem="let item">\n            <ion-item>\n                <ion-avatar item-start (click)="goToClosedJobsDetail(item)">\n                    <div class="customised_avatar_Img">\n                        {{item.JobDate | moment:"date-MM/DD/YYYY"}}\n                    </div>\n                    <div style="text-align: center">{{item.JobDate | moment:"month-MM/DD/YYYY"}}</div>\n                </ion-avatar>\n                <ion-label (click)="goToClosedJobsDetail(item)" style="overflow: initial !important;">\n                    <h3>Job No : {{item.JobNo}}</h3>\n                    <p>\n                        {{item.MasterNo}}/{{item.HouseNo}}</p>\n                    <!--Master/House No.-->\n                    <p>{{item.Mode}}/{{item.Service}}</p>\n                    <!--Ocean/Export-->\n                    <!-- <p *ngIf="item?.milestones">Last Milestones : {{item.milestones}}</p>\n                    <p *ngIf="item?.weight">Total packages/weight : {{item.weight}}</p> -->\n                </ion-label>\n                <!-- <ion-label (click)="followJob(item)" text-end>\n                    <ion-icon name="more"></ion-icon>\n                </ion-label> -->\n            </ion-item>\n\n\n            <!-- <ion-item-options side="right">\n                <button ion-button color="primary" (click)="ViewPDFNative(item)">\n                    <ion-icon name="information"></ion-icon>\n                    Follow this Job\n                </button>\n            </ion-item-options> -->\n        </ion-item-sliding>\n    </ion-list>\n    <br>\n    <br>\n    <br>\n    <div *ngIf="closedJobs.length <= 0" style="text-align:center">No Closed Jobs Found</div>\n\n</ion-content>\n\n<ion-fab right bottom #fab1 *ngIf="closedJobs.length > 0" [ngClass]="{\'bottom63px\': !tabsDisabled}">\n    <button class="pop-in" ion-fab mini color="primary" [ngClass]="{\'pop-out\': fabGone}" (click)="showSearch()">\n        <ion-icon name="search"></ion-icon>\n    </button>\n</ion-fab>'/*ion-inline-end:"/Users/himeshpatel/Documents/kaleLogistics/Corvi/src/pages/closed-jobs/closed-jobs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_http_service_http_service__["a" /* HttpServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_push_notification_push_notification__["a" /* PushNotificationProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_7__providers_util_alert_service__["a" /* AlertService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
    ], ClosedJobsPage);
    return ClosedJobsPage;
}());

//# sourceMappingURL=closed-jobs.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoicesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_service_http_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_push_notification_push_notification__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_util_alert_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__detail_invoices_details__ = __webpack_require__(397);
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
            selector: 'page-invoices',template:/*ion-inline-start:"/Users/himeshpatel/Documents/kaleLogistics/Corvi/src/pages/invoices/invoices.html"*/'<Corvi-header [title]="title" [hidden]="showSearchBar"></Corvi-header>\n<ion-searchbar [hidden]="!showSearchBar" placeholder="Search..." showCancelButton color="primary" [animated]="true"\n    (ionInput)="filterItems($event)" [(ngModel)]="searchQuery" (ionCancel)="onCancel($event)"></ion-searchbar>\n\n<ion-content class="marginTop57">\n    <ion-list [virtualScroll]="Invoices" approxItemHeight="40px">\n        <ion-item-sliding *virtualItem="let item">\n            <ion-item>\n                <ion-avatar item-start (click)="gotoInvoiceDetails(item)">\n                    <div class="customised_avatar_Img">\n                        {{item.InvoiceDate | moment:"date-MM/DD/YYYY"}}\n                    </div>\n                    <div style="text-align: center">{{item.InvoiceDate | moment:"month-MM/DD/YYYY"}}</div>\n                </ion-avatar>\n                <ion-label (click)="gotoInvoiceDetails(item)" style="overflow: initial !important;">\n                    <h3>Bill No: {{item.BillingNo}}</h3>\n                    <p *ngIf=\'item?.BillDate\'>Bill Date : {{item.BillDate}}</p>\n                    <p>Job No : {{item.JobNo}}</p>\n                    <!-- <p >Customer: {{item.Customer}}</p> -->\n                    <!-- <p>Detail No : {{item.DetailNo }}</p> -->\n                    <p>Amount : {{item.Amount }}</p>\n                </ion-label>\n            </ion-item>\n\n\n            <ion-item-options side="right">\n                <button ion-button color="primary" (click)="viewPDF(item)">\n                    <ion-icon name="document"></ion-icon>\n                    View PDF\n                </button>\n            </ion-item-options>\n        </ion-item-sliding>\n    </ion-list>\n    <br>\n    <br>\n    <br>\n    <div *ngIf="Invoices.length <= 0" style="text-align:center">No Invoices Found</div>\n\n</ion-content>\n\n<ion-fab right bottom #fab1 *ngIf="Invoices.length > 0" [ngClass]="{\'bottom63px\': !tabsDisabled}">\n    <button class="pop-in" ion-fab mini color="primary" [ngClass]="{\'pop-out\': fabGone}" (click)="showSearch()">\n        <ion-icon name="search"></ion-icon>\n    </button>\n</ion-fab>'/*ion-inline-end:"/Users/himeshpatel/Documents/kaleLogistics/Corvi/src/pages/invoices/invoices.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_http_service_http_service__["a" /* HttpServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_push_notification_push_notification__["a" /* PushNotificationProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_6__providers_util_alert_service__["a" /* AlertService */]])
    ], InvoicesPage);
    return InvoicesPage;
}());

//# sourceMappingURL=invoices.js.map

/***/ }),

/***/ 17:
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
        "GetVendorMasterList": "GetVendorMasterList",
        "GetSearchMilestoneList": "GetSearchMilestoneList",
        "GetSearchJobList": "GetSearchJobList",
        "SalesActivitySave": "SalesActivitySave",
        "VendorMasterSaveForHHT": "VendorMasterSave",
        "GetLocationMasterList": "GetLocationMasterList",
        "UpdateJobMilestone": "UpdateJobMilestone",
        "UserConfigurationSave": "UserConfigurationSave",
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

/***/ 177:
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
webpackEmptyAsyncContext.id = 177;

/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__ = __webpack_require__(558);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__(564);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_finally__ = __webpack_require__(566);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_finally___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_finally__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__constants__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__global_global__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_http__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_spinner_dialog__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_xml2js__ = __webpack_require__(574);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_10__ionic_native_http__["a" /* HTTP */], __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["s" /* ToastController */], __WEBPACK_IMPORTED_MODULE_9__global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_11__ionic_native_spinner_dialog__["a" /* SpinnerDialog */]])
    ], HttpServiceProvider);
    return HttpServiceProvider;
}());

//# sourceMappingURL=http-service.js.map

/***/ }),

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/_home/home.module": [
		219
	],
	"../pages/closed-jobs/closed-jobs.module": [
		399
	],
	"../pages/configure-parameters/configure-parameters.module": [
		401
	],
	"../pages/dashboard/dashboard.module": [
		400
	],
	"../pages/enquiry/enquiry.module": [
		403
	],
	"../pages/find-location/find-location.module": [
		404
	],
	"../pages/find-sales-activity/find-sales-activity.module": [
		402
	],
	"../pages/invoices/invoices.module": [
		405
	],
	"../pages/new-sales-activity/new-sales-activity.module": [
		407
	],
	"../pages/new-sales-lead/new-sales-lead.module": [
		409
	],
	"../pages/open-jobs/open-jobs.module": [
		406
	],
	"../pages/quotation/quotation.module": [
		411
	],
	"../pages/reset-password/reset-password.module": [
		408
	],
	"../pages/search-job-results/search-job-results.module": [
		410
	],
	"../pages/search-jobs/search-jobs.module": [
		415
	],
	"../pages/search-milestone/search-milestone.module": [
		417
	],
	"../pages/tabs/tabs.module": [
		412
	],
	"../pages/update-job-milestone/update-job-milestone.module": [
		416
	],
	"../pages/welcomeuser/welcomeuser.module": [
		414
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
webpackAsyncContext.id = 218;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_detail_page__ = __webpack_require__(642);
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

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__push_notification_push_notification__ = __webpack_require__(70);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_2__push_notification_push_notification__["a" /* PushNotificationProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ToastController */]])
    ], AlertService);
    return AlertService;
}());

//# sourceMappingURL=alert.service.js.map

/***/ }),

/***/ 35:
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ToastController */]])
    ], ToastService);
    return ToastService;
}());

//# sourceMappingURL=toast.service.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(9);
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
            selector: 'page-register',template:/*ion-inline-start:"/Users/himeshpatel/Documents/kaleLogistics/Corvi/src/pages/register/register.html"*/'<!-- -->\n<ion-content class="auth-page">\n  <div class="login-content">\n\n    <!-- Logo -->\n    <div padding text-center>\n      <div class="logo"></div>\n      <!-- <h2 ion-text class="text-primary">\n        <strong>CORVI</strong>\n      </h2> -->\n    </div>\n\n    <!-- Login form -->\n    <form class="list-form">\n      <ion-item>\n        <ion-label floating>\n          <ion-icon name="person" item-start class="text-primary"></ion-icon>\n          Full Name\n        </ion-label>\n        <ion-input type="text"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>\n          <ion-icon name="mail" item-start class="text-primary"></ion-icon>\n          Email\n        </ion-label>\n        <ion-input type="email"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>\n          <ion-icon name="lock" item-start class="text-primary"></ion-icon>\n          Password\n        </ion-label>\n        <ion-input type="password"></ion-input>\n      </ion-item>\n    </form>\n\n    <div margin-top>\n      <button ion-button block color="dark" tappable (click)="register()">\n        SIGN UP\n      </button>\n\n    </div>\n\n    <!-- Other links -->\n    <div text-center margin-top>\n      <span ion-text color="primary" tappable (click)="login()">I have an account</span>\n    </div>\n\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/himeshpatel/Documents/kaleLogistics/Corvi/src/pages/register/register.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnquiryCargoDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__enquiry__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__enquiry_package_detail__ = __webpack_require__(371);
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
            selector: 'page-enquiry-cargo-detail',template:/*ion-inline-start:"/Users/himeshpatel/Documents/kaleLogistics/Corvi/src/pages/enquiry/detail/enquiry-cargo-details.html"*/'<Corvi-header [title]="title" [hidden]="showSearchBar"></Corvi-header>\n<ion-content class="marginTop57">\n  <form [formGroup]="cargoDetailsForm" (ngSubmit)="logForm()" style="margin-bottom: 160px;">\n    <ion-item>\n      <ion-label floating>Origin(Country-City-POL)</ion-label>\n      <ion-input type="text" class="text-primary" formControlName="origin"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Destination(Country-City-POD)</ion-label>\n      <ion-input type="text" class="text-primary" formControlName="destination"></ion-input>\n    </ion-item>\n    <ion-item class="margin-top-16">\n      <ion-label>Incoterms</ion-label>\n      <ion-select placeholder="Select">\n        <ion-option value="air">AIR</ion-option>\n        <ion-option value="ocean">OCEAN</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item class="margin-top-16">\n      <ion-label>Delivery Terms</ion-label>\n      <ion-select placeholder="Select">\n        <ion-option value="air">AIR</ion-option>\n        <ion-option value="ocean">OCEAN</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-grid style="padding: 0px !important;">\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label floating>Commodity</ion-label>\n            <ion-input type="text" class="text-primary" formControlName="commodity"></ion-input>\n          </ion-item>\n        </ion-col>\n        <!-- <ion-col>  -->\n        <button [round]="true" color="primary" ion-button icon-only clear style="margin-top: 30px;">\n          <ion-icon name="create"></ion-icon>\n        </button>\n        <!-- </ion-col> -->\n      </ion-row>\n    </ion-grid>\n    <ion-item>\n      <ion-label floating>Cargo Description</ion-label>\n      <ion-textarea formControlName="cargo_description"></ion-textarea>\n    </ion-item>\n    <ion-grid style="padding: 0px !important;">\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label floating>Gross Wt.</ion-label>\n            <ion-input type="text" class="text-primary" formControlName="gross_wt"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label>KGS</ion-label>\n            <ion-select placeholder="Select">\n              <ion-option value="air">AIR</ion-option>\n              <ion-option value="ocean">OCEAN</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-label floating>Chargeable Wt.</ion-label>\n            <ion-input type="text" class="text-primary" formControlName="chargeable_wt"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label>KGS</ion-label>\n            <ion-select placeholder="Select">\n              <ion-option value="air">AIR</ion-option>\n              <ion-option value="ocean">OCEAN</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-grid style="padding: 0px !important;">\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label floating>Volume</ion-label>\n            <ion-input type="text" class="text-primary" formControlName="volume"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-label floating>Chargeable Volume</ion-label>\n            <ion-input type="text" class="text-primary" formControlName="chargeable_volume"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-item>\n      <ion-label floating>Total packages</ion-label>\n      <ion-input type="text" class="text-primary" formControlName="commodity"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Remarks</ion-label>\n      <ion-input type="text" class="text-primary" formControlName="commodity"></ion-input>\n    </ion-item>\n    <button ion-button type="submit" [disabled]="!cargoDetailsForm.valid">Package Details>></button>\n  </form>\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n</ion-content>\n<ion-fab left bottom #fab1>\n  <button class="pop-in" ion-fab color="primary" [ngClass]="{\'pop-out\': fabGone}" (click)="previous()">\n    <ion-icon name="arrow-round-back"></ion-icon>\n  </button>\n</ion-fab>\n\n<ion-fab right bottom #fab2>\n  <button class="pop-in" ion-fab color="primary" [ngClass]="{\'pop-out\': fabGone}" (click)="next()">\n    <ion-icon name="arrow-round-forward"></ion-icon>\n  </button>\n</ion-fab>'/*ion-inline-end:"/Users/himeshpatel/Documents/kaleLogistics/Corvi/src/pages/enquiry/detail/enquiry-cargo-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */]])
    ], EnquiryCargoDetailPage);
    return EnquiryCargoDetailPage;
}());

//# sourceMappingURL=enquiry-cargo-detail.js.map

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnquiryPackageDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__enquiry_contact_detail__ = __webpack_require__(372);
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
            selector: 'page-enquiry-package-detail',template:/*ion-inline-start:"/Users/himeshpatel/Documents/kaleLogistics/Corvi/src/pages/enquiry/detail/enquiry-package-details.html"*/'<Corvi-header [title]="title" [hidden]="showSearchBar"></Corvi-header>\n<ion-content class="marginTop57">\n  <form [formGroup]="packageDetailsForm">\n    <ion-item>\n      <ion-label floating>No. of packages</ion-label>\n      <ion-input type="text" class="text-primary" formControlName="Nop"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Units</ion-label>\n      <ion-select placeholder="Select">\n        <ion-option value="one">1</ion-option>\n        <ion-option value="two">2</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-grid class="marginTop12">\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label>L*W*H</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col col-2>\n          <ion-input type="text" class="text-primary border_solid" formControlName="length"></ion-input>\n        </ion-col>\n        <ion-col class="star">*</ion-col>\n        <ion-col col-2>\n          <ion-input type="text" class="text-primary border_solid" formControlName="width"></ion-input>\n        </ion-col>\n        <ion-col class="star">*</ion-col>\n        <ion-col col-2>\n          <ion-input type="text" class="text-primary border_solid" formControlName="height"></ion-input>\n        </ion-col>\n        <ion-col>\n          <ion-item class="marginTop12">\n            <ion-label>Inches</ion-label>\n            <ion-select placeholder="Select">\n              <ion-option value="one">1</ion-option>\n              <ion-option value="two">2</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label floating>Gross Wt.</ion-label>\n            <ion-input type="text" class="text-primary" formControlName="GrossWt"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item style="margin-top: 22px;">\n            <ion-label>KGS</ion-label>\n            <ion-select placeholder="Select">\n              <ion-option value="one">1</ion-option>\n              <ion-option value="two">2</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-item>\n      <ion-label>Remarks</ion-label>\n      <ion-textarea></ion-textarea>\n    </ion-item>\n    <ion-grid>\n      <ion-row>\n        <ion-col> <button ion-button icon-start block color="primary" tappable>\n            <!-- <ion-icon name="save"></ion-icon> -->\n            Save\n          </button></ion-col>\n        <ion-col><button ion-button icon-start block color="primary" tappable>\n            <!-- <ion-icon name="close-circle"></ion-icon> -->\n            View\n          </button></ion-col>\n        <ion-col> <button ion-button icon-start block color="primary" tappable (click)="contact()">\n            <!-- <ion-icon name="save"></ion-icon> -->\n            Next\n          </button></ion-col>\n        <ion-col><button ion-button icon-start block color="primary" tappable>\n            <!-- <ion-icon name="close-circle"></ion-icon> -->\n            Back\n          </button></ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n</ion-content>'/*ion-inline-end:"/Users/himeshpatel/Documents/kaleLogistics/Corvi/src/pages/enquiry/detail/enquiry-package-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */]])
    ], EnquiryPackageDetailPage);
    return EnquiryPackageDetailPage;
}());

//# sourceMappingURL=enquiry-package-detail.js.map

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnquiryContactDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(16);
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
            selector: 'page-enquiry-contact-detail',template:/*ion-inline-start:"/Users/himeshpatel/Documents/kaleLogistics/Corvi/src/pages/enquiry/detail/enquiry-contact-detail.html"*/'<Corvi-header [title]="title" [hidden]="showSearchBar"></Corvi-header>\n<ion-content class="marginTop57">\n  <form [formGroup]="contactDetailsForm" (ngSubmit)="logForm()">\n    <ion-item>\n      <ion-label floating>Name</ion-label>\n      <ion-input type="text" class="text-primary" formControlName="name"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Location</ion-label>\n      <ion-input type="text" class="text-primary" formControlName="location"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Email Id</ion-label>\n      <ion-input type="email" class="text-primary" formControlName="emailID"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Organization</ion-label>\n      <ion-input type="text" class="text-primary" formControlName="organization"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Contact No.</ion-label>\n      <ion-input type="number" class="text-primary" formControlName="contact_No"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Address</ion-label>\n      <ion-input type="text" class="text-primary" formControlName="Address"></ion-input>\n    </ion-item>\n    <ion-grid>\n      <ion-row>\n        <ion-col> <button ion-button icon-start block color="primary" tappable>\n            <!-- <ion-icon name="save"></ion-icon> -->\n            Back\n          </button></ion-col>\n        <ion-col><button ion-button icon-start block color="primary" type="submit"\n            [disabled]="!contactDetailsForm.valid" tappable>\n            <!-- <ion-icon name="close-circle"></ion-icon> -->\n            Submit\n          </button></ion-col>\n        <ion-col> <button ion-button icon-start block color="primary" tappable>\n            <!-- <ion-icon name="save"></ion-icon> -->\n            Cancel\n          </button></ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n</ion-content>'/*ion-inline-end:"/Users/himeshpatel/Documents/kaleLogistics/Corvi/src/pages/enquiry/detail/enquiry-contact-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], EnquiryContactDetailPage);
    return EnquiryContactDetailPage;
}());

//# sourceMappingURL=enquiry-contact-detail.js.map

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_login__ = __webpack_require__(43);
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
            selector: 'page-reset-password',template:/*ion-inline-start:"/Users/himeshpatel/Documents/kaleLogistics/Corvi/src/pages/reset-password/reset-password.html"*/'<ion-header no-border>\n    <ion-grid class="gridDesign">\n        <ion-row>\n          <ion-col col-6>\n            <div padding-horizontal class="animated fadeInDown">\n              <div class="logoLeft">\n               <img class="imgLeft" src="../assets/img/Corvi_Logo.png">\n              </div>\n            </div>\n          </ion-col>\n  \n          <ion-col col-6>\n            <div padding-horizontal class="animated fadeInDown">\n              <div class="logoRight"></div>\n              <img class="imgRight" src="../assets/img/Kale_Logo.png">\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n  \n</ion-header>\n\n\n<ion-content padding class="animated fadeIn login">\n    <div class="login-content">\n    \n        <!-- Login form -->\n        <form class="list-form" #f="ngForm" >\n          <div class="contaier-login">\n    \n            <ion-row>\n              <ion-col>\n    \n                <h3 style="text-align: center;">Reset Password</h3>\n    \n              </ion-col>\n            </ion-row>\n            <ion-item>\n              <ion-label stacked>\n                <!-- <ion-icon name="person" item-start class="text-primary"></ion-icon> -->\n                Enter Username\n              </ion-label>\n              <ion-input type="text" [(ngModel)]="username"\n              #nameCtrl="ngModel" name="username" required \n              ></ion-input>  \n            </ion-item>\n            <div class="errorbox" style="color:tomato" *ngIf="!nameCtrl.valid && nameCtrl.touched">required</div>\n    \n            <ion-item>\n              <ion-label stacked>\n                <!-- <ion-icon name="lock" item-start class="text-primary"></ion-icon> -->\n                Temporary Password\n              </ion-label>\n              <ion-input type="{{type}}" [(ngModel)]="temppassword"\n          #temppasswordCtrl="ngModel" name="temppassword" required\n          ></ion-input>\n          <button *ngIf="!showPass" ion-button clear color="dark" type="button" item-right (click)="showPassword()"><ion-icon name="ios-eye-off-outline"></ion-icon></button>\n          <button *ngIf="showPass" ion-button clear color="dark" type="button" item-right (click)="showPassword()"><ion-icon name="ios-eye-outline"></ion-icon></button>\n            </ion-item>\n            <div class="errorbox" style="color:tomato" *ngIf="!temppasswordCtrl.valid && temppasswordCtrl.touched">required</div>\n    \n            <ion-item>\n                <ion-label stacked>\n                  <!-- <ion-icon name="person" item-start class="text-primary"></ion-icon> -->\n                  New Password\n                </ion-label>\n                <ion-input type="text" [(ngModel)]="password"\n                #passwordCtrl="ngModel" name="password" required></ion-input>\n              </ion-item>\n              <div class="errorbox" style="color:tomato" *ngIf="!passwordCtrl.valid && passwordCtrl.touched">required</div>\n\n              <ion-item>\n                  <ion-label stacked>\n                    <!-- <ion-icon name="person" item-start class="text-primary"></ion-icon> -->\n                    Re-Type New Password\n                  </ion-label>\n                  <ion-input type="text" [(ngModel)]="confpassword"\n                  #confpasswordCtrl="ngModel" name="confpassword" required></ion-input>\n                </ion-item>\n                <div class="errorbox" style="color:tomato" *ngIf="!confpasswordCtrl.valid && confpasswordCtrl.touched">required</div>\n      \n            <div>\n              <ion-row>\n                <ion-col col-6 class="my-width" large>\n                <button class="button button-dark customBtn" ion-button color="light" (click)="toLogin()">\n                     CANCEL\n                  </button>\n                </ion-col>\n                <!-- <ion-col col-4></ion-col> -->\n                <ion-col col-6 class="my-width" large>\n                  <button class="button button-dark customBtn" ion-button color="primary" [disabled]="!f.valid">\n                       SAVE\n                    </button>\n                  </ion-col>\n                  </ion-row>\n            </div>\n    \n          </div>\n        </form>\n    \n    \n      </div>\n      <div class="addOns">\n          <div class="addOnsText">\n            <h4>Additional Services</h4>\n          </div>\n      \n          <ion-grid>\n            <ion-row>\n              <ion-col>\n                  <div class="container">\n                      <img src="../assets/img/moreservices.png">\n                      <h6>More Services</h6>\n                    </div>\n              </ion-col>\n              <ion-col>\n                  <div class="container">\n                      <img src="../assets/img/contactus.png">\n                      <h6>Contact Us</h6>\n                    </div>\n              </ion-col>\n              <ion-col>\n                  <div class="container">\n                      <img src="../assets/img/monitor_support.png">\n                      <h6>24 x 7 Support</h6>\n                    </div>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </div>\n    </ion-content>\n    <ion-footer>\n        <div class = "bar bar-footer">\n            <ion-row>\n              <ion-col col-6>\n            <h6 style="text-align: center;" class = "title">Terms and conditions</h6>\n          </ion-col>\n    \n          <ion-col col-6>\n              <h6 style="text-align: center;" class = "title">Privacy Policy</h6>\n            </ion-col>\n          </ion-row>\n         </div>\n    </ion-footer>\n'/*ion-inline-end:"/Users/himeshpatel/Documents/kaleLogistics/Corvi/src/pages/reset-password/reset-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavParams */]])
    ], ResetPasswordPage);
    return ResetPasswordPage;
}());

//# sourceMappingURL=reset-password.js.map

/***/ }),

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomeuserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_global__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard__ = __webpack_require__(45);
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
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* Slides */])
    ], WelcomeuserPage.prototype, "slides", void 0);
    WelcomeuserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-welcomeuser',template:/*ion-inline-start:"/Users/himeshpatel/Documents/kaleLogistics/Corvi/src/pages/welcomeuser/welcomeuser.html"*/'<!--\n  Generated template for the WellcomeuserPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title id="Dashboard" center text-center>\n      {{title}}\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-slides #slides pager="true">\n    <ion-slide class="ShadowBox13">\n      <img src="assets/img/Group 3524.png">\n      <label>CORVI Freight Management System\n        Lorem ipsum dolor sit amet, consetetur\n        sadipscing elitr, sed diam nonumy eirmod\n        tempor invidunt ut labore et dolore magna\n        aliquyam erat, sed diam voluptua. At vero eos\n        et accusam et justo duo.</label>\n    </ion-slide>\n\n    <ion-slide class="ShadowBox13">\n      <img src="assets/img/Group 3525.png">\n      <!-- <label>\n        Features:\n        New Sales Activity\n        New Sales Lead\n        Upload Milestone</label> -->\n      <ion-row>\n        <ion-col col-12>\n          <h3 style="float: left;">Features:</h3>\n        </ion-col>\n        <ion-col col-2>\n        </ion-col>\n        <ion-col col-8>\n          <ion-list>\n            <ion-item>\n              <ion-icon name="checkmark" style="color:green"></ion-icon>&nbsp;&nbsp;&nbsp;New Sales Activity\n            </ion-item>\n            <ion-item>\n              <ion-icon name="checkmark" style="color:green"></ion-icon>&nbsp;&nbsp;&nbsp;New Sales Lead\n            </ion-item>\n            <ion-item>\n              <ion-icon name="checkmark" style="color:green"></ion-icon>&nbsp;&nbsp;&nbsp;Upload Milestone\n            </ion-item>\n          </ion-list>\n        </ion-col>\n      </ion-row>\n    </ion-slide>\n  </ion-slides>\n\n</ion-content>\n<ion-footer class="ion-footer">\n  <ion-toolbar>\n    <ion-row>\n      <ion-col col-1></ion-col>\n      <ion-col col-4>\n        <!-- <button text-left (click)="slides.slidePrev()"> Prev </button> -->\n        <a style="font-size: 2rem;" (click)="skip()">Skip</a>\n      </ion-col>\n      <ion-col col-1></ion-col>\n      <ion-col style="font-size: 2rem;" col-4> <a style="float: right;" (click)="slides.slideNext()"> Next </a>\n      </ion-col>\n      <ion-col col-1></ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/himeshpatel/Documents/kaleLogistics/Corvi/src/pages/welcomeuser/welcomeuser.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */]])
    ], WelcomeuserPage);
    return WelcomeuserPage;
}());

//# sourceMappingURL=welcomeuser.js.map

/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export configParamsList */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigureParametersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_http_service_http_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_util_toast_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard__ = __webpack_require__(45);
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
        this.BranchTbl = this.UserDetails[Object.keys(this.UserDetails)[1]]["Table4"];
        this.ModeTbl = this.UserDetails[Object.keys(this.UserDetails)[1]]["Table3"];
        this.ServiceTBl = this.UserDetails[Object.keys(this.UserDetails)[1]]["Table3"];
        this.modes = this.ModeTbl.filter(function (a) { return a.Identifier == "TransportMode"; });
        this.services = this.ModeTbl.filter(function (a) { return a.Identifier == "Service"; });
        this.shipments = this.ModeTbl.filter(function (a) { return a.Identifier == "ShipmentType"; });
        this.configList = new configParamsList();
    }
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
            if (response == 'Success') {
                _this.showAlert('Success', 'Configurations have been saved');
            }
            else {
                _this.showAlert('Failed', 'Configurations could not be saved');
                return;
            }
        });
    };
    ConfigureParametersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-configure-parameters',template:/*ion-inline-start:"/Users/himeshpatel/Documents/kaleLogistics/Corvi/src/pages/configure-parameters/configure-parameters.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <button right ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title id="Dashboard" center text-center>\n      {{title}}\n    </ion-title>\n    <ion-buttons left>\n      <button ion-button icon-only (click)="backToDashBoard();">\n        <ion-icon name="ios-arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-row padding class="ShadowBox13">\n    <ion-col col-12>\n      <label>\n        <b>Username</b>\n      </label>\n    </ion-col>\n    <ion-col col-12>\n      <input col-12 type="text" name="userName" [(ngModel)]="userName">\n      <!-- <div class="errorbox" style="color:tomato" *ngIf="userName.length == \'0\'">*required</div> -->\n    </ion-col>\n\n    <ion-col col-12>\n      <label>\n        <b>Email Id</b>\n      </label>\n    </ion-col>\n    <ion-col col-12>\n      <input col-12 type="text" name="emailId" [(ngModel)]="emailId">\n      <div class="errorbox" style="color:tomato" *ngIf="emailId.length == \'0\'">*required</div>\n    </ion-col>\n\n    <ion-col col-12>\n      <label>\n        <b>Default Configuration</b>\n      </label>\n    </ion-col>\n\n    <ion-col col-12>\n      <label>\n        <b>Branch</b>\n      </label>\n    </ion-col>\n    <ion-col col-12>\n      <select id="ddlBrach" name="ddlBrach" col-12 [(ngModel)]="branchCode">\n        <option [value]="0" disabled selected>Select</option>\n        <option *ngFor="let brData of BranchTbl" [value]="brData.BranchCode">{{brData.branch}}</option>\n      </select>\n      <div class="errorbox" style="color:tomato" *ngIf="branchCode == \'0\'">*required</div>\n    </ion-col>\n\n    <ion-col col-12>\n      <label>\n        <b>Mode</b>\n      </label>\n    </ion-col>\n    <ion-col col-12>\n      <select id="ddlMode" name="ddlMode" col-12 [(ngModel)]="transportMode">\n        <option [value]="0" disabled selected>Select</option>\n        <option *ngFor="let modeData of modes" [value]="modeData.KeyValue">{{modeData.Description}}</option>\n      </select>\n      <div class="errorbox" style="color:tomato" *ngIf="transportMode == \'0\'">*required</div>\n    </ion-col>\n\n    <ion-col col-12>\n      <label>\n        <b>Service</b>\n      </label>\n    </ion-col>\n    <ion-col col-12>\n      <select id="ddlService" name="ddlService" col-12 [(ngModel)]="serviceCode">\n        <option [value]="0" disabled selected>Select</option>\n        <option *ngFor="let serviceData of services" [value]="serviceData.KeyValue">{{serviceData.Description}}</option>\n      </select>\n      <div class="errorbox" style="color:tomato" *ngIf="serviceCode == \'0\'">*required</div>\n    </ion-col>\n\n    <ion-col col-12>\n      <b>Job Type</b>\n    </ion-col>\n    <ion-col col-6>\n      <input [(ngModel)]="VenType" type="radio" class="stv-radio-button" name="jobType" value="1"\n        id="1" />\n      <label for="1">Freight Forwarding</label>\n    </ion-col>\n    <ion-col col-6>\n      <input [(ngModel)]="VenType" type="radio" class="stv-radio-button" name="jobType" value="2"\n        id="2" />\n      <label for="2">Customs</label>\n    </ion-col>\n\n    </ion-row>\n    \n</ion-content>\n<ion-footer class="ion-footer">\n  <ion-row padding class="ShadowBox13">\n    <ion-col col-6>\n      <button ion-button  block class="btnRadius btncancel" (click)="backToDashBoard();">\n        <ion-icon ></ion-icon>\n        Cancel\n      </button>\n    </ion-col>\n\n    <ion-col col-6>\n      <button ion-button icon-start block class="btnRadius" (click)="saveConfigSettings();">\n        <ion-icon ></ion-icon>\n       Save\n      </button>\n    </ion-col>\n  </ion-row>\n  <div class="label-white toolbar-background-md" center text-center>\n    <!-- © Kale Logistics Solutions Private Limited. {{appBuildConfig.fullYear}} Version {{appBuildConfig.version}} -->\n  </div>\n</ion-footer>\n\n'/*ion-inline-end:"/Users/himeshpatel/Documents/kaleLogistics/Corvi/src/pages/configure-parameters/configure-parameters.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_util_toast_service__["a" /* ToastService */], __WEBPACK_IMPORTED_MODULE_4__providers_http_service_http_service__["a" /* HttpServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], ConfigureParametersPage);
    return ConfigureParametersPage;
}());

//# sourceMappingURL=configure-parameters.js.map

/***/ }),

/***/ 376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export searchLocation */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindLocationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_global__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_http_service_http_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_util_alert_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_util_toast_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__new_sales_lead_new_sales_lead__ = __webpack_require__(95);
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
        this.viewCtrl.dismiss(data);
    };
    FindLocationPage.prototype.GetLocationMasterList = function () {
        var _this = this;
        debugger;
        this.SearchLoc.LocationType = 'Port,Airport,City'; //this.branchCode;
        this.SearchLoc.LocationCode = this.CityCode;
        this.SearchLoc.LocationName = this.CityName;
        //this.SearchLoc.VendorName = this.VendorName;
        this.http.POST(__WEBPACK_IMPORTED_MODULE_3__constants__["a" /* Constants */].Corvi_Services.GetLocationMasterList, this.SearchLoc).then(function (response) {
            console.log('response to check login method: ', response);
            //debugger
            if (response['Table'] == '') {
                _this.toastService.show('Data not found.', 3000, true, 'top', 'toast-container');
                return;
            }
            else {
                _this.LocationInfo = response['Table'];
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
        this.viewCtrl.dismiss();
        this.globalService.setRootPage(__WEBPACK_IMPORTED_MODULE_9__new_sales_lead_new_sales_lead__["a" /* NewSalesLeadPage */]);
    };
    FindLocationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-find-location',template:/*ion-inline-start:"/Users/himeshpatel/Documents/kaleLogistics/Corvi/src/pages/find-location/find-location.html"*/'<!--\n  Generated template for the NewSalesActivityPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n\n    <ion-title id="Dashboard" center text-center>\n      {{title}}\n      <ion-icon name=\'close-circle\' (click)=\'dismissModal()\' style=\'float: right;\'></ion-icon>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n\n    <!-- <ion-row padding class="">\n      <ion-col col-6>\n        <input [(ngModel)]="VenType" type="radio" class="stv-radio-button" name="Customer" value="Customer"\n          id="Customer" />\n        <label for="Customer">Customer</label>\n      </ion-col>\n      <ion-col col-6>\n        <input [(ngModel)]="VenType" type="radio" class="stv-radio-button" name="Customer" value="Lead-Customer"\n          id="LeadCustomer" checked />\n        <label for="LeadCustomer">Lead-Customer</label>\n      </ion-col>\n    </ion-row> -->\n\n    <ion-row padding class="ShadowBox13">\n      <ion-col col-12>\n        <label>\n          City Name\n        </label>\n      </ion-col>\n      <ion-col col-12>\n        <input type="text" [(ngModel)]="CityName" col-12 placeholder="">\n      </ion-col>\n\n      <h4><span>OR</span></h4>\n\n      <ion-col col-12>\n        <label>\n          City Code\n        </label>\n      </ion-col>\n      <ion-col col-12>\n        <input type="text" [(ngModel)]="CityCode" col-12 placeholder="">\n      </ion-col>\n\n    </ion-row>\n\n\n    <ion-row padding>\n      <ion-col col-6>\n        <button ion-button block class="btnRadius btncancel" (click)=\'dismissModal()\'>\n          <ion-icon></ion-icon>\n          Cancel\n        </button>\n      </ion-col>\n\n      <ion-col col-6>\n        <button ion-button icon-start block class="btnRadius " (click)="GetLocationMasterList();">\n          <ion-icon></ion-icon>\n          Search\n        </button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row padding class="ShadowBox13">\n      <ion-col col-12>\n        <table>\n          <tr *ngFor="let item of LocationInfo; let i = index">\n            <td>\n              <label>\n                {{item.Locationtext}}\n              </label>\n            </td>\n            <td><a href="#" (click)="passDataToNSA(item);">Select</a></td>\n            <!-- <td><button (click)="passDataToNSA(item.Locationtext)">Select</button></td> -->\n\n            <!-- <td> <input [(ngModel)]="item.Address1" type="hidden" /> </td>\n            <td> <input [(ngModel)]="item.Address2" type="hidden" /> </td>\n            <td> <input [(ngModel)]="item.Address3" type="hidden" /> </td>\n            <td> <input [(ngModel)]="item.BranchName" type="hidden" /> </td>\n            <td> <input [(ngModel)]="item.GSTCategory" type="hidden" /> </td>\n            <td> <input [(ngModel)]="item.GSTRegistrationStatus" type="hidden" /> </td>\n            <td> <input [(ngModel)]="item.LocationCode" type="hidden" /> </td>\n            <td> <input [(ngModel)]="item.LocationID" type="hidden" /> </td>\n            <td> <input [(ngModel)]="item.LocationName" type="hidden" /> </td>\n            <td> <input [(ngModel)]="item.Pincode" type="hidden" /> </td>\n            <td> <input [(ngModel)]="item.VendorCode" type="hidden" /> </td>\n            <td> <input [(ngModel)]="item.VendorId" type="hidden" /> </td>\n            <td> <input [(ngModel)]="item.VendorName" type="hidden" /> </td>\n            <td> <input [(ngModel)]="item.VendorType" type="hidden" /> </td> -->\n            <!-- Address1: "Ideal Plaza"\n            Address2: "Sarat Bose Road"\n            Address3: ""\n            BranchName: "BALMER LAWRIE & CO. LTD - Kolkata"\n            GSTCategory: null\n            GSTIN: null\n            GSTRegistrationStatus: null\n            LocationCode: "IN CCU"\n            LocationID: 117603\n            LocationName: "KOLKATA"\n            Pincode: ""\n            SecretKey: null\n            StateName: null\n            VendorCode: "CCU/CUS/06586"\n            VendorId: 13929\n            VendorName: "OOCL"\n            VendorType: "Lead-Customer" -->\n          </tr>\n          <!-- <tr>\n            <td>\n              <label>\n                Babuline Pharma Pvt. Ltd.\n                Mumbai\n              </label>\n            </td>\n\n            <td><a href="#">Select</a></td>\n          </tr>\n          <tr>\n            <td>\n              <label>\n                BEC Chemicals Pvt. Ltd.\n                Mumbai\n              </label>\n            </td>\n\n            <td><a href="#">Select</a></td>\n          </tr>\n          <tr>\n            <td>\n              <label>\n                Cristopia Energy Systems (I) Pvt. Ltd.\n                Mumbai\n              </label>\n            </td>\n\n            <td><a href="#">Select</a></td>\n          </tr> -->\n        </table>\n      </ion-col>\n\n\n\n    </ion-row>\n\n\n\n  </ion-list>\n</ion-content>\n<ion-footer class="ion-footer">\n\n  <div class="label-white toolbar-background-md" center text-center>\n    © Kale Logistics Solutions Private Limited. {{appBuildConfig.fullYear}} Version {{appBuildConfig.version}}\n  </div>\n</ion-footer>\n'/*ion-inline-end:"/Users/himeshpatel/Documents/kaleLogistics/Corvi/src/pages/find-location/find-location.html"*/,
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

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export searchDataList */
/* unused harmony export saveMileStoneList */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateJobMilestonePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__search_jobs_search_jobs__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__search_milestone_search_milestone__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_util_toast_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_global_global__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_http_service_http_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__constants__ = __webpack_require__(17);
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
        this.VenType = '1';
        this.appBuildConfig = this.globalService.appBuildConfig;
        this.UserDetails = this.globalService.get('userDetails');
        this.BranchTbl = this.UserDetails[Object.keys(this.UserDetails)[1]]["Table4"];
        this.ModeTbl = this.UserDetails[Object.keys(this.UserDetails)[1]]["Table3"];
        this.ServiceTBl = this.UserDetails[Object.keys(this.UserDetails)[1]]["Table3"];
        this.ShipmentTbl = this.UserDetails[Object.keys(this.UserDetails)[1]]["Table3"];
        this.modes = this.ModeTbl.filter(function (a) { return a.Identifier == "TransportMode"; });
        this.services = this.ModeTbl.filter(function (a) { return a.Identifier == "Service"; });
        this.shipments = this.ModeTbl.filter(function (a) { return a.Identifier == "ShipmentType"; });
        this.searchList = new searchDataList();
        this.saveMileStoneList = new saveMileStoneList();
        //   console.log(this.ModeTbl.filter(function(item){
        //     this.modes = item.Identifier == "TransportMode";         
        // }));
    }
    UpdateJobMilestonePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UpdateJobMilestonePage');
        this.VenType = '1';
    };
    UpdateJobMilestonePage.prototype.ionViewDidEnter = function () {
        this.VenType = '1';
        // this.fetchedMilestone = this.navParams.get('milestone');
        this.fetchedMilestone = this.globalService.selectedMilestone;
        this.fetchedJobs = this.globalService.selectedJobsArray;
        console.log('check milestone !!!!!!!', this.fetchedMilestone);
        console.log('check jobsArray ', this.fetchedJobs);
        console.log('check job type: ', this.VenType);
    };
    UpdateJobMilestonePage.prototype.ionViewDidLeave = function () {
        this.fetchedMilestone = '';
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
    UpdateJobMilestonePage.prototype.backToDashboard = function () {
        this.globalService.setRootPage(__WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard__["a" /* DashboardPage */]);
    };
    UpdateJobMilestonePage.prototype.sendDataToSearchMilestone = function () {
        this.searchList.branch = this.branchCode;
        this.searchList.mode = this.transportMode;
        this.searchList.shipmentType = this.shipmentCode;
        this.searchList.service = this.serviceCode;
        this.searchList.jobType = this.VenType;
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
        if (this.branchCode == '0' || this.transportMode == '0' || this.serviceCode == '0' || this.shipmentCode == '0') {
            this.toastService.show('Please select the required fields.', 3000, true, 'top', 'toast-container');
            return;
        }
        var searchMilestone = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_1__search_milestone_search_milestone__["a" /* SearchMilestonePage */], { searchDetails: this.searchList });
        searchMilestone.onDidDismiss(function (data) {
            console.log(data);
            _this.modalDismissData = JSON.stringify(data);
        });
        searchMilestone.present();
        this.globalService.store('branchCode', this.branchCode);
        localStorage.setItem('jobType', this.VenType);
        console.log(localStorage.getItem('jobType'));
    };
    UpdateJobMilestonePage.prototype.searchJobs = function () {
        if (this.branchCode == '0' || this.transportMode == '0' || this.serviceCode == '0' || this.shipmentCode == '0') {
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
        this.saveMileStoneList.UserId = localStorage.getItem('userId'); //
        this.saveMileStoneList.Remarks = this.remarks;
        this.saveMileStoneList.ActivityDate = this.activityDate;
        // for(let d of this.globalService.selectedMilestone){
        //   this.activityIdArr.push(d.DocId);
        // }
        this.saveMileStoneList.ActivityId = this.globalService.selectedMilestone.DocId;
        // this.saveMileStoneList.ActivityId = this.activityIdArr.toString();
        for (var _i = 0, _a = this.globalService.selectedJobsArray; _i < _a.length; _i++) {
            var data = _a[_i];
            this.bookingNoArr.push(data.WODetailNo);
        }
        this.saveMileStoneList.BookingNo = this.bookingNoArr.toString();
        console.log('***&&&&&***', this.saveMileStoneList);
        this.http.POST(__WEBPACK_IMPORTED_MODULE_8__constants__["a" /* Constants */].Corvi_Services.UpdateJobMilestone, this.saveMileStoneList).then(function (response) {
            console.log('test saved milestone here: ', response);
            if (response == 'Success') {
                _this.showAlert('Success', 'Milestone Saved');
                // this.globalService.setRootPage(DashboardPage);
                _this.globalService.selectedJobsArray = [];
                _this.globalService.selectedMilestone = [];
            }
            else {
                _this.toastService.show('Form not submited !', 3000, true, 'top', 'toast-container');
                return;
            }
        });
    };
    UpdateJobMilestonePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-update-job-milestone',template:/*ion-inline-start:"/Users/himeshpatel/Documents/kaleLogistics/Corvi/src/pages/update-job-milestone/update-job-milestone.html"*/'<!--\n  Generated template for the NewSalesActivityPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <button right ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title id="Dashboard" center text-center>\n      {{title}}\n    </ion-title>\n\n    <ion-buttons left>\n      <button ion-button icon-only (click)="goBack();">\n        <ion-icon name="ios-arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-row padding class="ShadowBox13">\n      <ion-col col-12>\n        Job Type\n      </ion-col>\n\n      <!-- <ion-col col-6>\n        <button ion-button icon-start block class="btnRadiusUpper">\n          <ion-icon></ion-icon>\n          Freight Forwarding\n        </button>\n      </ion-col>\n      <ion-col col-6>\n        <button ion-button block class="btnRadiusUpper btncancel">\n          <ion-icon></ion-icon>\n          Customs\n        </button>\n      </ion-col> -->\n\n      <ion-col col-6>\n        <input [(ngModel)]="VenType" type="radio" class="stv-radio-button" name="jobType" value="1"\n          id="1" />\n        <label for="1">Freight Forwarding</label>\n      </ion-col>\n      <ion-col col-6>\n        <input [(ngModel)]="VenType" type="radio" class="stv-radio-button" name="jobType" value="2"\n          id="2" />\n        <label for="2">Customs</label>\n      </ion-col>\n\n      <ion-col col-12>\n        <label>\n          Branch\n        </label>\n      </ion-col>\n      <!-- <ion-col col-12>\n\n        <select col-12 placeholder="Select One">\n          <option value="f">Default</option>\n          <option value="m">1</option>\n        </select>\n\n      </ion-col> -->\n\n      <ion-col col-12>\n\n        <select id="ddlBrach" name="ddlBrach" [(ngModel)]="branchCode" col-12 placeholder="">\n          <option [value]="0" disabled selected>Select</option>\n          <option *ngFor="let brData of BranchTbl" [value]="brData.BranchCode">{{brData.branch}}</option>\n        </select>\n        <div class="errorbox" style="color:tomato" *ngIf="branchCode == \'0\'">*required</div>\n\n      </ion-col>\n\n      <ion-col col-12>\n        <label>\n          Mode\n        </label>\n      </ion-col>\n\n      <ion-col col-12>\n        <select id="ddlMode" name="ddlMode" [(ngModel)]="transportMode" col-12 placeholder="">\n          <option [value]="0" disabled selected>Select</option>\n          <option *ngFor="let modeData of modes" [value]="modeData.KeyValue">{{modeData.Description}}</option>\n        </select>\n        <div class="errorbox" style="color:tomato" *ngIf="transportMode == \'0\'">*required</div>\n      </ion-col> \n\n      <!-- <ion-col col-12>\n\n        <input col-12 placeholder="">\n      </ion-col> -->\n\n\n      <ion-col col-12>\n        <label>\n          Service\n        </label>\n      </ion-col>\n\n      <ion-col col-12>\n        <select id="ddlService" name="ddlService" [(ngModel)]="serviceCode" col-12 placeholder="">\n          <option [value]="0" disabled selected>Select</option>\n          <option *ngFor="let serviceData of services" [value]="serviceData.KeyValue">{{serviceData.Description}}</option>\n        </select>\n        <div class="errorbox" style="color:tomato" *ngIf="serviceCode == \'0\'">*required</div>\n      </ion-col>\n\n      <!-- <ion-col col-12>\n\n        <select col-12 placeholder="Select One">\n          <option value="f">Default</option>\n          <option value="m">1</option>\n        </select>\n      </ion-col> -->\n\n\n      <ion-col col-12>\n        <label>\n          Shipment Type\n        </label>\n      </ion-col>\n\n      <ion-col col-12>\n        <select id="ddlShipment" name="ddlShipment" [(ngModel)]="shipmentCode" col-12 placeholder="">\n          <option [value]="0" disabled selected>Select</option>\n          <option *ngFor="let shipData of shipments" [value]="shipData.KeyValue">{{shipData.Description}}</option>\n        </select>\n        <div class="errorbox" style="color:tomato" *ngIf="shipmentCode == \'0\'">*required</div>\n      </ion-col>\n\n      <!-- <ion-col col-12>\n        <select col-12 placeholder="Select One">\n          <option value="f">Default</option>\n          <option value="m">1</option>\n        </select>\n      </ion-col> -->\n\n      <ion-col col-12>\n        <label>\n          Milestone\n        </label>\n      </ion-col>\n\n\n      <ion-col col-10>\n          <input col-12 type="text" [(ngModel)]="globalService.selectedMilestone.DocumentName" name="fetchedMilestone">\n        <!-- <input col-12 placeholder="Select One"> -->\n\n      </ion-col>\n\n      <ion-col col-2>\n        <button ion-fab class="ion-fab34" (click)="sendDataToSearchMilestone();" style="float: right;\n        width: auto;\n        display: flex;\n        align-items: center;\n        justify-content: center;">\n          <ion-icon name="md-search" class=""></ion-icon>\n        </button>\n      </ion-col>\n\n\n      <ion-col col-12>\n        <label>\n          General Remarks\n        </label>\n      </ion-col>\n\n      <ion-col col-12>\n        <textarea col-12 placeholder="" [(ngModel)]="remarks">\n        </textarea>\n      </ion-col>\n\n      <ion-col col-6>\n        <ion-label>\n          Activity Date\n        </ion-label>\n      </ion-col>\n\n      <ion-col style="text-align:end" col-6>\n        <a href="#"> <ion-datetime displayFormat="MM/DD/YYYY" pickerFormat="MM/DD/YYYY" disabled [(ngModel)]="activityDate"></ion-datetime></a>     \n      </ion-col>\n\n      <ion-col col-12>\n        <button ion-button icon-start block class="btnRadius" (click)="sendDataToSearchJobs();">\n          <ion-icon></ion-icon>\n          SEARCH JOB(S)\n        </button>\n      </ion-col>\n    </ion-row>\n\n\n\n\n    <ion-row padding class="ShadowBox13">\n      <ion-col col-12>\n        <table>\n          <tr *ngFor="let data of globalService.selectedJobsArray">\n            <td>\n              <!-- <input col-12 value="BOMFJAI2021001020" disabled> -->\n              <input col-12 value="{{data.JobNo}}" disabled>\n            </td>\n            <td > <button ion-button icon-only clear style="color: red !important;" (click)="removeJob(data)">\n              <ion-icon name="trash"></ion-icon>Remove\n            </button></td>\n\n          </tr>\n          <!-- <tr>\n            <td>\n              <input col-12 value="BOMFJAI2021001020" disabled>\n            </td>\n            <td > <button ion-button icon-only clear style="color: red !important;">\n              <ion-icon name="trash"></ion-icon>Remove\n            </button></td>\n\n          </tr>\n          <tr>\n            <td>\n              <input col-12 value="BOMFJAI2021001020" disabled>\n            </td>\n            <td > <button ion-button icon-only clear style="color: red !important;">\n              <ion-icon name="trash"></ion-icon>Remove\n            </button></td>\n\n          </tr>\n          <tr>\n            <td>\n              <input col-12 value="BOMFJAI2021001020" disabled>\n            </td>\n            <td > <button ion-button icon-only clear style="color: red !important;">\n              <ion-icon name="trash"></ion-icon>Remove\n            </button></td>\n\n          </tr> -->\n        </table>\n      </ion-col>\n    </ion-row>\n\n  </ion-list>\n</ion-content>\n<ion-footer class="ion-footer">\n  <ion-row padding class="ShadowBox13">\n    <ion-col col-6>\n      <button ion-button  block class="btnRadius btncancel" (click)="backToDashboard();">\n        <ion-icon ></ion-icon>\n        Cancel\n      </button>\n    </ion-col>\n\n    <ion-col col-6>\n      <button ion-button icon-start block class="btnRadius" (click)="save()">\n        <ion-icon ></ion-icon>\n       Save\n      </button>\n    </ion-col>\n  </ion-row>\n  <div class="label-white toolbar-background-md" center text-center>\n    © Kale Logistics Solutions Private Limited. {{appBuildConfig.fullYear}} Version {{appBuildConfig.version}}\n  </div>\n</ion-footer>\n'/*ion-inline-end:"/Users/himeshpatel/Documents/kaleLogistics/Corvi/src/pages/update-job-milestone/update-job-milestone.html"*/,
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

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export searchJobList */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchJobsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_http_service_http_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_global__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_util_toast_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__search_job_results_search_job_results__ = __webpack_require__(379);
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

/**
 * Generated class for the SearchJobsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SearchJobsPage = /** @class */ (function () {
    function SearchJobsPage(navCtrl, navParams, globalService, http, toastService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.globalService = globalService;
        this.http = http;
        this.toastService = toastService;
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
        this.FromDate = new Date().toISOString();
        this.ToDate = new Date().toISOString();
        this.title = "Search Job(s)";
        this.appBuildConfig = this.globalService.appBuildConfig;
        this.UserDetails = this.globalService.get('userDetails');
        this.BranchTbl = this.UserDetails[Object.keys(this.UserDetails)[1]]["Table4"];
        this.fetchedData = this.navParams.get('searchDetails');
        this.searchList = new searchJobList();
    }
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
        var _this = this;
        this.searchList.UserId = localStorage.getItem('userId'); //
        this.searchList.BranchCode = this.fetchedData.branch; //
        this.searchList.JobType = this.fetchedData.jobType; //
        this.searchList.ShipmentType = this.fetchedData.shipmentType;
        this.searchList.Mode = this.fetchedData.mode;
        this.searchList.Service = this.fetchedData.service;
        this.searchList.MBLNo = this.mawbNumber; //
        this.searchList.HBLNo = this.mawbNumber; //
        this.searchList.CustomerName = this.customerName; //
        this.searchList.JobNo = this.jobNumber; //
        this.searchList.SBNo = this.BeSbNo; //
        this.FromDate = __WEBPACK_IMPORTED_MODULE_6_moment__(this.FromDate).format('MM/DD/YYYY');
        this.ToDate = __WEBPACK_IMPORTED_MODULE_6_moment__(this.ToDate).format('MM/DD/YYYY');
        this.searchList.FromDate = this.FromDate;
        this.searchList.ToDate = this.ToDate;
        this.http.POST(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* Constants */].Corvi_Services.GetSearchJobList, this.searchList).then(function (response) {
            console.log('check response here: ', response);
            // this.responseData = response;
            if (response != 0) {
                var stageOne = response['Table'];
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__search_job_results_search_job_results__["a" /* SearchJobResultsPage */], { jobResults: stageOne });
            }
        });
    };
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
        debugger;
        var a = Date.parse(sdate);
        var b = Date.parse(edate);
        if (b < a || b == a) {
            this.toastService.show('End Time should be greater than Start Time.', 3000, true, 'top', 'toast-container');
            return;
        }
        else {
            console.log('all ok!');
            // alert('ok')
        }
    };
    SearchJobsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-search-jobs',template:/*ion-inline-start:"/Users/himeshpatel/Documents/kaleLogistics/Corvi/src/pages/search-jobs/search-jobs.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title center text-center>\n      {{title}}\n    </ion-title>\n\n    <ion-buttons right>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-row padding class="ShadowBox13">\n    <ion-col col-12>\n      <label>\n        <b>Branch</b>\n      </label>\n    </ion-col>\n\n    <ion-col col-12>\n      <select id="ddlBrach" name="ddlBrach" [(ngModel)]="searchList.BranchCode" col-12 placeholder="">\n        <option [value]="0" disabled selected>Select</option>\n        <option *ngFor="let brData of BranchTbl" [value]="brData.BranchCode">{{brData.branch}}</option>\n      </select>\n    </ion-col>\n\n    <ion-col col-6>\n      <ion-label>\n        <b>Search job(s) from</b>\n      </ion-label>\n    </ion-col>\n    <ion-col style="text-align:end" col-6>\n      <ion-datetime displayFormat="MM/DD/YYYY" pickerFormat="MM/DD/YYYY" [(ngModel)]="FromDate"></ion-datetime>\n    </ion-col>\n    <br />\n    <ion-col col-6>\n      <ion-label>\n        <b>To</b>\n      </ion-label>\n    </ion-col>\n    <ion-col style="text-align:end" col-6>\n      <ion-datetime displayFormat="MM/DD/YYYY" pickerFormat="MM/DD/YYYY" [(ngModel)]="ToDate" (ngModelChange)="changed($event)"></ion-datetime>\n    </ion-col>\n\n\n    <ion-col col-12>\n      <label>\n        <b>Customer Name</b>\n      </label>\n    </ion-col>\n    <ion-col col-12>\n      <input col-12 type="text" name="customerName" [(ngModel)]="customerName">\n    </ion-col>\n\n    <ion-col col-12>\n      <label>\n        <b>Job No.</b>\n      </label>\n    </ion-col>\n    <ion-col col-12>\n      <input col-12 type="text" name="jobNumber" [(ngModel)]="jobNumber">\n    </ion-col>\n\n    <ion-col col-12>\n      <label>\n        <b>MAWB/MBL No.</b>\n      </label>\n    </ion-col>\n    <ion-col col-12>\n      <input col-12 type="text" name="mawbNumber" [(ngModel)]="mawbNumber">\n    </ion-col>\n\n    <ion-col col-12>\n      <label>\n        <b>HAWB/HBL No.</b>\n      </label>\n    </ion-col>\n    <ion-col col-12>\n      <input col-12 type="text" name="hawbNumber" [(ngModel)]="hawbNumber">\n    </ion-col>\n\n    <ion-col col-12>\n      <label>\n        <b>BE/SB No.</b>\n      </label>\n    </ion-col>\n    <ion-col col-12>\n      <input col-12 type="text" name="BeSbNo" [(ngModel)]="BeSbNo">\n    </ion-col>\n  </ion-row>\n\n</ion-content>\n<ion-footer class="ion-footer">\n  <ion-row padding class="ShadowBox13">\n    <ion-col col-6>\n      <button ion-button block class="btnRadius btncancel" (click)="cancelJobSearch()">\n        <ion-icon></ion-icon>\n        Cancel\n      </button>\n    </ion-col>\n\n    <ion-col col-6>\n      <button ion-button icon-start block class="btnRadius" (click)="searchJobs()">\n        <ion-icon></ion-icon>\n        Search\n      </button>\n    </ion-col>\n  </ion-row>\n  <!-- <div class="label-white toolbar-background-md" center text-center>\n      © Kale Logistics Solutions Private Limited. {{appBuildConfig.fullYear}} Version {{appBuildConfig.version}}\n    </div> -->\n</ion-footer>'/*ion-inline-end:"/Users/himeshpatel/Documents/kaleLogistics/Corvi/src/pages/search-jobs/search-jobs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1__providers_http_service_http_service__["a" /* HttpServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_util_toast_service__["a" /* ToastService */]])
    ], SearchJobsPage);
    return SearchJobsPage;
}());

//# sourceMappingURL=search-jobs.js.map

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchJobResultsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_global__ = __webpack_require__(9);
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
    function SearchJobResultsPage(navCtrl, navParams, globalService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.globalService = globalService;
        this.fetchedData = [];
        this.selectedJobsArray = [];
        this.title = 'Search Job Results';
        this.fetchedData = this.navParams.get('jobResults');
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
    SearchJobResultsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search-job-results',template:/*ion-inline-start:"/Users/himeshpatel/Documents/kaleLogistics/Corvi/src/pages/search-job-results/search-job-results.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title center text-center>\n      {{title}}\n    </ion-title>\n\n    <ion-buttons right>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-list class="ShadowBox13">\n    <ion-item *ngFor="let data of fetchedData">\n      <ion-label>\n        <h4>{{data.JobNo}}</h4>\n        <h6>{{data.CustomerName}}</h6>\n        \n      </ion-label>\n      <ion-checkbox slot="end" (ionChange)="selectedJobs(data)" class="float-right"></ion-checkbox>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n\n<ion-footer class="ion-footer">\n  <ion-row padding class="ShadowBox13">\n    <ion-col col-6>\n      <button ion-button block class="btnRadius btncancel">\n        <ion-icon></ion-icon>\n        Cancel\n      </button>\n    </ion-col>\n\n    <ion-col col-6>\n      <button ion-button icon-start block class="btnRadius" (click)="confirmJobs()">\n        <ion-icon></ion-icon>\n        Confirm\n      </button>\n    </ion-col>\n  </ion-row>\n  <!-- <div class="label-white toolbar-background-md" center text-center>\n      © Kale Logistics Solutions Private Limited. {{appBuildConfig.fullYear}} Version {{appBuildConfig.version}}\n    </div> -->\n</ion-footer>\n'/*ion-inline-end:"/Users/himeshpatel/Documents/kaleLogistics/Corvi/src/pages/search-job-results/search-job-results.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */]])
    ], SearchJobResultsPage);
    return SearchJobResultsPage;
}());

//# sourceMappingURL=search-job-results.js.map

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export searchMilestoneList */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchMilestonePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_http_service_http_service__ = __webpack_require__(18);
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
        this.BranchTbl = this.UserDetails[Object.keys(this.UserDetails)[1]]["Table4"];
        this.ModeTbl = this.UserDetails[Object.keys(this.UserDetails)[1]]["Table3"];
        this.ServiceTBl = this.UserDetails[Object.keys(this.UserDetails)[1]]["Table3"];
        this.ShipmentTbl = this.UserDetails[Object.keys(this.UserDetails)[1]]["Table3"];
        this.modes = this.ModeTbl.filter(function (a) { return a.Identifier == "TransportMode"; });
        this.services = this.ModeTbl.filter(function (a) { return a.Identifier == "Service"; });
        this.shipments = this.ModeTbl.filter(function (a) { return a.Identifier == "ShipmentType"; });
        this.searchList = new searchMilestoneList();
    }
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
        }
        else {
            this.VenType = '1';
        }
    };
    SearchMilestonePage.prototype.dismissModal = function () {
        var data = { 'foo': 'bar' };
        this.viewCtrl.dismiss(localStorage.getItem('jobType'));
    };
    SearchMilestonePage.prototype.getSearchMilestoneData = function () {
        var _this = this;
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
            _this.mileStoneDetails = response['Table'];
            console.log('check search milestone list data: ', _this.mileStoneDetails);
            // this.mileStoneDetails = response;
        });
        console.log('all the data: ', this.searchList.UserId, '+', this.serviceCode, '+', this.VenType, '+', this.shipmentCode, '+', this.transportMode);
    };
    SearchMilestonePage.prototype.onMilestoneSelect = function (selectedData) {
        this.globalService.selectedMilestone = selectedData;
        console.log('********', this.globalService.selectedMilestone.DocumentName);
        // this.navCtrl.push(UpdateJobMilestonePage, {milestone: selecetedData})
        this.navCtrl.remove(this.navCtrl.getActive().index - 0, 1);
    };
    SearchMilestonePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-search-milestone',template:/*ion-inline-start:"/Users/himeshpatel/Documents/kaleLogistics/Corvi/src/pages/search-milestone/search-milestone.html"*/'<!--\n  Generated template for the SearchMilestonePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <!-- <button right ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button> -->\n    <ion-title center text-center>\n      {{title}}\n    </ion-title>\n\n    <ion-buttons left>\n      <button ion-button icon-only (click)="dismissModal();">\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-buttons right>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <!-- <ion-list> -->\n    <ion-row padding>\n      <ion-col col-12>\n        <b>Job Type</b>\n      </ion-col>\n\n          <ion-col col-6>\n            <input [(ngModel)]="VenType" type="radio" class="stv-radio-button" name="jobType" value="1"\n              id="1" disabled/>\n            <label for="1">Freight Forwarding</label>\n          </ion-col>\n          <ion-col col-6>\n            <input [(ngModel)]="VenType" type="radio" class="stv-radio-button" name="jobType" value="2"\n              id="2" disabled />\n            <label for="2">Customs</label>\n          </ion-col>\n        \n      <ion-col col-12>\n        <label>\n          Branch\n        </label>\n      </ion-col>\n\n      <ion-col col-12>\n\n        <select id="ddlBrach" name="ddlBrach" [(ngModel)]="branchCode" col-12 disabled>\n          <option [value]="0" disabled selected>Select</option>\n          <option *ngFor="let brData of BranchTbl" [value]="brData.BranchCode">{{brData.branch}}</option>\n\n        </select>\n\n      </ion-col>\n\n      <ion-col col-12>\n        <label>\n          Mode\n        </label>\n      </ion-col>\n\n      <ion-col col-12>\n        <select id="ddlMode" name="ddlMode" [(ngModel)]="transportMode" col-12 disabled>\n          <option [value]="0" disabled selected>Select</option>\n          <option *ngFor="let modeData of modes" [value]="modeData.KeyValue">{{modeData.Description}}</option>\n        </select>\n      </ion-col>\n\n\n      <ion-col col-12>\n        <label>\n          Service\n        </label>\n      </ion-col>\n\n      <ion-col col-12>\n        <select id="ddlService" name="ddlService" [(ngModel)]="serviceCode" col-12 disabled>\n          <option [value]="0" disabled selected>Select</option>\n          <option *ngFor="let serviceData of services" [value]="serviceData.KeyValue">{{serviceData.Description}}\n          </option>\n        </select>\n      </ion-col>\n\n\n      <ion-col col-12>\n        <label>\n          Shipment Type\n        </label>\n      </ion-col>\n\n      <ion-col col-12>\n        <select id="ddlShipment" name="ddlShipment" [(ngModel)]="shipmentCode" col-12 disabled>\n          <option [value]="0" disabled selected>Select</option>\n          <option *ngFor="let shipData of shipments" [value]="shipData.KeyValue">{{shipData.Description}}</option>\n        </select>\n      </ion-col>\n\n      \n    </ion-row>\n\n    <ion-row padding>\n      <ion-col col-6>\n        <button ion-button round outline class=" btncancel" (click)="dismissModal();">\n          <ion-icon></ion-icon>\n          Cancel\n        </button>\n      </ion-col>\n\n      <ion-col col-6>\n        <button type="button" ion-button icon-start block class="btnRadius" (click)="getSearchMilestoneData()">\n          <ion-icon></ion-icon>\n          Search\n        </button>\n      </ion-col>\n    </ion-row>\n  \n    <ion-row padding class="ShadowBox13">\n        <ion-col col-12>\n            <table>\n                <tr *ngFor="let data of mileStoneDetails">\n                  <td>\n                    <label>\n                      {{data.DocumentName}}\n                    </label>\n                  </td>\n                  <td><button (click)="onMilestoneSelect(data)">Select</button></td>\n                </tr>  \n              </table>\n        </ion-col>\n      </ion-row>\n\n<!-- </ion-list> -->\n</ion-content>\n\n<ion-footer class="ion-footer">\n\n    <!-- <div class="label-white toolbar-background-md" center text-center>\n      © Kale Logistics Solutions Private Limited. {{appBuildConfig.fullYear}} Version {{appBuildConfig.version}}\n    </div> -->\n  </ion-footer>'/*ion-inline-end:"/Users/himeshpatel/Documents/kaleLogistics/Corvi/src/pages/search-milestone/search-milestone.html"*/,
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

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Pdfviewer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_pdf_viewer__ = __webpack_require__(385);
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
            selector: 'pdfviewer',template:/*ion-inline-start:"/Users/himeshpatel/Documents/kaleLogistics/Corvi/src/components/pdfviewer/pdfviewer.html"*/'<Corvi-header [title]="title"></Corvi-header>\n\n<ion-content class="marginTop57">\n  <ion-searchbar placeholder="Search..." showCancelButton color="danger" (ionInput)="search($event)"></ion-searchbar>\n  <div id="pdf-file-container">\n    <pdf-viewer [src]="pdfSrc" [original-size]="false" style="display: block;" (on-progress)="onProgress($event)" (error)="onError($event)"\n      [zoom]="zoom_to"></pdf-viewer>\n  </div>\n</ion-content>\n\n<ion-fab right bottom #fab1>\n  <button class="pop-in" ion-fab mini color="primary" [ngClass]="{\'pop-out\': fabGone}" (click)="zoom_in()">\n    <ion-icon name="add"></ion-icon>\n  </button>\n  <!-- <ion-label>Zoom In</ion-label> -->\n\n</ion-fab>\n\n<ion-fab left bottom #fab2>\n  <button class="pop-in" ion-fab mini color="primary" [ngClass]="{\'pop-out\': fabGone}" (click)="zoom_out()">\n    <ion-icon name="remove"></ion-icon>\n  </button>\n  <!-- <ion-label>Zoom Out</ion-label> -->\n\n</ion-fab>'/*ion-inline-end:"/Users/himeshpatel/Documents/kaleLogistics/Corvi/src/components/pdfviewer/pdfviewer.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ToastController */]])
    ], Pdfviewer);
    return Pdfviewer;
}());

//# sourceMappingURL=pdfviewer.js.map

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuotationDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_global__ = __webpack_require__(9);
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
            selector: 'page-quotation-detail',template:/*ion-inline-start:"/Users/himeshpatel/Documents/kaleLogistics/Corvi/src/pages/quotation/quotation-detail/quotation-detail.html"*/'<Corvi-header [title]="title"></Corvi-header>\n\n<ion-content class="marginTop57">\n  <!-- <ion-item>\n    <ion-label color="primary">Customer</ion-label>\n    <ion-input type="text" name="Customer" [(ngModel)]="q_details[0].Customer" [disabled]="true" text-right></ion-input>\n  </ion-item> -->\n  <ion-item>\n    <ion-label color="primary">Quotation No</ion-label>\n    <ion-input type="text" name="Quotation_No" [(ngModel)]="q_details[0].QuotationNo" [disabled]="true" text-right></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label color="primary">Quotation Amount</ion-label>\n    <ion-input type="text" name="Quotation_amount" [(ngModel)]="q_details[0].QuotationAmount == \'\' ? \'--\' :  q_details[0].QuotationAmount"\n      [disabled]="true" text-right></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label color="primary">Enquiry Reference</ion-label>\n    <ion-input type="text" name="EnquiryReference" [(ngModel)]="q_details[0].EnquiryReference == \'\' ? \'--\' :  q_details[0].EnquiryReference"\n      [disabled]="true" text-right></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label color="primary">Mode</ion-label>\n    <ion-input type="text" name="Mode" [(ngModel)]="q_details[0].Mode" [disabled]="true" text-right></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label color="primary">Quotation Date</ion-label>\n    <ion-input type="text" name="Quotation_Date" [(ngModel)]="q_details[0].QuotationDate" [disabled]="true" text-right></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label color="primary">Quotation ID</ion-label>\n    <ion-input type="text" name="Quotation_Id" [(ngModel)]="q_details[0].QuotationId" [disabled]="true" text-right></ion-input>\n  </ion-item>\n\n\n  <ion-item>\n    <ion-label color="primary">Service</ion-label>\n    <ion-input type="text" name="Service" [(ngModel)]="q_details[0].Service" [disabled]="true" text-right></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label color="primary">Status</ion-label>\n    <ion-input type="text" name="Status" [(ngModel)]="q_details[0].Status" [disabled]="true" text-right></ion-input>\n  </ion-item>\n\n</ion-content>\n\n<!-- <ion-fab right bottom #fab1>\n  <button class="pop-in" ion-fab mini color="primary" [ngClass]="{\'pop-out\': fabGone}" (click)="viewPDF()">\n    <ion-icon name="document"></ion-icon>\n  </button>\n  <ion-label>View PDF</ion-label>\n\n</ion-fab> -->'/*ion-inline-end:"/Users/himeshpatel/Documents/kaleLogistics/Corvi/src/pages/quotation/quotation-detail/quotation-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */]])
    ], QuotationDetailPage);
    return QuotationDetailPage;
}());

//# sourceMappingURL=quotation-detail.js.map

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpenJobsPageDetails; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_global__ = __webpack_require__(9);
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
            selector: 'page-open-jobs-details',template:/*ion-inline-start:"/Users/himeshpatel/Documents/kaleLogistics/Corvi/src/pages/open-jobs/detail/open-jobs-details.html"*/'<Corvi-header [title]="title"></Corvi-header>\n\n<ion-content class="marginTop57">\n\n    <ion-item>\n\n        <ion-label color="primary">Job No</ion-label>\n\n        <ion-input type="text" name="Job_No" [(ngModel)]="open_jobs_details[0].JobNo" [disabled]="true" text-right></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label color="primary">Job Date</ion-label>\n\n        <ion-input type="text" name="Job_Date" [(ngModel)]="open_jobs_details[0].JobDate" [disabled]="true" text-right></ion-input>\n\n    </ion-item>\n\n    <!-- <ion-item>\n\n        <ion-label color="primary">WO Detail No</ion-label>\n\n        <ion-input type="text" name="WO_DetailNo" [(ngModel)]="open_jobs_details[0].WODetailNo" [disabled]="true" text-right></ion-input>\n\n    </ion-item> -->\n\n    <ion-item>\n\n        <ion-label color="primary">Mode</ion-label>\n\n        <ion-input type="text" name="Mode" [(ngModel)]="open_jobs_details[0].Mode" [disabled]="true" text-right></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label color="primary">Service</ion-label>\n\n        <ion-input type="text" name="Service" [(ngModel)]="open_jobs_details[0].Service" [disabled]="true" text-right></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label color="primary">Customer</ion-label>\n\n        <ion-input type="text" name="Customer" [(ngModel)]="open_jobs_details[0].Customer" [disabled]="true" text-right></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label color="primary">Origin</ion-label>\n\n        <ion-input type="text" name="Origin" [(ngModel)]="open_jobs_details[0].Origin" [disabled]="true" text-right></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label color="primary">Destination</ion-label>\n\n        <ion-input type="text" name="Destination" [(ngModel)]="open_jobs_details[0].Destination" [disabled]="true"\n\n            text-right></ion-input>\n\n    </ion-item>\n\n</ion-content>'/*ion-inline-end:"/Users/himeshpatel/Documents/kaleLogistics/Corvi/src/pages/open-jobs/detail/open-jobs-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */]])
    ], OpenJobsPageDetails);
    return OpenJobsPageDetails;
}());

//# sourceMappingURL=open-jobs-details.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClosedJobsPageDetails; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_global__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_util_alert_service__ = __webpack_require__(23);
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
            selector: 'page-closed-jobs-details',template:/*ion-inline-start:"/Users/himeshpatel/Documents/kaleLogistics/Corvi/src/pages/closed-jobs/detail/closed-jobs-details.html"*/'<Corvi-header [title]="title"></Corvi-header>\n\n<ion-content class="marginTop57">\n\n    <ion-item>\n\n        <ion-label color="primary">Job No</ion-label>\n\n        <ion-input type="text" name="Job_No" [(ngModel)]="closed_jobs_details[0].JobNo" [disabled]="true" text-right></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label color="primary">Job Date</ion-label>\n\n        <ion-input type="text" name="Job_Date" [(ngModel)]="closed_jobs_details[0].JobDate" [disabled]="true"\n\n            text-right></ion-input>\n\n    </ion-item>\n\n    <!-- <ion-item>\n\n        <ion-label color="primary">WO Detail No</ion-label>\n\n        <ion-input type="text" name="WO_DetailNo" [(ngModel)]="closed_jobs_details[0].WODetailNo" [disabled]="true" text-right></ion-input>\n\n    </ion-item> -->\n\n    <ion-item>\n\n        <ion-label color="primary">Mode</ion-label>\n\n        <ion-input type="text" name="Mode" [(ngModel)]="closed_jobs_details[0].Mode" [disabled]="true" text-right></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label color="primary">Service</ion-label>\n\n        <ion-input type="text" name="Service" [(ngModel)]="closed_jobs_details[0].Service" [disabled]="true" text-right></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label color="primary">Customer</ion-label>\n\n        <ion-input type="text" name="Customer" [(ngModel)]="closed_jobs_details[0].Customer" [disabled]="true"\n\n            text-right></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label color="primary">Origin</ion-label>\n\n        <ion-input type="text" name="Origin" [(ngModel)]="closed_jobs_details[0].Origin" [disabled]="true" text-right></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label color="primary">Destination</ion-label>\n\n        <ion-input type="text" name="Destination" [(ngModel)]="closed_jobs_details[0].Destination" [disabled]="true"\n\n            text-right></ion-input>\n\n    </ion-item>\n\n</ion-content>\n\n\n\n<!-- <ion-fab right bottom #fab1>\n\n    <button class="pop-in" ion-fab mini color="primary" [ngClass]="{\'pop-out\': fabGone}">\n\n        <ion-icon name="document"></ion-icon>\n\n    </button>\n\n    <ion-label>View PDF</ion-label>\n\n\n\n</ion-fab> -->\n\n<!-- \n\n<ion-fab right bottom #fab2>\n\n    <button class="pop-in" ion-fab mini color="primary" [ngClass]="{\'pop-out\': fabGone}" (click)="followJob()">\n\n        <ion-icon name="help"></ion-icon>\n\n    </button>\n\n    <ion-label>Follow Job</ion-label>\n\n\n\n</ion-fab> -->'/*ion-inline-end:"/Users/himeshpatel/Documents/kaleLogistics/Corvi/src/pages/closed-jobs/detail/closed-jobs-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__providers_util_alert_service__["a" /* AlertService */]])
    ], ClosedJobsPageDetails);
    return ClosedJobsPageDetails;
}());

//# sourceMappingURL=closed-jobs-details.js.map

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoicesDetails; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_global__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_util_alert_service__ = __webpack_require__(23);
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
            selector: 'page-invoices-details',template:/*ion-inline-start:"/Users/himeshpatel/Documents/kaleLogistics/Corvi/src/pages/invoices/detail/invoices-details.html"*/'<Corvi-header [title]="title"></Corvi-header>\n\n<ion-content class="marginTop57">\n\n\n\n\n\n    <ion-item>\n\n        <ion-label color="primary">Bill No</ion-label>\n\n        <ion-input type="text" name="BillingNo" [(ngModel)]="invoice_details[0].BillingNo" [disabled]="true" text-right></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label color="primary">Bill Date</ion-label>\n\n        <ion-input type="text" name="InvoiceDate" [(ngModel)]="invoice_details[0].InvoiceDate" [disabled]="true"\n\n            text-right></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label color="primary">Job No</ion-label>\n\n        <ion-input type="text" name="JobNo" [(ngModel)]="invoice_details[0].JobNo" [disabled]="true" text-right></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label color="primary">Amount</ion-label>\n\n        <ion-input type="text" name="Amount" [(ngModel)]="invoice_details[0].Amount" [disabled]="true" text-right></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n        <ion-label color="primary">Customer</ion-label>\n\n        <ion-input type="text" name="Customer" [(ngModel)]="invoice_details[0].Customer" [disabled]="true" text-right\n\n            style="font-size: 1.2rem;"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label color="primary">Branch</ion-label>\n\n        <ion-input type="text" name="Branch" [(ngModel)]="invoice_details[0].Branch" [disabled]="true" text-right></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label color="primary">Mode</ion-label>\n\n        <ion-input type="text" name="Mode" [(ngModel)]="invoice_details[0].Mode" [disabled]="true" text-right></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label color="primary">Service</ion-label>\n\n        <ion-input type="text" name="Service" [(ngModel)]="invoice_details[0].Service" [disabled]="true" text-right></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label color="primary">Reference No</ion-label>\n\n        <ion-input type="text" name="ReferenceNo" [(ngModel)]="invoice_details[0].ReferenceNo == \'\' ? \'--\' :invoice_details[0].ReferenceNo"\n\n            [disabled]="true" text-right></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label color="primary">Reference Date</ion-label>\n\n        <ion-input type="text" name="ReferenceDate" [(ngModel)]="invoice_details[0].ReferenceDate" [disabled]="true"\n\n            text-right></ion-input>\n\n    </ion-item>\n\n    <br>\n\n    <br>\n\n    <br>\n\n    <br>\n\n    <br>\n\n    <br>\n\n    <br>\n\n    <br>\n\n    <br>\n\n</ion-content>\n\n\n\n<ion-fab right bottom #fab1>\n\n    <button class="pop-in" ion-fab mini color="primary" [ngClass]="{\'pop-out\': fabGone}" (click)="viewPDF()">\n\n        <ion-icon name="document"></ion-icon>\n\n    </button>\n\n    <ion-label>View PDF</ion-label>\n\n\n\n</ion-fab>\n\n\n\n<!-- <ion-fab right bottom #fab2>\n\n    <button class="pop-in" ion-fab mini color="primary" [ngClass]="{\'pop-out\': fabGone}" (click)="followJob()">\n\n        <ion-icon name="help"></ion-icon>\n\n    </button>\n\n    <ion-label>Follow Job</ion-label>\n\n\n\n</ion-fab> -->'/*ion-inline-end:"/Users/himeshpatel/Documents/kaleLogistics/Corvi/src/pages/invoices/detail/invoices-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__providers_util_alert_service__["a" /* AlertService */]])
    ], InvoicesDetails);
    return InvoicesDetails;
}());

//# sourceMappingURL=invoices-details.js.map

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoreComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_login_login__ = __webpack_require__(43);
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
            selector: 'more-options',template:/*ion-inline-start:"/Users/himeshpatel/Documents/kaleLogistics/Corvi/src/components/more/more.html"*/'<ion-list class="no-margin" style="margin:inherit !important">\n\n  <!-- <button ion-item class="text-1x" tappable (click)="notifications()">\n    <ion-icon ios="ios-notifications" md="md-notifications"></ion-icon>&nbsp;\n    <span ion-text color="primary">Notifications</span>\n  </button> -->\n  <button ion-item class="text-1x" tappable (click)="logOut()">\n    <ion-icon ios="ios-power" md="md-power"></ion-icon>&nbsp;\n    <span ion-text color="primary">Logout</span>\n\n  </button>\n</ion-list>'/*ion-inline-end:"/Users/himeshpatel/Documents/kaleLogistics/Corvi/src/components/more/more.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */]])
    ], MoreComponent);
    return MoreComponent;
}());

//# sourceMappingURL=more.js.map

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClosedJobsPageModule", function() { return ClosedJobsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__closed_jobs__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detail_closed_jobs_details__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pipes_pipes_module__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_util_alert_service__ = __webpack_require__(23);
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

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function() { return DashboardPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard__ = __webpack_require__(45);
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

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigureParametersPageModule", function() { return ConfigureParametersPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__configure_parameters__ = __webpack_require__(375);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
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

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindSalesActivityPageModule", function() { return FindSalesActivityPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__find_sales_activity__ = __webpack_require__(94);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
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

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnquiryPageModule", function() { return EnquiryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__enquiry__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__detail_enquiry_cargo_detail__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__detail_enquiry_package_detail__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__detail_enquiry_contact_detail__ = __webpack_require__(372);
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

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindLocationPageModule", function() { return FindLocationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__find_location__ = __webpack_require__(376);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
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

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoicesPageModule", function() { return InvoicesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__invoices__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__detail_invoices_details__ = __webpack_require__(397);
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

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenJobsPageModule", function() { return OpenJobsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__open_jobs__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detail_open_jobs_details__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pipes_pipes_module__ = __webpack_require__(98);
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

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewSalesActivityPageModule", function() { return NewSalesActivityPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__new_sales_activity__ = __webpack_require__(138);
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

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordPageModule", function() { return ResetPasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reset_password__ = __webpack_require__(373);
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

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewSalesLeadPageModule", function() { return NewSalesLeadPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__new_sales_lead__ = __webpack_require__(95);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
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

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchJobResultsPageModule", function() { return SearchJobResultsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_job_results__ = __webpack_require__(379);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
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

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotationPageModule", function() { return QuotationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quotation__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__quotation_detail_quotation_detail__ = __webpack_require__(394);
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

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs__ = __webpack_require__(413);
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

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_http_service_http_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__quotation_quotation__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__invoices_invoices__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__open_jobs_open_jobs__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__closed_jobs_closed_jobs__ = __webpack_require__(143);
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
            selector: 'page-tabs',template:/*ion-inline-start:"/Users/himeshpatel/Documents/kaleLogistics/Corvi/src/pages/tabs/tabs.html"*/'<ion-tabs *ngIf="showTabs">\n  <!-- *ngIf="showTabs"-->\n  <ion-tab [root]="HomePage" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="QuotationPage" tabTitle="Quotation" [tabBadge]="tabsCount.QuotationCount" tabIcon="quote"></ion-tab>\n  <ion-tab [root]="OpenJobsPage" tabTitle="Open Jobs" [tabBadge]="tabsCount.OpenJobsCount" tabIcon="open"></ion-tab>\n  <ion-tab [root]="ClosedJobsPage" tabTitle="Closed Jobs" [tabBadge]="tabsCount.ClosedJobsCount" tabIcon="close">\n  </ion-tab>\n  <ion-tab [root]="InvoicesPage" tabTitle="Invoices" [tabBadge]="tabsCount.InvoicesCount" tabIcon="print"></ion-tab>\n  <ion-tab [root]="EnquiryPage" tabTitle="Enquiry" [tabBadge]="tabsCount.EnquiryCount" tabIcon="clipboard"></ion-tab>\n\n</ion-tabs>'/*ion-inline-end:"/Users/himeshpatel/Documents/kaleLogistics/Corvi/src/pages/tabs/tabs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_4__providers_http_service_http_service__["a" /* HttpServiceProvider */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeuserPageModule", function() { return WelcomeuserPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__welcomeuser__ = __webpack_require__(374);
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

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchJobsPageModule", function() { return SearchJobsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_jobs__ = __webpack_require__(378);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
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

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateJobMilestonePageModule", function() { return UpdateJobMilestonePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__update_job_milestone__ = __webpack_require__(377);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
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

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchMilestonePageModule", function() { return SearchMilestonePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_milestone__ = __webpack_require__(380);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
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

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_http_service_http_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_util_alert_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_util_toast_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__enquiry_enquiry__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__reset_password_reset_password__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__welcomeuser_welcomeuser__ = __webpack_require__(374);
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
        this.globalService.get('userName')
            .then(function (UUID) { return _this.setDetails(UUID); }, function (error) { return console.error(error); });
    };
    LoginPage.prototype.setDetails = function (UUID) {
        var _this = this;
        this.user.UserId = UUID;
        this.http.POST(__WEBPACK_IMPORTED_MODULE_5__constants__["a" /* Constants */].Corvi_Services.UserDetails, this.user).then(function (userDetailsResp) {
            _this.globalService.store('userDetails', userDetailsResp);
            console.log('check userdetails', userDetailsResp);
            var stageOne = userDetailsResp['Table'][0];
            console.log('check userdetails2', stageOne.UserId);
            localStorage.setItem('userId', stageOne.UserId);
            localStorage.setItem('profileType', stageOne.ProfileType);
            console.log('what profile: ', localStorage.getItem('profileType'));
            console.log('checking from local', localStorage.getItem('userId'));
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
            selector: 'page-login',template:/*ion-inline-start:"/Users/himeshpatel/Documents/kaleLogistics/Corvi/src/pages/login/login.html"*/'<!-- -->\n<ion-header no-border>\n  <ion-grid class="gridDesign">\n    <ion-row>\n      <ion-col col-6>\n        <div padding-horizontal class="animated fadeInDown">\n          <div class="logoLeft">\n            <img class="imgLeft" src="../assets/img/Corvi_Logo.png">\n          </div>\n        </div>\n      </ion-col>\n\n      <ion-col col-6>\n        <div padding-horizontal class="animated fadeInDown">\n          <div class="logoRight"></div>\n          <img class="imgRight" src="../assets/img/Kale_Logo.png">\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-header>\n<ion-content padding class="animated fadeIn login">\n  <div class="login-content">\n    <!-- Login form -->\n    <!-- <form [formGroup]="authForm" class="list-form" > -->\n    <form #f="ngForm" class="list-form">\n      <div class="contaier-login">\n\n        <ion-row>\n          <ion-col>\n\n            <h3 style="text-align: center;">Sign in to your account</h3>\n\n          </ion-col>\n        </ion-row>\n        <ion-item>\n          <ion-label stacked>\n            <!-- <ion-icon name="person" item-start class="text-primary"></ion-icon> -->\n            Enter Username\n          </ion-label>\n          <ion-input type="text" [(ngModel)]="user.UserId" #nameCtrl="ngModel" name="userId" required></ion-input>\n        </ion-item>\n        <div class="errorbox" style="color:tomato" *ngIf="!nameCtrl.valid && nameCtrl.touched">required</div>\n        <!-- <ion-item *ngIf="!nameCtrl.valid && nameCtrl.touched">\n            <ion-label color="danger">Name is required</ion-label>\n          </ion-item>\n           -->\n\n        <ion-item>\n          <ion-label stacked>\n            Enter Password\n          </ion-label>\n          <ion-input type="{{type}}" [(ngModel)]="user.Password" #passwordCtrl="ngModel" name="password" required>\n          </ion-input>\n          <button *ngIf="!showPass" ion-button clear color="dark" type="button" item-right (click)="showPassword()">\n            <ion-icon name="ios-eye-off-outline"></ion-icon>\n          </button>\n          <button *ngIf="showPass" ion-button clear color="dark" type="button" item-right (click)="showPassword()">\n            <ion-icon name="ios-eye-outline"></ion-icon>\n          </button>\n          <!-- <ion-input name="p2" type="password" *ngIf="!showPwd" [(ngModel)]="user.Password" required></ion-input> -->\n          <!-- <button icon-only ion-button clear type="button" item-right (click)="showPwd=!showPwd">\n            <ion-icon *ngIf="showPwd" name="eye"></ion-icon>\n            <ion-icon *ngIf="!showPwd" name="eye-off"></ion-icon>\n          </button> -->\n        </ion-item>\n        <div class="errorbox" style="color:tomato" *ngIf="!passwordCtrl.valid && passwordCtrl.touched">required</div>\n        <!-- <ion-item *ngIf="!passwordCtrl.valid && passwordCtrl.touched">\n            <ion-label color="danger">Password is required</ion-label>\n          </ion-item> -->\n\n        <ion-item>\n          <!-- *ngIf="showCustIdCode" -->\n          <ion-label stacked>\n            Enter Customer Identity Code\n          </ion-label>\n          <ion-input type="text"  [(ngModel)]="customerCode" #codeCtrl="ngModel" name="customerCode" required>\n          </ion-input>\n        </ion-item>\n        <div class="errorbox" style="color:tomato" *ngIf="!codeCtrl.valid && codeCtrl.touched">required</div>\n        <!-- <ion-item *ngIf="!codeCtrl.valid && codeCtrl.touched">\n            <ion-label color="danger">code is required</ion-label>\n          </ion-item> -->\n\n        <br />\n        <ion-row>\n          <ion-checkbox name=\'remember\' [(ngModel)]="isRemembered" style="margin-top: 13px;"></ion-checkbox>&nbsp;&nbsp;\n          <ion-label id="checkboxRemember" color="secondary">Remember Me</ion-label>\n          <p text-right ion-text color="secondary" tappable (click)="forgotPwd()">\n            <strong>Forgot Password?</strong>\n          </p>\n\n        </ion-row>\n        <br />\n        <div>\n          <button style="border-radius: 10px;" ion-button block color="primary" tappable [disabled]="!f.valid"\n            (click)="logIn()">\n            <!-- <ion-icon name="log-in"></ion-icon> -->\n            Sign In\n          </button>\n\n        </div>\n\n      </div>\n    </form>\n  </div>\n\n  <div class="addOns">\n    <div class="addOnsText">\n      <h4>Additional Services</h4>\n    </div>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <div class="container">\n            <img src="../assets/img/moreservices.png">\n            <h6>More Services</h6>\n          </div>\n        </ion-col>\n        <ion-col>\n          <div class="container">\n            <img src="../assets/img/contactus.png">\n            <h6>Contact Us</h6>\n          </div>\n        </ion-col>\n        <ion-col>\n          <div class="container">\n            <img src="../assets/img/monitor_support.png">\n            <h6>24 x 7 Support</h6>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n\n  </div>\n\n</ion-content>\n\n<ion-footer>\n  <div class="bar bar-footer">\n    <ion-row>\n      <ion-col col-6>\n        <h6 style="text-align: center;" class="title">Terms and conditions</h6>\n      </ion-col>\n\n      <ion-col col-6>\n        <h6 style="text-align: center;" class="title">Privacy Policy</h6>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-footer>\n'/*ion-inline-end:"/Users/himeshpatel/Documents/kaleLogistics/Corvi/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ToastController */],
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

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_global__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__configure_parameters_configure_parameters__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__find_sales_activity_find_sales_activity__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__new_sales_activity_new_sales_activity__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__new_sales_lead_new_sales_lead__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__update_job_milestone_update_job_milestone__ = __webpack_require__(377);
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
    function DashboardPage(navCtrl, navParams, menu, globalService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.globalService = globalService;
        this.title = "Home";
    }
    DashboardPage.prototype.ionViewDidLoad = function () {
        this.profileType = localStorage.getItem('profileType');
        console.log('******', this.profileType);
        console.log('ionViewDidLoad DashboardPage');
    };
    DashboardPage.prototype.goToNewSalesActivity = function () {
        this.globalService.setRootPage(__WEBPACK_IMPORTED_MODULE_5__new_sales_activity_new_sales_activity__["a" /* NewSalesActivityPage */]);
    };
    DashboardPage.prototype.goToFindSalesActivityPage = function () {
        this.globalService.setRootPage(__WEBPACK_IMPORTED_MODULE_4__find_sales_activity_find_sales_activity__["a" /* FindSalesActivityPage */]);
    };
    DashboardPage.prototype.goToNewSalesLeadPage = function () {
        this.globalService.setRootPage(__WEBPACK_IMPORTED_MODULE_6__new_sales_lead_new_sales_lead__["a" /* NewSalesLeadPage */]);
    };
    DashboardPage.prototype.goToUpdateJobMilestonePage = function () {
        this.globalService.setRootPage(__WEBPACK_IMPORTED_MODULE_7__update_job_milestone_update_job_milestone__["a" /* UpdateJobMilestonePage */]);
        // this.navCtrl.push(UpdateJobMilestonePage);
    };
    DashboardPage.prototype.goToConfigureParams = function () {
        this.globalService.setRootPage(__WEBPACK_IMPORTED_MODULE_3__configure_parameters_configure_parameters__["a" /* ConfigureParametersPage */]);
    };
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dashboard',template:/*ion-inline-start:"/Users/himeshpatel/Documents/kaleLogistics/Corvi/src/pages/dashboard/dashboard.html"*/'<!--\n  Generated template for the DashboardPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <Corvi-header [title]="title"></Corvi-header> -->\n<ion-header>\n  <ion-navbar color="primary">\n    <button right ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title id="Dashboard" center text-center>\n      {{title}}\n    </ion-title>\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <img src="assets/img/Corvi_BL_Logo_360x70.png">\n  <ion-row *ngIf="profileType == \'1\'" style="margin-top:10px ;" class="text-center">\n    <ion-col col-4 class="text-center box" (click)=\'goToNewSalesActivity();\'>\n      <div class="inner ShadowBox13">\n        <img src="assets/img/add-file.png" class="center">\n        <span>New Sales Activity</span>\n      </div>\n    </ion-col>\n\n    <ion-col col-4 class="text-center box" (click)=\'goToFindSalesActivityPage();\'>\n      <div class="inner ShadowBox13">\n        <img src="assets/img/search2.png" class="center">\n        <span>Search Sales Activity</span>\n      </div>\n    </ion-col>\n    <ion-col col-4 class="text-center box" (click)="goToNewSalesLeadPage();">\n      <div class="inner ShadowBox13">\n        <img src="assets/img/Group 3473.png" class="center">\n        <span>New Sales Lead</span>\n      </div>\n    </ion-col>\n  </ion-row>\n  <ion-row *ngIf="profileType == \'1\'" style="margin-top:10px ;">\n    <ion-col col-4 class="text-center box" (click)="goToUpdateJobMilestonePage();">\n      <div class="inner ShadowBox13">\n        <img src="assets/img/Group 3526.png" class="center">\n        <span>Update Job\n          Milestone</span>\n      </div>\n    </ion-col>\n    <ion-col col-4 class="text-center box" (click)="goToConfigureParams();">\n      <div class="inner ShadowBox13">\n        <img src="assets/img/Group 3527.png" class="center">\n        <span>Configure<br> Parameters</span>\n      </div>\n    </ion-col>\n  </ion-row>\n\n  <ion-row *ngIf="profileType == \'2\'" style="margin-top:10px ;" class="text-center">\n    <ion-col col-4 class="text-center box" (click)=\'goToNewSalesActivity();\'>\n      <div class="inner ShadowBox13">\n        <img src="assets/img/add-file.png" class="center">\n        <span>New Sales Activity</span>\n      </div>\n    </ion-col>\n\n    <ion-col col-4 class="text-center box">\n      <div class="inner ShadowBox13">\n        <img src="assets/img/viewReports.png" class="center">\n        <span>View Reporting User Activity</span>\n      </div>\n    </ion-col>\n\n    <ion-col col-4 class="text-center box" (click)=\'goToFindSalesActivityPage();\'>\n      <div class="inner ShadowBox13">\n        <img src="assets/img/search2.png" class="center">\n        <span>Search Sales Activity</span>\n      </div>\n    </ion-col>\n    </ion-row>\n\n    <ion-row *ngIf="profileType == \'2\'" style="margin-top:10px ;">\n    <ion-col col-4 class="text-center box" (click)="goToNewSalesLeadPage();">\n      <div class="inner ShadowBox13">\n        <img src="assets/img/Group 3473.png" class="center">\n        <span>New Sales Lead</span>\n      </div>\n    </ion-col>\n\n    <ion-col col-4 class="text-center box" (click)="goToUpdateJobMilestonePage();">\n      <div class="inner ShadowBox13">\n        <img src="assets/img/Group 3526.png" class="center">\n        <span>Update Job\n          Milestone</span>\n      </div>\n    </ion-col>\n    <ion-col col-4 class="text-center box" (click)="goToConfigureParams();">\n      <div class="inner ShadowBox13">\n        <img src="assets/img/Group 3527.png" class="center">\n        <span>Configure<br> Parameters</span>\n      </div>\n    </ion-col>\n  </ion-row>\n\n  <div class="addOns">\n    <div class="addOnsText" style="margin-top:15px;">\n      <h4>Additional Services</h4>\n    </div>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n            <div class="container">\n                <img src="../assets/img/moreservices.png">\n                <h6>More Services</h6>\n              </div>\n        </ion-col>\n        <ion-col>\n            <div class="container">\n                <img src="../assets/img/contactus.png">\n                <h6>Contact Us</h6>\n              </div>\n        </ion-col>\n        <ion-col>\n            <div class="container">\n                <img src="../assets/img/monitor_support.png">\n                <h6>24 x 7 Support</h6>\n              </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n   \n\n  </div>\n\n</ion-content>\n\n<!-- <ion-footer class="ion-footer">\n  <ion-toolbar>\n    <ion-title class="label-white">Additional Services</ion-title>\n    <ion-row no-padding style="margin-top:10px ;">\n      <ion-col col-4 class="text-center  box">\n        <div class="inner footer-col-color">\n          <img src="assets/img/smartphone_moreservices.png" class="center-footer-img">\n          More Services\n        </div>\n\n      </ion-col>\n      <ion-col col-4 class="text-center box">\n        <div class="inner footer-col-color">\n          <img src="assets/img/phone-call_contactus-1.png" class="center-footer-img">\n          Contact Us\n        </div>\n\n      </ion-col>\n      <ion-col col-4 class="text-center  box">\n        <div class="inner footer-col-color">\n          <img src="assets/img/monitor_support.png" class="center-footer-img">\n          20 x 7 Support\n        </div>\n\n      </ion-col>\n    </ion-row>\n    <div class="label-white" center text-center>\n      © Kale Logistics Solutions Private Limited. {{appBuildConfig.fullYear}} Version {{appBuildConfig.version}}\n    </div>\n  </ion-toolbar>\n\n\n</ion-footer> -->\n\n<ion-footer>\n  <div class = "bar bar-footer">\n    <ion-row>\n      <ion-col col-2></ion-col>\n      <ion-col col-4>\n          <div class="inner footer-col-color">\n              <img src="assets/img/kale_power.png" class="center-footer-img">\n            </div>\n    \n      </ion-col>\n      <ion-col col-2></ion-col>\n    </ion-row>\n      <ion-row>\n        <ion-col col-6>\n      <h6 style="text-align: center;" class = "title">Terms and conditions</h6>\n    </ion-col>\n\n    <ion-col col-6>\n        <h6 style="text-align: center;" class = "title">Privacy Policy</h6>\n      </ion-col>\n    </ion-row>\n   </div>\n</ion-footer>\n\n'/*ion-inline-end:"/Users/himeshpatel/Documents/kaleLogistics/Corvi/src/pages/dashboard/dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* MenuController */], __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */]])
    ], DashboardPage);
    return DashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 459:
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

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ConnectionStatusEnum */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetworkProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__ = __webpack_require__(461);
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

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hammerjs__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(483);
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

/***/ 483:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(661);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_http_service_http_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_global_global__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_global__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home_module__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_login_login_module__ = __webpack_require__(662);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_register_register_module__ = __webpack_require__(663);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_components_module__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_quotation_quotation_module__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_network_network__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_network__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_open_jobs_open_jobs_module__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_closed_jobs_closed_jobs_module__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_invoices_invoices_module__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_file__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_file_transfer__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_file_opener__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_onesignal__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_push_notification_push_notification__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_tabs_tabs_module__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_native_storage__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_http__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_spinner_dialog__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_baseUrlGenerator_baseurlgenerator__ = __webpack_require__(664);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_enquiry_enquiry_module__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_dashboard_dashboard_module__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_welcomeuser_welcomeuser_module__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_new_sales_activity_new_sales_activity_module__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_find_sales_activity_find_sales_activity_module__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_new_sales_lead_new_sales_lead_module__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_find_location_find_location_module__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_update_job_milestone_update_job_milestone_module__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_search_milestone_search_milestone_module__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_search_jobs_search_jobs_module__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_reset_password_reset_password_module__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_search_job_results_search_job_results_module__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_configure_parameters_configure_parameters_module__ = __webpack_require__(401);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
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
                        { loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule', name: 'DashboardPage', segment: 'dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/configure-parameters/configure-parameters.module#ConfigureParametersPageModule', name: 'ConfigureParametersPage', segment: 'configure-parameters', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/find-sales-activity/find-sales-activity.module#FindSalesActivityPageModule', name: 'FindSalesActivityPage', segment: 'find-sales-activity', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/enquiry/enquiry.module#EnquiryPageModule', name: 'EnquiryPage', segment: 'enquiry', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/find-location/find-location.module#FindLocationPageModule', name: 'FindLocationPage', segment: 'find-location', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/invoices/invoices.module#InvoicesPageModule', name: 'InvoicesPage', segment: 'invoices', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/open-jobs/open-jobs.module#OpenJobsPageModule', name: 'OpenJobsPage', segment: 'open-jobs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/new-sales-activity/new-sales-activity.module#NewSalesActivityPageModule', name: 'NewSalesActivityPage', segment: 'new-sales-activity', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reset-password/reset-password.module#ResetPasswordPageModule', name: 'ResetPasswordPage', segment: 'reset-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/new-sales-lead/new-sales-lead.module#NewSalesLeadPageModule', name: 'NewSalesLeadPage', segment: 'new-sales-lead', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search-job-results/search-job-results.module#SearchJobResultsPageModule', name: 'SearchJobResultsPage', segment: 'search-job-results', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/quotation/quotation.module#QuotationPageModule', name: 'QuotationPage', segment: 'quotation', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcomeuser/welcomeuser.module#WelcomeuserPageModule', name: 'WelcomeuserPage', segment: 'welcomeuser', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search-jobs/search-jobs.module#SearchJobsPageModule', name: 'SearchJobsPage', segment: 'search-jobs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/update-job-milestone/update-job-milestone.module#UpdateJobMilestonePageModule', name: 'UpdateJobMilestonePage', segment: 'update-job-milestone', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search-milestone/search-milestone.module#SearchMilestonePageModule', name: 'SearchMilestonePage', segment: 'search-milestone', priority: 'low', defaultHistory: [] }
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
                __WEBPACK_IMPORTED_MODULE_44__pages_configure_parameters_configure_parameters_module__["ConfigureParametersPageModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* CorviApp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicErrorHandler */] },
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

/***/ 534:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 228,
	"./af.js": 228,
	"./ar": 229,
	"./ar-dz": 230,
	"./ar-dz.js": 230,
	"./ar-kw": 231,
	"./ar-kw.js": 231,
	"./ar-ly": 232,
	"./ar-ly.js": 232,
	"./ar-ma": 233,
	"./ar-ma.js": 233,
	"./ar-sa": 234,
	"./ar-sa.js": 234,
	"./ar-tn": 235,
	"./ar-tn.js": 235,
	"./ar.js": 229,
	"./az": 236,
	"./az.js": 236,
	"./be": 237,
	"./be.js": 237,
	"./bg": 238,
	"./bg.js": 238,
	"./bm": 239,
	"./bm.js": 239,
	"./bn": 240,
	"./bn.js": 240,
	"./bo": 241,
	"./bo.js": 241,
	"./br": 242,
	"./br.js": 242,
	"./bs": 243,
	"./bs.js": 243,
	"./ca": 244,
	"./ca.js": 244,
	"./cs": 245,
	"./cs.js": 245,
	"./cv": 246,
	"./cv.js": 246,
	"./cy": 247,
	"./cy.js": 247,
	"./da": 248,
	"./da.js": 248,
	"./de": 249,
	"./de-at": 250,
	"./de-at.js": 250,
	"./de-ch": 251,
	"./de-ch.js": 251,
	"./de.js": 249,
	"./dv": 252,
	"./dv.js": 252,
	"./el": 253,
	"./el.js": 253,
	"./en-au": 254,
	"./en-au.js": 254,
	"./en-ca": 255,
	"./en-ca.js": 255,
	"./en-gb": 256,
	"./en-gb.js": 256,
	"./en-ie": 257,
	"./en-ie.js": 257,
	"./en-il": 258,
	"./en-il.js": 258,
	"./en-nz": 259,
	"./en-nz.js": 259,
	"./eo": 260,
	"./eo.js": 260,
	"./es": 261,
	"./es-do": 262,
	"./es-do.js": 262,
	"./es-us": 263,
	"./es-us.js": 263,
	"./es.js": 261,
	"./et": 264,
	"./et.js": 264,
	"./eu": 265,
	"./eu.js": 265,
	"./fa": 266,
	"./fa.js": 266,
	"./fi": 267,
	"./fi.js": 267,
	"./fo": 268,
	"./fo.js": 268,
	"./fr": 269,
	"./fr-ca": 270,
	"./fr-ca.js": 270,
	"./fr-ch": 271,
	"./fr-ch.js": 271,
	"./fr.js": 269,
	"./fy": 272,
	"./fy.js": 272,
	"./gd": 273,
	"./gd.js": 273,
	"./gl": 274,
	"./gl.js": 274,
	"./gom-latn": 275,
	"./gom-latn.js": 275,
	"./gu": 276,
	"./gu.js": 276,
	"./he": 277,
	"./he.js": 277,
	"./hi": 278,
	"./hi.js": 278,
	"./hr": 279,
	"./hr.js": 279,
	"./hu": 280,
	"./hu.js": 280,
	"./hy-am": 281,
	"./hy-am.js": 281,
	"./id": 282,
	"./id.js": 282,
	"./is": 283,
	"./is.js": 283,
	"./it": 284,
	"./it.js": 284,
	"./ja": 285,
	"./ja.js": 285,
	"./jv": 286,
	"./jv.js": 286,
	"./ka": 287,
	"./ka.js": 287,
	"./kk": 288,
	"./kk.js": 288,
	"./km": 289,
	"./km.js": 289,
	"./kn": 290,
	"./kn.js": 290,
	"./ko": 291,
	"./ko.js": 291,
	"./ky": 292,
	"./ky.js": 292,
	"./lb": 293,
	"./lb.js": 293,
	"./lo": 294,
	"./lo.js": 294,
	"./lt": 295,
	"./lt.js": 295,
	"./lv": 296,
	"./lv.js": 296,
	"./me": 297,
	"./me.js": 297,
	"./mi": 298,
	"./mi.js": 298,
	"./mk": 299,
	"./mk.js": 299,
	"./ml": 300,
	"./ml.js": 300,
	"./mn": 301,
	"./mn.js": 301,
	"./mr": 302,
	"./mr.js": 302,
	"./ms": 303,
	"./ms-my": 304,
	"./ms-my.js": 304,
	"./ms.js": 303,
	"./mt": 305,
	"./mt.js": 305,
	"./my": 306,
	"./my.js": 306,
	"./nb": 307,
	"./nb.js": 307,
	"./ne": 308,
	"./ne.js": 308,
	"./nl": 309,
	"./nl-be": 310,
	"./nl-be.js": 310,
	"./nl.js": 309,
	"./nn": 311,
	"./nn.js": 311,
	"./pa-in": 312,
	"./pa-in.js": 312,
	"./pl": 313,
	"./pl.js": 313,
	"./pt": 314,
	"./pt-br": 315,
	"./pt-br.js": 315,
	"./pt.js": 314,
	"./ro": 316,
	"./ro.js": 316,
	"./ru": 317,
	"./ru.js": 317,
	"./sd": 318,
	"./sd.js": 318,
	"./se": 319,
	"./se.js": 319,
	"./si": 320,
	"./si.js": 320,
	"./sk": 321,
	"./sk.js": 321,
	"./sl": 322,
	"./sl.js": 322,
	"./sq": 323,
	"./sq.js": 323,
	"./sr": 324,
	"./sr-cyrl": 325,
	"./sr-cyrl.js": 325,
	"./sr.js": 324,
	"./ss": 326,
	"./ss.js": 326,
	"./sv": 327,
	"./sv.js": 327,
	"./sw": 328,
	"./sw.js": 328,
	"./ta": 329,
	"./ta.js": 329,
	"./te": 330,
	"./te.js": 330,
	"./tet": 331,
	"./tet.js": 331,
	"./tg": 332,
	"./tg.js": 332,
	"./th": 333,
	"./th.js": 333,
	"./tl-ph": 334,
	"./tl-ph.js": 334,
	"./tlh": 335,
	"./tlh.js": 335,
	"./tr": 336,
	"./tr.js": 336,
	"./tzl": 337,
	"./tzl.js": 337,
	"./tzm": 338,
	"./tzm-latn": 339,
	"./tzm-latn.js": 339,
	"./tzm.js": 338,
	"./ug-cn": 340,
	"./ug-cn.js": 340,
	"./uk": 341,
	"./uk.js": 341,
	"./ur": 342,
	"./ur.js": 342,
	"./uz": 343,
	"./uz-latn": 344,
	"./uz-latn.js": 344,
	"./uz.js": 343,
	"./vi": 345,
	"./vi.js": 345,
	"./x-pseudo": 346,
	"./x-pseudo.js": 346,
	"./yo": 347,
	"./yo.js": 347,
	"./zh-cn": 348,
	"./zh-cn.js": 348,
	"./zh-hk": 349,
	"./zh-hk.js": 349,
	"./zh-tw": 350,
	"./zh-tw.js": 350
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
webpackContext.id = 534;

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__more_more__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__header_header__ = __webpack_require__(641);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pdfviewer_pdfviewer__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_pdf_viewer__ = __webpack_require__(385);
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

/***/ 584:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 586:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 607:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 608:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 609:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 641:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__more_more__ = __webpack_require__(398);
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
            selector: 'Corvi-header',template:/*ion-inline-start:"/Users/himeshpatel/Documents/kaleLogistics/Corvi/src/components/header/header.html"*/'<ion-header>\n  <ion-navbar color="primary">\n\n    <ion-title id="Dashboard" center text-center>\n      {{title}}\n    </ion-title>\n\n    <ion-buttons end>\n      <!-- <button ion-button icon-only (click)="presentOptions($event)">\n        <ion-icon name="more"></ion-icon>\n      </button> -->\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n'/*ion-inline-end:"/Users/himeshpatel/Documents/kaleLogistics/Corvi/src/components/header/header.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* PopoverController */]])
    ], HeaderComponent);
    return HeaderComponent;
}());

//# sourceMappingURL=header.js.map

/***/ }),

/***/ 642:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_http_service_http_service__ = __webpack_require__(18);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* Slides */])
    ], HomeDetailPage.prototype, "slides", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('mySlider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* Slides */])
    ], HomeDetailPage.prototype, "slider", void 0);
    HomeDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home-detail',template:/*ion-inline-start:"/Users/himeshpatel/Documents/kaleLogistics/Corvi/src/pages/_home/home-detail-page.html"*/'<ion-content>\n  <ion-card>\n    <ion-label>Total Enquiries : 10</ion-label>\n    <ion-slides autoplay="3000" pager slidesPerView="1" effect=\'coverflow\'>\n      <ion-slide *ngFor="let slide of slidesArray" class="text-center slider-item" (click)="viewDetails(slide.page)"\n        [ngStyle]="{\'background\': slide.bgColor}">\n        <div class="slide-text">\n          <h2 class="h2customClass">{{slide.title}}</h2>\n          <p text-center class="pCustomcls">{{slide.count}} </p>\n        </div>\n      </ion-slide>\n    </ion-slides>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n      Pie Chart\n    </ion-card-header>\n    <ion-card-content>\n      <canvas #pieCanvas></canvas>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n      Bar Chart\n    </ion-card-header>\n    <ion-card-content>\n      <canvas #barCanvas></canvas>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n\n'/*ion-inline-end:"/Users/himeshpatel/Documents/kaleLogistics/Corvi/src/pages/_home/home-detail-page.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* MenuController */], __WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_http_service_http_service__["a" /* HttpServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
    ], HomeDetailPage);
    return HomeDetailPage;
}());

//# sourceMappingURL=home-detail-page.js.map

/***/ }),

/***/ 643:
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

/***/ 661:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CorviApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_global__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_global_global__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__constants__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_network_network__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_push_notification_push_notification__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__ = __webpack_require__(413);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* Nav */])
    ], CorviApp.prototype, "nav", void 0);
    CorviApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/himeshpatel/Documents/kaleLogistics/Corvi/src/app/app.html"*/'<div class="{{global.state[\'theme\']}}">\n\n    <!--Side Menu with avatar(IOS)-->\n    <ion-menu side="end" [content]="content" id="menu-avatar">\n        <ion-content>\n            <div #header>\n                <ion-row style="align-items:center;justify-content: center;">\n                    <ion-col col-6 menuClose style="max-width:40% !important">\n                        <img class="user-avatar round" [src]="chosenPicture || placeholder"\n                            onerror="this.src=\'assets/img/person.png\'" />\n                    </ion-col>\n\n                </ion-row>\n                <div style="justify-content: center;" menuClose>\n                    <h3 class="name" style="text-align: center;margin-top: 0px;font-family: monospace;">\n                        Hello,{{UserName}}</h3>\n                    <!-- <p class="e-mail" style="text-align: center;color: #ffffff;">example@email.com</p> -->\n                </div>\n            </div>\n            <ion-list no-lines>\n                <button menuClose ion-item detail-none *ngFor="let p of pages" (click)="openPage(p)"\n                    [ngClass]="(p.active)?\'active-menu-item-color\':\'\'">\n                    <!-- <ion-icon [name]="p.icon" item-left [ngClass]="(p.icon == \'close\')?\'font-bold\':\'\'"></ion-icon> -->\n                    {{p.title}}\n                </button>\n            </ion-list>\n        </ion-content>\n    </ion-menu>\n\n\n    <!--Material Design Menu(Android)-->\n    <div class="abc">\n        <ion-icon name="close"></ion-icon>\n    </div>\n    <ion-menu side="end" [content]="content" id="menu-material">\n        <ion-content>\n            <div class="menu-header">\n                <!--material-design-background-->\n                <img menuClose class="user-avatar round" [src]="chosenPicture || placeholder"\n                    onerror="this.src=\'assets/img/person.png\'" />\n                <p menuClose class="name" style="color: #626262;font-weight: bold;font-family: sans-serif;">\n                    Hello,{{UserName}}\n                </p>\n                <!-- <p menuClose class="e-mail">example@email.com</p> -->\n            </div>\n            <ion-list no-lines>\n                <button menuClose ion-item detail-none *ngFor="let p of pages" (click)="openPage(p)"\n                    [ngClass]="(p.active)?\'active-menu-item-color\':\'\'">\n                    <!-- <ion-icon [name]="p.icon" item-left></ion-icon> -->\n                    {{p.title}}\n                </button>\n            </ion-list>\n        </ion-content>\n\n        <ion-footer>\n            <ion-toolbar id="toolbar">\n                <button menuClose="left" ion-item (click)="Logout()">\n                    <ion-icon name="power" item-left></ion-icon>\n                    <ion-grid>\n                        <ion-row>\n                            <ion-col>\n                                Logout\n                            </ion-col>\n                            <ion-col text-end style="font-size: 1.2rem;top: 2px;">\n                                {{appVersion}}\n                            </ion-col>\n                        </ion-row>\n                    </ion-grid>\n                </button>\n            </ion-toolbar>\n        </ion-footer>\n    </ion-menu>\n    <!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n    <ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n</div>'/*ion-inline-end:"/Users/himeshpatel/Documents/kaleLogistics/Corvi/src/app/app.html"*/
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
            __WEBPACK_IMPORTED_MODULE_10__providers_push_notification_push_notification__["a" /* PushNotificationProvider */]])
    ], CorviApp);
    return CorviApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 662:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_util_toast_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_util_alert_service__ = __webpack_require__(23);
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

/***/ 663:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register__ = __webpack_require__(352);
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

/***/ 664:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseURLProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global_global__ = __webpack_require__(9);
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

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PushNotificationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_onesignal__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_global__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__http_service_http_service__ = __webpack_require__(18);
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

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_opener__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_pdfviewer_pdfviewer__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_native_storage__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_crypto_js__ = __webpack_require__(617);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_crypto_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_crypto_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_spinner_dialog__ = __webpack_require__(131);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* Platform */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_opener__["a" /* FileOpener */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_11__ionic_native_spinner_dialog__["a" /* SpinnerDialog */]])
    ], GlobalProvider);
    return GlobalProvider;
}());

//# sourceMappingURL=global.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export findVendorList */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindSalesActivityPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_global__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_http_service_http_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_util_alert_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_util_toast_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__new_sales_activity_new_sales_activity__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__new_sales_lead_new_sales_lead__ = __webpack_require__(95);
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
        this.title = "Find Sales Activity";
        this.appBuildConfig = this.globalService.appBuildConfig;
        //  this.branchCode = localStorage.getItem('branchCode');
        this.UserDetails = this.globalService.get('userDetails');
        this.fetchedData = this.navParams.get('searchDetails');
        this.BranchTbl = this.UserDetails[Object.keys(this.UserDetails)[1]]["Table4"];
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
        // this.onItemChange();
    };
    FindSalesActivityPage.prototype.dismissModal = function () {
        var data = { 'foo': 'bar' };
        this.viewCtrl.dismiss(data);
    };
    FindSalesActivityPage.prototype.searchVenderList = function () {
        var _this = this;
        if (this.branchCode == undefined) {
            this.toastService.show('Please select branch.', 3000, true, 'top', 'toast-container');
            //this.startDate.focus();
            return;
        }
        this.findList.BranchCode = this.branchCode;
        this.findList.VendorType = this.VenType;
        this.findList.VendorCode = this.VendorCode;
        this.findList.VendorName = this.VendorName;
        this.http.POST(__WEBPACK_IMPORTED_MODULE_3__constants__["a" /* Constants */].Corvi_Services.GetVendorMasterList, this.findList).then(function (response) {
            console.log('response to check login method: ', response);
            if (response['Table'] == '') {
                _this.toastService.show('Data not found.', 3000, true, 'top', 'toast-container');
                return;
            }
            else {
                _this.customerInfo = response['Table'];
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
        debugger;
        if (this.fromSaleLeadVal == '1') {
            this.globalService.valueForLeadCutomer = custArray;
            this.viewCtrl.dismiss();
            this.globalService.setRootPage(__WEBPACK_IMPORTED_MODULE_10__new_sales_lead_new_sales_lead__["a" /* NewSalesLeadPage */]);
        }
        else {
            localStorage.setItem('branchCode', this.branchCode);
            this.globalService.store('customerData', custArray);
            this.viewCtrl.dismiss();
            this.globalService.setRootPage(__WEBPACK_IMPORTED_MODULE_9__new_sales_activity_new_sales_activity__["a" /* NewSalesActivityPage */]);
        }
        // this.navCtrl.remove(this.navCtrl.getActive().index - 0, 1,);
    };
    FindSalesActivityPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-find-sales-activity',template:/*ion-inline-start:"/Users/himeshpatel/Documents/kaleLogistics/Corvi/src/pages/find-sales-activity/find-sales-activity.html"*/'<!--\n  Generated template for the NewSalesActivityPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n\n    <ion-title id="Dashboard" center text-center>\n      {{title}}\n      <ion-icon name=\'close-circle\' (click)=\'dismissModal()\' style=\'float: right;\'></ion-icon>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title center> {{title}}</ion-title>\n    <ion-icon name=\'close-circle\' (click)=\'dismissModal()\' style=\'float: right;\'></ion-icon>\n  </ion-toolbar>\n</ion-header> -->\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-row padding class="">\n      <ion-col col-6>\n        <input [(ngModel)]="VenType" type="radio" class="stv-radio-button" name="Customer" value="Customer"\n          id="Customer" />\n        <label for="Customer">Customer</label>\n      </ion-col>\n      <ion-col col-6>\n        <input [(ngModel)]="VenType" type="radio" class="stv-radio-button" name="Customer" value="Lead-Customer"\n          id="LeadCustomer" checked />\n        <label for="LeadCustomer">Lead-Customer</label>\n      </ion-col>\n    </ion-row>\n\n    <ion-row padding class="ShadowBox13">\n\n      <ion-col col-12>\n        <label>\n          Branch\n        </label>\n        <font color="red" class="margin12">*</font>\n      </ion-col>\n      <ion-col col-12>\n\n        <select id="ddlBrach" name="ddlBrach" [(ngModel)]="branchCode" col-12 placeholder="">\n          <option [value]="0" disabled selected>Select</option>\n          <option *ngFor="let brData of BranchTbl" [value]="brData.BranchCode">{{brData.branch}}</option>\n        </select>\n      </ion-col>\n      <ion-col col-12>\n        <label>\n          Lead-Customer/Customer Name\n        </label>\n      </ion-col>\n      <ion-col col-12>\n\n        <input type="text" [(ngModel)]="VendorName" col-12 placeholder="">\n      </ion-col>\n      <h4><span>OR</span></h4>\n\n      <ion-col col-12>\n        <label>\n          Lead-Customer/Customer Code\n        </label>\n      </ion-col>\n      <ion-col col-12>\n\n        <input type="text" [(ngModel)]="VendorCode" col-12 placeholder="">\n      </ion-col>\n\n    </ion-row>\n\n\n    <ion-row padding>\n      <ion-col col-6>\n        <button ion-button round outline class=" btncancel" (click)="dismissModal();">\n          <ion-icon></ion-icon>\n          Cancel\n        </button>\n      </ion-col>\n\n      <ion-col col-6>\n        <button type="button" ion-button icon-start block class="btnRadius" (click)=\'searchVenderList();\'>\n          <ion-icon></ion-icon>\n          Search\n        </button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row padding class="ShadowBox13">\n      <ion-col col-12>\n        <table>\n          <tr *ngFor="let item of customerInfo; let i = index">\n            <td>\n              <label>\n                {{item.BranchName}}\n              </label>\n            </td>\n            <td><a href="#" (click)="passDataToNSA(item);">Select</a></td>\n            <!-- <td> <input [(ngModel)]="item.Address1" type="hidden" /> </td>\n            <td> <input [(ngModel)]="item.Address2" type="hidden" /> </td>\n            <td> <input [(ngModel)]="item.Address3" type="hidden" /> </td>\n            <td> <input [(ngModel)]="item.BranchName" type="hidden" /> </td>\n            <td> <input [(ngModel)]="item.GSTCategory" type="hidden" /> </td>\n            <td> <input [(ngModel)]="item.GSTRegistrationStatus" type="hidden" /> </td>\n            <td> <input [(ngModel)]="item.LocationCode" type="hidden" /> </td>\n            <td> <input [(ngModel)]="item.LocationID" type="hidden" /> </td>\n            <td> <input [(ngModel)]="item.LocationName" type="hidden" /> </td>\n            <td> <input [(ngModel)]="item.Pincode" type="hidden" /> </td>\n            <td> <input [(ngModel)]="item.VendorCode" type="hidden" /> </td>\n            <td> <input [(ngModel)]="item.VendorId" type="hidden" /> </td>\n            <td> <input [(ngModel)]="item.VendorName" type="hidden" /> </td>\n            <td> <input [(ngModel)]="item.VendorType" type="hidden" /> </td> -->\n            <!-- Address1: "Ideal Plaza"\n            Address2: "Sarat Bose Road"\n            Address3: ""\n            BranchName: "BALMER LAWRIE & CO. LTD - Kolkata"\n            GSTCategory: null\n            GSTIN: null\n            GSTRegistrationStatus: null\n            LocationCode: "IN CCU"\n            LocationID: 117603\n            LocationName: "KOLKATA"\n            Pincode: ""\n            SecretKey: null\n            StateName: null\n            VendorCode: "CCU/CUS/06586"\n            VendorId: 13929\n            VendorName: "OOCL"\n            VendorType: "Lead-Customer" -->\n          </tr>\n          <!-- <tr>\n            <td>\n              <label>\n                Babuline Pharma Pvt. Ltd.\n                Mumbai\n              </label>\n            </td>\n\n            <td><a href="#">Select</a></td>\n          </tr>\n          <tr>\n            <td>\n              <label>\n                BEC Chemicals Pvt. Ltd.\n                Mumbai\n              </label>\n            </td>\n\n            <td><a href="#">Select</a></td>\n          </tr>\n          <tr>\n            <td>\n              <label>\n                Cristopia Energy Systems (I) Pvt. Ltd.\n                Mumbai\n              </label>\n            </td>\n\n            <td><a href="#">Select</a></td>\n          </tr> -->\n        </table>\n      </ion-col>\n\n\n\n    </ion-row>\n\n\n\n  </ion-list>\n</ion-content>\n<ion-footer class="ion-footer">\n\n  <div class="label-white toolbar-background-md" center text-center>\n    © Kale Logistics Solutions Private Limited. {{appBuildConfig.fullYear}} Version {{appBuildConfig.version}}\n  </div>\n</ion-footer>\n'/*ion-inline-end:"/Users/himeshpatel/Documents/kaleLogistics/Corvi/src/pages/find-sales-activity/find-sales-activity.html"*/,
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

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export saveLeadCustomer */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewSalesLeadPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_global__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_http_service_http_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_util_alert_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_util_toast_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__find_location_find_location__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__find_sales_activity_find_sales_activity__ = __webpack_require__(94);
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
    function NewSalesLeadPage(navCtrl, navParams, globalService, modalCtrl, viewCtrl, nav, menu, toastCtrl, http, alertService, toastService, 
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
        this.UserDetails = [];
        this.BranchTbl = [];
        this.branchCode = '0';
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
        // debugger
        this.title = "New Sales Lead";
        this.appBuildConfig = this.globalService.appBuildConfig;
        this.UserDetails = this.globalService.get('userDetails');
        this.BranchTbl = this.UserDetails[Object.keys(this.UserDetails)[1]]["Table4"];
        this.ActivityTbl = this.UserDetails[Object.keys(this.UserDetails)[1]]["Table3"];
        this.userid = localStorage.getItem('userId');
        this.filterActivityStatus = this.ActivityTbl.filter(function (t) { return t.Identifier == 'SalesLeadStatus'; });
        this.filterTypesOFIndus = this.ActivityTbl.filter(function (t) { return t.Identifier == 'TypeOfIndustry'; });
        this.filterTypeOFCustomer = this.ActivityTbl.filter(function (t) { return t.Identifier == 'TypeOfIndustry'; });
        this.saveCustomer = new saveLeadCustomer();
        if (this.globalService.selectedCity != undefined) {
            this.location = this.globalService.selectedCity.Locationtext;
            this.LocationCode = this.globalService.selectedCity.LocationCode;
            this.Locationid = this.globalService.selectedCity.Locationid;
        }
        if (this.globalService.valueForLeadCutomer != undefined) {
            this.companyName = this.globalService.valueForLeadCutomer.BranchName;
            this.customerType = this.globalService.valueForLeadCutomer.VendorType;
            this.vendorname = this.companyName;
        }
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
    NewSalesLeadPage.prototype.openModal = function () {
        // if (this.branchCode == '0') {
        //   this.toastService.show('Please select branch.', 3000, true, 'top', 'toast-container')
        //   return;
        // }
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_9__find_location_find_location__["a" /* FindLocationPage */], { searchDetails: '1' });
        profileModal.onDidDismiss(function (data) {
            console.log(data);
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
        if (this.location == '') {
            this.toastService.show('Please search location.', 3000, true, 'top', 'toast-container');
            return;
        }
        if (this.addressline1 == '') {
            this.toastService.show('Please enter at least one address.', 3000, true, 'top', 'toast-container');
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
        this.saveCustomer.VendorId = '0';
        this.saveCustomer.VendorName = this.vendorname;
        this.saveCustomer.VendorType = this.vendortype;
        this.saveCustomer.AddressLine1 = this.addressline1;
        this.saveCustomer.AddressLine2 = this.addressline2;
        this.saveCustomer.AddressLine3 = this.addressline3;
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
        this.saveCustomer.ClientDate = '2021-05-28 13:10:44.060';
        this.saveCustomer.BranchCode = this.branchCode;
        this.http.POST(__WEBPACK_IMPORTED_MODULE_3__constants__["a" /* Constants */].Corvi_Services.VendorMasterSaveForHHT, this.saveCustomer).then(function (response) {
            console.log('response to check login method: ', response);
            debugger;
            if (response != '') {
                // localStorage.removeItem('login_resp');
                // localStorage.removeItem('userDetails');
                _this.toastService.show(response, 3000, true, 'top', 'toast-success');
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
    NewSalesLeadPage.prototype.openModalFoSearchCompany = function () {
        if (this.branchCode == '0') {
            this.toastService.show('Please select branch.', 3000, true, 'top', 'toast-container');
            return;
        }
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_10__find_sales_activity_find_sales_activity__["a" /* FindSalesActivityPage */], { fromSaleLeadVal: '1' });
        profileModal.onDidDismiss(function (data) {
            console.log(data);
            // this.madalDismissData = JSON.stringify(data);
        });
        profileModal.present();
        this.globalService.store('branchCode', this.branchCode);
    };
    NewSalesLeadPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-new-sales-lead',template:/*ion-inline-start:"/Users/himeshpatel/Documents/kaleLogistics/Corvi/src/pages/new-sales-lead/new-sales-lead.html"*/'<!--\n  Generated template for the NewSalesActivityPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-buttons left>\n      <button ion-button icon-only (click)="backToDashboard();">\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <button right ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title id="Dashboard" center text-center>\n      {{title}}\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-row padding class="ShadowBox13">\n      <ion-col col-12>\n        <label>\n          Branch\n        </label>\n        <font color="red" class="margin12">*</font>\n      </ion-col>\n      <ion-col col-12>\n        <select id="ddlBrach" name="ddlBrach" [(ngModel)]="branchCode" (change)="getSelectedOptionText()" col-12\n          placeholder="">\n          <option [value]="0" disabled selected>Select</option>\n          <option *ngFor="let brData of BranchTbl" [value]="brData.BranchCode">{{brData.branch}}</option>\n\n        </select>\n      </ion-col>\n      <ion-col col-12>\n        <label>\n          Company Name\n        </label>\n        <font color="red" class="margin12">*</font>\n      </ion-col>\n      <ion-col col-10>\n        <input maxlength="50" type="text" [(ngModel)]="vendorname" col-12 placeholder="">\n      </ion-col>\n      <ion-col col-2>\n        <button ion-fab class="ion-fab34" (click)="openModalFoSearchCompany();">\n          <ion-icon name="md-search" class=""></ion-icon>\n        </button>\n      </ion-col>\n\n      <ion-col col-12>\n        <label>\n          Status\n        </label>\n        <font color="red" class="margin12">*</font>\n      </ion-col>\n      <ion-col col-12>\n        <select col-12 placeholder="" [(ngModel)]="status">\n          <option [value]="5" disabled selected>Yet to start</option>\n          <option *ngFor="let acData of filterActivityStatus" [value]="1">{{acData.Description}}</option>\n\n        </select>\n      </ion-col>\n\n      <ion-col col-12>\n        <label>\n          Type of Industry\n        </label>\n        <font color="red" class="margin12">*</font>\n      </ion-col>\n      <ion-col col-12>\n        <select col-12 placeholder="" [(ngModel)]="typeOfIndus">\n          <option [value]="5" disabled selected>Yet to start</option>\n          <option *ngFor="let acData of filterTypesOFIndus" [value]="1">{{acData.Description}}</option>\n\n        </select>\n      </ion-col>\n\n      <ion-col col-12>\n        <label>\n          Type of Customer\n        </label>\n        <font color="red" class="margin12">*</font>\n      </ion-col>\n      <ion-col col-12>\n        <select col-12 placeholder="" [(ngModel)]="typeOfCust">\n          <option [value]="5" disabled selected>Yet to start</option>\n          <option *ngFor="let acData of filterTypeOFCustomer" [value]="1">{{acData.Description}}</option>\n\n        </select>\n      </ion-col>\n\n\n      <ion-col col-12>\n        <label>\n          Location\n        </label>\n        <font color="red" class="margin12">*</font>\n      </ion-col>\n      <ion-col col-10>\n        <input disabled maxlength="100" type="text" [(ngModel)]="location" col-12 placeholder="">\n      </ion-col>\n      <ion-col col-2>\n        <button ion-fab class="ion-fab34" (click)="openModal();">\n          <ion-icon name="md-search" class=""></ion-icon>\n        </button>\n      </ion-col>\n\n\n      <ion-col col-12>\n        <label>\n          Address\n        </label>\n        <font color="red" class="margin12">*</font>\n      </ion-col>\n      <ion-col col-12>\n        <input maxlength="50" type="text" [(ngModel)]="addressline1" col-12 placeholder="">\n      </ion-col>\n      <ion-col col-12>\n        <input maxlength="50" type="text" [(ngModel)]="addressline2" col-12 placeholder="">\n      </ion-col>\n      <ion-col col-12>\n        <input maxlength="50" type="text" [(ngModel)]="addressline3" col-12 placeholder="">\n      </ion-col>\n\n\n      <ion-col col-12>\n        <label>\n          Pin Code\n        </label>\n      </ion-col>\n      <ion-col col-12>\n        <input maxlength="9" type="text" [(ngModel)]="pincode" col-12 placeholder="">\n      </ion-col>\n\n\n      <ion-col col-12>\n        <h4>\n          Contact Person\n        </h4>\n      </ion-col>\n\n      <ion-col col-6>\n        <label>\n          First Name\n        </label>\n\n      </ion-col>\n      <ion-col col-6>\n        <label>\n          Last Name\n        </label>\n      </ion-col>\n      <ion-col col-6>\n        <input maxlength="50" type="text" [(ngModel)]="firstname" col-12 placeholder="">\n      </ion-col>\n      <ion-col col-6>\n        <input maxlength="50" type="text" [(ngModel)]="lastname" col-12 placeholder="">\n      </ion-col>\n\n\n      <ion-col col-12>\n        <label>\n          Designation\n        </label>\n      </ion-col>\n      <ion-col col-12>\n        <input maxlength="50" type="text" [(ngModel)]="designation" col-12 placeholder="">\n      </ion-col>\n\n      <ion-col col-12>\n        <label>\n          Mobile No.\n        </label>\n      </ion-col>\n      <ion-col col-2>\n        <select col-12 placeholder="Select One">\n          <option disabled value="f">IN</option>\n        </select>\n      </ion-col>\n      <ion-col col-10>\n        <input maxlength="50" type="text" [(ngModel)]="mobileno" col-12 placeholder="">\n      </ion-col>\n\n\n      <ion-col col-12>\n        <label>\n          Email Id\n        </label>\n      </ion-col>\n      <ion-col col-12>\n        <input maxlength="100" type="email" [(ngModel)]="contactemail" col-12 placeholder=""\n          pattern="[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})">\n      </ion-col>\n\n\n    </ion-row>\n\n\n  </ion-list>\n</ion-content>\n<ion-footer class="ion-footer">\n  <ion-row padding class="ShadowBox13">\n    <ion-col col-12>\n      <span style="color: red;">(*) Marks field are mandatory to fill up</span>\n    </ion-col>\n    <ion-col col-6>\n      <button ion-button block class="btnRadius btncancel" (click)="backToDashboard();">\n        <ion-icon></ion-icon>\n        Cancel\n      </button>\n    </ion-col>\n\n    <ion-col col-6>\n      <button ion-button icon-start block class="btnRadius " (click)="VendorMasterSaveHHT();">\n        <ion-icon></ion-icon>\n        Save\n      </button>\n    </ion-col>\n  </ion-row>\n  <div class="label-white toolbar-background-md" center text-center>\n    © Kale Logistics Solutions Private Limited. {{appBuildConfig.fullYear}} Version {{appBuildConfig.version}}\n  </div>\n</ion-footer>\n'/*ion-inline-end:"/Users/himeshpatel/Documents/kaleLogistics/Corvi/src/pages/new-sales-lead/new-sales-lead.html"*/,
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
    ], NewSalesLeadPage);
    return NewSalesLeadPage;
}());

//# sourceMappingURL=new-sales-lead.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__moment_moment__ = __webpack_require__(643);
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

},[462]);
//# sourceMappingURL=main.js.map