// Dates

let myDate = new Date();
console.log("Date:", myDate);
console.log("toString:", myDate.toString());
console.log("toDateString:", myDate.toDateString());
console.log("toLocalString:", myDate.toLocaleString());

// let myCreatedDate = new Date(2023, 0, 23);  OR  Date("2023-1-23")
let myCreatedDate = new Date(2023, 0, 23, 5, 3);
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
console.log("Time Stamp: ", myTimeStamp);
console.log("Previous Value: ", myCreatedDate.getTime());

console.log("Seconds :", Math.floor(Date.now() / 1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

console.log(
  newDate.toLocaleString("default", {
    weekday: "long",
  })
);
