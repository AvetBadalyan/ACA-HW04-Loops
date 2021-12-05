// Given an array of a size smaller than 100. It consists of numbers from 0 to 99 in any order. Create a
// new array where each element from that array is placed under the index of its value. Start from the
// smallest value and end with the biggest one. If there are missing values, put in its places undefined.

let arr = [4, 3, 0, 9];
let newArr = [];
newArr.length = Math.max(...arr);

arr.map(function (val) {
  newArr[val] = val;
});

console.log(newArr);
