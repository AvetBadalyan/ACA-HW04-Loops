//Insert a number. Calculate product and sum of the digits of the number. If product is divisible by the
//sum, print the quotient, otherwise print the remainder.

let number = 1233;
let sum = 0;
let product = 1;
while (number > 0) {
  let current = number % 10;
  sum = sum + current;
  product = product * current;
  number = Math.floor(number / 10);
}

if (product % sum === 0) {
  console.log(`Quotient is ${product / sum} `);
} else {
  console.log(`Remainder is ${product % sum} `);
}
