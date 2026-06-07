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
