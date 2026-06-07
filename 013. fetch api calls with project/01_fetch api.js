// fetch api
// let promise = fetch(url, [options])
// api - application programming interface
const url = "https://cat-fact.herokuapp.com/facts"; // get request
const fact = document.querySelector("#fact");
const button = document.querySelector("#btn");
let promise = fetch(url);
console.log(promise);
const getFact = async () => {
  console.log("getting data..");
  let response = await fetch(url);
  console.log(response); // -> json / ajaj
  console.log(response.status);
  let data = await response.json();
  console.log(data);
  console.log(data[0].text);
  fact.innerText = data[1].text;
};
function getFacts() {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
}
// understanding terms
// ajax -> asynchronous js & xml
// json -> javascript object notation / ajaj
button.addEventListener("click", getFact);
