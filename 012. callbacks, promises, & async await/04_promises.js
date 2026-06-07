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
