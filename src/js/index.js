// const app = document.querySelector("#app");
// const createPage = () => {
//   console.log("NICE");
// };
// createPage();

const form = document.querySelector("#form");
const input = document.querySelector("#inputCity");
const app = document.querySelector("#app");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const city = input.value.trim();
  input.value = "";
  const apiKey = "1289f3b71732cf788b8ea917a6299964";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=ru&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const prevCard = document.querySelector(".card");
      if (prevCard) {
        prevCard.remove();
      }
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
          <h2 class="card-city">${data.name}</h2> <span>${
        data.sys.country
      }</span>
          <div class="card-weather">
            <div class="card-value">${Math.round(
              data.main.temp
            )}<sup>c</sup></div>
            <img class="card-image" src="#" alt="weather">
          </div>
          <div class="card-description">${data.weather[0].description}</div>
      `;
      app.append(card);
    })
    .catch(() => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = "Такого города не существует. Попробуйте снова";
      app.append(card);
    });
});
