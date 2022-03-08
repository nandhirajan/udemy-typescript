var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Report = /** @class */ (function () {
    function Report(name) {
        this.name = name;
        this.companyProfile = name;
    }
    return Report;
}());
var Invoices = /** @class */ (function (_super) {
    __extends(Invoices, _super);
    function Invoices(name, city, state) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.city = city;
        _this.state = state;
        return _this;
    }
    Invoices.prototype.addressDetails = function () {
        return this.city + " - " + this.state;
    };
    return Invoices;
}(Report));
var googleInvoices = new Invoices("Google", "Madurai", "TamilNadu");
console.log(googleInvoices.companyProfile);
//# sourceMappingURL=inheritance.js.map