// async-await
// async function myFunc(){...}
async function hello() {
  console.log("hello");
}
function api() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("weather data");
      resolve(200);
    }, 20000);
  });
}
async function getWeather() {
  await api();
  await api();
}
async function getAll() {
  await getData(0);
  await getData(1);
  await getData(2);
  await getData(3);
  await getData(4);
  await getData(5);
  await getData(6);
  await getData(7);
}
// async-await -> .then(), .catch()
// iife : immediately invoked function expression
/*

( function () {
  // ...
})();

( () => {
  // ...
})();

( async () => {
  // ...
})();

*/
