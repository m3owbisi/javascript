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
