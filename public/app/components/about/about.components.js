"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
// all
var ng2_sui_1 = require('../../../node_modules/ng2-semantic-ui-directives/ng2-sui');
var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent = __decorate([
        core_1.Component({
            selector: 'about-container',
            templateUrl: './app/components/about/template_about_container.html',
            directives: [router_1.ROUTER_DIRECTIVES, ng2_sui_1.UISEMANTIC_ALL]
        }), 
        __metadata('design:paramtypes', [])
    ], AboutComponent);
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;
var AboutHomeComponent = (function () {
    function AboutHomeComponent() {
    }
    AboutHomeComponent = __decorate([
        core_1.Component({
            selector: 'about-home',
            templateUrl: './app/components/about/template_home.html',
            directives: [ng2_sui_1.UISEMANTIC_ALL]
        }), 
        __metadata('design:paramtypes', [])
    ], AboutHomeComponent);
    return AboutHomeComponent;
}());
exports.AboutHomeComponent = AboutHomeComponent;
var AboutItemComponent = (function () {
    function AboutItemComponent(activatedRoute) {
        this.activatedRoute = activatedRoute;
    }
    AboutItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.paramsSub = this.activatedRoute.params.subscribe(function (params) { return _this.id = +params['id']; });
    };
    AboutItemComponent.prototype.ngOnDestroy = function () {
        this.paramsSub.unsubscribe();
    };
    AboutItemComponent = __decorate([
        core_1.Component({
            selector: 'about-item',
            templateUrl: './app/components/about/template_item.html',
            directives: [ng2_sui_1.UISEMANTIC_ALL]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute])
    ], AboutItemComponent);
    return AboutItemComponent;
}());
exports.AboutItemComponent = AboutItemComponent;
//# sourceMappingURL=about.components.js.map