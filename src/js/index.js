const form = document.querySelector("#form");
const input = document.querySelector("#inputCity");
const app = document.querySelector("#app");
// const geolocation = document.querySelector('.geolocation');

// Функция удаления карточки с погодой
function removeCard() {
  const prevCard = document.querySelector(".card");
  if (prevCard) {
    prevCard.remove();
  }
}
// Функция с показом если введено неверное имя города
function showErrorMessage() {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = "Такого города не существует. Попробуйте снова";
  app.append(card);
}

// Функция создает карточу товара
function createCard(data) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
      <h2 class="card-city">${data.name}</h2> <span>${data.sys.country}</span>
      <div class="card-weather">
        <div class="card-value">${Math.round(data.main.temp)}<sup>c</sup></div>
        <img class="card-image" src="http://openweathermap.org/img/w/${
          data.weather[0].icon
        }.png" alt="weather">
      </div>
      <div class="card-description">${data.weather[0].description}</div>
  `;
  app.append(card);
}

async function getWeather(city) {
  const apiKey = "1289f3b71732cf788b8ea917a6299964";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=ru&units=metric`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

// Слушатель клика на нажатие кнопки Показать
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const city = input.value.trim();
  input.value = "";
  const data = await getWeather(city);
  try {
    removeCard();
    createCard(data);
  } catch (error) {
    showErrorMessage();
  }
});

// geolocation.addEventListener('click', (e, pos) => {
//   e.preventDefault();
//   const crd = pos.coords;
//   const geoApiKey = 'e3c1286a2c7b4d50b1cd44d4b765dd55';
//   fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${crd.latitude}&lon=${crd.longitude}&apiKey=${geoApiKey}`)
//   .then(response => response.json())
//   .then(result => {
//     if (result.features.length) {
//       console.log(result.features[0].properties.formatted);
//     } else {
//       console.log("No address found");
//     }
//   });
// })
