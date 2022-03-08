class Invoice {
    companyProfile: string;

    constructor(public name, public city, public state) {
        this.companyProfile = name + "-" + city + "-" + state;
    }
}

const googleInvoice = new Invoice("Google", "Bangalore", "KA");

console.log(googleInvoice.companyProfile);