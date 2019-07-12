(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");




var routes = [
    { path: '', component: _search_search_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'search-engine-front';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_image_handler_image_handler_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/image-handler/image-handler.component */ "./src/app/components/image-handler/image-handler.component.ts");
/* harmony import */ var _services_app_settings_service_provider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/app-settings.service.provider */ "./src/app/services/app-settings.service.provider.ts");
/* harmony import */ var _components_image_item_card_image_item_card_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/image-item-card/image-item-card.component */ "./src/app/components/image-item-card/image-item-card.component.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_6__["SearchComponent"],
                _components_image_handler_image_handler_component__WEBPACK_IMPORTED_MODULE_10__["ImageHandlerComponent"],
                _components_image_item_card_image_item_card_component__WEBPACK_IMPORTED_MODULE_12__["ImageItemCardComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
            ],
            providers: [_services_app_settings_service_provider__WEBPACK_IMPORTED_MODULE_11__["AppSettingsServiceProvider"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/image-handler/image-handler.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/image-handler/image-handler.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"image-wrapper\">\r\n  <i *ngIf=\"!imageVisible\"></i>\r\n  <mat-icon *ngIf=\"!imageVisible\">image</mat-icon>\r\n  <img [hidden]=\"!imageVisible\" [src]=\"imageUrl\" alt=\"\" (load)=\"showImage()\">\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/image-handler/image-handler.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/image-handler/image-handler.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".image-wrapper {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  width: 100%;\n  height: 250px;\n  position: relative;\n  background-color: #e5e5e5;\n  border-radius: 2px 2px 0 0; }\n  .image-wrapper mat-icon {\n    font-size: 130px;\n    width: auto;\n    height: auto;\n    display: block;\n    color: #FFFFFF;\n    padding: 0 50px; }\n  .image-wrapper img {\n    height: 250px;\n    width: auto;\n    border-radius: 2px 2px 0 0; }\n  .image-wrapper i {\n    /*   positioning */\n    position: absolute;\n    opacity: 0;\n    top: 0;\n    left: 0;\n    /*   gradient   */\n    background: -webkit-gradient(linear, left top, right top, from(rgba(255, 255, 255, 0)), color-stop(1%, rgba(255, 255, 255, 0.1)), color-stop(30%, rgba(255, 255, 255, 0.7)), color-stop(50%, rgba(255, 255, 255, 0.95)), color-stop(70%, rgba(255, 255, 255, 0.95)), color-stop(71%, rgba(255, 255, 255, 0.95)), to(rgba(255, 255, 255, 0)));\n    background: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.1) 1%, rgba(255, 255, 255, 0.7) 30%, rgba(255, 255, 255, 0.95) 50%, rgba(255, 255, 255, 0.95) 70%, rgba(255, 255, 255, 0.95) 71%, rgba(255, 255, 255, 0) 100%);\n    /* W3C */\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#00ffffff',GradientType=1 );\n    /* IE6-9 */\n    /*  forming the shine element\r\n        play around with the width, skew and gradient to get different effects\r\n      */\n    width: 15%;\n    height: 100%;\n    -webkit-transform: skew(-10deg, 0deg);\n            transform: skew(-10deg, 0deg);\n    /*  animating it  */\n    -webkit-animation: shine 2s;\n            animation: shine 2s;\n    -webkit-animation-iteration-count: infinite;\n            animation-iteration-count: infinite;\n    -webkit-animation-delay: 1s;\n            animation-delay: 1s; }\n  @-webkit-keyframes shine {\n  0% {\n    left: 0;\n    opacity: 0; }\n  5% {\n    opacity: 0; }\n  48% {\n    opacity: 0.2; }\n  80% {\n    opacity: 0; }\n  100% {\n    left: 82%; } }\n  @keyframes shine {\n  0% {\n    left: 0;\n    opacity: 0; }\n  5% {\n    opacity: 0; }\n  48% {\n    opacity: 0.2; }\n  80% {\n    opacity: 0; }\n  100% {\n    left: 82%; } }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbWFnZS1oYW5kbGVyL0Q6XFxFWFRSQVNcXEJhbWJ1Y29cXGNyb3RhbHVzL3NyY1xcYXBwXFxjb21wb25lbnRzXFxpbWFnZS1oYW5kbGVyXFxpbWFnZS1oYW5kbGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2ltYWdlLWhhbmRsZXIvaW1hZ2UtaGFuZGxlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsMEJBQTBCLEVBQUE7RUFSNUI7SUFXSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFlBQVk7SUFDWixjQUFjO0lBQ2QsY0FBYztJQUNkLGVBQWUsRUFBQTtFQWhCbkI7SUFvQkksYUFBYTtJQUNiLFdBQVc7SUFDWCwwQkFBMEIsRUFBQTtFQXRCOUI7SUEwQkksa0JBQUE7SUFDQSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLE1BQU07SUFDTixPQUFPO0lBRVAsaUJBQUE7SUFDQSw0VUFTQztJQVRELHFQQVNDO0lBQUUsUUFBQTtJQUNILHVIQUF1SDtJQUFFLFVBQUE7SUFFekg7O09DWkc7SURlSCxVQUFVO0lBQ1YsWUFBWTtJQUNaLHFDQUE2QjtZQUE3Qiw2QkFBNkI7SUFFN0IsbUJBQUE7SUFDQSwyQkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLDJDQUFtQztZQUFuQyxtQ0FBbUM7SUFDbkMsMkJBQW1CO1lBQW5CLG1CQUFtQixFQUFBO0VBSXZCO0VBQ0U7SUFDRSxPQUFPO0lBQ1AsVUFBVSxFQUFBO0VBRVo7SUFDRSxVQUFVLEVBQUE7RUFFWjtJQUNFLFlBQVksRUFBQTtFQUVkO0lBQ0UsVUFBVSxFQUFBO0VBRVo7SUFDRSxTQUFTLEVBQUEsRUFBQTtFQWZiO0VBQ0U7SUFDRSxPQUFPO0lBQ1AsVUFBVSxFQUFBO0VBRVo7SUFDRSxVQUFVLEVBQUE7RUFFWjtJQUNFLFlBQVksRUFBQTtFQUVkO0lBQ0UsVUFBVSxFQUFBO0VBRVo7SUFDRSxTQUFTLEVBQUEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW1hZ2UtaGFuZGxlci9pbWFnZS1oYW5kbGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltYWdlLXdyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDI1MHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlNWU1O1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweCAycHggMCAwO1xyXG5cclxuICBtYXQtaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDEzMHB4O1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgcGFkZGluZzogMCA1MHB4O1xyXG4gIH1cclxuXHJcbiAgaW1nIHtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweCAycHggMCAwO1xyXG4gIH1cclxuXHJcbiAgaSB7XHJcbiAgICAvKiAgIHBvc2l0aW9uaW5nICovXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuXHJcbiAgICAvKiAgIGdyYWRpZW50ICAgKi9cclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgdG8gcmlnaHQsXHJcbiAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMCUsXHJcbiAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSAxJSxcclxuICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpIDMwJSxcclxuICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk1KSA1MCUsXHJcbiAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NSkgNzAlLFxyXG4gICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTUpIDcxJSxcclxuICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAxMDAlXHJcbiAgICApOyAvKiBXM0MgKi9cclxuICAgIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjMDBmZmZmZmYnLCBlbmRDb2xvcnN0cj0nIzAwZmZmZmZmJyxHcmFkaWVudFR5cGU9MSApOyAvKiBJRTYtOSAqL1xyXG5cclxuICAgIC8qICBmb3JtaW5nIHRoZSBzaGluZSBlbGVtZW50XHJcbiAgICAgICAgcGxheSBhcm91bmQgd2l0aCB0aGUgd2lkdGgsIHNrZXcgYW5kIGdyYWRpZW50IHRvIGdldCBkaWZmZXJlbnQgZWZmZWN0c1xyXG4gICAgICAqL1xyXG4gICAgd2lkdGg6IDE1JTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRyYW5zZm9ybTogc2tldygtMTBkZWcsIDBkZWcpO1xyXG5cclxuICAgIC8qICBhbmltYXRpbmcgaXQgICovXHJcbiAgICBhbmltYXRpb246IHNoaW5lIDJzO1xyXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDFzO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzaGluZSB7XHJcbiAgMCUge1xyXG4gICAgbGVmdDogMDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIDUlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIDQ4JSB7XHJcbiAgICBvcGFjaXR5OiAwLjI7XHJcbiAgfVxyXG4gIDgwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIGxlZnQ6IDgyJTtcclxuICB9XHJcbn1cclxuIiwiLmltYWdlLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjUwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTVlNTtcbiAgYm9yZGVyLXJhZGl1czogMnB4IDJweCAwIDA7IH1cbiAgLmltYWdlLXdyYXBwZXIgbWF0LWljb24ge1xuICAgIGZvbnQtc2l6ZTogMTMwcHg7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIHBhZGRpbmc6IDAgNTBweDsgfVxuICAuaW1hZ2Utd3JhcHBlciBpbWcge1xuICAgIGhlaWdodDogMjUwcHg7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgYm9yZGVyLXJhZGl1czogMnB4IDJweCAwIDA7IH1cbiAgLmltYWdlLXdyYXBwZXIgaSB7XG4gICAgLyogICBwb3NpdGlvbmluZyAqL1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIC8qICAgZ3JhZGllbnQgICAqL1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpIDElLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNykgMzAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTUpIDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk1KSA3MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NSkgNzElLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDEwMCUpO1xuICAgIC8qIFczQyAqL1xuICAgIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjMDBmZmZmZmYnLCBlbmRDb2xvcnN0cj0nIzAwZmZmZmZmJyxHcmFkaWVudFR5cGU9MSApO1xuICAgIC8qIElFNi05ICovXG4gICAgLyogIGZvcm1pbmcgdGhlIHNoaW5lIGVsZW1lbnRcclxuICAgICAgICBwbGF5IGFyb3VuZCB3aXRoIHRoZSB3aWR0aCwgc2tldyBhbmQgZ3JhZGllbnQgdG8gZ2V0IGRpZmZlcmVudCBlZmZlY3RzXHJcbiAgICAgICovXG4gICAgd2lkdGg6IDE1JTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgdHJhbnNmb3JtOiBza2V3KC0xMGRlZywgMGRlZyk7XG4gICAgLyogIGFuaW1hdGluZyBpdCAgKi9cbiAgICBhbmltYXRpb246IHNoaW5lIDJzO1xuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICAgIGFuaW1hdGlvbi1kZWxheTogMXM7IH1cblxuQGtleWZyYW1lcyBzaGluZSB7XG4gIDAlIHtcbiAgICBsZWZ0OiAwO1xuICAgIG9wYWNpdHk6IDA7IH1cbiAgNSUge1xuICAgIG9wYWNpdHk6IDA7IH1cbiAgNDglIHtcbiAgICBvcGFjaXR5OiAwLjI7IH1cbiAgODAlIHtcbiAgICBvcGFjaXR5OiAwOyB9XG4gIDEwMCUge1xuICAgIGxlZnQ6IDgyJTsgfSB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/image-handler/image-handler.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/image-handler/image-handler.component.ts ***!
  \*********************************************************************/
/*! exports provided: ImageHandlerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageHandlerComponent", function() { return ImageHandlerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ImageHandlerComponent = /** @class */ (function () {
    function ImageHandlerComponent() {
        this.imageVisible = false;
    }
    ImageHandlerComponent.prototype.showImage = function () {
        this.imageVisible = true;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ImageHandlerComponent.prototype, "imageUrl", void 0);
    ImageHandlerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-image-handler',
            template: __webpack_require__(/*! ./image-handler.component.html */ "./src/app/components/image-handler/image-handler.component.html"),
            styles: [__webpack_require__(/*! ./image-handler.component.scss */ "./src/app/components/image-handler/image-handler.component.scss")]
        })
    ], ImageHandlerComponent);
    return ImageHandlerComponent;
}());



/***/ }),

/***/ "./src/app/components/image-item-card/image-item-card.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/image-item-card/image-item-card.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"image-item-card\">\r\n    <app-image-handler [imageUrl]=\"getThumbnailUrl(imageItem)\"></app-image-handler>\r\n    <mat-card-content>\r\n      <mat-card-title #titleRef [matTooltip]=\"imageItem.metadata.general.title.none\" matTooltipPosition=\"above\"\r\n        [matTooltipDisabled]=\"shouldDisableTooltip(titleRef)\">{{imageItem.metadata.general.title.none}}</mat-card-title>\r\n      <mat-card-subtitle>\r\n        <span>\r\n            <mat-icon>visibility</mat-icon> {{imageItem.social.views}}\r\n        </span>\r\n        &nbsp;&nbsp;\r\n        <span>\r\n            <mat-icon>comment</mat-icon>\r\n            {{imageItem.social.comments}}\r\n        </span>\r\n      </mat-card-subtitle>\r\n    </mat-card-content>\r\n  </mat-card>\r\n"

/***/ }),

/***/ "./src/app/components/image-item-card/image-item-card.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/image-item-card/image-item-card.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** match current material theme colors **/\nmat-card.image-item-card {\n  height: 290px;\n  margin: 25px 15px;\n  max-width: 380px;\n  padding: 0;\n  border-radius: 2px; }\nmat-card.image-item-card mat-card-content {\n    height: 40px;\n    position: relative; }\nmat-card.image-item-card mat-card-title {\n    font-size: 16px;\n    font-weight: lighter;\n    position: absolute;\n    bottom: 7px;\n    left: 0;\n    right: 0;\n    padding: 0 8px 0;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    letter-spacing: -0.018em;\n    margin: 0; }\nmat-card.image-item-card mat-card-subtitle {\n    position: absolute;\n    top: -26px;\n    right: 0px;\n    padding: 6px 16px;\n    font-size: 15px;\n    background-color: #f6f6f6d9;\n    color: #673ab7;\n    border-radius: 4px 0px 0px 0px; }\nmat-card.image-item-card mat-card-subtitle .mat-icon {\n      font-size: 14px;\n      height: 14px;\n      width: 14px;\n      line-height: 14px;\n      vertical-align: sub; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbWFnZS1pdGVtLWNhcmQvRDpcXEVYVFJBU1xcQmFtYnVjb1xcY3JvdGFsdXMvc3JjXFxzdHlsZXNcXGdsb2JhbFxcX3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2ltYWdlLWl0ZW0tY2FyZC9EOlxcRVhUUkFTXFxCYW1idWNvXFxjcm90YWx1cy9zcmNcXGFwcFxcY29tcG9uZW50c1xcaW1hZ2UtaXRlbS1jYXJkXFxpbWFnZS1pdGVtLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaW1hZ2UtaXRlbS1jYXJkL0Q6XFxFWFRSQVNcXEJhbWJ1Y29cXGNyb3RhbHVzL3NyY1xcc3R5bGVzXFxnbG9iYWxcXF9taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwwQ0FBQTtBQ0tBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLGtCQUFrQixFQUFBO0FBTHBCO0lBUUksWUFBWTtJQUNaLGtCQUFrQixFQUFBO0FBVHRCO0lBYUksZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLE9BQU87SUFDUCxRQUFRO0lBQ1IsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHdCQUF3QjtJQUN4QixTQUFTLEVBQUE7QUF4QmI7SUE0Qkksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZiwyQkFBMkI7SUFDM0IsY0RyQ2E7SUNzQ2IsOEJBQThCLEVBQUE7QUFuQ2xDO01DSkUsZURFb0I7TUNEcEIsWURDb0I7TUNBcEIsV0RBb0I7TUNDcEIsaUJERG9CO01Bd0NoQixtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW1hZ2UtaXRlbS1jYXJkL2ltYWdlLWl0ZW0tY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBtYXRjaCBjdXJyZW50IG1hdGVyaWFsIHRoZW1lIGNvbG9ycyAqKi9cclxuXHJcbiRwcmltYXJ5OiAjNjczYWI3O1xyXG4kYWNjZW50OiAjZmZkNzQwO1xyXG4kYWNjZW50MjogI2U5MWU2MztcclxuJHdhcm46ICNmNDQzMzY7XHJcbiIsIkBpbXBvcnQgJ2dsb2JhbC9taXhpbnMnO1xyXG5AaW1wb3J0ICdnbG9iYWwvdmFyaWFibGVzJztcclxuXHJcbiRpbmRpY2F0b3JzLXNpemU6IDE0cHg7XHJcblxyXG5tYXQtY2FyZC5pbWFnZS1pdGVtLWNhcmQge1xyXG4gIGhlaWdodDogMjkwcHg7XHJcbiAgbWFyZ2luOiAyNXB4IDE1cHg7XHJcbiAgbWF4LXdpZHRoOiAzODBweDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuXHJcbiAgbWF0LWNhcmQtY29udGVudCB7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG5cclxuICBtYXQtY2FyZC10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogN3B4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgcGFkZGluZzogMCA4cHggMDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMDE4ZW07XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG5cclxuICBtYXQtY2FyZC1zdWJ0aXRsZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC0yNnB4O1xyXG4gICAgcmlnaHQ6IDBweDtcclxuICAgIHBhZGRpbmc6IDZweCAxNnB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNmQ5O1xyXG4gICAgY29sb3I6ICRwcmltYXJ5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4IDBweCAwcHggMHB4O1xyXG4gICAgLm1hdC1pY29uIHtcclxuICAgICAgQGluY2x1ZGUgaWNvbi1zaXplKCRpbmRpY2F0b3JzLXNpemUpO1xyXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogc3ViO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJAbWl4aW4gaWNvbi1zaXplKCAkc2l6ZTogMjRweCkge1xyXG4gIGZvbnQtc2l6ZTogJHNpemU7XHJcbiAgaGVpZ2h0OiAkc2l6ZTtcclxuICB3aWR0aDogJHNpemU7XHJcbiAgbGluZS1oZWlnaHQ6ICRzaXplO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/image-item-card/image-item-card.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/image-item-card/image-item-card.component.ts ***!
  \*************************************************************************/
/*! exports provided: ImageItemCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageItemCardComponent", function() { return ImageItemCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ImageItemCardComponent = /** @class */ (function () {
    function ImageItemCardComponent() {
    }
    ImageItemCardComponent.prototype.getThumbnailUrl = function (item) {
        // return `${item.about}/!/${item.manifest.customicon}`;
        return item.manifest.customicon;
    };
    ImageItemCardComponent.prototype.shouldDisableTooltip = function (titleElement) {
        return titleElement.offsetWidth === titleElement.scrollWidth;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ImageItemCardComponent.prototype, "imageItem", void 0);
    ImageItemCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-image-item-card',
            template: __webpack_require__(/*! ./image-item-card.component.html */ "./src/app/components/image-item-card/image-item-card.component.html"),
            styles: [__webpack_require__(/*! ./image-item-card.component.scss */ "./src/app/components/image-item-card/image-item-card.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ImageItemCardComponent);
    return ImageItemCardComponent;
}());



/***/ }),

/***/ "./src/app/search/search.component.html":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"logo\">\r\n  <mat-icon color=\"primary\">image_search</mat-icon>\r\n  <div class=\"title mat-primary\">Crotalus</div>\r\n</div>\r\n\r\n<div class=\"search-bar\">\r\n  <mat-form-field class=search-input>\r\n    <input matInput name=\"valueToSearch\" placeholder=\"¿Sobre qué deseas buscar?\" [(ngModel)]=\"valueToSearch\"\r\n      (keyup.enter)=\"search(true)\">\r\n  </mat-form-field>\r\n  <button *ngIf=\"!isSearching\" mat-stroked-button color=\"primary\" (click)=\"search(true)\">Buscar</button>\r\n  <div class=\"spinner-box\" *ngIf=\"isSearching\">\r\n    <mat-spinner diameter=\"30\"></mat-spinner>\r\n  </div>\r\n</div>\r\n\r\n\r\n<ng-container *ngIf=\"searchDone || (results && results.length > 0)\">\r\n  <div class=\"results-wrapper\" *ngIf=\"results && results.length, else noResultsTemplate\"\r\n    (scroll)=\"onResultsScrolled($event)\">\r\n    <ng-container *ngFor=\"let result of results\">\r\n      <app-image-item-card [imageItem]=\"result\"></app-image-item-card>\r\n    </ng-container>\r\n    <div *ngIf=\"shouldShowMoreResultsSpinner\" class=\"more-results-spinner\">\r\n      <mat-spinner diameter=\"40\"></mat-spinner>\r\n    </div>\r\n    <div *ngIf=\"noMoreResults\" class=\"more-results-spinner\">\r\n      <p class=\"message\">No hay más resultados.</p>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <ng-template #noResultsTemplate>\r\n    <div class=\"no-results-wrapper\">\r\n      <ng-container *ngIf=\"!isSearching\">\r\n        <mat-icon>sentiment_dissatisfied</mat-icon>\r\n        <p class=\"message\">Ooops!! No encontramos resultados para tu búsqueda.</p>\r\n        <div class=\"spinner-box\">\r\n          <mat-spinner *ngIf=\"isSearching\" diameter=\"30\"></mat-spinner>\r\n        </div>\r\n      </ng-container>\r\n    </div>\r\n  </ng-template>\r\n</ng-container>\r\n\r\n<button mat-fab\r\n *ngIf=\"shouldShowUpButton\"\r\n  class=\"go-up-button\"\r\n  aria-label=\"ir arriba\"\r\n  (click) = \"onUpButtonClick()\">\r\n  <mat-icon>publish</mat-icon>\r\n</button>"

/***/ }),

/***/ "./src/app/search/search.component.scss":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** match current material theme colors **/\n.logo {\n  padding-left: 3%;\n  margin: 0;\n  margin-top: 2%;\n  position: relative;\n  margin-bottom: 36px; }\n.logo .mat-icon {\n    -webkit-transform: rotateZ(-15deg);\n            transform: rotateZ(-15deg);\n    font-size: 80px;\n    height: 80px;\n    width: 80px;\n    line-height: 80px; }\n.logo .title {\n    font-family: \"Cabin Sketch\", cursive;\n    font-size: 27px;\n    position: absolute;\n    bottom: -25px;\n    -webkit-transform: rotateZ(-10deg);\n            transform: rotateZ(-10deg);\n    color: #673ab7; }\n.search-bar {\n  width: 90%;\n  padding-bottom: 30px;\n  text-align: center;\n  margin: 0 auto;\n  min-width: 340px; }\n.search-bar .mat-form-field {\n    width: 78%;\n    margin-right: 2%;\n    min-width: 320px; }\n.search-bar ::ng-deep .mat-input-element {\n    font-size: 18px; }\n.search-bar ::ng-deep .mat-stroked-button:not([disabled]) {\n    border-color: #673ab7; }\n.search-bar .spinner-box {\n    display: inline-block;\n    width: 76px; }\n.search-bar .spinner-box mat-spinner {\n      position: relative;\n      left: 23px; }\n.results-wrapper {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-pack: center;\n          justify-content: center;\n  background-color: #f7f7f7;\n  padding: 0 1%;\n  color: #ababab; }\n.results-wrapper .more-results-spinner {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n    flex-basis: 100%;\n    margin: 30px 0 50px; }\n.no-results-wrapper {\n  width: 100%;\n  height: 70%;\n  background-color: #f7f7f7;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 50px 0;\n  margin-top: 20px;\n  color: #ababab;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column; }\n.no-results-wrapper mat-icon {\n    font-size: 200px;\n    height: 200px;\n    width: 200px;\n    line-height: 200px;\n    color: #ababab; }\n.message {\n  font-size: 30px;\n  padding: 0 20px; }\n.go-up-button {\n  position: fixed;\n  bottom: 4%;\n  right: 3%;\n  background-color: #e91e63;\n  color: #FFF; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoL0Q6XFxFWFRSQVNcXEJhbWJ1Y29cXGNyb3RhbHVzL3NyY1xcc3R5bGVzXFxnbG9iYWxcXF92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvc2VhcmNoL0Q6XFxFWFRSQVNcXEJhbWJ1Y29cXGNyb3RhbHVzL3NyY1xcYXBwXFxzZWFyY2hcXHNlYXJjaC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2VhcmNoL0Q6XFxFWFRSQVNcXEJhbWJ1Y29cXGNyb3RhbHVzL3NyY1xcc3R5bGVzXFxnbG9iYWxcXF9taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwwQ0FBQTtBQ0dBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLG1CQUFtQixFQUFBO0FBTHJCO0lBT0ksa0NBQTBCO1lBQTFCLDBCQUEwQjtJQ1Q1QixlRFV5QjtJQ1R6QixZRFN5QjtJQ1J6QixXRFF5QjtJQ1B6QixpQkRPeUIsRUFBQTtBQVIzQjtJQVlJLG9DQUFvQztJQUNwQyxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixrQ0FBMEI7WUFBMUIsMEJBQTBCO0lBQzFCLGNEbEJhLEVBQUE7QUNzQmpCO0VBQ0UsVUFBVTtFQUNWLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGdCQUFnQixFQUFBO0FBTGxCO0lBUUksVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixnQkFBZ0IsRUFBQTtBQVZwQjtJQWVNLGVBQWUsRUFBQTtBQWZyQjtJQW1CTSxxQkR6Q1csRUFBQTtBQ3NCakI7SUF3QkkscUJBQXFCO0lBQ3JCLFdBQVcsRUFBQTtBQXpCZjtNQTRCTSxrQkFBa0I7TUFDbEIsVUFBVSxFQUFBO0FBS2hCO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IsZUFBZTtFQUNmLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixjQUFjLEVBQUE7QUFOaEI7SUFTSSxvQkFBYTtJQUFiLGFBQWE7SUFDYix3QkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixtQkFBbUIsRUFBQTtBQUl2QjtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQixFQUFBO0FBVnhCO0lDekVFLGdCRHNGMEI7SUNyRjFCLGFEcUYwQjtJQ3BGMUIsWURvRjBCO0lDbkYxQixrQkRtRjBCO0lBQ3hCLGNBQWMsRUFBQTtBQUlsQjtFQUNFLGVBQWU7RUFDZixlQUFlLEVBQUE7QUFHakI7RUFDRSxlQUFlO0VBQ2YsVUFBVTtFQUNWLFNBQVM7RUFDVCx5QkRqR2U7RUNrR2YsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBtYXRjaCBjdXJyZW50IG1hdGVyaWFsIHRoZW1lIGNvbG9ycyAqKi9cclxuXHJcbiRwcmltYXJ5OiAjNjczYWI3O1xyXG4kYWNjZW50OiAjZmZkNzQwO1xyXG4kYWNjZW50MjogI2U5MWU2MztcclxuJHdhcm46ICNmNDQzMzY7XHJcbiIsIkBpbXBvcnQgJ2dsb2JhbC9taXhpbnMnO1xyXG5AaW1wb3J0ICdnbG9iYWwvdmFyaWFibGVzJztcclxuXHJcbi5sb2dvIHtcclxuICBwYWRkaW5nLWxlZnQ6IDMlO1xyXG4gIG1hcmdpbjogMDtcclxuICBtYXJnaW4tdG9wOiAyJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzZweDtcclxuICAubWF0LWljb24ge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVaKC0xNWRlZyk7XHJcbiAgICBAaW5jbHVkZSBpY29uLXNpemUoODBweCk7XHJcbiAgfVxyXG5cclxuICAudGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiQ2FiaW4gU2tldGNoXCIsIGN1cnNpdmU7XHJcbiAgICBmb250LXNpemU6IDI3cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IC0yNXB4O1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVaKC0xMGRlZyk7XHJcbiAgICBjb2xvcjogJHByaW1hcnk7XHJcbiAgfVxyXG59XHJcblxyXG4uc2VhcmNoLWJhciB7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgbWluLXdpZHRoOiAzNDBweDtcclxuICBcclxuICAubWF0LWZvcm0tZmllbGQge1xyXG4gICAgd2lkdGg6IDc4JTtcclxuICAgIG1hcmdpbi1yaWdodDogMiU7XHJcbiAgICBtaW4td2lkdGg6IDMyMHB4O1xyXG4gIH1cclxuICBcclxuICA6Om5nLWRlZXAge1xyXG4gICAgLm1hdC1pbnB1dC1lbGVtZW50IHtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5tYXQtc3Ryb2tlZC1idXR0b246bm90KFtkaXNhYmxlZF0pIHtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAkcHJpbWFyeTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zcGlubmVyLWJveCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogNzZweDtcclxuXHJcbiAgICBtYXQtc3Bpbm5lciB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgbGVmdDogMjNweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5yZXN1bHRzLXdyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XHJcbiAgcGFkZGluZzogMCAxJTtcclxuICBjb2xvcjogI2FiYWJhYjtcclxuXHJcbiAgLm1vcmUtcmVzdWx0cy1zcGlubmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtYmFzaXM6IDEwMCU7XHJcbiAgICBtYXJnaW46IDMwcHggMCA1MHB4O1xyXG4gIH1cclxufVxyXG5cclxuLm5vLXJlc3VsdHMtd3JhcHBlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA3MCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogNTBweCAwO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgY29sb3I6ICNhYmFiYWI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgbWF0LWljb24ge1xyXG4gICAgQGluY2x1ZGUgaWNvbi1zaXplKDIwMHB4KTtcclxuICAgIGNvbG9yOiAjYWJhYmFiOztcclxuICB9XHJcbn1cclxuXHJcbi5tZXNzYWdlIHtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgcGFkZGluZzogMCAyMHB4O1xyXG59XHJcblxyXG4uZ28tdXAtYnV0dG9uIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiA0JTtcclxuICByaWdodDogMyU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFjY2VudDI7XHJcbiAgY29sb3I6ICNGRkY7XHJcbn1cclxuIiwiQG1peGluIGljb24tc2l6ZSggJHNpemU6IDI0cHgpIHtcclxuICBmb250LXNpemU6ICRzaXplO1xyXG4gIGhlaWdodDogJHNpemU7XHJcbiAgd2lkdGg6ICRzaXplO1xyXG4gIGxpbmUtaGVpZ2h0OiAkc2l6ZTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/search.service */ "./src/app/services/search.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_app_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/app-settings.service */ "./src/app/services/app-settings.service.ts");





var SearchComponent = /** @class */ (function () {
    function SearchComponent(searchService, changeDetector, snackBar, appSettings) {
        var _this = this;
        this.searchService = searchService;
        this.changeDetector = changeDetector;
        this.snackBar = snackBar;
        this.searchDone = false;
        this.isSearching = false;
        this.noMoreResults = false;
        this.onUpButtonClick = function () {
            var c = document.documentElement.scrollTop || document.body.scrollTop;
            if (c > 0) {
                window.requestAnimationFrame(_this.onUpButtonClick);
                window.scrollTo(0, c - c / 8);
            }
        };
        this.resultsSize = appSettings.options.resultsResponseSize;
        this.minLetters = appSettings.options.minLetters;
    }
    SearchComponent.prototype.search = function (firstCall) {
        var _this = this;
        if (this.snackBarRef) {
            this.snackBarRef.dismiss();
        }
        if (this.valueToSearch.length < this.minLetters) {
            var message = "Texto de b\u00FAsqueda m\u00EDnimo de " + this.minLetters + " letras";
            this.showSnackBar(message, 'Cerrar');
            return;
        }
        if (firstCall) {
            this.results = [];
            this.noMoreResults = false;
        }
        this.isSearching = true;
        this.searchService.search(this.valueToSearch, firstCall).subscribe(function (results) {
            var _a, _b;
            _this.searchDone = true;
            _this.isSearching = false;
            var lastResults = results[0];
            if (lastResults.length > 0 && lastResults.length < _this.resultsSize) {
                (_a = _this.results).push.apply(_a, lastResults);
                _this.noMoreResults = true;
            }
            else if (lastResults.length === 0) {
                _this.noMoreResults = true;
                _this.scrollToBottom();
            }
            else {
                (_b = _this.results).push.apply(_b, lastResults);
            }
        });
    };
    SearchComponent.prototype.scrollToBottom = function () {
        this.changeDetector.detectChanges();
        setTimeout(function () {
            window.scrollTo(0, document.body.scrollHeight);
        }, 100);
    };
    SearchComponent.prototype.showSnackBar = function (message, action) {
        var _this = this;
        this.snackBarRef = this.snackBar.open(message, action, {
            duration: 6000,
        });
        this.snackBarRef.onAction().subscribe(function () {
            _this.snackBarRef.dismiss();
        });
    };
    Object.defineProperty(SearchComponent.prototype, "shouldShowMoreResultsSpinner", {
        get: function () {
            return (this.results && this.results.length > 0) && !this.noMoreResults;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchComponent.prototype, "shouldShowUpButton", {
        get: function () {
            return window.pageYOffset > window.innerHeight;
        },
        enumerable: true,
        configurable: true
    });
    SearchComponent.prototype.onWindowScroll = function () {
        if (!this.noMoreResults &&
            window.pageYOffset + window.innerHeight >= (document.documentElement.offsetHeight - 90)) {
            if (!this.isSearching) {
                this.search(false);
            }
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("window:scroll", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], SearchComponent.prototype, "onWindowScroll", null);
    SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.scss */ "./src/app/search/search.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _services_app_settings_service__WEBPACK_IMPORTED_MODULE_4__["AppSettingsService"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/services/app-settings.service.provider.ts":
/*!***********************************************************!*\
  !*** ./src/app/services/app-settings.service.provider.ts ***!
  \***********************************************************/
/*! exports provided: AppSettingsServiceFactory, AppSettingsServiceProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSettingsServiceFactory", function() { return AppSettingsServiceFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSettingsServiceProvider", function() { return AppSettingsServiceProvider; });
/* harmony import */ var _app_settings_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-settings.service */ "./src/app/services/app-settings.service.ts");

var AppSettingsServiceFactory = function () {
    // Create env
    var appSettings = new _app_settings_service__WEBPACK_IMPORTED_MODULE_0__["AppSettingsService"]();
    // Read environment variables from browser window
    var browserWindow = window || {};
    var browserWindowAppSettings = browserWindow['__appSettings'] || {};
    // Assign environment variables from browser window to env
    // In the current implementation, properties from env.js overwrite defaults from the EnvService.
    // If needed, a deep merge can be performed here to merge properties instead of overwriting them.
    Object.keys(browserWindowAppSettings).forEach(function (key) {
        if (browserWindowAppSettings.hasOwnProperty(key)) {
            appSettings[key] = window['__appSettings'][key];
        }
    });
    return appSettings;
};
var AppSettingsServiceProvider = {
    provide: _app_settings_service__WEBPACK_IMPORTED_MODULE_0__["AppSettingsService"],
    useFactory: AppSettingsServiceFactory,
    deps: [],
};


/***/ }),

/***/ "./src/app/services/app-settings.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/app-settings.service.ts ***!
  \**************************************************/
/*! exports provided: AppSettingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSettingsService", function() { return AppSettingsService; });
var AppSettingsService = /** @class */ (function () {
    function AppSettingsService() {
        // The values that are defined here are the default values that can
        // be overridden by settings.js
        // API url
        this.apiUri = '';
        this.catalogues = [
            { name: 'Banco de videos educativos de la UdeM', key: 'udem' }
        ];
        this.filters = [
            { meta: 'metadata.technical.format', value: ['video', 'audio', 'image', 'text', 'application'] }
        ];
        this.options = {
            resultsResponseSize: 20,
            minLetters: 3,
            cacheLife: 120000,
        };
        this.debug = false;
    }
    return AppSettingsService;
}());



/***/ }),

/***/ "./src/app/services/search.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/search.service.ts ***!
  \********************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_settings_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-settings.service */ "./src/app/services/app-settings.service.ts");


// import { initialConfig } from "../initialConfig";




var SearchService = /** @class */ (function () {
    function SearchService(http, appSettings) {
        this.http = http;
        this.appSettings = appSettings;
        this.apiUri = appSettings.apiUri;
        this.filters = appSettings.filters;
        this.catalogues = appSettings.catalogues;
    }
    SearchService.prototype.search = function (value, firstCall) {
        var _this = this;
        if (firstCall) {
            this.apiRequestsCounter = 0;
        }
        var cataloguesToSearchIn = this.catalogues.map(function (catalog) { return catalog.key; });
        var requestsArray = cataloguesToSearchIn.map(function (catalogueKey) {
            return _this.http.get(_this.createCatalogRequestUrl(value, catalogueKey));
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])(requestsArray.slice()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () {
            _this.apiRequestsCounter += 1;
        }));
    };
    SearchService.prototype.createCatalogRequestUrl = function (value, catalogKey) {
        return this.apiUri + "/c/" + catalogKey + "/resources.json?q=" + value + "&" + this.generateRequestParams();
    };
    SearchService.prototype.generateRequestParams = function () {
        var responseSize = this.appSettings.options.resultsResponseSize;
        var resultsOffset = responseSize * this.apiRequestsCounter;
        var searchParams = "(n)=" + responseSize + "&(s)=" + resultsOffset;
        var filters = this.filters.map(function (filter) {
            return filter.value.reduce(function (prevValue, actualItem, index) {
                return prevValue + (index !== 0 ? '&' : '') + ("(meta)[" + filter.meta + "][" + index + "]=" + actualItem);
            }, '');
        });
        return searchParams + "&" + filters.join('&');
    };
    SearchService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _app_settings_service__WEBPACK_IMPORTED_MODULE_5__["AppSettingsService"]])
    ], SearchService);
    return SearchService;
}());

// application/ecmascript, application/flash-video, application/illustrator, application/javascript, application/msword, application/octet-stream bin, application/pdf, application/postscript ps, application/rtf, application/vnd.corel-draw, application/vnd.ms-excel, application/vnd.ms-powerpoint, application/x-asax, application/x-ascx, application/x-ashx, application/x-asmx, application/x-asp, application/x-bittorrent, application/x-bzip, application/x-bzip-compressed-tar, application/x-cd-image, application/x-chm, application/x-config, application/x-executable, application/x-font-ttf, application/x-jar, application/x-java, application/x-master-page, application/x-php, application/x-rar, application/x-rar-compressed, application/x-ruby, application/x-shellscript, application/x-shockwave-flash, application/x-web-config, application/x-wsdl, application/x-x509-ca-cert, application/xhtml+xml, application/zip,
// audio / ac3, audio / midi, audio / mpeg, audio / x - mp3 - playlist,
// image / bmp, image / gif, image / jpeg, image / png, image / svg + xml, image / tiff,
// text / css, text / html, text / mathml, text / plain, text / x - comma - separated - values, text / x - java, text / x - log, text / x - readme, text / x - sql, text / x - vb, text / x - xsl, text / xml,
// video / 3gpp, video / mp4, video / mpeg, video / x - ms - asf, video / x - ms - wmv, video / x - msvideo


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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\EXTRAS\Bambuco\crotalus\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map