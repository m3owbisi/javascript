// callbacks
function sum(a, b) {
  console.log(a + b);
}
function calculator(a, b, sumCallback) {
  sumCallback(a, b);
}
calculator(3, 4, sum);
/*
calculator(3, 4, (a,b) => {
  console.log(a + b);
});
*/
const printHello = () => {
  console.log("hello");
};
setTimeout(printHello, 3000);
