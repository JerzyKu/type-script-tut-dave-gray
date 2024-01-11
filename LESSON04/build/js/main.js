"use strict";
// Literal type
let myName;
let userName;
userName = "dave";
// functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg("Hello");
logMsg(add(2, 3));
let subtract = function (c, d) {
    return c - d;
};
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(2, 2));
//optional parameters
const addAll = (a, b, c) => {
    //type guard
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
//default param value
const sumAll = (a, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(2, 3, 4));
logMsg(addAll(2, 3));
logMsg(sumAll(2, 3));
logMsg(sumAll(2, 3, 4));
// Rest Parameters
const total = (...nums) => {
    return nums.reduce((p, c) => p + c);
};
console.log(total(1, 2, 3, 4));
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i < 100)
            break;
    }
};
//custom type guard 
const isNumber = (value) => {
    return typeof value === "number" ? true : false;
};
// user of never type 
const numberOrString = (value) => {
    if (typeof value === "string")
        return "string";
    if (isNumber(value))
        return "number";
    return createError("This should never happend!");
};
