// looping over an array
console.log(heroes[0]);
console.log(heroes[1]);
// for loop
for (let i = 0; i < heroes.length; i++) {
  // idx = 1; idx <= arr.len; idx++
  console.log(heroes[i]);
}
// for-of loop
for (let hero of heroes) {
  console.log(hero);
}
let cities = ["delhi", "pune", "mumbai", "hyderabad", "gurgaon"];
for (let city of cities) {
  console.log(city.toUpperCase());
}
