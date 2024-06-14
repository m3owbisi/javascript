// conditional statements
// else-if statement
/*
if (age < 18) {
  console.log("junior");
} else if (age > 60) {
  console.log("senior");
} else {
  console.log("middle");
}
*/
mode = "dark-mode";
if (mode === "dark-mode") {
  color = "black";
} else if (mode === "light-mode") {
  color = "white";
} else {
  color = "gray";
}
console.log(color);
if (mode === "dark-mode") console.log(mode);
console.log(color);
