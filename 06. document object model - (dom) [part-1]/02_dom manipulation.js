// dom manipulation
// selecting with id
// document.getElementById("myId");
// selecting with class
// document.getElementsByClassName("myClass");
// selecting with tag
// document.getElementsByTagName("p");
let myId0 = document.getElementById("heading0"); // h1
console.dir(myId0);
// console.log(myId0);
let myId1 = document.getElementById("heading1"); // h2
console.dir(myId1);
// console.log(myId1);
let myId2 = document.getElementById("heading2"); // h3
console.dir(myId2);
// console.log(myId2);
let myClass = document.getElementsByClassName("heading");
console.dir(myClass);
// console.log(myClass);
// myId -> null
// myClass -> htmlcollection[]
let paragraph = document.getElementsByTagName("p");
console.dir(paragraph);
let button = document.getElementsByTagName("button");
console.dir(button);
// query selector
// document.querySelector(" #myId / .myClass / tag");
// returns first element
// document.querySelectorAll(" myId / myClass / tag");
// returns a nodelist
let element0 = document.querySelector("p");
console.dir(element0);
let element1 = document.querySelectorAll("#button");
console.dir(element1);
let element2 = document.querySelectorAll(".heading");
console.dir(element2);
// properties
// tagName
// innerText
// innerHTML
// textContent
// element0.tagName
// element0.innerText
// element0.innerHTML
// element0.textContent
// parent, child, sibling, descendant
// node : firstChild, lastChild
// console.dir(document.body.firstChild);
// comment nodes, element nodes, text nodes
// document.querySelector("div");
// document.querySelector("div").children;
let divContainer = document.querySelector(".div1");
console.dir(divContainer);
// divContainer.innerHTML="<div>innerHTML div</div>";
// divContainer.innerText="found on a daily basis";
