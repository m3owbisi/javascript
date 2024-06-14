// comments in js
// this is a single line comment.
/*
this is a multi-line comment.
*/
// this is a code that prints
// "hello world!"  arcxjskdfnsjfafdofiif
console.log("hello world!");
// console.log("hello world!"); - hindi, kese hai ap
/*
this is a code that prints
"hello world!" arcxjskdfnsjfafdofiif
*/

// operators in js

// arithmetic operators
// +, -, *, /
// % -> modulus
// ** -> exponentiation
let a = 5;
let b = 2;
console.log("a = ", a, " & b =", b);
let c = a + b;
console.log("a + b = ", a + b);
c = a - b;
console.log("a - b = ", a - b);
c = a * b;
console.log("a * b = ", a * b);
c = a / b;
console.log("a / b = ", a / b);
c = a % b;
console.log("a % b = ", a % b);
c = a ** b;
console.log("a ** b = ", a ** b);

// unary operators
// ++ -> increment
// -- -> decrement
a = 5;
b = 2;
c = a++; // post-increment
console.log("a++ = ", a);
c = a--; // post-decrement
console.log("a-- = ", a);
c = ++a; // pre-increment
console.log("++a = ", ++a);
c = --a; // pre-decrement
console.log("--a = ", --a);

// assignment operators
// =, +=, -=, *=, /=, %=, **=
a = 5;
b = 2;
a += 4; // a = a + 4
console.log("a += 4 = ", a);
a -= 4; // a = a - 4
console.log("a -= 4 = ", a);
a *= 4; // a = a * 4
console.log("a *= 4 = ", a);
a /= 4; // a = a / 4
console.log("a /= 4 = ", a);
a %= 4; // a = a % 4
console.log("a %= 4 = ", a);
a **= 4; // a = a ** 4
console.log("a **= 4 = ", a);

// comparison operators
// >, <, >=, <=
/*
equal to ==,
equal to & type ===,
not equal to !=,
not equal to & type !==
*/
a = 5;
b = 2; // b = "5"; -> "5" type === !==
console.log("5 > 2 = ", a > b);
console.log("5 < 2 = ", a < b);
console.log("5 >= 2 = ", a >= b);
console.log("5 <= 2 = ", a <= b);
console.log("5 == 2 = ", a == b);
console.log("5 === 2 = ", a === b);
console.log("5!= 2 = ", a != b);
console.log("5!== 2 = ", a !== b);

// logical operators
// &&, ||,!
/*
logical and  &&
logical or   ||   -> pipe
logical not   !
*/
a = 5;
b = 2;
let condition1 = a > b;
let condition2 = a === 5;
console.log("5 && 2 = ", a && b);
console.log("5 && 2 =", condition1 && condition2);
condition1 = a > b;
condition2 = a === 6;
console.log("5 || 2 = ", a || b);
console.log("5 || 2 =", condition1 || condition2);
console.log("!5 = ", !a);
console.log("!2 = ", !b);

// conditional statements
// if statement
/*
let color;
if (mode === "dark-mode") {
  color = "black";
}
*/
let age = 25;
age = 16;
age = 18;
if (age >= 18) {
  console.log("you are eligible to vote");
  console.log("you can drive");
}
if (age < 18) {
  console.log("you are not eligible to vote");
  console.log("you cant drive");
} else {
  console.log(">_<");
}
let mode = "dark-mode";
let color;
if (mode === "dark-mode") {
  color = "black";
}
if (mode === "light-mode") {
  color = "white";
} else {
  color = "gray";
}
console.log(color);

// if-else statement
/*
let color;
if (mode === "dark-mode") {
  color = "black";
} else {
  color = "white";
}
*/
// even or odd
let number = 10;
if (number % 2 === 0) {
  console.log(number, "is even");
} else {
  console.log(number, "is odd");
}
// syntax -> rules and regulations

// else-if statement
/*
if (age < 18) {
  console.log("junior");
} else if (age > 60) {
  console.log("senior");
} else {
  console.log("middle");
}
*/
mode = "dark-mode";
if (mode === "dark-mode") {
  color = "black";
} else if (mode === "light-mode") {
  color = "white";
} else {
  color = "gray";
}
console.log(color);
if (mode === "dark-mode") console.log(mode);
console.log(color);

// ternary operators
// condition ? true output : false output
// age > 18 ? "adult" : "not adult";
age = 25;
let result = age > 18 ? "adult" : "not adult";
// let result = age > 18 ? console.log("adult") : console.log("not adult");
console.log(result);

// switch -> default
/*
switch (expression) {
  case caseExpression1:
    statements;
  case caseExpression2:
    statements;
  // …
  case caseExpressionN:
    statements;
  default:
    statements;
}
*/

// lets practice
/*
qs1. get user to input a number using prompt("enter a number:").
    check if the number is a multiple of 5 or not.
*/
alert("hi");
prompt("hi");
let name = prompt("hello");
console.log(name);
number = prompt("enter a number:");
if (number % 5 === 0) {
  console.log(number, "number is multiple of 5");
} else {
  console.log(number, "number is not a multiple of 5");
}

/*
qs2. write a code which can give grades to students according to their scores:
      80-100, A
      70-79,  B
      60-69,  C
      50-59,  D
      0-49,   F
*/
let score = prompt("enter your score (0-100):");
let grade;
if (score >= 80 && score <= 100) {
  grade = "A";
  console.log("your grade is A");
} else if (score >= 70 && score <= 79) {
  grade = "B";
  console.log("your grade is B");
} else if (score >= 60 && score <= 69) {
  grade = "C";
  console.log("your grade is C");
} else if (score >= 50 && score <= 59) {
  grade = "D";
  console.log("your grade is D");
} else if (score >= 0 && score <= 49) {
  grade = "F";
  console.log("your grade is F");
} else {
  grade = "invalid";
  console.log("invalid score");
}
console.log("okay according to your scores, your grade was:", grade);
