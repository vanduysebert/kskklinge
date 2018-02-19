webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/api/api.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"loggedIn\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <p>\n        <a class=\"float-right btn btn-primary text-white hoverable\" (click)=\"logout()\">Log uit</a>\n      </p>\n    </div>\n  </div>\n</div>\n<div *ngIf=\"route.children.length === 0 && loggedIn\" class=\"row align-items-center no-gutters justify-content-center mt-5\">\n    <div class=\"col-md-4 col-lg-3 col-xl-2 \" ><a class=\"btn btn-warning btn-lg btn-block py-md-5 py-4\"  routerLink=\"/api/wedstrijden\">Verslagen</a></div>\n    <div class=\"col-md-4 col-lg-3 col-xl-2 \" ><a class=\"btn btn-primary btn-lg btn-block py-md-5 py-4 border border-warning\" routerLink=\"/api/ploegen\">Ploegen</a></div>\n    <div class=\"w-100\"></div>\n    <div class=\"col-md-4 col-lg-3 col-xl-2 \" ><a  class=\"btn btn-primary btn-lg btn-block py-md-5 py-4 border border-warning\" routerLink=\"/api/nieuws\">Nieuws</a></div>\n    <div class=\"col-md-4 col-lg-3 col-xl-2 \" ><a class=\"btn btn-warning btn-lg btn-block py-md-5 py-4\" routerLink=\"/api/spelers\">Spelers</a></div>\n    <div class=\"w-100\"></div>\n    <div class=\"col-md-4 col-lg-3 col-xl-2 \" ><a  class=\"btn btn-primary btn-lg btn-block py-md-5 py-4 border border-warning\" routerLink=\"/api/sponsor\">Sponsors</a></div>\n\n</div>\n\n\n\n<router-outlet *ngIf=\"loggedIn\"></router-outlet>\n\n\n<div *ngIf = \"!loggedIn\">\n  <div class=\"row justify-content-center\">\n    <div class=\"col-md-6\">\n      <h2>Login</h2>\n      <form name=\"form\" (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\" novalidate>\n          <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\n              <label for=\"username\">Gebruikersnaam</label>\n              <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required />\n              <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">Gebruikersnaam is vereist</div>\n          </div>\n          <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\n              <label for=\"password\">Paswoord</label>\n              <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\n              <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Paswoord is vereist</div>\n          </div>\n          <div class=\"form-group\">\n              <button [disabled]=\"loading\" class=\"btn btn-primary\">Login</button>\n              <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n          </div>\n          <div *ngIf=\"error\" class=\"alert alert-danger\">{{error}}</div>\n      </form>\n  </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/api/api.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/api/api.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_authentication_service__ = __webpack_require__("../../../../../src/app/user/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ApiComponent = /** @class */ (function () {
    function ApiComponent(changeDetector, location, router, _route, authenticationService, snackBar) {
        this.changeDetector = changeDetector;
        this._route = _route;
        this.authenticationService = authenticationService;
        this.snackBar = snackBar;
        this.isRootRoute = false;
        this.location = "";
        this.loading = false;
        this.error = '';
        this.loggedIn = true;
        this.model = {};
        _route.params.subscribe(function (val) {
        });
        this.route = _route;
        this.router = router;
    }
    ApiComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(function (result) {
            if (result === true) {
                _this.loggedIn = true;
                _this.loading = false;
                // login successful
                //this.router.navigate(['/']);
            }
            else {
                // login failed
                _this.loggedIn = false;
                _this.error = 'Username or password is incorrect';
                _this.loading = false;
            }
        });
    };
    ApiComponent.prototype.logout = function () {
        this.authenticationService.logout();
        this.loggedIn = false;
    };
    ApiComponent.prototype.ngOnInit = function () {
        console.log(localStorage.getItem('currentUser'));
        if (localStorage.getItem('currentUser')) {
            if (this.authenticationService.tokenIsNotExpired()) {
                this.loggedIn = true;
            }
            else {
                this.loggedIn = false;
            }
        }
        else {
            this.loggedIn = false;
        }
    };
    ApiComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-api',
            template: __webpack_require__("../../../../../src/app/api/api.component.html"),
            styles: [__webpack_require__("../../../../../src/app/api/api.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"], __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__user_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MatSnackBar */]])
    ], ApiComponent);
    return ApiComponent;
}());



/***/ }),

/***/ "../../../../../src/app/api/dialog/delete-dialog.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeleteDialogService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__delete_delete_dialog_component__ = __webpack_require__("../../../../../src/app/api/dialog/delete/delete-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DeleteDialogService = /** @class */ (function () {
    function DeleteDialogService(dialog) {
        this.dialog = dialog;
    }
    DeleteDialogService.prototype.confirm = function (title, message) {
        var dialogRef;
        dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_1__delete_delete_dialog_component__["a" /* DeleteDialog */]);
        dialogRef.componentInstance.title = title;
        dialogRef.componentInstance.message = message;
        return dialogRef.afterClosed();
    };
    DeleteDialogService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MatDialog */]])
    ], DeleteDialogService);
    return DeleteDialogService;
}());



/***/ }),

/***/ "../../../../../src/app/api/dialog/delete/delete-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" style=\"width: 18rem;\">\r\n  <div class=\"card-body\">\r\n    <h5 mat-dialog-title class=\"card-title\">{{title}}</h5>\r\n    <p  mat-dialog-content class=\"card-text mb-4\">{{message}}</p>\r\n    <button class=\"btn btn-danger\" mat-dialog-close=\"delete\">Verwijder</button>\r\n    <button class=\"btn btn-secondary\" mat-dialog-close='cancel'>Annuleer</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/api/dialog/delete/delete-dialog.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/api/dialog/delete/delete-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeleteDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DeleteDialog = /** @class */ (function () {
    function DeleteDialog(dialogRef) {
        this.dialogRef = dialogRef;
    }
    DeleteDialog.prototype.delete = function () {
        return true;
    };
    DeleteDialog = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'delete-dialog',
            template: __webpack_require__("../../../../../src/app/api/dialog/delete/delete-dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/api/dialog/delete/delete-dialog.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_material__["b" /* MatDialogRef */]])
    ], DeleteDialog);
    return DeleteDialog;
}());



/***/ }),

/***/ "../../../../../src/app/api/events/edit-event/edit-event.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  edit-event works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/api/events/edit-event/edit-event.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/api/events/edit-event/edit-event.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditEventComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EditEventComponent = /** @class */ (function () {
    function EditEventComponent() {
    }
    EditEventComponent.prototype.ngOnInit = function () {
    };
    EditEventComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-event',
            template: __webpack_require__("../../../../../src/app/api/events/edit-event/edit-event.component.html"),
            styles: [__webpack_require__("../../../../../src/app/api/events/edit-event/edit-event.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EditEventComponent);
    return EditEventComponent;
}());



/***/ }),

/***/ "../../../../../src/app/api/events/event-detail/event-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  event-detail works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/api/events/event-detail/event-detail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/api/events/event-detail/event-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EventDetailComponent = /** @class */ (function () {
    function EventDetailComponent() {
    }
    EventDetailComponent.prototype.ngOnInit = function () {
    };
    EventDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-event-detail',
            template: __webpack_require__("../../../../../src/app/api/events/event-detail/event-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/api/events/event-detail/event-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EventDetailComponent);
    return EventDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/api/events/event-nieuw/event-nieuw.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  event-nieuw works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/api/events/event-nieuw/event-nieuw.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/api/events/event-nieuw/event-nieuw.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventNieuwComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EventNieuwComponent = /** @class */ (function () {
    function EventNieuwComponent() {
    }
    EventNieuwComponent.prototype.ngOnInit = function () {
    };
    EventNieuwComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-event-nieuw',
            template: __webpack_require__("../../../../../src/app/api/events/event-nieuw/event-nieuw.component.html"),
            styles: [__webpack_require__("../../../../../src/app/api/events/event-nieuw/event-nieuw.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EventNieuwComponent);
    return EventNieuwComponent;
}());



/***/ }),

/***/ "../../../../../src/app/api/events/events.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  events works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/api/events/events.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/api/events/events.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EventsComponent = /** @class */ (function () {
    function EventsComponent() {
    }
    EventsComponent.prototype.ngOnInit = function () {
    };
    EventsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-events',
            template: __webpack_require__("../../../../../src/app/api/events/events.component.html"),
            styles: [__webpack_require__("../../../../../src/app/api/events/events.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EventsComponent);
    return EventsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/api/nieuws/edit-nieuws/edit-nieuws.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"news\">\r\n  <h4 class=\" text-primary text-center\">{{news.titel}} aanpassen</h4>\r\n  <div class=\"row justify-content-center\">\r\n    <form #editNewsForm=\"ngForm\" (ngSubmit)=\"onSubmit()\" class=\"col-xs-12 col-12 col-md-10 col-lg-8 col-xl-6\">\r\n      <div class=\"form-row justify-content-center\">\r\n        <div class=\"col-12 col-md-6 form-group\">\r\n          <label for=\"pos\" class=\"text-primary\">Titel</label>\r\n          <input class=\"form-control\" [ngClass]=\"{'is-valid': pos.valid, 'is-invalid text-danger': pos.invalid}\" [(ngModel)]=\"news.titel\" #pos=\"ngModel\" required name=\"pos\" id=\"pos\" type=\"text\" value=\"\">\r\n          <div class=\"invalid-feedback\">Titel is vereist</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6 col-12\">\r\n          <label for=\"cat\" class=\"text-primary d-block\">Categorie</label>\r\n          <select class=\"form-control\" required [(ngModel)]=\"cat\" name=\"catSelect\" id=\"cat\">\r\n            <option name=\"catOpt\" value=\"2\" checked=\"true\">Club</option>\r\n            <option name=\"catOpt\" value=\"1\">Evenement</option>\r\n            <option name=\"catOpt\" value=\"3\">Jeugd</option>\r\n         </select>\r\n          <div class=\"invalid-feedback\">Categorie is vereist</div>\r\n        </div>\r\n        <div class=\"form-group col-md-6 col-12\" *ngIf=\"cat == 1\">\r\n          <label for=\"birth\" class=\"text-primary\">Datum evenement</label>\r\n          <input class=\"form-control\" bsDatepicker [ngClass]=\"{'is-valid': birth.valid}\" [(ngModel)]=\"news.eventDate\" #birth=\"ngModel\" name=\"birth\" id=\"playerBirth\" value=\"news.eventDate\" type=\"text\">\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"col form-group\">\r\n          <p class=\"text-primary\">\r\n            Bericht\r\n          </p>\r\n          <div [froalaEditor] [(froalaModel)]=\"news.inhoud\" name=\"verslag\" id=\"verslag\"></div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"col-12 col-md-6 form-group\">\r\n          <button class=\"btn btn-success btn-block\" [disabled]=\"!editNewsForm.form.valid || editNewsForm.form.pristine\" type=\"submit\" name=\"action\">Bericht aanpassen\r\n            <i class=\"fa-floppy-o fa\" aria-hidden=\"true\"></i>\r\n        </button>\r\n        </div>\r\n        <div class=\"col-12 col-md-6 form-group\">\r\n          <button class=\"btn-dark btn-block btn\" [routerLink]=\"['/api/nieuws']\"><i class=\"fa fa-angle-double-left\" aria-hidden=\"true\"></i> Alle berichten</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n<div *ngIf=\"!news\">\r\n  <h2 class=\"text-center text-danger\">Bericht niet gevonden</h2>\r\n  <div class=\"row\">\r\n    <div class=\"input-field col m12 s12\">\r\n      <button class=\"btn-dark btn\" [routerLink]=\"['/api/nieuws']\"><i class=\"fa fa-angle-double-left\" aria-hidden=\"true\"></i> Nieuwsoverzicht</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/api/nieuws/edit-nieuws/edit-nieuws.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/api/nieuws/edit-nieuws/edit-nieuws.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditNieuwsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__("../../../../../src/app/app-settings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__nieuws_service__ = __webpack_require__("../../../../../src/app/api/nieuws/nieuws.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EditNieuwsComponent = /** @class */ (function () {
    function EditNieuwsComponent(location, route, router, nieuwsService, snackBar) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.nieuwsService = nieuwsService;
        this.snackBar = snackBar;
        this.froalaOptions = {
            charCounterCount: false,
            imageMaxSize: 1024 * 1024 * 5,
            imageUploadURL: __WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].API_ENDPOINT + 'nieuws/upload',
            videoUpload: false,
            fileUpload: false
        };
        route.params.subscribe(function (p) {
            _this.param = p['id'];
        });
    }
    EditNieuwsComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.news.eventDate && this.cat == 1) {
            this.playDate = new Date(this.news.datum);
            this.news.eventDate = __WEBPACK_IMPORTED_MODULE_4_moment__(this.playDate).format('YYYY-MM-DD HH-mm-ss');
            console.log("datum");
        }
        else {
            this.news.eventDate = null;
            console.log("geen datum");
        }
        var pDate = new Date(this.news.datum);
        this.news.datum = __WEBPACK_IMPORTED_MODULE_4_moment__(pDate).format('YYYY-MM-DD HH-mm-ss');
        this.news.newsType = this.cat;
        console.log(this.news);
        this.nieuwsService.editNieuws(this.news).subscribe(function (res) {
            console.log(res);
            if (res == "OK") {
                _this.snackBar.open(_this.news.titel + " succesvol aangepast. ", "", {
                    duration: 2000
                });
                _this.router.navigate(["../../"], { relativeTo: _this.route, skipLocationChange: true });
            }
        });
    };
    EditNieuwsComponent.prototype.loadNews = function () {
        var _this = this;
        this.nieuwsService.getNieuws(this.param).subscribe(function (news) {
            _this.news = news;
            if (_this.news.newsType == "evenementen") {
                _this.cat = 1;
            }
            else if (_this.news.newsType == "jeugd") {
                _this.cat = 3;
            }
            else {
                _this.cat = 2;
            }
        }, function (err) {
            console.log(err);
        });
    };
    EditNieuwsComponent.prototype.ngOnInit = function () {
        this.loadNews();
    };
    EditNieuwsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-nieuws',
            template: __webpack_require__("../../../../../src/app/api/nieuws/edit-nieuws/edit-nieuws.component.html"),
            styles: [__webpack_require__("../../../../../src/app/api/nieuws/edit-nieuws/edit-nieuws.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* Router */], __WEBPACK_IMPORTED_MODULE_5__nieuws_service__["a" /* NieuwsService */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["d" /* MatSnackBar */]])
    ], EditNieuwsComponent);
    return EditNieuwsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/api/nieuws/nieuws-detail/nieuws-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"news\">\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col col-md-10 col-lg-8\">\r\n      <div class=\"border-info card\">\r\n        <div class=\"card-header  bg-dark\">\r\n          <h4 class=\"display-4 text-center text-secondary\">{{news.titel}}</h4>\r\n          <p class=\"text-right muted text-info\">\r\n            <span>{{news.datum |  amDateFormat:'DD/MM/YYYY'}}</span>\r\n          </p>\r\n        </div>\r\n        <div class=\"card-body text-primary\">\r\n          <div *ngIf=\"news.newsType == 'evenementen'\">\r\n            <p class=\"lead text-dark font-weight-bold\">\r\n              Datum evenement: {{news.eventDate | amDateFormat:'DD/MM/YYYY'}}\r\n            </p>\r\n          </div>\r\n          <div [froalaView]=\"news.inhoud\"></div>\r\n        </div>\r\n        <div class=\"card-footer\">\r\n          <div class=\"row\">\r\n            <div class=\"col\">\r\n              <a routerLink=\"/api/nieuws/nieuws-nieuw\" class=\"btn btn-success btn-block\">Nieuw bericht opmaken</a>\r\n            </div>\r\n            <div class=\"col\">\r\n              <a class=\"btn btn-block btn-info\" routerLink=\"/api/nieuws\"><i class=\"fa fa-angle-double-left\" aria-hidden=\"true\"></i> Alle berichten</a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div *ngIf=\"!news\">\r\n  <h3 class=\"text-center text-danger\">Kon bericht niet vinden</h3>\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-3\">\r\n      <button class=\"btn btn-block btn-dark \" [routerLink]=\"['/api/nieuws']\"><i class=\"fa fa-angle-double-left\" aria-hidden=\"true\"></i> Alle berichten</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/api/nieuws/nieuws-detail/nieuws-detail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/api/nieuws/nieuws-detail/nieuws-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NieuwsDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nieuws_service__ = __webpack_require__("../../../../../src/app/api/nieuws/nieuws.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NieuwsDetailComponent = /** @class */ (function () {
    function NieuwsDetailComponent(location, route, nieuwsService) {
        var _this = this;
        this.route = route;
        this.nieuwsService = nieuwsService;
        route.params.subscribe(function (p) {
            _this.param = p['id'];
        });
    }
    NieuwsDetailComponent.prototype.loadNews = function () {
        var _this = this;
        this.nieuwsService.getNieuws(this.param).subscribe(function (news) {
            _this.news = news;
        }, function (err) {
            console.log(err);
        });
    };
    NieuwsDetailComponent.prototype.ngOnInit = function () {
        this.loadNews();
    };
    NieuwsDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-nieuws-detail',
            template: __webpack_require__("../../../../../src/app/api/nieuws/nieuws-detail/nieuws-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/api/nieuws/nieuws-detail/nieuws-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__nieuws_service__["a" /* NieuwsService */]])
    ], NieuwsDetailComponent);
    return NieuwsDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/api/nieuws/nieuws-nieuw/nieuws-nieuw.component.html":
/***/ (function(module, exports) {

module.exports = "<h4 class=\"text-primary display-4 text-center\">Nieuw bericht/evenement</h4>\r\n<div class=\"row justify-content-center\">\r\n  <form #newNewsForm=\"ngForm\" (ngSubmit)=\"onSubmit()\" class=\"col-xs-12 col-12 col-md-10 col-lg-8 col-xl-6\">\r\n    <div class=\"form-row justify-content-center\">\r\n      <div class=\"col-12 col-md-6 form-group \">\r\n        <label for=\"pos\" class=\"text-primary\">Titel</label>\r\n        <input class=\"form-control\" [ngClass]=\"{'is-valid': pos.valid, 'is-invalid text-danger': pos.invalid}\" [(ngModel)]=\"news.titel\" #pos=\"ngModel\" required name=\"pos\" id=\"pos\" type=\"text\" value=\"\">\r\n        <div class=\"invalid-feedback\">Titel is vereist</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-row\">\r\n      <div class=\"form-group col-md-6 col-12\">\r\n        <label for=\"cat\" class=\"text-primary d-block\">Categorie</label>\r\n        <select class=\"form-control hoverable\" required [(ngModel)]=\"news.newsType\" name=\"catSelect\" id=\"cat\">\r\n           <option name=\"catOpt\" value=\"2\" checked=\"true\">Club</option>\r\n           <option name=\"catOpt\" value=\"1\">Evenement</option>\r\n           <option name=\"catOpt\" value=\"3\">Jeugd</option>\r\n        </select>\r\n        <div class=\"invalid-feedback\">Categorie is vereist</div>\r\n      </div>\r\n      <div class=\"form-group col-md-6 col-12\" *ngIf=\"news.newsType == 1\">\r\n        <label for=\"birth\" class=\"text-primary\">Datum evenement</label>\r\n        <input class=\"form-control\" bsDatepicker [ngClass]=\"{'is-valid': birth.valid}\" [(ngModel)]=\"news.eventDate\" #birth=\"ngModel\" name=\"birth\" id=\"playerBirth\" value=\"news.eventDate\" type=\"text\">\r\n      </div>\r\n    </div>\r\n    <div class=\"form-row\">\r\n      <div class=\"col form-group\">\r\n        <p class=\"text-primary\">\r\n          Bericht\r\n        </p>\r\n        <div [froalaEditor] [(froalaModel)]=\"news.inhoud\" name=\"verslag\" id=\"verslag\"></div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-row\">\r\n      <div class=\"col-12 col-md-6 form-group\">\r\n        <button class=\"btn btn-success btn-block\" [disabled]=\"!newNewsForm.form.valid\" type=\"submit\" name=\"action\">Bericht toevoegen\r\n           <i class=\"fa-floppy-o fa\" aria-hidden=\"true\"></i>\r\n       </button>\r\n      </div>\r\n      <div class=\"col-12 col-md-6 form-group\">\r\n        <button class=\"btn-dark btn-block btn\" [routerLink]=\"['/api/nieuws']\"><i class=\"fa fa-angle-double-left\" aria-hidden=\"true\"></i> Alle berichten</button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/api/nieuws/nieuws-nieuw/nieuws-nieuw.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/api/nieuws/nieuws-nieuw/nieuws-nieuw.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NieuwsNieuwComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_settings__ = __webpack_require__("../../../../../src/app/app-settings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__nieuws_service__ = __webpack_require__("../../../../../src/app/api/nieuws/nieuws.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__nieuws__ = __webpack_require__("../../../../../src/app/api/nieuws/nieuws.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var NieuwsNieuwComponent = /** @class */ (function () {
    function NieuwsNieuwComponent(router, nieuwsService, snackBar) {
        this.router = router;
        this.nieuwsService = nieuwsService;
        this.snackBar = snackBar;
        this.news = new __WEBPACK_IMPORTED_MODULE_5__nieuws__["a" /* Nieuws */](0, "", "", "", "", 2);
        this.froalaOptions = {
            charCounterCount: false,
            imageMaxSize: 1024 * 1024 * 5,
            imageUploadURL: __WEBPACK_IMPORTED_MODULE_2__app_settings__["a" /* AppSettings */].API_ENDPOINT + 'nieuws/upload',
            videoUpload: false,
            fileUpload: false
        };
    }
    NieuwsNieuwComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.news.eventDate && this.news.newsType == 1) {
            this.playDate = new Date(this.news.eventDate);
            this.news.eventDate = __WEBPACK_IMPORTED_MODULE_3_moment__(this.playDate).format('YYYY-MM-DD HH-mm-ss');
        }
        else {
            this.news.eventDate = null;
        }
        this.news.datum = __WEBPACK_IMPORTED_MODULE_3_moment__().format('YYYY-MM-DD HH-mm-ss');
        console.log(this.news);
        this.nieuwsService.addNewNieuws(this.news).subscribe(function (res) {
            if (res == "OK") {
                _this.snackBar.open(_this.news.titel + " succesvol aangemaakt. ", "", {
                    duration: 2000
                });
                _this.router.navigateByUrl('/api/nieuws').then(function () {
                    location.reload();
                });
            }
        });
    };
    NieuwsNieuwComponent.prototype.ngOnInit = function () {
    };
    NieuwsNieuwComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-nieuws-nieuw',
            template: __webpack_require__("../../../../../src/app/api/nieuws/nieuws-nieuw/nieuws-nieuw.component.html"),
            styles: [__webpack_require__("../../../../../src/app/api/nieuws/nieuws-nieuw/nieuws-nieuw.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* Router */], __WEBPACK_IMPORTED_MODULE_4__nieuws_service__["a" /* NieuwsService */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["d" /* MatSnackBar */]])
    ], NieuwsNieuwComponent);
    return NieuwsNieuwComponent;
}());



/***/ }),

/***/ "../../../../../src/app/api/nieuws/nieuws.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"route.children.length === 0\">\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-md-10 \">\r\n      <div class=\"row justify-content-center mb-3\">\r\n        <div class=\"col-md-8 col-lg-6 col-xl-4\">\r\n          <a routerLink=\"/api/nieuws/nieuws-nieuw\" class=\"btn-lg  btn-outline-success btn-block btn\">Nieuw evenement/bericht maken</a>\r\n        </div>\r\n      </div>\r\n      <div class=\"card border-info\">\r\n        <div class=\"card-header bg-dark text-info\">\r\n          <h3 class=\"klingeApp-text text-orange\">Nieuws/evenementen</h3>\r\n        </div>\r\n        <div class=\"card-body text-primary\">\r\n          <div class=\"row justify-content-center\">\r\n            <div *ngIf=\"nieuws != null\" class=\"col col-md-10 col-lg-8 col-xl-6\">\r\n              <input class=\"form-control\" (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Zoek\">\r\n            </div>\r\n          </div>\r\n          <div class=\"row mt-4\">\r\n            <mat-table class=\"table table-bordered table-hover\" #table [dataSource]=\"nieuws\" matSort>\r\n              <ng-container matColumnDef=\"datum\">\r\n                <mat-header-cell class=\"tableHeader \" *matHeaderCellDef mat-sort-header> Datum </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\" class=\"text-primary \"> <a class=\"apiLink\" [routerLink]=\"['/api/nieuws/nieuws-detail', element.nieuws_id]\"> {{element.datum | amDateFormat:'DD-MM-YYYY'}} </a></mat-cell>\r\n              </ng-container>\r\n              <ng-container matColumnDef=\"titel\">\r\n                <mat-header-cell class=\"tableHeader \" *matHeaderCellDef mat-sort-header> Titel </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\" class=\"text-primary \"> {{element.titel}} </mat-cell>\r\n              </ng-container>\r\n              <ng-container matColumnDef=\"newsType\">\r\n                <mat-header-cell class=\"tableHeader \" *matHeaderCellDef mat-sort-header> Category </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\" class=\"text-primary \"> {{element.newsType}} </mat-cell>\r\n              </ng-container>\r\n              <ng-container matColumnDef=\"edit\">\r\n                <mat-header-cell class=\"tableHeader text-center\" *matHeaderCellDef> Aanpassen </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\" class=\"text-center\"> <a [routerLink]=\"['/api/nieuws/nieuws-edit', element.nieuws_id]\" class=\"text-primary hoverable\"><i class=\"material-icons\">edit</i></a> </mat-cell>\r\n              </ng-container>\r\n              <ng-container matColumnDef=\"del\">\r\n                <mat-header-cell class=\"tableHeader text-center\" *matHeaderCellDef> Verwijderen </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\" class=\"text-center\"> <a (click)=\"deleteNieuws(element.nieuws_id, element.titel)\" class=\"text-danger hoverable\"><i class=\"material-icons\">delete</i></a> </mat-cell>\r\n              </ng-container>\r\n              <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n              <mat-row class=\"table-info\" *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n            </mat-table>\r\n            <mat-paginator #paginator [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 20]\">\r\n            </mat-paginator>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-footer \"> <a routerLink=\"/api/nieuws/nieuws-nieuw\" class=\"btn btn-success \">Nieuw bericht/evenement maken</a> <a class=\"float-sm-right btn btn-dark\" routerLink=\"/api\"><i class=\"fa fa-angle-double-left\" aria-hidden=\"true\"></i> Overzicht</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/api/nieuws/nieuws.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/api/nieuws/nieuws.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NieuwsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nieuws_service__ = __webpack_require__("../../../../../src/app/api/nieuws/nieuws.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_merge__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dialog_delete_dialog_service__ = __webpack_require__("../../../../../src/app/api/dialog/delete-dialog.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var NieuwsComponent = /** @class */ (function () {
    function NieuwsComponent(activeRoute, nieuwsService, dialogsService, snackBar) {
        this.nieuwsService = nieuwsService;
        this.dialogsService = dialogsService;
        this.snackBar = snackBar;
        this.displayedColumns = ['datum', 'titel', 'newsType', 'edit', 'del'];
        this.nieuws = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MatTableDataSource */]([]);
        this.route = activeRoute;
        console.log("constructor called");
    }
    NieuwsComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.nieuws.filter = filterValue;
    };
    NieuwsComponent.prototype.deleteNieuws = function (id, titel) {
        var _this = this;
        this.dialogsService
            .confirm('Verwijder ' + titel, 'Ben je zeker dat je ' + titel + ' wilt verwijderen?')
            .subscribe(function (res) {
            if (res === "delete") {
                _this.nieuwsService.deleteNieuws(id).subscribe(function (res) {
                    if (res == true) {
                        _this.snackBar.open(titel + " succesvol verwijderd", "", {
                            duration: 2000
                        });
                        _this.loadNieuws();
                    }
                });
            }
        });
    };
    NieuwsComponent.prototype.loadNieuws = function () {
        var _this = this;
        this.nieuwsService.getNieuwsAll().subscribe(function (nieuws) {
            if (nieuws) {
                _this.nieuws = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MatTableDataSource */](nieuws);
                _this.nieuws.sort = _this.sort;
                _this.nieuws.paginator = _this.paginator;
            }
        }, function (err) {
            console.log(err);
        });
    };
    NieuwsComponent.prototype.ngOnInit = function () {
        this.loadNieuws();
        console.log("ngInit called");
    };
    /**
     * Set the sort after the view init since this component will
     * be able to query its view for the initialized sort.
     */
    NieuwsComponent.prototype.ngAfterViewInit = function () {
        if (this.nieuws) {
            this.nieuws.sort = this.sort;
            this.nieuws.paginator = this.paginator;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MatSort */])
    ], NieuwsComponent.prototype, "sort", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MatPaginator */])
    ], NieuwsComponent.prototype, "paginator", void 0);
    NieuwsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-nieuws',
            template: __webpack_require__("../../../../../src/app/api/nieuws/nieuws.component.html"),
            styles: [__webpack_require__("../../../../../src/app/api/nieuws/nieuws.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__nieuws_service__["a" /* NieuwsService */], __WEBPACK_IMPORTED_MODULE_7__dialog_delete_dialog_service__["a" /* DeleteDialogService */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MatSnackBar */]])
    ], NieuwsComponent);
    return NieuwsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/api/nieuws/nieuws.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NieuwsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_settings__ = __webpack_require__("../../../../../src/app/app-settings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_authentication_service__ = __webpack_require__("../../../../../src/app/user/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var NieuwsService = /** @class */ (function () {
    function NieuwsService(http, authenticationService) {
        this.http = http;
        this.authenticationService = authenticationService;
        this.nieuwsURL = __WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* AppSettings */].API_ENDPOINT + '/nieuws';
        this.eventsURL = __WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* AppSettings */].API_ENDPOINT + '/events';
    }
    NieuwsService.prototype.getNieuwsAll = function () {
        return this.http.get(this.nieuwsURL)
            .map(this.extractData)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    NieuwsService.prototype.extractData = function (result) {
        return result.json().map(function (nieuws) {
            return {
                nieuws_id: nieuws.nieuws_id,
                titel: nieuws.titel,
                inhoud: nieuws.inhoud,
                datum: nieuws.datum,
                newsType: nieuws.newsType,
                eventDate: nieuws.eventDate
            };
        });
    };
    NieuwsService.prototype.editNieuws = function (nieuws) {
        var bodyString = JSON.stringify(nieuws); // Stringify payload
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('Authorization', 'Bearer ' + this.authenticationService.token); // ... Set content type to JSON
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers }); // Create a request option
        console.log(options);
        return this.http.put(this.nieuwsURL + "/" + nieuws['nieuws_id'], nieuws, options) // ...using put request
            .map(function (res) { return res.statusText; }) // ...and calling .json() on the response to return data
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); }); //...errors if any
    };
    NieuwsService.prototype.addNewNieuws = function (nieuws) {
        var bodyString = JSON.stringify(nieuws); // Stringify payload
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        headers.append('Authorization', 'Bearer ' + this.authenticationService.token);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers }); // Create a request option
        return this.http.post(this.nieuwsURL, nieuws, options) // ...using post request
            .map(function (res) { return res.statusText; }); // ...and calling .json() on the response to return data
    };
    NieuwsService.prototype.deleteNieuws = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('Authorization', 'Bearer ' + this.authenticationService.token); // ... Set content type to JSON
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers }); // Create a request option
        return this.http.delete(this.nieuwsURL + "/" + id, options) // ...using put request
            .map(function (res) { return res.json(); }) // ...and calling .json() on the response to return data
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); }); //...errors if any
    };
    NieuwsService.prototype.getNieuws = function (id) {
        return this.http.get(this.nieuwsURL + "/" + id)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    NieuwsService.prototype.getUpcomingEvents = function () {
        return this.http.get(this.eventsURL + "/upcoming")
            .map(this.extractData)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    NieuwsService.prototype.getUpcomingEventsAll = function () {
        return this.http.get(this.eventsURL + "/upcomingAll")
            .map(this.extractData)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    NieuwsService.prototype.getPastEvents = function () {
        return this.http.get(this.eventsURL + "/pastLastYear")
            .map(this.extractData)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    NieuwsService.prototype.getLatestNews = function () {
        return this.http.get(this.nieuwsURL + "/latest")
            .map(this.extractData)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    NieuwsService.prototype.getNewsYouth = function () {
        return this.http.get(this.nieuwsURL + "/jeugd")
            .map(this.extractData)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    NieuwsService.prototype.getNewsClub = function () {
        return this.http.get(this.nieuwsURL + "/club")
            .map(this.extractData)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    NieuwsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_6__user_authentication_service__["a" /* AuthenticationService */]])
    ], NieuwsService);
    return NieuwsService;
}());



/***/ }),

/***/ "../../../../../src/app/api/nieuws/nieuws.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Nieuws; });
var Nieuws = /** @class */ (function () {
    function Nieuws(nieuws_id, titel, inhoud, datum, eventDate, newsType) {
        this.nieuws_id = nieuws_id;
        this.titel = titel;
        this.inhoud = inhoud;
        this.datum = datum;
        this.eventDate = eventDate;
        this.newsType = newsType;
    }
    return Nieuws;
}());



/***/ }),

/***/ "../../../../../src/app/api/ploegen/edit-ploeg/edit-ploeg.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"team\">\r\n  <h3 class=\"text-dark text-center\">Ploeg {{team.naam}} aanpassen</h3>\r\n  <div class=\"row justify-content-center\">\r\n    <form #editTeamForm=\"ngForm\" (ngSubmit)=\"onSubmit()\" class=\"col-xs-12 col-12 col-md-10 col-lg-8 col-xl-6\">\r\n      <div class=\"form-row justify-content-center\">\r\n        <div class=\"col-12 col-md-6 form-group\">\r\n          <label for=\"teamName\" class=\"text-primary\">Ploegnaam</label>\r\n          <input class=\"form-control\" [ngClass]=\"{'is-valid': naam.valid, 'text-danger is-invalid': naam.invalid}\" [(ngModel)]=\"team.naam\" #naam=\"ngModel\" name=\"naam\" required id=\"teamName\" type=\"text\" value=\"team.naam\">\r\n          <div class=\"invalid-feedback\">Ploegnaam is vereist</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row align-items-center\">\r\n        <div class=\"col-12 col-md-6 form-group\" *ngIf=\"src\">\r\n          <div class=\"row justify-content-center\">\r\n            <div class=\"col-8\">\r\n              <img class=\"img-fluid\" [src]=\"src\">\r\n            </div>\r\n          </div>\r\n          <div class=\"w-100\"></div>\r\n          <div class=\"col-12\" *ngIf=\"uploader.progress > 0\">\r\n            <progressbar class=\"progress active\" [value]=\"uploader.progress\" [max]=\"100\" type=\"success\"></progressbar>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-12 col-md-6 form-group\">\r\n          <span class=\"text-primary\" *ngIf=\"src\">Nieuwe foto uploaden</span>\r\n          <span class=\"text-primary\" *ngIf=\"!src\">Foto uploaden</span>\r\n          <input type=\"file\" class=\"form-control-file\" id=\"validatedCustomFile\" imageUpload (imageSelected)=\"selected($event)\" [resizeOptions]=\"resizeOptions\" ng2FileSelect [uploader]=\"uploader\" name=\"photoUpload\" (click)=\"uploader.clearQueue()\" (change)=\"checkImage()\"\r\n          />\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"col-12 col-md-6 form-group\">\r\n          <label for=\"trainer_1\" class=\"text-primary\">Naam trainer</label>\r\n          <input class=\"form-control\" placeholder=\"Naam trainer\" [ngClass]=\"{'is-valid': trainer_1.valid}\" [(ngModel)]=\"team.trainer_1\" #trainer_1=\"ngModel\" name=\"trainer_1\" id=\"trainer_1\" type=\"text\" value=\"\"> </div>\r\n        <div class=\"col-12 col-md-6 form-group\">\r\n          <label for=\"telTrainer_1\" class=\"text-primary\">Telefoon trainer</label>\r\n          <input class=\"form-control\" placeholder=\"Telefoon trainer\" [ngClass]=\"{'is-valid': telTrainer_1.valid}\" [(ngModel)]=\"team.telTrainer_1\" #telTrainer_1=\"ngModel\" name=\"telTrainer_1\" id=\"telTrainer_1\" type=\"text\" value=\"\"> </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"col-12 col-md-6 form-group\">\r\n          <label for=\"trainer_2\" class=\"text-primary\">Naam trainer(2)</label>\r\n          <input class=\"form-control\" placeholder=\"Naam trainer(2)\" [ngClass]=\"{'is-valid': trainer_2.valid}\" [(ngModel)]=\"team.trainer_2\" #trainer_2=\"ngModel\" name=\"trainer_2\" id=\"trainer_2\" type=\"text\" value=\"\"> </div>\r\n        <div class=\"col-12 col-md-6 form-group\">\r\n          <label for=\"telTrainer_2\" class=\"text-primary\">Telefoon trainer(2)</label>\r\n          <input class=\"form-control\" placeholder=\"Telefoon trainer(2)\" [ngClass]=\"{'is-valid': telTrainer_2.valid}\" [(ngModel)]=\"team.telTrainer_2\" #telTrainer_2=\"ngModel\" name=\"telTrainer_2\" id=\"telTrainer_2\" type=\"text\" value=\"\"> </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"col-12 col-md-6 form-group\">\r\n          <label for=\"mailTrainer_1\" class=\"text-primary\">Email trainer</label>\r\n          <input class=\"form-control\" placeholder=\"Email trainer\" [ngClass]=\"{'is-valid': mailTrainer_1.valid}\" [(ngModel)]=\"team.mailTrainer_1\" #mailTrainer_1=\"ngModel\" name=\"mailTrainer_1\" id=\"mailTrainer_1\" type=\"text\" value=\"\">\r\n        </div>\r\n        <div class=\"col-12 col-md-6 form-group\">\r\n          <label for=\"mailTrainer_2\" class=\"text-primary\">Email trainer(2)</label>\r\n          <input class=\"form-control\" placeholder=\"Email trainer(2)\" [ngClass]=\"{'is-valid': mailTrainer_2.valid}\" [(ngModel)]=\"team.mailTrainer_2\" #mailTrainer_2=\"ngModel\" name=\"mailTrainer_2\" id=\"mailTrainer_2\" type=\"text\" value=\"\">\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"col-12 col-md-6 form-group\">\r\n          <label for=\"trainingsdagen\" class=\"text-primary\">Trainingsdagen</label>\r\n          <input class=\"form-control\" placeholder=\"Trainingsdagen (bv dinsdag en donderdag)\" [ngClass]=\"{'is-valid': trainingsdagen.valid}\" [(ngModel)]=\"team.trainingsdagen\" #trainingsdagen=\"ngModel\" name=\"trainingsdagen\" id=\"trainingsdagen\" type=\"text\" value=\"\">          </div>\r\n        <div class=\"col-12 col-md-6 form-group\">\r\n          <label for=\"trainingsuur\" class=\"text-primary\">Aanvangsuur training</label>\r\n          <timepicker [(ngModel)]=\"time\" [showMeridian]=\"false\" name=\"trainingsuur\" id=\"trainingsuur\"></timepicker>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"col-12 col-md-6 form-group\">\r\n          <label for=\"sponsorSelect\" class=\"text-primary d-block\">Sponsor</label>\r\n          <select class=\"form-control\" [(ngModel)]=\"team.sponsor_id\" name=\"sponsorSelectName\" id=\"sponsorSelect\">\r\n           <option *ngFor=\"let sponsor of sponsors\" name=\"sponsor\" [ngValue]=\"sponsor.sponsor_id\">{{sponsor.naam}}</option>\r\n         </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row justify-content-center\">\r\n        <div class=\"col-12 col-md-6 form-group\">\r\n          <div class=\"btn-group\">\r\n            <button class=\"btn btn-success\" [disabled]=\"!editTeamForm.form.valid || (!editTeamForm.form.dirty && newPick==false)\" type=\"submit\" name=\"action\">Wijzigingen opslaan  <i class=\"fa-floppy-o fa\" aria-hidden=\"true\"></i></button>\r\n            <button class=\"btn-dark btn\" [routerLink]=\"['/api/ploegen']\"><i class=\"fa fa-angle-double-left\" aria-hidden=\"true\"></i> Ploegenoverzicht</button>\r\n            <button class=\"btn-info btn\" [routerLink]=\"['/api/ploegen/ploeg-detail', team.ploeg_id]\">Detail {{team.naam}}</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n<div *ngIf=\"!team\">\r\n  <h2 class=\"text-center text-danger\">Ploeg niet gevonden</h2>\r\n  <div class=\"row\">\r\n    <div class=\"input-field col m12 s12\">\r\n      <button class=\"btn-dark btn\" [routerLink]=\"['/api/ploegen']\"><i class=\"fa fa-angle-double-left\" aria-hidden=\"true\"></i> Ploegenoverzicht</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/api/ploegen/edit-ploeg/edit-ploeg.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/api/ploegen/edit-ploeg/edit-ploeg.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditPloegComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ploegen_service__ = __webpack_require__("../../../../../src/app/api/ploegen/ploegen.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_settings__ = __webpack_require__("../../../../../src/app/app-settings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sponsor_sponsor_service__ = __webpack_require__("../../../../../src/app/api/sponsor/sponsor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__user_authentication_service__ = __webpack_require__("../../../../../src/app/user/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var EditPloegComponent = /** @class */ (function () {
    function EditPloegComponent(location, authenticationService, router, activeRoute, sponsorSvc, ploegService, snackBar) {
        var _this = this;
        this.authenticationService = authenticationService;
        this.router = router;
        this.activeRoute = activeRoute;
        this.sponsorSvc = sponsorSvc;
        this.ploegService = ploegService;
        this.snackBar = snackBar;
        this.edited = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.imgSync = true;
        this.src = "";
        this.sizeLimit = 5;
        this.newPick = false;
        this.resizeOptions = {
            resizeMaxHeight: 200,
            resizeMaxWidth: 200
        };
        activeRoute.params.subscribe(function (p) {
            _this.param = p['id'];
        });
        this.uploader = new __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload__["FileUploader"]({
            url: __WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* AppSettings */].API_ENDPOINT + 'ploegen/upload',
            authToken: 'Bearer ' + this.authenticationService.token
        });
        this.uploaderOptions = {
            allowedMimeType: ['image/png', 'image/jpg', 'image/jpeg'],
            removeAfterUpload: true
        };
        this.uploader.onSuccessItem = function (item, response, status, headers) {
            if (status == 200) {
                console.log("success");
                response = response.replace(/\"/g, "");
                _this.src = "assets/uploads/images/ploegen/" + response;
                _this.team.fotoUrl = _this.src;
                _this.ploegService.editTeam(_this.team).subscribe(function (res) {
                    if (res == "OK") {
                        _this.snackBar.open("Ploeg " + _this.team.naam + "succesvol aangepast.", "", {
                            duration: 2000
                        });
                        _this.router.navigateByUrl('/api/ploegen');
                    }
                });
            }
        };
        this.uploader.onErrorItem = function (item, response, status, headers) {
            console.log("error");
            _this.src = "";
            _this.ploegService.editTeam(_this.team).subscribe(function (res) {
                if (res == "OK") {
                    _this.snackBar.open("Ploeg " + _this.team.naam + "succesvol aangepast.", "", {
                        duration: 2000
                    });
                    _this.router.navigateByUrl('/api/ploegen');
                }
            });
        };
    }
    EditPloegComponent.prototype.selected = function (imageResult) {
        this.src = imageResult.resized
            && imageResult.resized.dataURL
            || imageResult.dataURL;
        if (this.imgSync == false) {
            this.src = "";
        }
    };
    EditPloegComponent.prototype.checkImage = function () {
        this.newPick = true;
        this.imgSync = true;
        if (this.uploader.queue.length != 1) {
            alert("geen foto toegevoegd");
            this.imgSync = false;
            this.newPick = false;
        }
        for (var _i = 0, _a = this.uploader.queue; _i < _a.length; _i++) {
            var img = _a[_i];
            if (img.file.size / 1024 / 1024 > this.sizeLimit) {
                alert("File te groot");
                this.imgSync = false;
                this.newPick = false;
                this.uploader.clearQueue();
            }
            else if (img.file.type != "image/png" && img.file.type != "image/jpg" && img.file.type != "image/jpeg") {
                alert("Geen afbeelding");
                this.uploader.clearQueue();
                this.imgSync = false;
                this.newPick = false;
            }
        }
    };
    EditPloegComponent.prototype.onSubmit = function () {
        var _this = this;
        this.team.trainingsuur = this.time.getHours() + ":" + this.time.getMinutes() + ":" + this.time.getSeconds();
        if (this.uploader.getNotUploadedItems().length) {
            this.uploader.uploadAll();
        }
        else {
            this.ploegService.editTeam(this.team).subscribe(function (res) {
                console.log("no upload");
                if (res == "OK") {
                    _this.snackBar.open("Ploeg " + _this.team.naam + "succesvol aangepast.", "", {
                        duration: 2000
                    });
                    _this.router.navigateByUrl('/api/ploegen');
                }
            });
        }
    };
    EditPloegComponent.prototype.loadPloeg = function () {
        var _this = this;
        this.ploegService.getPloeg(this.param).subscribe(function (ploeg) {
            var t;
            var s;
            var d;
            _this.team = ploeg;
            _this.src = ploeg.fotoUrl;
            t = ploeg.trainingsuur;
            if (t) {
                d = new Date();
                s = d.getMonth() + 1 + "/" + d.getDate() + "/" + d.getFullYear() + " " + t;
                _this.time = new Date(s);
            }
        }, function (err) {
            console.log(err);
        });
    };
    EditPloegComponent.prototype.loadSponsors = function () {
        var _this = this;
        this.sponsorSvc.getSponsors().subscribe(function (sponsors) {
            _this.sponsors = sponsors;
        }, function (err) {
            console.log(err);
        });
    };
    EditPloegComponent.prototype.ngOnInit = function () {
        this.loadPloeg();
        this.loadSponsors();
        this.uploader.onAfterAddingFile = function (file) { file.withCredentials = false; };
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], EditPloegComponent.prototype, "edited", void 0);
    EditPloegComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-ploeg',
            template: __webpack_require__("../../../../../src/app/api/ploegen/edit-ploeg/edit-ploeg.component.html"),
            styles: [__webpack_require__("../../../../../src/app/api/ploegen/edit-ploeg/edit-ploeg.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"], __WEBPACK_IMPORTED_MODULE_8__user_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_7__sponsor_sponsor_service__["a" /* SponsorService */], __WEBPACK_IMPORTED_MODULE_1__ploegen_service__["a" /* PloegenService */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["d" /* MatSnackBar */]])
    ], EditPloegComponent);
    return EditPloegComponent;
}());



/***/ }),

/***/ "../../../../../src/app/api/ploegen/ploeg-detail/ploeg-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!ploeg\">\r\n  <h3 class=\"text-center text-danger\">Ploeg niet gevonden</h3>\r\n</div>\r\n<div *ngIf=\"ploeg\">\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col col-md-10 col-lg-8\">\r\n      <div class=\"border-info\">\r\n        <div class=\"row align-items-center\">\r\n          <div class=\"col-12 col-md-4\">\r\n            <img *ngIf=\"ploeg.fotoUrl\" [src]=\"ploeg.fotoUrl\" alt=\"\" class=\"rounded img-fluid\">\r\n            <h2 *ngIf=\"!ploeg.fotoUrl\" class=\"text-center\">Geen foto beschikbaar</h2>\r\n            <!-- notice the \"circle\" class -->\r\n          </div>\r\n          <div class=\"col-12 col-md-8\">\r\n            <h4 class=\"display-4 text-primary text-center mb-2\">{{ploeg.naam}}</h4>\r\n            <ul class=\"list-group\">\r\n              <li *ngIf=\"ploeg.trainer_2 != null\" class=\"list-group-item\"><strong>Trainers: </strong>{{ploeg.trainer_1}} & {{ploeg.trainer_2}}</li>\r\n              <li *ngIf=\"ploeg.trainer_2 == null\" class=\"list-group-item\"><strong>Trainer: </strong>{{ploeg.trainer_1}}</li>\r\n              <li *ngIf=\"ploeg.trainer_2 != null\" class=\"list-group-item\"><strong>Telefoonnummers: </strong>{{ploeg.telTrainer_1}} - {{ploeg.telTrainer_2}}</li>\r\n              <li *ngIf=\"ploeg.trainer_2 == null\" class=\"list-group-item\"><strong>Telefoonnummer: </strong>{{ploeg.telTrainer_2}}</li>\r\n              <li class=\"list-group-item\"><strong>Trainingsdagen: </strong>{{ploeg.trainingsdagen}}</li>\r\n              <li class=\"list-group-item\"><strong>Trainingsuren (begin): </strong>{{time}}</li>\r\n              <li class=\"list-group-item\"><strong>Sponsor: </strong>{{sponsor.naam}}</li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n        <div class=\"row mt-4\">\r\n          <h4 class=\"text-primary display-4 text-center mb-3\">Spelers</h4>\r\n          <table class=\"table table-striped table-hover\">\r\n            <thead class=\"bg-light text-dark\">\r\n              <tr>\r\n                <th scope=\"col\">Naam</th>\r\n                <th scope=\"col\">Geboortedatum</th>\r\n                <th scope=\"col\">Email</th>\r\n                <th class=\"d-none d-lg-table-cell\" scope=\"col\">Telnr</th>\r\n                <th class=\"d-none d-lg-table-cell\" scope=\"col\">Ingeschreven</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody *ngFor=\"let speler of spelers\">\r\n              <tr>\r\n                <td scope=\"row\"><a class=\"apiLink\" [routerLink]=\"['/api/spelers/speler-detail', speler.speler_id]\">{{speler.voornaam}} {{speler.naam}}</a></td>\r\n                <td>{{speler.geboortedatum}}</td>\r\n                <td>{{speler.email}}</td>\r\n                <td class=\"d-none d-lg-table-cell\">{{speler.telefoonnummer}}</td>\r\n                <td class=\"d-none d-lg-table-cell\"><span *ngIf=\"speler.ingeschreven == 1\">Ja</span><span *ngIf=\"speler.ingeschreven == 0\">Nee</span></td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n        <div class=\"row\">\r\n          <a routerLink=\"/api/ploegen/ploeg-nieuw\" class=\"btn btn-success\">Nieuwe ploeg toevoegen</a>\r\n          <a class=\"btn btn-dark\" routerLink=\"/api/ploegen\"><i class=\"fa fa-angle-double-left\" aria-hidden=\"true\"></i> Ploegenoverzicht</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/api/ploegen/ploeg-detail/ploeg-detail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/api/ploegen/ploeg-detail/ploeg-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PloegDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ploegen_service__ = __webpack_require__("../../../../../src/app/api/ploegen/ploegen.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__spelers_spelers_service__ = __webpack_require__("../../../../../src/app/api/spelers/spelers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_merge__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sponsor_sponsor_service__ = __webpack_require__("../../../../../src/app/api/sponsor/sponsor.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var PloegDetailComponent = /** @class */ (function () {
    function PloegDetailComponent(location, route, ploegService, spelersService, sponsorSvc) {
        var _this = this;
        this.ploegService = ploegService;
        this.spelersService = spelersService;
        this.sponsorSvc = sponsorSvc;
        route.params.subscribe(function (p) {
            _this.param = p['id'];
        });
    }
    PloegDetailComponent.prototype.loadSpelers = function () {
        var _this = this;
        this.ploegService.getSpelersByTeam(this.param).subscribe(function (spelers) {
            _this.spelers = spelers;
            console.log(spelers);
        }, function (err) {
            console.log(err);
        });
    };
    PloegDetailComponent.prototype.deletePlayer = function (id, speler, spelerVoornaam) {
        console.log(speler);
    };
    PloegDetailComponent.prototype.loadPloeg = function () {
        var _this = this;
        this.ploegService.getPloeg(this.param).subscribe(function (ploeg) {
            var t;
            _this.ploeg = ploeg;
            t = ploeg.trainingsuur;
            if (t) {
                _this.time = t.substr(0, 5);
            }
            _this.sponsorSvc.getSponsor(_this.ploeg.sponsor_id).subscribe(function (sponsor) {
                _this.sponsor = sponsor;
            });
        }, function (err) {
            console.log(err);
        });
    };
    PloegDetailComponent.prototype.ngOnInit = function () {
        this.loadPloeg();
        this.loadSpelers();
    };
    PloegDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-ploeg-detail',
            template: __webpack_require__("../../../../../src/app/api/ploegen/ploeg-detail/ploeg-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/api/ploegen/ploeg-detail/ploeg-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__ploegen_service__["a" /* PloegenService */], __WEBPACK_IMPORTED_MODULE_4__spelers_spelers_service__["a" /* SpelersService */], __WEBPACK_IMPORTED_MODULE_8__sponsor_sponsor_service__["a" /* SponsorService */]])
    ], PloegDetailComponent);
    return PloegDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/api/ploegen/ploeg-nieuw/ploeg-nieuw.component.html":
/***/ (function(module, exports) {

module.exports = "<h4 class=\"text-primary display-4 text-center\">Nieuwe ploeg toevoegen</h4>\n<div  class=\"row justify-content-center\">\n   <form #newTeamForm=\"ngForm\" (ngSubmit)=\"onSubmit()\" class=\"col-xs-12 col-12 col-md-10 col-lg-8 col-xl-6\">\n     <div class=\"form-row justify-content-center\">\n       <div class=\"col-12 col-md-6 form-group\">\n         <label for=\"teamName\" class=\"text-primary\">Ploegnaam</label>\n         <input class=\"form-control\" [ngClass]=\"{'is-valid': naam.valid, 'text-danger is-invalid': naam.invalid}\" [(ngModel)]=\"team.naam\" #naam=\"ngModel\" name=\"naam\" required id=\"teamName\" type=\"text\" value=\"team.naam\">\n         <div class=\"invalid-feedback\">Ploegnaam is vereist</div>\n       </div>\n     </div>\n     <div class=\"form-row\">\n       <div class=\"col-12 col-md-6 form-group\">\n         <label for=\"trainer_1\"  class=\"text-primary\">Naam trainer</label>\n         <input  class=\"form-control\" placeholder=\"Naam trainer\" [ngClass]=\"{'is-valid': trainer_1.valid}\" [(ngModel)]=\"team.trainer_1\" #trainer_1=\"ngModel\" name=\"trainer_1\" id=\"trainer_1\" type=\"text\" value=\"\">\n       </div>\n       <div class=\"col-12 col-md-6 form-group\">\n         <label for=\"trainer_2\"  class=\"text-primary\">Naam trainer(2)</label>\n         <input class=\"form-control\" placeholder=\"Naam trainer(2)\" [ngClass]=\"{'is-valid': trainer_2.valid}\" [(ngModel)]=\"team.trainer_2\" #trainer_2=\"ngModel\" name=\"trainer_2\" id=\"trainer_2\" type=\"text\" value=\"\">\n       </div>\n     </div>\n     <div class=\"form-row\">\n       <div class=\"col-12 col-md-6 form-group\">\n         <label for=\"telTrainer_1\" class=\"text-primary\">Telefoon trainer</label>\n         <input class=\"form-control\" placeholder=\"Telefoon trainer\" [ngClass]=\"{'is-valid': telTrainer_1.valid}\" [(ngModel)]=\"team.telTrainer_1\" #telTrainer_1=\"ngModel\" name=\"telTrainer_1\" id=\"telTrainer_1\" type=\"text\" value=\"\">\n       </div>\n       <div class=\"col-12 col-md-6 form-group\">\n         <label for=\"telTrainer_2\" class=\"text-primary\">Telefoon trainer(2)</label>\n         <input class=\"form-control\" placeholder=\"Telefoon trainer(2)\" [ngClass]=\"{'is-valid': telTrainer_2.valid}\" [(ngModel)]=\"team.telTrainer_2\" #telTrainer_2=\"ngModel\" name=\"telTrainer_2\" id=\"telTrainer_2\" type=\"text\" value=\"\">\n       </div>\n     </div>\n     <div class=\"form-row\">\n       <div class=\"col-12 col-md-6 form-group\">\n         <label for=\"mailTrainer_1\" class=\"text-primary\">Email trainer</label>\n         <input class=\"form-control\" placeholder=\"Email trainer\" [ngClass]=\"{'is-valid': mailTrainer_1.valid}\" [(ngModel)]=\"team.mailTrainer_1\" #mailTrainer_1=\"ngModel\" name=\"mailTrainer_1\" id=\"mailTrainer_1\" type=\"text\" value=\"\">\n       </div>\n       <div class=\"col-12 col-md-6 form-group\">\n         <label for=\"mailTrainer_2\" class=\"text-primary\">Email trainer(2)</label>\n         <input class=\"form-control\" placeholder=\"Email trainer(2)\" [ngClass]=\"{'is-valid': mailTrainer_2.valid}\" [(ngModel)]=\"team.mailTrainer_2\" #mailTrainer_2=\"ngModel\" name=\"mailTrainer_2\" id=\"mailTrainer_2\" type=\"text\" value=\"\">\n       </div>\n     </div>\n     <div class=\"form-row\">\n       <div class=\"col-12 col-md-6 form-group\">\n         <label for=\"trainingsdagen\"  class=\"text-primary\">Trainingsdagen</label>\n         <input class=\"form-control\" placeholder=\"Trainingsdagen (bv dinsdag en donderdag)\" [ngClass]=\"{'is-valid': trainingsdagen.valid}\" [(ngModel)]=\"team.trainingsdagen\" #trainingsdagen=\"ngModel\" name=\"trainingsdagen\" id=\"trainingsdagen\" type=\"text\" value=\"\">\n       </div>\n       <div class=\"col-12 col-md-6 form-group\">\n           <label for=\"trainingsuur\"  class=\"text-primary\">Aanvangsuur training</label>\n           <timepicker [(ngModel)]=\"time\" [showMeridian]=\"false\" name=\"trainingsuur\" id=\"trainingsuur\"></timepicker>\n       </div>\n     </div>\n     <div class=\"form-row\">\n       <div class=\"col-12 col-md-6 form-group\">\n         <label for=\"sponsorSelect\" class=\"text-primary d-block\">Sponsor</label>\n         <select class=\"form-control\" [(ngModel)]=\"team.sponsor_id\"  name=\"sponsorSelectName\" id=\"sponsorSelect\">\n          <option *ngFor=\"let sponsor of sponsors\" name=\"sponsor\" [ngValue]=\"sponsor.sponsor_id\">{{sponsor.naam}}</option>\n        </select>\n       </div>\n     </div>\n     <div class=\"form-row align-items-center\">\n       <div class=\"col-12 col-md-6 form-group\">\n         <span class=\"text-primary\" *ngIf=\"src\">Nieuwe foto uploaden</span>\n         <span class=\"text-primary\" *ngIf=\"!src\">Foto uploaden</span>\n         <input type=\"file\" class=\"form-control-file\" id=\"validatedCustomFile\" imageUpload (imageSelected)=\"selected($event)\" [resizeOptions]=\"resizeOptions\" ng2FileSelect [uploader]=\"uploader\" name=\"photoUpload\" (click)=\"uploader.clearQueue()\" (change)=\"checkImage()\"\n         />\n       </div>\n       <div class=\"col-12 col-md-6 form-group\">\n         <div class=\"row justify-content-center\" *ngIf=\"src\">\n           <div class=\"col-8\">\n             <img class=\"img-fluid\" [src]=\"src\">\n           </div>\n         </div>\n         <div class=\"w-100\"></div>\n         <div class=\"col-12\" *ngIf=\"uploader.progress > 0\">\n           <progressbar class=\"progress active\" [value]=\"uploader.progress\" [max]=\"100\" type=\"success\"></progressbar>\n         </div>\n       </div>\n     </div>\n     <div class=\"form-row justify-content-center\">\n      <div class=\"col-12 col-md-6 form-group\">\n        <div class=\"btn-group\">\n        <button class=\"btn btn-success\" [disabled]=\"!newTeamForm.form.valid\" type=\"submit\" name=\"action\">Nieuwe ploeg aanmaken\n            <i class=\"fa-floppy-o fa\" aria-hidden=\"true\"></i>\n        </button>\n        <button class=\"btn btn-dark\" routerLink=\"/api/ploegen\"><i class=\"fa fa-angle-double-left\" aria-hidden=\"true\"></i> Ploegenoverzicht</button>\n      </div>\n      </div>\n     </div>\n   </form>\n </div>\n"

/***/ }),

/***/ "../../../../../src/app/api/ploegen/ploeg-nieuw/ploeg-nieuw.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/api/ploegen/ploeg-nieuw/ploeg-nieuw.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PloegNieuwComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ploeg__ = __webpack_require__("../../../../../src/app/api/ploegen/ploeg.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ploegen_service__ = __webpack_require__("../../../../../src/app/api/ploegen/ploegen.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_settings__ = __webpack_require__("../../../../../src/app/app-settings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sponsor_sponsor_service__ = __webpack_require__("../../../../../src/app/api/sponsor/sponsor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__user_authentication_service__ = __webpack_require__("../../../../../src/app/user/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var PloegNieuwComponent = /** @class */ (function () {
    function PloegNieuwComponent(ploegService, authenticationService, router, snackBar, sponsorSvc) {
        var _this = this;
        this.ploegService = ploegService;
        this.authenticationService = authenticationService;
        this.router = router;
        this.snackBar = snackBar;
        this.sponsorSvc = sponsorSvc;
        this.submitted = false;
        this.team = new __WEBPACK_IMPORTED_MODULE_1__ploeg__["a" /* Ploeg */](0, "", 0, "", "", "", "", "", "", "", 0, "", "");
        this.imgSync = true;
        this.src = "";
        this.sizeLimit = 5;
        this.resizeOptions = {
            resizeMaxHeight: 200,
            resizeMaxWidth: 200
        };
        this.uploader = new __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload__["FileUploader"]({
            url: __WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* AppSettings */].API_ENDPOINT + 'ploegen/upload',
            authToken: 'Bearer ' + this.authenticationService.token
        });
        this.uploaderOptions = {
            allowedMimeType: ['image/png', 'image/jpg', 'image/jpeg'],
            removeAfterUpload: true
        };
        this.uploader.onSuccessItem = function (item, response, status, headers) {
            if (status == 200) {
                console.log("success");
                response = response.replace(/\"/g, "");
                _this.src = "assets/uploads/images/ploegen/" + response;
                _this.team.fotoUrl = _this.src;
                _this.ploegService.addNewTeam(_this.team).subscribe(function (res) {
                    if (res == "OK") {
                        _this.snackBar.open("Nieuwe ploeg " + _this.team.naam + "succesvol aangemaakt.", "", {
                            duration: 2000
                        });
                    }
                });
            }
        };
        this.uploader.onErrorItem = function (item, response, status, headers) {
            console.log("error");
            _this.src = "";
            _this.ploegService.addNewTeam(_this.team).subscribe(function (res) {
                if (res == "OK") {
                    _this.snackBar.open("Nieuwe ploeg " + _this.team.naam + "succesvol aangemaakt.", "", {
                        duration: 2000
                    });
                }
            });
        };
    }
    PloegNieuwComponent.prototype.selected = function (imageResult) {
        this.src = imageResult.resized
            && imageResult.resized.dataURL
            || imageResult.dataURL;
        if (this.imgSync == false) {
            this.src = "";
        }
    };
    PloegNieuwComponent.prototype.checkImage = function () {
        this.imgSync = true;
        if (this.uploader.queue.length != 1) {
            alert("geen foto toegevoegd");
            this.imgSync = false;
        }
        for (var _i = 0, _a = this.uploader.queue; _i < _a.length; _i++) {
            var img = _a[_i];
            if (img.file.size / 1024 / 1024 > this.sizeLimit) {
                alert("File te groot");
                this.imgSync = false;
                this.uploader.clearQueue();
            }
            else if (img.file.type != "image/png" && img.file.type != "image/jpg" && img.file.type != "image/jpeg") {
                alert("Geen afbeelding");
                this.uploader.clearQueue();
                this.imgSync = false;
            }
        }
    };
    PloegNieuwComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.time);
        if (this.time) {
            this.team.trainingsuur = this.time.getHours() + ":" + this.time.getMinutes() + ":" + this.time.getSeconds();
        }
        if (this.uploader.getNotUploadedItems().length) {
            this.uploader.uploadAll();
            console.log("uploaded");
        }
        else {
            var newTeam = void 0;
            newTeam = {
                naam: this.team.naam,
                trainer_1: this.team.trainer_1,
                telTrainer_1: this.team.telTrainer_1,
                trainer_2: this.team.trainer_2,
                telTrainer_2: this.team.telTrainer_2,
                trainingsuur: this.team.trainingsuur,
                trainingsdagen: this.team.trainingsdagen,
                mailTrainer_1: this.team.mailTrainer_1,
                mailTrainer_2: this.team.mailTrainer_2,
                sponsor_id: this.team.sponsor_id
            };
            this.ploegService.addNewTeam(newTeam).subscribe(function (res) {
                if (res == "OK") {
                    _this.snackBar.open("Nieuwe ploeg " + _this.team.naam + "succesvol aangemaakt.", "", {
                        duration: 2000
                    });
                    _this.router.navigateByUrl('/api/ploegen');
                }
            });
        }
    };
    PloegNieuwComponent.prototype.loadSponsors = function () {
        var _this = this;
        this.sponsorSvc.getSponsors().subscribe(function (sponsors) {
            _this.sponsors = sponsors;
        }, function (err) {
            console.log(err);
        });
    };
    PloegNieuwComponent.prototype.ngOnInit = function () {
        this.loadSponsors();
        this.uploader.onAfterAddingFile = function (file) { file.withCredentials = false; };
    };
    PloegNieuwComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-ploeg-nieuw',
            template: __webpack_require__("../../../../../src/app/api/ploegen/ploeg-nieuw/ploeg-nieuw.component.html"),
            styles: [__webpack_require__("../../../../../src/app/api/ploegen/ploeg-nieuw/ploeg-nieuw.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ploegen_service__["a" /* PloegenService */], __WEBPACK_IMPORTED_MODULE_8__user_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["e" /* Router */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["d" /* MatSnackBar */], __WEBPACK_IMPORTED_MODULE_7__sponsor_sponsor_service__["a" /* SponsorService */]])
    ], PloegNieuwComponent);
    return PloegNieuwComponent;
}());



/***/ }),

/***/ "../../../../../src/app/api/ploegen/ploeg.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ploeg; });
var Ploeg = /** @class */ (function () {
    function Ploeg(ploeg_id, naam, leeftijdMax, trainer_1, trainer_2, telTrainer_1, telTrainer_2, trainingsuur, trainingsdagen, fotoUrl, sponsor_id, mailTrainer_1, mailTrainer_2) {
        this.ploeg_id = ploeg_id;
        this.naam = naam;
        this.leeftijdMax = leeftijdMax;
        this.trainer_1 = trainer_1;
        this.trainer_2 = trainer_2;
        this.telTrainer_1 = telTrainer_1;
        this.telTrainer_2 = telTrainer_2;
        this.trainingsuur = trainingsuur;
        this.trainingsdagen = trainingsdagen;
        this.fotoUrl = fotoUrl;
        this.sponsor_id = sponsor_id;
        this.mailTrainer_1 = mailTrainer_1;
        this.mailTrainer_2 = mailTrainer_2;
    }
    return Ploeg;
}());



/***/ }),

/***/ "../../../../../src/app/api/ploegen/ploegen.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"route.children.length === 0\" class=\"row justify-content-center mt-1\">\r\n  <div class=\"col\">\r\n    <div class=\"card text-center \">\r\n      <h4 class=\"card-header bg-dark text-secondary\">Ploegen</h4>\r\n      <div class=\"card-body text-primary \">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-striped table-hover\">\r\n            <thead class=\"bg-light text-dark\">\r\n              <tr>\r\n                <th scope=\"col\">Ploeg</th>\r\n                <th scope=\"col\">Trainer 1</th>\r\n                <th scope=\"col\">Tel trainer 1</th>\r\n                <th class=\"d-none d-lg-table-cell\" scope=\"col\">Trainer 2</th>\r\n                <th class=\"d-none d-lg-table-cell\" scope=\"col\">Tel trainer 2</th>\r\n                <th scope=\"col\">Aanpassen</th>\r\n                <th scope=\"col\">\r\n                  Verwijderen\r\n                </th>\r\n              </tr>\r\n            </thead>\r\n            <tbody *ngFor=\"let ploeg of ploegen\">\r\n              <tr>\r\n                <td scope=\"row\"><a class=\"apiLink\" [routerLink]=\"['/api/ploegen/ploeg-detail', ploeg.ploeg_id]\">{{ploeg.naam}}</a></td>\r\n                <td>{{ploeg.trainer_1}}</td>\r\n                <td>{{ploeg.telTrainer_1}}</td>\r\n                <td class=\"d-none d-lg-table-cell\">{{ploeg.trainer_2}}</td>\r\n                <td class=\"d-none d-lg-table-cell\">{{ploeg.telTrainer_2}}</td>\r\n                <td class=\"text-center\">\r\n                  <a [routerLink]=\"['/api/ploegen/ploeg-edit', ploeg.ploeg_id]\" class=\"text-success\"><i class=\"material-icons\">edit</i></a>\r\n                </td>\r\n                <td class=\"text-center\">\r\n                  <a (click)=\"deleteTeam(ploeg.ploeg_id, ploeg.naam)\" class=\"text-danger hoverable\"><i class=\"material-icons\">delete</i></a>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-footer\">\r\n        <a routerLink=\"/api/ploegen/ploeg-nieuw\" class=\"btn btn-success float-sm-left\">Nieuwe ploeg toevoegen</a>\r\n        <a class=\"float-sm-right btn btn-dark\" routerLink=\"/api\"><i class=\"fa fa-angle-double-left\" aria-hidden=\"true\"></i> Overzicht</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/api/ploegen/ploegen.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/api/ploegen/ploegen.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PloegenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ploegen_service__ = __webpack_require__("../../../../../src/app/api/ploegen/ploegen.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_merge__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dialog_delete_dialog_service__ = __webpack_require__("../../../../../src/app/api/dialog/delete-dialog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var PloegenComponent = /** @class */ (function () {
    function PloegenComponent(location, router, activeRoute, ploegService, dialogsService, snackBar) {
        this.router = router;
        this.ploegService = ploegService;
        this.dialogsService = dialogsService;
        this.snackBar = snackBar;
        this.route = activeRoute;
    }
    PloegenComponent.prototype.deleteTeam = function (id, ploeg) {
        var _this = this;
        this.dialogsService
            .confirm('Verwijder ' + ploeg, 'Ben je zeker dat je ploeg ' + ploeg + ' wilt verwijderen? Dit verwijdert ook alle spelers uit die ploeg!')
            .subscribe(function (res) {
            if (res === "delete") {
                _this.ploegService.deleteTeam(id).subscribe(function (res) {
                    if (res == true) {
                        _this.snackBar.open(ploeg + " succesvol verwijderd", "", {
                            duration: 2000
                        });
                        _this.loadPloegen();
                    }
                });
            }
        });
    };
    PloegenComponent.prototype.edited = function (success) {
        if (success == true) {
            this.loadPloegen();
        }
    };
    PloegenComponent.prototype.loadPloegen = function () {
        var _this = this;
        this.ploegService.getPloegen().subscribe(function (ploegen) {
            _this.ploegen = ploegen;
        }, function (err) {
            console.log(err);
        });
    };
    PloegenComponent.prototype.ngOnInit = function () {
        this.loadPloegen();
    };
    PloegenComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-ploegen',
            template: __webpack_require__("../../../../../src/app/api/ploegen/ploegen.component.html"),
            styles: [__webpack_require__("../../../../../src/app/api/ploegen/ploegen.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"], __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__ploegen_service__["a" /* PloegenService */], __WEBPACK_IMPORTED_MODULE_7__dialog_delete_dialog_service__["a" /* DeleteDialogService */], __WEBPACK_IMPORTED_MODULE_8__angular_material__["d" /* MatSnackBar */]])
    ], PloegenComponent);
    return PloegenComponent;
}());



/***/ }),

/***/ "../../../../../src/app/api/ploegen/ploegen.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PloegenService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_settings__ = __webpack_require__("../../../../../src/app/app-settings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_authentication_service__ = __webpack_require__("../../../../../src/app/user/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PloegenService = /** @class */ (function () {
    function PloegenService(http, authenticationService) {
        this.http = http;
        this.authenticationService = authenticationService;
        this.ploegenURL = __WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* AppSettings */].API_ENDPOINT + '/ploegen';
    }
    PloegenService.prototype.getPloegen = function () {
        return this.http.get(this.ploegenURL)
            .map(this.extractData)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    PloegenService.prototype.extractData = function (result) {
        return result.json().map(function (issue) {
            return {
                ploeg_id: issue.ploeg_id,
                naam: issue.naam,
                leeftijdMax: issue.leeftijdMax,
                trainer_1: issue.trainer_1,
                trainer_2: issue.trainer_2,
                telTrainer_1: issue.telTrainer_1,
                telTrainer_2: issue.telTrainer_2,
                trainingsuur: issue.trainingsuur,
                trainingsdagen: issue.trainingsdagen,
                fotoUrl: issue.fotoUrl
            };
        });
    };
    PloegenService.prototype.editTeam = function (team) {
        var bodyString = JSON.stringify(team); // Stringify payload
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        headers.append('Authorization', 'Bearer ' + this.authenticationService.token);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers }); // Create a request option
        return this.http.put(this.ploegenURL + "/" + team['ploeg_id'], team, options) // ...using put request
            .map(function (res) { return res.statusText; }) // ...and calling .json() on the response to return data
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); }); //...errors if any
    };
    PloegenService.prototype.addNewTeam = function (team) {
        var bodyString = JSON.stringify(team); // Stringify payload
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        headers.append('Authorization', 'Bearer ' + this.authenticationService.token);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers }); // Create a request option
        return this.http.post(this.ploegenURL, team, options) // ...using post request
            .map(function (res) { return res.statusText; }); // ...and calling .json() on the response to return data
    };
    PloegenService.prototype.deleteTeam = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('Authorization', 'Bearer ' + this.authenticationService.token); // ... Set content type to JSON
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.delete(this.ploegenURL + "/" + id, options) // ...using put request
            .map(function (res) { return res.json(); }) // ...and calling .json() on the response to return data
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); }); //...errors if any
    };
    PloegenService.prototype.getPloeg = function (id) {
        return this.http.get(this.ploegenURL + "/" + id)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    PloegenService.prototype.getSpelersByTeam = function (ploegId) {
        return this.http.get(this.ploegenURL + "/" + ploegId + "/spelers")
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    PloegenService.prototype.getGamesByTeam = function (ploegId) {
        return this.http.get(this.ploegenURL + "/" + ploegId + "/wedstrijden")
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    PloegenService.prototype.loadPloegByName = function (name) {
        return this.http.get(this.ploegenURL + "/byName/" + name)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    PloegenService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_6__user_authentication_service__["a" /* AuthenticationService */]])
    ], PloegenService);
    return PloegenService;
}());



/***/ }),

/***/ "../../../../../src/app/api/spelers/edit-speler/edit-speler.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"player\">\r\n  <h3 class=\"text-dark text-center\">{{player.voornaam}} {{player.naam}} aanpassen</h3>\r\n  <div class=\"row justify-content-center\">\r\n    <form #editPlayerForm=\"ngForm\" (ngSubmit)=\"onSubmit()\" class=\"col-xs-12 col-12 col-md-10 col-lg-8 col-xl-6\">\r\n      <div class=\"form-row\">\r\n        <div class=\"col-12 col-md-6 form-group\">\r\n          <label for=\"playerFirstName\" class=\"text-primary\">Voornaam</label>\r\n          <input class=\"form-control\" [ngClass]=\"{'is-valid': vnaam.valid, 'text-danger is-invalid': vnaam.invalid}\" [(ngModel)]=\"player.voornaam\" #vnaam=\"ngModel\" name=\"vnaam\" required id=\"playerFirstName\" type=\"text\" value=\"player.voornaam\">\r\n          <div class=\"invalid-feedback\">Voornaam is vereist</div>\r\n        </div>\r\n        <div class=\"form-group col-12 col-md-6\">\r\n          <label for=\"playerName\" class=\"text-primary\">Familienaam</label>\r\n          <input class=\"form-control\" [ngClass]=\"{'is-valid': naam.valid, 'text-danger is-invalid': naam.invalid}\" [(ngModel)]=\"player.naam\" #naam=\"ngModel\" name=\"naam\" required id=\"playerName\" type=\"text\" value=\"player.naam\">\r\n          <div class=\"invalid-feedback\">Familienaam is vereist</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"col-12 col-md-6 form-group\">\r\n          <label for=\"playerBirth\" class=\"text-primary\">Geboortedatum</label>\r\n          <input type=\"text\" class=\"form-control\" name=\"birth\" #birth=\"ngModel\" id=\"playerBirth\" [ngClass]=\"{'is-valid': birth.valid}\" placeholder=\"Datum\" bsDatepicker [(ngModel)]=\"player.geboortedatum\">\r\n        </div>\r\n        <div class=\"form-group col-md-6 col-12\">\r\n          <label for=\"ploegSelect\" class=\"text-primary d-block\">Ploeg</label>\r\n          <select class=\"form-control \" [(ngModel)]=\"player.ploeg_id\" [ngClass]=\"{'is-valid': mail.valid}\" name=\"ploegSelect\" id=\"ploegSelect\">\r\n           <option *ngFor=\"let ploeg of ploegen\" name=\"ploeg\" [ngValue]=\"ploeg.ploeg_id\">{{ploeg.naam}}</option>\r\n         </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"col-12 col-md-6 form-group\">\r\n          <label for=\"mail\" class=\"text-primary\">Email</label>\r\n          <input class=\"form-control\" placeholder=\"Email\" [ngClass]=\"{'is-valid': mail.valid, 'text-danger is-invalid': mail.invalid}\" [(ngModel)]=\"player.email\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" #mail=\"ngModel\" name=\"mail\" id=\"mail\" type=\"text\" value=\"\"> </div>\r\n          <div class=\"invalid-feedback\">Geldig emailadres</div>\r\n        <div class=\"col-12 col-md-6 form-group\">\r\n          <label for=\"tel\" class=\"text-primary\">Telefoonnummer</label>\r\n          <input class=\"form-control\" placeholder=\"Telefoon\" [ngClass]=\"{'is-valid': tel.valid}\" [(ngModel)]=\"player.telefoonnummer\" #tel=\"ngModel\" name=\"tel\" id=\"tel\" type=\"text\" value=\"\"> </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-12 col-md-6 form-group\">\r\n          <label for=\"adres\" class=\"text-primary\">Adres</label>\r\n          <textarea class=\"form-control\" [ngClass]=\"{'is-valid': adres.valid}\" [(ngModel)]=\"player.adres\" #adres=\"ngModel\" name=\"adres\" id=\"trainingsdagen\" value=\"\"></textarea>\r\n        </div>\r\n        <div class=\"col-12 col-md-6 form-group\">\r\n          <label class=\"col-form-label text-primary\">Ingeschreven?</label>\r\n          <div class=\"form-check\">\r\n            <input class=\"form-check-input ml-4\" [(ngModel)]=\"player.ingeschreven\" type=\"radio\" name=\"ingeschreven\" id=\"exampleRadios1\" value=\"1\">\r\n            <label class=\"form-check-label ml-4\" for=\"exampleRadios1\">\r\n                Ja\r\n              </label>\r\n          </div>\r\n          <div class=\"form-check\">\r\n            <input class=\"form-check-input ml-4\" [(ngModel)]=\"player.ingeschreven\" type=\"radio\" name=\"ingeschreven\" id=\"exampleRadios2\" value=\"0\">\r\n            <label class=\"form-check-label ml-4\" for=\"exampleRadios2\">\r\n                Nee\r\n              </label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"col-12 col-md-6 form-group\">\r\n          <label for=\"pos\" class=\"text-primary\">Positie</label>\r\n          <input class=\"form-control\" placeholder=\"Positie\" [ngClass]=\"{'is-valid': pos.valid}\" [(ngModel)]=\"player.positie\" #pos=\"ngModel\" name=\"pos\" id=\"pos\" type=\"text\" value=\"\"> </div>\r\n        <div class=\"col-12 col-md-6 form-group\">\r\n          <label for=\"goal\" class=\"text-primary\">Doelpunten</label>\r\n          <input class=\"form-control\" placeholder=\"Doelpunten\" [ngClass]=\"{'is-valid': goal.valid, 'text-danger is-invalid': goal.invalid}\" pattern=\"[0-9]*\" [(ngModel)]=\"player.doelpunten\" #goal=\"ngModel\" name=\"goal\" id=\"goal\" type=\"text\" value=\"\">\r\n          <div class=\"invalid-feedback\">Enkel numerieke waarden</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"col-12 col-md-6 form-group\">\r\n          <div class=\"row justify-content-center\" *ngIf=\"src\">\r\n            <div class=\"col-4\">\r\n              <img class=\"img-fluid\" [src]=\"src\">\r\n            </div>\r\n          </div>\r\n          <div class=\"w-100\"></div>\r\n          <div class=\"col-12\" *ngIf=\"uploader.progress > 0\">\r\n            <progressbar class=\"progress active\" [value]=\"uploader.progress\" [max]=\"100\" type=\"success\"></progressbar>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"col-12 col-md-6 form-group\">\r\n          <span class=\"text-primary\" *ngIf=\"src\">Nieuwe foto uploaden</span>\r\n          <span class=\"text-primary\" *ngIf=\"!src\">Foto uploaden</span> <input type=\"file\" class=\"form-control-file\" id=\"validatedCustomFile\" imageUpload (imageSelected)=\"selected($event)\" [resizeOptions]=\"resizeOptions\" ng2FileSelect [uploader]=\"uploader\"\r\n            name=\"photoUpload\" (click)=\"uploader.clearQueue()\" (change)=\"checkImage()\" />\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"col-12 form-group\">\r\n          <div class=\"btn-group\">\r\n            <button class=\"btn btn-success\" [disabled]=\"!editPlayerForm.form.valid\" type=\"submit\" name=\"action\">Wijzigingen opslaan  <i class=\"fa-floppy-o fa\" aria-hidden=\"true\"></i></button>\r\n            <button class=\"btn-dark btn\" [routerLink]=\"['/api/spelers']\"><i class=\"fa fa-angle-double-left\" aria-hidden=\"true\"></i> Speleroverzicht</button>\r\n            <button class=\"btn-info btn\" [routerLink]=\"['/api/spelers/speler-detail', player.speler_id]\">Detail {{player.naam}}</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n<div *ngIf=\"!player\">\r\n  <h2 class=\"center\">Speler niet gevonden</h2>\r\n  <div class=\"row\">\r\n    <div class=\"input-field col m12 s12\">\r\n      <button class=\"btn-dark btn\" [routerLink]=\"['/api/spelers']\"><i class=\"fa fa-angle-double-left\" aria-hidden=\"true\"></i> Speleroverzicht</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/api/spelers/edit-speler/edit-speler.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/api/spelers/edit-speler/edit-speler.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditSpelerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__spelers_service__ = __webpack_require__("../../../../../src/app/api/spelers/spelers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ploegen_ploegen_service__ = __webpack_require__("../../../../../src/app/api/ploegen/ploegen.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_settings__ = __webpack_require__("../../../../../src/app/app-settings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__user_authentication_service__ = __webpack_require__("../../../../../src/app/user/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var EditSpelerComponent = /** @class */ (function () {
    function EditSpelerComponent(location, authenticationService, route, router, ploegenService, spelerService, snackBar) {
        var _this = this;
        this.authenticationService = authenticationService;
        this.route = route;
        this.router = router;
        this.ploegenService = ploegenService;
        this.spelerService = spelerService;
        this.snackBar = snackBar;
        this.src = "";
        this.imgSync = true;
        this.sizeLimit = 5;
        this.resizeOptions = {
            resizeMaxHeight: 200,
            resizeMaxWidth: 200
        };
        route.params.subscribe(function (p) {
            _this.param = p['id'];
        });
        this.uploader = new __WEBPACK_IMPORTED_MODULE_6_ng2_file_upload__["FileUploader"]({
            url: __WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* AppSettings */].API_ENDPOINT + 'spelers/upload',
            authToken: 'Bearer ' + this.authenticationService.token
        });
        this.uploaderOptions = {
            allowedMimeType: ['image/png', 'image/jpg', 'image/jpeg'],
            removeAfterUpload: true
        };
        this.uploader.onSuccessItem = function (item, response, status, headers) {
            if (status == 200) {
                response = response.replace(/\"/g, "");
                _this.src = "assets/uploads/images/spelers/" + response;
                _this.player.fotoUrl = _this.src;
                _this.spelerService.editPlayer(_this.player).subscribe(function (res) {
                    if (res == "OK") {
                        _this.snackBar.open("speler " + _this.player.voornaam + ' ' + _this.player.naam + " succesvol aangepast.", "", {
                            duration: 2000
                        });
                    }
                });
            }
        };
        this.uploader.onErrorItem = function (item, response, status, headers) {
            _this.src = "";
            _this.spelerService.editPlayer(_this.player).subscribe(function (res) {
                if (res == "OK") {
                    _this.snackBar.open("speler " + _this.player.voornaam + ' ' + _this.player.naam + " succesvol aangepast.", "", {
                        duration: 2000
                    });
                }
            });
        };
    }
    EditSpelerComponent.prototype.selected = function (imageResult) {
        this.src = imageResult.resized
            && imageResult.resized.dataURL
            || imageResult.dataURL;
        console.log(this.src);
        if (this.imgSync == false) {
            this.src = "";
        }
    };
    EditSpelerComponent.prototype.checkImage = function () {
        this.imgSync = true;
        if (this.uploader.queue.length != 1) {
            alert("geen foto toegevoegd");
            this.imgSync = false;
        }
        for (var _i = 0, _a = this.uploader.queue; _i < _a.length; _i++) {
            var img = _a[_i];
            if (img.file.size / 1024 / 1024 > this.sizeLimit) {
                alert("File te groot");
                this.imgSync = false;
                this.uploader.clearQueue();
            }
            else if (img.file.type != "image/png" && img.file.type != "image/jpg" && img.file.type != "image/jpeg") {
                alert("Geen afbeelding");
                this.uploader.clearQueue();
                this.imgSync = false;
            }
        }
    };
    EditSpelerComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.uploader.getNotUploadedItems().length) {
            this.uploader.uploadAll();
        }
        else {
            this.spelerService.editPlayer(this.player).subscribe(function (res) {
                if (res == "OK") {
                    _this.snackBar.open("speler " + _this.player.voornaam + ' ' + _this.player.naam + " succesvol aangepast.", "", {
                        duration: 2000
                    });
                    _this.router.navigateByUrl('/api/spelers').then(function () {
                        location.reload();
                    });
                }
            });
        }
    };
    EditSpelerComponent.prototype.loadPlayer = function () {
        var _this = this;
        this.spelerService.getPlayer(this.param).subscribe(function (speler) {
            _this.player = speler;
            _this.src = _this.player.fotoUrl;
        }, function (err) {
            console.log(err);
        });
    };
    EditSpelerComponent.prototype.loadPloegen = function () {
        var _this = this;
        this.ploegenService.getPloegen().subscribe(function (ploegen) {
            _this.ploegen = ploegen;
        }, function (err) {
            console.log(err);
        });
    };
    EditSpelerComponent.prototype.ngOnInit = function () {
        this.loadPloegen();
        this.loadPlayer();
        this.uploader.onAfterAddingFile = function (file) { file.withCredentials = false; };
    };
    EditSpelerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-speler',
            template: __webpack_require__("../../../../../src/app/api/spelers/edit-speler/edit-speler.component.html"),
            styles: [__webpack_require__("../../../../../src/app/api/spelers/edit-speler/edit-speler.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_common__["Location"], __WEBPACK_IMPORTED_MODULE_8__user_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["e" /* Router */], __WEBPACK_IMPORTED_MODULE_2__ploegen_ploegen_service__["a" /* PloegenService */], __WEBPACK_IMPORTED_MODULE_1__spelers_service__["a" /* SpelersService */], __WEBPACK_IMPORTED_MODULE_7__angular_material__["d" /* MatSnackBar */]])
    ], EditSpelerComponent);
    return EditSpelerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/api/spelers/speler-detail/speler-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"player\">\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col col-md-10 col-lg-8\">\r\n      <div class=\"border-info\">\r\n        <div class=\"row align-items-center\">\r\n          <div class=\"col-12 col-md-4\">\r\n            <img *ngIf=\"player.fotoUrl\" [src]=\"player.fotoUrl\" alt=\"\" class=\"rounded img-fluid\">\r\n            <h2 *ngIf=\"!player.fotoUrl\" class=\"text-center\">Geen foto beschikbaar</h2>\r\n            <!-- notice the \"circle\" class -->\r\n          </div>\r\n          <div class=\"col-12 col-md-8\">\r\n            <h4 class=\"text-primary text-center mb-2\">{{player.voornaam}} {{player.naam}}</h4>\r\n            <div class=\"row\">\r\n              <div class=\"col-12 col-md-6\">\r\n                <p>\r\n                  <strong>Ploeg: </strong><br />{{player.ploegNaam}}\r\n                </p>\r\n                <p>\r\n                  <strong>Geboortedatum: </strong><br />{{player.geboortedatum}}\r\n                </p>\r\n                <p>\r\n                  <strong>Email: </strong><br />{{player.email}}\r\n                </p>\r\n                <p>\r\n                  <strong>Adres: </strong><br /> {{player.adres}}\r\n                </p>\r\n              </div>\r\n              <div class=\"col-12 col-md-6\">\r\n                <p>\r\n                  <strong>Telefoonnummer: </strong><br />{{player.telefoonnummer}}\r\n                </p>\r\n                <p *ngIf=\"player.ingeschreven == true\">\r\n                  <strong>Ingeschreven: </strong><br />Ja\r\n                </p>\r\n                <p *ngIf=\"player.ingeschreven == false\">\r\n                  <strong>Ingeschreven: </strong><br />Nee\r\n                </p>\r\n                <p>\r\n                  <strong>Positie: </strong><br />{{player.positie}}\r\n                </p>\r\n                <p>\r\n                  <strong>Doelpunten: </strong><br />{{player.doelpunten}}\r\n                </p>\r\n              </div>\r\n            </div>\r\n            <div class=\"row justify-content-center mt-3\">\r\n              <button class=\"btn btn-info\" [routerLink]=\"['/api/spelers']\"><i class=\"fa fa-angle-double-left\" aria-hidden=\"true\"></i> Speleroverzicht</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div *ngIf=\"!player\">\r\n  <h2 class=\"text-center\">Geen speler gevonden</h2>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/api/spelers/speler-detail/speler-detail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/api/spelers/speler-detail/speler-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpelerDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__spelers_service__ = __webpack_require__("../../../../../src/app/api/spelers/spelers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SpelerDetailComponent = /** @class */ (function () {
    function SpelerDetailComponent(location, route, spelerService) {
        var _this = this;
        this.route = route;
        this.spelerService = spelerService;
        route.params.subscribe(function (p) {
            _this.param = p['id'];
        });
    }
    SpelerDetailComponent.prototype.loadPlayer = function () {
        var _this = this;
        this.spelerService.getPlayer(this.param).subscribe(function (speler) {
            _this.player = speler;
        }, function (err) {
            console.log(err);
        });
    };
    SpelerDetailComponent.prototype.ngOnInit = function () {
        this.loadPlayer();
    };
    SpelerDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-speler-detail',
            template: __webpack_require__("../../../../../src/app/api/spelers/speler-detail/speler-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/api/spelers/speler-detail/speler-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__spelers_service__["a" /* SpelersService */]])
    ], SpelerDetailComponent);
    return SpelerDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/api/spelers/speler-nieuw/speler-nieuw.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 class=\"text-dark text-center\">Nieuwe speler toevoegen</h3>\r\n<div class=\"row justify-content-center\">\r\n  <form #newPlayerForm=\"ngForm\" (ngSubmit)=\"onSubmit()\" class=\"col-xs-12 col-12 col-md-10 col-lg-8 col-xl-6\">\r\n    <div class=\"form-row\">\r\n      <div class=\"col-12 col-md-6 form-group\">\r\n        <label for=\"playerFirstName\" class=\"text-primary\">Voornaam</label>\r\n        <input class=\"form-control\" [ngClass]=\"{'is-valid': vnaam.valid, 'text-danger is-invalid': vnaam.invalid}\" [(ngModel)]=\"player.voornaam\" #vnaam=\"ngModel\" name=\"vnaam\" required id=\"playerFirstName\" type=\"text\" value=\"player.voornaam\">\r\n        <div class=\"invalid-feedback\">Voornaam is vereist</div>\r\n      </div>\r\n      <div class=\"form-group col-12 col-md-6\">\r\n        <label for=\"playerName\" class=\"text-primary\">Familienaam</label>\r\n        <input class=\"form-control\" [ngClass]=\"{'is-valid': naam.valid, 'text-danger is-invalid': naam.invalid}\" [(ngModel)]=\"player.naam\" #naam=\"ngModel\" name=\"naam\" required id=\"playerName\" type=\"text\" value=\"player.naam\">\r\n        <div class=\"invalid-feedback\">Familienaam is vereist</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-row\">\r\n      <div class=\"col-12 col-md-6 form-group\">\r\n        <label for=\"playerBirth\" class=\"text-primary\">Geboortedatum</label>\r\n        <input type=\"text\" class=\"form-control\" name=\"birth\" #birth=\"ngModel\" id=\"playerBirth\" [ngClass]=\"{'is-valid': birth.valid}\" placeholder=\"Datum\" bsDatepicker [(ngModel)]=\"player.geboortedatum\">\r\n      </div>\r\n      <div class=\"form-group col-md-6 col-12\">\r\n        <label for=\"ploegSelect\" class=\"text-primary d-block\">Ploeg</label>\r\n        <select class=\"form-control\" required [(ngModel)]=\"player.ploeg_id\" name=\"ploegSelectName\" id=\"ploegSelect\">\r\n           <option *ngFor=\"let ploeg of ploegen\" name=\"ploeg\" [ngValue]=\"ploeg.ploeg_id\">{{ploeg.naam}}</option>         </select>\r\n        <div class=\"invalid-feedback\">Ploeg is vereist</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-row\">\r\n      <div class=\"col-12 col-md-6 form-group\">\r\n        <label for=\"mail\" class=\"text-primary\">Email</label>\r\n        <input class=\"form-control\" placeholder=\"Email\" [ngClass]=\"{'is-valid': mail.valid, 'text-danger is-invalid': mail.invalid}\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" [(ngModel)]=\"player.email\" #mail=\"ngModel\" name=\"mail\" id=\"mail\" type=\"text\" value=\"\"> </div>\r\n      <div class=\"col-12 col-md-6 form-group\">\r\n        <label for=\"tel\" class=\"text-primary\">Telefoonnummer</label>\r\n        <input class=\"form-control\" placeholder=\"Telefoon\" [ngClass]=\"{'is-valid': tel.valid}\" [(ngModel)]=\"player.telefoonnummer\" #tel=\"ngModel\" name=\"tel\" id=\"tel\" type=\"text\" value=\"\"> </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-12 col-md-6 form-group\">\r\n        <label for=\"adres\" class=\"text-primary\">Adres</label>\r\n        <textarea class=\"form-control\" [ngClass]=\"{'is-valid': adres.valid}\" [(ngModel)]=\"player.adres\" #adres=\"ngModel\" name=\"adres\" id=\"trainingsdagen\" value=\"\"></textarea>\r\n      </div>\r\n      <div class=\"col-12 col-md-6 form-group\">\r\n        <label class=\"col-form-label text-primary\">Ingeschreven?</label>\r\n        <div class=\"form-check\">\r\n          <input class=\"form-check-input ml-4\" [(ngModel)]=\"player.ingeschreven\" type=\"radio\" name=\"ingeschreven\" id=\"exampleRadios1\" value=\"1\">\r\n          <label class=\"form-check-label ml-4\" for=\"exampleRadios1\">\r\n                Ja\r\n              </label>\r\n        </div>\r\n        <div class=\"form-check\">\r\n          <input class=\"form-check-input ml-4\" [(ngModel)]=\"player.ingeschreven\" type=\"radio\" name=\"ingeschreven\" id=\"exampleRadios2\" value=\"0\">\r\n          <label class=\"form-check-label ml-4\" for=\"exampleRadios2\">\r\n                Nee\r\n              </label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-row\">\r\n      <div class=\"col-12 col-md-6 form-group\">\r\n        <label for=\"pos\" class=\"text-primary\">Positie</label>\r\n        <input class=\"form-control\" placeholder=\"Positie\" [ngClass]=\"{'is-valid': pos.valid}\" [(ngModel)]=\"player.positie\" #pos=\"ngModel\" name=\"pos\" id=\"pos\" type=\"text\" value=\"\"> </div>\r\n      <div class=\"col-12 col-md-6 form-group\">\r\n        <label for=\"goal\" class=\"text-primary\">Doelpunten</label>\r\n        <input class=\"form-control\" placeholder=\"Doelpunten\" [ngClass]=\"{'is-valid': goal.valid, 'text-danger is-invalid': goal.invalid}\" pattern=\"[0-9]*\" [(ngModel)]=\"player.doelpunten\" #goal=\"ngModel\" name=\"goal\" id=\"goal\" type=\"text\" value=\"\">\r\n        <div class=\"invalid-feedback\">Enkel numerieke waarden</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-row\">\r\n      <div class=\"col-12 col-md-6 form-group\">\r\n        <div class=\"row justify-content-center\" *ngIf=\"src\">\r\n          <div class=\"col-4\">\r\n            <img class=\"img-fluid\" [src]=\"src\">\r\n          </div>\r\n        </div>\r\n        <div class=\"w-100\"></div>\r\n        <div class=\"col-12\" *ngIf=\"uploader.progress > 0\">\r\n          <progressbar class=\"progress active\" [value]=\"uploader.progress\" [max]=\"100\" type=\"success\"></progressbar>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-row\">\r\n      <div class=\"col-12 col-md-6 form-group\">\r\n        <span class=\"text-primary\" *ngIf=\"src\">Nieuwe foto uploaden</span>\r\n        <span class=\"text-primary\" *ngIf=\"!src\">Foto uploaden</span> <input type=\"file\" class=\"form-control-file\" id=\"validatedCustomFile\" imageUpload (imageSelected)=\"selected($event)\" [resizeOptions]=\"resizeOptions\" ng2FileSelect [uploader]=\"uploader\"\r\n          name=\"photoUpload\" (click)=\"uploader.clearQueue()\" (change)=\"checkImage()\" />\r\n      </div>\r\n    </div>\r\n    <div class=\"form-row\">\r\n      <div class=\"col-12 form-group\">\r\n        <div class=\"btn-group\">\r\n          <button class=\"btn btn-success\" [disabled]=\"!newPlayerForm.form.valid\" type=\"submit\" name=\"action\">Speler toevoegen <i class=\"fa-plus fa\" aria-hidden=\"true\"></i></button>\r\n          <button class=\"btn btn-dark\" [routerLink]=\"['/api/spelers']\"><i class=\"fa fa-angle-double-left\" aria-hidden=\"true\"></i> Spelersoverzicht</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/api/spelers/speler-nieuw/speler-nieuw.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/api/spelers/speler-nieuw/speler-nieuw.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpelerNieuwComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__spelers_service__ = __webpack_require__("../../../../../src/app/api/spelers/spelers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ploegen_ploegen_service__ = __webpack_require__("../../../../../src/app/api/ploegen/ploegen.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__speler__ = __webpack_require__("../../../../../src/app/api/spelers/speler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_settings__ = __webpack_require__("../../../../../src/app/app-settings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__user_authentication_service__ = __webpack_require__("../../../../../src/app/user/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var SpelerNieuwComponent = /** @class */ (function () {
    function SpelerNieuwComponent(ploegenService, router, spelerService, snackBar, authenticationService) {
        var _this = this;
        this.ploegenService = ploegenService;
        this.router = router;
        this.spelerService = spelerService;
        this.snackBar = snackBar;
        this.authenticationService = authenticationService;
        this.player = new __WEBPACK_IMPORTED_MODULE_3__speler__["a" /* Speler */](0, "", "", null, "", "", "", 0, 0, "", "", 0, "");
        this.imgSync = true;
        this.src = "";
        this.sizeLimit = 5;
        this.resizeOptions = {
            resizeMaxHeight: 200,
            resizeMaxWidth: 200
        };
        this.uploader = new __WEBPACK_IMPORTED_MODULE_6_ng2_file_upload__["FileUploader"]({
            url: __WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* AppSettings */].API_ENDPOINT + 'spelers/upload',
            authToken: 'Bearer ' + this.authenticationService.token
        });
        this.uploaderOptions = {
            allowedMimeType: ['image/png', 'image/jpg', 'image/jpeg'],
            removeAfterUpload: true
        };
        this.uploader.onSuccessItem = function (item, response, status, headers) {
            if (status == 200) {
                console.log("success");
                response = response.replace(/\"/g, "");
                _this.src = "assets/uploads/images/spelers/" + response;
                _this.player.fotoUrl = _this.src;
                _this.spelerService.addNewPlayer(_this.player).subscribe(function (res) {
                    if (res == "OK") {
                        _this.snackBar.open("Speler " + _this.player.voornaam + ' ' + _this.player.naam + " succesvol aangemaakt.", "", {
                            duration: 2000
                        });
                        _this.router.navigateByUrl('/api/spelers');
                    }
                });
            }
        };
        this.uploader.onErrorItem = function (item, response, status, headers) {
            console.log("error");
            _this.src = "";
            _this.spelerService.addNewPlayer(_this.player).subscribe(function (res) {
                if (res == "OK") {
                    _this.snackBar.open("Speler " + _this.player.voornaam + ' ' + _this.player.naam + " succesvol aangemaakt.", "", {
                        duration: 2000
                    });
                    _this.router.navigateByUrl('/api/spelers');
                }
            });
        };
    }
    SpelerNieuwComponent.prototype.selected = function (imageResult) {
        this.src = imageResult.resized
            && imageResult.resized.dataURL
            || imageResult.dataURL;
        if (this.imgSync == false) {
            this.src = "";
        }
    };
    SpelerNieuwComponent.prototype.checkImage = function () {
        this.imgSync = true;
        if (this.uploader.queue.length != 1) {
            alert("geen foto toegevoegd");
            this.imgSync = false;
        }
        for (var _i = 0, _a = this.uploader.queue; _i < _a.length; _i++) {
            var img = _a[_i];
            if (img.file.size / 1024 / 1024 > this.sizeLimit) {
                alert("File te groot");
                this.imgSync = false;
                this.uploader.clearQueue();
            }
            else if (img.file.type != "image/png" && img.file.type != "image/jpg" && img.file.type != "image/jpeg") {
                alert("Geen afbeelding");
                this.uploader.clearQueue();
                this.imgSync = false;
            }
        }
    };
    SpelerNieuwComponent.prototype.onSubmit = function () {
        var _this = this;
        try {
            this.birthDate = new Date(this.player.geboortedatum);
            this.player.geboortedatum = __WEBPACK_IMPORTED_MODULE_7_moment__(this.birthDate).format('YYYY-MM-DD HH-mm-ss');
            if (!this.player.ploeg_id) {
                this.player.ploeg_id = 1;
            }
            if (this.uploader.getNotUploadedItems().length) {
                this.uploader.uploadAll();
            }
            else {
                this.spelerService.addNewPlayer(this.player).subscribe(function (res) {
                    if (res == "OK") {
                        console.log("not uploaded");
                        _this.snackBar.open("Speler " + _this.player.voornaam + ' ' + _this.player.naam + " succesvol aangemaakt.", "", {
                            duration: 2000
                        });
                        _this.router.navigateByUrl('/api/spelers');
                    }
                });
            }
        }
        catch (err) {
            console.log(err);
        }
    };
    SpelerNieuwComponent.prototype.loadPloegen = function () {
        var _this = this;
        this.ploegenService.getPloegen().subscribe(function (ploegen) {
            _this.ploegen = ploegen;
        }, function (err) {
            console.log(err);
        });
    };
    SpelerNieuwComponent.prototype.ngOnInit = function () {
        this.loadPloegen();
        this.uploader.onAfterAddingFile = function (file) { file.withCredentials = false; };
    };
    SpelerNieuwComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-speler-nieuw',
            template: __webpack_require__("../../../../../src/app/api/spelers/speler-nieuw/speler-nieuw.component.html"),
            styles: [__webpack_require__("../../../../../src/app/api/spelers/speler-nieuw/speler-nieuw.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ploegen_ploegen_service__["a" /* PloegenService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["e" /* Router */], __WEBPACK_IMPORTED_MODULE_1__spelers_service__["a" /* SpelersService */], __WEBPACK_IMPORTED_MODULE_8__angular_material__["d" /* MatSnackBar */], __WEBPACK_IMPORTED_MODULE_9__user_authentication_service__["a" /* AuthenticationService */]])
    ], SpelerNieuwComponent);
    return SpelerNieuwComponent;
}());



/***/ }),

/***/ "../../../../../src/app/api/spelers/speler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Speler; });
var Speler = /** @class */ (function () {
    function Speler(speler_id, voornaam, naam, geboortedatum, email, telefoonnummer, adres, ingeschreven, ploeg_id, fotoUrl, positie, doelpunten, ploegNaam) {
        this.speler_id = speler_id;
        this.voornaam = voornaam;
        this.naam = naam;
        this.geboortedatum = geboortedatum;
        this.email = email;
        this.telefoonnummer = telefoonnummer;
        this.adres = adres;
        this.ingeschreven = ingeschreven;
        this.ploeg_id = ploeg_id;
        this.fotoUrl = fotoUrl;
        this.positie = positie;
        this.doelpunten = doelpunten;
        this.ploegNaam = ploegNaam;
    }
    return Speler;
}());



/***/ }),

/***/ "../../../../../src/app/api/spelers/spelers.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"route.children.length === 0\">\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col col-md-10\">\r\n      <div class=\"row justify-content-center mb-3\">\r\n        <div class=\"col-md-8 col-lg-6 col-xl-4\">\r\n          <a routerLink=\"/api/spelers/speler-nieuw\" class=\"btn-lg btn-secondary btn-block btn\">Nieuwe speler aanmaken</a>\r\n        </div>\r\n      </div>\r\n      <div class=\"card border-info\">\r\n        <div class=\"card-header bg-primary\">\r\n          <h3 class=\" text-secondary text-center\">Speleroverzicht</h3>\r\n        </div>\r\n        <div class=\"card-body text-primary\">\r\n          <div class=\"row justify-content-center\">\r\n            <div *ngIf=\"spelers != null\" class=\"col col-md-10 col-lg-8 col-xl-6\">\r\n              <input class=\"form-control\" (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Zoek\">\r\n            </div>\r\n          </div>\r\n          <div class=\"row mt-4\">\r\n            <mat-table class=\"table table-bordered table-hover\" #table [dataSource]=\"spelers\" matSort>\r\n              <ng-container matColumnDef=\"naam\">\r\n                <mat-header-cell class=\"tableHeader \" *matHeaderCellDef mat-sort-header> Naam </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\" class=\"text-primary \"> <a class=\"apiLink\" [routerLink]=\"['/api/spelers/speler-detail', element.speler_id]\"> {{element.voornaam}} {{element.naam}}  </a></mat-cell>\r\n              </ng-container>\r\n              <ng-container matColumnDef=\"geboortedatum\">\r\n                <mat-header-cell class=\"tableHeader d-sm-block d-none\" *matHeaderCellDef mat-sort-header> Geboortedatum </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\" class=\"text-primary d-sm-block d-none\"> {{element.geboortedatum | amDateFormat:'l'}}</mat-cell>\r\n              </ng-container>\r\n              <ng-container matColumnDef=\"email\">\r\n                <mat-header-cell class=\"tableHeader d-lg-block d-none\" *matHeaderCellDef mat-sort-header> Email </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\" class=\"text-primary d-lg-block d-none\">{{element.email}}</mat-cell>\r\n              </ng-container>\r\n              <ng-container matColumnDef=\"tel\">\r\n                <mat-header-cell class=\"tableHeader d-xl-block d-none\" *matHeaderCellDef mat-sort-header> Telefoonnummer </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\" class=\"text-primary d-xl-block d-none\">{{element.telefoonnummer}}</mat-cell>\r\n              </ng-container>\r\n              <ng-container matColumnDef=\"ploegnaam\">\r\n                <mat-header-cell class=\"tableHeader d-lg-block d-none\" *matHeaderCellDef mat-sort-header> Ploeg </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\" class=\"text-primary d-lg-block d-none\">{{element.ploegNaam}}</mat-cell>\r\n              </ng-container>\r\n              <ng-container class=\"d-md-table\" matColumnDef=\"ingeschreven\">\r\n                <mat-header-cell class=\"tableHeader d-xl-block d-none\" *matHeaderCellDef mat-sort-header> Ingeschreven </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\" class=\"text-primary d-xl-block d-none\"><span *ngIf=\"element.ingeschreven == 1\">Ja</span><span *ngIf=\"element.ingeschreven == 0\">Nee</span></mat-cell>\r\n              </ng-container>\r\n              <ng-container matColumnDef=\"edit\">\r\n                <mat-header-cell class=\"tableHeader text-center\" *matHeaderCellDef> Aanpassen </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\" class=\"text-center\"> <a [routerLink]=\"['/api/spelers/speler-edit', element.speler_id]\" class=\"text-primary\"><i class=\"material-icons\">edit</i></a> </mat-cell>\r\n              </ng-container>\r\n              <ng-container matColumnDef=\"del\">\r\n                <mat-header-cell class=\"tableHeader text-center\" *matHeaderCellDef> Verwijderen </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\" class=\"text-center hoverable\"> <a (click)=\"deletePlayer(element.speler_id, element.naam, element.voornaam)\" class=\"text-danger \"><i class=\"material-icons\">delete</i></a> </mat-cell>\r\n              </ng-container>\r\n              <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n              <mat-row class=\"table-info\" *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n            </mat-table>\r\n            <mat-paginator #paginator [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 20]\">\r\n            </mat-paginator>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-footer\">\r\n          <a routerLink=\"/api/spelers/speler-nieuw\" class=\"btn btn-success \">Nieuwe speler aanmaken</a>\r\n          <a class=\"float-sm-right btn btn-dark\" routerLink=\"/api\"><i class=\"fa fa-angle-double-left\" aria-hidden=\"true\"></i> Overzicht</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<router-outlet></router-outlet>\r\n<!-- <div *ngIf=\"route.children.length === 0\">  <div class=\"row\">\r\n    <div class=\"col s12 m10 offset-m1\">\r\n      <div class=\"card\">\r\n        <div class=\"card-content klingeApp-text text-blue-dark\">\r\n          <h3 class=\"klingeApp-text text-orange\">Spelers</h3>\r\n          <table class=\"highlight bordered responsive-table\">\r\n            <thead>\r\n              <tr>\r\n                <th>Naam</th>\r\n                <th>Geboortedatum</th>\r\n                <th>Email</th>\r\n                <th>Telnr</th>\r\n                <th>\r\n                  Ploegnaam\r\n                </th>\r\n                <th>Ingeschreven</th>\r\n                <th>Aanpassen</th>\r\n                <th>\r\n                  Verwijderen\r\n                </th>\r\n              </tr>\r\n            </thead>            <tbody *ngFor=\"let speler of spelers\">\r\n              <tr>\r\n                <td><a class=\"apiLink\" [routerLink]=\"['/api/spelers/speler-detail', speler.speler_id]\">{{speler.voornaam}} {{speler.naam}}</a></td>\r\n                <td>{{speler.geboortedatum}}</td>\r\n                <td>{{speler.email}}</td>\r\n                <td>{{speler.telefoonnummer}}</td>\r\n                <td>\r\n                  {{speler.ploegNaam}}\r\n                </td>\r\n                <td *ngIf=\"speler.ingeschreven == true\">Ja</td>\r\n                <td *ngIf=\"speler.ingeschreven == false\">Nee</td>\r\n                <td class=\"center-align\">\r\n                  <a [routerLink]=\"['/api/spelers/speler-edit', speler.speler_id]\" class=\"btn-flat teal-text text-lighten-1\"><i class=\"material-icons\">edit</i></a>\r\n                </td>\r\n                <td class=\"center-align\">\r\n                  <a (click)=\"deletePlayer(speler.speler_id, speler.naam, speler.voornaam)\" class=\"red-text text-lighten-2 btn-flat\"><i class=\"material-icons\">delete</i></a>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n        <div class=\"card-action\">\r\n          <a routerLink=\"/api/spelers/speler-nieuw\" class=\"btn green lighten-2\">Nieuwe speler toevoegen</a>\r\n          <a class=\"right klingeApp blue-grey btn\" routerLink=\"/api\"><i class=\"material-icons left\">chevron_left</i>Overzicht</a>\r\n        </div>\r\n      </div>\r\n    </div>  </div></div>\r\n  <router-outlet></router-outlet> -->\r\n"

/***/ }),

/***/ "../../../../../src/app/api/spelers/spelers.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/api/spelers/spelers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpelersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__spelers_service__ = __webpack_require__("../../../../../src/app/api/spelers/spelers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dialog_delete_dialog_service__ = __webpack_require__("../../../../../src/app/api/dialog/delete-dialog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_merge__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var SpelersComponent = /** @class */ (function () {
    function SpelersComponent(location, activeRoute, spelersService, dialogsService, snackBar) {
        this.activeRoute = activeRoute;
        this.spelersService = spelersService;
        this.dialogsService = dialogsService;
        this.snackBar = snackBar;
        this.displayedColumns = ['naam', 'geboortedatum', 'email', 'tel', 'ploegnaam', 'ingeschreven', 'edit', 'del'];
        this.spelers = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MatTableDataSource */]([]);
        this.route = activeRoute;
    }
    SpelersComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.spelers.filter = filterValue;
    };
    SpelersComponent.prototype.deletePlayer = function (id, speler, spelerVoornaam) {
        var _this = this;
        this.dialogsService
            .confirm('Verwijder ' + spelerVoornaam + ' ' + speler, 'Ben je zeker dat je ' + speler + ' ' + spelerVoornaam + ' wilt verwijderen?')
            .subscribe(function (res) {
            if (res === "delete") {
                _this.spelersService.deletePlayer(id).subscribe(function (res) {
                    if (res == true) {
                        _this.snackBar.open(spelerVoornaam + " " + speler + " succesvol verwijderd", "", {
                            duration: 2000
                        });
                        _this.loadPlayers();
                    }
                });
            }
        });
    };
    SpelersComponent.prototype.edited = function (success) {
        if (success == true) {
            this.loadPlayers();
        }
    };
    SpelersComponent.prototype.loadPlayers = function () {
        var _this = this;
        this.spelersService.getSpelers().subscribe(function (spelers) {
            _this.spelers = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MatTableDataSource */](spelers);
            _this.spelers.sort = _this.sort;
            _this.spelers.paginator = _this.paginator;
        }, function (err) {
            console.log(err);
        });
    };
    SpelersComponent.prototype.ngOnInit = function () {
        this.loadPlayers();
    };
    SpelersComponent.prototype.ngAfterViewInit = function () {
        if (this.spelers) {
            this.spelers.sort = this.sort;
            this.spelers.paginator = this.paginator;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MatSort */])
    ], SpelersComponent.prototype, "sort", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MatPaginator */])
    ], SpelersComponent.prototype, "paginator", void 0);
    SpelersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-spelers',
            template: __webpack_require__("../../../../../src/app/api/spelers/spelers.component.html"),
            styles: [__webpack_require__("../../../../../src/app/api/spelers/spelers.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_common__["Location"], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__spelers_service__["a" /* SpelersService */], __WEBPACK_IMPORTED_MODULE_4__dialog_delete_dialog_service__["a" /* DeleteDialogService */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MatSnackBar */]])
    ], SpelersComponent);
    return SpelersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/api/spelers/spelers.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpelersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_settings__ = __webpack_require__("../../../../../src/app/app-settings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_authentication_service__ = __webpack_require__("../../../../../src/app/user/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SpelersService = /** @class */ (function () {
    function SpelersService(http, authenticationService) {
        this.http = http;
        this.authenticationService = authenticationService;
        this.spelersURL = __WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* AppSettings */].API_ENDPOINT + '/spelers';
        this.ploegenURL = __WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* AppSettings */].API_ENDPOINT + '/ploegen';
    }
    SpelersService.prototype.getSpelers = function () {
        return this.http.get(this.spelersURL)
            .map(this.extractData)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    SpelersService.prototype.extractData = function (result) {
        return result.json().map(function (speler) {
            return {
                speler_id: speler.speler_id,
                voornaam: speler.voornaam,
                naam: speler.naam,
                geboortedatum: speler.geboortedatum,
                email: speler.email,
                telefoonnummer: speler.telefoonnummer,
                adres: speler.adres,
                ingeschreven: speler.ingeschreven,
                ploeg_id: speler.ploeg_id,
                positie: speler.positie,
                doelpunten: speler.doelpunten,
                fotoUrl: speler.fotoUrl,
                ploegNaam: speler.ploegNaam
            };
        });
    };
    SpelersService.prototype.editPlayer = function (player) {
        var bodyString = JSON.stringify(player); // Stringify payload
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        headers.append('Authorization', 'Bearer ' + this.authenticationService.token);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers }); // Create a request option
        return this.http.put(this.spelersURL + "/" + player['speler_id'], player, options) // ...using put request
            .map(function (res) { return res.statusText; }) // ...and calling .json() on the response to return data
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); }); //...errors if any
    };
    SpelersService.prototype.addNewPlayer = function (player) {
        var bodyString = JSON.stringify(player); // Stringify payload
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        headers.append('Authorization', 'Bearer ' + this.authenticationService.token);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers }); // Create a request option
        return this.http.post(this.spelersURL, player, options) // ...using post request
            .map(function (res) { return res.statusText; }); // ...and calling .json() on the response to return data
    };
    SpelersService.prototype.deletePlayer = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        headers.append('Authorization', 'Bearer ' + this.authenticationService.token);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers }); // Create a request option
        return this.http.delete(this.spelersURL + "/" + id, options) // ...using put request
            .map(function (res) { return res.json(); }) // ...and calling .json() on the response to return data
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); }); //...errors if any
    };
    SpelersService.prototype.getPlayer = function (id) {
        return this.http.get(this.spelersURL + "/" + id)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    SpelersService.prototype.getPloegBySpeler = function (id) {
        return this.http.get(this.ploegenURL + "/" + id)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    SpelersService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_6__user_authentication_service__["a" /* AuthenticationService */]])
    ], SpelersService);
    return SpelersService;
}());



/***/ }),

/***/ "../../../../../src/app/api/sponsor/edit-sponsor/edit-sponsor.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 class=\"text-dark text-center\">{{sponsor.naam}} aanpassen</h3>\r\n<div class=\"row justify-content-center\">\r\n  <form #editSponsorForm=\"ngForm\" (ngSubmit)=\"onSubmit()\" class=\"col-xs-12 col-12 col-md-10 col-lg-8 col-xl-6\">\r\n    <div class=\"form-row\">\r\n      <div class=\"col-12 col-md-6 form-group\">\r\n        <label for=\"sponsorName\" class=\"text-primary\">Naam</label>\r\n        <input class=\"form-control\" [ngClass]=\"{'is-valid': naam.valid, 'text-danger is-invalid': naam.invalid}\" [(ngModel)]=\"sponsor.naam\" #naam=\"ngModel\" name=\"naam\" required id=\"sponsorName\" type=\"text\" value=\"sponsor.naam\">\r\n        <div class=\"invalid-feedback\">Naam is vereist</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-row\">\r\n      <div class=\"col-12 col-md-6 form-group\">\r\n        <label for=\"sponsorWeb\" class=\"text-primary\">Website</label>\r\n        <input type=\"text\" class=\"form-control\" name=\"web\" #web=\"ngModel\" id=\"sponsorWeb\" [ngClass]=\"{'is-valid': web.valid}\" placeholder=\"Website\" [(ngModel)]=\"sponsor.website\">\r\n      </div>\r\n      <div class=\"form-group col-md-6 col-12\">\r\n        <label for=\"sponsorAddress\" class=\"text-primary\">Adres</label>\r\n        <input type=\"text\" class=\"form-control\" name=\"address\" #address=\"ngModel\" id=\"sponsorAddress\" [ngClass]=\"{'is-valid': web.valid}\" placeholder=\"Adres\" [(ngModel)]=\"sponsor.adres\">\r\n      </div>\r\n    </div>\r\n    <div class=\"form-row\">\r\n      <div class=\"col-12 col-md-6 form-group\">\r\n        <label for=\"mail\" class=\"text-primary\">Email</label>\r\n        <input class=\"form-control\" placeholder=\"Email\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" [ngClass]=\"{'is-valid': mail.valid, 'text-danger is-invalid': mail.invalid}\" [(ngModel)]=\"sponsor.email\" #mail=\"ngModel\" name=\"mail\" id=\"mail\" type=\"text\" value=\"\"> </div>\r\n      <div class=\"col-12 col-md-6 form-group\">\r\n        <label for=\"tel\" class=\"text-primary\">Telefoonnummer</label>\r\n        <input class=\"form-control\" placeholder=\"Telefoon\" [ngClass]=\"{'is-valid': tel.valid}\" [(ngModel)]=\"sponsor.telnr\" #tel=\"ngModel\" name=\"tel\" id=\"tel\" type=\"text\" value=\"\"> </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-12 col-md-6 form-group\">\r\n        <div class=\"row justify-content-center\" *ngIf=\"src\">\r\n          <div class=\"col-4\">\r\n            <img class=\"img-fluid\" [src]=\"src\">\r\n          </div>\r\n        </div>\r\n        <div class=\"w-100\"></div>\r\n        <div class=\"col-12\" *ngIf=\"uploader.progress > 0\">\r\n          <progressbar class=\"progress active\" [value]=\"uploader.progress\" [max]=\"100\" type=\"success\"></progressbar>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-12 col-md-6 form-group\">\r\n        <label for=\"sponsorSlogan\" class=\"text-primary\">slogan</label>\r\n        <textarea class=\"form-control\" [ngClass]=\"{'is-valid': slogan.valid}\" [(ngModel)]=\"sponsor.slogan\" #slogan=\"ngModel\" name=\"slogan\" id=\"sponsorSlogan\" value=\"\"></textarea>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-row\">\r\n      <div class=\"col-12 col-md-6 form-group\">\r\n        <span class=\"text-primary\" *ngIf=\"src\">Nieuwe foto uploaden</span>\r\n        <span class=\"text-primary\" *ngIf=\"!src\">Foto uploaden</span> <input type=\"file\" class=\"form-control-file\" id=\"validatedCustomFile\" imageUpload (imageSelected)=\"selected($event)\" [resizeOptions]=\"resizeOptions\" ng2FileSelect [uploader]=\"uploader\"\r\n          name=\"photoUpload\" (click)=\"uploader.clearQueue()\" (change)=\"checkImage()\" />\r\n      </div>\r\n    </div>\r\n    <div class=\"form-row\">\r\n      <div class=\"col-12 form-group\">\r\n        <div class=\"btn-group\">\r\n          <button class=\"btn btn-success\" [disabled]=\"!editSponsorForm.form.valid\" type=\"submit\" name=\"action\">Sponsor aanpassen <i class=\"fa-plus fa\" aria-hidden=\"true\"></i></button>\r\n          <button class=\"btn btn-dark\" [routerLink]=\"['/api/sponsor']\"><i class=\"fa fa-angle-double-left\" aria-hidden=\"true\"></i> Sponsorsoverzicht</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/api/sponsor/edit-sponsor/edit-sponsor.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/api/sponsor/edit-sponsor/edit-sponsor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditSponsorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sponsor_service__ = __webpack_require__("../../../../../src/app/api/sponsor/sponsor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_settings__ = __webpack_require__("../../../../../src/app/app-settings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_authentication_service__ = __webpack_require__("../../../../../src/app/user/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var EditSponsorComponent = /** @class */ (function () {
    function EditSponsorComponent(location, authenticationService, route, router, sponsorService, snackBar) {
        var _this = this;
        this.authenticationService = authenticationService;
        this.route = route;
        this.router = router;
        this.sponsorService = sponsorService;
        this.snackBar = snackBar;
        this.src = "";
        this.imgSync = true;
        this.sizeLimit = 5;
        this.resizeOptions = {
            resizeMaxHeight: 200,
            resizeMaxWidth: 200
        };
        route.params.subscribe(function (p) {
            _this.param = p['id'];
        });
        this.uploader = new __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload__["FileUploader"]({
            url: __WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* AppSettings */].API_ENDPOINT + 'sponsors/upload',
            authToken: 'Bearer ' + this.authenticationService.token
        });
        this.uploaderOptions = {
            allowedMimeType: ['image/png', 'image/jpg', 'image/jpeg'],
            removeAfterUpload: true
        };
        this.uploader.onSuccessItem = function (item, response, status, headers) {
            if (status == 200) {
                response = response.replace(/\"/g, "");
                _this.src = "assets/uploads/images/sponsors/" + response;
                _this.sponsor.fotoUrl = _this.src;
                _this.sponsorService.editSponsor(_this.sponsor).subscribe(function (res) {
                    if (res == "OK") {
                        _this.snackBar.open("sponsor " + _this.sponsor.naam + " succesvol aangepast.", "", {
                            duration: 2000
                        });
                    }
                });
            }
        };
        this.uploader.onErrorItem = function (item, response, status, headers) {
            _this.src = "";
            _this.sponsorService.editSponsor(_this.sponsor).subscribe(function (res) {
                if (res == "OK") {
                    _this.snackBar.open("sponsor " + _this.sponsor.naam + " succesvol aangepast.", "", {
                        duration: 2000
                    });
                }
            });
        };
    }
    EditSponsorComponent.prototype.selected = function (imageResult) {
        this.src = imageResult.resized
            && imageResult.resized.dataURL
            || imageResult.dataURL;
        console.log(this.src);
        if (this.imgSync == false) {
            this.src = "";
        }
    };
    EditSponsorComponent.prototype.checkImage = function () {
        this.imgSync = true;
        if (this.uploader.queue.length != 1) {
            alert("geen foto toegevoegd");
            this.imgSync = false;
        }
        for (var _i = 0, _a = this.uploader.queue; _i < _a.length; _i++) {
            var img = _a[_i];
            if (img.file.size / 1024 / 1024 > this.sizeLimit) {
                alert("File te groot");
                this.imgSync = false;
                this.uploader.clearQueue();
            }
            else if (img.file.type != "image/png" && img.file.type != "image/jpg" && img.file.type != "image/jpeg") {
                alert("Geen afbeelding");
                this.uploader.clearQueue();
                this.imgSync = false;
            }
        }
    };
    EditSponsorComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.uploader.getNotUploadedItems().length) {
            this.uploader.uploadAll();
        }
        else {
            this.sponsorService.editSponsor(this.sponsor).subscribe(function (res) {
                if (res == "OK") {
                    _this.snackBar.open("sponsor " + _this.sponsor.naam + " succesvol aangepast.", "", {
                        duration: 2000
                    });
                    _this.router.navigateByUrl('/api/sponsor').then(function () {
                        location.reload();
                    });
                }
            });
        }
    };
    EditSponsorComponent.prototype.loadSponsor = function () {
        var _this = this;
        this.sponsorService.getSponsor(this.param).subscribe(function (sponsor) {
            _this.sponsor = sponsor;
            _this.src = _this.sponsor.fotoUrl;
        }, function (err) {
            console.log(err);
        });
    };
    EditSponsorComponent.prototype.ngOnInit = function () {
        this.loadSponsor();
        this.uploader.onAfterAddingFile = function (file) { file.withCredentials = false; };
    };
    EditSponsorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-sponsor',
            template: __webpack_require__("../../../../../src/app/api/sponsor/edit-sponsor/edit-sponsor.component.html"),
            styles: [__webpack_require__("../../../../../src/app/api/sponsor/edit-sponsor/edit-sponsor.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"], __WEBPACK_IMPORTED_MODULE_7__user_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* Router */], __WEBPACK_IMPORTED_MODULE_1__sponsor_service__["a" /* SponsorService */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["d" /* MatSnackBar */]])
    ], EditSponsorComponent);
    return EditSponsorComponent;
}());



/***/ }),

/***/ "../../../../../src/app/api/sponsor/new-sponsor/new-sponsor.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 class=\"text-dark text-center\">Nieuwe sponsor toevoegen</h3>\r\n<div class=\"row justify-content-center\">\r\n  <form #newSponsorForm=\"ngForm\" (ngSubmit)=\"onSubmit()\" class=\"col-xs-12 col-12 col-md-10 col-lg-8 col-xl-6\">\r\n    <div class=\"form-row\">\r\n      <div class=\"col-12 col-md-6 form-group\">\r\n        <label for=\"sponsorName\" class=\"text-primary\">Naam</label>\r\n        <input class=\"form-control\" [ngClass]=\"{'is-valid': naam.valid, 'text-danger is-invalid': naam.invalid}\" [(ngModel)]=\"sponsor.naam\" #naam=\"ngModel\" name=\"naam\" required id=\"sponsorName\" type=\"text\" value=\"sponsor.naam\">\r\n        <div class=\"invalid-feedback\">Naam is vereist</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-row\">\r\n      <div class=\"col-12 col-md-6 form-group\">\r\n        <label for=\"sponsorWeb\" class=\"text-primary\">Website</label>\r\n        <input type=\"text\" class=\"form-control\" name=\"web\" #web=\"ngModel\" id=\"sponsorWeb\" [ngClass]=\"{'is-valid': web.valid}\" placeholder=\"Website\" [(ngModel)]=\"sponsor.website\">\r\n      </div>\r\n      <div class=\"form-group col-md-6 col-12\">\r\n        <label for=\"sponsorAddress\" class=\"text-primary\">Adres</label>\r\n        <input type=\"text\" class=\"form-control\" name=\"address\" #address=\"ngModel\" id=\"sponsorAddress\" [ngClass]=\"{'is-valid': web.valid}\" placeholder=\"Adres\" [(ngModel)]=\"sponsor.adres\">\r\n      </div>\r\n    </div>\r\n    <div class=\"form-row\">\r\n      <div class=\"col-12 col-md-6 form-group\">\r\n        <label for=\"mail\" class=\"text-primary\">Email</label>\r\n        <input class=\"form-control\" placeholder=\"Email\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" [ngClass]=\"{'is-valid': mail.valid, 'text-danger is-invalid': mail.invalid}\" [(ngModel)]=\"sponsor.email\" #mail=\"ngModel\" name=\"mail\" id=\"mail\" type=\"text\" value=\"\"> </div>\r\n      <div class=\"col-12 col-md-6 form-group\">\r\n        <label for=\"tel\" class=\"text-primary\">Telefoonnummer</label>\r\n        <input class=\"form-control\" placeholder=\"Telefoon\" [ngClass]=\"{'is-valid': tel.valid}\" [(ngModel)]=\"sponsor.telnr\" #tel=\"ngModel\" name=\"tel\" id=\"tel\" type=\"text\" value=\"\"> </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-12 col-md-6 form-group\">\r\n        <div class=\"row justify-content-center\" *ngIf=\"src\">\r\n          <div class=\"col-4\">\r\n            <img class=\"img-fluid\" [src]=\"src\">\r\n          </div>\r\n        </div>\r\n        <div class=\"w-100\"></div>\r\n        <div class=\"col-12\" *ngIf=\"uploader.progress > 0\">\r\n          <progressbar class=\"progress active\" [value]=\"uploader.progress\" [max]=\"100\" type=\"success\"></progressbar>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-12 col-md-6 form-group\">\r\n        <label for=\"sponsorSlogan\" class=\"text-primary\">slogan</label>\r\n        <textarea class=\"form-control\" [ngClass]=\"{'is-valid': slogan.valid}\" [(ngModel)]=\"sponsor.slogan\" #slogan=\"ngModel\" name=\"slogan\" id=\"sponsorSlogan\" value=\"\"></textarea>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-row\">\r\n      <div class=\"col-12 col-md-6 form-group\">\r\n        <span class=\"text-primary\" *ngIf=\"src\">Nieuwe foto uploaden</span>\r\n        <span class=\"text-primary\" *ngIf=\"!src\">Foto uploaden</span> <input type=\"file\" class=\"form-control-file\" id=\"validatedCustomFile\" imageUpload (imageSelected)=\"selected($event)\" [resizeOptions]=\"resizeOptions\" ng2FileSelect [uploader]=\"uploader\"\r\n          name=\"photoUpload\" (click)=\"uploader.clearQueue()\" (change)=\"checkImage()\" />\r\n      </div>\r\n    </div>\r\n    <div class=\"form-row\">\r\n      <div class=\"col-12 form-group\">\r\n        <div class=\"btn-group\">\r\n          <button class=\"btn btn-success\" [disabled]=\"!newSponsorForm.form.valid\" type=\"submit\" name=\"action\">Sponsor toevoegen <i class=\"fa-plus fa\" aria-hidden=\"true\"></i></button>\r\n          <button class=\"btn btn-dark\" [routerLink]=\"['/api/sponsor']\"><i class=\"fa fa-angle-double-left\" aria-hidden=\"true\"></i> Sponsorsoverzicht</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/api/sponsor/new-sponsor/new-sponsor.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/api/sponsor/new-sponsor/new-sponsor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewSponsorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sponsor_service__ = __webpack_require__("../../../../../src/app/api/sponsor/sponsor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sponsor__ = __webpack_require__("../../../../../src/app/api/sponsor/sponsor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_settings__ = __webpack_require__("../../../../../src/app/app-settings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_authentication_service__ = __webpack_require__("../../../../../src/app/user/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var NewSponsorComponent = /** @class */ (function () {
    function NewSponsorComponent(router, authenticationService, sponsorService, snackBar) {
        var _this = this;
        this.router = router;
        this.authenticationService = authenticationService;
        this.sponsorService = sponsorService;
        this.snackBar = snackBar;
        this.sponsor = new __WEBPACK_IMPORTED_MODULE_2__sponsor__["a" /* Sponsor */](0, "", "", "", "", "", "", "");
        this.imgSync = true;
        this.src = "";
        this.sizeLimit = 5;
        this.resizeOptions = {
            resizeMaxHeight: 200,
            resizeMaxWidth: 200
        };
        this.uploader = new __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload__["FileUploader"]({
            url: __WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* AppSettings */].API_ENDPOINT + 'sponsors/upload',
            authToken: 'Bearer ' + this.authenticationService.token
        });
        this.uploaderOptions = {
            allowedMimeType: ['image/png', 'image/jpg', 'image/jpeg'],
            removeAfterUpload: true
        };
        this.uploader.onSuccessItem = function (item, response, status, headers) {
            if (status == 200) {
                response = response.replace(/\"/g, "");
                _this.src = "assets/uploads/images/sponsors/" + response;
                _this.sponsor.fotoUrl = _this.src;
                _this.sponsorService.addNewSponsor(_this.sponsor).subscribe(function (res) {
                    if (res == "OK") {
                        _this.snackBar.open("Sponsor " + _this.sponsor.naam + " succesvol aangemaakt.", "", {
                            duration: 2000
                        });
                        _this.router.navigateByUrl('/api/sponsor');
                    }
                });
            }
        };
        this.uploader.onErrorItem = function (item, response, status, headers) {
            console.log("error");
            _this.src = "";
            _this.sponsorService.addNewSponsor(_this.sponsor).subscribe(function (res) {
                if (res == "OK") {
                    _this.snackBar.open("Sponsor " + _this.sponsor.naam + " succesvol aangemaakt.", "", {
                        duration: 2000
                    });
                    _this.router.navigateByUrl('/api/sponsor');
                }
            });
        };
    }
    NewSponsorComponent.prototype.selected = function (imageResult) {
        this.src = imageResult.resized
            && imageResult.resized.dataURL
            || imageResult.dataURL;
        if (this.imgSync == false) {
            this.src = "";
        }
    };
    NewSponsorComponent.prototype.checkImage = function () {
        this.imgSync = true;
        if (this.uploader.queue.length != 1) {
            alert("geen foto toegevoegd");
            this.imgSync = false;
        }
        for (var _i = 0, _a = this.uploader.queue; _i < _a.length; _i++) {
            var img = _a[_i];
            if (img.file.size / 1024 / 1024 > this.sizeLimit) {
                alert("File te groot");
                this.imgSync = false;
                this.uploader.clearQueue();
            }
            else if (img.file.type != "image/png" && img.file.type != "image/jpg" && img.file.type != "image/jpeg") {
                alert("Geen afbeelding");
                this.uploader.clearQueue();
                this.imgSync = false;
            }
        }
    };
    NewSponsorComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.uploader.getNotUploadedItems().length) {
            this.uploader.uploadAll();
            console.log("uploaded");
        }
        else {
            this.sponsorService.addNewSponsor(this.sponsor).subscribe(function (res) {
                if (res == "OK") {
                    _this.snackBar.open("Sponsor " + _this.sponsor.naam + " succesvol aangemaakt.", "", {
                        duration: 2000
                    });
                    _this.router.navigateByUrl('/api/sponsor').then(function () {
                        location.reload();
                    });
                }
            });
        }
    };
    NewSponsorComponent.prototype.ngOnInit = function () {
        this.uploader.onAfterAddingFile = function (file) { file.withCredentials = false; };
    };
    NewSponsorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-new-sponsor',
            template: __webpack_require__("../../../../../src/app/api/sponsor/new-sponsor/new-sponsor.component.html"),
            styles: [__webpack_require__("../../../../../src/app/api/sponsor/new-sponsor/new-sponsor.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["e" /* Router */], __WEBPACK_IMPORTED_MODULE_7__user_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_1__sponsor_service__["a" /* SponsorService */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["d" /* MatSnackBar */]])
    ], NewSponsorComponent);
    return NewSponsorComponent;
}());



/***/ }),

/***/ "../../../../../src/app/api/sponsor/sponsor-detail/sponsor-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"sponsor\">\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col col-md-10 col-lg-8\">\r\n      <div class=\"border-info\">\r\n        <div class=\"row align-items-center\">\r\n          <div class=\"col-12 col-md-4\">\r\n            <img *ngIf=\"sponsor.fotoUrl\" [src]=\"sponsor.fotoUrl\" alt=\"\" class=\"rounded img-fluid\">\r\n            <h2 *ngIf=\"!sponsor.fotoUrl\" class=\"text-center\">Geen foto beschikbaar</h2>\r\n            <!-- notice the \"circle\" class -->\r\n          </div>\r\n          <div class=\"col-12 col-md-8\">\r\n            <h2 class=\"text-primary mb-2\">{{sponsor.naam}}</h2>\r\n            <div class=\"row\">\r\n              <div class=\"col-12 col-md-6\">\r\n                <p>\r\n                  <strong>Website: </strong><br />{{sponsor.website}}\r\n                </p>\r\n                <p>\r\n                  <strong>Telefoonnummer: </strong><br />{{sponsor.telnr}}\r\n                </p>\r\n                <p>\r\n                  <strong>Email: </strong><br />{{sponsor.email}}\r\n                </p>\r\n                <p>\r\n                  <strong>Adres: </strong><br /> {{sponsor.adres}}\r\n                </p>\r\n                <p>\r\n                  <strong>Slogan: </strong><br />{{sponsor.slogan}}\r\n                </p>\r\n              </div>\r\n            </div>\r\n            <div class=\"row justify-content-center mt-3\">\r\n              <button class=\"btn btn-info\" [routerLink]=\"['/api/sponsor']\"><i class=\"fa fa-angle-double-left\" aria-hidden=\"true\"></i> Sponsoroverzicht</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div *ngIf=\"!sponsor\">\r\n  <h2 class=\"text-center\">Geen sponsor gevonden</h2>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/api/sponsor/sponsor-detail/sponsor-detail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/api/sponsor/sponsor-detail/sponsor-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SponsorDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sponsor_service__ = __webpack_require__("../../../../../src/app/api/sponsor/sponsor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SponsorDetailComponent = /** @class */ (function () {
    function SponsorDetailComponent(location, route, sponsorService) {
        var _this = this;
        this.route = route;
        this.sponsorService = sponsorService;
        route.params.subscribe(function (p) {
            _this.param = p['id'];
        });
    }
    SponsorDetailComponent.prototype.loadSponsor = function () {
        var _this = this;
        this.sponsorService.getSponsor(this.param).subscribe(function (sponsor) {
            _this.sponsor = sponsor;
        }, function (err) {
            console.log(err);
        });
    };
    SponsorDetailComponent.prototype.ngOnInit = function () {
        this.loadSponsor();
    };
    SponsorDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sponsor-detail',
            template: __webpack_require__("../../../../../src/app/api/sponsor/sponsor-detail/sponsor-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/api/sponsor/sponsor-detail/sponsor-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__sponsor_service__["a" /* SponsorService */]])
    ], SponsorDetailComponent);
    return SponsorDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/api/sponsor/sponsor.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"route.children.length === 0\">\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col col-md-10\">\r\n      <div class=\"row justify-content-center mb-3\">\r\n        <div class=\"col-md-8 col-lg-6 col-xl-4\">\r\n          <a routerLink=\"/api/sponsor/new-sponsor\" class=\"btn-lg btn-secondary btn-block btn\">Nieuwe sponsor aanmaken</a>\r\n        </div>\r\n      </div>\r\n      <div class=\"card border-info\">\r\n        <div class=\"card-header bg-primary\">\r\n          <h3 class=\" text-secondary text-center\">Sponsoroverzicht</h3>\r\n        </div>\r\n        <div class=\"card-body text-primary\">\r\n          <div class=\"row justify-content-center\">\r\n            <div *ngIf=\"sponsors != null\" class=\"col col-md-10 col-lg-8 col-xl-6\">\r\n              <input class=\"form-control\" (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Zoek\">\r\n            </div>\r\n          </div>\r\n          <div class=\"row mt-4\">\r\n            <mat-table class=\"table table-bordered table-hover\" #table [dataSource]=\"sponsors\" matSort>\r\n              <ng-container matColumnDef=\"naam\">\r\n                <mat-header-cell class=\"tableHeader \" *matHeaderCellDef mat-sort-header> Naam </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\" class=\"text-primary \"> <a class=\"apiLink\" [routerLink]=\"['/api/sponsor/sponsor-detail', element.sponsor_id]\">{{element.naam}}</a></mat-cell>\r\n              </ng-container>\r\n              <ng-container matColumnDef=\"website\">\r\n                <mat-header-cell class=\"tableHeader d-sm-block d-none\" *matHeaderCellDef mat-sort-header> Website </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\" class=\"text-primary d-sm-block d-none\"> {{element.website}}</mat-cell>\r\n              </ng-container>\r\n              <ng-container matColumnDef=\"email\">\r\n                <mat-header-cell class=\"tableHeader d-lg-block d-none\" *matHeaderCellDef mat-sort-header> Email </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\" class=\"text-primary d-lg-block d-none\">{{element.email}}</mat-cell>\r\n              </ng-container>\r\n              <ng-container matColumnDef=\"tel\">\r\n                <mat-header-cell class=\"tableHeader d-xl-block d-none\" *matHeaderCellDef mat-sort-header> Telefoonnummer </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\" class=\"text-primary d-xl-block d-none\">{{element.telnr}}</mat-cell>\r\n              </ng-container>\r\n              <ng-container matColumnDef=\"edit\">\r\n                <mat-header-cell class=\"tableHeader text-center\" *matHeaderCellDef> Aanpassen </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\" class=\"text-center\"> <a [routerLink]=\"['/api/sponsor/sponsor-edit', element.sponsor_id]\" class=\"text-primary\"><i class=\"material-icons\">edit</i></a> </mat-cell>\r\n              </ng-container>\r\n              <ng-container matColumnDef=\"del\">\r\n                <mat-header-cell class=\"tableHeader text-center\" *matHeaderCellDef> Verwijderen </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\" class=\"text-center hoverable\"> <a (click)=\"deleteSponsor(element.sponsor_id, element.naam)\" class=\"text-danger \"><i class=\"material-icons\">delete</i></a> </mat-cell>\r\n              </ng-container>\r\n              <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n              <mat-row class=\"table-info\" *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n            </mat-table>\r\n            <mat-paginator #paginator [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 20]\">\r\n            </mat-paginator>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-footer\">\r\n          <a routerLink=\"/api/sponsor/new-sponsor\" class=\"btn btn-success \">Nieuwe sponsor aanmaken</a>\r\n          <a class=\"float-sm-right btn btn-dark\" routerLink=\"/api\"><i class=\"fa fa-angle-double-left\" aria-hidden=\"true\"></i> Overzicht</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/api/sponsor/sponsor.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/api/sponsor/sponsor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SponsorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sponsor_service__ = __webpack_require__("../../../../../src/app/api/sponsor/sponsor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dialog_delete_dialog_service__ = __webpack_require__("../../../../../src/app/api/dialog/delete-dialog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_merge__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var SponsorComponent = /** @class */ (function () {
    function SponsorComponent(location, activeRoute, sponsorsService, dialogsService, snackBar) {
        this.activeRoute = activeRoute;
        this.sponsorsService = sponsorsService;
        this.dialogsService = dialogsService;
        this.snackBar = snackBar;
        this.displayedColumns = ['naam', 'website', 'email', 'tel', 'edit', 'del'];
        this.sponsors = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MatTableDataSource */]([]);
        this.route = activeRoute;
    }
    SponsorComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.sponsors.filter = filterValue;
    };
    SponsorComponent.prototype.deleteSponsor = function (id, naam) {
        var _this = this;
        this.dialogsService
            .confirm('Verwijder ' + naam, 'Ben je zeker dat je ' + naam + ' wilt verwijderen?')
            .subscribe(function (res) {
            if (res === "delete") {
                _this.sponsorsService.deleteSponsor(id).subscribe(function (res) {
                    if (res == true) {
                        _this.snackBar.open(naam + " succesvol verwijderd", "", {
                            duration: 2000
                        });
                        _this.loadSponsors();
                    }
                });
            }
        });
    };
    SponsorComponent.prototype.edited = function (success) {
        if (success == true) {
            this.loadSponsors();
        }
    };
    SponsorComponent.prototype.loadSponsors = function () {
        var _this = this;
        this.sponsorsService.getSponsors().subscribe(function (sponsors) {
            _this.sponsors = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MatTableDataSource */](sponsors);
            _this.sponsors.sort = _this.sort;
            _this.sponsors.paginator = _this.paginator;
        }, function (err) {
            console.log(err);
        });
    };
    SponsorComponent.prototype.ngOnInit = function () {
        this.loadSponsors();
    };
    SponsorComponent.prototype.ngAfterViewInit = function () {
        if (this.sponsors) {
            this.sponsors.sort = this.sort;
            this.sponsors.paginator = this.paginator;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MatSort */])
    ], SponsorComponent.prototype, "sort", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MatPaginator */])
    ], SponsorComponent.prototype, "paginator", void 0);
    SponsorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sponsor',
            template: __webpack_require__("../../../../../src/app/api/sponsor/sponsor.component.html"),
            styles: [__webpack_require__("../../../../../src/app/api/sponsor/sponsor.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_common__["Location"], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__sponsor_service__["a" /* SponsorService */], __WEBPACK_IMPORTED_MODULE_4__dialog_delete_dialog_service__["a" /* DeleteDialogService */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MatSnackBar */]])
    ], SponsorComponent);
    return SponsorComponent;
}());



/***/ }),

/***/ "../../../../../src/app/api/sponsor/sponsor.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SponsorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_settings__ = __webpack_require__("../../../../../src/app/app-settings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_authentication_service__ = __webpack_require__("../../../../../src/app/user/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SponsorService = /** @class */ (function () {
    function SponsorService(http, authenticationService) {
        this.http = http;
        this.authenticationService = authenticationService;
        this.sponsorURL = __WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* AppSettings */].API_ENDPOINT + '/sponsors';
        this.ploegenURL = __WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* AppSettings */].API_ENDPOINT + '/ploegen';
    }
    SponsorService.prototype.getSponsors = function () {
        return this.http.get(this.sponsorURL)
            .map(this.extractData)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    SponsorService.prototype.extractData = function (result) {
        return result.json().map(function (sponsor) {
            return {
                sponsor_id: sponsor.sponsor_id,
                naam: sponsor.naam,
                website: sponsor.website,
                email: sponsor.email,
                telnr: sponsor.telnr,
                adres: sponsor.adres,
                fotoUrl: sponsor.fotoUrl,
                slogan: sponsor.slogan
            };
        });
    };
    SponsorService.prototype.editSponsor = function (player) {
        var bodyString = JSON.stringify(player); // Stringify payload
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        headers.append('Authorization', 'Bearer ' + this.authenticationService.token);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers }); // Create a request option
        return this.http.put(this.sponsorURL + "/" + player['sponsor_id'], player, options) // ...using put request
            .map(function (res) { return res.statusText; }) // ...and calling .json() on the response to return data
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); }); //...errors if any
    };
    SponsorService.prototype.addNewSponsor = function (player) {
        var bodyString = JSON.stringify(player); // Stringify payload
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        headers.append('Authorization', 'Bearer ' + this.authenticationService.token);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers }); // Create a request option
        return this.http.post(this.sponsorURL, player, options) // ...using post request
            .map(function (res) { return res.statusText; }); // ...and calling .json() on the response to return data
    };
    SponsorService.prototype.deleteSponsor = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        headers.append('Authorization', 'Bearer ' + this.authenticationService.token);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers }); // Create a request option
        return this.http.delete(this.sponsorURL + "/" + id, options) // ...using put request
            .map(function (res) { return res.json(); }) // ...and calling .json() on the response to return data
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); }); //...errors if any
    };
    SponsorService.prototype.getSponsor = function (id) {
        return this.http.get(this.sponsorURL + "/" + id)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    SponsorService.prototype.getPloegBySponsor = function (id) {
        return this.http.get(this.ploegenURL + "/" + id)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    SponsorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_6__user_authentication_service__["a" /* AuthenticationService */]])
    ], SponsorService);
    return SponsorService;
}());



/***/ }),

/***/ "../../../../../src/app/api/sponsor/sponsor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Sponsor; });
var Sponsor = /** @class */ (function () {
    function Sponsor(sponsor_id, naam, website, email, telnr, fotoUrl, adres, slogan) {
        this.sponsor_id = sponsor_id;
        this.naam = naam;
        this.website = website;
        this.email = email;
        this.telnr = telnr;
        this.fotoUrl = fotoUrl;
        this.adres = adres;
        this.slogan = slogan;
    }
    return Sponsor;
}());



/***/ }),

/***/ "../../../../../src/app/api/wedstrijden/edit-wedstrijd/edit-wedstrijd.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 class=\"text-primary text-center\">Verslag aanpassen</h3>\r\n<div *ngIf=\"game\" class=\"row justify-content-center\">\r\n  <form #editGameForm=\"ngForm\" class=\"col-xs-12 col-12 col-md-10 col-lg-8 col-xl-6\" (ngSubmit)=\"onSubmit()\" novalidate>\r\n    <div class=\"form-row\">\r\n      <div class=\"col form-group\">\r\n        <input type=\"text\" class=\"form-control\" name=\"birth\" #birth=\"ngModel\" required id=\"playerBirth\" [ngClass]=\"{'text-success is-valid': birth.valid, 'text-danger is-invalid': birth.invalid}\" placeholder=\"Datum\" bsDatepicker [(ngModel)]=\"game.datum\">\r\n        <div class=\"invalid-feedback\">Datum is vereist</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-row\">\r\n      <div class=\"form-group col\">\r\n        <label for=\"ploegSelect\" class=\"text-primary d-block font-weight-bold\">Klinge</label>\r\n        <select class=\"form-control \" [(ngModel)]=\"game.ploeg_id\" required name=\"ploegSelect\" id=\"ploegSelect\" (change)=\"setTeamName($event)\">\r\n         <option *ngFor=\"let ploeg of ploegen\" name=\"ploeg\" [ngValue]=\"ploeg.ploeg_id\">{{ploeg.naam}}</option>\r\n       </select>\r\n        <div class=\"invalid-feedback\">Je moet een ploeg opgeven</div>\r\n      </div>\r\n      <div class=\"form-group col\">\r\n        <label for=\"tel\" [ngClass]=\"{'active': game.tegenstander != ''}\" class=\"text-primary font-weight-bold\">Tegenstander</label>\r\n        <input placeholder=\"Tegenstander\" class=\"form-control\" [ngClass]=\"{'text-success is-valid': tel.valid}\" [(ngModel)]=\"game.tegenstander\" required #tel=\"ngModel\" name=\"tel\" id=\"tel\" type=\"text\" value=\"\">\r\n        <div class=\"invalid-feedback\">Kies een tegenstander</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-row\">\r\n      <div class=\"form-group col\">\r\n        <label for=\"pos\" class=\"text-primary font-weight-bold\">Doelpunten KSK {{game.ploegNaam}}</label>\r\n        <input placeholder=\"Doelpunten KSK \" class=\"form-control\" [ngClass]=\"{'text-success is-valid': pos.valid, 'text-danger is-invalid': pos.invalid}\" [(ngModel)]=\"game.doelpuntenKSK\" #pos=\"ngModel\" pattern=\"[0-9]*\" name=\"pos\" id=\"pos\" type=\"text\" value=\"\">\r\n        <div class=\"invalid-feedback\">Enkel numerieke waarden</div>\r\n      </div>\r\n      <div class=\"form-group col\">\r\n        <label for=\"goal\" class=\"text-primary font-weight-bold\">Doelpunten {{game.tegenstander}}</label>\r\n        <input placeholder=\"Doelpunten tegenstander\" class=\"form-control\" [ngClass]=\"{'text-success is-valid': goal.valid, 'text-danger is-invalid': goal.invalid}\" pattern=\"[0-9]*\" [(ngModel)]=\"game.doelpuntenTegenstander\" #goal=\"ngModel\" name=\"goal\" id=\"goal\"\r\n          type=\"text\" value=\"\">\r\n        <div class=\"invalid-feedback\">Enkel numerieke waarden</div>\r\n      </div>\r\n    </div>\r\n    <label class=\"col-form-label text-primary font-weight-bold\">KSK thuis/uit?</label>\r\n    <div class=\"form-check\">\r\n      <input class=\"form-check-input\" [(ngModel)]=\"game.thuisSpelend\" type=\"radio\" name=\"ingeschreven\" id=\"exampleRadios1\" value=\"1\">\r\n      <label class=\"form-check-label text-primary\" for=\"exampleRadios1\">\r\n          Thuis\r\n        </label>\r\n    </div>\r\n    <div class=\"form-check\">\r\n      <input class=\"form-check-input\" [(ngModel)]=\"game.thuisSpelend\" type=\"radio\" name=\"ingeschreven\" id=\"exampleRadios2\" value=\"0\">\r\n      <label class=\"form-check-label text-primary\" for=\"exampleRadios2\">\r\n          Uit\r\n        </label>\r\n    </div>\r\n    <div class=\"form-row\">\r\n      <div class=\"form-group col s12\">\r\n        <p class=\"text-primary font-weight-bold\">\r\n          Verslag\r\n        </p>\r\n        <div [froalaEditor]=\"froalaOptions\" [(froalaModel)]=\"game.verslag\" name=\"verslag\" id=\"verslag\"></div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-row\">\r\n      <div class=\"form-group col\">\r\n        <button class=\"btn btn-success\" [disabled]=\"!editGameForm.form.valid\" type=\"submit\" name=\"action\">Verslag aanpassen\r\n          <i class=\"fa-floppy-o fa\" aria-hidden=\"true\"></i>\r\n        </button>\r\n        <button class=\"btn btn-info\" [routerLink]=\"['/api/wedstrijden']\"><i class=\"fa-angle-double-left fa\" aria-hidden=\"true\"></i> Alle verslagen</button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n<div *ngIf=\"!game\">\r\n  <h5 class=\"text-center text-danger\">Kon verslag niet vinden</h5>\r\n  <div class=\"center\">\r\n    <button class=\"btn btn-info \" [routerLink]=\"['/api/wedstrijden']\"><i class=\"fa fa-angle-double-left\" aria-hidden=\"true\"></i> Alle verslagen</button> </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/api/wedstrijden/edit-wedstrijd/edit-wedstrijd.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/api/wedstrijden/edit-wedstrijd/edit-wedstrijd.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditWedstrijdComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ploegen_ploegen_service__ = __webpack_require__("../../../../../src/app/api/ploegen/ploegen.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_settings__ = __webpack_require__("../../../../../src/app/app-settings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__wedstrijd_service__ = __webpack_require__("../../../../../src/app/api/wedstrijden/wedstrijd.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap_datepicker__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var EditWedstrijdComponent = /** @class */ (function () {
    function EditWedstrijdComponent(location, route, router, ploegenService, wedstrijdService, localeService, snackBar) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.ploegenService = ploegenService;
        this.wedstrijdService = wedstrijdService;
        this.localeService = localeService;
        this.snackBar = snackBar;
        this.selected = new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["b" /* FormControl */]('valid', [
            __WEBPACK_IMPORTED_MODULE_8__angular_forms__["j" /* Validators */].required
        ]);
        this.froalaOptions = {
            charCounterCount: false,
            imageMaxSize: 1024 * 1024 * 5,
            imageUploadURL: __WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* AppSettings */].API_ENDPOINT + 'wedstrijden/upload',
            videoUpload: false,
            fileUpload: false
        };
        route.params.subscribe(function (p) {
            _this.param = p['id'];
        });
        localeService.use('nl');
        // router.events.subscribe((val) => {
        //   let s: string;
        //   let v: number;
        //   s = location.path();
        //   v = s.lastIndexOf("/")
        //   this.param = +s.substring(v+1, s.length)
        // });
    }
    EditWedstrijdComponent.prototype.onSubmit = function () {
        var _this = this;
        this.playDate = new Date(this.game.datum);
        this.game.datum = __WEBPACK_IMPORTED_MODULE_5_moment__(this.playDate).format('YYYY-MM-DD HH-mm-ss');
        this.wedstrijdService.editWedstrijd(this.game).subscribe(function (res) {
            if (res == "OK") {
                var thuis = void 0;
                if (_this.game.thuisSpelend) {
                    thuis = "(T)";
                }
                else {
                    thuis = "(U)";
                }
                _this.snackBar.open("Verslag Klinge " + _this.game.ploegNaam + ' - ' + _this.game.tegenstander + " succesvol aangepast. " + thuis, "", {
                    duration: 2000
                });
                _this.router.navigateByUrl('/api/wedstrijden').then(function () {
                    location.reload();
                });
            }
        });
    };
    EditWedstrijdComponent.prototype.loadPloegen = function () {
        var _this = this;
        this.ploegenService.getPloegen().subscribe(function (ploegen) {
            _this.ploegen = ploegen;
        }, function (err) {
            console.log(err);
        });
    };
    EditWedstrijdComponent.prototype.loadGame = function () {
        var _this = this;
        this.wedstrijdService.getWedstrijd(this.param).subscribe(function (game) {
            _this.game = game;
        }, function (err) {
            console.log(err);
        });
    };
    EditWedstrijdComponent.prototype.setTeamName = function (ev) {
        for (var _i = 0, _a = this.ploegen; _i < _a.length; _i++) {
            var l = _a[_i];
            if (l.ploeg_id == ev.target.value) {
                this.game.ploegNaam = l.naam;
            }
        }
    };
    EditWedstrijdComponent.prototype.ngOnInit = function () {
        this.loadPloegen();
        this.loadGame();
    };
    EditWedstrijdComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-wedstrijd',
            template: __webpack_require__("../../../../../src/app/api/wedstrijden/edit-wedstrijd/edit-wedstrijd.component.html"),
            styles: [__webpack_require__("../../../../../src/app/api/wedstrijden/edit-wedstrijd/edit-wedstrijd.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* Router */], __WEBPACK_IMPORTED_MODULE_1__ploegen_ploegen_service__["a" /* PloegenService */], __WEBPACK_IMPORTED_MODULE_6__wedstrijd_service__["a" /* WedstrijdService */], __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap_datepicker__["b" /* BsLocaleService */], __WEBPACK_IMPORTED_MODULE_9__angular_material__["d" /* MatSnackBar */]])
    ], EditWedstrijdComponent);
    return EditWedstrijdComponent;
}());



/***/ }),

/***/ "../../../../../src/app/api/wedstrijden/wedstrijd-detail/wedstrijd-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"game\">\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <div class=\"card border-info\">\r\n        <div class=\"card-header bg-primary\">\r\n          <h3 *ngIf=\"game.thuisSpelend\" class=\"text-center text-secondary\">Verslag {{game.ploegNaam}} - {{game.tegenstander}}</h3>\r\n          <h3 *ngIf=\"!game.thuisSpelend\" class=\"text-center text-secondary\">Verslag {{game.tegenstander}} - {{game.ploegNaam}}</h3>\r\n          <p class=\"text-right muted text-info\">\r\n            <span>{{game.datum | amDateFormat:'DD MMMM YYYY'}}</span>\r\n          </p>\r\n        </div>\r\n        <div class=\"card-body text-primary\">\r\n          <h4 *ngIf=\"game.thuisSpelend\" class=\"text-center font-weight-bold bg-info p-4\">Uitslag: {{game.doelpuntenKSK}} - {{game.doelpuntenTegenstander}} </h4>\r\n          <h4 *ngIf=\"!game.thuisSpelend\" class=\"text-center font-weight-bold bg-info p-4\">Uitslag: {{game.doelpuntenTegenstander}} - {{game.doelpuntenKSK}}</h4>\r\n          <div [froalaView]=\"game.verslag\"></div>\r\n        </div>\r\n        <div class=\"card-footer\">\r\n          <a routerLink=\"/api/wedstrijden/wedstrijd-nieuw\" class=\"btn btn-success\">Nieuw verslag opmaken <i class=\"fa fa-plus\" aria-hidden=\"true\"></i></a>\r\n          <a class=\"btn btn-info\" routerLink=\"/api/wedstrijden\"><i class=\"fa fa-angle-double-left\" aria-hidden=\"true\"></i> Alle verslagen</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div *ngIf=\"!game\">\r\n  <h5 class=\"text-danger text-center\">Kon verslag niet vinden</h5>\r\n  <div class=\"center\">\r\n    <button class=\"btn btn-info \" [routerLink]=\"['/api/wedstrijden']\"><i class=\"fa fa-angle-double-left\" aria-hidden=\"true\"></i> Alle verslagen</button> </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/api/wedstrijden/wedstrijd-detail/wedstrijd-detail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/api/wedstrijden/wedstrijd-detail/wedstrijd-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WedstrijdDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wedstrijd_service__ = __webpack_require__("../../../../../src/app/api/wedstrijden/wedstrijd.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WedstrijdDetailComponent = /** @class */ (function () {
    function WedstrijdDetailComponent(location, route, wedstrijdService) {
        var _this = this;
        this.route = route;
        this.wedstrijdService = wedstrijdService;
        route.params.subscribe(function (p) {
            _this.param = p['id'];
        });
    }
    WedstrijdDetailComponent.prototype.loadGame = function () {
        var _this = this;
        this.wedstrijdService.getWedstrijd(this.param).subscribe(function (game) {
            _this.game = game;
        }, function (err) {
            console.log(err);
        });
    };
    WedstrijdDetailComponent.prototype.ngOnInit = function () {
        this.loadGame();
    };
    WedstrijdDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-wedstrijd-detail',
            template: __webpack_require__("../../../../../src/app/api/wedstrijden/wedstrijd-detail/wedstrijd-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/api/wedstrijden/wedstrijd-detail/wedstrijd-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__wedstrijd_service__["a" /* WedstrijdService */]])
    ], WedstrijdDetailComponent);
    return WedstrijdDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/api/wedstrijden/wedstrijd-nieuw/wedstrijd-nieuw.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 class=\"text-primary text-center\">Nieuw verslag toevoegen</h3>\r\n<div class=\"row justify-content-center\">\r\n  <form #newGameForm=\"ngForm\" (ngSubmit)=\"onSubmit()\" class=\"col-xs-12 col-12 col-md-10 col-lg-8 col-xl-6\">\r\n    <div class=\"form-row\">\r\n      <div class=\"col form-group\">\r\n        <input type=\"text\" class=\"form-control\" name=\"birth\" #birth=\"ngModel\" required id=\"playerBirth\" [ngClass]=\"{'text-success is-valid': birth.valid, 'text-danger is-invalid': birth.invalid}\" placeholder=\"Datum\" bsDatepicker [(ngModel)]=\"game.datum\">\r\n        <div class=\"invalid-feedback\">Datum is vereist</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-row\">\r\n      <div class=\"form-group col\">\r\n        <label for=\"ploegSelect\" class=\"text-primary d-block font-weight-bold\">Klinge</label>\r\n        <select class=\"custom-select \" [(ngModel)]=\"game.ploeg_id\" required name=\"ploegSelect\" id=\"ploegSelect\" (change)=\"setTeamName($event)\">\r\n         <option *ngFor=\"let ploeg of ploegen\" name=\"ploeg\" [ngValue]=\"ploeg.ploeg_id\">{{ploeg.naam}}</option>\r\n       </select>\r\n        <div class=\"invalid-feedback\">Je moet een ploeg opgeven</div>\r\n      </div>\r\n      <div class=\"form-group col\">\r\n        <label for=\"tel\" [ngClass]=\"{'active': game.tegenstander != ''}\" class=\"text-primary font-weight-bold\">Tegenstander</label>\r\n        <input placeholder=\"Tegenstander\" class=\"form-control\" [ngClass]=\"{'text-success is-valid': tel.valid}\" [(ngModel)]=\"game.tegenstander\" required #tel=\"ngModel\" name=\"tel\" id=\"tel\" type=\"text\" value=\"\">\r\n        <div class=\"invalid-feedback\">Kies een tegenstander</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-row\">\r\n      <div class=\"form-group col\">\r\n        <label for=\"pos\" class=\"text-primary font-weight-bold\">Doelpunten KSK {{game.ploegNaam}}</label>\r\n        <input placeholder=\"Doelpunten KSK \" class=\"form-control\" [ngClass]=\"{'text-success is-valid': pos.valid, 'text-danger is-invalid': pos.invalid}\" [(ngModel)]=\"game.doelpuntenKSK\" #pos=\"ngModel\" pattern=\"[0-9]*\" name=\"pos\" id=\"pos\" type=\"text\" value=\"\">\r\n        <div class=\"invalid-feedback\">Enkel numerieke waarden</div>\r\n      </div>\r\n      <div class=\"form-group col\">\r\n        <label for=\"goal\" class=\"text-primary font-weight-bold\">Doelpunten {{game.tegenstander}}</label>\r\n        <input placeholder=\"Doelpunten tegenstander\" class=\"form-control\" [ngClass]=\"{'text-success is-valid': goal.valid, 'text-danger is-invalid': goal.invalid}\" pattern=\"[0-9]*\" [(ngModel)]=\"game.doelpuntenTegenstander\" #goal=\"ngModel\" name=\"goal\" id=\"goal\"\r\n          type=\"text\" value=\"\">\r\n        <div class=\"invalid-feedback\">Enkel numerieke waarden</div>\r\n      </div>\r\n    </div>\r\n    <label class=\"col-form-label text-primary font-weight-bold\">KSK thuis/uit?</label>\r\n    <div class=\"form-check\">\r\n      <input class=\"form-check-input\" [(ngModel)]=\"game.thuisSpelend\" type=\"radio\" name=\"ingeschreven\" id=\"exampleRadios1\" value=\"1\">\r\n      <label class=\"form-check-label text-primary\" for=\"exampleRadios1\">\r\n          Thuis\r\n        </label>\r\n    </div>\r\n    <div class=\"form-check\">\r\n      <input class=\"form-check-input\" [(ngModel)]=\"game.thuisSpelend\" type=\"radio\" name=\"ingeschreven\" id=\"exampleRadios2\" value=\"0\">\r\n      <label class=\"form-check-label text-primary\" for=\"exampleRadios2\">\r\n          Uit\r\n        </label>\r\n    </div>\r\n    <div class=\"form-row\">\r\n      <div class=\"form-group col\">\r\n        <p class=\"text-primary font-weight-bold\">\r\n          Verslag\r\n        </p>\r\n        <div [froalaEditor]='froalaOptions' [(froalaModel)]=\"game.verslag\" name=\"verslag\" id=\"verslag\"></div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-row\">\r\n      <div class=\"form-group col\">\r\n        <button class=\"btn btn-success\" [disabled]=\"!newGameForm.form.valid || game.ploeg_id == ''\" type=\"submit\" name=\"action\">Verslag toevoegen\r\n          <i class=\"fa-floppy-o fa\" aria-hidden=\"true\"></i>\r\n        </button>\r\n        <button class=\"btn btn-info\" [routerLink]=\"['/api/wedstrijden']\"><i class=\"fa-angle-double-left fa\" aria-hidden=\"true\"></i> Alle verslagen</button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/api/wedstrijden/wedstrijd-nieuw/wedstrijd-nieuw.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/api/wedstrijden/wedstrijd-nieuw/wedstrijd-nieuw.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WedstrijdNieuwComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ploegen_ploegen_service__ = __webpack_require__("../../../../../src/app/api/ploegen/ploegen.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_settings__ = __webpack_require__("../../../../../src/app/app-settings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__wedstrijd_service__ = __webpack_require__("../../../../../src/app/api/wedstrijden/wedstrijd.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__wedstrijd__ = __webpack_require__("../../../../../src/app/api/wedstrijden/wedstrijd.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__user_authentication_service__ = __webpack_require__("../../../../../src/app/user/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var WedstrijdNieuwComponent = /** @class */ (function () {
    function WedstrijdNieuwComponent(authenticationService, location, router, ploegenService, wedstrijdService) {
        var _this = this;
        this.authenticationService = authenticationService;
        this.router = router;
        this.ploegenService = ploegenService;
        this.wedstrijdService = wedstrijdService;
        this.game = new __WEBPACK_IMPORTED_MODULE_7__wedstrijd__["a" /* Wedstrijd */](0, true, "", "", "", 0, 0, 0, "");
        this.froalaOptions = {
            charCounterCount: false,
            imageMaxSize: 1024 * 1024 * 5,
            imageUploadURL: __WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* AppSettings */].API_ENDPOINT + 'wedstrijden/upload',
            videoUpload: false,
            fileUpload: false,
            requestHeaders: {
                Authorization: 'Bearer ' + this.authenticationService.token
            }
        };
        this.selected = new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["b" /* FormControl */]('valid', [
            __WEBPACK_IMPORTED_MODULE_8__angular_forms__["j" /* Validators */].required
        ]);
        router.events.subscribe(function (val) {
            var s;
            var v;
            s = location.path();
            v = s.lastIndexOf("/");
            _this.param = +s.substring(v + 1, s.length);
        });
    }
    WedstrijdNieuwComponent.prototype.onSubmit = function () {
        var _this = this;
        this.playDate = new Date(this.game.datum);
        this.game.datum = __WEBPACK_IMPORTED_MODULE_5_moment__(this.playDate).format('YYYY-MM-DD HH-mm-ss');
        this.wedstrijdService.addNewWedstrijd(this.game).subscribe(function (res) {
            if (res == "OK") {
                var thuis = void 0;
                if (_this.game.thuisSpelend) {
                    thuis = "(T)";
                }
                else {
                    thuis = "(U)";
                }
                // this.snackBar.open("Verslag Klinge " + this.game.ploegNaam + ' - ' + this.game.tegenstander + " succesvol aangemaakt. " + thuis,"", {
                //   duration: 2000
                // });
                _this.router.navigateByUrl('/api/wedstrijden');
            }
        });
    };
    WedstrijdNieuwComponent.prototype.loadPloegen = function () {
        var _this = this;
        this.ploegenService.getPloegen().subscribe(function (ploegen) {
            _this.ploegen = ploegen;
        }, function (err) {
            console.log(err);
        });
    };
    WedstrijdNieuwComponent.prototype.setTeamName = function (ev) {
        console.log(ev.value);
        for (var _i = 0, _a = this.ploegen; _i < _a.length; _i++) {
            var l = _a[_i];
            if (l.ploeg_id == ev.value) {
                this.game.ploegNaam = l.naam;
            }
        }
    };
    WedstrijdNieuwComponent.prototype.ngOnInit = function () {
        this.loadPloegen();
    };
    WedstrijdNieuwComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-wedstrijd-nieuw',
            template: __webpack_require__("../../../../../src/app/api/wedstrijden/wedstrijd-nieuw/wedstrijd-nieuw.component.html"),
            styles: [__webpack_require__("../../../../../src/app/api/wedstrijden/wedstrijd-nieuw/wedstrijd-nieuw.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__user_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"], __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* Router */], __WEBPACK_IMPORTED_MODULE_1__ploegen_ploegen_service__["a" /* PloegenService */], __WEBPACK_IMPORTED_MODULE_6__wedstrijd_service__["a" /* WedstrijdService */]])
    ], WedstrijdNieuwComponent);
    return WedstrijdNieuwComponent;
}());



/***/ }),

/***/ "../../../../../src/app/api/wedstrijden/wedstrijd.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WedstrijdService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_settings__ = __webpack_require__("../../../../../src/app/app-settings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_authentication_service__ = __webpack_require__("../../../../../src/app/user/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var WedstrijdService = /** @class */ (function () {
    function WedstrijdService(http, authenticationService) {
        this.http = http;
        this.authenticationService = authenticationService;
        this.wedstrijdenURL = __WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* AppSettings */].API_ENDPOINT + '/wedstrijden';
        this.ploegenURL = __WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* AppSettings */].API_ENDPOINT + '/ploegen';
    }
    WedstrijdService.prototype.getWedstrijden = function () {
        return this.http.get(this.wedstrijdenURL)
            .map(this.extractData)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    WedstrijdService.prototype.extractData = function (result) {
        return result.json().map(function (wedstrijd) {
            return {
                wedstrijd_id: wedstrijd.wedstrijd_id,
                thuisSpelend: wedstrijd.thuisSpelend,
                tegenstander: wedstrijd.tegenstander,
                datum: wedstrijd.datum,
                verslag: wedstrijd.verslag,
                doelpuntenKSK: wedstrijd.doelpuntenKSK,
                doelpuntenTegenstander: wedstrijd.doelpuntenTegenstander,
                ploeg_id: wedstrijd.ploeg_id,
                ploegNaam: wedstrijd.ploegNaam
            };
        });
    };
    WedstrijdService.prototype.editWedstrijd = function (wedstrijd) {
        var bodyString = JSON.stringify(wedstrijd); // Stringify payload
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        headers.append('Authorization', 'Bearer ' + this.authenticationService.token);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers }); // Create a request option
        return this.http.put(this.wedstrijdenURL + "/" + wedstrijd['wedstrijd_id'], wedstrijd, options) // ...using put request
            .map(function (res) { return res.statusText; }) // ...and calling .json() on the response to return data
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); }); //...errors if any
    };
    WedstrijdService.prototype.addNewWedstrijd = function (wedstrijd) {
        var bodyString = JSON.stringify(wedstrijd); // Stringify payload
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        headers.append('Authorization', 'Bearer ' + this.authenticationService.token);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers }); // Create a request option
        return this.http.post(this.wedstrijdenURL, wedstrijd, options) // ...using post request
            .map(function (res) { return res.statusText; }); // ...and calling .json() on the response to return data
    };
    WedstrijdService.prototype.deleteWedstrijd = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        headers.append('Authorization', 'Bearer ' + this.authenticationService.token);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers }); // Create a request option
        return this.http.delete(this.wedstrijdenURL + "/" + id, options) // ...using put request
            .map(function (res) { return res.json(); }) // ...and calling .json() on the response to return data
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); }); //...errors if any
    };
    WedstrijdService.prototype.getWedstrijd = function (id) {
        return this.http.get(this.wedstrijdenURL + "/" + id)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    WedstrijdService.prototype.getLastGame = function () {
        return this.http.get(this.wedstrijdenURL + "/senioren/lastGame")
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    WedstrijdService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_6__user_authentication_service__["a" /* AuthenticationService */]])
    ], WedstrijdService);
    return WedstrijdService;
}());



/***/ }),

/***/ "../../../../../src/app/api/wedstrijden/wedstrijd.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Wedstrijd; });
var Wedstrijd = /** @class */ (function () {
    function Wedstrijd(wedstrijd_id, thuisSpelend, tegenstander, datum, verslag, doelpuntenKSK, doelpuntenTegenstander, ploeg_id, ploegNaam) {
        this.wedstrijd_id = wedstrijd_id;
        this.thuisSpelend = thuisSpelend;
        this.tegenstander = tegenstander;
        this.datum = datum;
        this.verslag = verslag;
        this.doelpuntenKSK = doelpuntenKSK;
        this.doelpuntenTegenstander = doelpuntenTegenstander;
        this.ploeg_id = ploeg_id;
        this.ploegNaam = ploegNaam;
    }
    return Wedstrijd;
}());



/***/ }),

/***/ "../../../../../src/app/api/wedstrijden/wedstrijden.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"route.children.length === 0\">\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col col-md-10\">\r\n      <div class=\"row justify-content-center mb-3\">\r\n        <div class=\"col-md-8 col-lg-6 col-xl-4\">\r\n          <a routerLink=\"/api/wedstrijden/wedstrijd-nieuw\" class=\"btn-lg btn-secondary btn-block btn\">Nieuw verslag aanmaken</a>\r\n        </div>\r\n      </div>\r\n      <div class=\"card border-info\">\r\n        <div class=\"card-header bg-primary\">\r\n          <h3 class=\" text-secondary text-center\">Wedstrijdverslagen</h3>\r\n        </div>\r\n        <div class=\"card-body text-primary\">\r\n          <div class=\"row justify-content-center\">\r\n            <div *ngIf=\"wedstrijden != null\" class=\"col col-md-10 col-lg-8 col-xl-6\">\r\n              <input class=\"form-control\" (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Zoek\">\r\n            </div>\r\n          </div>\r\n          <div class=\"row mt-4\">\r\n            <mat-table class=\"table table-bordered table-hover\" #table [dataSource]=\"wedstrijden\" matSort>\r\n              <ng-container matColumnDef=\"datum\">\r\n                <mat-header-cell class=\"tableHeader \" *matHeaderCellDef mat-sort-header> Datum </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\" class=\"text-primary \"> <a class=\"apiLink\" [routerLink]=\"['/api/wedstrijden/wedstrijd-detail', element.wedstrijd_id]\"> {{element.datum | amDateFormat:'DD/MM/YYYY'}}  </a></mat-cell>\r\n              </ng-container>\r\n              <ng-container matColumnDef=\"thuisploeg\">\r\n                <mat-header-cell class=\"tableHeader \" *matHeaderCellDef mat-sort-header> Thuisploeg </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\" class=\"text-primary \"> <span *ngIf=\"element.thuisSpelend == true\"> {{element.ploegNaam}}</span> <span *ngIf=\"element.thuisSpelend == false\"> {{element.tegenstander}}</span> </mat-cell>\r\n              </ng-container>\r\n              <ng-container matColumnDef=\"uitploeg\">\r\n                <mat-header-cell class=\"tableHeader \" *matHeaderCellDef mat-sort-header> Uitploeg </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\" class=\"text-primary \"><span *ngIf=\"element.thuisSpelend == false\"> {{element.ploegNaam}}</span> <span *ngIf=\"element.thuisSpelend == true\"> {{element.tegenstander}}</span> </mat-cell>\r\n              </ng-container>\r\n              <ng-container matColumnDef=\"uitslag\">\r\n                <mat-header-cell class=\"tableHeader\" *matHeaderCellDef mat-sort-header> Uitslag </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\" class=\"text-primary\"><span *ngIf=\"element.thuisSpelend == true\">{{element.doelpuntenKSK}} - {{element.doelpuntenTegenstander}}</span><span *ngIf=\"element.thuisSpelend == false\"> {{element.doelpuntenTegenstander}} - {{element.doelpuntenKSK}} </span> </mat-cell>\r\n              </ng-container>\r\n              <ng-container matColumnDef=\"edit\">\r\n                <mat-header-cell class=\"tableHeader text-center\" *matHeaderCellDef> Aanpassen </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\" class=\"text-center\"> <a [routerLink]=\"['/api/wedstrijden/wedstrijd-edit', element.wedstrijd_id]\" class=\"text-primary\"><i class=\"material-icons\">edit</i></a> </mat-cell>\r\n              </ng-container>\r\n              <ng-container matColumnDef=\"del\">\r\n                <mat-header-cell class=\"tableHeader text-center\" *matHeaderCellDef> Verwijderen </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\" class=\"text-center hoverable\"> <a (click)=\"deleteWedstrijd(element.wedstrijd_id, element.ploegNaam, element.tegenstander)\" class=\"text-danger \"><i class=\"material-icons\">delete</i></a> </mat-cell>\r\n              </ng-container>\r\n              <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n              <mat-row class=\"table-info\" *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n            </mat-table>\r\n            <mat-paginator #paginator [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 20]\">\r\n            </mat-paginator>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-footer\">\r\n          <a routerLink=\"/api/wedstrijden/wedstrijd-nieuw\" class=\"btn btn-success \">Nieuw verslag aanmaken</a>\r\n          <a class=\"float-sm-right btn btn-dark\" routerLink=\"/api\"><i class=\"fa fa-angle-double-left\" aria-hidden=\"true\"></i> Overzicht</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/api/wedstrijden/wedstrijden.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/api/wedstrijden/wedstrijden.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WedstrijdenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wedstrijd_service__ = __webpack_require__("../../../../../src/app/api/wedstrijden/wedstrijd.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dialog_delete_dialog_service__ = __webpack_require__("../../../../../src/app/api/dialog/delete-dialog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_merge__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var WedstrijdenComponent = /** @class */ (function () {
    function WedstrijdenComponent(location, router, activeRoute, wedstrijdService, dialogsService, snackBar) {
        this.router = router;
        this.wedstrijdService = wedstrijdService;
        this.dialogsService = dialogsService;
        this.snackBar = snackBar;
        // @Output() updateRoute = new EventEmitter<string>();
        this.displayedColumns = ['datum', 'thuisploeg', 'uitploeg', 'uitslag', 'edit', 'del'];
        this.wedstrijden = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MatTableDataSource */]([]);
        this.route = activeRoute;
    }
    WedstrijdenComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.wedstrijden.filter = filterValue;
    };
    WedstrijdenComponent.prototype.deleteWedstrijd = function (id, ploegNaam, tegenstander) {
        var _this = this;
        console.log(tegenstander);
        this.dialogsService
            .confirm('Verwijder ' + ploegNaam + ' - ' + tegenstander, 'Ben je zeker dat je wedstrijd ' + ploegNaam + ' -  ' + tegenstander + ' wilt verwijderen?')
            .subscribe(function (res) {
            console.log(res);
            if (res === "delete") {
                _this.wedstrijdService.deleteWedstrijd(id).subscribe(function (res) {
                    if (res == true) {
                        _this.snackBar.open(ploegNaam + " - " + tegenstander + " succesvol verwijderd", "", {
                            duration: 2000
                        });
                        _this.loadWedstrijden();
                    }
                });
            }
        });
    };
    WedstrijdenComponent.prototype.loadWedstrijden = function () {
        var _this = this;
        this.wedstrijdService.getWedstrijden().subscribe(function (wedstrijden) {
            _this.wedstrijden = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MatTableDataSource */](wedstrijden);
            _this.wedstrijden.sort = _this.sort;
            _this.wedstrijden.paginator = _this.paginator;
        }, function (err) {
            console.log(err);
        });
    };
    WedstrijdenComponent.prototype.ngOnInit = function () {
        this.loadWedstrijden();
    };
    /**
     * Set the sort after the view init since this component will
     * be able to query its view for the initialized sort.
     */
    WedstrijdenComponent.prototype.ngAfterViewInit = function () {
        if (this.wedstrijden) {
            this.wedstrijden.sort = this.sort;
            this.wedstrijden.paginator = this.paginator;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MatSort */])
    ], WedstrijdenComponent.prototype, "sort", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MatPaginator */])
    ], WedstrijdenComponent.prototype, "paginator", void 0);
    WedstrijdenComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-wedstrijden',
            template: __webpack_require__("../../../../../src/app/api/wedstrijden/wedstrijden.component.html"),
            styles: [__webpack_require__("../../../../../src/app/api/wedstrijden/wedstrijden.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_common__["Location"], __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__wedstrijd_service__["a" /* WedstrijdService */], __WEBPACK_IMPORTED_MODULE_4__dialog_delete_dialog_service__["a" /* DeleteDialogService */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MatSnackBar */]])
    ], WedstrijdenComponent);
    return WedstrijdenComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__senioren_senioren_component__ = __webpack_require__("../../../../../src/app/senioren/senioren.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__senioren_aploeg_aploeg_component__ = __webpack_require__("../../../../../src/app/senioren/aploeg/aploeg.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__senioren_zondagsreserven_zondagsreserven_component__ = __webpack_require__("../../../../../src/app/senioren/zondagsreserven/zondagsreserven.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__jeugd_jeugd_component__ = __webpack_require__("../../../../../src/app/jeugd/jeugd.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__jeugd_u6_u6_component__ = __webpack_require__("../../../../../src/app/jeugd/u6/u6.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__jeugd_u7_u7_component__ = __webpack_require__("../../../../../src/app/jeugd/u7/u7.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__jeugd_u8_u8_component__ = __webpack_require__("../../../../../src/app/jeugd/u8/u8.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__jeugd_u9_u9_component__ = __webpack_require__("../../../../../src/app/jeugd/u9/u9.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__jeugd_u11_u11_component__ = __webpack_require__("../../../../../src/app/jeugd/u11/u11.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__jeugd_u15_u15_component__ = __webpack_require__("../../../../../src/app/jeugd/u15/u15.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__jeugd_u17_u17_component__ = __webpack_require__("../../../../../src/app/jeugd/u17/u17.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__jeugd_u13_u13_component__ = __webpack_require__("../../../../../src/app/jeugd/u13/u13.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__jeugd_jeugd_nieuws_jeugd_nieuws_component__ = __webpack_require__("../../../../../src/app/jeugd/jeugd-nieuws/jeugd-nieuws.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__club_club_component__ = __webpack_require__("../../../../../src/app/club/club.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__club_bestuur_bestuur_component__ = __webpack_require__("../../../../../src/app/club/bestuur/bestuur.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__club_contact_contact_component__ = __webpack_require__("../../../../../src/app/club/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__club_documenten_documenten_component__ = __webpack_require__("../../../../../src/app/club/documenten/documenten.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__club_info_info_component__ = __webpack_require__("../../../../../src/app/club/info/info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__club_ligging_ligging_component__ = __webpack_require__("../../../../../src/app/club/ligging/ligging.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__club_links_links_component__ = __webpack_require__("../../../../../src/app/club/links/links.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__club_club_nieuws_club_nieuws_component__ = __webpack_require__("../../../../../src/app/club/club-nieuws/club-nieuws.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__evenementen_evenementen_component__ = __webpack_require__("../../../../../src/app/evenementen/evenementen.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__sponsors_sponsors_component__ = __webpack_require__("../../../../../src/app/sponsors/sponsors.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__api_api_component__ = __webpack_require__("../../../../../src/app/api/api.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__api_ploegen_ploegen_component__ = __webpack_require__("../../../../../src/app/api/ploegen/ploegen.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__api_ploegen_ploeg_detail_ploeg_detail_component__ = __webpack_require__("../../../../../src/app/api/ploegen/ploeg-detail/ploeg-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__api_ploegen_ploeg_nieuw_ploeg_nieuw_component__ = __webpack_require__("../../../../../src/app/api/ploegen/ploeg-nieuw/ploeg-nieuw.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__api_ploegen_edit_ploeg_edit_ploeg_component__ = __webpack_require__("../../../../../src/app/api/ploegen/edit-ploeg/edit-ploeg.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__api_spelers_spelers_component__ = __webpack_require__("../../../../../src/app/api/spelers/spelers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__api_spelers_speler_detail_speler_detail_component__ = __webpack_require__("../../../../../src/app/api/spelers/speler-detail/speler-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__api_spelers_speler_nieuw_speler_nieuw_component__ = __webpack_require__("../../../../../src/app/api/spelers/speler-nieuw/speler-nieuw.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__api_spelers_edit_speler_edit_speler_component__ = __webpack_require__("../../../../../src/app/api/spelers/edit-speler/edit-speler.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__api_nieuws_nieuws_component__ = __webpack_require__("../../../../../src/app/api/nieuws/nieuws.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__api_nieuws_nieuws_detail_nieuws_detail_component__ = __webpack_require__("../../../../../src/app/api/nieuws/nieuws-detail/nieuws-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__api_nieuws_nieuws_nieuw_nieuws_nieuw_component__ = __webpack_require__("../../../../../src/app/api/nieuws/nieuws-nieuw/nieuws-nieuw.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__api_nieuws_edit_nieuws_edit_nieuws_component__ = __webpack_require__("../../../../../src/app/api/nieuws/edit-nieuws/edit-nieuws.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__api_wedstrijden_wedstrijden_component__ = __webpack_require__("../../../../../src/app/api/wedstrijden/wedstrijden.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__api_wedstrijden_wedstrijd_detail_wedstrijd_detail_component__ = __webpack_require__("../../../../../src/app/api/wedstrijden/wedstrijd-detail/wedstrijd-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__api_wedstrijden_wedstrijd_nieuw_wedstrijd_nieuw_component__ = __webpack_require__("../../../../../src/app/api/wedstrijden/wedstrijd-nieuw/wedstrijd-nieuw.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__api_wedstrijden_edit_wedstrijd_edit_wedstrijd_component__ = __webpack_require__("../../../../../src/app/api/wedstrijden/edit-wedstrijd/edit-wedstrijd.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__api_sponsor_sponsor_component__ = __webpack_require__("../../../../../src/app/api/sponsor/sponsor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__api_sponsor_sponsor_detail_sponsor_detail_component__ = __webpack_require__("../../../../../src/app/api/sponsor/sponsor-detail/sponsor-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__api_sponsor_new_sponsor_new_sponsor_component__ = __webpack_require__("../../../../../src/app/api/sponsor/new-sponsor/new-sponsor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__api_sponsor_edit_sponsor_edit_sponsor_component__ = __webpack_require__("../../../../../src/app/api/sponsor/edit-sponsor/edit-sponsor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















































var routes = [
    {
        path: 'api',
        component: __WEBPACK_IMPORTED_MODULE_26__api_api_component__["a" /* ApiComponent */],
        children: [
            {
                path: 'ploegen',
                component: __WEBPACK_IMPORTED_MODULE_27__api_ploegen_ploegen_component__["a" /* PloegenComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_47__guards_auth_guard__["a" /* AuthGuard */]],
                children: [
                    {
                        path: 'ploeg-detail/:id',
                        component: __WEBPACK_IMPORTED_MODULE_28__api_ploegen_ploeg_detail_ploeg_detail_component__["a" /* PloegDetailComponent */],
                        canActivate: [__WEBPACK_IMPORTED_MODULE_47__guards_auth_guard__["a" /* AuthGuard */]],
                    },
                    {
                        path: 'ploeg-edit/:id',
                        canActivate: [__WEBPACK_IMPORTED_MODULE_47__guards_auth_guard__["a" /* AuthGuard */]],
                        component: __WEBPACK_IMPORTED_MODULE_30__api_ploegen_edit_ploeg_edit_ploeg_component__["a" /* EditPloegComponent */]
                    },
                    {
                        path: 'ploeg-nieuw',
                        canActivate: [__WEBPACK_IMPORTED_MODULE_47__guards_auth_guard__["a" /* AuthGuard */]],
                        component: __WEBPACK_IMPORTED_MODULE_29__api_ploegen_ploeg_nieuw_ploeg_nieuw_component__["a" /* PloegNieuwComponent */]
                    },
                ],
            },
            {
                path: 'spelers',
                component: __WEBPACK_IMPORTED_MODULE_31__api_spelers_spelers_component__["a" /* SpelersComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_47__guards_auth_guard__["a" /* AuthGuard */]],
                children: [
                    {
                        path: 'speler-detail/:id',
                        canActivate: [__WEBPACK_IMPORTED_MODULE_47__guards_auth_guard__["a" /* AuthGuard */]],
                        component: __WEBPACK_IMPORTED_MODULE_32__api_spelers_speler_detail_speler_detail_component__["a" /* SpelerDetailComponent */]
                    },
                    {
                        path: 'speler-edit/:id',
                        canActivate: [__WEBPACK_IMPORTED_MODULE_47__guards_auth_guard__["a" /* AuthGuard */]],
                        component: __WEBPACK_IMPORTED_MODULE_34__api_spelers_edit_speler_edit_speler_component__["a" /* EditSpelerComponent */]
                    },
                    {
                        path: 'speler-nieuw',
                        canActivate: [__WEBPACK_IMPORTED_MODULE_47__guards_auth_guard__["a" /* AuthGuard */]],
                        component: __WEBPACK_IMPORTED_MODULE_33__api_spelers_speler_nieuw_speler_nieuw_component__["a" /* SpelerNieuwComponent */]
                    },
                ],
            },
            {
                path: 'nieuws',
                canActivate: [__WEBPACK_IMPORTED_MODULE_47__guards_auth_guard__["a" /* AuthGuard */]],
                component: __WEBPACK_IMPORTED_MODULE_35__api_nieuws_nieuws_component__["a" /* NieuwsComponent */],
                children: [
                    {
                        path: 'nieuws-detail/:id',
                        canActivate: [__WEBPACK_IMPORTED_MODULE_47__guards_auth_guard__["a" /* AuthGuard */]],
                        component: __WEBPACK_IMPORTED_MODULE_36__api_nieuws_nieuws_detail_nieuws_detail_component__["a" /* NieuwsDetailComponent */]
                    },
                    {
                        path: 'nieuws-edit/:id',
                        canActivate: [__WEBPACK_IMPORTED_MODULE_47__guards_auth_guard__["a" /* AuthGuard */]],
                        component: __WEBPACK_IMPORTED_MODULE_38__api_nieuws_edit_nieuws_edit_nieuws_component__["a" /* EditNieuwsComponent */]
                    },
                    {
                        path: 'nieuws-nieuw',
                        canActivate: [__WEBPACK_IMPORTED_MODULE_47__guards_auth_guard__["a" /* AuthGuard */]],
                        component: __WEBPACK_IMPORTED_MODULE_37__api_nieuws_nieuws_nieuw_nieuws_nieuw_component__["a" /* NieuwsNieuwComponent */]
                    },
                ],
            },
            {
                path: 'wedstrijden',
                canActivate: [__WEBPACK_IMPORTED_MODULE_47__guards_auth_guard__["a" /* AuthGuard */]],
                component: __WEBPACK_IMPORTED_MODULE_39__api_wedstrijden_wedstrijden_component__["a" /* WedstrijdenComponent */],
                children: [
                    {
                        path: 'wedstrijd-detail/:id',
                        canActivate: [__WEBPACK_IMPORTED_MODULE_47__guards_auth_guard__["a" /* AuthGuard */]],
                        component: __WEBPACK_IMPORTED_MODULE_40__api_wedstrijden_wedstrijd_detail_wedstrijd_detail_component__["a" /* WedstrijdDetailComponent */]
                    },
                    {
                        path: 'wedstrijd-edit/:id',
                        canActivate: [__WEBPACK_IMPORTED_MODULE_47__guards_auth_guard__["a" /* AuthGuard */]],
                        component: __WEBPACK_IMPORTED_MODULE_42__api_wedstrijden_edit_wedstrijd_edit_wedstrijd_component__["a" /* EditWedstrijdComponent */]
                    },
                    {
                        path: 'wedstrijd-nieuw',
                        canActivate: [__WEBPACK_IMPORTED_MODULE_47__guards_auth_guard__["a" /* AuthGuard */]],
                        component: __WEBPACK_IMPORTED_MODULE_41__api_wedstrijden_wedstrijd_nieuw_wedstrijd_nieuw_component__["a" /* WedstrijdNieuwComponent */]
                    },
                ],
            },
            {
                path: 'sponsor',
                component: __WEBPACK_IMPORTED_MODULE_43__api_sponsor_sponsor_component__["a" /* SponsorComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_47__guards_auth_guard__["a" /* AuthGuard */]],
                children: [
                    {
                        path: 'sponsor-detail/:id',
                        canActivate: [__WEBPACK_IMPORTED_MODULE_47__guards_auth_guard__["a" /* AuthGuard */]],
                        component: __WEBPACK_IMPORTED_MODULE_44__api_sponsor_sponsor_detail_sponsor_detail_component__["a" /* SponsorDetailComponent */]
                    },
                    {
                        path: 'sponsor-edit/:id',
                        canActivate: [__WEBPACK_IMPORTED_MODULE_47__guards_auth_guard__["a" /* AuthGuard */]],
                        component: __WEBPACK_IMPORTED_MODULE_46__api_sponsor_edit_sponsor_edit_sponsor_component__["a" /* EditSponsorComponent */]
                    },
                    {
                        path: 'new-sponsor',
                        canActivate: [__WEBPACK_IMPORTED_MODULE_47__guards_auth_guard__["a" /* AuthGuard */]],
                        component: __WEBPACK_IMPORTED_MODULE_45__api_sponsor_new_sponsor_new_sponsor_component__["a" /* NewSponsorComponent */]
                    },
                ],
            },
        ]
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */],
    },
    {
        path: 'senioren',
        component: __WEBPACK_IMPORTED_MODULE_3__senioren_senioren_component__["a" /* SeniorenComponent */],
        children: [
            {
                path: 'aploeg',
                component: __WEBPACK_IMPORTED_MODULE_4__senioren_aploeg_aploeg_component__["a" /* AploegComponent */],
            },
            {
                path: 'zondagsreserven',
                component: __WEBPACK_IMPORTED_MODULE_5__senioren_zondagsreserven_zondagsreserven_component__["a" /* ZondagsreservenComponent */]
            }
        ]
    },
    {
        path: 'jeugd',
        component: __WEBPACK_IMPORTED_MODULE_6__jeugd_jeugd_component__["a" /* JeugdComponent */],
        children: [
            {
                path: 'u6',
                component: __WEBPACK_IMPORTED_MODULE_7__jeugd_u6_u6_component__["a" /* U6Component */],
            },
            {
                path: 'u7',
                component: __WEBPACK_IMPORTED_MODULE_8__jeugd_u7_u7_component__["a" /* U7Component */]
            },
            {
                path: 'u8',
                component: __WEBPACK_IMPORTED_MODULE_9__jeugd_u8_u8_component__["a" /* U8Component */]
            },
            {
                path: 'u9',
                component: __WEBPACK_IMPORTED_MODULE_10__jeugd_u9_u9_component__["a" /* U9Component */],
            },
            {
                path: 'u11',
                component: __WEBPACK_IMPORTED_MODULE_11__jeugd_u11_u11_component__["a" /* U11Component */]
            },
            {
                path: 'u13',
                component: __WEBPACK_IMPORTED_MODULE_14__jeugd_u13_u13_component__["a" /* U13Component */]
            },
            {
                path: 'u15',
                component: __WEBPACK_IMPORTED_MODULE_12__jeugd_u15_u15_component__["a" /* U15Component */]
            },
            {
                path: 'u17',
                component: __WEBPACK_IMPORTED_MODULE_13__jeugd_u17_u17_component__["a" /* U17Component */]
            },
            {
                path: 'nieuws',
                component: __WEBPACK_IMPORTED_MODULE_15__jeugd_jeugd_nieuws_jeugd_nieuws_component__["a" /* JeugdNieuwsComponent */]
            }
        ]
    },
    {
        path: 'club',
        component: __WEBPACK_IMPORTED_MODULE_16__club_club_component__["a" /* ClubComponent */],
        children: [
            {
                path: 'bestuur',
                component: __WEBPACK_IMPORTED_MODULE_17__club_bestuur_bestuur_component__["a" /* BestuurComponent */],
            },
            {
                path: 'contact',
                component: __WEBPACK_IMPORTED_MODULE_18__club_contact_contact_component__["a" /* ContactComponent */]
            },
            {
                path: 'documenten',
                component: __WEBPACK_IMPORTED_MODULE_19__club_documenten_documenten_component__["a" /* DocumentenComponent */]
            },
            {
                path: 'info',
                component: __WEBPACK_IMPORTED_MODULE_20__club_info_info_component__["a" /* InfoComponent */],
            },
            {
                path: 'ligging',
                component: __WEBPACK_IMPORTED_MODULE_21__club_ligging_ligging_component__["a" /* LiggingComponent */]
            },
            {
                path: 'links',
                component: __WEBPACK_IMPORTED_MODULE_22__club_links_links_component__["a" /* LinksComponent */]
            },
            {
                path: 'nieuws',
                component: __WEBPACK_IMPORTED_MODULE_23__club_club_nieuws_club_nieuws_component__["a" /* ClubNieuwsComponent */]
            }
        ]
    },
    {
        path: 'evenementen',
        component: __WEBPACK_IMPORTED_MODULE_24__evenementen_evenementen_component__["a" /* EvenementenComponent */]
    },
    {
        path: 'sponsors',
        component: __WEBPACK_IMPORTED_MODULE_25__sponsors_sponsors_component__["a" /* SponsorsComponent */]
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* RouterModule */]],
            providers: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app-settings.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSettings; });
var AppSettings = /** @class */ (function () {
    function AppSettings() {
    }
    AppSettings.API_ENDPOINT = 'http://admin.kskklinge.be/';
    return AppSettings;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n  <div *ngIf=\"checkPath() && screen <= 992\">\r\n    <mat-sidenav-container>\r\n      <mat-sidenav #sidebar mode=\"over\">\r\n        <div class=\"sidebarWidth \">\r\n          <button type=\"button\" class=\"close float-right\" aria-label=\"Close\" (click)=sidebar.close()>\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n          <div class=\"row p-3 justify-content-center\">\r\n            <div class=\"col-lg-6 col-md-10\">\r\n              <h1 class=\"text-hide\">KSK Klinge</h1>\r\n              <a routerLink=\"/home\"><img src=\"assets/img/logo.png\" class=\"img-fluid rounded\"/></a>\r\n\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col \">\r\n              <div class=\"list-group m-4 bg-ksk\">\r\n                <a routerLink=\"/home\" routerLinkActive=\"bg-primary text-secondary\" (click)=\"sidebar.close()\" class=\"list-group-item list-group-item-action\">KSK Klinge<span class=\"float-right\"><i class=\"material-icons\">home</i></span></a>\r\n                <a (click)=\"showTeam()\" [ngClass]=\"{'bg-activeAccent': show1}\" class=\"hoverable list-group-item list-group-item-action text-grey\">Senioren<span class=\"float-right text-grey\"><i class=\"material-icons\">people</i></span></a>\r\n                <div class=\"list-group\" [ngClass]=\"{'border-secondary border': show1}\">\r\n                  <a [@fadeInAnim]=\"show1\" class=\"pl-5 list-group-item list-group-item-action\" routerLinkActive=\"text-secondary bg-primary\" (click)=\"sidebar.close()\" routerLink=\"/senioren/aploeg\"><span class=\"float-right\"><i class=\"material-icons\">format_color_text</i></span> Senioren</a>\r\n                  <a [@fadeInAnim3]=\"show1\" class=\"pl-5 list-group-item list-group-item-action\" routerLinkActive=\"text-secondary bg-primary\" (click)=\"sidebar.close()\" routerLink=\"/senioren/zondagsreserven\"><span class=\"float-right\"><i class=\"material-icons\">copyright</i></span> Zondagsreserven</a>\r\n                </div>\r\n                <a (click)=\"showYouth()\" [ngClass]=\"{'bg-activeAccent': show2}\" class=\"list-group-item list-group-item-action text-grey\"><span class=\"float-right text-grey\"><i class=\"material-icons\">face</i></span>Jeugd</a>\r\n                <div class=\"list-group bg-accent\" [ngClass]=\"{'border-secondary border': show2}\">\r\n                  <a [@fadeInAnim]=\"show2\" class=\"pl-5 list-group-item list-group-item-action \" routerLinkActive=\"text-secondary bg-primary\" (click)=\"sidebar.close()\" routerLink=\"/jeugd/u6\"><span class=\"float-right\"><i class=\"fa fa-paper-plane-o\" aria-hidden=\"true\"></i></span> U6</a>\r\n                  <a [@fadeInAnim]=\"show2\" class=\"pl-5 list-group-item list-group-item-action \" routerLinkActive=\"text-secondary bg-primary\" (click)=\"sidebar.close()\" routerLink=\"/jeugd/u7\"><span class=\"float-right\"><i class=\"fa fa-plane\" aria-hidden=\"true\"></i></span> U7</a>\r\n                  <a [@fadeInAnim2]=\"show2\" class=\"pl-5 list-group-item list-group-item-action \" routerLinkActive=\"text-secondary bg-primary\" (click)=\"sidebar.close()\" routerLink=\"/jeugd/u8\"><span class=\"float-right\"><i class=\"fa fa-fighter-jet\" aria-hidden=\"true\"></i></span> U8</a>\r\n                  <a [@fadeInAnim2]=\"show2\" class=\"pl-5 list-group-item list-group-item-action \" routerLinkActive=\"text-secondary bg-primary\" (click)=\"sidebar.close()\" routerLink=\"/jeugd/u9\"><span class=\"float-right\"><i class=\"fa fa-space-shuttle\" aria-hidden=\"true\"></i></span> U9</a>\r\n                  <a [@fadeInAnim3]=\"show2\" class=\"pl-5 list-group-item list-group-item-action\" routerLinkActive=\"text-secondary bg-primary\" (click)=\"sidebar.close()\" routerLink=\"/jeugd/u11\"><span class=\"float-right\"><i class=\"fa fa-rocket\" aria-hidden=\"true\"></i></span> U11</a>\r\n                  <a [@fadeInAnim3]=\"show2\" class=\"pl-5 list-group-item list-group-item-action\" routerLinkActive=\"text-secondary bg-primary\" (click)=\"sidebar.close()\" routerLink=\"/jeugd/u13\"><span class=\"float-right\"><i class=\"fa fa-soccer-ball-o\" aria-hidden=\"true\"></i></span> U13</a>\r\n                  <a [@fadeInAnim4]=\"show2\" class=\"pl-5 list-group-item list-group-item-action\" routerLinkActive=\"text-secondary bg-primary\" (click)=\"sidebar.close()\" routerLink=\"/jeugd/u15\"><span class=\"float-right\"><i class=\"fa fa-trophy\" aria-hidden=\"true\"></i></span> U15</a>\r\n                  <a [@fadeInAnim4]=\"show2\" class=\"pl-5 list-group-item list-group-item-action\" routerLinkActive=\"text-secondary bg-primary\" (click)=\"sidebar.close()\" routerLink=\"/jeugd/u17\"><span class=\"float-right\"><i class=\"fa fa-star-o\" aria-hidden=\"true\"></i></span> U17</a>\r\n                  <a [@fadeInAnim4]=\"show2\" class=\"pl-5 list-group-item list-group-item-action\" routerLinkActive=\"text-secondary bg-primary\" routerLink=\"/jeugd/nieuws\"><span class=\"float-right\"><i class=\"fa fa-newspaper-o\" aria-hidden=\"true\"></i></span> Nieuws</a>\r\n                </div>\r\n\r\n                <a (click)=\"showClub()\" [ngClass]=\"{'bg-activeAccent': show3}\" class=\"list-group-item list-group-item-action text-grey hoverable\"><span class=\"float-right text-grey\"><i class=\"material-icons\">store</i></span>Club</a>\r\n                <div class=\"list-group\" [ngClass]=\"{'border-secondary border': show3}\">\r\n                  <a [@fadeInAnim]=\"show3\" class=\"pl-5 list-group-item list-group-item-action\" routerLinkActive=\"text-secondary bg-primary\" (click)=\"sidebar.close()\" routerLink=\"/club/bestuur\"><span class=\"float-right\"><i class=\"fa fa-sitemap\" aria-hidden=\"true\"></i></span> Bestuur</a>\r\n                  <a [@fadeInAnim]=\"show3\" class=\"pl-5 list-group-item list-group-item-action\" routerLinkActive=\"text-secondary bg-primary\" (click)=\"sidebar.close()\" routerLink=\"/club/info\"><span class=\"float-right\"><i class=\"material-icons\">info_outline</i></span> Info</a>\r\n                  <a [@fadeInAnim2]=\"show3\" class=\"pl-5 list-group-item list-group-item-action\" routerLinkActive=\"text-secondary bg-primary\" (click)=\"sidebar.close()\" routerLink=\"/club/ligging\"><span class=\"float-right\"><i class=\"material-icons\">location_on</i></span> Ligging</a>\r\n                  <a [@fadeInAnim2]=\"show3\" class=\"pl-5 list-group-item list-group-item-action\" routerLinkActive=\"text-secondary bg-primary\" (click)=\"sidebar.close()\" routerLink=\"/club/contact\"><span class=\"float-right\"><i class=\"material-icons\">phone</i></span> Contact</a>\r\n                  <a [@fadeInAnim3]=\"show3\" class=\"pl-5 list-group-item list-group-item-action\" routerLinkActive=\"text-secondary bg-primary\" (click)=\"sidebar.close()\" routerLink=\"/jeugd/documenten\"><span class=\"float-right\"><i class=\"fa fa-files-o\" aria-hidden=\"true\"></i></span> Nuttige documenten</a>\r\n                  <a [@fadeInAnim3]=\"show3\" class=\"pl-5 list-group-item list-group-item-action\" routerLinkActive=\"text-secondary bg-primary\" (click)=\"sidebar.close()\" routerLink=\"/jeugd/links\"><span class=\"float-right\"><i class=\"material-icons\">link</i></span> Links</a>\r\n                  <a [@fadeInAnim4]=\"show3\" class=\"pl-5 list-group-item list-group-item-action\" routerLinkActive=\"text-secondary bg-primary\" routerLink=\"/club/nieuws\"><span class=\"float-right\"><i class=\"fa fa-newspaper-o\" aria-hidden=\"true\"></i></span> Nieuws</a>\r\n                </div>\r\n\r\n                <a routerLink=\"/evenementen\" routerLinkActive=\"bg-primary text-secondary\" (click)=\"sidebar.close()\" class=\"list-group-item list-group-item-action\">Evenementen<span class=\"float-right\"><i class=\"material-icons\">event</i></span></a>\r\n                <a routerLink=\"/sponsors\" routerLinkActive=\"bg-primary text-secondary\" (click)=\"sidebar.close()\" class=\"list-group-item list-group-item-action\">Sponsors<span class=\"float-right\"><i class=\"material-icons\">flag</i></span></a>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n\r\n      </mat-sidenav>\r\n      <mat-sidenav-content >\r\n        <div class=\"row bg-ksk p-2 border rounded align-items-center\">\r\n          <div class=\"col\">\r\n            <div class=\"row justify-content-center\">\r\n              <div class=\"col\">\r\n                <h2 class=\"text-secondary hoverable\" (click)=\"sidebar.open()\"><i class=\"fa fa-bars\" aria-hidden=\"true\"></i></h2>\r\n              </div>\r\n              <div class=\"col\">\r\n                <h2><a class=\"text-dark\" href=\"https://www.facebook.com/groups/35796537836/\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i></a> </h2>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col text-center\">\r\n            <div class=\"d-block d-md-none\">\r\n              <h1 class=\"text-hide\">KSK Klinge</h1>\r\n              <a routerLink=\"/home\"><img src=\"assets/img/logo2.png\" class=\"img-fluid rounded\"/></a>\r\n            </div>\r\n            <div class=\"d-none d-md-block\">\r\n              <h1 class=\"text-dark text-center\" routerLink=\"/home\">KSK Klinge</h1>\r\n              <small class=\"text-muted d-block m-l-4 text-secondary\">Waar voetbal een feest is</small>\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"col\">\r\n            <div class=\"row justify-content-center\">\r\n              <div class=\"col\">\r\n                <h2><a class=\"text-dark\" href=\"tel:03/770 56 81\"><i class=\"fa fa-phone\" aria-hidden=\"true\"></i></a> </h2>\r\n              </div>\r\n              <div class=\"col\">\r\n                <h2 class=\"text-secondary\"><a class=\"text-dark\" href=\"https://www.google.be/maps/place/KSK+Klinge/@51.2523569,4.0796667,15z/data=!4m5!3m4!1s0x0:0xbbd1cff8880fa39e!8m2!3d51.2522243!4d4.077808?hl=nl\"><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i></a> </h2>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <router-outlet></router-outlet>\r\n        <div class=\"jumbotron\">\r\n          <div class=\"row justify-content-center\">\r\n            <div class=\"col-12 col-lg-8 col-xl-6\">\r\n              <div class=\"row mb-3\">\r\n                <div class=\"col text-center\">\r\n                  <a href=\"\"><img class=\"img-fluid\" src=\"assets/img/sponsors/logoclima.png\" /></a>\r\n                </div>\r\n                <div class=\"col text-center\">\r\n                  <a href=\"\"><img class=\"img-fluid\" src=\"assets/img/sponsors/logoDCS.png\" /></a>\r\n                </div>\r\n              </div>\r\n              <div class=\"row mt-5\">\r\n                <div class=\"col text-center\">\r\n                  <a href=\"\"><img class=\"img-fluid\" src=\"assets/img/sponsors/KBC.png\" /></a>\r\n                </div>\r\n                <div class=\"col text-center\">\r\n                  <a href=\"\"><img class=\"img-fluid\" src=\"assets/img/sponsors/logo4repair.png\" /></a>\r\n                </div>\r\n                <div class=\"col text-center\">\r\n                  <a href=\"\"><img class=\"img-fluid\" src=\"assets/img/sponsors/logoalinco.png\" /></a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </mat-sidenav-content>\r\n\r\n    </mat-sidenav-container>\r\n\r\n  </div>\r\n  <div *ngIf=\"checkPath() && screen > 992\" [style.height.px] = \"height\" >\r\n    <div class=\"row bg-ksk p-2 border rounded align-items-center\">\r\n      <div class=\"col\">\r\n        <div class=\"row justify-content-center\">\r\n          <div class=\"col\">\r\n            <h2 class=\"text-secondary hoverable\" (click)=\"sidebarToggle()\"><i class=\"fa fa-bars\" aria-hidden=\"true\"></i></h2>\r\n          </div>\r\n          <div class=\"col\">\r\n            <h2><a class=\"text-dark\" href=\"https://www.facebook.com/groups/35796537836/\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i></a> </h2>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col text-center\">\r\n        <div class=\"d-block d-md-none\">\r\n          <h1 class=\"text-hide\">KSK Klinge</h1>\r\n          <a routerLink=\"/home\"><img src=\"assets/img/logo2.png\" class=\"img-fluid rounded\"/></a>\r\n        </div>\r\n        <div class=\"d-none d-md-block\">\r\n          <h1 class=\"text-dark text-center\" routerLink=\"/home\">KSK Klinge</h1>\r\n          <small class=\"text-muted d-block m-l-4 text-secondary\">Waar voetbal een feest is</small>\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"col\">\r\n        <div class=\"row justify-content-center\">\r\n          <div class=\"col\">\r\n            <h2><a class=\"text-dark\" href=\"tel:03/770 56 81\"><i class=\"fa fa-phone\" aria-hidden=\"true\"></i></a> </h2>\r\n          </div>\r\n          <div class=\"col\">\r\n            <h2 class=\"text-secondary\"><a class=\"text-dark\" href=\"https://www.google.be/maps/place/KSK+Klinge/@51.2523569,4.0796667,15z/data=!4m5!3m4!1s0x0:0xbbd1cff8880fa39e!8m2!3d51.2522243!4d4.077808?hl=nl\"><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i></a> </h2>\r\n          </div>\r\n          <p>\r\n            {{height}}\r\n          </p>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n    <mat-sidenav-container style=\"min-height: 100vw\">\r\n      <mat-sidenav #sidebar mode=\"side\"  [opened]=\"sbOpen\" fixedTopGap=\"95\" fixedInViewport=\"true\">\r\n        <div class=\"sidebarWidth \">\r\n          <div class=\"row\">\r\n            <div class=\"col \">\r\n              <div class=\"list-group m-4 bg-ksk\">\r\n                <a routerLink=\"/home\" routerLinkActive=\"bg-primary text-secondary\" class=\"list-group-item list-group-item-action\">KSK Klinge<span class=\"float-right\"><i class=\"material-icons\">home</i></span></a>\r\n                <a (click)=\"showTeam()\" [ngClass]=\"{'bg-activeAccent': show1}\" class=\"list-group-item list-group-item-action text-grey hoverable\">Senioren<span class=\"float-right text-grey\"><i class=\"material-icons\">people</i></span></a>\r\n                <div class=\"list-group\" [ngClass]=\"{'border-secondary border': show1}\">\r\n                  <a [@fadeInAnim]=\"show1\" class=\"pl-5 list-group-item list-group-item-action\" routerLinkActive=\"text-secondary bg-primary\" routerLink=\"/senioren/aploeg\"><span class=\"float-right\"><i class=\"material-icons\">format_color_text</i></span> Senioren</a>\r\n\r\n                  <a [@fadeInAnim3]=\"show1\" class=\"pl-5 list-group-item list-group-item-action\" routerLinkActive=\"text-secondary bg-primary\" routerLink=\"/senioren/zondagsreserven\"><span class=\"float-right\"><i class=\"material-icons\">copyright</i></span> Zondagsreserven</a>\r\n                </div>\r\n                <a (click)=\"showYouth()\" routerLink=\"/jeugd\" [ngClass]=\"{'bg-activeAccent': show2}\" class=\"list-group-item list-group-item-action text-grey\"><span class=\"float-right text-grey\"><i class=\"material-icons\">face</i></span>Jeugd</a>\r\n                <div class=\"list-group bg-accent\" [ngClass]=\"{'border-secondary border': show2}\">\r\n                  <a [@fadeInAnim]=\"show2\" class=\"pl-5 list-group-item list-group-item-action \" routerLinkActive=\"text-secondary bg-primary\" routerLink=\"/jeugd/u6\"><span class=\"float-right\"><i class=\"fa fa-paper-plane-o\" aria-hidden=\"true\"></i></span> U6</a>\r\n                  <a [@fadeInAnim]=\"show2\" class=\"pl-5 list-group-item list-group-item-action \" routerLinkActive=\"text-secondary bg-primary\" routerLink=\"/jeugd/u7\"><span class=\"float-right\"><i class=\"fa fa-plane\" aria-hidden=\"true\"></i></span> U7</a>\r\n                  <a [@fadeInAnim2]=\"show2\" class=\"pl-5 list-group-item list-group-item-action \" routerLinkActive=\"text-secondary bg-primary\" routerLink=\"/jeugd/u8\"><span class=\"float-right\"><i class=\"fa fa-fighter-jet\" aria-hidden=\"true\"></i></span> U8</a>\r\n                  <a [@fadeInAnim2]=\"show2\" class=\"pl-5 list-group-item list-group-item-action \" routerLinkActive=\"text-secondary bg-primary\" routerLink=\"/jeugd/u9\"><span class=\"float-right\"><i class=\"fa fa-space-shuttle\" aria-hidden=\"true\"></i></span> U9</a>\r\n                  <a [@fadeInAnim3]=\"show2\" class=\"pl-5 list-group-item list-group-item-action\" routerLinkActive=\"text-secondary bg-primary\" routerLink=\"/jeugd/u11\"><span class=\"float-right\"><i class=\"fa fa-rocket\" aria-hidden=\"true\"></i></span> U11</a>\r\n                  <a [@fadeInAnim3]=\"show2\" class=\"pl-5 list-group-item list-group-item-action\" routerLinkActive=\"text-secondary bg-primary\" routerLink=\"/jeugd/u13\"><span class=\"float-right\"><i class=\"fa fa-soccer-ball-o\" aria-hidden=\"true\"></i></span> U13</a>\r\n                  <a [@fadeInAnim4]=\"show2\" class=\"pl-5 list-group-item list-group-item-action\" routerLinkActive=\"text-secondary bg-primary\" routerLink=\"/jeugd/u15\"><span class=\"float-right\"><i class=\"fa fa-trophy\" aria-hidden=\"true\"></i></span> U15</a>\r\n                  <a [@fadeInAnim4]=\"show2\" class=\"pl-5 list-group-item list-group-item-action\" routerLinkActive=\"text-secondary bg-primary\" routerLink=\"/jeugd/u17\"><span class=\"float-right\"><i class=\"fa fa-star-o\" aria-hidden=\"true\"></i></span> U17</a>\r\n                  <a [@fadeInAnim4]=\"show2\" class=\"pl-5 list-group-item list-group-item-action\" routerLinkActive=\"text-secondary bg-primary\" routerLink=\"/jeugd/nieuws\"><span class=\"float-right\"><i class=\"fa fa-newspaper-o\" aria-hidden=\"true\"></i></span> Nieuws</a>\r\n                </div>\r\n\r\n                <a (click)=\"showClub()\" [ngClass]=\"{'bg-activeAccent': show3}\" class=\"list-group-item list-group-item-action text-grey hoverable\"><span class=\"float-right text-grey\"><i class=\"material-icons\">store</i></span>Club</a>\r\n                <div class=\"list-group\" [ngClass]=\"{'border-secondary border': show3}\">\r\n                  <a [@fadeInAnim]=\"show3\" class=\"pl-5 list-group-item list-group-item-action\" routerLinkActive=\"text-secondary bg-primary\" routerLink=\"/club/bestuur\"><span class=\"float-right\"><i class=\"fa fa-sitemap\" aria-hidden=\"true\"></i></span> Bestuur</a>\r\n                  <a [@fadeInAnim]=\"show3\" class=\"pl-5 list-group-item list-group-item-action\" routerLinkActive=\"text-secondary bg-primary\" routerLink=\"/club/info\"><span class=\"float-right\"><i class=\"material-icons\">info_outline</i></span> Info</a>\r\n                  <a [@fadeInAnim2]=\"show3\" class=\"pl-5 list-group-item list-group-item-action\" routerLinkActive=\"text-secondary bg-primary\" routerLink=\"/club/ligging\"><span class=\"float-right\"><i class=\"material-icons\">location_on</i></span> Ligging</a>\r\n                  <a [@fadeInAnim2]=\"show3\" class=\"pl-5 list-group-item list-group-item-action\" routerLinkActive=\"text-secondary bg-primary\" routerLink=\"/club/contact\"><span class=\"float-right\"><i class=\"material-icons\">phone</i></span> Contact</a>\r\n                  <a [@fadeInAnim3]=\"show3\" class=\"pl-5 list-group-item list-group-item-action\" routerLinkActive=\"text-secondary bg-primary\" routerLink=\"/club/documenten\"><span class=\"float-right\"><i class=\"fa fa-files-o\" aria-hidden=\"true\"></i></span> Nuttige documenten</a>\r\n                  <a [@fadeInAnim3]=\"show3\" class=\"pl-5 list-group-item list-group-item-action\" routerLinkActive=\"text-secondary bg-primary\" routerLink=\"/club/links\"><span class=\"float-right\"><i class=\"material-icons\">link</i></span> Links</a>\r\n                  <a [@fadeInAnim4]=\"show3\" class=\"pl-5 list-group-item list-group-item-action\" routerLinkActive=\"text-secondary bg-primary\" routerLink=\"/club/nieuws\"><span class=\"float-right\"><i class=\"fa fa-newspaper-o\" aria-hidden=\"true\"></i></span> Nieuws</a>\r\n                </div>\r\n\r\n                <a routerLink=\"/evenementen\" routerLinkActive=\"bg-primary text-secondary\" class=\"list-group-item list-group-item-action\">Evenementen<span class=\"float-right\"><i class=\"material-icons\">event</i></span></a>\r\n                <a routerLink=\"/sponsors\" routerLinkActive=\"bg-primary text-secondary\" class=\"list-group-item list-group-item-action\">Sponsors<span class=\"float-right\"><i class=\"material-icons\">flag</i></span></a>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n\r\n      </mat-sidenav>\r\n      <mat-sidenav-content >\r\n        <div class=\"m-4\">\r\n          <router-outlet></router-outlet>\r\n        </div>\r\n        <div class=\"jumbotron\">\r\n          <div class=\"row justify-content-center\">\r\n            <div class=\"col-12 col-lg-8 col-xl-6\">\r\n              <div class=\"row mb-3\">\r\n                <div class=\"col text-center\">\r\n                  <a href=\"\"><img class=\"img-fluid\" src=\"assets/img/sponsors/logoclima.png\" /></a>\r\n                </div>\r\n                <div class=\"col text-center\">\r\n                  <a href=\"\"><img class=\"img-fluid\" src=\"assets/img/sponsors/logoDCS.png\" /></a>\r\n                </div>\r\n              </div>\r\n              <div class=\"row mt-5\">\r\n                <div class=\"col text-center\">\r\n                  <a href=\"\"><img class=\"img-fluid\" src=\"assets/img/sponsors/KBC.png\" /></a>\r\n                </div>\r\n                <div class=\"col text-center\">\r\n                  <a href=\"\"><img class=\"img-fluid\" src=\"assets/img/sponsors/logo4repair.png\" /></a>\r\n                </div>\r\n                <div class=\"col text-center\">\r\n                  <a href=\"\"><img class=\"img-fluid\" src=\"assets/img/sponsors/logoalinco.png\" /></a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <hr />\r\n          <div class=\"row justify-content-center mt-4\">\r\n            <div class=\"col text-center\">\r\n                <h2><a class=\"text-dark\" href=\"https://www.facebook.com/groups/35796537836/\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i></a> </h2>\r\n            </div>\r\n            <div class=\"col text-center\">\r\n                <h2><a class=\"text-dark\" href=\"tel:03/770 56 81\"><i class=\"fa fa-phone\" aria-hidden=\"true\"></i></a> </h2>\r\n            </div>\r\n            <div class=\"col text-center\">\r\n                <h2 class=\"text-secondary\"><a class=\"text-dark\" href=\"https://www.google.be/maps/place/KSK+Klinge/@51.2523569,4.0796667,15z/data=!4m5!3m4!1s0x0:0xbbd1cff8880fa39e!8m2!3d51.2522243!4d4.077808?hl=nl\"><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i></a> </h2>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col text-center\">\r\n              <p class=\"text-primary\">Ontworpen door <a class=\"text-secondary font-underline\" href=\"mailto:vanduysebert@gmail.com\">KSK-fan</a></p>\r\n            </div>\r\n\r\n          </div>\r\n\r\n        </div>\r\n\r\n\r\n\r\n\r\n      </mat-sidenav-content>\r\n\r\n    </mat-sidenav-container>\r\n  </div>\r\n\r\n  <div *ngIf=\"checkPath() == false\">\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <h2 class=\"text-center\"><a class=\"text-primary\" routerLink=\"/api\">KSK Klinge API</a></h2>\r\n      </div>\r\n    </div>\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AppComponent = /** @class */ (function () {
    function AppComponent(location, router, activeRoute, ngZone) {
        var _this = this;
        this.show1 = false;
        this.show2 = false;
        this.show3 = false;
        this.sbOpen = true;
        this.isLoaded = false;
        this.links = ["test", "test2"];
        this.screen = window.innerWidth;
        window.onresize = function (e) {
            ngZone.run(function () {
                _this.screen = window.innerWidth;
            });
        };
        router.events.subscribe(function (val) {
            if (location.path() != '') {
                _this.route = location.path();
                if (val instanceof __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* NavigationEnd */]) {
                    if (_this.route.startsWith('senioren')) {
                        _this.show1 = true;
                        _this.show2 = false;
                        _this.show3 = false;
                    }
                    else if (_this.route.startsWith('jeugd')) {
                        _this.show2 = true;
                        _this.show1 = false;
                        _this.show3 = false;
                    }
                    else if (_this.route.startsWith('club')) {
                        _this.show3 = true;
                        _this.show1 = false;
                        _this.show2 = false;
                    }
                }
            }
            else {
                _this.route = 'Home';
            }
        });
    }
    AppComponent.prototype.checkPath = function () {
        if (this.route == null) {
            return true;
        }
        var path;
        if (this.route.startsWith('/api')) {
            return false;
        }
        else {
            return true;
        }
    };
    AppComponent.prototype.sidebarToggle = function () {
        this.sbOpen = !this.sbOpen;
    };
    AppComponent.prototype.showTeam = function () {
        this.show1 = !this.show1;
        this.show2 = false;
        this.show3 = false;
    };
    AppComponent.prototype.showYouth = function () {
        this.show2 = !this.show2;
        this.show1 = false;
        this.show3 = false;
    };
    AppComponent.prototype.showClub = function () {
        this.show3 = !this.show3;
        this.show2 = false;
        this.show1 = false;
    };
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.ngAfterViewInit = function () {
    };
    AppComponent.prototype.resizeWindow = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["ViewChild"])('app'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__angular_core__["ElementRef"])
    ], AppComponent.prototype, "elementView", void 0);
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["k" /* trigger */])('fadeInAnim', [
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["h" /* state */])('true', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["i" /* style */])({
                        transform: 'translate3d(0, 0, 0)', display: 'block'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["h" /* state */])('false', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["i" /* style */])({
                        transform: 'translate3d(100%, 0, 0)', display: 'none'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["j" /* transition */])('true => false', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["e" /* animate */])('200ms ease-in-out')),
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["j" /* transition */])('false => true', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["e" /* animate */])('200ms ease-in-out'))
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["k" /* trigger */])('fadeInAnim2', [
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["h" /* state */])('true', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["i" /* style */])({
                        transform: 'translate3d(0, 0, 0)', display: 'block'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["h" /* state */])('false', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["i" /* style */])({
                        transform: 'translate3d(100%, 0, 0)', display: 'none'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["j" /* transition */])('true => false', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["e" /* animate */])('200ms ease-in-out')),
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["j" /* transition */])('false => true', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["e" /* animate */])('300ms ease-in-out'))
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["k" /* trigger */])('fadeInAnim3', [
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["h" /* state */])('true', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["i" /* style */])({
                        transform: 'translate3d(0, 0, 0)', display: 'block'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["h" /* state */])('false', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["i" /* style */])({
                        transform: 'translate3d(100%, 0, 0)', display: 'none'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["j" /* transition */])('true => false', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["e" /* animate */])('200ms ease-in-out')),
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["j" /* transition */])('false => true', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["e" /* animate */])('400ms ease-in-out'))
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["k" /* trigger */])('fadeInAnim4', [
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["h" /* state */])('true', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["i" /* style */])({
                        transform: 'translate3d(0, 0, 0)', display: 'block'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["h" /* state */])('false', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["i" /* style */])({
                        transform: 'translate3d(100%, 0, 0)', display: 'none'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["j" /* transition */])('true => false', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["e" /* animate */])('200ms ease-in-out')),
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["j" /* transition */])('false => true', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["e" /* animate */])('500ms ease-in-out'))
                ]),
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__angular_common__["Location"], __WEBPACK_IMPORTED_MODULE_5__angular_router__["e" /* Router */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_4__angular_core__["NgZone"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_cdk_table__ = __webpack_require__("../../../cdk/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_imageupload__ = __webpack_require__("../../../../ng2-imageupload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_imageupload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_imageupload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_froala_wysiwyg__ = __webpack_require__("../../../../angular2-froala-wysiwyg/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng_sidebar__ = __webpack_require__("../../../../ng-sidebar/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng_sidebar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_ng_sidebar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__swimlane_ngx_datatable__ = __webpack_require__("../../../../@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_material_table__ = __webpack_require__("../../../material/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_material_sort__ = __webpack_require__("../../../material/esm5/sort.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_material_paginator__ = __webpack_require__("../../../material/esm5/paginator.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_material_snack_bar__ = __webpack_require__("../../../material/esm5/snack-bar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_material_sidenav__ = __webpack_require__("../../../material/esm5/sidenav.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angular2_moment__ = __webpack_require__("../../../../angular2-moment/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ngx_bootstrap_datepicker__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ngx_bootstrap_pagination__ = __webpack_require__("../../../../ngx-bootstrap/pagination/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_ngx_bootstrap_progressbar__ = __webpack_require__("../../../../ngx-bootstrap/progressbar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_ngx_bootstrap_timepicker__ = __webpack_require__("../../../../ngx-bootstrap/timepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_ngx_bootstrap_accordion__ = __webpack_require__("../../../../ngx-bootstrap/accordion/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_ngx_bootstrap_collapse__ = __webpack_require__("../../../../ngx-bootstrap/collapse/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_ngx_bootstrap_carousel__ = __webpack_require__("../../../../ngx-bootstrap/carousel/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_ng2_page_scroll__ = __webpack_require__("../../../../ng2-page-scroll/ng2-page-scroll.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__app_settings__ = __webpack_require__("../../../../../src/app/app-settings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__api_dialog_delete_delete_dialog_component__ = __webpack_require__("../../../../../src/app/api/dialog/delete/delete-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__senioren_senioren_component__ = __webpack_require__("../../../../../src/app/senioren/senioren.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__senioren_aploeg_aploeg_component__ = __webpack_require__("../../../../../src/app/senioren/aploeg/aploeg.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__senioren_zondagsreserven_zondagsreserven_component__ = __webpack_require__("../../../../../src/app/senioren/zondagsreserven/zondagsreserven.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__jeugd_jeugd_component__ = __webpack_require__("../../../../../src/app/jeugd/jeugd.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__jeugd_u6_u6_component__ = __webpack_require__("../../../../../src/app/jeugd/u6/u6.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__jeugd_u7_u7_component__ = __webpack_require__("../../../../../src/app/jeugd/u7/u7.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__jeugd_u8_u8_component__ = __webpack_require__("../../../../../src/app/jeugd/u8/u8.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__jeugd_u9_u9_component__ = __webpack_require__("../../../../../src/app/jeugd/u9/u9.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__jeugd_u11_u11_component__ = __webpack_require__("../../../../../src/app/jeugd/u11/u11.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__jeugd_u15_u15_component__ = __webpack_require__("../../../../../src/app/jeugd/u15/u15.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__jeugd_u17_u17_component__ = __webpack_require__("../../../../../src/app/jeugd/u17/u17.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__evenementen_evenementen_component__ = __webpack_require__("../../../../../src/app/evenementen/evenementen.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__club_club_component__ = __webpack_require__("../../../../../src/app/club/club.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__club_bestuur_bestuur_component__ = __webpack_require__("../../../../../src/app/club/bestuur/bestuur.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__club_info_info_component__ = __webpack_require__("../../../../../src/app/club/info/info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__club_contact_contact_component__ = __webpack_require__("../../../../../src/app/club/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__club_ligging_ligging_component__ = __webpack_require__("../../../../../src/app/club/ligging/ligging.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__club_documenten_documenten_component__ = __webpack_require__("../../../../../src/app/club/documenten/documenten.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__club_links_links_component__ = __webpack_require__("../../../../../src/app/club/links/links.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__sponsors_sponsors_component__ = __webpack_require__("../../../../../src/app/sponsors/sponsors.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__api_api_component__ = __webpack_require__("../../../../../src/app/api/api.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__api_ploegen_ploegen_component__ = __webpack_require__("../../../../../src/app/api/ploegen/ploegen.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__api_ploegen_ploeg_detail_ploeg_detail_component__ = __webpack_require__("../../../../../src/app/api/ploegen/ploeg-detail/ploeg-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__api_ploegen_ploeg_nieuw_ploeg_nieuw_component__ = __webpack_require__("../../../../../src/app/api/ploegen/ploeg-nieuw/ploeg-nieuw.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__api_ploegen_edit_ploeg_edit_ploeg_component__ = __webpack_require__("../../../../../src/app/api/ploegen/edit-ploeg/edit-ploeg.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__api_spelers_spelers_component__ = __webpack_require__("../../../../../src/app/api/spelers/spelers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__api_spelers_speler_detail_speler_detail_component__ = __webpack_require__("../../../../../src/app/api/spelers/speler-detail/speler-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__api_spelers_speler_nieuw_speler_nieuw_component__ = __webpack_require__("../../../../../src/app/api/spelers/speler-nieuw/speler-nieuw.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__api_spelers_edit_speler_edit_speler_component__ = __webpack_require__("../../../../../src/app/api/spelers/edit-speler/edit-speler.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__api_events_events_component__ = __webpack_require__("../../../../../src/app/api/events/events.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__api_events_event_nieuw_event_nieuw_component__ = __webpack_require__("../../../../../src/app/api/events/event-nieuw/event-nieuw.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__api_events_event_detail_event_detail_component__ = __webpack_require__("../../../../../src/app/api/events/event-detail/event-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__api_events_edit_event_edit_event_component__ = __webpack_require__("../../../../../src/app/api/events/edit-event/edit-event.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__api_nieuws_nieuws_component__ = __webpack_require__("../../../../../src/app/api/nieuws/nieuws.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__api_nieuws_edit_nieuws_edit_nieuws_component__ = __webpack_require__("../../../../../src/app/api/nieuws/edit-nieuws/edit-nieuws.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__api_nieuws_nieuws_nieuw_nieuws_nieuw_component__ = __webpack_require__("../../../../../src/app/api/nieuws/nieuws-nieuw/nieuws-nieuw.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__api_nieuws_nieuws_detail_nieuws_detail_component__ = __webpack_require__("../../../../../src/app/api/nieuws/nieuws-detail/nieuws-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__api_wedstrijden_wedstrijden_component__ = __webpack_require__("../../../../../src/app/api/wedstrijden/wedstrijden.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__api_wedstrijden_wedstrijd_nieuw_wedstrijd_nieuw_component__ = __webpack_require__("../../../../../src/app/api/wedstrijden/wedstrijd-nieuw/wedstrijd-nieuw.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_73__api_wedstrijden_wedstrijd_detail_wedstrijd_detail_component__ = __webpack_require__("../../../../../src/app/api/wedstrijden/wedstrijd-detail/wedstrijd-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_74__api_wedstrijden_edit_wedstrijd_edit_wedstrijd_component__ = __webpack_require__("../../../../../src/app/api/wedstrijden/edit-wedstrijd/edit-wedstrijd.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_75__api_sponsor_sponsor_component__ = __webpack_require__("../../../../../src/app/api/sponsor/sponsor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_76__api_sponsor_edit_sponsor_edit_sponsor_component__ = __webpack_require__("../../../../../src/app/api/sponsor/edit-sponsor/edit-sponsor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_77__api_sponsor_new_sponsor_new_sponsor_component__ = __webpack_require__("../../../../../src/app/api/sponsor/new-sponsor/new-sponsor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_78__api_sponsor_sponsor_detail_sponsor_detail_component__ = __webpack_require__("../../../../../src/app/api/sponsor/sponsor-detail/sponsor-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_79__api_ploegen_ploegen_service__ = __webpack_require__("../../../../../src/app/api/ploegen/ploegen.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_80__api_spelers_spelers_service__ = __webpack_require__("../../../../../src/app/api/spelers/spelers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_81__api_wedstrijden_wedstrijd_service__ = __webpack_require__("../../../../../src/app/api/wedstrijden/wedstrijd.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_82__api_nieuws_nieuws_service__ = __webpack_require__("../../../../../src/app/api/nieuws/nieuws.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_83__api_dialog_delete_dialog_service__ = __webpack_require__("../../../../../src/app/api/dialog/delete-dialog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_84__club_contact_contact_service__ = __webpack_require__("../../../../../src/app/club/contact/contact.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_85__api_sponsor_sponsor_service__ = __webpack_require__("../../../../../src/app/api/sponsor/sponsor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_86__user_authentication_service__ = __webpack_require__("../../../../../src/app/user/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_87__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_88__boolean_check_pipe__ = __webpack_require__("../../../../../src/app/boolean-check.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_89_ngx_bootstrap_bs_moment__ = __webpack_require__("../../../../ngx-bootstrap/bs-moment/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_90_ngx_bootstrap_locale__ = __webpack_require__("../../../../ngx-bootstrap/locale.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_91__jeugd_u13_u13_component__ = __webpack_require__("../../../../../src/app/jeugd/u13/u13.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_92__helpers_player_detail_player_detail_component__ = __webpack_require__("../../../../../src/app/helpers/player-detail/player-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_93__jeugd_jeugd_nieuws_jeugd_nieuws_component__ = __webpack_require__("../../../../../src/app/jeugd/jeugd-nieuws/jeugd-nieuws.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_94__club_club_nieuws_club_nieuws_component__ = __webpack_require__("../../../../../src/app/club/club-nieuws/club-nieuws.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Modules
//--Angular





//--App modules

//--3rd Party modules

//import {Ng2UploaderModule} from 'ng2-uploader';














//ng-bootstrap









//Classes

//Components
//--Website























//Components
//--API

























//Help-components
//Services
//--App
//--API









//--Website
//Other services







Object(__WEBPACK_IMPORTED_MODULE_89_ngx_bootstrap_bs_moment__["a" /* defineLocale */])('nl', __WEBPACK_IMPORTED_MODULE_90_ngx_bootstrap_locale__["a" /* nl */]);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_31__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_33__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_34__senioren_senioren_component__["a" /* SeniorenComponent */],
                __WEBPACK_IMPORTED_MODULE_35__senioren_aploeg_aploeg_component__["a" /* AploegComponent */],
                __WEBPACK_IMPORTED_MODULE_36__senioren_zondagsreserven_zondagsreserven_component__["a" /* ZondagsreservenComponent */],
                __WEBPACK_IMPORTED_MODULE_37__jeugd_jeugd_component__["a" /* JeugdComponent */],
                __WEBPACK_IMPORTED_MODULE_38__jeugd_u6_u6_component__["a" /* U6Component */],
                __WEBPACK_IMPORTED_MODULE_39__jeugd_u7_u7_component__["a" /* U7Component */],
                __WEBPACK_IMPORTED_MODULE_40__jeugd_u8_u8_component__["a" /* U8Component */],
                __WEBPACK_IMPORTED_MODULE_41__jeugd_u9_u9_component__["a" /* U9Component */],
                __WEBPACK_IMPORTED_MODULE_42__jeugd_u11_u11_component__["a" /* U11Component */],
                __WEBPACK_IMPORTED_MODULE_43__jeugd_u15_u15_component__["a" /* U15Component */],
                __WEBPACK_IMPORTED_MODULE_44__jeugd_u17_u17_component__["a" /* U17Component */],
                __WEBPACK_IMPORTED_MODULE_45__evenementen_evenementen_component__["a" /* EvenementenComponent */],
                __WEBPACK_IMPORTED_MODULE_46__club_club_component__["a" /* ClubComponent */],
                __WEBPACK_IMPORTED_MODULE_47__club_bestuur_bestuur_component__["a" /* BestuurComponent */],
                __WEBPACK_IMPORTED_MODULE_48__club_info_info_component__["a" /* InfoComponent */],
                __WEBPACK_IMPORTED_MODULE_49__club_contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_50__club_ligging_ligging_component__["a" /* LiggingComponent */],
                __WEBPACK_IMPORTED_MODULE_51__club_documenten_documenten_component__["a" /* DocumentenComponent */],
                __WEBPACK_IMPORTED_MODULE_52__club_links_links_component__["a" /* LinksComponent */],
                __WEBPACK_IMPORTED_MODULE_53__sponsors_sponsors_component__["a" /* SponsorsComponent */],
                __WEBPACK_IMPORTED_MODULE_54__api_api_component__["a" /* ApiComponent */],
                __WEBPACK_IMPORTED_MODULE_55__api_ploegen_ploegen_component__["a" /* PloegenComponent */],
                __WEBPACK_IMPORTED_MODULE_56__api_ploegen_ploeg_detail_ploeg_detail_component__["a" /* PloegDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_57__api_ploegen_ploeg_nieuw_ploeg_nieuw_component__["a" /* PloegNieuwComponent */],
                __WEBPACK_IMPORTED_MODULE_58__api_ploegen_edit_ploeg_edit_ploeg_component__["a" /* EditPloegComponent */],
                __WEBPACK_IMPORTED_MODULE_59__api_spelers_spelers_component__["a" /* SpelersComponent */],
                __WEBPACK_IMPORTED_MODULE_62__api_spelers_edit_speler_edit_speler_component__["a" /* EditSpelerComponent */],
                __WEBPACK_IMPORTED_MODULE_60__api_spelers_speler_detail_speler_detail_component__["a" /* SpelerDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_61__api_spelers_speler_nieuw_speler_nieuw_component__["a" /* SpelerNieuwComponent */],
                __WEBPACK_IMPORTED_MODULE_63__api_events_events_component__["a" /* EventsComponent */],
                __WEBPACK_IMPORTED_MODULE_64__api_events_event_nieuw_event_nieuw_component__["a" /* EventNieuwComponent */],
                __WEBPACK_IMPORTED_MODULE_65__api_events_event_detail_event_detail_component__["a" /* EventDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_66__api_events_edit_event_edit_event_component__["a" /* EditEventComponent */],
                __WEBPACK_IMPORTED_MODULE_67__api_nieuws_nieuws_component__["a" /* NieuwsComponent */],
                __WEBPACK_IMPORTED_MODULE_68__api_nieuws_edit_nieuws_edit_nieuws_component__["a" /* EditNieuwsComponent */],
                __WEBPACK_IMPORTED_MODULE_69__api_nieuws_nieuws_nieuw_nieuws_nieuw_component__["a" /* NieuwsNieuwComponent */],
                __WEBPACK_IMPORTED_MODULE_70__api_nieuws_nieuws_detail_nieuws_detail_component__["a" /* NieuwsDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_71__api_wedstrijden_wedstrijden_component__["a" /* WedstrijdenComponent */],
                __WEBPACK_IMPORTED_MODULE_72__api_wedstrijden_wedstrijd_nieuw_wedstrijd_nieuw_component__["a" /* WedstrijdNieuwComponent */],
                __WEBPACK_IMPORTED_MODULE_73__api_wedstrijden_wedstrijd_detail_wedstrijd_detail_component__["a" /* WedstrijdDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_74__api_wedstrijden_edit_wedstrijd_edit_wedstrijd_component__["a" /* EditWedstrijdComponent */],
                __WEBPACK_IMPORTED_MODULE_75__api_sponsor_sponsor_component__["a" /* SponsorComponent */],
                __WEBPACK_IMPORTED_MODULE_76__api_sponsor_edit_sponsor_edit_sponsor_component__["a" /* EditSponsorComponent */],
                __WEBPACK_IMPORTED_MODULE_77__api_sponsor_new_sponsor_new_sponsor_component__["a" /* NewSponsorComponent */],
                __WEBPACK_IMPORTED_MODULE_78__api_sponsor_sponsor_detail_sponsor_detail_component__["a" /* SponsorDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_88__boolean_check_pipe__["a" /* BooleanCheckPipe */],
                __WEBPACK_IMPORTED_MODULE_32__api_dialog_delete_delete_dialog_component__["a" /* DeleteDialog */],
                __WEBPACK_IMPORTED_MODULE_91__jeugd_u13_u13_component__["a" /* U13Component */],
                __WEBPACK_IMPORTED_MODULE_92__helpers_player_detail_player_detail_component__["a" /* PlayerDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_93__jeugd_jeugd_nieuws_jeugd_nieuws_component__["a" /* JeugdNieuwsComponent */],
                __WEBPACK_IMPORTED_MODULE_94__club_club_nieuws_club_nieuws_component__["a" /* ClubNieuwsComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_cdk_table__["m" /* CdkTableModule */],
                __WEBPACK_IMPORTED_MODULE_7_ng2_file_upload__["FileUploadModule"],
                __WEBPACK_IMPORTED_MODULE_8_ng2_imageupload__["ImageUploadModule"],
                __WEBPACK_IMPORTED_MODULE_9_angular2_froala_wysiwyg__["a" /* FroalaEditorModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_9_angular2_froala_wysiwyg__["b" /* FroalaViewModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_10_ng2_toastr_ng2_toastr__["ToastModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_11_ng_sidebar__["SidebarModule"].forRoot(),
                //ng-bootstrap
                __WEBPACK_IMPORTED_MODULE_21_ngx_bootstrap_datepicker__["a" /* BsDatepickerModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_22_ngx_bootstrap_pagination__["a" /* PaginationModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_23_ngx_bootstrap_modal__["b" /* ModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_24_ngx_bootstrap_progressbar__["a" /* ProgressbarModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_25_ngx_bootstrap_timepicker__["a" /* TimepickerModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_26_ngx_bootstrap_accordion__["a" /* AccordionModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_27_ngx_bootstrap_collapse__["a" /* CollapseModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_28_ngx_bootstrap_carousel__["a" /* CarouselModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_19_angular2_moment__["MomentModule"],
                __WEBPACK_IMPORTED_MODULE_12__swimlane_ngx_datatable__["NgxDatatableModule"],
                __WEBPACK_IMPORTED_MODULE_13__angular_material_table__["b" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material_sort__["b" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material_paginator__["b" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_material_dialog__["b" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material_sidenav__["a" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material_snack_bar__["b" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_29_ng2_page_scroll__["a" /* Ng2PageScrollModule */],
                __WEBPACK_IMPORTED_MODULE_20__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyBo9M4SgCZAN7yurg-3KZvs6MMC_YIbMp0'
                })
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_32__api_dialog_delete_delete_dialog_component__["a" /* DeleteDialog */],
                __WEBPACK_IMPORTED_MODULE_92__helpers_player_detail_player_detail_component__["a" /* PlayerDetailComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_79__api_ploegen_ploegen_service__["a" /* PloegenService */],
                __WEBPACK_IMPORTED_MODULE_80__api_spelers_spelers_service__["a" /* SpelersService */],
                __WEBPACK_IMPORTED_MODULE_81__api_wedstrijden_wedstrijd_service__["a" /* WedstrijdService */],
                __WEBPACK_IMPORTED_MODULE_82__api_nieuws_nieuws_service__["a" /* NieuwsService */],
                __WEBPACK_IMPORTED_MODULE_30__app_settings__["a" /* AppSettings */],
                __WEBPACK_IMPORTED_MODULE_83__api_dialog_delete_dialog_service__["a" /* DeleteDialogService */],
                __WEBPACK_IMPORTED_MODULE_84__club_contact_contact_service__["a" /* ContactService */],
                __WEBPACK_IMPORTED_MODULE_85__api_sponsor_sponsor_service__["a" /* SponsorService */],
                __WEBPACK_IMPORTED_MODULE_86__user_authentication_service__["a" /* AuthenticationService */],
                __WEBPACK_IMPORTED_MODULE_87__guards_auth_guard__["a" /* AuthGuard */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_32__api_dialog_delete_delete_dialog_component__["a" /* DeleteDialog */],
                __WEBPACK_IMPORTED_MODULE_92__helpers_player_detail_player_detail_component__["a" /* PlayerDetailComponent */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_31__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/boolean-check.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BooleanCheckPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BooleanCheckPipe = /** @class */ (function () {
    function BooleanCheckPipe() {
    }
    BooleanCheckPipe.prototype.transform = function (value, args) {
        if (value == true) {
            return "Thuis";
        }
        else {
            return "Uit";
        }
    };
    BooleanCheckPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'booleanCheck'
        })
    ], BooleanCheckPipe);
    return BooleanCheckPipe;
}());



/***/ }),

/***/ "../../../../../src/app/club/bestuur/bestuur.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\" jumbotron bg-accent mt-4\">\n  <h1 class=\"display-4 text-primary\">Bestuur</h1>\n  <p class=\"lead text-primary\">De beste stuurlui staan aan wal</p>\n  <hr class=\"my-4\">\n  <p class=text-dark>KSK is een club die enkel kan bestaan door de talloze vrijwilligers. Heb jij zin om ons een handje te helpen of wil je toetreden tot het bestuur, laat ons dan zeker iets weten!</p>\n  <p class=\"lead\">\n    <a class=\"btn btn-primary\" href=\"mailto:secretariaatkskklinge@telenet.be\" role=\"button\">Meer info</a>\n  </p>\n</div>\n<div class=\"row\">\n  <div class=\"col-12 col-md-6\">\n    <h2 class=\"text-center text-primary\">Algemeen bestuur</h2>\n    <ul class=\"list-group \">\n      <li class=\"list-group-item bg-ksk text-dark\"><strong>Ere-voorzitter </strong><br />??</li>\n      <li class=\"list-group-item bg-ksk text-dark\"><strong>Ere-secretaris </strong><br />Jozef Verbraeken</li>\n      <li class=\"list-group-item bg-ksk text-dark\"><strong>Voorzitter </strong><br />Chris Scheerders</li>\n      <li class=\"list-group-item bg-ksk text-dark\"><strong>Secretaris </strong><br />Nicholas De Vet</li>\n      <li class=\"list-group-item bg-ksk text-dark\"><strong>Penningsmeester </strong><br />Bart Janssen</li>\n      <li class=\"list-group-item bg-ksk text-dark\"><strong>Jeugdcoördinator </strong><br />Kurt Van Mele</li>\n    </ul>\n  </div>\n  <div class=\"col-12 col-md-6\">\n    <h2 class=\"text-center text-primary\">Bestuursleden</h2>\n    <ul class=\"list-group \">\n      <li class=\"list-group-item bg-accent text-primary\">Paul Reyns</li>\n      <li class=\"list-group-item bg-accent text-primary\">Alwin Jonkers</li>\n      <li class=\"list-group-item bg-accent text-primary\">Dieter Jonkers</li>\n      <li class=\"list-group-item bg-accent text-primary\"></li>\n      <li class=\"list-group-item bg-accent text-primary\"></li>\n      <li class=\"list-group-item bg-accent text-primary\"></li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/club/bestuur/bestuur.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/club/bestuur/bestuur.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BestuurComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BestuurComponent = /** @class */ (function () {
    function BestuurComponent() {
    }
    BestuurComponent.prototype.ngOnInit = function () {
    };
    BestuurComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-bestuur',
            template: __webpack_require__("../../../../../src/app/club/bestuur/bestuur.component.html"),
            styles: [__webpack_require__("../../../../../src/app/club/bestuur/bestuur.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BestuurComponent);
    return BestuurComponent;
}());



/***/ }),

/***/ "../../../../../src/app/club/club-nieuws/club-nieuws.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\" jumbotron bg-accent mt-4\">\n  <h1 class=\"display-4 text-primary\">Clubnieuws</h1>\n\n</div>\n<div class=\"row\">\n  <div class=\"col\">\n    <ul class=\"list-group list-group-flush\">\n      <li *ngFor=\"let event of events; let even = even; let odd = odd\" class=\"list-group-item lead text-primary hoverable\" id=\"event{{event.nieuws_id}}\" [ngClass]=\"{'bg-ksk': even, 'bg-accent': odd}\">\n      <h3 class=\"text-primary\" (click)=showContent(event.nieuws_id)>{{event.titel}} <small class=\"float-right text-muted\">{{event.datum | amDateFormat:\"DD/MM/YYYY\"}}</small></h3>\n        <div *ngIf=\"showEventDetail(event.nieuws_id)\">\n          <div [froalaView]=\"event.inhoud\"></div>\n        </div>\n\n        <p class=\"text-muted float-right lead\" *ngIf=\"!showEventDetail(event.nieuws_id)\" (click)=showContent(event.nieuws_id)>\n          <i class=\"fa fa-plus-square\" aria-hidden=\"true\"></i> Meer info\n        </p>\n        <p class=\"text-muted float-right lead border-bottom\" *ngIf=\"showEventDetail(event.nieuws_id)\" (click)=showContent(event.nieuws_id)>\n          <i class=\"fa fa-minus-square\" aria-hidden=\"true\"></i> Minder info\n        </p>\n      </li>\n\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/club/club-nieuws/club-nieuws.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/club/club-nieuws/club-nieuws.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClubNieuwsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_nieuws_nieuws_service__ = __webpack_require__("../../../../../src/app/api/nieuws/nieuws.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ClubNieuwsComponent = /** @class */ (function () {
    function ClubNieuwsComponent(newsSvc, router, route) {
        this.newsSvc = newsSvc;
        this.router = router;
        this.route = route;
        this.fragment = "";
    }
    ClubNieuwsComponent.prototype.addToGoogleCalendar = function (event) {
        var url;
        var d;
        d = __WEBPACK_IMPORTED_MODULE_3_moment__(event.eventDate).format("YYYYMMDDTHHmmss");
        url = "https://www.google.com/calendar/render?action=TEMPLATE&text=" + event.titel + "&dates=" + d + "Z/" + d + "Z&details=Evenement+bij+KSK+Klinge&location=Buitenstraat+9,+9170+De+Klinge&sf=true&output=xml";
        window.open(url, '_blank' // <- This is what makes it open in a new window.
        );
    };
    ClubNieuwsComponent.prototype.loadClubNieuws = function () {
        var _this = this;
        this.newsSvc.getNewsClub().subscribe(function (ev) {
            _this.events = ev;
        });
    };
    ClubNieuwsComponent.prototype.showEventDetail = function (id) {
        if (id == this.showID) {
            return true;
        }
        else {
            return false;
        }
    };
    ClubNieuwsComponent.prototype.showContent = function (id) {
        if (this.showID == id) {
            this.showID = 0;
        }
        else {
            this.showID = id;
        }
    };
    ClubNieuwsComponent.prototype.ngOnInit = function () {
        this.loadClubNieuws();
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* NavigationEnd */])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    };
    ClubNieuwsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-club-nieuws',
            template: __webpack_require__("../../../../../src/app/club/club-nieuws/club-nieuws.component.html"),
            styles: [__webpack_require__("../../../../../src/app/club/club-nieuws/club-nieuws.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_nieuws_nieuws_service__["a" /* NieuwsService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], ClubNieuwsComponent);
    return ClubNieuwsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/club/club.component.html":
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/club/club.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/club/club.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClubComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ClubComponent = /** @class */ (function () {
    function ClubComponent() {
    }
    ClubComponent.prototype.ngOnInit = function () {
    };
    ClubComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-club',
            template: __webpack_require__("../../../../../src/app/club/club.component.html"),
            styles: [__webpack_require__("../../../../../src/app/club/club.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ClubComponent);
    return ClubComponent;
}());



/***/ }),

/***/ "../../../../../src/app/club/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\" jumbotron bg-accent mt-4\">\r\n  <h1 class=\"display-4 text-primary\">Contacteer ons</h1>\r\n\r\n</div>\r\n\r\n\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-xl-5\">\r\n\r\n    <div class=\"card contactCard text-center\">\r\n\r\n\r\n      <div class=\"card-body\">\r\n        <p class=\"card-text lead text-primary\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i> Buitenstraat 9 <br/> 9170 De Klinge <br/>\r\n          <i class=\"fa fa-phone\" aria-hidden=\"true\"></i><a href=\"tel:+3237705681\"> 03/770 56 81</a> <br/>\r\n          <i class=\"fa fa-envelope-o\" aria-hidden=\"true\"></i><a href=\"mailto:secretariaatkskklinge@telenet.be\"> secretariaatkskklinge@telenet.be</a>\r\n        </p>\r\n        <a href=\"tel:+3237705681\" class=\"btn btn-primary\"><i class=\"fa fa-phone\" aria-hidden=\"true\"></i> Bel ons</a>\r\n        <a href=\"mailto:secretariaatkskklinge@telenet.be\" class=\"btn btn-primary\"><i class=\"fa fa-envelope-o\" aria-hidden=\"true\"></i> Mail ons</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-xl-7 \">\r\n    <div id=\"contactForm\" class=\"card contactCardSuccess text-primary\">\r\n      <div [hidden]=\"submitted\" class=\"card-body\">\r\n        <form (ngSubmit)=\"onSubmit()\" class=\"mb-5\" #contactForm=\"ngForm\">\r\n          <div class=\"form-group\" [ngClass]=\"{'has-success': name.valid, 'has-danger': name.touched && !name.valid}\">\r\n            <label for=\"name\" class=\"form-control-label\">Voornaam</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"name\" [ngClass]=\"{'form-control-success': name.valid, 'form-control-danger': name.touched && !name.valid}\" required [(ngModel)]=\"model.firstName\" name=\"name\" #name=\"ngModel\">\r\n            <div [hidden]=\"name.valid || name.pristine\" class=\"alert alert-danger\">\r\n              Gelieve jouw voornaam in te geven\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\" [ngClass]=\"{'has-success': model.lastName.length > 0}\">\r\n            <label for=\"lastName\" class=\"form-control-label\">Achternaam</label>\r\n            <input type=\"text\" class=\"form-control\" [ngClass]=\"{'form-control-success': model.lastName.length > 0}\" id=\"lastName\" [(ngModel)]=\"model.lastName\" name=\"lastName\" #lastName=\"ngModel\">\r\n          </div>\r\n          <div class=\"form-group\" [ngClass]=\"{'has-success': emailVisitor.valid, 'has-danger': emailVisitor.touched && !emailVisitor.valid}\">\r\n            <label for=\"emailVisitor\" class=\"form-control-label\">Email</label>\r\n            <input type=\"email\" class=\"form-control\" [ngClass]=\"{'form-control-success': emailVisitor.valid, 'form-control-danger': emailVisitor.touched && !emailVisitor.valid}\" id=\"emailVisitor\" required email [(ngModel)]=\"model.email\" name=\"emailVisitor\" #emailVisitor=\"ngModel\">\r\n\r\n            <div [hidden]=\"emailVisitor.valid || emailVisitor.pristine\" class=\"alert alert-danger\">\r\n              Gelieve een geldig emailadres in te vullen\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\" [ngClass]=\"{'has-success': phone.valid && phone.touched, 'has-danger': phone.touched && !phone.valid}\">\r\n            <label for=\"phone\" class=\"form-control-label\">Telefoonnummer</label>\r\n            <input type=\"text\" class=\"form-control\" [ngClass]=\"{'form-control-success': phone.valid && phone.touched, 'form-control-danger': phone.touched && !phone.valid}\" id=\"phone\" [(ngModel)]=\"model.phone\" name=\"phone\" #phone=\"ngModel\">\r\n\r\n            <div [hidden]=\"phone.valid || phone.pristine\" class=\"alert alert-danger\">\r\n              Gelieve een geldig telefoonnummer in te vullen\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group\" [ngClass]=\"{'has-success': subjectMail.valid, 'has-danger': subjectMail.touched && !subjectMail.valid}\">\r\n            <label for=\"subjectMail\" class=\"form-control-label\">Onderwerp</label>\r\n            <textarea class=\"form-control\" [ngClass]=\"{'form-control-success': subjectMail.valid, 'form-control-danger': subjectMail.touched && !subjectMail.valid}\" minlength=\"10\" id=\"subjectMail\" required [(ngModel)]=\"model.subjectMail\" name=\"subjectMail\" #subjectMail=\"ngModel\"\r\n              rows=\"5\"></textarea>\r\n            <div [hidden]=\"subjectMail.valid || subjectMail.pristine\" class=\"alert alert-danger\">\r\n              Vertel ons waar we jou bij kunnen helpen. (Gebruik tenminste 10 karakters)\r\n            </div>\r\n          </div>\r\n\r\n          <button type=\"submit\" class=\"btn btn-block btn-success btnLink\" [disabled]=\"!contactForm.form.valid\">Verzend</button>\r\n        </form>\r\n      </div>\r\n      <div [hidden]=\"!submitted\">\r\n        <div class=\"alert alert-success\">\r\n          <h4>\r\n            Hartelijk dank voor jouw mail\r\n          </h4>\r\n          <p>\r\n            We nemen zo spoedig mogelijk contact met u op!\r\n          </p>\r\n        </div>\r\n      </div>\r\n      <div [hidden]=\"!errorSend\">\r\n        <div class=\"alert alert-danger\">\r\n          <h4>\r\n            Er is een fout opgetreden\r\n          </h4>\r\n          <p>\r\n            Probeer het opnieuw. Indien het niet lukt, graag een mail sturen naar <a href=\"mailto:secretariaatkskklinge@telenet.be\">KSK Klinge</a> met daarin jouw vraag.\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/club/contact/contact.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/club/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__visitor__ = __webpack_require__("../../../../../src/app/club/contact/visitor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_service__ = __webpack_require__("../../../../../src/app/club/contact/contact.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactComponent = /** @class */ (function () {
    function ContactComponent(contactService) {
        this.contactService = contactService;
        this.errorSend = false;
        this.submitted = false;
        this.model = new __WEBPACK_IMPORTED_MODULE_1__visitor__["a" /* Visitor */]("", "", "", "", "", "");
    }
    ContactComponent.prototype.onSubmit = function () {
        var _this = this;
        this.contactService.postEmail(this.model).subscribe(function (response) { return _this.handleResponse(response); }, function (error) { return _this.handleResponse(error); });
    };
    ContactComponent.prototype.handleResponse = function (response) {
        if (response.status == 'success') {
            this.model = { firstName: '', lastName: '', email: '', phone: '', address: '', subjectMail: '' };
            this.submitted = true;
        }
        if (response.status == 'error') {
            this.errorSend = true;
        }
    };
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__("../../../../../src/app/club/contact/contact.component.html"),
            styles: [__webpack_require__("../../../../../src/app/club/contact/contact.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__contact_service__["a" /* ContactService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__contact_service__["a" /* ContactService */]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "../../../../../src/app/club/contact/contact.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_settings__ = __webpack_require__("../../../../../src/app/app-settings.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ContactService = /** @class */ (function () {
    function ContactService(http) {
        this.http = http;
        this.wedstrijdenURL = __WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* AppSettings */].API_ENDPOINT + '/wedstrijden';
        this._contactUrl = __WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* AppSettings */].API_ENDPOINT + '/email';
    }
    ContactService.prototype.postEmail = function (newMail) {
        var body = "name=" + (newMail.firstName + ' ' + newMail.lastName) + "&phone=" + newMail.phone + "$address=" + newMail.address + "&email=" + newMail.email + "&message=" + newMail.subjectMail;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http
            .post(this._contactUrl, body, options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ContactService.prototype.handleError = function (error) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error('Error in retrieving email: ' + error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error');
    };
    ContactService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ContactService);
    return ContactService;
}());



/***/ }),

/***/ "../../../../../src/app/club/contact/visitor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Visitor; });
var Visitor = /** @class */ (function () {
    function Visitor(firstName, lastName, email, phone, address, subjectMail) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.subjectMail = subjectMail;
    }
    return Visitor;
}());



/***/ }),

/***/ "../../../../../src/app/club/documenten/documenten.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\" jumbotron bg-accent mt-4\">\n<h1 class=\"display-4 text-primary\">Nuttige documenten</h1>\n\n</div >\n<div class=\"row\">\n  <div class=\"col\">\n    <ul class=\"list-group list-group-flush\">\n        <li class=\"list-group-item\"><a target=\"_blank\" href=\"assets/files/Ongevalform.pdf\">Ongevalformulier</a></li>\n        <li class=\"list-group-item\"><a target=\"_blank\" href=\"assets/files/InfoSol.pdf\">Info Solidariteitsfonds</a></li>\n        <li class=\"list-group-item\"><a target=\"_blank\" href=\"assets/files/lidgeldBM.pdf\">Tegemoetkoming Lidgeld Bond Moyson</a></li>\n        <li class=\"list-group-item\"><a target=\"_blank\" href=\"assets/files/lidgeldCM.pdf\">Tegemoetkoming Lidgeld Christelijke Mutualiteit</a></li>\n        <li class=\"list-group-item\"><a target=\"_blank\" href=\"assets/files/lidgeldOZ.pdf\">Tegemoetkoming Lidgeld Onafhankelijk Ziekenfonds</a></li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/club/documenten/documenten.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/club/documenten/documenten.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DocumentenComponent = /** @class */ (function () {
    function DocumentenComponent() {
    }
    DocumentenComponent.prototype.ngOnInit = function () {
    };
    DocumentenComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-documenten',
            template: __webpack_require__("../../../../../src/app/club/documenten/documenten.component.html"),
            styles: [__webpack_require__("../../../../../src/app/club/documenten/documenten.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DocumentenComponent);
    return DocumentenComponent;
}());



/***/ }),

/***/ "../../../../../src/app/club/info/info.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\" jumbotron bg-accent mt-4\">\n<h1 class=\"display-4 text-primary\">Info</h1>\n\n</div >\n<div class=\"card-group\">\n  <div class=\"card\">\n    <div class=\"card-body bg-ksk\">\n      <h3 class=\"card-title text-dark text-center\">K.S.K. Klinge</h3>\n      <ul class=\"list-group list-group-flush\">\n        <li class=\"list-group-item text-primary bg-ksk\"><strong>Stamnummer</strong><br />04211</li>\n        <li class=\"list-group-item text-primary bg-ksk\"><strong>BTW-nr</strong><br />423.713.618</li>\n        <li class=\"list-group-item text-primary bg-ksk\"><strong>Clubkleuren</strong><br />Oranje - Blauw - Blauw</li>\n        <li class=\"list-group-item text-primary bg-ksk\"><strong>Terrein</strong><br />Buitenstraat 9, 9170 De Klinge<br />03/770 56 81</li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"card-body bg-accent\">\n      <h3 class=\"card-title text-dark text-center\">Gerechtigd correspondent</h3>\n      <ul class=\"list-group list-group-flush\">\n        <li class=\"list-group-item text-primary bg-accent lead font-weight-bold\">Nicholas De Vet</li>\n        <li class=\"list-group-item text-primary bg-accent\"><strong>Adres</strong><br />Aststraat 31<br />9170 Sint-Gillis-Waas</li>\n        <li class=\"list-group-item text-primary bg-accent\"><strong>Contact</strong><br /><i class=\"fa fa-phone\" aria-hidden=\"true\"></i> 0497/29 48 33<br /><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i> <a href=\"mailto:secretariaatkskklinge@telenet.be\">secretariaatkskklinge@telenet.be</a></li>\n        <li class=\"list-group-item text-primary bg-accent\"><strong>Functie</strong><br />Houder blauwe kaart <br />Gerechtigd correspondent<br />Secretaris</li>\n      </ul>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/club/info/info.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/club/info/info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InfoComponent = /** @class */ (function () {
    function InfoComponent() {
    }
    InfoComponent.prototype.ngOnInit = function () {
    };
    InfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-info',
            template: __webpack_require__("../../../../../src/app/club/info/info.component.html"),
            styles: [__webpack_require__("../../../../../src/app/club/info/info.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], InfoComponent);
    return InfoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/club/ligging/ligging.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\" jumbotron bg-accent mt-4\">\n<h1 class=\"display-4 text-primary\">Ligging</h1>\n\n</div >\n<div class=\"row justify-content-center\">\n  <div class=\"col-12 col-lg-8 col-xl-6\">\n    <div class=\"embed-responsive embed-responsive-1by1 mapFrame m-3\">\n  <iframe class=\" embed-responsive-item\" src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2497.2001501027617!2d4.075618115760615!3d51.2522240795939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbbd1cff8880fa39e!2sKSK+Klinge!5e0!3m2!1snl!2sus!4v1517098508256\"></iframe>\n</div>\n\n  </div>\n</div>\n\n<div class=\"card-group\">\n  <div class=\"card\">\n    <div class=\"card-body bg-ksk\">\n      <h3 class=\"card-title text-dark text-center\">Komende van Antwerpen</h3>\n      <p class=\"lead\">\n        Neem afslag 11-Kemzeke op de E-34<br />Op de rotonde neem je de 2de afslag richting Hulst<br />Sla rechtsaf richting Klingestraat/Buitenstraat<br />Sla linksaf aan café 'De Oude Statie'<br />U vindt verderop het terrein van KSK Klinge\n      </p>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"card-body bg-accent\">\n      <h3 class=\"card-title text-dark text-center\">Komende van Gent</h3>\n      <p class=\"lead\">\n        Neem afslag 11-Kemzeke op de E-34<br />\nOp de rotonde neem je de 4de afslag richting Hulst\n<br />\nGa de volgende rotonde over\n<br />\nSla rechtsaf richting Klingestraat/Buitenstraat\n<br />\nSla linksaf aan café 'De Oude Statie'\n<br />\nU vindt verderop het terrein van KSK Klinge\n      </p>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/club/ligging/ligging.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/club/ligging/ligging.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LiggingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LiggingComponent = /** @class */ (function () {
    function LiggingComponent() {
        this.lat = 51.252318;
        this.lng = 4.077796;
    }
    LiggingComponent.prototype.ngOnInit = function () {
    };
    LiggingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-ligging',
            template: __webpack_require__("../../../../../src/app/club/ligging/ligging.component.html"),
            styles: [__webpack_require__("../../../../../src/app/club/ligging/ligging.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LiggingComponent);
    return LiggingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/club/links/links.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\" jumbotron bg-accent mt-4\">\n<h1 class=\"display-4 text-primary\">Nuttige links</h1>\n\n</div >\n<div class=\"row\">\n  <div class=\"col\">\n    <ul class=\"list-group list-group-flush\">\n      <li class=\"list-group-item\"><a target=\"_blank\" href=\"http://www.belgianfootball.be/nl/afgelastingen\">Afgelastingen</a></li>\n                               <li class=\"list-group-item\"><a target=\"_blank\" href=\"http://www.belgianfootball.be/nl/adressen-clubs\">Adressen andere clubs</a></li>\n                               <li class=\"list-group-item\"><a target=\"_blank\" href=\"https://www.devoetbalmarkt.be/m/nl/voetbal/uitslagen/mannen/2017-2018/oost-vlaanderen/derde-provinciale-e/\">Uitslagen en standen Provinciale ploegen</a></li>\n                               <li class=\"list-group-item\"><a target=\"_blank\" href=\"http://www.facebook.com/pages/KSKKlinge/327246380720462\">Post iets op onze Facebook wall</a></li>\n                               <li class=\"list-group-item\"><a target=\"_blank\" href=\"https://twitter.com/kskklinge\">Tweet je mening over KSK de wereld in via @kskklinge</a></li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/club/links/links.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/club/links/links.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinksComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LinksComponent = /** @class */ (function () {
    function LinksComponent() {
    }
    LinksComponent.prototype.ngOnInit = function () {
    };
    LinksComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-links',
            template: __webpack_require__("../../../../../src/app/club/links/links.component.html"),
            styles: [__webpack_require__("../../../../../src/app/club/links/links.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LinksComponent);
    return LinksComponent;
}());



/***/ }),

/***/ "../../../../../src/app/evenementen/evenementen.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\" jumbotron bg-accent mt-4\">\r\n  <h1 class=\"display-4 text-primary\">Evenementen</h1>\r\n\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col\">\r\n    <h3 class=\"text-primary text-center mb-3\">Aankomende evenementen</h3>\r\n    <ul class=\"list-group list-group-flush\">\r\n      <li *ngFor=\"let event of events; let even = even; let odd = odd\" class=\"list-group-item lead text-primary hoverable\" id=\"event{{event.nieuws_id}}\" [ngClass]=\"{'bg-ksk': even, 'bg-accent': odd}\">\r\n        <h3 class=\"text-primary\" (click)=showContent(event.nieuws_id)>{{event.titel}}</h3>\r\n        <h5 class=\"text-muted\">{{event.eventDate | amDateFormat:\"DD/MM/YYYY\"}}</h5>\r\n        <div *ngIf=\"showEventDetail(event.nieuws_id)\" >\r\n          <div [froalaView]=\"event.inhoud\"></div>\r\n        </div>\r\n        <a class=\"btn\" [ngClass]=\"{'btn-secondary': even, 'btn-primary': odd}\" (click)=addToGoogleCalendar(event)>Toevoegen aan kalender <i class=\"fa fa-google-plus\" aria-hidden=\"true\"></i></a>\r\n        <p class=\"text-muted float-right lead\" *ngIf=\"!showEventDetail(event.nieuws_id)\" (click)=showContent(event.nieuws_id)>\r\n          <i class=\"fa fa-plus-square\" aria-hidden=\"true\"></i> Meer info\r\n        </p>\r\n        <p class=\"text-muted float-right lead border-bottom\" *ngIf=\"showEventDetail(event.nieuws_id)\" (click)=showContent(event.nieuws_id)>\r\n          <i class=\"fa fa-minus-square\" aria-hidden=\"true\"></i> Minder info\r\n        </p>\r\n      </li>\r\n\r\n    </ul>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row mt-5\">\r\n  <div class=\"col\">\r\n    <h3 class=\"text-primary text-center\">Voorbije evenementen</h3>\r\n    <ul class=\"list-group list-group-flush\">\r\n      <li *ngFor=\"let event of pastEvents; let even = even; let odd = odd\" class=\"list-group-item lead text-primary hoverable\" id=\"event{{event.nieuws_id}}\"  [ngClass]=\"{'bg-accent': even, 'bg-ksk': odd}\">\r\n        <h3 class=\"text-primary\" (click)=showContent(event.nieuws_id)>{{event.titel}}</h3>\r\n        <h5 class=\"text-muted\">{{event.eventDate | amDateFormat:\"DD/MM/YYYY\"}}</h5>\r\n        <div *ngIf=\"showEventDetail(event.nieuws_id)\" >\r\n          <div [froalaView]=\"event.inhoud\"></div>\r\n        </div>\r\n        <p class=\"text-muted float-right lead\" *ngIf=\"!showEventDetail(event.nieuws_id)\" (click)=showContent(event.nieuws_id)>\r\n          <i class=\"fa fa-plus-square\" aria-hidden=\"true\"></i> Meer info\r\n        </p>\r\n        <p class=\"text-muted float-right lead border-bottom\" *ngIf=\"showEventDetail(event.nieuws_id)\" (click)=showContent(event.nieuws_id)>\r\n          <i class=\"fa fa-minus-square\" aria-hidden=\"true\"></i> Minder info\r\n        </p>\r\n      </li>\r\n\r\n    </ul>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/evenementen/evenementen.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/evenementen/evenementen.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EvenementenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_nieuws_nieuws_service__ = __webpack_require__("../../../../../src/app/api/nieuws/nieuws.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EvenementenComponent = /** @class */ (function () {
    function EvenementenComponent(newsSvc, router, route) {
        this.newsSvc = newsSvc;
        this.router = router;
        this.route = route;
        this.fragment = "";
    }
    EvenementenComponent.prototype.loadFutureEvents = function () {
        var _this = this;
        this.newsSvc.getUpcomingEventsAll().subscribe(function (ev) {
            _this.events = ev;
        });
    };
    EvenementenComponent.prototype.addToGoogleCalendar = function (event) {
        var url;
        var d;
        d = __WEBPACK_IMPORTED_MODULE_3_moment__(event.eventDate).format("YYYYMMDDTHHmmss");
        url = "https://www.google.com/calendar/render?action=TEMPLATE&text=" + event.titel + "&dates=" + d + "Z/" + d + "Z&details=Evenement+bij+KSK+Klinge&location=Buitenstraat+9,+9170+De+Klinge&sf=true&output=xml";
        window.open(url, '_blank' // <- This is what makes it open in a new window.
        );
    };
    EvenementenComponent.prototype.loadPastEvents = function () {
        var _this = this;
        this.newsSvc.getPastEvents().subscribe(function (ev) {
            _this.pastEvents = ev;
        });
    };
    EvenementenComponent.prototype.showEventDetail = function (id) {
        if (id == this.showID) {
            return true;
        }
        else {
            return false;
        }
    };
    EvenementenComponent.prototype.showContent = function (id) {
        if (this.showID == id) {
            this.showID = 0;
        }
        else {
            this.showID = id;
        }
    };
    EvenementenComponent.prototype.ngOnInit = function () {
        this.loadFutureEvents();
        this.loadPastEvents();
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* NavigationEnd */])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    };
    EvenementenComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-evenementen',
            template: __webpack_require__("../../../../../src/app/evenementen/evenementen.component.html"),
            styles: [__webpack_require__("../../../../../src/app/evenementen/evenementen.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_nieuws_nieuws_service__["a" /* NieuwsService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], EvenementenComponent);
    return EvenementenComponent;
}());



/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_authentication_service__ = __webpack_require__("../../../../../src/app/user/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, authService, snackBar) {
        this.router = router;
        this.authService = authService;
        this.snackBar = snackBar;
        this.authSvc = authService;
    }
    AuthGuard.prototype.canActivate = function () {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            if (this.authService.tokenIsNotExpired()) {
                return true;
            }
            else {
                this.snackBar.open("Uw login is verlopen. Log opnieuw in", "", {
                    duration: 8000,
                    panelClass: ["bg-danger", "text-white", "p-5"]
                });
                this.authService.logout();
                this.router.navigate(['/api']);
                return false;
            }
        }
        // not logged in so redirect to login page
        this.router.navigate(['/api']);
        return false;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* Router */], __WEBPACK_IMPORTED_MODULE_2__user_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MatSnackBar */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/helpers/player-detail/player-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"row\">\n  <div class=\"col-12 col-md-10 col-lg-8 col-xl-6\">\n    <h2>Bart Antheunis</h2>\n    <div class=\"panini align-self-center\">\n      <img [src]=\"speler.fotoUrl\" class=\"img-fluid align-self-center\" />\n    </div>\n\n\n  </div>\n</div> -->\n<div *ngIf=\"player\">\n\n     <div class=\"modal-body justify-content-center d-flex\">\n       <div class=\"card card-panini\" >\n  <img *ngIf=\"player.fotoUrl != ''\" class=\"card-img-top paniniPic\" [src]=\"player.fotoUrl\" alt=\"Profielfoto {{player.voornaam}}\">\n\n  <div class=\"card-body bg-ksk\">\n\n      <img  class=\"card-logo\" src=\"assets/img/badge.png\" alt=\"logo KSK\">\n\n\n    <h5 class=\"card-title text-dark\">{{player.voornaam}} {{player.naam}}</h5>\n    <p class=\"card-text text-primary\"><strong class=\"font-underline\">Geboortedatum</strong><br />{{player.geboortedatum | amDateFormat:\"DD/MM/YYYY\"}}</p>\n    <p class=\"card-text text-primary\" *ngIf=\"player.positie != ''\"><strong class=\"font-underline\">Positie</strong><br />{{player.positie}}</p>\n    <p class=\"card-text text-primary\" *ngIf=\"player.doelpunten > 0\"><strong class=\"font-underline\">Doelpunten</strong><br />{{player.doelpunten}}</p>\n  </div>\n</div>\n     </div>\n     <div class=\"modal-footer\">\n       <button type=\"button\" class=\"btn btn-default\" (click)=\"bsModalRef.hide()\">Sluit</button>\n     </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/helpers/player-detail/player-detail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/helpers/player-detail/player-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal_bs_modal_ref_service__ = __webpack_require__("../../../../ngx-bootstrap/modal/bs-modal-ref.service.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlayerDetailComponent = /** @class */ (function () {
    function PlayerDetailComponent(bsModalRef) {
        this.bsModalRef = bsModalRef;
    }
    PlayerDetailComponent.prototype.ngOnInit = function () {
    };
    PlayerDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-player-detail',
            template: __webpack_require__("../../../../../src/app/helpers/player-detail/player-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/helpers/player-detail/player-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal_bs_modal_ref_service__["a" /* BsModalRef */]])
    ], PlayerDetailComponent);
    return PlayerDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div #home>\r\n  <div class=\"row\">\r\n    <div class=\"col\" id=\"topHome\">\r\n      <carousel>\r\n        <slide>\r\n          <img src=\"assets/img/main1.jpg\" alt=\"First slide\" class=\"rounded slideImg img-fluid\" style=\"display: block; width: 100%;\">\r\n        </slide>\r\n        <slide>\r\n          <img src=\"assets/img/main2.jpg\" alt=\"Second slide\" class=\"rounded slideImg img-fluid\" style=\"display: block; width: 100%;\">\r\n          <div class=\"carousel-caption d-none d-md-block \">\r\n            <h3 class=\"text-white d-inline px-2\"></h3>\r\n            <p><a routerLink=\"/evenementen\" class=\"btn btn-lg btn-secondary\">Evenementen</a></p>\r\n          </div>\r\n        </slide>\r\n        <slide>\r\n          <img src=\"assets/img/main3.jpg\" alt=\"Third slide\" class=\"rounded slideImg\" style=\"display: block; width: 100%;\">\r\n          <div class=\"carousel-caption d-none d-md-block\">\r\n            <h3 class=\"text-white d-inline px-2\"></h3>\r\n            <p><a routerLink=\"/senioren/aploeg\" class=\"btn btn-lg btn-secondary\">Senioren</a></p>\r\n          </div>\r\n        </slide>\r\n        <slide>\r\n          <img src=\"assets/img/main4.jpg\" alt=\"Third slide\" class=\"rounded slideImg\" style=\"display: block; width: 100%;\">\r\n          <div class=\"carousel-caption d-none d-md-block\">\r\n            <h3 class=\"text-white d-inline px-2\"></h3>\r\n            <p><a routerLink=\"/jeugd\" class=\"btn btn-lg btn-secondary\">Jeugd</a></p>\r\n          </div>\r\n        </slide>\r\n      </carousel>\r\n    </div>\r\n  </div>\r\n  <div class=\"sticky-top topNav\" id=\"topNav\">\r\n    <div class=\"row justify-content-center m-4 \">\r\n      <ul class=\"list-inline justify-content-center\">\r\n        <li class=\"list-inline-item hoverable m-1\"> <a pageScroll [pageScrollEasing]=\"myEasing\" href=\"#eventSection\" class=\"rounded-circle text-center display-inline m-2\"><i class=\"fa fa-calendar-check-o\" aria-hidden=\"true\"></i></a></li>\r\n        <li class=\"list-inline-item hoverable m-1\"> <a pageScroll [pageScrollEasing]=\"myEasing\" href=\"#newsSection\" class=\"rounded-circle text-center display-inline m-2\"><i class=\"fa fa-newspaper-o\" aria-hidden=\"true\"></i></a></li>\r\n        <li class=\"list-inline-item hoverable m-1\"> <a pageScroll [pageScrollEasing]=\"myEasing\" href=\"#nextGameSection\" class=\"rounded-circle text-center display-inline m-2\"><i class=\"fa fa-hand-o-right\" aria-hidden=\"true\"></i></a></li>\r\n        <li class=\"list-inline-item hoverable m-1\"> <a pageScroll [pageScrollEasing]=\"myEasing\" href=\"#tableSection\" class=\"rounded-circle text-center display-inline m-2\"><i class=\"fa fa-trophy\" aria-hidden=\"true\"></i></a></li>\r\n        <li class=\"list-inline-item hoverable m-1\"> <a pageScroll [pageScrollEasing]=\"myEasing\" href=\"#lastGameSection\" class=\"rounded-circle text-center display-inline m-2\"><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i></a></li>\r\n        <li class=\"list-inline-item hoverable m-1\"> <a pageScroll [pageScrollEasing]=\"myEasing\" href=\"#sponsorSection\" class=\"rounded-circle text-center display-inline m-2\"><i class=\"fa fa-flag-checkered\" aria-hidden=\"true\"></i></a></li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <div class=\"row mt-3 justify-content-center featurette\">\r\n    <div class=\"col-12 col-xl-6 menu-item p-3 text-center\">\r\n      <h2 class=\"text-center text-primary\" id=\"eventSection\">Evenementen</h2>\r\n      <div class=\"row\" *ngFor=\"let event of events\">\r\n        <div class=\"card col bg-ksk mb-1 hoverable\" routerLink=\"/evenementen\" fragment=\"event{{event.nieuws_id}}\">\r\n          <div class=\"card-body \">\r\n            <h4 class=\"card-title text-dark\">{{event.titel}}</h4>\r\n            <h6 class=\"card-subtitle mb-2 text-muted\">{{event.eventDate | amDateFormat:\"DD/MM/YYYY\"}}</h6> <a routerLink=\"/evenementen\" class=\"card-link float-right\">Meer info</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <h2 class=\"text-center text-primary mt-3\" id=\"newsSection\">Nieuws</h2>\r\n      <div class=\"row\" *ngFor=\"let event of news\">\r\n        <div class=\"col\">\r\n          <div class=\"card col bg-ksk mb-1 hoverable\" *ngIf=\"event.newsType == 'club'\" routerLink=\"/club/nieuws\" fragment=\"event{{event.nieuws_id}}\">\r\n            <div class=\"card-body \">\r\n              <h4 class=\"card-title text-dark\">{{event.titel}}</h4>\r\n              <h6 class=\"card-subtitle mb-2 text-muted text-left\">{{event.newsType}}nieuws<span class=\"float-right\">{{event.datum | amDateFormat:\"DD/MM/YYYY\"}}</span></h6>\r\n              <div [froalaView]=\"event.inhoud\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"card col bg-ksk mb-1 hoverable\" *ngIf=\"event.newsType == 'jeugd'\" routerLink=\"/jeugd/nieuws\" fragment=\"event{{event.nieuws_id}}\">\r\n            <div class=\"card-body \">\r\n              <h4 class=\"card-title text-dark\">{{event.titel}}</h4>\r\n              <h6 class=\"card-subtitle mb-2 text-muted text-left\">{{event.newsType}}nieuws<span class=\"float-right\">{{event.datum | amDateFormat:\"DD/MM/YYYY\"}}</span></h6>\r\n              <div [froalaView]=\"event.inhoud\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col\">\r\n          <p>\r\n            <a class=\"float-right rounded-circleSmall\" pageScroll [pageScrollEasing]=\"myEasing\" href=\"#topNav\"><i class=\"fa fa-angle-double-up\" aria-hidden=\"true\"></i></a>\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-12 col-xl-6 border-top menu-item p-3 text-center mx-auto\">\r\n      <div class=\"row\" *ngIf=\"lastGame\">\r\n        <div class=\"col\">\r\n          <h2 class=\"text-center text-primary\"><a pageScroll [pageScrollEasing]=\"myEasing\" href=\"#lastGameSection\">Laatste wedstrijdverslag</a></h2>\r\n          <h4 *ngIf=\"lastGame.thuisSpelend\" class=\"text-center text-primary clearfix mb-2\">\r\n            KSK - {{lastGame.tegenstander}} <small class=\"text-muted\">{{lastGame.doelpuntenKSK}} - {{lastGame.doelpuntenTegenstander}}</small>\r\n          </h4>\r\n          <h4 *ngIf=\"!lastGame.thuisSpelend\" class=\"text-center text-primary clearfix\">\r\n            {{lastGame.tegenstander}} - KSK <small class=\"text-muted\">{{lastGame.doelpuntenTegenstander}} - {{lastGame.doelpuntenKSK}}</small>\r\n          </h4>\r\n          <p>\r\n            <a class=\"float-right rounded-circleSmall\" pageScroll [pageScrollEasing]=\"myEasing\" href=\"#topNav\"><i class=\"fa fa-angle-double-up\" aria-hidden=\"true\"></i></a>\r\n          </p>\r\n        </div>\r\n      </div>\r\n      <hr />\r\n      <div class=\"row\">\r\n        <div class=\"col\">\r\n          <h2 class=\"text-primary\" id=\"nextGameSection\">Volgende speeldag</h2>\r\n          <div class=\"frameDiv mx-auto mb-4\">\r\n            <iframe class=\"d-block mx-auto frameCenter\" frameborder=\"0\" allowfullscreen src=\"http://www.voetbalkrant.com/service/noscript.php?id=1190\"></iframe>\r\n          </div>\r\n          <p>\r\n            <a class=\"float-right rounded-circleSmall\" pageScroll [pageScrollEasing]=\"myEasing\" href=\"#topNav\"><i class=\"fa fa-angle-double-up\" aria-hidden=\"true\"></i></a>\r\n          </p>\r\n        </div>\r\n      </div>\r\n      <hr />\r\n      <div class=\"row\">\r\n        <div class=\"col\">\r\n          <h2 class=\"text-center text-primary\" id=\"tableSection\">Stand</h2>\r\n          <div class=\"frameDivs mx-auto mb-4\">\r\n            <iframe class=\"d-block mx-auto frameCenters\" frameborder=\"0\" allowfullscreen src=\"http://www.voetbalkrant.com/service/noscript.php?id=1191\"></iframe>\r\n          </div>\r\n          <p>\r\n            <a class=\"float-right rounded-circleSmall\" pageScroll [pageScrollEasing]=\"myEasing\" href=\"#topNav\"><i class=\"fa fa-angle-double-up\" aria-hidden=\"true\"></i></a>\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row justify-content-center border-row featurette  p-3\" *ngIf=\"lastGame\">\r\n    <div class=\"col-12 col-xl-9 border border-dark border-content p-3 bg-ksk\"  *ngIf=\"lastGame\">\r\n      <h2 *ngIf=\"lastGame.thuisSpelend\" class=\"text-center text-primary clearfix mb-2\" id=\"lastGameSection\">\r\n          KSK - {{lastGame.tegenstander}} <small class=\"text-muted float-right\">{{lastGame.datum | amDateFormat:'DD/MM/YYYY'}}</small>\r\n        </h2>\r\n      <h2 *ngIf=\"!lastGame.thuisSpelend\" class=\"text-center text-primary clearfix\" id=\"lastGameSection\">\r\n          {{lastGame.tegenstander}} - KSK <small class=\"text-muted float-right\">{{lastGame.datum | amDateFormat:'DD/MM/YYYY'}}</small>\r\n        </h2>\r\n      <h4 *ngIf=\"!lastGame.thuisSpelend\" class=\"text-muted text-center\">{{lastGame.doelpuntenTegenstander}} - {{lastGame.doelpuntenKSK}}</h4>\r\n      <h4 *ngIf=\"lastGame.thuisSpelend\" class=\"text-muted text-center\">{{lastGame.doelpuntenKSK}} - {{lastGame.doelpuntenTegenstander}}</h4>\r\n      <div [froalaView]=\"lastGame.verslag\"></div>\r\n      <p>\r\n        <a class=\"mt-4 float-right\" routerLink=\"/senioren/aploeg\">Meer verslagen</a>\r\n      </p>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <p>\r\n        <a class=\"float-right rounded-circleSmall\" pageScroll [pageScrollEasing]=\"myEasing\" href=\"#topNav\"><i class=\"fa fa-angle-double-up\" aria-hidden=\"true\"></i></a>\r\n      </p>\r\n    </div>\r\n  </div>\r\n  <div class=\"row border-row featurette\">\r\n    <div class=\"col-12 col-md-6 col-xl-4 menu-item p-4 text-center contentSection hoverable\" >\r\n      <div class=\"rounded-circleMenu\" routerLink=\"/jeugd\"><i class=\"fa fa-child\" aria-hidden=\"true\"></i></div>\r\n      <h2 class=\"text-center text-dark\" routerLink=\"/jeugd\">Jeugd</h2>\r\n      <h4 class=\"text-muted\" routerLink=\"/jeugd\">Jeugd is de toekomst</h4>\r\n      <p class=\"text-primary text-justify\">KSK Klinge hecht veel belang aan een <strong>kwalitatieve</strong> jeugdopleiding waar <strong>plezier</strong> centraal staat. Dit uit zich in de jaarlijkse toename van jeugdspelers.</p>\r\n      <button class=\"btn btn-primary btn-block text-center hoverable\" routerLink=\"/jeugd\">Bekijk al onze jeugdploegen</button>\r\n      <a class=\"btn btn-secondary btn-block text-center hoverable d-block\" href=\"mailto:secretariaatkskklinge@telenet.be\">Jeugdspeler inschrijven</a>\r\n      <p>\r\n        <a class=\"float-right rounded-circleSmall mt-3\" pageScroll [pageScrollEasing]=\"myEasing\" href=\"#topNav\"><i class=\"fa fa-angle-double-up\" aria-hidden=\"true\"></i></a>\r\n      </p>\r\n    </div>\r\n    <div class=\"col-12 col-md-6 col-xl-4 menu-item p-4 text-center contentSection hoverable\" (mouseenter)=\"setImage(true)\" (mouseleave)=\"setImage(false)\">\r\n      <img src=\"assets/img/logo2.png\" class=\"img-fluid rounded-circle logoPicture\" [ngClass]=\"{ 'bg-ksk': !hovered, 'bg-secundary': hovered  }\" routerLink=\"/club/info\"/>\r\n      <h2 class=\"text-center text-dark\" routerLink=\"/club/info\">KSK Klinge</h2>\r\n      <h4 class=\"text-muted\" routerLink=\"/club/info\">Club</h4>\r\n      <p class=\"text-primary text-justify\">Heb je vragen over het reilen en zeilen van de club? Wil je graag de club een handje toesteken als <strong>vrijwilliger</strong>? Op zoek naar <strong>belangrijke documenten</strong>?</p>\r\n      <button class=\"btn btn-primary btn-block text-center hoverable\" routerLink=\"/club/info\">Vind alle info over KSK Klinge</button>\r\n      <a class=\"btn btn-secondary btn-block text-center hoverable d-block\" href=\"mailto:secretariaatkskklinge@telenet.be\">KSK Klinge contacteren</a>\r\n      <p>\r\n        <a class=\"float-right rounded-circleSmall mt-3\" pageScroll [pageScrollEasing]=\"myEasing\" href=\"#topNav\"><i class=\"fa fa-angle-double-up\" aria-hidden=\"true\"></i></a>\r\n      </p>\r\n    </div>\r\n    <div class=\"col-12 col-md-6 col-xl-4 menu-item p-4 text-center contentSection hoverable\" >\r\n      <div class=\"rounded-circleMenu\" routerLink=\"/sponsors\"><i class=\"fa fa-flag-checkered\" aria-hidden=\"true\"></i></div>\r\n      <h2 class=\"text-center text-dark\" routerLink=\"/sponsors\" id=\"sponsorSection\">Sponsors</h2>\r\n      <h4 class=\"text-muted\" routerLink=\"/sponsors\">De basis van een gezonde club</h4>\r\n      <p class=\"text-primary text-justify\">Als een stabiele club met wekelijks tal van bezoekers is KSK Klinge een <strong>ideaal uithangbord</strong> voor lokale <strong>zelfstandigen</strong> en <strong>bedrijven</strong> in de buurt. </p>\r\n      <button class=\"btn btn-primary btn-block text-center hoverable\" routerLink=\"/sponsors\">Bekijk al onze sponsors</button>\r\n      <a class=\"btn btn-secondary btn-block text-center hoverable d-block\" href=\"mailto:secretariaatkskklinge@telenet.be\">Interesse om te sponsoren</a>\r\n      <p>\r\n        <a class=\"float-right rounded-circleSmall mt-3\" pageScroll [pageScrollEasing]=\"myEasing\" href=\"#topNav\"><i class=\"fa fa-angle-double-up\" aria-hidden=\"true\"></i></a>\r\n      </p>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".frameResp {\n  position: relative;\n  height: 0;\n  overflow: hidden;\n  padding-bottom: 56.25%; }\n\n.frameResp iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_nieuws_nieuws_service__ = __webpack_require__("../../../../../src/app/api/nieuws/nieuws.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_wedstrijden_wedstrijd_service__ = __webpack_require__("../../../../../src/app/api/wedstrijden/wedstrijd.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = /** @class */ (function () {
    function HomeComponent(eventSvc, gameSvc, router) {
        this.eventSvc = eventSvc;
        this.gameSvc = gameSvc;
        this.router = router;
        this.slide = 1;
        this.myEasing = {
            ease: function (t, b, c, d) {
                // easeInOutExpo easing
                t /= d / 2;
                // tslint:disable-next-line:curly
                // tslint:disable-next-line:indent
                // tslint:disable-next-line:curly
                if (t < 1)
                    return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
                // tslint:disable-next-line:indent
                t -= 2;
                return c / 2 * (Math.sqrt(1 - t * t) + 1) + b;
            }
        };
    }
    HomeComponent.prototype.loadEvents = function () {
        var _this = this;
        this.eventSvc.getUpcomingEvents().subscribe(function (ev) {
            console.log(ev);
            _this.events = ev;
        });
    };
    HomeComponent.prototype.loadLastGame = function () {
        var _this = this;
        this.gameSvc.getLastGame().subscribe(function (game) {
            console.log(game);
            _this.lastGame = game;
        });
    };
    HomeComponent.prototype.loadNews = function () {
        var _this = this;
        this.eventSvc.getLatestNews().subscribe(function (news) {
            _this.news = news;
        });
    };
    HomeComponent.prototype.setImage = function (status) {
        this.hovered = status;
    };
    HomeComponent.prototype.ngOnInit = function () {
        this.loadEvents();
        this.loadLastGame();
        this.loadNews();
        this.router.events.subscribe(function (evt) {
            console.log("top");
            if (!(evt instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* NavigationEnd */])) {
                return;
            }
            window.scrollTo(0, 0);
        });
        this.hovered = false;
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__api_nieuws_nieuws_service__["a" /* NieuwsService */], __WEBPACK_IMPORTED_MODULE_3__api_wedstrijden_wedstrijd_service__["a" /* WedstrijdService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* Router */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/jeugd/jeugd-nieuws/jeugd-nieuws.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\" jumbotron bg-accent mt-4\">\r\n  <h1 class=\"display-4 text-primary\">Jeugdnieuws</h1>\r\n\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col\">\r\n    <ul class=\"list-group list-group-flush\">\r\n      <li *ngFor=\"let event of events; let even = even; let odd = odd\" class=\"list-group-item lead text-primary hoverable\" id=\"event{{event.nieuws_id}}\" [ngClass]=\"{'bg-ksk': even, 'bg-accent': odd}\">\r\n        <h3 class=\"text-primary\" (click)=showContent(event.nieuws_id)>{{event.titel}} <small class=\"float-right text-muted\">{{event.datum | amDateFormat:\"DD/MM/YYYY\"}}</small></h3>\r\n        <div *ngIf=\"showEventDetail(event.nieuws_id)\">\r\n          <div [froalaView]=\"event.inhoud\"></div>\r\n        </div>\r\n\r\n        <p class=\"text-muted float-right lead\" *ngIf=\"!showEventDetail(event.nieuws_id)\" (click)=showContent(event.nieuws_id)>\r\n          <i class=\"fa fa-plus-square\" aria-hidden=\"true\"></i> Meer info\r\n        </p>\r\n        <p class=\"text-muted float-right lead border-bottom\" *ngIf=\"showEventDetail(event.nieuws_id)\" (click)=showContent(event.nieuws_id)>\r\n          <i class=\"fa fa-minus-square\" aria-hidden=\"true\"></i> Minder info\r\n        </p>\r\n      </li>\r\n\r\n    </ul>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/jeugd/jeugd-nieuws/jeugd-nieuws.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/jeugd/jeugd-nieuws/jeugd-nieuws.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JeugdNieuwsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_nieuws_nieuws_service__ = __webpack_require__("../../../../../src/app/api/nieuws/nieuws.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var JeugdNieuwsComponent = /** @class */ (function () {
    function JeugdNieuwsComponent(newsSvc, router, route) {
        this.newsSvc = newsSvc;
        this.router = router;
        this.route = route;
        this.fragment = "";
    }
    JeugdNieuwsComponent.prototype.addToGoogleCalendar = function (event) {
        var url;
        var d;
        d = __WEBPACK_IMPORTED_MODULE_3_moment__(event.eventDate).format("YYYYMMDDTHHmmss");
        url = "https://www.google.com/calendar/render?action=TEMPLATE&text=" + event.titel + "&dates=" + d + "Z/" + d + "Z&details=Evenement+bij+KSK+Klinge&location=Buitenstraat+9,+9170+De+Klinge&sf=true&output=xml";
        window.open(url, '_blank' // <- This is what makes it open in a new window.
        );
    };
    JeugdNieuwsComponent.prototype.loadJeugdNieuws = function () {
        var _this = this;
        this.newsSvc.getNewsYouth().subscribe(function (ev) {
            _this.events = ev;
        });
    };
    JeugdNieuwsComponent.prototype.showEventDetail = function (id) {
        if (id == this.showID) {
            return true;
        }
        else {
            return false;
        }
    };
    JeugdNieuwsComponent.prototype.showContent = function (id) {
        if (this.showID == id) {
            this.showID = 0;
        }
        else {
            this.showID = id;
        }
    };
    JeugdNieuwsComponent.prototype.ngOnInit = function () {
        this.loadJeugdNieuws();
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* NavigationEnd */])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    };
    JeugdNieuwsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-jeugd-nieuws',
            template: __webpack_require__("../../../../../src/app/jeugd/jeugd-nieuws/jeugd-nieuws.component.html"),
            styles: [__webpack_require__("../../../../../src/app/jeugd/jeugd-nieuws/jeugd-nieuws.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_nieuws_nieuws_service__["a" /* NieuwsService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], JeugdNieuwsComponent);
    return JeugdNieuwsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/jeugd/jeugd.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-tabs\">\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/jeugd/u6\">U6</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\"  routerLinkActive=\"active\" routerLink=\"/jeugd/u7\">U7</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/jeugd/u8\">U8</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\"  routerLinkActive=\"active\" routerLink=\"/jeugd/u9\">U9</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/jeugd/u11\">U11</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\"  routerLinkActive=\"active\" routerLink=\"/jeugd/u13\">U13</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/jeugd/u15\">U15</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\"  routerLinkActive=\"active\" routerLink=\"/jeugd/u17\">U17</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\"  routerLinkActive=\"active\" routerLink=\"/jeugd/nieuws\">Nieuws</a>\n  </li>\n\n  <li class=\"nav-item ml-auto\">\n    <a class=\"float-right nav-link\" routerLinkActive=\"active\" routerLink=\"/jeugd\">Jeugd</a>\n  </li>\n</ul>\n\n<div class=\"row\" *ngIf=\"route.children.length === 0\">\n  <div class=\"col-12\">\n    <div class=\" jumbotron bg-accent mt-4\">\n    <h1 class=\"display-4 text-primary\">Jeugd KSK Klinge</h1>\n    <p class=\"lead text-primary\">De jeugdwerking is voor KSK Klinge zeer belangrijk, het bepaalt immers de toekomst van de club.  </p>\n    <hr class=\"my-4\">\n    <p class=text-dark>KSK Klinge tracht om een goede jeugdvorming te verzorgen waarbij plezier centraal staat. Hierbij vindt KSK Klinge dat de club toegankelijk moet zijn voor iedereen. Hoewel het aantal jeugdspelers de laatste jaren een serieuze sprong heeft gemaakt, verwelkomen wij steeds graag nieuwe leden.</p>\n    <p class=\"lead\">\n      <a class=\"btn btn-primary\" href=\"mailto:kurt_susy@telenet.be\" role=\"button\">Inschrijven</a>\n    </p>\n    </div>\n    <div class=\"row align-items-center  justify-content-center mt-5\">\n        <div class=\"col-md-4 col-lg-3 col-xl-2 \" ><a class=\"btn btn-warning btn-lg btn-block py-md-5 py-4 m-1 border border-primary\"  routerLink=\"/jeugd/u6\">U6</a></div>\n        <div class=\"col-md-4 col-lg-3 col-xl-2 \" ><a class=\"btn btn-primary btn-lg btn-block py-md-5 py-4 m-1 border border-warning\" routerLink=\"/jeugd/u7\">U7</a></div>\n        <div class=\"col-md-4 col-lg-3 col-xl-2 \" ><a class=\"btn btn-warning btn-lg btn-block py-md-5 py-4 m-1 border border-primary\" routerLink=\"/jeugd/u8\">U8</a></div>\n        <div class=\"col-md-4 col-lg-3 col-xl-2 \" ><a class=\"btn btn-primary btn-lg btn-block py-md-5 py-4 m-1 border border-warning\" routerLink=\"/jeugd/u9\">U9</a></div>\n        <div class=\"col-md-4 col-lg-3 col-xl-2 \" ><a class=\"btn btn-warning btn-lg btn-block py-md-5 py-4 m-1 border border-primary\"  routerLink=\"/jeugd/u11\">U11</a></div>\n        <div class=\"col-md-4 col-lg-3 col-xl-2 \" ><a class=\"btn btn-primary btn-lg btn-block py-md-5 py-4 m-1 border border-warning\" routerLink=\"/jeugd/u13\">U13</a></div>\n        <div class=\"col-md-4 col-lg-3 col-xl-2 \" ><a class=\"btn btn-warning btn-lg btn-block py-md-5 py-4 m-1 border border-primary\" routerLink=\"/jeugd/u15\">U15</a></div>\n        <div class=\"col-md-4 col-lg-3 col-xl-2 \" ><a class=\"btn btn-primary btn-lg btn-block py-md-5 py-4 m-1 border border-warning\" routerLink=\"/jeugd/u17\">U17</a></div>\n        <div class=\"col-md-4 col-lg-3 col-xl-2 \" ><a class=\"btn btn-warning btn-lg btn-block py-md-5 py-4 m-1 border border-primary\" routerLink=\"/jeugd/nieuws\">Nieuws</a></div>\n\n\n    </div>\n  </div>\n\n\n</div>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/jeugd/jeugd.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/jeugd/jeugd.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JeugdComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var JeugdComponent = /** @class */ (function () {
    function JeugdComponent(r) {
        this.r = r;
        this.route = r;
    }
    JeugdComponent.prototype.ngOnInit = function () {
    };
    JeugdComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-jeugd',
            template: __webpack_require__("../../../../../src/app/jeugd/jeugd.component.html"),
            styles: [__webpack_require__("../../../../../src/app/jeugd/jeugd.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], JeugdComponent);
    return JeugdComponent;
}());



/***/ }),

/***/ "../../../../../src/app/jeugd/u11/u11.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!ploeg\">\n  <h3 class=\"text-center text-dark\">{{teamName}}</h3>\n  <p class=\"lead mb-5 text-center text-primary\">\n    Voorlopig is er geen verdere info beschikbaar. KSK is volop bezig met de opbouw van de ploeg.\n  </p>\n</div>\n<div *ngIf=\"ploeg\">\n\n  <div class=\"row justify-content-center pt-4\">\n    <div class=\"col-12 col-lg-10 \">\n      <div class=\"border-info\">\n        <div class=\"row align-items-center\">\n          <div class=\"col-12 col-md-8 col-lg-12 col-xl-8 text-center justify-content-center align-self-center\">\n            <img *ngIf=\"ploeg.fotoUrl\" [src]=\"ploeg.fotoUrl\" alt=\"\" class=\"img-fluid rounded border border-primary\">\n            <h2 *ngIf=\"!ploeg.fotoUrl\" class=\"text-center\">Geen foto beschikbaar</h2>\n            <!-- notice the \"circle\" class -->\n          </div>\n          <div class=\"col-12 col-md-4 col-lg-12 col-xl-4\">\n\n            <ul class=\"list-group\">\n              <li class=\"list-group-item\"><strong>Trainer </strong><br />{{ploeg.trainer_1}}</li>\n              <li class=\"list-group-item\" *ngIf=\"ploeg.trainer_2 != ''\"><strong>Trainer </strong><br />{{ploeg.trainer_2}}</li>\n              <li class=\"list-group-item\"><strong>Trainingsdagen </strong><br />{{ploeg.trainingsdagen}} om {{ploeg.trainingsuur}}</li>\n            </ul>\n            <div class=\"card mt-3\" *ngIf=\"sponsor\">\n              <img class=\"card-img-top\" [src]=\"sponsor.fotoUrl\" alt=\"{{sponsor.naam}}\">\n              <div class=\"card-body\">\n                <h5 class=\"card-title text-primary text-center\">{{sponsor.naam}}</h5>\n                <h6 class=\"text-center\" *ngIf=\"sponsor.slogan == ''\"><small class=\"text-muted text-hide\" >Geen slogan</small></h6>\n                <h6 class=\"text-center\" *ngIf=\"sponsor.slogan != ''\"><small class=\"text-muted\" >{{sponsor.slogan}}</small></h6>\n                <div class=\"row\">\n                  <div class=\"col text-center\" *ngIf=\"sponsor.website != ''\">\n                      <a class=\"text-primary\" [href]=\"sponsor.website\"><i class=\"fa fa-globe\" aria-hidden=\"true\"></i></a>\n                  </div>\n                  <div class=\"col text-center\" *ngIf=\"sponsor.email\">\n                        <a class=\"text-primary\" [href]=\"'mailto:' + sponsor.email\"><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i></a>\n                  </div>\n                  <div class=\"col text-center\" *ngIf=\"sponsor.telnr\">\n                    <a class=\"text-primary\" [href]=\"'tel:'+ sponsor.telnr\"><i class=\"fa fa-phone\" aria-hidden=\"true\"></i></a>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row mt-4\">\n          <div class=\"col-12 col-xl-6 justify-content-center\" *ngIf=\"games.length > 0\">\n            <h3 class=\"display-4 text-primary text-center mb-3\">Wedstrijden</h3>\n            <ul  class=\"list-group\">\n              <li *ngFor=\"let wedstrijd of games; let even = even; let odd = odd\" width=\"100%\" [ngClass]=\"{'bg-accent': even, 'bg-ksk': odd}\" routerLink=\"/jeugd/u11\" fragment=\"gameSection\" class=\"list-group-item hoverable hoverItem\" (click)=\"viewMatchReport(wedstrijd)\">\n\n                    <p *ngIf=\"wedstrijd.thuisSpelend == 1\" class=\"text-dark lead\">KSK - {{wedstrijd.tegenstander}}<small class=\"float-right\">{{wedstrijd.datum | amDateFormat:\"DD/MM/YYYY\"}}</small></p>\n                    <h6 *ngIf=\"wedstrijd.thuisSpelend == 1\" class=\"text-muted\">{{wedstrijd.doelpuntenKSK}} - {{wedstrijd.doelpuntenTegenstander}}</h6>\n                    <p *ngIf=\"wedstrijd.thuisSpelend == 0\" class=\"text-dark lead\">{{wedstrijd.tegenstander}} - KSK<small class=\"float-right\">{{wedstrijd.datum | amDateFormat:\"DD/MM/YYYY\"}}</small></p>\n                    <h6 *ngIf=\"wedstrijd.thuisSpelend == 0\" class=\"text-muted\">{{wedstrijd.doelpuntenTegenstander}} - {{wedstrijd.doelpuntenKSK}}</h6>\n              </li>\n\n            </ul>\n          </div>\n          <div class=\"col-12 col-xl-6 justify-content-center\" *ngIf=\"spelers.length > 0\">\n            <h4 class=\"text-primary display-4 text-center mb-3\">Spelers</h4>\n            <ul  class=\"list-group  align-items-center\">\n              <li *ngFor=\"let speler of spelers\" style=\"width:100%\" (click)=\"showPlayerDetail(speler)\" class=\"hoverable list-group-item align-self-center\">\n                <div class=\"media\">\n                  <img class=\"mr-3 img-fluid rounded-circle\" width=\"65\" [src]=\"speler.fotoUrl\" alt=\"\">\n                  <div class=\"media-body align-self-center\">\n                    <h5 class=\"mt-0\">{{speler.voornaam}} {{speler.naam}}</h5>\n                  </div>\n                </div>\n              </li>\n\n            </ul>\n          </div>\n        </div>\n        <div class=\"row justify-content-center mt-3 border p-3 border-secondary rounded bg-ksk\" id=\"gameSection\" *ngIf=\"game\">\n          <div class=\"col-12\">\n            <p *ngIf=\"game.thuisSpelend == 1\" class=\"text-dark display-4 text-center\">KSK - {{game.tegenstander}}</p>\n            <h4 *ngIf=\"game.thuisSpelend == 1\" class=\"text-muted text-center\">{{game.doelpuntenKSK}} - {{game.doelpuntenTegenstander}}<small class=\"float-right\">{{game.datum | amDateFormat:\"DD/MM/YYYY\"}}</small></h4>\n            <p *ngIf=\"game.thuisSpelend == 0\" class=\"text-dark display-4 text-center\">{{game.tegenstander}} - KSK</p>\n            <h4 *ngIf=\"game.thuisSpelend == 0\" class=\"text-muted text-center\">{{game.doelpuntenTegenstander}} - {{game.doelpuntenKSK}}<small class=\"float-right\">{{game.datum | amDateFormat:\"DD/MM/YYYY\"}}</small></h4>\n            <div [froalaView]=\"game.verslag\"></div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/jeugd/u11/u11.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/jeugd/u11/u11.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return U11Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_ploegen_ploegen_service__ = __webpack_require__("../../../../../src/app/api/ploegen/ploegen.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_wedstrijden_wedstrijd_service__ = __webpack_require__("../../../../../src/app/api/wedstrijden/wedstrijd.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helpers_player_detail_player_detail_component__ = __webpack_require__("../../../../../src/app/helpers/player-detail/player-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__api_sponsor_sponsor_service__ = __webpack_require__("../../../../../src/app/api/sponsor/sponsor.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var U11Component = /** @class */ (function () {
    function U11Component(ploegSvc, gameSvc, r, modalService, sponsorSvc) {
        this.ploegSvc = ploegSvc;
        this.gameSvc = gameSvc;
        this.r = r;
        this.modalService = modalService;
        this.sponsorSvc = sponsorSvc;
        this.spelers = [];
        this.games = [];
        this.route = r;
    }
    U11Component.prototype.showPlayerDetail = function (sp) {
        var initialState = {
            player: sp
        };
        this.bsModalRef = this.modalService.show(__WEBPACK_IMPORTED_MODULE_5__helpers_player_detail_player_detail_component__["a" /* PlayerDetailComponent */], { initialState: initialState });
        this.bsModalRef.content.closeBtnName = 'Close';
        this.bsModalRef.content.player = sp;
    };
    U11Component.prototype.viewMatchReport = function (wedstrijd) {
        this.game = wedstrijd;
        this.route.fragment
            .subscribe(function (fragment) {
            if (fragment) {
                var element = document.getElementById(fragment);
                if (element) {
                    element.scrollIntoView();
                }
            }
        });
    };
    U11Component.prototype.isEven = function (n) {
        return n % 2 == 0;
    };
    U11Component.prototype.loadPloeg = function (naam) {
        var _this = this;
        this.ploegSvc.loadPloegByName(naam).subscribe(function (team) {
            _this.ploeg = team;
            if (_this.ploeg.trainingsuur) {
                _this.ploeg.trainingsuur = _this.ploeg.trainingsuur.substr(0, 5);
            }
            if (_this.ploeg) {
                _this.ploegSvc.getSpelersByTeam(_this.ploeg.ploeg_id).subscribe(function (players) {
                    _this.spelers = players;
                });
                _this.ploegSvc.getGamesByTeam(_this.ploeg.ploeg_id).subscribe(function (wedstrijden) {
                    _this.games = wedstrijden;
                });
                _this.sponsorSvc.getSponsor(_this.ploeg.sponsor_id).subscribe(function (sponsor) {
                    _this.sponsor = sponsor;
                });
            }
        });
    };
    U11Component.prototype.ngOnInit = function () {
        this.teamName = "U11";
        this.loadPloeg(this.teamName);
    };
    U11Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-u11',
            template: __webpack_require__("../../../../../src/app/jeugd/u11/u11.component.html"),
            styles: [__webpack_require__("../../../../../src/app/jeugd/u11/u11.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_ploegen_ploegen_service__["a" /* PloegenService */], __WEBPACK_IMPORTED_MODULE_2__api_wedstrijden_wedstrijd_service__["a" /* WedstrijdService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["a" /* BsModalService */], __WEBPACK_IMPORTED_MODULE_6__api_sponsor_sponsor_service__["a" /* SponsorService */]])
    ], U11Component);
    return U11Component;
}());



/***/ }),

/***/ "../../../../../src/app/jeugd/u13/u13.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!ploeg\">\n  <h3 class=\"text-center text-dark\">{{teamName}}</h3>\n  <p class=\"lead mb-5 text-center text-primary\">\n    Voorlopig is er geen verdere info beschikbaar. KSK is volop bezig met de opbouw van de ploeg.\n  </p>\n</div>\n<div *ngIf=\"ploeg\">\n\n  <div class=\"row justify-content-center pt-4\">\n    <div class=\"col-12 col-lg-10 \">\n      <div class=\"border-info\">\n        <div class=\"row align-items-center\">\n          <div class=\"col-12 col-md-8 col-lg-12 col-xl-8 text-center justify-content-center align-self-center\">\n            <img *ngIf=\"ploeg.fotoUrl\" [src]=\"ploeg.fotoUrl\" alt=\"\" class=\"img-fluid rounded border border-primary\">\n            <h2 *ngIf=\"!ploeg.fotoUrl\" class=\"text-center\">Geen foto beschikbaar</h2>\n            <!-- notice the \"circle\" class -->\n          </div>\n          <div class=\"col-12 col-md-4 col-lg-12 col-xl-4\">\n\n            <ul class=\"list-group\">\n              <li class=\"list-group-item\"><strong>Trainer </strong><br />{{ploeg.trainer_1}}</li>\n              <li class=\"list-group-item\" *ngIf=\"ploeg.trainer_2 != ''\"><strong>Trainer </strong><br />{{ploeg.trainer_2}}</li>\n              <li class=\"list-group-item\"><strong>Trainingsdagen </strong><br />{{ploeg.trainingsdagen}} om {{ploeg.trainingsuur}}</li>\n            </ul>\n            <div class=\"card mt-3\" *ngIf=\"sponsor\">\n              <img class=\"card-img-top\" [src]=\"sponsor.fotoUrl\" alt=\"{{sponsor.naam}}\">\n              <div class=\"card-body\">\n                <h5 class=\"card-title text-primary text-center\">{{sponsor.naam}}</h5>\n                <h6 class=\"text-center\" *ngIf=\"sponsor.slogan == ''\"><small class=\"text-muted text-hide\" >Geen slogan</small></h6>\n                <h6 class=\"text-center\" *ngIf=\"sponsor.slogan != ''\"><small class=\"text-muted\" >{{sponsor.slogan}}</small></h6>\n                <div class=\"row\">\n                  <div class=\"col text-center\" *ngIf=\"sponsor.website != ''\">\n                      <a class=\"text-primary\" [href]=\"sponsor.website\"><i class=\"fa fa-globe\" aria-hidden=\"true\"></i></a>\n                  </div>\n                  <div class=\"col text-center\" *ngIf=\"sponsor.email\">\n                        <a class=\"text-primary\" [href]=\"'mailto:' + sponsor.email\"><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i></a>\n                  </div>\n                  <div class=\"col text-center\" *ngIf=\"sponsor.telnr\">\n                    <a class=\"text-primary\" [href]=\"'tel:'+ sponsor.telnr\"><i class=\"fa fa-phone\" aria-hidden=\"true\"></i></a>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row mt-4\">\n          <div class=\"col-12 col-xl-6 justify-content-center\" *ngIf=\"games.length > 0\">\n            <h3 class=\"display-4 text-primary text-center mb-3\">Wedstrijden</h3>\n            <ul  class=\"list-group\">\n              <li *ngFor=\"let wedstrijd of games; let even = even; let odd = odd\" width=\"100%\" [ngClass]=\"{'bg-accent': even, 'bg-ksk': odd}\" routerLink=\"/jeugd/u13\" fragment=\"gameSection\" class=\"list-group-item hoverable hoverItem\" (click)=\"viewMatchReport(wedstrijd)\">\n\n                    <p *ngIf=\"wedstrijd.thuisSpelend == 1\" class=\"text-dark lead\">KSK - {{wedstrijd.tegenstander}}<small class=\"float-right\">{{wedstrijd.datum | amDateFormat:\"DD/MM/YYYY\"}}</small></p>\n                    <h6 *ngIf=\"wedstrijd.thuisSpelend == 1\" class=\"text-muted\">{{wedstrijd.doelpuntenKSK}} - {{wedstrijd.doelpuntenTegenstander}}</h6>\n                    <p *ngIf=\"wedstrijd.thuisSpelend == 0\" class=\"text-dark lead\">{{wedstrijd.tegenstander}} - KSK<small class=\"float-right\">{{wedstrijd.datum | amDateFormat:\"DD/MM/YYYY\"}}</small></p>\n                    <h6 *ngIf=\"wedstrijd.thuisSpelend == 0\" class=\"text-muted\">{{wedstrijd.doelpuntenTegenstander}} - {{wedstrijd.doelpuntenKSK}}</h6>\n              </li>\n\n            </ul>\n          </div>\n          <div class=\"col-12 col-xl-6 justify-content-center\" *ngIf=\"spelers.length > 0\">\n            <h4 class=\"text-primary display-4 text-center mb-3\">Spelers</h4>\n            <ul  class=\"list-group  align-items-center\">\n              <li *ngFor=\"let speler of spelers\" style=\"width:100%\" (click)=\"showPlayerDetail(speler)\" class=\"hoverable list-group-item align-self-center\">\n                <div class=\"media\">\n                  <img class=\"mr-3 img-fluid rounded-circle\" width=\"65\" [src]=\"speler.fotoUrl\" alt=\"\">\n                  <div class=\"media-body align-self-center\">\n                    <h5 class=\"mt-0\">{{speler.voornaam}} {{speler.naam}}</h5>\n                  </div>\n                </div>\n              </li>\n\n            </ul>\n          </div>\n        </div>\n        <div class=\"row justify-content-center mt-3 border p-3 border-secondary rounded bg-ksk\" id=\"gameSection\" *ngIf=\"game\">\n          <div class=\"col-12\">\n            <p *ngIf=\"game.thuisSpelend == 1\" class=\"text-dark display-4 text-center\">KSK - {{game.tegenstander}}</p>\n            <h4 *ngIf=\"game.thuisSpelend == 1\" class=\"text-muted text-center\">{{game.doelpuntenKSK}} - {{game.doelpuntenTegenstander}}<small class=\"float-right\">{{game.datum | amDateFormat:\"DD/MM/YYYY\"}}</small></h4>\n            <p *ngIf=\"game.thuisSpelend == 0\" class=\"text-dark display-4 text-center\">{{game.tegenstander}} - KSK</p>\n            <h4 *ngIf=\"game.thuisSpelend == 0\" class=\"text-muted text-center\">{{game.doelpuntenTegenstander}} - {{game.doelpuntenKSK}}<small class=\"float-right\">{{game.datum | amDateFormat:\"DD/MM/YYYY\"}}</small></h4>\n            <div [froalaView]=\"game.verslag\"></div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/jeugd/u13/u13.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/jeugd/u13/u13.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return U13Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_ploegen_ploegen_service__ = __webpack_require__("../../../../../src/app/api/ploegen/ploegen.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_wedstrijden_wedstrijd_service__ = __webpack_require__("../../../../../src/app/api/wedstrijden/wedstrijd.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helpers_player_detail_player_detail_component__ = __webpack_require__("../../../../../src/app/helpers/player-detail/player-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__api_sponsor_sponsor_service__ = __webpack_require__("../../../../../src/app/api/sponsor/sponsor.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var U13Component = /** @class */ (function () {
    function U13Component(ploegSvc, gameSvc, r, modalService, sponsorSvc) {
        this.ploegSvc = ploegSvc;
        this.gameSvc = gameSvc;
        this.r = r;
        this.modalService = modalService;
        this.sponsorSvc = sponsorSvc;
        this.spelers = [];
        this.games = [];
        this.route = r;
    }
    U13Component.prototype.showPlayerDetail = function (sp) {
        var initialState = {
            player: sp
        };
        this.bsModalRef = this.modalService.show(__WEBPACK_IMPORTED_MODULE_5__helpers_player_detail_player_detail_component__["a" /* PlayerDetailComponent */], { initialState: initialState });
        this.bsModalRef.content.closeBtnName = 'Close';
        this.bsModalRef.content.player = sp;
    };
    U13Component.prototype.viewMatchReport = function (wedstrijd) {
        this.game = wedstrijd;
        this.route.fragment
            .subscribe(function (fragment) {
            if (fragment) {
                var element = document.getElementById(fragment);
                if (element) {
                    element.scrollIntoView();
                }
            }
        });
    };
    U13Component.prototype.isEven = function (n) {
        return n % 2 == 0;
    };
    U13Component.prototype.loadPloeg = function (naam) {
        var _this = this;
        this.ploegSvc.loadPloegByName(naam).subscribe(function (team) {
            _this.ploeg = team;
            if (_this.ploeg.trainingsuur) {
                _this.ploeg.trainingsuur = _this.ploeg.trainingsuur.substr(0, 5);
            }
            if (_this.ploeg) {
                _this.ploegSvc.getSpelersByTeam(_this.ploeg.ploeg_id).subscribe(function (players) {
                    _this.spelers = players;
                });
                _this.ploegSvc.getGamesByTeam(_this.ploeg.ploeg_id).subscribe(function (wedstrijden) {
                    _this.games = wedstrijden;
                });
                _this.sponsorSvc.getSponsor(_this.ploeg.sponsor_id).subscribe(function (sponsor) {
                    _this.sponsor = sponsor;
                });
            }
        });
    };
    U13Component.prototype.ngOnInit = function () {
        this.teamName = "U13";
        this.loadPloeg(this.teamName);
    };
    U13Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-u13',
            template: __webpack_require__("../../../../../src/app/jeugd/u13/u13.component.html"),
            styles: [__webpack_require__("../../../../../src/app/jeugd/u13/u13.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_ploegen_ploegen_service__["a" /* PloegenService */], __WEBPACK_IMPORTED_MODULE_2__api_wedstrijden_wedstrijd_service__["a" /* WedstrijdService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["a" /* BsModalService */], __WEBPACK_IMPORTED_MODULE_6__api_sponsor_sponsor_service__["a" /* SponsorService */]])
    ], U13Component);
    return U13Component;
}());



/***/ }),

/***/ "../../../../../src/app/jeugd/u15/u15.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!ploeg\">\n  <h3 class=\"text-center text-dark\">{{teamName}}</h3>\n  <p class=\"lead mb-5 text-center text-primary\">\n    Voorlopig is er geen verdere info beschikbaar. KSK is volop bezig met de opbouw van de ploeg.\n  </p>\n</div>\n<div *ngIf=\"ploeg\">\n\n  <div class=\"row justify-content-center pt-4\">\n    <div class=\"col-12 col-lg-10 \">\n      <div class=\"border-info\">\n        <div class=\"row align-items-center\">\n          <div class=\"col-12 col-md-8 col-lg-12 col-xl-8 text-center justify-content-center align-self-center\">\n            <img *ngIf=\"ploeg.fotoUrl\" [src]=\"ploeg.fotoUrl\" alt=\"\" class=\"img-fluid rounded border border-primary\">\n            <h2 *ngIf=\"!ploeg.fotoUrl\" class=\"text-center\">Geen foto beschikbaar</h2>\n            <!-- notice the \"circle\" class -->\n          </div>\n          <div class=\"col-12 col-md-4 col-lg-12 col-xl-4\">\n\n            <ul class=\"list-group\">\n              <li class=\"list-group-item\"><strong>Trainer </strong><br />{{ploeg.trainer_1}}</li>\n              <li class=\"list-group-item\" *ngIf=\"ploeg.trainer_2 != ''\"><strong>Trainer </strong><br />{{ploeg.trainer_2}}</li>\n              <li class=\"list-group-item\"><strong>Trainingsdagen </strong><br />{{ploeg.trainingsdagen}} om {{ploeg.trainingsuur}}</li>\n            </ul>\n            <div class=\"card mt-3\" *ngIf=\"sponsor\">\n              <img class=\"card-img-top\" [src]=\"sponsor.fotoUrl\" alt=\"{{sponsor.naam}}\">\n              <div class=\"card-body\">\n                <h5 class=\"card-title text-primary text-center\">{{sponsor.naam}}</h5>\n                <h6 class=\"text-center\" *ngIf=\"sponsor.slogan == ''\"><small class=\"text-muted text-hide\" >Geen slogan</small></h6>\n                <h6 class=\"text-center\" *ngIf=\"sponsor.slogan != ''\"><small class=\"text-muted\" >{{sponsor.slogan}}</small></h6>\n                <div class=\"row\">\n                  <div class=\"col text-center\" *ngIf=\"sponsor.website != ''\">\n                      <a class=\"text-primary\" [href]=\"sponsor.website\"><i class=\"fa fa-globe\" aria-hidden=\"true\"></i></a>\n                  </div>\n                  <div class=\"col text-center\" *ngIf=\"sponsor.email\">\n                        <a class=\"text-primary\" [href]=\"'mailto:' + sponsor.email\"><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i></a>\n                  </div>\n                  <div class=\"col text-center\" *ngIf=\"sponsor.telnr\">\n                    <a class=\"text-primary\" [href]=\"'tel:'+ sponsor.telnr\"><i class=\"fa fa-phone\" aria-hidden=\"true\"></i></a>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row mt-4\">\n          <div class=\"col-12 col-xl-6 justify-content-center\" *ngIf=\"games.length > 0\">\n            <h3 class=\"display-4 text-primary text-center mb-3\">Wedstrijden</h3>\n            <ul  class=\"list-group\">\n              <li *ngFor=\"let wedstrijd of games; let even = even; let odd = odd\" width=\"100%\" [ngClass]=\"{'bg-accent': even, 'bg-ksk': odd}\" routerLink=\"/jeugd/u15\" fragment=\"gameSection\" class=\"list-group-item hoverable hoverItem\" (click)=\"viewMatchReport(wedstrijd)\">\n\n                    <p *ngIf=\"wedstrijd.thuisSpelend == 1\" class=\"text-dark lead\">KSK - {{wedstrijd.tegenstander}}<small class=\"float-right\">{{wedstrijd.datum | amDateFormat:\"DD/MM/YYYY\"}}</small></p>\n                    <h6 *ngIf=\"wedstrijd.thuisSpelend == 1\" class=\"text-muted\">{{wedstrijd.doelpuntenKSK}} - {{wedstrijd.doelpuntenTegenstander}}</h6>\n                    <p *ngIf=\"wedstrijd.thuisSpelend == 0\" class=\"text-dark lead\">{{wedstrijd.tegenstander}} - KSK<small class=\"float-right\">{{wedstrijd.datum | amDateFormat:\"DD/MM/YYYY\"}}</small></p>\n                    <h6 *ngIf=\"wedstrijd.thuisSpelend == 0\" class=\"text-muted\">{{wedstrijd.doelpuntenTegenstander}} - {{wedstrijd.doelpuntenKSK}}</h6>\n              </li>\n\n            </ul>\n          </div>\n          <div class=\"col-12 col-xl-6 justify-content-center\" *ngIf=\"spelers.length > 0\">\n            <h4 class=\"text-primary display-4 text-center mb-3\">Spelers</h4>\n            <ul  class=\"list-group  align-items-center\">\n              <li *ngFor=\"let speler of spelers\" style=\"width:100%\" (click)=\"showPlayerDetail(speler)\" class=\"hoverable list-group-item align-self-center\">\n                <div class=\"media\">\n                  <img class=\"mr-3 img-fluid rounded-circle\" width=\"65\" [src]=\"speler.fotoUrl\" alt=\"\">\n                  <div class=\"media-body align-self-center\">\n                    <h5 class=\"mt-0\">{{speler.voornaam}} {{speler.naam}}</h5>\n                  </div>\n                </div>\n              </li>\n\n            </ul>\n          </div>\n        </div>\n        <div class=\"row justify-content-center mt-3 border p-3 border-secondary rounded bg-ksk\" id=\"gameSection\" *ngIf=\"game\">\n          <div class=\"col-12\">\n            <p *ngIf=\"game.thuisSpelend == 1\" class=\"text-dark display-4 text-center\">KSK - {{game.tegenstander}}</p>\n            <h4 *ngIf=\"game.thuisSpelend == 1\" class=\"text-muted text-center\">{{game.doelpuntenKSK}} - {{game.doelpuntenTegenstander}}<small class=\"float-right\">{{game.datum | amDateFormat:\"DD/MM/YYYY\"}}</small></h4>\n            <p *ngIf=\"game.thuisSpelend == 0\" class=\"text-dark display-4 text-center\">{{game.tegenstander}} - KSK</p>\n            <h4 *ngIf=\"game.thuisSpelend == 0\" class=\"text-muted text-center\">{{game.doelpuntenTegenstander}} - {{game.doelpuntenKSK}}<small class=\"float-right\">{{game.datum | amDateFormat:\"DD/MM/YYYY\"}}</small></h4>\n            <div [froalaView]=\"game.verslag\"></div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/jeugd/u15/u15.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/jeugd/u15/u15.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return U15Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_ploegen_ploegen_service__ = __webpack_require__("../../../../../src/app/api/ploegen/ploegen.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_wedstrijden_wedstrijd_service__ = __webpack_require__("../../../../../src/app/api/wedstrijden/wedstrijd.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helpers_player_detail_player_detail_component__ = __webpack_require__("../../../../../src/app/helpers/player-detail/player-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__api_sponsor_sponsor_service__ = __webpack_require__("../../../../../src/app/api/sponsor/sponsor.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var U15Component = /** @class */ (function () {
    function U15Component(ploegSvc, gameSvc, r, modalService, sponsorSvc) {
        this.ploegSvc = ploegSvc;
        this.gameSvc = gameSvc;
        this.r = r;
        this.modalService = modalService;
        this.sponsorSvc = sponsorSvc;
        this.spelers = [];
        this.games = [];
        this.route = r;
    }
    U15Component.prototype.showPlayerDetail = function (sp) {
        var initialState = {
            player: sp
        };
        this.bsModalRef = this.modalService.show(__WEBPACK_IMPORTED_MODULE_5__helpers_player_detail_player_detail_component__["a" /* PlayerDetailComponent */], { initialState: initialState });
        this.bsModalRef.content.closeBtnName = 'Close';
        this.bsModalRef.content.player = sp;
    };
    U15Component.prototype.viewMatchReport = function (wedstrijd) {
        this.game = wedstrijd;
        this.route.fragment
            .subscribe(function (fragment) {
            if (fragment) {
                var element = document.getElementById(fragment);
                if (element) {
                    element.scrollIntoView();
                }
            }
        });
    };
    U15Component.prototype.isEven = function (n) {
        return n % 2 == 0;
    };
    U15Component.prototype.loadPloeg = function (naam) {
        var _this = this;
        this.ploegSvc.loadPloegByName(naam).subscribe(function (team) {
            _this.ploeg = team;
            if (_this.ploeg.trainingsuur) {
                _this.ploeg.trainingsuur = _this.ploeg.trainingsuur.substr(0, 5);
            }
            if (_this.ploeg) {
                _this.ploegSvc.getSpelersByTeam(_this.ploeg.ploeg_id).subscribe(function (players) {
                    _this.spelers = players;
                });
                _this.ploegSvc.getGamesByTeam(_this.ploeg.ploeg_id).subscribe(function (wedstrijden) {
                    _this.games = wedstrijden;
                });
                _this.sponsorSvc.getSponsor(_this.ploeg.sponsor_id).subscribe(function (sponsor) {
                    _this.sponsor = sponsor;
                });
            }
        });
    };
    U15Component.prototype.ngOnInit = function () {
        this.teamName = "U15";
        this.loadPloeg(this.teamName);
    };
    U15Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-u15',
            template: __webpack_require__("../../../../../src/app/jeugd/u15/u15.component.html"),
            styles: [__webpack_require__("../../../../../src/app/jeugd/u15/u15.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_ploegen_ploegen_service__["a" /* PloegenService */], __WEBPACK_IMPORTED_MODULE_2__api_wedstrijden_wedstrijd_service__["a" /* WedstrijdService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["a" /* BsModalService */], __WEBPACK_IMPORTED_MODULE_6__api_sponsor_sponsor_service__["a" /* SponsorService */]])
    ], U15Component);
    return U15Component;
}());



/***/ }),

/***/ "../../../../../src/app/jeugd/u17/u17.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!ploeg\">\n  <h3 class=\"text-center text-dark\">{{teamName}}</h3>\n  <p class=\"lead mb-5 text-center text-primary\">\n    Voorlopig is er geen verdere info beschikbaar. KSK is volop bezig met de opbouw van de ploeg.\n  </p>\n</div>\n<div *ngIf=\"ploeg\">\n\n  <div class=\"row justify-content-center pt-4\">\n    <div class=\"col-12 col-lg-10 \">\n      <div class=\"border-info\">\n        <div class=\"row align-items-center\">\n          <div class=\"col-12 col-md-8 col-lg-12 col-xl-8 text-center justify-content-center align-self-center\">\n            <img *ngIf=\"ploeg.fotoUrl\" [src]=\"ploeg.fotoUrl\" alt=\"\" class=\"img-fluid rounded border border-primary\">\n            <h2 *ngIf=\"!ploeg.fotoUrl\" class=\"text-center\">Geen foto beschikbaar</h2>\n            <!-- notice the \"circle\" class -->\n          </div>\n          <div class=\"col-12 col-md-4 col-lg-12 col-xl-4\">\n\n            <ul class=\"list-group\">\n              <li class=\"list-group-item\"><strong>Trainer </strong><br />{{ploeg.trainer_1}}</li>\n              <li class=\"list-group-item\" *ngIf=\"ploeg.trainer_2 != ''\"><strong>Trainer </strong><br />{{ploeg.trainer_2}}</li>\n              <li class=\"list-group-item\"><strong>Trainingsdagen </strong><br />{{ploeg.trainingsdagen}} om {{ploeg.trainingsuur}}</li>\n            </ul>\n            <div class=\"card mt-3\" *ngIf=\"sponsor\">\n              <img class=\"card-img-top\" [src]=\"sponsor.fotoUrl\" alt=\"{{sponsor.naam}}\">\n              <div class=\"card-body\">\n                <h5 class=\"card-title text-primary text-center\">{{sponsor.naam}}</h5>\n                <h6 class=\"text-center\" *ngIf=\"sponsor.slogan == ''\"><small class=\"text-muted text-hide\" >Geen slogan</small></h6>\n                <h6 class=\"text-center\" *ngIf=\"sponsor.slogan != ''\"><small class=\"text-muted\" >{{sponsor.slogan}}</small></h6>\n                <div class=\"row\">\n                  <div class=\"col text-center\" *ngIf=\"sponsor.website != ''\">\n                      <a class=\"text-primary\" [href]=\"sponsor.website\"><i class=\"fa fa-globe\" aria-hidden=\"true\"></i></a>\n                  </div>\n                  <div class=\"col text-center\" *ngIf=\"sponsor.email\">\n                        <a class=\"text-primary\" [href]=\"'mailto:' + sponsor.email\"><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i></a>\n                  </div>\n                  <div class=\"col text-center\" *ngIf=\"sponsor.telnr\">\n                    <a class=\"text-primary\" [href]=\"'tel:'+ sponsor.telnr\"><i class=\"fa fa-phone\" aria-hidden=\"true\"></i></a>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row mt-4\">\n          <div class=\"col-12 col-xl-6 justify-content-center\" *ngIf=\"games.length > 0\">\n            <h3 class=\"display-4 text-primary text-center mb-3\">Wedstrijden</h3>\n            <ul  class=\"list-group\">\n              <li *ngFor=\"let wedstrijd of games; let even = even; let odd = odd\" width=\"100%\" [ngClass]=\"{'bg-accent': even, 'bg-ksk': odd}\" routerLink=\"/jeugd/u17\" fragment=\"gameSection\" class=\"list-group-item hoverable hoverItem\" (click)=\"viewMatchReport(wedstrijd)\">\n\n                    <p *ngIf=\"wedstrijd.thuisSpelend == 1\" class=\"text-dark lead\">KSK - {{wedstrijd.tegenstander}}<small class=\"float-right\">{{wedstrijd.datum | amDateFormat:\"DD/MM/YYYY\"}}</small></p>\n                    <h6 *ngIf=\"wedstrijd.thuisSpelend == 1\" class=\"text-muted\">{{wedstrijd.doelpuntenKSK}} - {{wedstrijd.doelpuntenTegenstander}}</h6>\n                    <p *ngIf=\"wedstrijd.thuisSpelend == 0\" class=\"text-dark lead\">{{wedstrijd.tegenstander}} - KSK<small class=\"float-right\">{{wedstrijd.datum | amDateFormat:\"DD/MM/YYYY\"}}</small></p>\n                    <h6 *ngIf=\"wedstrijd.thuisSpelend == 0\" class=\"text-muted\">{{wedstrijd.doelpuntenTegenstander}} - {{wedstrijd.doelpuntenKSK}}</h6>\n              </li>\n\n            </ul>\n          </div>\n          <div class=\"col-12 col-xl-6 justify-content-center\" *ngIf=\"spelers.length > 0\">\n            <h4 class=\"text-primary display-4 text-center mb-3\">Spelers</h4>\n            <ul  class=\"list-group  align-items-center\">\n              <li *ngFor=\"let speler of spelers\" style=\"width:100%\" (click)=\"showPlayerDetail(speler)\" class=\"hoverable list-group-item align-self-center\">\n                <div class=\"media\">\n                  <img class=\"mr-3 img-fluid rounded-circle\" width=\"65\" [src]=\"speler.fotoUrl\" alt=\"\">\n                  <div class=\"media-body align-self-center\">\n                    <h5 class=\"mt-0\">{{speler.voornaam}} {{speler.naam}}</h5>\n                  </div>\n                </div>\n              </li>\n\n            </ul>\n          </div>\n        </div>\n        <div class=\"row justify-content-center mt-3 border p-3 border-secondary rounded bg-ksk\" id=\"gameSection\" *ngIf=\"game\">\n          <div class=\"col-12\">\n            <p *ngIf=\"game.thuisSpelend == 1\" class=\"text-dark display-4 text-center\">KSK - {{game.tegenstander}}</p>\n            <h4 *ngIf=\"game.thuisSpelend == 1\" class=\"text-muted text-center\">{{game.doelpuntenKSK}} - {{game.doelpuntenTegenstander}}<small class=\"float-right\">{{game.datum | amDateFormat:\"DD/MM/YYYY\"}}</small></h4>\n            <p *ngIf=\"game.thuisSpelend == 0\" class=\"text-dark display-4 text-center\">{{game.tegenstander}} - KSK</p>\n            <h4 *ngIf=\"game.thuisSpelend == 0\" class=\"text-muted text-center\">{{game.doelpuntenTegenstander}} - {{game.doelpuntenKSK}}<small class=\"float-right\">{{game.datum | amDateFormat:\"DD/MM/YYYY\"}}</small></h4>\n            <div [froalaView]=\"game.verslag\"></div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/jeugd/u17/u17.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/jeugd/u17/u17.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return U17Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_ploegen_ploegen_service__ = __webpack_require__("../../../../../src/app/api/ploegen/ploegen.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_wedstrijden_wedstrijd_service__ = __webpack_require__("../../../../../src/app/api/wedstrijden/wedstrijd.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helpers_player_detail_player_detail_component__ = __webpack_require__("../../../../../src/app/helpers/player-detail/player-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__api_sponsor_sponsor_service__ = __webpack_require__("../../../../../src/app/api/sponsor/sponsor.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var U17Component = /** @class */ (function () {
    function U17Component(ploegSvc, gameSvc, r, modalService, sponsorSvc) {
        this.ploegSvc = ploegSvc;
        this.gameSvc = gameSvc;
        this.r = r;
        this.modalService = modalService;
        this.sponsorSvc = sponsorSvc;
        this.spelers = [];
        this.games = [];
        this.route = r;
    }
    U17Component.prototype.showPlayerDetail = function (sp) {
        var initialState = {
            player: sp
        };
        this.bsModalRef = this.modalService.show(__WEBPACK_IMPORTED_MODULE_5__helpers_player_detail_player_detail_component__["a" /* PlayerDetailComponent */], { initialState: initialState });
        this.bsModalRef.content.closeBtnName = 'Close';
        this.bsModalRef.content.player = sp;
    };
    U17Component.prototype.viewMatchReport = function (wedstrijd) {
        this.game = wedstrijd;
        this.route.fragment
            .subscribe(function (fragment) {
            if (fragment) {
                var element = document.getElementById(fragment);
                if (element) {
                    element.scrollIntoView();
                }
            }
        });
    };
    U17Component.prototype.isEven = function (n) {
        return n % 2 == 0;
    };
    U17Component.prototype.loadPloeg = function (naam) {
        var _this = this;
        this.ploegSvc.loadPloegByName(naam).subscribe(function (team) {
            _this.ploeg = team;
            if (_this.ploeg.trainingsuur) {
                _this.ploeg.trainingsuur = _this.ploeg.trainingsuur.substr(0, 5);
            }
            if (_this.ploeg) {
                _this.ploegSvc.getSpelersByTeam(_this.ploeg.ploeg_id).subscribe(function (players) {
                    _this.spelers = players;
                });
                _this.ploegSvc.getGamesByTeam(_this.ploeg.ploeg_id).subscribe(function (wedstrijden) {
                    _this.games = wedstrijden;
                });
                _this.sponsorSvc.getSponsor(_this.ploeg.sponsor_id).subscribe(function (sponsor) {
                    _this.sponsor = sponsor;
                });
            }
        });
    };
    U17Component.prototype.ngOnInit = function () {
        this.teamName = "U17";
        this.loadPloeg(this.teamName);
    };
    U17Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-u17',
            template: __webpack_require__("../../../../../src/app/jeugd/u17/u17.component.html"),
            styles: [__webpack_require__("../../../../../src/app/jeugd/u17/u17.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_ploegen_ploegen_service__["a" /* PloegenService */], __WEBPACK_IMPORTED_MODULE_2__api_wedstrijden_wedstrijd_service__["a" /* WedstrijdService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["a" /* BsModalService */], __WEBPACK_IMPORTED_MODULE_6__api_sponsor_sponsor_service__["a" /* SponsorService */]])
    ], U17Component);
    return U17Component;
}());



/***/ }),

/***/ "../../../../../src/app/jeugd/u6/u6.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!ploeg\">\n  <h3 class=\"text-center text-dark\">U6</h3>\n  <p class=\"lead mb-5 text-center text-primary\">\n    Voorlopig is er geen verdere info beschikbaar. KSK is volop bezig met de opbouw van de ploeg.\n  </p>\n</div>\n<div *ngIf=\"ploeg\">\n\n  <div class=\"row justify-content-center pt-4\">\n    <div class=\"col-12 col-lg-10 \">\n      <div class=\"border-info\">\n        <div class=\"row align-items-center\">\n          <div class=\"col-12 col-md-8 col-lg-12 col-xl-8 text-center justify-content-center align-self-center\">\n            <img *ngIf=\"ploeg.fotoUrl\" [src]=\"ploeg.fotoUrl\" alt=\"\" class=\"img-fluid rounded border border-primary\">\n            <h2 *ngIf=\"!ploeg.fotoUrl\" class=\"text-center\">Geen foto beschikbaar</h2>\n            <!-- notice the \"circle\" class -->\n          </div>\n          <div class=\"col-12 col-md-4 col-lg-12 col-xl-4\">\n\n            <ul class=\"list-group\">\n              <li class=\"list-group-item\"><strong>Trainer </strong><br />{{ploeg.trainer_1}}</li>\n              <li class=\"list-group-item\" *ngIf=\"ploeg.trainer_2 != ''\"><strong>Hulptrainer </strong><br />{{ploeg.trainer_2}}</li>\n              <li class=\"list-group-item\"><strong>Trainingsdagen </strong><br />{{ploeg.trainingsdagen}} om {{ploeg.trainingsuur}}</li>\n            </ul>\n            <div class=\"card mt-3\" *ngIf=\"sponsor\">\n              <img class=\"card-img-top\" [src]=\"sponsor.fotoUrl\" alt=\"{{sponsor.naam}}\">\n              <div class=\"card-body\">\n                <h5 class=\"card-title text-primary text-center\">{{sponsor.naam}}</h5>\n                <h6 class=\"text-center\" *ngIf=\"sponsor.slogan == ''\"><small class=\"text-muted text-hide\" >Geen slogan</small></h6>\n                <h6 class=\"text-center\" *ngIf=\"sponsor.slogan != ''\"><small class=\"text-muted\" >{{sponsor.slogan}}</small></h6>\n                <div class=\"row\">\n                  <div class=\"col text-center\" *ngIf=\"sponsor.website != ''\">\n                      <a class=\"text-primary\" [href]=\"sponsor.website\"><i class=\"fa fa-globe\" aria-hidden=\"true\"></i></a>\n                  </div>\n                  <div class=\"col text-center\" *ngIf=\"sponsor.email\">\n                        <a class=\"text-primary\" [href]=\"'mailto:' + sponsor.email\"><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i></a>\n                  </div>\n                  <div class=\"col text-center\" *ngIf=\"sponsor.telnr\">\n                    <a class=\"text-primary\" [href]=\"'tel:'+ sponsor.telnr\"><i class=\"fa fa-phone\" aria-hidden=\"true\"></i></a>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row mt-4\">\n          <div class=\"col-12 col-xl-6 justify-content-center\" *ngIf=\"games.length > 0\">\n            <h3 class=\"display-4 text-primary text-center mb-3\">Wedstrijden</h3>\n            <ul  class=\"list-group\">\n              <li *ngFor=\"let wedstrijd of games; let even = even; let odd = odd\" width=\"100%\" [ngClass]=\"{'bg-accent': even, 'bg-ksk': odd}\" routerLink=\"/jeugd/u6\" fragment=\"gameSection\" class=\"list-group-item hoverable hoverItem\" (click)=\"viewMatchReport(wedstrijd)\">\n\n                    <p *ngIf=\"wedstrijd.thuisSpelend == 1\" class=\"text-dark lead\">KSK - {{wedstrijd.tegenstander}}<small class=\"float-right\">{{wedstrijd.datum | amDateFormat:\"DD/MM/YYYY\"}}</small></p>\n                    <h6 *ngIf=\"wedstrijd.thuisSpelend == 1\" class=\"text-muted\">{{wedstrijd.doelpuntenKSK}} - {{wedstrijd.doelpuntenTegenstander}}</h6>\n                    <p *ngIf=\"wedstrijd.thuisSpelend == 0\" class=\"text-dark lead\">{{wedstrijd.tegenstander}} - KSK<small class=\"float-right\">{{wedstrijd.datum | amDateFormat:\"DD/MM/YYYY\"}}</small></p>\n                    <h6 *ngIf=\"wedstrijd.thuisSpelend == 0\" class=\"text-muted\">{{wedstrijd.doelpuntenTegenstander}} - {{wedstrijd.doelpuntenKSK}}</h6>\n              </li>\n\n            </ul>\n          </div>\n          <div class=\"col-12 col-xl-6 justify-content-center\" *ngIf=\"spelers.length > 0\">\n            <h4 class=\"text-primary display-4 text-center mb-3\">Spelers</h4>\n            <ul  class=\"list-group  align-items-center\">\n              <li *ngFor=\"let speler of spelers\" style=\"width:100%\" (click)=\"showPlayerDetail(speler)\" class=\"hoverable list-group-item align-self-center\">\n                <div class=\"media\">\n                  <img class=\"mr-3 img-fluid rounded-circle\" width=\"65\" [src]=\"speler.fotoUrl\" alt=\"\">\n                  <div class=\"media-body align-self-center\">\n                    <h5 class=\"mt-0\">{{speler.voornaam}} {{speler.naam}}</h5>\n                  </div>\n                </div>\n              </li>\n\n            </ul>\n          </div>\n        </div>\n        <div class=\"row justify-content-center mt-3 border p-3 border-secondary rounded bg-ksk\" id=\"gameSection\" *ngIf=\"game\">\n          <div class=\"col-12\">\n            <p *ngIf=\"game.thuisSpelend == 1\" class=\"text-dark display-4 text-center\">KSK - {{game.tegenstander}}</p>\n            <h4 *ngIf=\"game.thuisSpelend == 1\" class=\"text-muted text-center\">{{game.doelpuntenKSK}} - {{game.doelpuntenTegenstander}}<small class=\"float-right\">{{game.datum | amDateFormat:\"DD/MM/YYYY\"}}</small></h4>\n            <p *ngIf=\"game.thuisSpelend == 0\" class=\"text-dark display-4 text-center\">{{game.tegenstander}} - KSK</p>\n            <h4 *ngIf=\"game.thuisSpelend == 0\" class=\"text-muted text-center\">{{game.doelpuntenTegenstander}} - {{game.doelpuntenKSK}}<small class=\"float-right\">{{game.datum | amDateFormat:\"DD/MM/YYYY\"}}</small></h4>\n            <div [froalaView]=\"game.verslag\"></div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/jeugd/u6/u6.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/jeugd/u6/u6.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return U6Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_ploegen_ploegen_service__ = __webpack_require__("../../../../../src/app/api/ploegen/ploegen.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_wedstrijden_wedstrijd_service__ = __webpack_require__("../../../../../src/app/api/wedstrijden/wedstrijd.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helpers_player_detail_player_detail_component__ = __webpack_require__("../../../../../src/app/helpers/player-detail/player-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__api_sponsor_sponsor_service__ = __webpack_require__("../../../../../src/app/api/sponsor/sponsor.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var U6Component = /** @class */ (function () {
    function U6Component(ploegSvc, gameSvc, r, modalService, sponsorSvc) {
        this.ploegSvc = ploegSvc;
        this.gameSvc = gameSvc;
        this.r = r;
        this.modalService = modalService;
        this.sponsorSvc = sponsorSvc;
        this.spelers = [];
        this.games = [];
        this.route = r;
    }
    U6Component.prototype.showPlayerDetail = function (sp) {
        var initialState = {
            player: sp
        };
        this.bsModalRef = this.modalService.show(__WEBPACK_IMPORTED_MODULE_5__helpers_player_detail_player_detail_component__["a" /* PlayerDetailComponent */], { initialState: initialState });
        this.bsModalRef.content.closeBtnName = 'Close';
        this.bsModalRef.content.player = sp;
    };
    U6Component.prototype.viewMatchReport = function (wedstrijd) {
        this.game = wedstrijd;
        this.route.fragment
            .subscribe(function (fragment) {
            if (fragment) {
                var element = document.getElementById(fragment);
                if (element) {
                    element.scrollIntoView();
                }
            }
        });
    };
    U6Component.prototype.isEven = function (n) {
        return n % 2 == 0;
    };
    U6Component.prototype.loadPloeg = function (naam) {
        var _this = this;
        this.ploegSvc.loadPloegByName(naam).subscribe(function (team) {
            console.log(team);
            _this.ploeg = team;
            if (_this.ploeg.trainingsuur) {
                _this.ploeg.trainingsuur = _this.ploeg.trainingsuur.substr(0, 5);
            }
            if (_this.ploeg) {
                _this.ploegSvc.getSpelersByTeam(_this.ploeg.ploeg_id).subscribe(function (players) {
                    console.log(players);
                    _this.spelers = players;
                });
                _this.ploegSvc.getGamesByTeam(_this.ploeg.ploeg_id).subscribe(function (wedstrijden) {
                    console.log(wedstrijden);
                    _this.games = wedstrijden;
                });
                _this.sponsorSvc.getSponsor(_this.ploeg.sponsor_id).subscribe(function (sponsor) {
                    _this.sponsor = sponsor;
                });
            }
        });
    };
    U6Component.prototype.ngOnInit = function () {
        this.loadPloeg("U6");
    };
    U6Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-u6',
            template: __webpack_require__("../../../../../src/app/jeugd/u6/u6.component.html"),
            styles: [__webpack_require__("../../../../../src/app/jeugd/u6/u6.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_ploegen_ploegen_service__["a" /* PloegenService */], __WEBPACK_IMPORTED_MODULE_2__api_wedstrijden_wedstrijd_service__["a" /* WedstrijdService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["a" /* BsModalService */], __WEBPACK_IMPORTED_MODULE_6__api_sponsor_sponsor_service__["a" /* SponsorService */]])
    ], U6Component);
    return U6Component;
}());



/***/ }),

/***/ "../../../../../src/app/jeugd/u7/u7.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!ploeg\">\n  <h3 class=\"text-center text-dark\">{{teamName}}</h3>\n  <p class=\"lead mb-5 text-center text-primary\">\n    Voorlopig is er geen verdere info beschikbaar. KSK is volop bezig met de opbouw van de ploeg.\n  </p>\n</div>\n<div *ngIf=\"ploeg\">\n\n  <div class=\"row justify-content-center pt-4\">\n    <div class=\"col-12 col-lg-10 \">\n      <div class=\"border-info\">\n        <div class=\"row align-items-center\">\n          <div class=\"col-12 col-md-8 col-lg-12 col-xl-8 text-center justify-content-center align-self-center\">\n            <img *ngIf=\"ploeg.fotoUrl\" [src]=\"ploeg.fotoUrl\" alt=\"\" class=\"img-fluid rounded border border-primary\">\n            <h2 *ngIf=\"!ploeg.fotoUrl\" class=\"text-center\">Geen foto beschikbaar</h2>\n            <!-- notice the \"circle\" class -->\n          </div>\n          <div class=\"col-12 col-md-4 col-lg-12 col-xl-4\">\n\n            <ul class=\"list-group\">\n              <li class=\"list-group-item\"><strong>Trainer </strong><br />{{ploeg.trainer_1}}</li>\n              <li class=\"list-group-item\" *ngIf=\"ploeg.trainer_2 != ''\"><strong>Trainer </strong><br />{{ploeg.trainer_2}}</li>\n              <li class=\"list-group-item\"><strong>Trainingsdagen </strong><br />{{ploeg.trainingsdagen}} om {{ploeg.trainingsuur}}</li>\n            </ul>\n            <div class=\"card mt-3\" *ngIf=\"sponsor\">\n              <img class=\"card-img-top\" [src]=\"sponsor.fotoUrl\" alt=\"{{sponsor.naam}}\">\n              <div class=\"card-body\">\n                <h5 class=\"card-title text-primary text-center\">{{sponsor.naam}}</h5>\n                <h6 class=\"text-center\" *ngIf=\"sponsor.slogan == ''\"><small class=\"text-muted text-hide\" >Geen slogan</small></h6>\n                <h6 class=\"text-center\" *ngIf=\"sponsor.slogan != ''\"><small class=\"text-muted\" >{{sponsor.slogan}}</small></h6>\n                <div class=\"row\">\n                  <div class=\"col text-center\" *ngIf=\"sponsor.website != ''\">\n                      <a class=\"text-primary\" [href]=\"sponsor.website\"><i class=\"fa fa-globe\" aria-hidden=\"true\"></i></a>\n                  </div>\n                  <div class=\"col text-center\" *ngIf=\"sponsor.email\">\n                        <a class=\"text-primary\" [href]=\"'mailto:' + sponsor.email\"><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i></a>\n                  </div>\n                  <div class=\"col text-center\" *ngIf=\"sponsor.telnr\">\n                    <a class=\"text-primary\" [href]=\"'tel:'+ sponsor.telnr\"><i class=\"fa fa-phone\" aria-hidden=\"true\"></i></a>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row mt-4\">\n          <div class=\"col-12 col-xl-6 justify-content-center\" *ngIf=\"games.length > 0\">\n            <h3 class=\"display-4 text-primary text-center mb-3\">Wedstrijden</h3>\n            <ul  class=\"list-group\">\n              <li *ngFor=\"let wedstrijd of games; let even = even; let odd = odd\" width=\"100%\" [ngClass]=\"{'bg-accent': even, 'bg-ksk': odd}\" routerLink=\"/jeugd/u7\" fragment=\"gameSection\" class=\"list-group-item hoverable hoverItem\" (click)=\"viewMatchReport(wedstrijd)\">\n\n                    <p *ngIf=\"wedstrijd.thuisSpelend == 1\" class=\"text-dark lead\">KSK - {{wedstrijd.tegenstander}}<small class=\"float-right\">{{wedstrijd.datum | amDateFormat:\"DD/MM/YYYY\"}}</small></p>\n                    <h6 *ngIf=\"wedstrijd.thuisSpelend == 1\" class=\"text-muted\">{{wedstrijd.doelpuntenKSK}} - {{wedstrijd.doelpuntenTegenstander}}</h6>\n                    <p *ngIf=\"wedstrijd.thuisSpelend == 0\" class=\"text-dark lead\">{{wedstrijd.tegenstander}} - KSK<small class=\"float-right\">{{wedstrijd.datum | amDateFormat:\"DD/MM/YYYY\"}}</small></p>\n                    <h6 *ngIf=\"wedstrijd.thuisSpelend == 0\" class=\"text-muted\">{{wedstrijd.doelpuntenTegenstander}} - {{wedstrijd.doelpuntenKSK}}</h6>\n              </li>\n\n            </ul>\n          </div>\n          <div class=\"col-12 col-xl-6 justify-content-center\" *ngIf=\"spelers.length > 0\">\n            <h4 class=\"text-primary display-4 text-center mb-3\">Spelers</h4>\n            <ul  class=\"list-group  align-items-center\">\n              <li *ngFor=\"let speler of spelers\" style=\"width:100%\" (click)=\"showPlayerDetail(speler)\" class=\"hoverable list-group-item align-self-center\">\n                <div class=\"media\">\n                  <img class=\"mr-3 img-fluid rounded-circle\" width=\"65\" [src]=\"speler.fotoUrl\" alt=\"\">\n                  <div class=\"media-body align-self-center\">\n                    <h5 class=\"mt-0\">{{speler.voornaam}} {{speler.naam}}</h5>\n                  </div>\n                </div>\n              </li>\n\n            </ul>\n          </div>\n        </div>\n        <div class=\"row justify-content-center mt-3 border p-3 border-secondary rounded bg-ksk\" id=\"gameSection\" *ngIf=\"game\">\n          <div class=\"col-12\">\n            <p *ngIf=\"game.thuisSpelend == 1\" class=\"text-dark display-4 text-center\">KSK - {{game.tegenstander}}</p>\n            <h4 *ngIf=\"game.thuisSpelend == 1\" class=\"text-muted text-center\">{{game.doelpuntenKSK}} - {{game.doelpuntenTegenstander}}<small class=\"float-right\">{{game.datum | amDateFormat:\"DD/MM/YYYY\"}}</small></h4>\n            <p *ngIf=\"game.thuisSpelend == 0\" class=\"text-dark display-4 text-center\">{{game.tegenstander}} - KSK</p>\n            <h4 *ngIf=\"game.thuisSpelend == 0\" class=\"text-muted text-center\">{{game.doelpuntenTegenstander}} - {{game.doelpuntenKSK}}<small class=\"float-right\">{{game.datum | amDateFormat:\"DD/MM/YYYY\"}}</small></h4>\n            <div [froalaView]=\"game.verslag\"></div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/jeugd/u7/u7.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/jeugd/u7/u7.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return U7Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_ploegen_ploegen_service__ = __webpack_require__("../../../../../src/app/api/ploegen/ploegen.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_wedstrijden_wedstrijd_service__ = __webpack_require__("../../../../../src/app/api/wedstrijden/wedstrijd.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helpers_player_detail_player_detail_component__ = __webpack_require__("../../../../../src/app/helpers/player-detail/player-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__api_sponsor_sponsor_service__ = __webpack_require__("../../../../../src/app/api/sponsor/sponsor.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var U7Component = /** @class */ (function () {
    function U7Component(ploegSvc, gameSvc, r, modalService, sponsorSvc) {
        this.ploegSvc = ploegSvc;
        this.gameSvc = gameSvc;
        this.r = r;
        this.modalService = modalService;
        this.sponsorSvc = sponsorSvc;
        this.spelers = [];
        this.games = [];
        this.route = r;
    }
    U7Component.prototype.showPlayerDetail = function (sp) {
        var initialState = {
            player: sp
        };
        this.bsModalRef = this.modalService.show(__WEBPACK_IMPORTED_MODULE_5__helpers_player_detail_player_detail_component__["a" /* PlayerDetailComponent */], { initialState: initialState });
        this.bsModalRef.content.closeBtnName = 'Close';
        this.bsModalRef.content.player = sp;
    };
    U7Component.prototype.viewMatchReport = function (wedstrijd) {
        this.game = wedstrijd;
        this.route.fragment
            .subscribe(function (fragment) {
            if (fragment) {
                var element = document.getElementById(fragment);
                if (element) {
                    element.scrollIntoView();
                }
            }
        });
    };
    U7Component.prototype.isEven = function (n) {
        return n % 2 == 0;
    };
    U7Component.prototype.loadPloeg = function (naam) {
        var _this = this;
        this.ploegSvc.loadPloegByName(naam).subscribe(function (team) {
            _this.ploeg = team;
            if (_this.ploeg.trainingsuur) {
                _this.ploeg.trainingsuur = _this.ploeg.trainingsuur.substr(0, 5);
            }
            if (_this.ploeg) {
                _this.ploegSvc.getSpelersByTeam(_this.ploeg.ploeg_id).subscribe(function (players) {
                    _this.spelers = players;
                });
                _this.ploegSvc.getGamesByTeam(_this.ploeg.ploeg_id).subscribe(function (wedstrijden) {
                    _this.games = wedstrijden;
                });
                _this.sponsorSvc.getSponsor(_this.ploeg.sponsor_id).subscribe(function (sponsor) {
                    _this.sponsor = sponsor;
                });
            }
        });
    };
    U7Component.prototype.ngOnInit = function () {
        this.teamName = "U7";
        this.loadPloeg(this.teamName);
    };
    U7Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-u7',
            template: __webpack_require__("../../../../../src/app/jeugd/u7/u7.component.html"),
            styles: [__webpack_require__("../../../../../src/app/jeugd/u7/u7.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_ploegen_ploegen_service__["a" /* PloegenService */], __WEBPACK_IMPORTED_MODULE_2__api_wedstrijden_wedstrijd_service__["a" /* WedstrijdService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["a" /* BsModalService */], __WEBPACK_IMPORTED_MODULE_6__api_sponsor_sponsor_service__["a" /* SponsorService */]])
    ], U7Component);
    return U7Component;
}());



/***/ }),

/***/ "../../../../../src/app/jeugd/u8/u8.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!ploeg\">\n  <h3 class=\"text-center text-dark\">{{teamName}}</h3>\n  <p class=\"lead mb-5 text-center text-primary\">\n    Voorlopig is er geen verdere info beschikbaar. KSK is volop bezig met de opbouw van de ploeg.\n  </p>\n</div>\n<div *ngIf=\"ploeg\">\n\n  <div class=\"row justify-content-center pt-4\">\n    <div class=\"col-12 col-lg-10 \">\n      <div class=\"border-info\">\n        <div class=\"row align-items-center\">\n          <div class=\"col-12 col-md-8 col-lg-12 col-xl-8 text-center justify-content-center align-self-center\">\n            <img *ngIf=\"ploeg.fotoUrl\" [src]=\"ploeg.fotoUrl\" alt=\"\" class=\"img-fluid rounded border border-primary\">\n            <h2 *ngIf=\"!ploeg.fotoUrl\" class=\"text-center\">Geen foto beschikbaar</h2>\n            <!-- notice the \"circle\" class -->\n          </div>\n          <div class=\"col-12 col-md-4 col-lg-12 col-xl-4\">\n\n            <ul class=\"list-group\">\n              <li class=\"list-group-item\"><strong>Trainer </strong><br />{{ploeg.trainer_1}}</li>\n              <li class=\"list-group-item\" *ngIf=\"ploeg.trainer_2 != ''\"><strong>Trainer </strong><br />{{ploeg.trainer_2}}</li>\n              <li class=\"list-group-item\"><strong>Trainingsdagen </strong><br />{{ploeg.trainingsdagen}} om {{ploeg.trainingsuur}}</li>\n            </ul>\n            <div class=\"card mt-3\" *ngIf=\"sponsor\">\n              <img class=\"card-img-top\" [src]=\"sponsor.fotoUrl\" alt=\"{{sponsor.naam}}\">\n              <div class=\"card-body\">\n                <h5 class=\"card-title text-primary text-center\">{{sponsor.naam}}</h5>\n                <h6 class=\"text-center\" *ngIf=\"sponsor.slogan == ''\"><small class=\"text-muted text-hide\" >Geen slogan</small></h6>\n                <h6 class=\"text-center\" *ngIf=\"sponsor.slogan != ''\"><small class=\"text-muted\" >{{sponsor.slogan}}</small></h6>\n                <div class=\"row\">\n                  <div class=\"col text-center\" *ngIf=\"sponsor.website != ''\">\n                      <a class=\"text-primary\" [href]=\"sponsor.website\"><i class=\"fa fa-globe\" aria-hidden=\"true\"></i></a>\n                  </div>\n                  <div class=\"col text-center\" *ngIf=\"sponsor.email\">\n                        <a class=\"text-primary\" [href]=\"'mailto:' + sponsor.email\"><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i></a>\n                  </div>\n                  <div class=\"col text-center\" *ngIf=\"sponsor.telnr\">\n                    <a class=\"text-primary\" [href]=\"'tel:'+ sponsor.telnr\"><i class=\"fa fa-phone\" aria-hidden=\"true\"></i></a>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row mt-4\">\n          <div class=\"col-12 col-xl-6 justify-content-center\" *ngIf=\"games.length > 0\">\n            <h3 class=\"display-4 text-primary text-center mb-3\">Wedstrijden</h3>\n            <ul  class=\"list-group\">\n              <li *ngFor=\"let wedstrijd of games; let even = even; let odd = odd\" width=\"100%\" [ngClass]=\"{'bg-accent': even, 'bg-ksk': odd}\" routerLink=\"/jeugd/u8\" fragment=\"gameSection\" class=\"list-group-item hoverable hoverItem\" (click)=\"viewMatchReport(wedstrijd)\">\n\n                    <p *ngIf=\"wedstrijd.thuisSpelend == 1\" class=\"text-dark lead\">KSK - {{wedstrijd.tegenstander}}<small class=\"float-right\">{{wedstrijd.datum | amDateFormat:\"DD/MM/YYYY\"}}</small></p>\n                    <h6 *ngIf=\"wedstrijd.thuisSpelend == 1\" class=\"text-muted\">{{wedstrijd.doelpuntenKSK}} - {{wedstrijd.doelpuntenTegenstander}}</h6>\n                    <p *ngIf=\"wedstrijd.thuisSpelend == 0\" class=\"text-dark lead\">{{wedstrijd.tegenstander}} - KSK<small class=\"float-right\">{{wedstrijd.datum | amDateFormat:\"DD/MM/YYYY\"}}</small></p>\n                    <h6 *ngIf=\"wedstrijd.thuisSpelend == 0\" class=\"text-muted\">{{wedstrijd.doelpuntenTegenstander}} - {{wedstrijd.doelpuntenKSK}}</h6>\n              </li>\n\n            </ul>\n          </div>\n          <div class=\"col-12 col-xl-6 justify-content-center\" *ngIf=\"spelers.length > 0\">\n            <h4 class=\"text-primary display-4 text-center mb-3\">Spelers</h4>\n            <ul  class=\"list-group  align-items-center\">\n              <li *ngFor=\"let speler of spelers\" style=\"width:100%\" (click)=\"showPlayerDetail(speler)\" class=\"hoverable list-group-item align-self-center\">\n                <div class=\"media\">\n                  <img class=\"mr-3 img-fluid rounded-circle\" width=\"65\" [src]=\"speler.fotoUrl\" alt=\"\">\n                  <div class=\"media-body align-self-center\">\n                    <h5 class=\"mt-0\">{{speler.voornaam}} {{speler.naam}}</h5>\n                  </div>\n                </div>\n              </li>\n\n            </ul>\n          </div>\n        </div>\n        <div class=\"row justify-content-center mt-3 border p-3 border-secondary rounded bg-ksk\" id=\"gameSection\" *ngIf=\"game\">\n          <div class=\"col-12\">\n            <p *ngIf=\"game.thuisSpelend == 1\" class=\"text-dark display-4 text-center\">KSK - {{game.tegenstander}}</p>\n            <h4 *ngIf=\"game.thuisSpelend == 1\" class=\"text-muted text-center\">{{game.doelpuntenKSK}} - {{game.doelpuntenTegenstander}}<small class=\"float-right\">{{game.datum | amDateFormat:\"DD/MM/YYYY\"}}</small></h4>\n            <p *ngIf=\"game.thuisSpelend == 0\" class=\"text-dark display-4 text-center\">{{game.tegenstander}} - KSK</p>\n            <h4 *ngIf=\"game.thuisSpelend == 0\" class=\"text-muted text-center\">{{game.doelpuntenTegenstander}} - {{game.doelpuntenKSK}}<small class=\"float-right\">{{game.datum | amDateFormat:\"DD/MM/YYYY\"}}</small></h4>\n            <div [froalaView]=\"game.verslag\"></div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/jeugd/u8/u8.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/jeugd/u8/u8.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return U8Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_ploegen_ploegen_service__ = __webpack_require__("../../../../../src/app/api/ploegen/ploegen.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_wedstrijden_wedstrijd_service__ = __webpack_require__("../../../../../src/app/api/wedstrijden/wedstrijd.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helpers_player_detail_player_detail_component__ = __webpack_require__("../../../../../src/app/helpers/player-detail/player-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__api_sponsor_sponsor_service__ = __webpack_require__("../../../../../src/app/api/sponsor/sponsor.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var U8Component = /** @class */ (function () {
    function U8Component(ploegSvc, gameSvc, r, modalService, sponsorSvc) {
        this.ploegSvc = ploegSvc;
        this.gameSvc = gameSvc;
        this.r = r;
        this.modalService = modalService;
        this.sponsorSvc = sponsorSvc;
        this.spelers = [];
        this.games = [];
        this.route = r;
    }
    U8Component.prototype.showPlayerDetail = function (sp) {
        var initialState = {
            player: sp
        };
        this.bsModalRef = this.modalService.show(__WEBPACK_IMPORTED_MODULE_5__helpers_player_detail_player_detail_component__["a" /* PlayerDetailComponent */], { initialState: initialState });
        this.bsModalRef.content.closeBtnName = 'Close';
        this.bsModalRef.content.player = sp;
    };
    U8Component.prototype.viewMatchReport = function (wedstrijd) {
        this.game = wedstrijd;
        this.route.fragment
            .subscribe(function (fragment) {
            if (fragment) {
                var element = document.getElementById(fragment);
                if (element) {
                    element.scrollIntoView();
                }
            }
        });
    };
    U8Component.prototype.isEven = function (n) {
        return n % 2 == 0;
    };
    U8Component.prototype.loadPloeg = function (naam) {
        var _this = this;
        this.ploegSvc.loadPloegByName(naam).subscribe(function (team) {
            _this.ploeg = team;
            if (_this.ploeg.trainingsuur) {
                _this.ploeg.trainingsuur = _this.ploeg.trainingsuur.substr(0, 5);
            }
            if (_this.ploeg) {
                _this.ploegSvc.getSpelersByTeam(_this.ploeg.ploeg_id).subscribe(function (players) {
                    _this.spelers = players;
                });
                _this.ploegSvc.getGamesByTeam(_this.ploeg.ploeg_id).subscribe(function (wedstrijden) {
                    _this.games = wedstrijden;
                });
                _this.sponsorSvc.getSponsor(_this.ploeg.sponsor_id).subscribe(function (sponsor) {
                    _this.sponsor = sponsor;
                });
            }
        });
    };
    U8Component.prototype.ngOnInit = function () {
        this.teamName = "U8";
        this.loadPloeg(this.teamName);
    };
    U8Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-u8',
            template: __webpack_require__("../../../../../src/app/jeugd/u8/u8.component.html"),
            styles: [__webpack_require__("../../../../../src/app/jeugd/u8/u8.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_ploegen_ploegen_service__["a" /* PloegenService */], __WEBPACK_IMPORTED_MODULE_2__api_wedstrijden_wedstrijd_service__["a" /* WedstrijdService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["a" /* BsModalService */], __WEBPACK_IMPORTED_MODULE_6__api_sponsor_sponsor_service__["a" /* SponsorService */]])
    ], U8Component);
    return U8Component;
}());



/***/ }),

/***/ "../../../../../src/app/jeugd/u9/u9.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!ploeg\">\n  <h3 class=\"text-center text-dark\">{{teamName}}</h3>\n  <p class=\"lead mb-5 text-center text-primary\">\n    Voorlopig is er geen verdere info beschikbaar. KSK is volop bezig met de opbouw van de ploeg.\n  </p>\n</div>\n<div *ngIf=\"ploeg\">\n\n  <div class=\"row justify-content-center pt-4\">\n    <div class=\"col-12 col-lg-10 \">\n      <div class=\"border-info\">\n        <div class=\"row align-items-center\">\n          <div class=\"col-12 col-md-8 col-lg-12 col-xl-8 text-center justify-content-center align-self-center\">\n            <img *ngIf=\"ploeg.fotoUrl\" [src]=\"ploeg.fotoUrl\" alt=\"\" class=\"img-fluid rounded border border-primary\">\n            <h2 *ngIf=\"!ploeg.fotoUrl\" class=\"text-center\">Geen foto beschikbaar</h2>\n            <!-- notice the \"circle\" class -->\n          </div>\n          <div class=\"col-12 col-md-4 col-lg-12 col-xl-4\">\n\n            <ul class=\"list-group\">\n              <li class=\"list-group-item\"><strong>Trainer </strong><br />{{ploeg.trainer_1}}</li>\n              <li class=\"list-group-item\" *ngIf=\"ploeg.trainer_2 != ''\"><strong>Trainer </strong><br />{{ploeg.trainer_2}}</li>\n              <li class=\"list-group-item\"><strong>Trainingsdagen </strong><br />{{ploeg.trainingsdagen}} om {{ploeg.trainingsuur}}</li>\n            </ul>\n            <div class=\"card mt-3\" *ngIf=\"sponsor\">\n              <img class=\"card-img-top\" [src]=\"sponsor.fotoUrl\" alt=\"{{sponsor.naam}}\">\n              <div class=\"card-body\">\n                <h5 class=\"card-title text-primary text-center\">{{sponsor.naam}}</h5>\n                <h6 class=\"text-center\" *ngIf=\"sponsor.slogan == ''\"><small class=\"text-muted text-hide\" >Geen slogan</small></h6>\n                <h6 class=\"text-center\" *ngIf=\"sponsor.slogan != ''\"><small class=\"text-muted\" >{{sponsor.slogan}}</small></h6>\n                <div class=\"row\">\n                  <div class=\"col text-center\" *ngIf=\"sponsor.website != ''\">\n                      <a class=\"text-primary\" [href]=\"sponsor.website\"><i class=\"fa fa-globe\" aria-hidden=\"true\"></i></a>\n                  </div>\n                  <div class=\"col text-center\" *ngIf=\"sponsor.email\">\n                        <a class=\"text-primary\" [href]=\"'mailto:' + sponsor.email\"><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i></a>\n                  </div>\n                  <div class=\"col text-center\" *ngIf=\"sponsor.telnr\">\n                    <a class=\"text-primary\" [href]=\"'tel:'+ sponsor.telnr\"><i class=\"fa fa-phone\" aria-hidden=\"true\"></i></a>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row mt-4\">\n          <div class=\"col-12 col-xl-6 justify-content-center\" *ngIf=\"games.length > 0\">\n            <h3 class=\"display-4 text-primary text-center mb-3\">Wedstrijden</h3>\n            <ul  class=\"list-group\">\n              <li *ngFor=\"let wedstrijd of games; let even = even; let odd = odd\" width=\"100%\" [ngClass]=\"{'bg-accent': even, 'bg-ksk': odd}\" routerLink=\"/jeugd/u9\" fragment=\"gameSection\" class=\"list-group-item hoverable hoverItem\" (click)=\"viewMatchReport(wedstrijd)\">\n\n                    <p *ngIf=\"wedstrijd.thuisSpelend == 1\" class=\"text-dark lead\">KSK - {{wedstrijd.tegenstander}}<small class=\"float-right\">{{wedstrijd.datum | amDateFormat:\"DD/MM/YYYY\"}}</small></p>\n                    <h6 *ngIf=\"wedstrijd.thuisSpelend == 1\" class=\"text-muted\">{{wedstrijd.doelpuntenKSK}} - {{wedstrijd.doelpuntenTegenstander}}</h6>\n                    <p *ngIf=\"wedstrijd.thuisSpelend == 0\" class=\"text-dark lead\">{{wedstrijd.tegenstander}} - KSK<small class=\"float-right\">{{wedstrijd.datum | amDateFormat:\"DD/MM/YYYY\"}}</small></p>\n                    <h6 *ngIf=\"wedstrijd.thuisSpelend == 0\" class=\"text-muted\">{{wedstrijd.doelpuntenTegenstander}} - {{wedstrijd.doelpuntenKSK}}</h6>\n              </li>\n\n            </ul>\n          </div>\n          <div class=\"col-12 col-xl-6 justify-content-center\" *ngIf=\"spelers.length > 0\">\n            <h4 class=\"text-primary display-4 text-center mb-3\">Spelers</h4>\n            <ul  class=\"list-group  align-items-center\">\n              <li *ngFor=\"let speler of spelers\" style=\"width:100%\" (click)=\"showPlayerDetail(speler)\" class=\"hoverable list-group-item align-self-center\">\n                <div class=\"media\">\n                  <img class=\"mr-3 img-fluid rounded-circle\" width=\"65\" [src]=\"speler.fotoUrl\" alt=\"\">\n                  <div class=\"media-body align-self-center\">\n                    <h5 class=\"mt-0\">{{speler.voornaam}} {{speler.naam}}</h5>\n                  </div>\n                </div>\n              </li>\n\n            </ul>\n          </div>\n        </div>\n        <div class=\"row justify-content-center mt-3 border p-3 border-secondary rounded bg-ksk\" id=\"gameSection\" *ngIf=\"game\">\n          <div class=\"col-12\">\n            <p *ngIf=\"game.thuisSpelend == 1\" class=\"text-dark display-4 text-center\">KSK - {{game.tegenstander}}</p>\n            <h4 *ngIf=\"game.thuisSpelend == 1\" class=\"text-muted text-center\">{{game.doelpuntenKSK}} - {{game.doelpuntenTegenstander}}<small class=\"float-right\">{{game.datum | amDateFormat:\"DD/MM/YYYY\"}}</small></h4>\n            <p *ngIf=\"game.thuisSpelend == 0\" class=\"text-dark display-4 text-center\">{{game.tegenstander}} - KSK</p>\n            <h4 *ngIf=\"game.thuisSpelend == 0\" class=\"text-muted text-center\">{{game.doelpuntenTegenstander}} - {{game.doelpuntenKSK}}<small class=\"float-right\">{{game.datum | amDateFormat:\"DD/MM/YYYY\"}}</small></h4>\n            <div [froalaView]=\"game.verslag\"></div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/jeugd/u9/u9.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/jeugd/u9/u9.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return U9Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_ploegen_ploegen_service__ = __webpack_require__("../../../../../src/app/api/ploegen/ploegen.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_wedstrijden_wedstrijd_service__ = __webpack_require__("../../../../../src/app/api/wedstrijden/wedstrijd.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helpers_player_detail_player_detail_component__ = __webpack_require__("../../../../../src/app/helpers/player-detail/player-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__api_sponsor_sponsor_service__ = __webpack_require__("../../../../../src/app/api/sponsor/sponsor.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var U9Component = /** @class */ (function () {
    function U9Component(ploegSvc, gameSvc, r, modalService, sponsorSvc) {
        this.ploegSvc = ploegSvc;
        this.gameSvc = gameSvc;
        this.r = r;
        this.modalService = modalService;
        this.sponsorSvc = sponsorSvc;
        this.spelers = [];
        this.games = [];
        this.route = r;
    }
    U9Component.prototype.showPlayerDetail = function (sp) {
        var initialState = {
            player: sp
        };
        this.bsModalRef = this.modalService.show(__WEBPACK_IMPORTED_MODULE_5__helpers_player_detail_player_detail_component__["a" /* PlayerDetailComponent */], { initialState: initialState });
        this.bsModalRef.content.closeBtnName = 'Close';
        this.bsModalRef.content.player = sp;
    };
    U9Component.prototype.viewMatchReport = function (wedstrijd) {
        this.game = wedstrijd;
        this.route.fragment
            .subscribe(function (fragment) {
            if (fragment) {
                var element = document.getElementById(fragment);
                if (element) {
                    element.scrollIntoView();
                }
            }
        });
    };
    U9Component.prototype.isEven = function (n) {
        return n % 2 == 0;
    };
    U9Component.prototype.loadPloeg = function (naam) {
        var _this = this;
        this.ploegSvc.loadPloegByName(naam).subscribe(function (team) {
            _this.ploeg = team;
            if (_this.ploeg.trainingsuur) {
                _this.ploeg.trainingsuur = _this.ploeg.trainingsuur.substr(0, 5);
            }
            if (_this.ploeg) {
                _this.ploegSvc.getSpelersByTeam(_this.ploeg.ploeg_id).subscribe(function (players) {
                    _this.spelers = players;
                });
                _this.ploegSvc.getGamesByTeam(_this.ploeg.ploeg_id).subscribe(function (wedstrijden) {
                    _this.games = wedstrijden;
                });
                _this.sponsorSvc.getSponsor(_this.ploeg.sponsor_id).subscribe(function (sponsor) {
                    _this.sponsor = sponsor;
                });
            }
        });
    };
    U9Component.prototype.ngOnInit = function () {
        this.teamName = "U9";
        this.loadPloeg(this.teamName);
    };
    U9Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-u9',
            template: __webpack_require__("../../../../../src/app/jeugd/u9/u9.component.html"),
            styles: [__webpack_require__("../../../../../src/app/jeugd/u9/u9.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_ploegen_ploegen_service__["a" /* PloegenService */], __WEBPACK_IMPORTED_MODULE_2__api_wedstrijden_wedstrijd_service__["a" /* WedstrijdService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["a" /* BsModalService */], __WEBPACK_IMPORTED_MODULE_6__api_sponsor_sponsor_service__["a" /* SponsorService */]])
    ], U9Component);
    return U9Component;
}());



/***/ }),

/***/ "../../../../../src/app/senioren/aploeg/aploeg.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!ploeg\">\n  <h3 class=\"text-center text-dark\">A-ploeg</h3>\n  <p class=\"lead mb-5 text-center text-primary\">\n    Voorlopig is er geen verdere info beschikbaar. KSK is volop bezig met de opbouw van de ploeg.\n  </p>\n</div>\n<div *ngIf=\"ploeg\">\n\n  <div class=\"row justify-content-center pt-4\">\n    <div class=\"col-12 col-lg-10 \">\n      <div class=\"border-info\">\n        <div class=\"row align-items-center\">\n          <div class=\"col-12 col-md-8 col-lg-12 col-xl-8 justify-content-center align-self-center\">\n            <img *ngIf=\"ploeg.fotoUrl\" [src]=\"ploeg.fotoUrl\" alt=\"\" class=\"img-fluid rounded border border-primary\">\n            <h2 *ngIf=\"!ploeg.fotoUrl\" class=\"text-center\">Geen foto beschikbaar</h2>\n            <!-- notice the \"circle\" class -->\n          </div>\n          <div class=\"col-12 col-md-4 col-lg-12 col-xl-4\">\n\n            <ul class=\"list-group\">\n              <li class=\"list-group-item\"><strong>Trainer </strong><br />{{ploeg.trainer_1}}</li>\n              <li class=\"list-group-item\"><strong>Hulptrainer </strong><br />{{ploeg.trainer_2}}</li>\n              <li class=\"list-group-item\"><strong>Keeperstrainer </strong><br />Alwin Jonkers</li>\n              <li class=\"list-group-item\"><strong>Conditietrainer </strong><br />Jasper Kegels</li>\n            </ul>\n\n          </div>\n        </div>\n        <div class=\"row mt-4\">\n          <div class=\"col-12 col-xl-6 justify-content-center\" *ngIf=\"games.length > 0\">\n            <h3 class=\"display-4 text-primary text-center mb-3\">Wedstrijden</h3>\n            <ul  class=\"list-group\">\n              <li *ngFor=\"let wedstrijd of games; let even = even; let odd = odd\" width=\"100%\" [ngClass]=\"{'bg-accent': even, 'bg-ksk': odd}\" routerLink=\"/senioren/aploeg\" fragment=\"gameSection\" class=\"list-group-item hoverable hoverItem\" (click)=\"viewMatchReport(wedstrijd)\">\n\n                    <p *ngIf=\"wedstrijd.thuisSpelend == 1\" class=\"text-dark lead\">KSK - {{wedstrijd.tegenstander}}<small class=\"float-right\">{{wedstrijd.datum | amDateFormat:\"DD/MM/YYYY\"}}</small></p>\n                    <h6 *ngIf=\"wedstrijd.thuisSpelend == 1\" class=\"text-muted\">{{wedstrijd.doelpuntenKSK}} - {{wedstrijd.doelpuntenTegenstander}}</h6>\n                    <p *ngIf=\"wedstrijd.thuisSpelend == 0\" class=\"text-dark lead\">{{wedstrijd.tegenstander}} - KSK<small class=\"float-right\">{{wedstrijd.datum | amDateFormat:\"DD/MM/YYYY\"}}</small></p>\n                    <h6 *ngIf=\"wedstrijd.thuisSpelend == 0\" class=\"text-muted\">{{wedstrijd.doelpuntenTegenstander}} - {{wedstrijd.doelpuntenKSK}}</h6>\n              </li>\n\n            </ul>\n          </div>\n          <div class=\"col-12 col-xl-6 justify-content-center\" *ngIf=\"spelers.length > 0\">\n            <h4 class=\"text-primary display-4 text-center mb-3\">Spelers</h4>\n            <ul  class=\"list-group  align-items-center\">\n              <li *ngFor=\"let speler of spelers\" style=\"width:100%\" (click)=\"showPlayerDetail(speler)\" class=\"hoverable list-group-item align-self-center\">\n                <div class=\"media\">\n                  <img class=\"mr-3 img-fluid rounded-circle\" width=\"65\" [src]=\"speler.fotoUrl\" alt=\"\">\n                  <div class=\"media-body align-self-center\">\n                    <h5 class=\"mt-0\">{{speler.voornaam}} {{speler.naam}}</h5>\n                  </div>\n                </div>\n              </li>\n\n            </ul>\n          </div>\n        </div>\n        <div class=\"row justify-content-center mt-3 border p-3 border-secondary rounded bg-ksk\" id=\"gameSection\" *ngIf=\"game\">\n          <div class=\"col-12\">\n            <p *ngIf=\"game.thuisSpelend == 1\" class=\"text-dark display-4 text-center\">KSK - {{game.tegenstander}}</p>\n            <h4 *ngIf=\"game.thuisSpelend == 1\" class=\"text-muted text-center\">{{game.doelpuntenKSK}} - {{game.doelpuntenTegenstander}}<small class=\"float-right\">{{game.datum | amDateFormat:\"DD/MM/YYYY\"}}</small></h4>\n            <p *ngIf=\"game.thuisSpelend == 0\" class=\"text-dark display-4 text-center\">{{game.tegenstander}} - KSK</p>\n            <h4 *ngIf=\"game.thuisSpelend == 0\" class=\"text-muted text-center\">{{game.doelpuntenTegenstander}} - {{game.doelpuntenKSK}}<small class=\"float-right\">{{game.datum | amDateFormat:\"DD/MM/YYYY\"}}</small></h4>\n            <div [froalaView]=\"game.verslag\"></div>\n          </div>\n        </div>\n        <div class=\"row justify-content-center mt-3\">\n          <div class=\"col-8\">\n            <h4 class=\"text-primary display-4 text-center mb-3\">Hoofdsponsor</h4>\n            <div class=\"card mt-3\" *ngIf=\"sponsor\">\n              <img class=\"card-img-top\" [src]=\"sponsor.fotoUrl\" alt=\"{{sponsor.naam}}\">\n              <div class=\"card-body\">\n                <h5 class=\"card-title text-primary text-center\">{{sponsor.naam}}</h5>\n                <h6 class=\"text-center\" *ngIf=\"sponsor.slogan == ''\"><small class=\"text-muted text-hide\" >Geen slogan</small></h6>\n                <h6 class=\"text-center\" *ngIf=\"sponsor.slogan != ''\"><small class=\"text-muted\" >{{sponsor.slogan}}</small></h6>\n                <div class=\"row\">\n                  <div class=\"col text-center\" *ngIf=\"sponsor.website != ''\">\n                      <a class=\"text-primary\" [href]=\"sponsor.website\"><i class=\"fa fa-globe\" aria-hidden=\"true\"></i></a>\n                  </div>\n                  <div class=\"col text-center\" *ngIf=\"sponsor.email\">\n                        <a class=\"text-primary\" [href]=\"'mailto:' + sponsor.email\"><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i></a>\n                  </div>\n                  <div class=\"col text-center\" *ngIf=\"sponsor.telnr\">\n                    <a class=\"text-primary\" [href]=\"'tel:'+ sponsor.telnr\"><i class=\"fa fa-phone\" aria-hidden=\"true\"></i></a>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/senioren/aploeg/aploeg.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/senioren/aploeg/aploeg.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AploegComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_ploegen_ploegen_service__ = __webpack_require__("../../../../../src/app/api/ploegen/ploegen.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_wedstrijden_wedstrijd_service__ = __webpack_require__("../../../../../src/app/api/wedstrijden/wedstrijd.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helpers_player_detail_player_detail_component__ = __webpack_require__("../../../../../src/app/helpers/player-detail/player-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__api_sponsor_sponsor_service__ = __webpack_require__("../../../../../src/app/api/sponsor/sponsor.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AploegComponent = /** @class */ (function () {
    function AploegComponent(ploegSvc, gameSvc, r, modalService, sponsorSvc) {
        this.ploegSvc = ploegSvc;
        this.gameSvc = gameSvc;
        this.r = r;
        this.modalService = modalService;
        this.sponsorSvc = sponsorSvc;
        this.spelers = [];
        this.games = [];
        this.route = r;
    }
    AploegComponent.prototype.showPlayerDetail = function (sp) {
        var initialState = {
            player: sp
        };
        this.bsModalRef = this.modalService.show(__WEBPACK_IMPORTED_MODULE_5__helpers_player_detail_player_detail_component__["a" /* PlayerDetailComponent */], { initialState: initialState });
        this.bsModalRef.content.closeBtnName = 'Close';
        this.bsModalRef.content.player = sp;
    };
    AploegComponent.prototype.viewMatchReport = function (wedstrijd) {
        this.game = wedstrijd;
        this.route.fragment
            .subscribe(function (fragment) {
            if (fragment) {
                var element = document.getElementById(fragment);
                if (element) {
                    element.scrollIntoView();
                }
            }
        });
    };
    AploegComponent.prototype.isEven = function (n) {
        return n % 2 == 0;
    };
    AploegComponent.prototype.loadPloeg = function (naam) {
        var _this = this;
        this.ploegSvc.loadPloegByName(naam).subscribe(function (team) {
            console.log(team);
            _this.ploeg = team;
            if (_this.ploeg) {
                _this.ploegSvc.getSpelersByTeam(_this.ploeg.ploeg_id).subscribe(function (players) {
                    console.log(players);
                    _this.spelers = players;
                });
                _this.ploegSvc.getGamesByTeam(_this.ploeg.ploeg_id).subscribe(function (wedstrijden) {
                    console.log(wedstrijden);
                    _this.games = wedstrijden;
                });
                _this.sponsorSvc.getSponsor(_this.ploeg.sponsor_id).subscribe(function (sponsor) {
                    _this.sponsor = sponsor;
                });
            }
        });
    };
    AploegComponent.prototype.ngOnInit = function () {
        this.loadPloeg("Senioren");
    };
    AploegComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-aploeg',
            template: __webpack_require__("../../../../../src/app/senioren/aploeg/aploeg.component.html"),
            styles: [__webpack_require__("../../../../../src/app/senioren/aploeg/aploeg.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_ploegen_ploegen_service__["a" /* PloegenService */], __WEBPACK_IMPORTED_MODULE_2__api_wedstrijden_wedstrijd_service__["a" /* WedstrijdService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["a" /* BsModalService */], __WEBPACK_IMPORTED_MODULE_6__api_sponsor_sponsor_service__["a" /* SponsorService */]])
    ], AploegComponent);
    return AploegComponent;
}());



/***/ }),

/***/ "../../../../../src/app/senioren/senioren.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-tabs\">\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/senioren/aploeg\">A-ploeg</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\"  routerLinkActive=\"active\" routerLink=\"/senioren/zondagsreserven\">Zondagsreserven</a>\n  </li>\n  <li class=\"nav-item ml-auto\">\n    <a class=\"float-right text-dark\" routerLink=\"/jeugd\">Jeugd</a>\n  </li>\n</ul>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/senioren/senioren.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/senioren/senioren.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SeniorenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SeniorenComponent = /** @class */ (function () {
    function SeniorenComponent() {
    }
    SeniorenComponent.prototype.ngOnInit = function () {
    };
    SeniorenComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-senioren',
            template: __webpack_require__("../../../../../src/app/senioren/senioren.component.html"),
            styles: [__webpack_require__("../../../../../src/app/senioren/senioren.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SeniorenComponent);
    return SeniorenComponent;
}());



/***/ }),

/***/ "../../../../../src/app/senioren/zondagsreserven/zondagsreserven.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!ploeg\">\n  <h3 class=\"text-center text-dark\">A-ploeg</h3>\n  <p class=\"lead mb-5 text-center text-primary\">\n    Voorlopig is er geen verdere info beschikbaar. KSK is volop bezig met de opbouw van de ploeg.\n  </p>\n</div>\n<div *ngIf=\"ploeg\">\n\n  <div class=\"row justify-content-center pt-4\">\n    <div class=\"col-12 col-lg-10 \">\n      <h2 class=\"text-dark jumbotron text-center display-4 font-underline\">{{ploegNaam}}</h2>\n      <div class=\"border-info\">\n        <div class=\"row align-items-center\">\n          <div class=\"col-12 col-md-8 col-lg-12 text-center col-xl-8 justify-content-center align-self-center\">\n            <img *ngIf=\"ploeg.fotoUrl\" [src]=\"ploeg.fotoUrl\" alt=\"\" class=\"img-fluid rounded border border-primary\">\n            <h2 *ngIf=\"!ploeg.fotoUrl\" class=\"text-center\">Geen foto beschikbaar</h2>\n            <!-- notice the \"circle\" class -->\n          </div>\n          <div class=\"col-12 col-md-4 col-lg-12 col-xl-4\">\n\n            <ul class=\"list-group\">\n              <li class=\"list-group-item\"><strong>Trainer </strong><br />{{ploeg.trainer_1}}</li>\n              <li class=\"list-group-item\"><strong>Hulptrainer </strong><br />{{ploeg.trainer_2}}</li>\n            </ul>\n            <div class=\"card mt-3\" *ngIf=\"sponsor\">\n              <img class=\"card-img-top\" [src]=\"sponsor.fotoUrl\" alt=\"{{sponsor.naam}}\">\n              <div class=\"card-body\">\n                <h5 class=\"card-title text-primary text-center\">{{sponsor.naam}}</h5>\n                <h6 class=\"text-center\" *ngIf=\"sponsor.slogan == ''\"><small class=\"text-muted text-hide\" >Geen slogan</small></h6>\n                <h6 class=\"text-center\" *ngIf=\"sponsor.slogan != ''\"><small class=\"text-muted\" >{{sponsor.slogan}}</small></h6>\n                <div class=\"row\">\n                  <div class=\"col text-center\" *ngIf=\"sponsor.website != ''\">\n                      <a class=\"text-primary\" [href]=\"sponsor.website\"><i class=\"fa fa-globe\" aria-hidden=\"true\"></i></a>\n                  </div>\n                  <div class=\"col text-center\" *ngIf=\"sponsor.email\">\n                        <a class=\"text-primary\" [href]=\"'mailto:' + sponsor.email\"><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i></a>\n                  </div>\n                  <div class=\"col text-center\" *ngIf=\"sponsor.telnr\">\n                    <a class=\"text-primary\" [href]=\"'tel:'+ sponsor.telnr\"><i class=\"fa fa-phone\" aria-hidden=\"true\"></i></a>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row mt-4\">\n          <div class=\"col-12 col-xl-6 justify-content-center\" *ngIf=\"games.length > 0\">\n            <h3 class=\"display-4 text-primary text-center mb-3\">Wedstrijden</h3>\n            <ul  class=\"list-group\">\n              <li *ngFor=\"let wedstrijd of games; let even = even; let odd = odd\" width=\"100%\" [ngClass]=\"{'bg-accent': even, 'bg-ksk': odd}\" routerLink=\"/senioren/aploeg\" fragment=\"gameSection\" class=\"list-group-item hoverable hoverItem\" (click)=\"viewMatchReport(wedstrijd)\">\n\n                    <p *ngIf=\"wedstrijd.thuisSpelend == 1\" class=\"text-dark lead\">KSK - {{wedstrijd.tegenstander}}<small class=\"float-right\">{{wedstrijd.datum | amDateFormat:\"DD/MM/YYYY\"}}</small></p>\n                    <h6 *ngIf=\"wedstrijd.thuisSpelend == 1\" class=\"text-muted\">{{wedstrijd.doelpuntenKSK}} - {{wedstrijd.doelpuntenTegenstander}}</h6>\n                    <p *ngIf=\"wedstrijd.thuisSpelend == 0\" class=\"text-dark lead\">{{wedstrijd.tegenstander}} - KSK<small class=\"float-right\">{{wedstrijd.datum | amDateFormat:\"DD/MM/YYYY\"}}</small></p>\n                    <h6 *ngIf=\"wedstrijd.thuisSpelend == 0\" class=\"text-muted\">{{wedstrijd.doelpuntenTegenstander}} - {{wedstrijd.doelpuntenKSK}}</h6>\n              </li>\n\n            </ul>\n          </div>\n          <div class=\"col-12 col-xl-6 justify-content-center\" *ngIf=\"spelers.length > 0\">\n            <h4 class=\"text-primary display-4 text-center mb-3\">Spelers</h4>\n            <ul  class=\"list-group  align-items-center\">\n              <li *ngFor=\"let speler of spelers\" (click)=\"showPlayerDetail(speler)\" style=\"width:100%\" class=\"list-group-item align-self-center\">\n                <div class=\"media\">\n                  <img class=\"mr-3 img-fluid rounded-circle\" width=\"65\" [src]=\"speler.fotoUrl\" alt=\"\">\n                  <div class=\"media-body align-self-center\">\n                    <h5 class=\"mt-0\">{{speler.voornaam}} {{speler.naam}}</h5>\n                  </div>\n                </div>\n              </li>\n\n            </ul>\n          </div>\n        </div>\n        <div class=\"row justify-content-center mt-3 border p-3 border-secondary rounded bg-ksk\" id=\"gameSection\" *ngIf=\"game\">\n          <div class=\"col-12\">\n            <p *ngIf=\"game.thuisSpelend == 1\" class=\"text-dark display-4 text-center\">KSK - {{game.tegenstander}}</p>\n            <h4 *ngIf=\"game.thuisSpelend == 1\" class=\"text-muted text-center\">{{game.doelpuntenKSK}} - {{game.doelpuntenTegenstander}}<small class=\"float-right\">{{game.datum | amDateFormat:\"DD/MM/YYYY\"}}</small></h4>\n            <p *ngIf=\"game.thuisSpelend == 0\" class=\"text-dark display-4 text-center\">{{game.tegenstander}} - KSK</p>\n            <h4 *ngIf=\"game.thuisSpelend == 0\" class=\"text-muted text-center\">{{game.doelpuntenTegenstander}} - {{game.doelpuntenKSK}}<small class=\"float-right\">{{game.datum | amDateFormat:\"DD/MM/YYYY\"}}</small></h4>\n            <div [froalaView]=\"game.verslag\"></div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/senioren/zondagsreserven/zondagsreserven.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/senioren/zondagsreserven/zondagsreserven.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZondagsreservenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_ploegen_ploegen_service__ = __webpack_require__("../../../../../src/app/api/ploegen/ploegen.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_wedstrijden_wedstrijd_service__ = __webpack_require__("../../../../../src/app/api/wedstrijden/wedstrijd.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helpers_player_detail_player_detail_component__ = __webpack_require__("../../../../../src/app/helpers/player-detail/player-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__api_sponsor_sponsor_service__ = __webpack_require__("../../../../../src/app/api/sponsor/sponsor.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ZondagsreservenComponent = /** @class */ (function () {
    function ZondagsreservenComponent(ploegSvc, gameSvc, r, modalService, sponsorSvc) {
        this.ploegSvc = ploegSvc;
        this.gameSvc = gameSvc;
        this.r = r;
        this.modalService = modalService;
        this.sponsorSvc = sponsorSvc;
        this.spelers = [];
        this.games = [];
        this.route = r;
    }
    ZondagsreservenComponent.prototype.showPlayerDetail = function (sp) {
        var initialState = {
            player: sp
        };
        this.bsModalRef = this.modalService.show(__WEBPACK_IMPORTED_MODULE_5__helpers_player_detail_player_detail_component__["a" /* PlayerDetailComponent */], { initialState: initialState });
        this.bsModalRef.content.closeBtnName = 'Close';
        this.bsModalRef.content.player = sp;
    };
    ZondagsreservenComponent.prototype.viewMatchReport = function (wedstrijd) {
        this.game = wedstrijd;
        this.route.fragment
            .subscribe(function (fragment) {
            if (fragment) {
                var element = document.getElementById(fragment);
                if (element) {
                    element.scrollIntoView();
                }
            }
        });
    };
    ZondagsreservenComponent.prototype.isEven = function (n) {
        return n % 2 == 0;
    };
    ZondagsreservenComponent.prototype.loadPloeg = function (naam) {
        var _this = this;
        this.ploegSvc.loadPloegByName(naam).subscribe(function (team) {
            console.log(team);
            _this.ploeg = team;
            if (_this.ploeg) {
                _this.ploegSvc.getSpelersByTeam(_this.ploeg.ploeg_id).subscribe(function (players) {
                    console.log(players);
                    _this.spelers = players;
                });
                _this.ploegSvc.getGamesByTeam(_this.ploeg.ploeg_id).subscribe(function (wedstrijden) {
                    console.log(wedstrijden);
                    _this.games = wedstrijden;
                });
                _this.sponsorSvc.getSponsor(_this.ploeg.sponsor_id).subscribe(function (sponsor) {
                    _this.sponsor = sponsor;
                });
            }
        });
    };
    ZondagsreservenComponent.prototype.ngOnInit = function () {
        this.ploegNaam = "Zondagsreserven";
        this.loadPloeg(this.ploegNaam);
    };
    ZondagsreservenComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-zondagsreserven',
            template: __webpack_require__("../../../../../src/app/senioren/zondagsreserven/zondagsreserven.component.html"),
            styles: [__webpack_require__("../../../../../src/app/senioren/zondagsreserven/zondagsreserven.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_ploegen_ploegen_service__["a" /* PloegenService */], __WEBPACK_IMPORTED_MODULE_2__api_wedstrijden_wedstrijd_service__["a" /* WedstrijdService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["a" /* BsModalService */], __WEBPACK_IMPORTED_MODULE_6__api_sponsor_sponsor_service__["a" /* SponsorService */]])
    ], ZondagsreservenComponent);
    return ZondagsreservenComponent;
}());



/***/ }),

/***/ "../../../../../src/app/sponsors/sponsors.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\" jumbotron bg-accent mt-4\">\n  <h1 class=\"display-4 text-primary\">Sponsors</h1>\n  <p class=\"lead text-primary\">De bouwstenen voor een toegankelijke vereniging</p>\n  <hr class=\"my-4\">\n  <p class=\"lead text-dark\">Sponsoring stelt ons in staat om KSK Klinge als een open en toegankelijke vereniging te behouden.\nDe middelen die via sponsoring ter beschikking worden gesteld, zetten we in voor zaken als het onderhoud van de terreinen, de aankoop van materiaal voor de (jeugd)ploegen, het organiseren van sportieve en familie-evenementen, enzovoort...</p>\n  <p class=\"text-primary\">\n    De onderstaande bedrijven en zelfstandigen steunen KSK Klinge. Ben je zelf ook geïntresseerd, aarzel dan niet om ons te contacteren!\n\n    </p>\n    <a class=\"btn btn-primary display-block\" href=\"mailto:secretariaatkskklinge@telenet.be\" role=\"button\">Meer info</a>\n\n</div>\n\n<div class=\"card-group row justify-content-center no-gutters\">\n  <div class=\"col-md-3 mt-3 col-xs-12\" *ngFor=\"let sponsor of sponsors\">\n    <div class=\"card h-100 \">\n      <img class=\"card-img-top\" [src]=\"sponsor.fotoUrl\" alt=\"{{sponsor.naam}}\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title text-primary text-center\">{{sponsor.naam}}</h5>\n        <h6 class=\"text-center\" *ngIf=\"sponsor.slogan == ''\"><small class=\"text-muted text-hide\" >Geen slogan</small></h6>\n        <h6 class=\"text-center\" *ngIf=\"sponsor.slogan != ''\"><small class=\"text-muted\" >{{sponsor.slogan}}</small></h6>\n        <div class=\"row\">\n          <div class=\"col text-center\" *ngIf=\"sponsor.website != ''\">\n              <a class=\"text-primary\" [href]=\"sponsor.website\"><i class=\"fa fa-globe\" aria-hidden=\"true\"></i></a>\n          </div>\n          <div class=\"col text-center\" *ngIf=\"sponsor.email\">\n                <a class=\"text-primary\" [href]=\"'mailto:' + sponsor.email\"><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i></a>\n          </div>\n          <div class=\"col text-center\" *ngIf=\"sponsor.telnr\">\n            <a class=\"text-primary\" [href]=\"'tel:'+ sponsor.telnr\"><i class=\"fa fa-phone\" aria-hidden=\"true\"></i></a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/sponsors/sponsors.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sponsors/sponsors.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SponsorsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_sponsor_sponsor_service__ = __webpack_require__("../../../../../src/app/api/sponsor/sponsor.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SponsorsComponent = /** @class */ (function () {
    function SponsorsComponent(sponsorSVC) {
        this.sponsorSVC = sponsorSVC;
    }
    SponsorsComponent.prototype.loadSponsors = function () {
        var _this = this;
        this.sponsorSVC.getSponsors().subscribe(function (sponsors) {
            _this.sponsors = sponsors;
        }, function (err) {
            console.log(err);
        });
    };
    SponsorsComponent.prototype.ngOnInit = function () {
        this.loadSponsors();
    };
    SponsorsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sponsors',
            template: __webpack_require__("../../../../../src/app/sponsors/sponsors.component.html"),
            styles: [__webpack_require__("../../../../../src/app/sponsors/sponsors.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_sponsor_sponsor_service__["a" /* SponsorService */]])
    ], SponsorsComponent);
    return SponsorsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__("../../../../../src/app/app-settings.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
        this.authURL = __WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].API_ENDPOINT + '/login';
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
        this.expireDate = new Date(currentUser && currentUser.expires);
    }
    AuthenticationService.prototype.tokenIsNotExpired = function () {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var expireDate = currentUser && currentUser.expires;
        if (expireDate > Date.now() / 1000) {
            return true;
        }
        else {
            return false;
        }
    };
    AuthenticationService.prototype.login = function (username, password) {
        var _this = this;
        var bodyString = JSON.stringify({ username: username, password: password }); // Stringify payload
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers }); // Create a request option
        return this.http.post(this.authURL, bodyString, options)
            .map(function (response) {
            // login successful if there's a jwt token in the response
            console.log(response.json());
            var token = response.json() && response.json().token;
            var expire = response.json() && response.json().expires;
            if (token) {
                // set token property
                _this.token = token;
                // store username and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token, expires: expire }));
                // return true to indicate successful login
                return true;
            }
            else {
                // return false to indicate failed login
                return false;
            }
        });
    };
    AuthenticationService.prototype.logout = function () {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
    };
    AuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false,
    apiUrl: 'http://kskklingeapi:8080/'
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__("../../../../../src/polyfills.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ "../../../../../src/polyfills.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__("../../../../core-js/es6/symbol.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__("../../../../core-js/es6/object.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__("../../../../core-js/es6/function.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__("../../../../core-js/es6/parse-int.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__("../../../../core-js/es6/parse-float.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__("../../../../core-js/es6/number.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__("../../../../core-js/es6/math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__("../../../../core-js/es6/string.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__("../../../../core-js/es6/date.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__("../../../../core-js/es6/array.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__("../../../../core-js/es6/regexp.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__("../../../../core-js/es6/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__("../../../../core-js/es6/set.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__("../../../../core-js/es6/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__("../../../../core-js/es7/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__("../../../../zone.js/dist/zone.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_web_animations_js__ = __webpack_require__("../../../../web-animations-js/web-animations.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_web_animations_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_web_animations_js__);
// This file includes polyfills needed by Angular and is loaded before
// the app. You can add your own extra polyfills to this file.




















/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./mt": "../../../../moment/locale/mt.js",
	"./mt.js": "../../../../moment/locale/mt.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
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
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
