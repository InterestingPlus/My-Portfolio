function insertElement(data, index, newEl) {
  for (let i = data.length - 1; i >= index; i--) {
    data[i + 1] = data[i];
    if (i == index) {
      data[i] = newEl;
    }
  }
  console.table(data);
}

let data = [1, 2, 4, 5, 8, 9];
let newEl = 3;
let index = 2;

insertElement(data, index, newEl);
