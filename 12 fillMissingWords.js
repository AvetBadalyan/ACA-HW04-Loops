//Given a sentence with missing words and an array of words. Replace all ‘_ʼ in a sentence with the words from the array.
let sentence = "_, we have a _.";
let arr = ["Houston", "problem"];
let newArr = sentence.split("");
let i = 0;
let result = newArr.map(function (value) {
  if (value.includes("_")) {
    value = arr[i];
    i++;
  }
  return value;
});
result = result.join("");

console.log(result);
