class Report {
    companyProfile: string;

    constructor(public name: string) {
        this.companyProfile = name;
    }
}

class Invoices extends Report {
    constructor(public name: string, public city: string, public state: string) {
        super(name);
    }

    addressDetails() {
        return this.city + " - " + this.state;
    }
}

const googleInvoices = new Invoices("Google", "Madurai", "TamilNadu");
console.log(googleInvoices.companyProfile);