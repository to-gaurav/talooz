"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
//import { UserComponent }   from './user/user.component';
var home_component_1 = require("./home/home.component");
var user_component_1 = require("./user/user.component");
var fee_category_component_1 = require("./finance/fee.category.component");
var fee_particular_component_1 = require("./finance/fee.particular.component");
var fee_collection_component_1 = require("./finance/fee.collection.component");
var routes = [
    //{ path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'signup', component: user_component_1.UserComponent },
    { path: 'feeCategory', component: fee_category_component_1.FeeCategoryComponent },
    { path: 'feeParticular/:id', component: fee_particular_component_1.FeeParticularComponent },
    { path: 'feeCollection', component: fee_collection_component_1.FeeCollectionComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map