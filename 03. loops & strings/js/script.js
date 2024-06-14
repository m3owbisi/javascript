// loops in js
// for loop
/*
for (let i = 1; i <= 5; i++) {
  console.log("apna college");
}
*/
console.log("apna college");
console.log("apna college");
console.log("apna college");
console.log("apna college");
console.log("apna college");
console.log("apna college");
console.log("apna college");
//  print "apna college" from 1 to 5 times
for (let i = 1; i <= 5; i++) {
  console.log("apna college"); // execute 5 times
}
console.log("loop has ended");
// calculate the sum of first 1-to-n numbers
let n = 100;
let sum = 0;
for (let i = 0; i <= n; i++) {
  sum = sum + i;
}
console.log("sum =", sum);
console.log("loop has ended");
for (let i = 1; i <= 5; i++) {
  console.log("i =", i);
}
// let i = 0;
// console.log(i);
/*
for (var i = 1; i <= 10; i++) {
  console.log("i =", i);
}
*/
// console.log(i);
// infinite loop -> never do it ?!
/*
for (var i = 1; i >= 0; i++) {
  console.log("i =", i);
}
*/

// while loop
/*
while (condition) {
  // do some work
}
*/
// let i = 1;
// while (i <= 5) {
//   console.log("i =", i);
//   i++;
// }

// do-while loop
/*
do {
  // do some work
} while (condition);
*/
// let i = 1;
// do {
//   console.log("i =", i);
//   i++;
// } while (i <= 5);

// for-of loop
/*
for (let val of strVal) {
  // do some work
}
*/
let strVal = "javascript";
let length = 0;
for (let val of strVal) {
  console.log("val =", val); // a, p, n, a, space, c, o, l, e, g, e
  length++;
}
console.log("string length =", length);

// for-in loop
/*
for (let key in objVar) {
  // do some work
}
*/
let objVar = {
  name: "rahul",
  age: 20,
  gender: "male",
  cgpa: "7.73",
  isPass: true,
};
for (let key in objVar) {
  console.log("key =", key); // name, age, gender, cgpa, isPass
  console.log("value =", objVar[key]); // rahul, 20, male, 7.73, true
}

// lets practice
/*
qs1. print all even numbers from 0 to 100.
*/
for (let i = 0; i <= 100; i++) {
  // console.log(i);
  if (i % 2 === 0) {
    // even numbers
    console.log("number =", i);
  } else {
    // odd numbers -> (i % 2 !== 0)
    console.log("number =", i);
  }
}

// lets practice
/*
qs2. create a game where you start with any random game number.
    ask the user to keep guessing the game number until the user enters correct value.
*/
let gameNumber = 25; // Math.floor(Math.random() * 100)
let userNumber = prompt("guess the game number:");
console.log(userNumber);
while (userNumber != gameNumber) {
  // game
  userNumber = prompt(
    "you entered a wrong number, guess the game number again:"
  );
}
console.log("congratulations, you entered the right number:", userNumber);

// strings in js
// create string
// let str = "apna college";
// string length
// str.length
// string indices
// str[0], str[1], str[2]
let str0 = "apna college";
let str1 = "hiral panchal";
console.log(str0);
console.log(str1);
// str0.length
// str1.length
console.log(str0.length);
console.log(str1.length);
console.log(str0[0]);
console.log(str0[1]);
console.log(str0[2]);
console.log(str0[3]);

// template literals in js
// `this is a template literal`
// string interpolation
// `string text ${expression} string text`
let sentence = `this is a template literal ${0 + 1}`;
console.log(sentence);
console.log(typeof sentence);
let obj = {
  item: "pen",
  price: 10,
};
console.log("the cost of", obj.item, "is", obj.price, "rupees.");
let output = `the cost of ${obj.item} is ${obj.price} rupees.`;
console.log(output);
console.log("\tapna\n\tcollege");
let str = "hiral\tpanchal";
console.log(str);
console.log(str.length);

// string methods in js
// str.toUpperCase()
// str.toLowerCase()
// str.trim() // removes whitespaces
let string = " Hiral Panchal ";
let string1 = "hiral ";
let string2 = "panchal ";
console.log(string);
string.toUpperCase();
string.toLowerCase();
string.trim();
console.log(string);
console.log(string.toUpperCase());
console.log(string.toLowerCase());
console.log(string.trim());
// str.slice(start,end?)  // returns part of string
// str1.concat(str2)  // joins str2 with str1
// str.replace(searchVal,newVal)
// str.charAt(idx)
console.log(string.slice(1, 6));
console.log(string1.concat(string2)); // string1 + string2
console.log(string.replace("Hiral", "Hasumati")); // replaceAll()
str[0] = "V";
console.log(string);
console.log(string.charAt(1));

// lets practice
/*
qs1. prompt the user to enter their full name.
    generate a username for them based on the input.
    start username with @, followed by their full name and ending with fullname length.
    eg: user name = "shradhakhapra", username should be "@shradhakhapra13"
*/
let fullName = prompt("enter your full name without spaces:");
let userName = "@" + fullName + fullName.length;
console.log(userName);
