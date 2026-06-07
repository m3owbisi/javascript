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
