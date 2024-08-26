function MergeArrayWithForLoop(arr1, arr2) {
  let mergedArray = arr1;
  let length = mergedArray.length;

  for (let i = 0; i < arr2.length; i++) {
    mergedArray[i + length] = arr2[i];
  }

  return mergedArray;
}

function MergeArrayWithWhileLoop(arr1, arr2) {
  let mergedArray = [];
  let a1 = 0;
  let a2 = 0;
  let a3 = 0;

  while (a1 < arr1.length && a2 < arr2.length) {
    if (arr1[a1] < arr2[a2]) {
      mergedArray[a3] = arr1[a1];
      a1++;
    } else {
      mergedArray[a3] = arr2[a2];
      a2++;
    }
    a3++;
  }

  while (a1 < arr1.length) {
    mergedArray[a3] = arr1[a1];
    a3++;
    a1++;
  }

  return mergedArray;
}

let arr1 = [8, 36, 4, 9];
let arr2 = [2, 6, 46];
console.log("For Loop = ", MergeArrayWithForLoop(arr1, arr2));

let sortedArr1 = [3, 7, 12, 34, 56, 98];
let sortedArr2 = [4, 9, 11, 25, 45];
console.log("While Loop = ", MergeArrayWithWhileLoop(sortedArr1, sortedArr2));
