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
var fee_model_1 = require("./fee.model");
var common_service_1 = require("../common/common.service");
var fee_service_1 = require("./fee.service");
var router_1 = require("@angular/router");
var FeeParticularComponent = (function () {
    function FeeParticularComponent(commonService, feeService, route, router) {
        this.commonService = commonService;
        this.feeService = feeService;
        this.route = route;
        this.router = router;
        this.model = new fee_model_1.FeeParticular();
        this.particularBatchMappings = [];
        this.submitted = false;
    }
    FeeParticularComponent.prototype.ngOnInit = function () {
        this.getAllFeeCategories();
        var id = this.route.snapshot.paramMap.get('id');
        this.model.feeCategoryId = id;
        this.getBatchesByFeeCategoryId(this.model.feeCategoryId);
    };
    //Fetch all fee category
    FeeParticularComponent.prototype.getAllFeeCategories = function () {
        var _this = this;
        this.feeService.getFeeCategories().subscribe(function (data) {
            _this.feeCategories = data;
        });
    };
    FeeParticularComponent.prototype.getBatchesByFeeCategoryId = function (paymentId) {
        var _this = this;
        if (paymentId == null) {
            this.model.feeCategoryId = document.getElementById('feeCategoryId').value;
        }
        this.feeService.getBatchesByFeeCategoryId(this.model.feeCategoryId).subscribe(function (data) {
            _this.batchMappings = data;
        });
    };
    FeeParticularComponent.prototype.checkedBatches = function (val) {
        if (document.getElementById(val).checked === true) {
            var particularBatchMapping = new fee_model_1.ParticularBatchMapping();
            particularBatchMapping.batchId = val;
            particularBatchMapping.batchName = document.getElementById(val).value;
            particularBatchMapping.feeCategoryId = this.model.feeCategoryId;
            this.particularBatchMappings.push(particularBatchMapping);
        }
        else if (document.getElementById(val).checked === false) {
            var indexx = this.particularBatchMappings.indexOf(val);
            this.particularBatchMappings.splice(indexx, 1);
        }
    };
    FeeParticularComponent.prototype.onSubmit = function () {
        this.submitted = true;
        this.model.particularBatchMapping = this.particularBatchMappings;
        console.log(JSON.stringify(this.model));
        this.feeService.createFeeParticular(this.model);
        this.reset();
    };
    FeeParticularComponent.prototype.redirectToFeeCollection = function () {
        this.router.navigate(['/feeCollection']);
    };
    FeeParticularComponent.prototype.reset = function () {
        this.model.name = null;
        this.model.description = null;
        this.model.amount = null;
    };
    return FeeParticularComponent;
}());
__decorate([
    core_1.Input('feeCategoryId'),
    __metadata("design:type", String)
], FeeParticularComponent.prototype, "feeCategoryId", void 0);
FeeParticularComponent = __decorate([
    core_1.Component({
        selector: 'fee-particular-app',
        templateUrl: './fee.particular.view.html',
    }),
    __metadata("design:paramtypes", [common_service_1.CommonService,
        fee_service_1.FeeService,
        router_1.ActivatedRoute,
        router_1.Router])
], FeeParticularComponent);
exports.FeeParticularComponent = FeeParticularComponent;
//# sourceMappingURL=fee.particular.component.js.map