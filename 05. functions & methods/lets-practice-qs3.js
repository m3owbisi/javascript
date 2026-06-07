// lets practice
/*
qs. for a given array of numbers, print the square of each value using the foreach loop.
*/
let array = [1, 2, 3, 4, 5, 6, 7];
array.forEach((element) => {
  console.log(element * element); // element ** 2
});
let calcSq = (element) => {
  console.log(element * element); // element ** 2
};
array.forEach(calcSq);
