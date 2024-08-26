// Call Stack
function colors() {
  let data = 20;
  console.log(data);
}
function days() {
  colors();
}
function fruits() {
  days();
}
function topFunction() {
  fruits();
}
topFunction();

// Head & Tail Recursion
function test(x) {
  console.log(x); // Head Recursion
  if (x > 0) {
    test(x - 1);
  }
  console.log(x); // Tail Recursion
}
test(5);
