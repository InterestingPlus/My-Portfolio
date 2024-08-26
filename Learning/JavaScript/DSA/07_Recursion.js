function basicRecursion(x) {
  console.log(x);
  if (x < 3) {
    basicRecursion(x + 1);
  }
}
let value = 0;
basicRecursion(value);

let ans = 1;
function factorial(num) {
  if (num == 0) {
    return 1;
  }
  return num * factorial(num - 1);
}
console.log(factorial(5))
