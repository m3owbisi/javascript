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
