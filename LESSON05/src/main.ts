type One = string;
type Two = string | number;
type Three = "hello";

//convert ot more or less specyfic

let a: One = "hello";
let b = a as Two; // less specyfic type
let c = a as Three; // more specific

let d = <One>"word";
let e = <string | number>"word";

const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  if (c === "add") {
    return a + b;
  }
  return "" + a + b;
};

let myVal: string = addOrConcat(2,2,'concat') as string

// Be careful! TS sees no problem - but a string is returned
let nextVal: number = addOrConcat(2,2,'concat') as number 

// 10 as string 
(10 as unknown) as string //avoid 

// the DOM 

const img = document.querySelector('img')! // non null assortion
const myImg = document.getElementById('img') as HTMLImageElement// non null assortion
const nextImg = <HTMLImageElement>document.getElementById('img')

img.src 
myImg.src


