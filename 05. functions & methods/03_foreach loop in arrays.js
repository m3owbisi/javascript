// foreach loop in arrays
// arr.forEach ( callBackFunction )
/*
// higher order functions / higher order methods
// func as a param
// returns func
arr.forEach((val) => {
  console.log(val);
})
*/
// [1, 2, 3].toUpperCase();
function func(num) {
  console.log(num);
  return num;
}
function myforEach(func) {
  return console.log(func);
}
func(10);
myforEach(func);
let arr = [1, 2, 3, 4, 5, 6, 7];
arr.forEach(function printValue(value) {
  // value at each index
  console.log(value);
});
arr.forEach((arr, value, idx) => {
  // value at each index
  console.log(arr, value, idx); // strings -> methods -> error
});
