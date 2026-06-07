// some more array methods
// map
// arr.map(callBackFnx(array,index,value))
/*
let newArr = arr.map((val) => {
  return val * 2;
})
*/
array.map((value) => {
  console.log(value * 2);
});
let newArr = array.map((value) => {
  return value;
});
console.log(newArr);
// filter -> tea with sieves
/*
let newArr = arr.filter((val) => {
  return val % 2 === 0;
})
*/
let number = [1, 2, 3, 4, 5, 6, 7];
let evenArr = arr.filter((val) => {
  return val % 2 === 0;
});
console.log(evenArr);
// reduce
// javascript demo : array.reduce()
// 0 + 1 + 2 + 3 + 4
const array1 = [1, 2, 3, 4];
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);
console.log(sumWithInitial);
// expected outcome : 10
const output = array1.reduce((res, curr) => {
  return res + curr; // res -> prev
  // return prev > curr ? prev : curr;
});
console.log(output);
