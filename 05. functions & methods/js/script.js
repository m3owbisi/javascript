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

// lets practice
/*
qs. we are given array of mark of students.
    filter out of the  marks of students that scored 90+.
*/
let marks = [97, 64, 32, 49, 99, 96, 86];
let toppers = marks.filter((val) => {
  return val > 90;
});
console.log(toppers);
/*
qs. take a number n as input from user.
    create an array of numbers from 1 to n.
    use the reduce method to calculate sum of all numbers in the array.
    use the reduce method to calculate product of all numbers in the array.
*/
let n = prompt("enter a number:");
let arrayN = [];
for (let i = 1; i <= n; i++) {
  arrayN[i - 1] = i; // 1(0), 2(1), 3(2), 4(3)
}
console.log(arrayN);
let sumN = arrayN.reduce((prev, curr) => {
  return prev + curr;
});
console.log(sumN);
let prodN = arrayN.reduce((prev, curr) => {
  return prev * curr;
});
console.log(prodN);
