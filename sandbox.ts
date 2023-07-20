// ***** INFERRED TYPES ***** //

// variables
let character = 'mario';
let age = 30;
let isBlackBelt = false;

// parameters
const circle = (diameter: number) => {
    return diameter * Math.PI;
};

// arrays
let fruits = ['apple', 'peach', 'banana'];
let numbers = [10, 20, 30, 40];
let mixed = ['apple', 10, false];

// objects
let ninja = {
    name: 'mario',
    enrolled: true,
    age: 30
};


// ***** EXPLICIT TYPES ***** //

// variables
let message: string;
let year: number;
let isLoggedIn: boolean;
let msg: any = 25;

// arrays
let ninjas: string[] = [];
let years: number[] = [];
let mix: (string | number | boolean)[] = [];
let mysteries: any[] = [];

// objects
let person: object;
let ninjaOne: {
    name: string,
    age: number,
    alive: boolean;
};
let stranger: {
    name: any,
    age: any;
};