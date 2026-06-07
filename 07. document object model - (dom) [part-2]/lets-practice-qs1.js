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
