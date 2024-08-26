function searchElement(data, value) {
  for (let i = 0; i < data.length; i++) {
    if (data[i] == value) {
      return i;
      break;
    }
  }
  return undefined;
}

let data = [1, 2, 4, 5, 8, 9];
let value = 6;

console.log(searchElement(data, value));

function isExist(data, value) {
  const result = searchElement(data, value);
  if (result) {
    return true;
  } else {
    return false;
  }
}

console.log(isExist(data, value));
