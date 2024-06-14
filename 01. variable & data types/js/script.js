// our 1st js code
// ctrl+k -> clean console
alert("apna college");
alert("shradha khapra");
alert("hello javascript!");
// ctrl+r -> refresh console
console.log("Apna College");
// console.log("apna college")
// console.log('apna college');
console.log("i love javascript");
console.log("hiral panchal");
console.log("apna college");
// shift+! -> boiler plate html code
console.log("welcome to javascript");
console.log("hello world");
console.log("i love apna college");

// variables in js
// radius = 14; // memory
// age = 24;
// age;
// age + 1;
// name = "tony stark";
// name;
// price = 150.5;
// price;
// fullName = "hiral panchal";
// console.log("fullName");
// console.log(fullName);
// age = 24;
// console.log(age);
price = 99.99;
console.log(price);
radius = 14;
console.log(radius);
// x = null;
// console.log(x);
// y = undefined;
// console.log(y);
isFollowing = false;
console.log(isFollowing);
isFollowing = true;
console.log(isFollowing);

// variable rules
// fullName = 25;
// console.log(fullName);
fullname = "shradha khapra";
console.log(fullname);
FullName = "aman dhattarwal";
console.log(FullName);
// full name = "tony stark";
// console.log(full name);
fullname01 = "tony stark";
full_name = "tony stark";
full$name = "tony stark";
// full @name="tony stark";
fullname = "tony stark";
_fullname = "tony stark";
$fullname = "tony stark";
// 01fullname = "tony stark";
// console = "apna college";
// console.log(console);
Console = "apna college";
console.log(Console);
// fullName;    -> camel case
// fullname;    ->
// full_name;   -> snake case
// full-name;   -> kebab case
// FullName;    -> pascal case
// isFollow
// totalPrice

// let, const & var
// var, let, & const
let name = "tony stark";
console.log(name);
let fullName = "hiral panchal";
console.log(fullName);
let age = 24;
console.log(age);
let totalPrice = 1000;
console.log(totalPrice);
var height = 5.7;
console.log(height);
// var age = 24;
// var age = 59;
// var age = 86;
// console.log(age);
age = 59;
age = 86;
console.log(age);
const pi = 3.14159;
console.log(pi);
// const -> PI
let a;
let b;
console.log(a);
console.log(b);
a = 0;
b = 1;
console.log(a);
console.log(b);
// const x;
// const y;
// x = 0;
// y = 0;
// { code }
// { block }
const x = 0;
const y = 0;
console.log(x);
console.log(y);
{
  let a = 5;
  console.log(a);
  // let a = 10;
  // console.log(a);
}
{
  let a = 10;
  console.log(a);
}

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

// lets practice
// qs1. create a const object called "product" to store information shown in the picture.
const product = {
  title: "parker jotter standard ct ball pen (black)",
  rating: 7002,
  isDeal: true,
  marketPrice: 285.7,
  offer: 5,
};
typeof product;
console.log(product);
// 1 + 2 -> 3
// 2 - 1 -> 1
// "123" + 1 -> '1231'
// "abcd" + "1234" -> 'abcd1234'
// "1234" + "1234" -> '12341234'
// "123" + 123 -> '123123'

// qs2. create a const object called "profile" to store information shown in the picture.
// username
// followers
// following
// follow
// posts
// bio
// info
// details
const profile = {
  username: "@shradhakhapra",
  isVerified: true,
  follow: true,
  posts: 195,
  followers: 569,
  following: 4,
  display$name: "shradha khapra",
  public_figure: "entrepreneur",
  detailedinfo: "apna college | microsoft, drdo, & google",
  bio: "to educate someone is the highest privilege",
};
typeof profile;
console.log(typeof profile);
console.log(typeof profile["username"]);
console.log(typeof profile["follow"]);
console.log(profile);
