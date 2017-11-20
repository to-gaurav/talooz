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
var user_model_1 = require("./user.model");
var user_service_1 = require("./user.service");
var UserComponent = (function () {
    function UserComponent(userService) {
        this.userService = userService;
        this.model = new user_model_1.User();
        this.submitted = false;
    }
    UserComponent.prototype.getCountries = function () {
        var _this = this;
        this.userService.getCountries().then(function (countries) { return _this.countries = countries; });
        //this.userService.getCountry();
        //console.log("test =============== "+this.userService.getUser('11718'));
    };
    UserComponent.prototype.ngOnInit = function () {
        this.getCountries();
    };
    UserComponent.prototype.onSubmit = function () {
        this.submitted = true;
        console.log('Username = ' + this.model.username);
    };
    return UserComponent;
}());
UserComponent = __decorate([
    core_1.Component({
        selector: 'user-app',
        templateUrl: './user.view.html'
    }),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserComponent);
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map