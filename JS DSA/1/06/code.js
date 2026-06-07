const mainTitleElement = document.getElementById("title");
let isRunning = true;
let hasCompleted = false;
const regex = /hello/;
const regex = /[helo]/;
const helloRegex = /hello/g;
/Hello/i;
const str = "example string";
const regex = /example/;
const result = str.match(regex); // Returns ['example']
[ '1e3', index: 0, input: '1e3', groups: undefined ]
const name = "Naomi";
const templateLiteral = `Hello, my name is ${name}~!`;
console.log(templateLiteral);
const formElement = document.getElementById("form");
const formContent = `
    <label for="last-name">Last name</label>
    <input id="last-name" type="text">
`;
formElement.innerHTML += formContent;
const button = document.querySelector('.btn');
function printName() {
    console.log("Jessica");
}
button.addEventListener('click', printName);
for (const element of elementArray) {
    console.log(element);
}
if (helloWorld) {
}
Number('10'); // returns the number 10
Number('abc'); // returns NaN
const firstName = 'JESSICA';
console.log(firstName.toLowerCase()); // Output: jessica
const num = -5;
Math.abs(num); // 5
const paragraphElement = document.getElementById('paragraph');
paragraphElement.classList.remove('hide');
const listItemsArray = Array.from(document.querySelectorAll('li'));
console.log(listItemsArray); //Output: (3) [li, li, li]
const multiplyTwoNumbers = (num1, num2) => {
  return num1 * num2;
}
// Output: 12
console.log(multiplyTwoNumbers(3, 4));
const multiplyTwoNumbers = (num1, num2) => num1 * num2;
const getTax = (price) => {
    const taxRate = 0.08;
    const tax = price * taxRate;
    return tax;
};
const numbers = [1, 2, 3];
const doubledNumbers = numbers.map((number) => number * 2); // doubledNumbers will be [2, 4, 6]
const exampleArr = ["This", "is", "a", "sentence"];
const sentence = exampleArr.join(" "); // Separator takes a space character
console.log(sentence); // Output: "This is a sentence"
array.map().join();
const user = {

    name: "Quincy",
    address: {
    city: "San Francisco",
    state: "CA",
    country: "USA",
    },
};
// Accessing nested properties without optional chaining
const state = user.address.state; // CA
// Accessing a non-existent nested property with optional chaining
const zipCode = user.address?.zipCode; // Returns undefined instead of throwing an error
const names = ["Tom", "Jessica", "Quincy", "Naomi"];
names.sort() // ["Jessica", "Naomi", "Quincy", "Tom"]
const fruits = [
    { name: "Apples", price: 0.99 },
    { name: "Blueberries", price: 1.49 },
    { name: "Grapes", price: 2.99 },
];
fruits.sort((a, b) => {
    if (a.name < b.name) {
    return -1;
    }
    if (a.name > b.name) {
    return 1;
    }
    return 0;
});
const fruits = [
    { name: "Apples", price: 0.99 },
    { name: "Blueberries", price: 1.49 },
    { name: "Grapes", price: 2.99 },
];
fruits.sort((a, b) => {
    if (a.name < b.name) {
    return -1;
    }
    if (a.name > b.name) {
    return 1;
    }
    return 0;
});
const fruits = [
    { name: "Apples", price: 0.99 },
    { name: "Blueberries", price: 1.49 },
    { name: "Grapes", price: 2.99 },
];
fruits.sort((a, b) => {
    if (a.name < b.name) {
    return -1;
    }
    if (a.name > b.name) {
    return 1;
    }
    return 0;
});
const fruits = [
    { name: "Apples", price: 0.99 },
    { name: "Blueberries", price: 1.49 },
    { name: "Grapes", price: 2.99 },
];
fruits.sort((a, b) => {
    if (a.name < b.name) {
    return -1;
    }
    if (a.name > b.name) {
    return 1;
    }
    return 0;
});
const numbers = [10, 20, 30, 40, 50];
// Find the first number greater than 25
const foundNumber = numbers.find((number) => number > 25);
console.log(foundNumber); // Output: 30
