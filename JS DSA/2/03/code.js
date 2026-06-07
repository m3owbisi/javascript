element.classList.toggle("class-to-toggle");
dialogElement.showModal();
dialogElement.close();
const numbers = [3, 1, 5, 6];
const firstNumLargerThanThree = numbers.findIndex((num) => num > 3);
console.log(firstNumLargerThanThree); // prints index 2
str.toLowerCase();
titleInput.value.toLowerCase().split(" ").join("-");
console.log(Date.now()); // 1628586800000
const arr = [1, 2, 3];
arr.unshift(0);
// [0, 1, 2, 3]
console.log(arr);
const fruits = ["mango", "date", "cherry", "banana", "apple"];
// Remove date and cherry from the array starting at index 1
const removedFruits = fruits.splice(1, 2);
console.log(fruits); // [ 'mango', 'banana', 'apple' ]
console.log(removedFruits); // [ 'date', 'cherry' ]
localStorage.setItem("key", value); // value could be string, number, or any other data type
if (arr.length) {
  // do something
}
