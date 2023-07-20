let greet = () => {
    console.log('hello world');
};

let greeting: Function;
greeting = () => {
    console.log('hello again');
};

// function without return
const add = (a: number, b: number, c: number | string = 10): void => {
    console.log(a + b);
    console.log(c);
};

// function which returns something (type can be inferred)
const minus = (a: number, b: number): number => {
    return a + b;
};

let result = minus(10, 7);

// aliases
type StringOrNum = string | number;

type User = {
    name: string,
    uid: StringOrNum;
};

const logDetails = (uid: StringOrNum, item: string) => {
    console.log(`${item} has a uid of ${uid}`);
};
const greetAgain = (user: User) => {
    console.log(`${user.name} says hello`);
};

// function signature
let greetTwice: (a: string, b: string) => void;
greetTwice = (name: string, greeting: string) => {
    console.log(`${name} says ${greeting}`);
    console.log(`${name} says ${greeting}`);
};

let calc: (a: number, b: number, c: string) => number;
calc = (numOne: number, numTwo: number, action: string) => {
    if (action === 'add') return numOne + numTwo;
    return numOne - numTwo;
};

type Person = {
    name: string,
    age: number;
};

let logDetail: (obj: Person) => void;
logDetail = (ninja: Person) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);

};