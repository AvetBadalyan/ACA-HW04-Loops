//Check if a number is a multiple of 3, 5 or 7 and output the appropriate message.
let arr = [21, 35, 13, 420, 24];
let mult = [3, 5, 7];
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < mult.length; j++) {
    if (arr[i] % mult[j] == 0) {
      console.log(`the number ${arr[i]} is multiple of ${mult[j]}`);
    } else {
      console.log(`the number ${arr[i]} is NOT multiple of ${mult[j]}`);
    }
  }
}
