////Given a number. Print “odd” if the number is odd and “even” if itʼs even.
let arr = [125, 35, 20];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    console.log(`the number ${arr[i]} is even`);
  } else {
    console.log(`the number ${arr[i]} is odd`);
  }
}
