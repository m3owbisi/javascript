// lets practice
/*
qs. create a toggle button that changes the screen to dark-mode when clicked & light-mode when clicked again.
*/
let button_mode = document.querySelector("#mode");
let body = document.querySelector("body");
let curr_mode = "light-mode";
button_mode.addEventListener("click", () => {
  console.log("you are trying to change mode");
  if (curr_mode === "light-mode") {
    curr_mode = "dark-mode";
    // document.body.style.backgroundColor = "black";
    // document.body.style.color = "white";
    body.classList.add("dark-mode");
    body.classList.remove("light-mode");
  } else {
    curr_mode = "light-mode";
    // document.body.style.backgroundColor = "white";
    // document.body.style.color = "black";
    body.classList.add("light-mode");
    body.classList.remove("dark-mode");
  }
  console.log(curr_mode);
});
