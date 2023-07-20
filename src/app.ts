import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

// let docOne: HasFormatter;
// let docTwo: HasFormatter;

// docOne = new Invoice('yoshi', 'web work', 250);
// docTwo = new Payment('mario', 'pluming work', 200);

// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);

// console.log(docs);


const form: HTMLFormElement = document.querySelector('.new-item-form')!;

// inputs
const type: HTMLSelectElement = document.querySelector('#type')!;
const toFrom: HTMLInputElement = document.querySelector('#tofrom')!;
const details: HTMLInputElement = document.querySelector('#details')!;
const amount: HTMLInputElement = document.querySelector('#amount')!;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let doc: HasFormatter;

    if (type.value = 'invoice') {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    } else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }

    console.log(doc);

});

// classes
// const invOne = new Invoice('Emil', 'cinema tickets', 25);
// const invTwo = new Invoice('Gina', 'trip to Paris', 1500);

// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);

// invoices.forEach(inv => {
//     console.log(inv.client, inv.amount, inv.format());

// });

// interfaces
interface IsPerson {
    name: string;
    age: number;
    speak(a: string): void;
    spend(a: number): number;
}

const me: IsPerson = {
    name: 'shaun',
    age: 30,
    speak(text: string): void {
        console.log(text);
    },
    spend(amount: number): number {
        console.log('I spent', amount);
        return amount;
    }
};