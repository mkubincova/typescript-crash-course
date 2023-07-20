import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

// form instance
const form: HTMLFormElement = document.querySelector('.new-item-form')!;

// inputs
const type: HTMLSelectElement = document.querySelector('#type')!;
const toFrom: HTMLInputElement = document.querySelector('#tofrom')!;
const details: HTMLInputElement = document.querySelector('#details')!;
const amount: HTMLInputElement = document.querySelector('#amount')!;

// list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let doc: HasFormatter;
    console.log(type);

    if (type.value = 'invoice') {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    } else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }

    list.render(doc, type.value, 'end');
});


// generics
const addUID = <T extends { name: string; }>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return { ...obj, uid };
};

let docOne = addUID({ name: 'yoshi', age: 40 });

interface Resource<T> {
    uid: number,
    resourceName: string,
    data: T;
}

const docThree: Resource<object> = {
    uid: 1,
    resourceName: 'person',
    data: { text: 'dafsdf' }
};

const docFour: Resource<string[]> = {
    uid: 2,
    resourceName: 'person',
    data: ['dafsdf']
};