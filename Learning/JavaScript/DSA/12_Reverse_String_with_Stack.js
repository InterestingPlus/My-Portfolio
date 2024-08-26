let stack = [];
let currentSize = stack.length;

function push(newVal) {
  stack[currentSize] = newVal;
  currentSize++;
  console.log(newVal, "Added to Stack =", stack);
}
function pop() {
  if (currentSize > 0) {
    let temp = stack[currentSize - 1];
    stack.length--;
    currentSize--;
    console.log(temp, "Removed from Stack =", stack);
    return temp;
  } else {
    console.log("Stack is Empty");
  }
}

function reverseStr(arr) {
  arr.forEach((ele) => {
    push(ele);
  });
  for (let i = 0; i < arr.length; i++) {
    arr[i] = pop();
  }
}

let str = "Jatin";
str = str.toLowerCase().split("");
reverseStr(str);

console.log(str);
