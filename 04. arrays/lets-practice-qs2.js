// lets practice
/*
qs. for a given array with prices of 5 items -> [250,645,300,900,50]
    all items have an offer of 10% off on them.
    change the array to store final price after applying offer.
*/
let prices = [250, 645, 300, 900, 50];
let idx = 0;
for (let price of prices) {
  console.log(`idx[${idx}] : ${price}`);
  idx++;
}
for (let i = 0; i < prices.length; i++) {
  let offer = prices[i] / 10;
  prices[i] -= offer;
  console.log(`idx[${i}] : value after offer - ${prices[i]}`);
}
/*
for (let i = 0; i < prices.length; i++) {
  prices[i] *= 0.9;
}
console.log(prices);
*/
