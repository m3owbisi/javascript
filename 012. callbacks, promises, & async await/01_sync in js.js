// what this chapter is about?
// async await >> promise chains >> callback hell
// sync in js
// synchronous
console.log("zero");
console.log("one");
console.log("two");
console.log("three");
// output: zero, one, two, three
// asynchronous
console.log("zero");
console.log("one");
function hello() {
  console.log("hello");
}
setTimeout(hello, 2000); // timeout :: 2sec -> 2000
// output: hello (after 2 seconds)
setTimeout(hello, 4000); // timeout :: 4sec -> 4000
// output: hello (after 4 seconds)
console.log("two");
console.log("three");
