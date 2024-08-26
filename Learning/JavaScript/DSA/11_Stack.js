// Last in, First out

let stack = [];
let currentSize = stack.length;
let max = 5;

function push(newVal) {
  if (currentSize < max) {
    stack[currentSize] = newVal;
    currentSize++;
    console.log(newVal, "Added to Stack =", stack);
  } else {
    console.log("Stack is Full, you cannot Add ", newVal);
  }
}
function remove() {
  if (currentSize > 0) {
    let temp = stack[currentSize - 1];
    stack.length--;
    currentSize--;
    console.log(temp, "Removed from Stack =", stack);
  } else {
    console.log("Stack is Empty");
  }
}

push(25);
push(51);
push(42);

remove();
remove();

push(99);
push(64);

remove();

push(80);
push(23);
push(55);

// Over Max Length (Whold not be added into Stack)
push(37);
push(72);

remove();
remove();
remove();
remove();
remove();

// Already Empty
remove();
remove();

console.log("Stack = ", stack);
