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
