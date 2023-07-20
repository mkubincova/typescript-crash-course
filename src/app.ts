// const anchor = document.querySelector('a')!;
// const form = document.querySelector('form')!
// const formAgain = document.querySelector('.new-item-form') as HTMLFormElement;

const form: HTMLFormElement = document.querySelector('.new-item-form')!;

// inputs
const type: HTMLSelectElement = document.querySelector('#type')!;
const toFrom: HTMLInputElement = document.querySelector('#tofrom')!;
const details: HTMLInputElement = document.querySelector('#details')!;
const amount: HTMLInputElement = document.querySelector('#amount')!;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    console.log(
        type.value,
        toFrom.value,
        details.value,
        amount.valueAsNumber
    );
});

// classes
class Invoice {
    // readonly client: string;
    // private details: string;
    // public amount: number;

    // constructor(c: string, d: string, a: number) {
    //     this.client = c;
    //     this.details = d;
    //     this.amount = a;
    // }
    constructor(
        readonly client: string,
        private details: string,
        public amount: number,
    ) { }

    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}

const invOne = new Invoice('Emil', 'cinema tickets', 25);
const invTwo = new Invoice('Gina', 'trip to Paris', 1500);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());

});
