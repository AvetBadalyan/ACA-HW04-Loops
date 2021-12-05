//Given an array of numbers and a number. Find the index of a first element which is equal to that
// number. If there is not such a number, that find the index of the first element which is the closest to it.
let arr = [36, -12, 47, -58, 148, -55, -19, 10];
let number = -56;

let newArr = arr.map(function (val) {
  return Math.abs(val - number);
});
console.log(
  ` the index of the closest element to the number is ${newArr.indexOf(
    Math.min(...newArr)
  )} `
);
