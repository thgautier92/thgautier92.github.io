(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<h1>{{ title }}</h1>\n<div class=\"container-fluid\" *ngIf=\"!ocrRunning\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <h2>1. Choisir une image</h2>\n\n      <ngb-tabset (tabChange)=\"tabChange($event)\">\n        <ngb-tab id=\"tabUrl\" title=\"Adresse d'une image\">\n          <ng-template ngbTabContent>\n            <form>\n              <div class=\"form-group\">\n                <label for=\"selectUrl\"></label>\n                <select class=\"form-control\" id=\"selectUrl\" [(ngModel)]=\"imgPath\" name=\"imgPath\">\n                  <option *ngFor=\"let img of ocrExamples\">{{img}}</option>\n                </select>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"name\">Image sélectionnée</label>\n                <input type=\"text\" class=\"form-control\" id=\"imgPath\" required [(ngModel)]=\"imgPath\" name=\"imgPath\">\n                <small id=\"emailHelp\" class=\"form-text text-muted\">Veuillez indiquer une URL d'image contenant du\n                  text</small>\n              </div>\n            </form>\n          </ng-template>\n        </ngb-tab>\n        <ngb-tab id=\"tabCapture\">\n          <ng-template ngbTabTitle><b>Capture</b> d'image</ng-template>\n          <ng-template ngbTabContent>\n            <webcam [height]=\"500\" [width]=\"500\" [trigger]=\"triggerObservable\" (imageCapture)=\"handleImage($event)\"\n              *ngIf=\"showWebcam\" [allowCameraSwitch]=\"allowCameraSwitch\" [switchCamera]=\"nextWebcamObservable\"\n              captureImageData=\"true\" [videoOptions]=\"videoOptions\" [imageQuality]=\"1\"\n              (cameraSwitched)=\"cameraWasSwitched($event)\" (initError)=\"handleInitError($event)\">\n            </webcam>\n            <div class=\"btn-toolbar\" role=\"toolbar\" aria-label=\"Toolbar with button groups\">\n              <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"First group\">\n                <button class=\"btn btn-outline-primary\" (click)=\"triggerSnapshot();\">Prendre la photo</button>\n                <button class=\"btn btn-outline-primary\" (click)=\"toggleWebcam();\">Activer Webcam</button>\n              </div>\n              <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"First grup\">\n                <button class=\"btn btn-outline-primary\" (click)=\"showNextWebcam(true);\"\n                  [disabled]=\"!multipleWebcamsAvailable\">Next\n                  Webcam</button>\n                <input id=\"cameraSwitchCheckbox\" type=\"checkbox\" [(ngModel)]=\"allowCameraSwitch\"><label\n                  for=\"cameraSwitchCheckbox\">Allow Camera Switch</label>\n              </div>\n              <div class=\"input-group mr-2\" role=\"group\" aria-label=\"First grup\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\" id=\"btnGroupAddon\">DeviceId</div>\n                </div>\n                <input id=\"deviceId\" type=\"text\" [(ngModel)]=\"deviceId\" name=\"deviceId\" style=\"width: 500px\">\n                <button class=\"btn btn-outline-primary\" (click)=\"showNextWebcam(deviceId);\">Activate</button>\n              </div>\n            </div>\n          </ng-template>\n        </ngb-tab>\n\n      </ngb-tabset>\n\n      <button type=\"submit\" class=\"btn btn-success\" (click)=\"startOcr()\">2. Reconnaitre</button>\n\n    </div>\n    <div class=\"col\">\n      <div *ngIf=\"currentTab==='tabUrl'\">\n        <img [src]=\"imgPath\" width=\"100%\" />\n      </div>\n      <div *ngIf=\"currentTab==='tabCapture'\">\n        <div class=\"snapshot\" *ngIf=\"webcamImage\">\n          <h2>Nice one!</h2>\n          <img [src]=\"webcamImage.imageAsDataUrl\" width=\"100%\" />\n        </div>\n        <h4 *ngIf=\"errors.length > 0\">Messages:</h4>\n        <ul *ngFor=\"let error of errors\">\n          <li>{{error | json}}</li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"container-fluid\" *ngIf=\"ocrRunning\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <img [src]=\"imgUrl\" width=\"100%\" />\n    </div>\n    <div class=\"col\">\n      <p>{{ocrProgress.status}}</p>\n      <div class=\"progress\" *ngIf=\"ocrProgress.status!=''\">\n        <div class=\"progress-bar\" role=\"progressbar\" [attr.aria-valuenow]=\"ocrProgress.progress\"\n          [ngStyle]=\"{width: ocrProgress.progress + '%'}\" aria-valuemin=\"0\" aria-valuemax=\"100\">{{ocrProgress.progress}}\n        </div>\n      </div>\n      <h2>Resultats: </h2>\n      <p>\n        {{ ocrResult }}\n      </p>\n      <button class=\"btn btn-outline-primary\" (click)=\"ocrRunning=!ocrRunning;\">Recommencer</button>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: Progress, AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Progress", function() { return Progress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ngx_webcam__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-webcam */ "./node_modules/ngx-webcam/fesm5/ngx-webcam.js");
/* harmony import */ var tesseract_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tesseract.js */ "./node_modules/tesseract.js/src/index.js");
/* harmony import */ var tesseract_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tesseract_js__WEBPACK_IMPORTED_MODULE_4__);





var Progress = /** @class */ (function () {
    function Progress() {
    }
    return Progress;
}());

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Reconnaissance de caractères';
        this.imgPath = 'https://tesseract.projectnaptha.com/img/eng_bw.png';
        this.imgUrl = '';
        this.currentTab = "tabUrl";
        this.ocrResult = '';
        this.ocrRunning = false;
        this.ocrProgress = { status: '', progress: 0 };
        this.ocrExamples = [
            'https://tesseract.projectnaptha.com/img/eng_bw.png',
            'https://thgautier92.github.io/CNI-TG.png',
            'https://courses.cs.vt.edu/csonline/AI/Lessons/VisualProcessing/OCRscans_files/robertson.jpg',
            'http://faculty.chemeketa.edu/ascholer/cs160/VTCS0/AI/Lessons/VisualProcessing/OCRscans_files/barmudas.jpg',
            // tslint:disable-next-line:max-line-length
            'https://image.slidesharecdn.com/objectdetectioncompteurdobjet-111129232726-phpapp02/95/object-detection-compteur-dobjet-1-728.jpg?cb=1322609890'
        ];
        this.showWebcam = false; // toggle webcam on/off
        this.allowCameraSwitch = true;
        this.multipleWebcamsAvailable = false;
        this.videoOptions = {
        // width: {ideal: 1024},
        // height: {ideal: 576}
        };
        this.errors = [];
        this.webcamImage = null; // latest snapshot
        this.trigger = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"](); // webcam snapshot trigger
        // switch to next / previous / specific webcam; true/false: forward/backwards, string: deviceId
        this.nextWebcam = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        ngx_webcam__WEBPACK_IMPORTED_MODULE_3__["WebcamUtil"].getAvailableVideoInputs()
            .then(function (mediaDevices) {
            _this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
        });
    };
    AppComponent.prototype.triggerSnapshot = function () {
        this.trigger.next();
    };
    AppComponent.prototype.toggleWebcam = function () {
        this.showWebcam = !this.showWebcam;
    };
    AppComponent.prototype.handleInitError = function (error) {
        this.errors.push(error);
    };
    AppComponent.prototype.showNextWebcam = function (directionOrDeviceId) {
        // true => move forward through devices
        // false => move backwards through devices
        // string => move to device with given deviceId
        this.nextWebcam.next(directionOrDeviceId);
    };
    AppComponent.prototype.handleImage = function (webcamImage) {
        console.log('received webcam image', webcamImage);
        this.webcamImage = webcamImage;
    };
    AppComponent.prototype.cameraWasSwitched = function (deviceId) {
        console.log('active device: ' + deviceId);
        this.deviceId = deviceId;
    };
    Object.defineProperty(AppComponent.prototype, "triggerObservable", {
        get: function () {
            return this.trigger.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "nextWebcamObservable", {
        get: function () {
            return this.nextWebcam.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.tabChange = function (event) {
        console.log(event);
        this.currentTab = event.nextId;
    };
    AppComponent.prototype.startOcr = function () {
        var _this = this;
        this.ocrRunning = true;
        this.ocrResult = 'Recognizing...';
        var worker = new tesseract_js__WEBPACK_IMPORTED_MODULE_4__["TesseractWorker"]();
        if (this.currentTab === 'tabUrl') {
            this.imgUrl = this.imgPath;
        }
        if (this.currentTab === 'tabCapture') {
            this.imgUrl = this.webcamImage.imageAsDataUrl;
        }
        worker
            .recognize(this.imgUrl)
            .progress(function (p) {
            // console.log('progress', p);
            _this.ocrProgress.status = p.status;
            _this.ocrProgress.progress = p.progress * 100;
        })
            .then(function (_a) {
            var text = _a.text;
            _this.ocrResult = text;
            worker.terminate();
            _this.ocrProgress.status = '';
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_webcam__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-webcam */ "./node_modules/ngx-webcam/fesm5/ngx-webcam.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                ngx_webcam__WEBPACK_IMPORTED_MODULE_5__["WebcamModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\A13246\Documents\DEV\DEV-SMA\DIA-LABS\tests\tesseract.js-angular-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map