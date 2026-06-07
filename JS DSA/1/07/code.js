id: 0,
title: "Scratching The Surface",
artist: "Quincy Larson",
duration: "4:25",
src: "https://cdn.freecodecamp.org/curriculum/js-music-player/scratching-the-surface.mp3",
id: 1,
title: "Can't Stay Down",
artist: "Quincy Larson",
duration: "4:15",
src: "https://cdn.freecodecamp.org/curriculum/js-music-player/can't-stay-down.mp3",
id: 2,
title: "Still Learning",
artist: "Quincy Larson",
duration: "3:51",
src: "https://cdn.freecodecamp.org/curriculum/js-music-player/still-learning.mp3",
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArr = [...arr1, ...arr2];
console.log(combinedArr); // Output: [1, 2, 3, 4, 5, 6]
() => {}
const exampleFunction = () => {
  // code goes here
}
exampleArrowFunction();
const greet = (name) => {
    console.log(`Hello, ${name}!`);
};
const greet = name => {
    console.log(`Hello, ${name}!`);
};
const animals = ["dog", "cat", "horse"];
animals.indexOf("cat") // 1
const numbers = [1, 2, 3, 4, 5];
// Using forEach to iterate through the array
numbers.forEach((number) => {
  console.log(number); // 1, 2, 3, 4, 5
});
const element = document.getElementById('example');
console.log(element.textContent); // Output: This is some text content
const names = ["Tom", "Jessica", "Quincy", "Naomi"];
names.sort(() => Math.random() - 0.5);
const numArr = [1, 10, 8, 3, 4, 5]
const numsGreaterThanThree = numArr.filter((num) => num > 3);
console.log(numsGreaterThanThree) // Output: [10, 8, 4, 5]
// syntax
document.createElement(tagName)
// example
document.createElement('div')
const divElement = document.createElement('div')
document.createTextNode("your text")
const myText = document.createTextNode("your text")
const parentElement = document.createElement("button")
const parentElementText = document.createTextNode("Click me")
// attach the text "Click me" to the button
parentElement.appendChild(parentElementText)
