// lets practice
/*
qs1. prompt the user to enter their full name.
    generate a username for them based on the input.
    start username with @, followed by their full name and ending with fullname length.
    eg: user name = "shradhakhapra", username should be "@shradhakhapra13"
*/
let fullName = prompt("enter your full name without spaces:");
let userName = "@" + fullName + fullName.length;
console.log(userName);
