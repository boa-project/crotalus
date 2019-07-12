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











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_6__["SearchComponent"],
                _components_image_handler_image_handler_component__WEBPACK_IMPORTED_MODULE_10__["ImageHandlerComponent"]
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
            ],
            providers: [],
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

module.exports = "<div class=\"image-wrapper\">\n  <i *ngIf=\"!imageVisible\"></i>\n  <mat-icon *ngIf=\"!imageVisible\">image</mat-icon>\n  <img [hidden]=\"!imageVisible\" [src]=\"imageUrl\" alt=\"\" (load)=\"showImage()\">\n  <!-- <img *ngIf=\"imageVisible\" [src]=\"imageUrl\" alt=\"\" (load)=\"showImage()\"> -->\n</div>"

/***/ }),

/***/ "./src/app/components/image-handler/image-handler.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/image-handler/image-handler.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".image-wrapper {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  width: 100%;\n  height: 250px;\n  position: relative;\n  background-color: #e5e5e5;\n  border-radius: 2px 2px 0 0; }\n  .image-wrapper mat-icon {\n    font-size: 130px;\n    width: auto;\n    height: auto;\n    display: block;\n    color: #FFFFFF;\n    padding: 0 50px; }\n  .image-wrapper img {\n    height: 250px;\n    width: auto;\n    border-radius: 2px 2px 0 0; }\n  .image-wrapper i {\n    /*   positioning */\n    position: absolute;\n    opacity: 0;\n    top: 0;\n    left: 0;\n    /*   gradient   */\n    background: -webkit-gradient(linear, left top, right top, from(rgba(255, 255, 255, 0)), color-stop(1%, rgba(255, 255, 255, 0.03)), color-stop(30%, rgba(255, 255, 255, 0.6)), color-stop(50%, rgba(255, 255, 255, 0.85)), color-stop(70%, rgba(255, 255, 255, 0.85)), color-stop(71%, rgba(255, 255, 255, 0.85)), to(rgba(255, 255, 255, 0)));\n    background: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.03) 1%, rgba(255, 255, 255, 0.6) 30%, rgba(255, 255, 255, 0.85) 50%, rgba(255, 255, 255, 0.85) 70%, rgba(255, 255, 255, 0.85) 71%, rgba(255, 255, 255, 0) 100%);\n    /* W3C */\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#00ffffff',GradientType=1 );\n    /* IE6-9 */\n    /*  forming the shine element\r\n        play around with the width, skew and gradient to get different effects\r\n      */\n    width: 15%;\n    height: 100%;\n    -webkit-transform: skew(-10deg, 0deg);\n            transform: skew(-10deg, 0deg);\n    /*  animating it  */\n    -webkit-animation: shine 2s;\n            animation: shine 2s;\n    -webkit-animation-iteration-count: infinite;\n            animation-iteration-count: infinite;\n    -webkit-animation-delay: 1s;\n            animation-delay: 1s; }\n  @-webkit-keyframes shine {\n  0% {\n    left: 0;\n    opacity: 0; }\n  5% {\n    opacity: 0; }\n  48% {\n    opacity: 0.2; }\n  80% {\n    opacity: 0; }\n  100% {\n    left: 82%; } }\n  @keyframes shine {\n  0% {\n    left: 0;\n    opacity: 0; }\n  5% {\n    opacity: 0; }\n  48% {\n    opacity: 0.2; }\n  80% {\n    opacity: 0; }\n  100% {\n    left: 82%; } }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbWFnZS1oYW5kbGVyL0Q6XFxFWFRSQVNcXEJhbWJ1Y29cXHNlYXJjaC1lbmdpbmUtZnJvbnQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGltYWdlLWhhbmRsZXJcXGltYWdlLWhhbmRsZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaW1hZ2UtaGFuZGxlci9pbWFnZS1oYW5kbGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2Isd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2Qix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QiwwQkFBMEIsRUFBQTtFQVI1QjtJQVdJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGNBQWM7SUFDZCxjQUFjO0lBQ2QsZUFBZSxFQUFBO0VBaEJuQjtJQW9CSSxhQUFhO0lBQ2IsV0FBVztJQUNYLDBCQUEwQixFQUFBO0VBdEI5QjtJQTBCSSxrQkFBQTtJQUNBLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsTUFBTTtJQUNOLE9BQU87SUFFUCxpQkFBQTtJQUNBLDZVQVNDO0lBVEQsc1BBU0M7SUFBRSxRQUFBO0lBQ0gsdUhBQXVIO0lBQUUsVUFBQTtJQUV6SDs7T0NaRztJRGVILFVBQVU7SUFDVixZQUFZO0lBQ1oscUNBQTZCO1lBQTdCLDZCQUE2QjtJQUU3QixtQkFBQTtJQUNBLDJCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsMkNBQW1DO1lBQW5DLG1DQUFtQztJQUNuQywyQkFBbUI7WUFBbkIsbUJBQW1CLEVBQUE7RUFJdkI7RUFDRTtJQUNFLE9BQU87SUFDUCxVQUFVLEVBQUE7RUFFWjtJQUNFLFVBQVUsRUFBQTtFQUVaO0lBQ0UsWUFBWSxFQUFBO0VBRWQ7SUFDRSxVQUFVLEVBQUE7RUFFWjtJQUNFLFNBQVMsRUFBQSxFQUFBO0VBZmI7RUFDRTtJQUNFLE9BQU87SUFDUCxVQUFVLEVBQUE7RUFFWjtJQUNFLFVBQVUsRUFBQTtFQUVaO0lBQ0UsWUFBWSxFQUFBO0VBRWQ7SUFDRSxVQUFVLEVBQUE7RUFFWjtJQUNFLFNBQVMsRUFBQSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9pbWFnZS1oYW5kbGVyL2ltYWdlLWhhbmRsZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1hZ2Utd3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMjUwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNWU1ZTU7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4IDJweCAwIDA7XHJcblxyXG4gIG1hdC1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMTMwcHg7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBwYWRkaW5nOiAwIDUwcHg7XHJcbiAgfVxyXG5cclxuICBpbWcge1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4IDJweCAwIDA7XHJcbiAgfVxyXG5cclxuICBpIHtcclxuICAgIC8qICAgcG9zaXRpb25pbmcgKi9cclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gIFxyXG4gICAgLyogICBncmFkaWVudCAgICovXHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgIHRvIHJpZ2h0LFxyXG4gICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDAlLFxyXG4gICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDMpIDElLFxyXG4gICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNikgMzAlLFxyXG4gICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODUpIDUwJSxcclxuICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg1KSA3MCUsXHJcbiAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NSkgNzElLFxyXG4gICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDEwMCVcclxuICAgICk7IC8qIFczQyAqL1xyXG4gICAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyMwMGZmZmZmZicsIGVuZENvbG9yc3RyPScjMDBmZmZmZmYnLEdyYWRpZW50VHlwZT0xICk7IC8qIElFNi05ICovXHJcbiAgXHJcbiAgICAvKiAgZm9ybWluZyB0aGUgc2hpbmUgZWxlbWVudFxyXG4gICAgICAgIHBsYXkgYXJvdW5kIHdpdGggdGhlIHdpZHRoLCBza2V3IGFuZCBncmFkaWVudCB0byBnZXQgZGlmZmVyZW50IGVmZmVjdHNcclxuICAgICAgKi9cclxuICAgIHdpZHRoOiAxNSU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0cmFuc2Zvcm06IHNrZXcoLTEwZGVnLCAwZGVnKTtcclxuICBcclxuICAgIC8qICBhbmltYXRpbmcgaXQgICovXHJcbiAgICBhbmltYXRpb246IHNoaW5lIDJzO1xyXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDFzO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzaGluZSB7XHJcbiAgMCUge1xyXG4gICAgbGVmdDogMDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIDUlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIDQ4JSB7XHJcbiAgICBvcGFjaXR5OiAwLjI7XHJcbiAgfVxyXG4gIDgwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIGxlZnQ6IDgyJTtcclxuICB9XHJcbn1cclxuIiwiLmltYWdlLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjUwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTVlNTtcbiAgYm9yZGVyLXJhZGl1czogMnB4IDJweCAwIDA7IH1cbiAgLmltYWdlLXdyYXBwZXIgbWF0LWljb24ge1xuICAgIGZvbnQtc2l6ZTogMTMwcHg7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIHBhZGRpbmc6IDAgNTBweDsgfVxuICAuaW1hZ2Utd3JhcHBlciBpbWcge1xuICAgIGhlaWdodDogMjUwcHg7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgYm9yZGVyLXJhZGl1czogMnB4IDJweCAwIDA7IH1cbiAgLmltYWdlLXdyYXBwZXIgaSB7XG4gICAgLyogICBwb3NpdGlvbmluZyAqL1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIC8qICAgZ3JhZGllbnQgICAqL1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAzKSAxJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpIDMwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg1KSA1MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NSkgNzAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODUpIDcxJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAxMDAlKTtcbiAgICAvKiBXM0MgKi9cbiAgICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nIzAwZmZmZmZmJywgZW5kQ29sb3JzdHI9JyMwMGZmZmZmZicsR3JhZGllbnRUeXBlPTEgKTtcbiAgICAvKiBJRTYtOSAqL1xuICAgIC8qICBmb3JtaW5nIHRoZSBzaGluZSBlbGVtZW50XHJcbiAgICAgICAgcGxheSBhcm91bmQgd2l0aCB0aGUgd2lkdGgsIHNrZXcgYW5kIGdyYWRpZW50IHRvIGdldCBkaWZmZXJlbnQgZWZmZWN0c1xyXG4gICAgICAqL1xuICAgIHdpZHRoOiAxNSU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHRyYW5zZm9ybTogc2tldygtMTBkZWcsIDBkZWcpO1xuICAgIC8qICBhbmltYXRpbmcgaXQgICovXG4gICAgYW5pbWF0aW9uOiBzaGluZSAycztcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgICBhbmltYXRpb24tZGVsYXk6IDFzOyB9XG5cbkBrZXlmcmFtZXMgc2hpbmUge1xuICAwJSB7XG4gICAgbGVmdDogMDtcbiAgICBvcGFjaXR5OiAwOyB9XG4gIDUlIHtcbiAgICBvcGFjaXR5OiAwOyB9XG4gIDQ4JSB7XG4gICAgb3BhY2l0eTogMC4yOyB9XG4gIDgwJSB7XG4gICAgb3BhY2l0eTogMDsgfVxuICAxMDAlIHtcbiAgICBsZWZ0OiA4MiU7IH0gfVxuIl19 */"

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

/***/ "./src/app/initialConfig.ts":
/*!**********************************!*\
  !*** ./src/app/initialConfig.ts ***!
  \**********************************/
/*! exports provided: initialConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialConfig", function() { return initialConfig; });
var initialConfig = {
    apiuri: 'https://boa.udem.edu.co/api',
    catalogues: [
        { name: 'Banco de videos educativos de la UdeM', key: 'udem' }
    ],
    filters: [
        // { meta: 'metadata.technical.format', value: ['video', 'audio', 'image', 'text', 'application'] }
        { meta: 'metadata.technical.format', value: ['image'] }
    ],
    options: {
        suggestionsSize: 50,
        resultsSize: 0,
        minLetters: 3,
        cacheLife: 60000 // 60 seconds
    },
    debug: true,
};


/***/ }),

/***/ "./src/app/search/search.component.html":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1><mat-icon color=\"primary\">image_search</mat-icon></h1>\r\n\r\n<div class=\"search-bar\">\r\n  <mat-form-field class=search-input>\r\n    <input matInput name=\"valueToSearch\" placeholder=\"¿Sobre qué deseas buscar?\" [(ngModel)]=\"valueToSearch\"\r\n      (keyup.enter)=\"search()\" (ngModelChange)=\"shouldClearResults()\">\r\n  </mat-form-field>\r\n  <button mat-raised-button color=\"primary\" (click)=\"search()\">Buscar</button>\r\n</div>\r\n\r\n<ng-container *ngIf=\"searchDone\">\r\n  <div class=\"results-wrapper\" *ngIf=\"results && results.length, else noResultsTemplate\">\r\n    <ng-container *ngFor=\"let result of results\">\r\n      <mat-card>\r\n        <app-image-handler [imageUrl]=\"getImageUrl(result)\"></app-image-handler>\r\n        <mat-card-content>\r\n          <mat-card-title #titleRef [matTooltip]=\"result.metadata.general.title.none\" matTooltipPosition=\"above\"\r\n            [matTooltipDisabled]=\"shouldDisableTooltip(titleRef)\">{{result.metadata.general.title.none}}</mat-card-title>\r\n          <mat-card-subtitle>\r\n            <mat-icon>visibility</mat-icon> {{result.social.views}} &nbsp;&nbsp; <mat-icon>comment</mat-icon>\r\n            {{result.social.comments}}\r\n          </mat-card-subtitle>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </ng-container>\r\n  </div>\r\n\r\n  <ng-template #noResultsTemplate>\r\n    <div class=\"no-results-wrapper\">\r\n      <mat-icon>not_interested</mat-icon>\r\n    </div>\r\n  </ng-template>\r\n</ng-container>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/search/search.component.scss":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  padding-left: 3%;\n  margin: 0;\n  margin-top: 2%; }\n  h1 .mat-icon {\n    font-size: 80px;\n    height: 80px;\n    width: 80px;\n    line-height: 80px; }\n  .search-bar {\n  width: 90%;\n  padding-bottom: 30px;\n  text-align: center;\n  margin: 0 auto; }\n  .search-bar .mat-form-field {\n    width: 78%;\n    margin-right: 2%; }\n  .results-wrapper {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  background-color: #f7f7f7;\n  padding: 0 1%; }\n  mat-card {\n  height: 320px;\n  margin: 25px 15px;\n  max-width: 380px;\n  padding: 0;\n  border-radius: 2px; }\n  mat-card mat-card-content {\n    height: 70px;\n    position: relative; }\n  mat-card mat-card-title {\n    font-size: 16px;\n    font-weight: lighter;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    padding: 0 7px 0;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    letter-spacing: -0.018em; }\n  mat-card mat-card-subtitle {\n    position: absolute;\n    top: 4px;\n    right: 0;\n    padding: 6px 16px;\n    font-size: 15px;\n    background-color: #f6f6f6;\n    color: #673ab7;\n    border-radius: 0px 0 0px 2px; }\n  mat-card mat-card-subtitle .mat-icon {\n      font-size: 14px;\n      height: 14px;\n      width: 14px;\n      line-height: 14px;\n      vertical-align: sub; }\n  .no-results-wrapper {\n  width: 100%;\n  height: 70%;\n  background-color: #f7f7f7;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 50px 0;\n  margin-top: 20px; }\n  .no-results-wrapper mat-icon {\n    font-size: 200px;\n    height: 200px;\n    width: 200px;\n    line-height: 200px;\n    color: #e5e5e5; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoL0Q6XFxFWFRSQVNcXEJhbWJ1Y29cXHNlYXJjaC1lbmdpbmUtZnJvbnQvc3JjXFxhcHBcXHNlYXJjaFxcc2VhcmNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVlBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxjQUFjLEVBQUE7RUFIaEI7SUFQRSxlQVl5QjtJQVh6QixZQVd5QjtJQVZ6QixXQVV5QjtJQVR6QixpQkFTeUIsRUFBQTtFQUkzQjtFQUNFLFVBQVU7RUFDVixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGNBQWMsRUFBQTtFQUpoQjtJQU9JLFVBQVU7SUFDVixnQkFBZ0IsRUFBQTtFQUlwQjtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLGVBQWU7RUFDZix5QkFBOEI7VUFBOUIsOEJBQThCO0VBQzlCLHlCQUF5QjtFQUN6QixhQUFhLEVBQUE7RUFHZjtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixrQkFBa0IsRUFBQTtFQUxwQjtJQVVJLFlBQVk7SUFDWixrQkFBa0IsRUFBQTtFQVh0QjtJQWVJLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxPQUFPO0lBQ1AsUUFBUTtJQUNSLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQix3QkFBd0IsRUFBQTtFQXpCNUI7SUE2Qkksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixRQUFRO0lBQ1IsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsY0FBYztJQUNkLDRCQUE0QixFQUFBO0VBcENoQztNQXBDRSxlQUhvQjtNQUlwQixZQUpvQjtNQUtwQixXQUxvQjtNQU1wQixpQkFOb0I7TUE4RWhCLG1CQUFtQixFQUFBO0VBTXpCO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsb0JBQWE7RUFBYixhQUFhO0VBQ2Isd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2Qix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTtFQVJsQjtJQWpGRSxnQkE0RjBCO0lBM0YxQixhQTJGMEI7SUExRjFCLFlBMEYwQjtJQXpGMUIsa0JBeUYwQjtJQUN4QixjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4kaW5kaWNhdG9ycy1zaXplOiAxNHB4O1xyXG5cclxuQG1peGluIGljb24tc2l6ZSggJHNpemU6IDI0cHgpIHtcclxuICBmb250LXNpemU6ICRzaXplO1xyXG4gIGhlaWdodDogJHNpemU7XHJcbiAgd2lkdGg6ICRzaXplO1xyXG4gIGxpbmUtaGVpZ2h0OiAkc2l6ZTtcclxufVxyXG5cclxuXHJcbmgxIHtcclxuICBwYWRkaW5nLWxlZnQ6IDMlO1xyXG4gIG1hcmdpbjogMDtcclxuICBtYXJnaW4tdG9wOiAyJTsgXHJcbiAgLm1hdC1pY29uIHtcclxuICAgIEBpbmNsdWRlIGljb24tc2l6ZSg4MHB4KTtcclxuICB9XHJcbn1cclxuXHJcbi5zZWFyY2gtYmFyIHtcclxuICB3aWR0aDogOTAlO1xyXG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IDAgYXV0bztcclxuXHJcbiAgLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIHdpZHRoOiA3OCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIlO1xyXG4gIH1cclxufVxyXG5cclxuLnJlc3VsdHMtd3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XHJcbiAgcGFkZGluZzogMCAxJTtcclxufVxyXG5cclxubWF0LWNhcmQge1xyXG4gIGhlaWdodDogMzIwcHg7XHJcbiAgbWFyZ2luOiAyNXB4IDE1cHg7XHJcbiAgbWF4LXdpZHRoOiAzODBweDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuXHJcblxyXG5cclxuICBtYXQtY2FyZC1jb250ZW50IHtcclxuICAgIGhlaWdodDogNzBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcblxyXG4gIG1hdC1jYXJkLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgcGFkZGluZzogMCA3cHggMDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMDE4ZW07XHJcbiAgfVxyXG5cclxuICBtYXQtY2FyZC1zdWJ0aXRsZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDRweDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgcGFkZGluZzogNnB4IDE2cHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xyXG4gICAgY29sb3I6ICM2NzNhYjc7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMCAwcHggMnB4O1xyXG4gICAgLm1hdC1pY29uIHtcclxuICAgICAgQGluY2x1ZGUgaWNvbi1zaXplKCRpbmRpY2F0b3JzLXNpemUpO1xyXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogc3ViO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcbi5uby1yZXN1bHRzLXdyYXBwZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNzAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDUwcHggMDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG5cclxuICBtYXQtaWNvbiB7XHJcbiAgICBAaW5jbHVkZSBpY29uLXNpemUoMjAwcHgpO1xyXG4gICAgY29sb3I6ICNlNWU1ZTU7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuIl19 */"

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




var SearchComponent = /** @class */ (function () {
    function SearchComponent(searchService, snackBar) {
        this.searchService = searchService;
        this.snackBar = snackBar;
        this.searchDone = false;
    }
    SearchComponent.prototype.search = function () {
        var _this = this;
        if (this.snackBarRef)
            this.snackBarRef.dismiss();
        this.searchService.search(this.valueToSearch).subscribe(function (results) {
            if (!_this.searchDone) {
                _this.searchDone = true;
            }
            _this.results = results && results[0];
            _this.showSnackBar();
        });
    };
    SearchComponent.prototype.getImageUrl = function (result) {
        return result.about + "/!/" + result.manifest.entrypoint;
    };
    SearchComponent.prototype.shouldDisableTooltip = function (titleElement) {
        return titleElement.offsetWidth === titleElement.scrollWidth;
    };
    SearchComponent.prototype.shouldClearResults = function () {
        if (this.valueToSearch.length === 0 && (this.results && this.results.length === 0)) {
            this.searchDone = false;
        }
    };
    SearchComponent.prototype.showSnackBar = function () {
        var _this = this;
        var message = this.results.length === 0 ? 'Opps!! no hay resultados para tu búsqueda.' : this.results.length + " resultados encontrados";
        this.snackBarRef = this.snackBar.open(message, 'Cerrar', {
            duration: 6000,
        });
        this.snackBarRef.onAction().subscribe(function () {
            _this.snackBarRef.dismiss();
        });
    };
    SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.scss */ "./src/app/search/search.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], SearchComponent);
    return SearchComponent;
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
/* harmony import */ var _initialConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../initialConfig */ "./src/app/initialConfig.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var SearchService = /** @class */ (function () {
    function SearchService(http) {
        this.http = http;
        this.apiUri = _initialConfig__WEBPACK_IMPORTED_MODULE_2__["initialConfig"].apiuri;
        this.filters = _initialConfig__WEBPACK_IMPORTED_MODULE_2__["initialConfig"].filters;
        this.catalogues = _initialConfig__WEBPACK_IMPORTED_MODULE_2__["initialConfig"].catalogues;
    }
    SearchService.prototype.search = function (value) {
        var _this = this;
        var cataloguesToSearchIn = this.catalogues.map(function (catalog) { return catalog.key; });
        var requestsArray = cataloguesToSearchIn.map(function (catalogueKey) {
            return _this.http.get(_this.createCatalogRequestUrl(value, catalogueKey));
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])(requestsArray.slice());
    };
    SearchService.prototype.createCatalogRequestUrl = function (value, catalogKey) {
        return this.apiUri + "/c/" + catalogKey + "/resources.json?q=" + value + "&" + this.generateRequestParams();
    };
    SearchService.prototype.generateRequestParams = function () {
        var searchParams = "(n)=" + _initialConfig__WEBPACK_IMPORTED_MODULE_2__["initialConfig"].options.suggestionsSize + "&(s)=" + _initialConfig__WEBPACK_IMPORTED_MODULE_2__["initialConfig"].options.resultsSize;
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
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

module.exports = __webpack_require__(/*! D:\EXTRAS\Bambuco\search-engine-front\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map