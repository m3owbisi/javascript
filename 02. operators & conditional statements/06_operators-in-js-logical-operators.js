// operators in js
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
