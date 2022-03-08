interface InvoiceFunc {
    (name: string, total: number): void;
}

let googleInvoice: InvoiceFunc;

googleInvoice = function (n, t) {
    console.log(n);
    console.log(t);
}

googleInvoice("google", 500);