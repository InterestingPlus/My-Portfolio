function sort(arr) {
  let newArr = arr;
  for (let j = 0; j < newArr.length; j++) {
    for (let i = 0; i < newArr.length - 1; i++) {
      if (newArr[i] > newArr[i + 1]) {
        let temp = newArr[i];
        newArr[i] = newArr[i + 1];
        newArr[i + 1] = temp;
      }
    }
  }
  return newArr;
}

let myArr = [5, 2, 6, 4, 8, 3];
let myArr1 = [156, 487, 31, 513, 645, 201, 0, 233];

console.log(sort(myArr));
console.table(sort(myArr1));
