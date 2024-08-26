const score = 400;

const balance = new Number(100);
console.log(score, balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

let otherNumber = 23.896;
console.log(otherNumber.toPrecision(3));
otherNumber = 123.896;
console.log(otherNumber.toPrecision(3));

const hundreds = 1000000;
console.log(hundreds.toLocaleString("en-US"), hundreds.toLocaleString("en-IN"));
