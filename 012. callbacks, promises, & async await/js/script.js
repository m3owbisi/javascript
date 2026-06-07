// what this chapter is about?
// async await >> promise chains >> callback hell

// sync in js
// synchronous
console.log("zero");
console.log("one");
console.log("two");
console.log("three");
// output: zero, one, two, three

// asynchronous
console.log("zero");
console.log("one");
function hello() {
  console.log("hello");
}
setTimeout(hello, 2000); // timeout :: 2sec -> 2000
// output: hello (after 2 seconds)
setTimeout(hello, 4000); // timeout :: 4sec -> 4000
// output: hello (after 4 seconds)
console.log("two");
console.log("three");

// callbacks
function sum(a, b) {
  console.log(a + b);
}
function calculator(a, b, sumCallback) {
  sumCallback(a, b);
}
calculator(3, 4, sum);
/*
calculator(3, 4, (a,b) => {
  console.log(a + b);
});
*/
const printHello = () => {
  console.log("hello");
};
setTimeout(printHello, 3000);

// callback hell
// nesting
let age = 19;
if (age >= 18) {
  if (age >= 60) {
    console.log("senior");
  } else if (age >= 30) {
    console.log("adult");
  } else {
    console.log("young adult");
  }
} else {
  if (age >= 10) {
    console.log("teenager");
  } else if (age >= 5) {
    console.log("minor / kid");
  } else {
    console.log("infant / child");
  }
}
for (let i = 0; i < 5; i++) {
  let str = "";
  for (let j = 0; j < 5; j++) {
    str += j;
  }
  console.log(i, str);
}
function getData(data_Id, getNextData) {
  // simulate a delay
  /*
    setTimeout(() => {
      console.log("data ", data_Id);
      if (getNextData) {
        getNextData();
      }
    }, 5000);
*/
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data ", data_Id);
      resolve("success");
      if (getNextData) {
        getNextData();
      }
    }, 5000);
  });
}
/*
getData(
  0, // getData(1)
  () => {
    getData(1);
  }
);
*/
// nested callback hell
getData(0, () => {
  console.log("getting data..");
  getData(1, () => {
    console.log("getting data..");
    getData(2, () => {
      console.log("getting data..");
      getData(3, () => {
        console.log("getting data..");
        console.log("all data loaded");
      });
    });
  });
});
// getData(1);
// getData(2);
// getData(3);
// getData(data_Id);
// getDate(0123abcd);
// data0
// data1
// data2
// data3
// instagram -> [username][password]

// promises
// let promise = new Promise((resolve, reject) => {...})
// function with 2 handlers
let promise0 = new Promise((resolve, reject) => {
  // simulate a delay
  console.log("promise");
  // resolve(123);
  resolve("success");
  // reject("error");
});
// pending..
// resolved.. resolve(result)
// rejected.. reject(error)
// .then() & .catch()
// promise.then((res) => {...});
// promise.catch((err) => {...});
const getPromise = () => {
  return new Promise((resolve, reject) => {
    // simulate a delay
    console.log("promise");
    resolve("success");
    // reject("error");
  });
};
let promise1 = getPromise();
promise1.then((res) => {
  console.log("promise1 fulfilled / resolved", res);
});
promise1.catch((err) => {
  console.log("promise1 unfulfilled / error", err);
});
function asyncFunc0() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("some data..0");
      resolve("some data success..0");
    }, 3000);
  });
}
function asyncFunc1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("some data..1");
      resolve("some data success..1");
    }, 3000);
  });
}
// promise chains
console.log("fetching some data..0");
let p0 = asyncFunc0();
p0.then((res) => {
  console.log("asyncFunc fulfilled / resolved..0", res);
  console.log("fetching some data..1");
  let p1 = asyncFunc1();
  p1.then((res) => {
    console.log("asyncFunc fulfilled / resolved..1", res);
  });
});
// console.log("fetching some data..1");
// let p1 = asyncFunc1();
// p1.then((res) => {
// console.log("asyncFunc fulfilled / resolved..1", res);
// });
// console.log("fetching some data..0");
// asyncFunc0.then((res) => {
//   console.log("asyncFunc fulfilled / resolved..0", res);
//   console.log("fetching some data..1");
//   asyncFunc1.then((res) => {});
// });
// promise chain
getData(0)
  .then((res) => {
    return getData(1);
  })
  .then((res) => {
    console.log(res);
  });

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
