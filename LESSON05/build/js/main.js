"use strict";
//convert ot more or less specyfic
let a = "hello";
let b = a; // less specyfic type
let c = a; // more specific
let d = "word";
let e = "word";
const addOrConcat = (a, b, c) => {
    if (c === "add") {
        return a + b;
    }
    return "" + a + b;
};
let myVal = addOrConcat(2, 2, 'concat');
// Be careful! TS sees no problem - but a string is returned
let nextVal = addOrConcat(2, 2, 'concat');
// 10 as string 
10; //avoid 
// the DOM 
const img = document.querySelector('img'); // non null assortion
const myImg = document.getElementById('img'); // non null assortion
const nextImg = document.getElementById('img');
img.src;
myImg.src;
