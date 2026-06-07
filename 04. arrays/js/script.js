// arrays in js
// create array
// let heroes = [ "ironman", "hulk", "thor", "batman" ];
// let marks = [ 96, 75, 48, 83, 66 ];
// let info = [ "rahul", 86, "delhi" ];
let marks_student1 = 97;
let marks_student2 = 88;
let mark = {
  stud1: 97,
  stud2: 88,
};
let marks = [97, 82, 75, 64, 36];
console.log(marks);
console.log(marks.length); // property
let heroes = [
  "ironman",
  "thor",
  "hulk",
  "shaktiman",
  "spiderman",
  "batman",
  "superman",
  "antman",
];
console.log(heroes);
console.log(heroes.length);
console.log(typeof marks);
console.log(typeof heroes);

// array indices
// arr[0], arr[1], arr[2] ...
console.log(marks[0]);
console.log(marks[1]);
console.log(marks[2]);
console.log(marks[3]);
console.log(marks[4]);
console.log(marks[5]);
marks[4] = 73;
console.log(marks[4]); // arrays -> mutable
str = "hello";
str[0] = "y";
console.log(str[0]); // strings -> immutable

// looping over an array
console.log(heroes[0]);
console.log(heroes[1]);
// for loop
for (let i = 0; i < heroes.length; i++) {
  // idx = 1; idx <= arr.len; idx++
  console.log(heroes[i]);
}
// for-of loop
for (let hero of heroes) {
  console.log(hero);
}
let cities = ["delhi", "pune", "mumbai", "hyderabad", "gurgaon"];
for (let city of cities) {
  console.log(city.toUpperCase());
}

// lets practice
/*
qs. for a given array with marks of students -> [85, 97, 44, 37, 76, 60]
find the average marks of the entire class.
*/
let stud_marks = [85, 97, 44, 37, 76, 60];
let sum = 0;
// sum = marks_stud[0] + marks_stud[1]
for (let mark of stud_marks) {
  sum += mark;
}
let avg = sum / stud_marks.length;
console.log(`average marks of the students in a class = ${avg}`);

// lets practice
/*
qs. for a given array with prices of 5 items -> [250,645,300,900,50]
    all items have an offer of 10% off on them.
    change the array to store final price after applying offer.
*/
let prices = [250, 645, 300, 900, 50];
let idx = 0;
for (let price of prices) {
  console.log(`idx[${idx}] : ${price}`);
  idx++;
}
for (let i = 0; i < prices.length; i++) {
  let offer = prices[i] / 10;
  prices[i] -= offer;
  console.log(`idx[${i}] : value after offer - ${prices[i]}`);
}
/*
for (let i = 0; i < prices.length; i++) {
  prices[i] *= 0.9;
}
console.log(prices);
*/

// array methods
// push()
// pop()
// toString()
let foodItems = ["potato", "apple", "litchi", "tomato"];
console.log(foodItems);
foodItems.push("chips", "rice", "burger", "paneer", "chicken");
console.log(foodItems);
let nonVeg = foodItems.pop();
console.log("removed non-veg item from your 'food' array :", nonVeg);
console.log(foodItems.toString());

// concat()
// unshift()  -> push() (from starting index)
// shift()  -> pop() (from starting index)
let marvelHeroes = [
  "thor",
  "spiderman",
  "ironman",
  "hulk",
  "antman",
  "dr.strange",
];
let dcHeroes = ["superman", "batman"];
let inHeroes = ["shaktiman", "krrish"];
let concatArr = marvelHeroes.concat(dcHeroes, inHeroes);
console.log(concatArr);

// slice()  -> slice(stIdx, enIdx)
// splice() -> splice(stIdx, delCnt, newEl1 ...)
let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr);
// add and delete element
arr.splice(2, 2, 101, 102);
console.log(arr);
// + el add element
arr.splice(4, 0, 103);
console.log(arr);
// - el delete element
arr.splice(2, 3);
console.log(arr);
// replace element
arr.splice(2, 1, 3);
console.log(arr);
arr.splice(3);
console.log(arr);

// lets practice
/*
qs. create an array to store companies -> "bloomberg", "microsoft", "uber", "google", "ibm", "netflix"
a. remove the first company from the array
b. remove uber & add ola in its place
c. add amazon at the end
*/
let companies = ["bloomberg", "microsoft", "uber", "google", "ibm", "netflix"];
console.log(companies);
companies.shift();
console.log(companies);
companies.splice(1, 1, "ola");
console.log(companies);
companies.push("amazon");
console.log(companies);
