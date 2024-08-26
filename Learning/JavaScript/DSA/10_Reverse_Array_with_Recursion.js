function reverse(data, start, end) {
  console.log(data);
  if (start <= end) {
    let temp = data[start];
    data[start] = data[end];
    data[end] = temp;
    reverse(data, start + 1, end - 1);
  }
}

let data = [0, 1, 2, 3];
let data1 = ["HTML", "CSS", "JavaScript", "Python", "PHP"];
reverse(data, 0, data.length - 1);
reverse(data1, 0, data1.length - 1);
