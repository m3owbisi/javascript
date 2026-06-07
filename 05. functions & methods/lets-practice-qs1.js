// lets practice
/*
qs. create a function using the "function" keyword that takes a string as an argument &
    returns the number of vowels in the string.
*/
/*
function countVowels(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] == "a" ||
      str[i] == "e" ||
      str[i] == "i" ||
      str[i] == "o" ||
      str[i] == "u" ||
      str[i] == "A" ||
      str[i] == "E" ||
      str[i] == "I" ||
      str[i] == "O" ||
      str[i] == "U"
    ) {
      count++;
    }
  }
  return count;
}
console.log(countVowels("Shradha"));
*/
function countVowels(str) {
  // "hiral" -> count : 2
  let count = 0;
  for (const char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u" ||
      char === "A" ||
      char === "E" ||
      char === "I" ||
      char === "O" ||
      char === "U"
    ) {
      count++;
    }
    console.log(char);
  }
  return count;
}
console.log(countVowels("hiral"));
