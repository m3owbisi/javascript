// conditional statements
// if statement
/*
let color;
if (mode === "dark-mode") {
  color = "black";
}
*/
let age = 25;
age = 16;
age = 18;
if (age >= 18) {
  console.log("you are eligible to vote");
  console.log("you can drive");
}
if (age < 18) {
  console.log("you are not eligible to vote");
  console.log("you cant drive");
} else {
  console.log(">_<");
}
let mode = "dark-mode";
let color;
if (mode === "dark-mode") {
  color = "black";
}
if (mode === "light-mode") {
  color = "white";
} else {
  color = "gray";
}
console.log(color);
