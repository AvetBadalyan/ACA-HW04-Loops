//Enter a number. Reverse its first and last digits. Print the new number.
//NEED TO FIX BUG OF NAN
let arr = [2, 13, 895796];
for (let i = 0; i < arr.length; i++) {
  if (arr[i].length != 1) {
    let string = "" + arr[i];
    let splittedString = string.split("");
    let lastDigit = splittedString.pop();
    let firstDigit = splittedString.shift();
    let reversed = +("" + firstDigit + splittedString.join("") + lastDigit);
    console.log(reversed);
  } else {
    console.log(arr[i]);
  }
}
