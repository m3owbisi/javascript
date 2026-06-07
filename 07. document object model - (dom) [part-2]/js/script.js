alert("hallo! >__<");
console.log("welcome, hiral! ;)");
prompt("do you like 'apna college' ?");
// console.log(window);
// window.console.log("hi");
// window.document;
// console.dir(window.document);
// console.dir(document.head);
// console.dir(document.body);
// document.body.style.background = "grey";

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
//

// lets practice
/*
qs. create a h2 heading element with text - "hello javascript.".
    append "from apna college students" to this text using js.
*/
let h2 = document.querySelector("#head0");
console.dir(h2.innerText);
h2.innerText = h2.innerText + " from apna college students.";
/*
qs. create 3 divs with common class name - "box".
    access them & add some unique of them.
*/
let container = document.querySelectorAll(".box");
console.dir(container[0]);
console.dir(container[1]);
console.dir(container[2]);
container[0].innerText = "first-div";
container[1].innerText = "second-div";
container[2].innerText = "third-div";
let i = 0;
for (div of container) {
  console.log(div.innerText);
  div.innerText = `value[${i}]`;
  i++;
}

// attributes
// getAttribute(attr) // to get the attribute value
// setAttribute(attr,val) // to set the attribute value th
let container_div = document.querySelector("#attr");
console.log(container_div);
let id = container_div.getAttribute("id");
console.log(id);
let name = container_div.getAttribute("name");
console.log(name);
let paragraph_div = document.querySelector("#para");
console.log(paragraph_div);
let set_name = paragraph_div.setAttribute("name", "paragragh-div");
console.log(set_name);

// style
// node.style
// let styleDiv = document.querySelectorAll(".box");
// console.dir(style_div);
// styleDiv.style.backgroundColor = "lightblue";
// styleDiv.style.fontSize = "20px";
// styleDiv.style.innerText = "><";
// styleDiv.style.visibility = "hidden";

// insert elements
// let el = document.createElement("div");
// node.append(el)  // adds at the end of node (inside)
// node.prepend(el) // adds at the start of node (inside)
// node.before(el) // adds before the node (outside)
// node.after(el) // adds after the node (outside)
let newButton = document.createElement("button");
newButton.innerText = "submit";
console.log(newButton);
let fruits = document.querySelector(".div1");
fruits.append(newButton); // prepend, before, after
// delete element
// node.remove()  // removes the node
let new_heading0 = document.createElement("p");
new_heading0.innerHTML = "<b>well i am new for this website :)</b>";
new_heading0.style.fontFamily = "monospace";
document.querySelector("#head0").append(new_heading0);
let new_heading1 = document.createElement("p");
new_heading1.innerHTML = "<b><i>arrays ;</i><b>";
new_heading1.style.fontFamily = "monospace";
new_heading1.style.fontSize = "20px";
document.querySelector(".div1").after(new_heading1);
let delDiv = document.querySelector("#attr");
delDiv.remove();
let delPara = document.querySelector("#para");
delPara.remove();

// lets practice
/*
qs. create a new button element.
    give it a text "click me", background color of red & text color of white.
    insert the button as the first element inside the body tag.
*/
let newButton1 = document.createElement("button");
newButton1.innerText = "click me";
newButton1.style.backgroundColor = "red";
newButton1.style.color = "white";
document.body.prepend(newButton1);

/*
qs. create a <p> tag in html, give it a class & some styling.
    now create a new class in css and try to append this class to the <p> element.
    did you notice, how you overwrite the class name when you add a new.
    solve this problem using classlist.
*/
/*
let para_gragh = document.querySelector("#para");
console.log(para_gragh);
para_gragh.getAttribute("class");
para_gragh.setAttribute("class", "new-para-class");
*/
// para
// para.classList.add("new-para-class");
// para.classList
// para.classList.remove("new-para-class");
