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


// enums
enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON }

interface Resource<T> {
    uid: number,
    resourceType: ResourceType,
    data: T;
}

const docOne: Resource<object> = {
    uid: 1,
    resourceType: ResourceType.BOOK,
    data: { title: 'abc' }
};

const docTwo: Resource<object> = {
    uid: 2,
    resourceType: ResourceType.DIRECTOR,
    data: { director: 'Spielberg' }
};



