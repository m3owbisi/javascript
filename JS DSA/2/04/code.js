const num = 0;
console.log(num === 0); // true
console.log(!num); // true
parseInt(2.2); // 2
parseInt("2e+3"); // 2
parseInt("e") // NaN
isNaN("test"); // true
isNaN(2); // false
isNaN("3.5"); // false
 6 < 0; // false
-1 < 0; // true
-8 < 0; // true
 0 < 0; //false
| Base-10 | Base-2 |
| ------- | ------ |
|    0    |  0     |
|    1    |  1     |
|    2    |  10    |
|    3    |  11    |
|    4    |  100   |
|    5    |  101   |
|    6    |  110   |
|    7    |  111   |
|    8    |  1000  |
|    9    |  1001  |
128 | 64 | 32 | 16 | 8 | 4 | 2 | 1
128 | 64 | 32 | 16 | 8 | 4 | 2 | 1
  0 |  0 |  1 |  1 | 0 | 1 | 0 | 0
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
const quotient = 5 / 2; // 2.5
const remainder = 5 % 2; // 1
inputs: [6, 3, 1]
Quotients: [3, 1, 0]
Remainders: [0, 1, 1]
const num = 5;
console.log(String(num)); // "5"
console.log(String(null)); // "null"
setTimeout(() => {
  console.log("Hello, world!");
}, 3000);
free
Camp
Code
"decimalToBinary(1) returns '1' (base case) and gives that value to the stack below. Then it pops off the stack."
"decimalToBinary(2) returns '1' + 0 (2 % 2) and gives that value to the stack below. Then it pops off the stack."
"decimalToBinary(5) returns '10' + 1 (5 % 2). Then it pops off the stack."
