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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var FeeService = (function () {
    function FeeService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    FeeService.prototype.getFeeCategories = function () {
        return this.http.get('http://localhost:9002/fee').map(function (res) { return res.json(); }).map(function (data) {
            console.log(data);
            return data;
        });
    };
    FeeService.prototype.createFeeCategory = function (feeCategory) {
        return this.http
            .post("http://localhost:9002/fee", JSON.stringify(feeCategory), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    FeeService.prototype.getBatchesByFeeCategoryId = function (paymentId) {
        return this.http.get('http://localhost:9002/fee/batches/' + paymentId).
            map(function (res) { return res.json(); }).map(function (data) {
            console.log(data);
            return data;
        });
    };
    FeeService.prototype.createFeeParticular = function (feeParticular) {
        return this.http
            .post("http://localhost:9002/fee/particular", JSON.stringify(feeParticular), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    FeeService.prototype.createFeeCollection = function (feeCollection) {
        return this.http
            .post("http://localhost:9002/feeCollections", JSON.stringify(feeCollection), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    FeeService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    return FeeService;
}());
FeeService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], FeeService);
exports.FeeService = FeeService;
//# sourceMappingURL=fee.service.js.map