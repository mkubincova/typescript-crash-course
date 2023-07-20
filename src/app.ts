import { Invoice } from "./classes/Invoice.js";

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
const invOne = new Invoice('Emil', 'cinema tickets', 25);
const invTwo = new Invoice('Gina', 'trip to Paris', 1500);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());

});
