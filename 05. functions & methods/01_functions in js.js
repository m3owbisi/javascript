// functions in js
/*
alert("hi");
prompt("what is your name?");
console.log("hello");
"hiral".toUpperCase();
"Shradha".toLowerCase();
[1, 2, 3].push(4);
[1, 2, 3].pop();
*/
/*
// function definition
function functionName () {
  // do some work
}
function functionName (param1,param2,..) {
  // do some work
}
// function call
functionName();
*/
function myFunc() {
  console.log("welcome to apna college");
  console.log("we are learning javascript");
}
myFunc();
function print(message, n) {
  // parameter -> input
  console.log(message * n);
}
print("javascript", 7); // argument -> output
// func -> add two numbers and find its sum
function add(a, b) {
  // console.log("before : return");
  // local variables -> scope
  console.log(a);
  console.log(b);
  return a + b;
  // console.log("after : return");
}
console.log(add(10, 20));
