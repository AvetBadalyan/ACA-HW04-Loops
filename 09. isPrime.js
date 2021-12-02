//Insert a number. Print ‘yesʼ if the number is prime, ‘noʼ otherwise.
//NEED TO FIX BUGS
let arr = [401, 63];
for (let i = 0; i < arr.length; i++) {
  for (let j = 2; j < arr[i]; j++)
    if (arr[i] % j === 0) {
      console.log("No");
      break;
    } else {
      console.log("Yes");
      break;
    }
}
