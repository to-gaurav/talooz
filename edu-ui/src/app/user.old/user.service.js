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
var data_1 = require("../common/data");
var Observable_1 = require("rxjs/Observable");
var http_1 = require("@angular/common/http");
require("rxjs/add/operator/map");
var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getCountries = function () {
        return Promise.resolve(data_1.COUNTRIES);
    };
    /*getUser(userId: string) {
        return this.http.get("http://localhost:1000/user/"+userId).map((response: Response) => <User>response.json());
    }*/
    /*getUser(userId: string) {
        this.http.get<MyJsonData>('http://localhost:9003/batch', {observe: 'response'}).subscribe(resp => {
            console.log("Test response ================== "+resp.body._embedded);
            //return resp.body.username;
        });
    
    }*/
    UserService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.log(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.HttpClient])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map