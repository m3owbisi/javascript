// template literals in js
// `this is a template literal`
// string interpolation
// `string text ${expression} string text`
let sentence = `this is a template literal ${0 + 1}`;
console.log(sentence);
console.log(typeof sentence);
let obj = {
  item: "pen",
  price: 10,
};
console.log("the cost of", obj.item, "is", obj.price, "rupees.");
let output = `the cost of ${obj.item} is ${obj.price} rupees.`;
console.log(output);
console.log("\tapna\n\tcollege");
let str = "hiral\tpanchal";
console.log(str);
console.log(str.length);
