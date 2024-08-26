function deleteElement(data, index) {
  for (let i = index; i < data.length; i++) {
    data[i] = data[i + 1];
  }
  data.length--;
  console.log(data);
}

let data = [1, 2, 4, 5, 8, 9];
let index = 2;

deleteElement(data, index);
