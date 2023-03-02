// const app = document.querySelector("#app");
// const createPage = () => {
//   console.log("NICE");
// };
// createPage();

const form = document.querySelector("#form");
const input = document.querySelector("#inputCity");

let city;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  city = input.value.trim();
  console.log(city);
  input.value = "";
  const apiKey = "1289f3b71732cf788b8ea917a6299964";
  const url = `https://api.openweathermap.org/data/2.5/weather?
  q=${city}&appid=${apiKey}&lang=ru`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      console.log(data.name);
      console.log(data.main.temp);
    });
});
