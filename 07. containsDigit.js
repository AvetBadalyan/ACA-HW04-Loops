//Insert a digit and a number. Check whether the digits contains in the number or not.
let digit = [5, 4, 8];
let number = [2463, 6, 45689];
for (let i = 0; i < 3; i++) {
  if (("" + number[i]).includes("" + digit[i])) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}
