// Given a sentence as a string. Split it according to space and comma and create an array consisting of
// the words of the array. The last word should not contain the last . or ! .

let sentence = "May the Force be with you.";
let array = sentence.split(" ");

array[array.length - 1] = array[array.length - 1]
  .replaceAll(".", "")
  .replaceAll("!", "");

console.log(array);
