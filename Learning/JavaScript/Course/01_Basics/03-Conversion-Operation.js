let number = "33";
console.log(Number(number)); // 33
number = "33abc";
console.log(Number(number)); // Nan
number = undefined;
console.log(Number(number)); // undefined
number = null;
console.log(Number(number)); // Nan
number = true;
console.log(Number(number)); // 1
number = false;
console.log(Number(number)); // 0

let boolean = 1;
console.log(Boolean(boolean)); // True
boolean = 0;
console.log(Boolean(boolean)); // False
boolean = "Hello";
console.log(Boolean(boolean)); // True
boolean = "";
console.log(Boolean(boolean)); // False

// ============= Operations ===============
let value = 3;
let negValue = -value;
console.log(negValue);

console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 ** 3);
console.log(2 / 3);
console.log(2 % 3);

let str1 = "Hello";
let str2 = " Jatin!";
let str3 = str1 + str2;
console.log(str3);

console.log("1" + 2); // 12
console.log(1 + "2"); // 12
console.log("1" + 2 + 2); // 122
console.log(1 + 2 + "2"); // 32

console.log(true);
console.log(+true);
console.log(+"");

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;

let gameCounter = 100;
gameCounter++; // Postfix
console.log(gameCounter);
++gameCounter; // Prefix
console.log(gameCounter);

// Link to Understand the Operator Behaviour of JS & Conversion
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
