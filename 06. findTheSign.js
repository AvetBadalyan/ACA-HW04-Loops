let arr = [4, 19, -2];
if (arr[0] > 0 && arr[1] > 0 && arr[2] > 0) {
  console.log("The sign is +");
} else if (arr[0] < 0 && arr[1] < 0 && arr[2] < 0) {
  console.log("The sign is -");
} else if (arr[0] > 0 && arr[1] < 0 && arr[2] < 0) {
  console.log("The sign is +");
} else if (arr[0] < 0 && arr[1] > 0 && arr[2] < 0) {
  console.log("The sign is +");
} else {
  console.log("The sign is -");
}
