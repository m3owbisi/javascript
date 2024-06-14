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
