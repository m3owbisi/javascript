// error handling
// try-catch
/*
try{
... normal code
} catch(err){
  // err is error object
  ... handling error
}
*/
let a = 5;
let b = 10;
console.log("a ->", a);
console.log("b ->", b);
try {
  console.log("c ->", c); // error
} catch (err) {
  console.log(err);
}
// console.log("c ->", c); // error
console.log("a + b = ", a + b);
