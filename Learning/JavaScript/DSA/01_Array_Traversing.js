function arrayTraversing(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`Array ${i}th Index is ${arr[i]}`);
  }
}

let data = [9, 45, 2, 8, 45, 23, 7, 26, 43, 5, 14, 28];
let index = 3;

console.log(data[index]);

arrayTraversing(data)