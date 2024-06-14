// string methods in js
// str.toUpperCase()
// str.toLowerCase()
// str.trim() // removes whitespaces
let string = " Hiral Panchal ";
let string1 = "hiral ";
let string2 = "panchal ";
console.log(string);
string.toUpperCase();
string.toLowerCase();
string.trim();
console.log(string);
console.log(string.toUpperCase());
console.log(string.toLowerCase());
console.log(string.trim());
// str.slice(start,end?)  // returns part of string
// str1.concat(str2)  // joins str2 with str1
// str.replace(searchVal,newVal)
// str.charAt(idx)
console.log(string.slice(1, 6));
console.log(string1.concat(string2)); // string1 + string2
console.log(string.replace("Hiral", "Hasumati")); // replaceAll()
str[0] = "V";
console.log(string);
console.log(string.charAt(1));
