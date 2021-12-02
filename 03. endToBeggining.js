//Bring the last digit of the number to the beginning.
//NEED TO FIX BUGS
let arr = [367, 1002, 250, 8];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 10 == 0 || arr[i].length == 1) {
    console.log(arr[i]);
  } else {
    let lastDigit = arr[i] % 10;
    let newNumber = (arr[i] - lastDigit) / 10;
    let result = "" + lastDigit + newNumber;
    console.log(result);
  }
}
