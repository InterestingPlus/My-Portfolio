console.log("Math Object ", Math);
console.log("Abs ", Math.abs(-4));

console.log("Round ", Math.round(4.6));
console.log("Ceil ", Math.ceil(4.2));
console.log("Floor ", Math.floor(4.9));

console.log("Min ", Math.min(4, 3, 6, 8));
console.log("Max ", Math.max(4, 3, 6, 8));

console.log("Random ", Math.random());
console.log("Random 1 to 10 ", Math.random() * 10 + 1);
console.log("Random ", Math.floor(Math.random() * 10 + 1));

const min = 10;
const max = 20;

console.log(
  "10 >= Random <= 20 ",
  Math.floor(Math.random() * (max - min + 1) + min)
);
