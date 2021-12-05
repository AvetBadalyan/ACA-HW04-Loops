// Given an array of strings and numbers. Print the number of integers and the number of strings in the
// array.

let arr = [1, "10", "hi", 2, 3];
let numbers = 0;
let strings = 0;
arr.filter(function (val) {
  if (typeof val === "number") {
    numbers++;
  }
  if (typeof val === "string") {
    strings++;
  }
  return numbers, strings;
});
console.log(`Numbers are: ${numbers}, Strings are: ${strings} `);
