//Given three numbers. Sort them by the ascending order.
let arr = [
  [45, 26, 78],
  [-23, -456, 0],
];
for (let i = 0; i < arr.length; i++) {
  let currentArr = arr[i];
  let sortedArr = currentArr.sort((a, b) => a - b);
  console.log(sortedArr);
}
