// event handling in js
/*
node.event = () => {
    // handle here
}
*/
let button0 = document.querySelector("#button0");
button0.onclick = (e) => {
  alert("you wanna continue?");
  console.log("welcome, hiral!");
  console.log("button clicked");
  let a = 25;
  a++;
  console.log(a); // 26
  console.log(e);
  console.log(e.type);
  console.log(e.target);
  console.log(e.clientX);
  console.log(e.clientY);
};
const handler0 = () => {
  console.log("hello, world!");
};
button0.addEventListener("click", handler0);
button0.removeEventListener("click", handler0);
let button1 = document.querySelector("#button1");
button1.ondblclick = (e) => {
  console.log("i was submitted");
  console.log(e);
  console.log(e.type);
  console.log(e.target);
  console.log(e.clientX);
  console.log(e.clientY);
};
const handler1 = () => {
  console.log("hello, world!");
};
button1.addEventListener("dblclick", handler1);
button1.removeEventListener("dblclick", handler1);
// let boxAll = document.querySelectorAll(".box");
// boxAll.onmousemove = () => {
//     console.log("you guessed me right!");
// }
