var Invoice = /** @class */ (function () {
    function Invoice(name, city, state) {
        this.name = name;
        this.city = city;
        this.state = state;
        this.companyProfile = name + "-" + city + "-" + state;
    }
    return Invoice;
}());
var googleInvoice = new Invoice("Google", "Bangalore", "KA");
console.log(googleInvoice.companyProfile);
//# sourceMappingURL=classes.js.map