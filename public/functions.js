"use strict";
var greet = function () {
    console.log('hello world');
};
var greeting;
greeting = function () {
    console.log('hello again');
};
// function without return
var add = function (a, b, c) {
    if (c === void 0) { c = 10; }
    console.log(a + b);
    console.log(c);
};
// function which returns something (type can be inferred)
var minus = function (a, b) {
    return a + b;
};
var result = minus(10, 7);
var logDetails = function (uid, item) {
    console.log("".concat(item, " has a uid of ").concat(uid));
};
var greetAgain = function (user) {
    console.log("".concat(user.name, " says hello"));
};
// function signature
var greetTwice;
greetTwice = function (name, greeting) {
    console.log("".concat(name, " says ").concat(greeting));
    console.log("".concat(name, " says ").concat(greeting));
};
var calc;
calc = function (numOne, numTwo, action) {
    if (action === 'add')
        return numOne + numTwo;
    return numOne - numTwo;
};
var logDetail;
logDetail = function (ninja) {
    console.log("".concat(ninja.name, " is ").concat(ninja.age, " years old"));
};
