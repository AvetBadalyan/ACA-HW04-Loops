//Given an array consisting from the arrays of numbers (like a two-dimensional array). Find sum of each
//row and print them as an array.

let matrix = [
  [3, 4, 5],
  [1, 0, 0],
  [4, 5, 4],
  [8, 8, -1],
];

let arrOfSums = matrix.map(function (arr) {
  let sum = 0;
  arr.map(function (number) {
    sum += number;
  });
  return sum;
});

console.log(arrOfSums);
