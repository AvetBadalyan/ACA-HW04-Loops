let arr = [0, 1, 1];
let n = 10;
for (i = 3; i < n; i++) {
  arr.push(arr[i - 1] + arr[i - 2]);
}

console.log(arr);
