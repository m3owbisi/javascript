// data types in js
// number, string, boolean, undefined, null, bigint, symbol
let adultAge = 24;
typeof adultAge;
let money = 100.5;
typeof money;
let negativeNumber = -7;
typeof negativeNumber;
let naam = "hiral";
typeof naam;
let ifLiked = true;
typeof ifLiked;
let z;
typeof z;
let m,
  n = 0;
typeof m;
typeof n;
let palindrome = BigInt("12321");
typeof palindrome;
let heart = Symbol("heart");
typeof heart;
// const obj{key:val,}
// obj.key
// obj["key"]
const student = {
  puraNaam: "hiral",
  umar: 19,
  cgpa: 7.73,
  isPass: true,
};
console.log(student);
typeof student;
student["puraNaam"];
console.log(student.puraNaam);
console.log(student["umar"]);
console.log(student.cgpa);
console.log(student["isPass"]);
student["umar"] = student["umar"] + 1;
console.log(student.umar);
student["puraNaam"] = "hiral panchal";
console.log(student.puraNaam);
