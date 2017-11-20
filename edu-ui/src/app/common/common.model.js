"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import {Entity} from "app/user/profile/entity.model";
var Relation;
(function (Relation) {
    Relation[Relation["FATHER"] = 0] = "FATHER";
    Relation[Relation["MOTHER"] = 1] = "MOTHER";
    Relation[Relation["GUARDIAN"] = 2] = "GUARDIAN";
})(Relation = exports.Relation || (exports.Relation = {}));
;
var PType;
(function (PType) {
    PType[PType["PHONE"] = 0] = "PHONE";
    PType[PType["MOBILE"] = 1] = "MOBILE";
    PType[PType["EMAIL"] = 2] = "EMAIL";
    PType[PType["FAX"] = 3] = "FAX";
    PType[PType["FACEBOOK"] = 4] = "FACEBOOK";
    PType[PType["TWITTER"] = 5] = "TWITTER";
})(PType = exports.PType || (exports.PType = {}));
;
var AddressType;
(function (AddressType) {
    AddressType[AddressType["HOME"] = 0] = "HOME";
    AddressType[AddressType["RESIDENTIAL"] = 1] = "RESIDENTIAL";
    AddressType[AddressType["BUSINESS"] = 2] = "BUSINESS";
    AddressType[AddressType["PERMANENT"] = 3] = "PERMANENT";
    AddressType[AddressType["RENTED"] = 4] = "RENTED";
    AddressType[AddressType["OFFICE"] = 5] = "OFFICE";
})(AddressType = exports.AddressType || (exports.AddressType = {}));
;
var Country = (function () {
    function Country() {
    }
    return Country;
}());
exports.Country = Country;
var Nationality = (function () {
    function Nationality() {
    }
    return Nationality;
}());
exports.Nationality = Nationality;
var Religion = (function () {
    function Religion() {
    }
    return Religion;
}());
exports.Religion = Religion;
var Caste = (function () {
    function Caste() {
    }
    return Caste;
}());
exports.Caste = Caste;
var Label = (function () {
    function Label() {
    }
    return Label;
}());
exports.Label = Label;
var Batch = (function () {
    function Batch() {
    }
    return Batch;
}());
exports.Batch = Batch;
var PaymentFrequency = (function () {
    function PaymentFrequency() {
    }
    return PaymentFrequency;
}());
exports.PaymentFrequency = PaymentFrequency;
var Address = (function () {
    function Address() {
    }
    return Address;
}());
exports.Address = Address;
//# sourceMappingURL=common.model.js.map