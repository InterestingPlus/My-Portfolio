// ? Premitive DataTypes

// Number => 2 to Power 53
// BigInt
// String => ""
// Boolean => True / False
// Null => Standalone Value (Object)
// Undefined =>
// Symbol => Unique

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail; // undefined

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);

const bigNumber = 3254587453668445221359n;
const bigNumByInt = BigInt(3254587453668445221359);

//

// ? Non-Premitive DataTypes

// Object {}
// Array []
// Function ()

const heros = ["ironman", "spiderman", "hulk"];

let myObj = {
  name: "Jatin",
  age: 18,
};

function myFunction() {
  console.log("Hello World", typeof score);
}
myFunction();

// ******************************************

// Stack (Primitive), Heap (Non-Primitive)

let myYouTubeName = "INTERESTING Plus";

let anotherName = myYouTubeName;
console.log(anotherName); // "INTERESTING Plus"
anotherName = "Jatin Poriya";

console.log(anotherName); // "Jatin Poriya"
console.log(myYouTubeName); // "INTERESTING Plus"

//

let userOne = {
  email: "jatin@google.com",
  upi: "jatin@oksbi",
};

let userTwo = userOne;

userTwo.email = "interesting@plus.com";

console.log(userOne.email); // "interesting@plus.com"
console.log(userTwo.email); // "interesting@plus.com"
