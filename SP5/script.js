'use strict';
//get elements
const joke = document.getElementById('joke');
const next_joke = document.getElementById('next_joke');
const output = document.getElementById('cityName');
//API
const apiJoke = 'https://icanhazdadjoke.com/';
const chuckNorrisJoke = 'https://api.chucknorris.io/jokes/random';

next_joke.addEventListener('click', getJoke);

async function getJoke() {
  //call APIs
  //Api1
  const res = await fetch(apiJoke, {
    headers: {
      Accept: 'application/json',
    },
  });
  // Api2

  const res1 = await fetch(chuckNorrisJoke, {
    headers: {
      Accept: 'application/json',
    },
  });

  const data = await res.json();
  const data1 = await res1.json();

  const listOfjokes = [data.joke, data1.value];

  //get random jokes from APIS
  const randomJokes = Math.floor(Math.random() * listOfjokes.length);

  //set the new joke

  joke.innerHTML = '" ' + listOfjokes[randomJokes] + '" ';
  console.log(randomJokes);
}

getJoke();

///////////////////////////////////////////////////////////////////////

///Weather APi

let lon;
let lat;
let temperature = document.querySelector('.temp');
let summary = document.querySelector('.summary');
let loc = document.querySelector('.location');
const kelvin = 273;

window.addEventListener('load', () => {
  //get geolocation

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      console.log(position);
      lon = position.coords.longitude;
      lat = position.coords.latitude;

      //My API ID
      const api = 'bdedb6d73fcea7202b067b552464ef71';

      const url =
        `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&` +
        `lon=${lon}&appid=${api}`;

      //Call API

      fetch(url)
        .then(res2 => {
          return res2.json();
        })
        .then(data2 => {
          console.log(data2);

          temperature.textContent =
            '🌡  ' + Math.floor(data2.main.temp - kelvin) + '°C';
          summary.textContent = ' ☁️ ' + data2.weather[0].description;
          loc.textContent = ' 📍  ' + data2.name + ' , ' + data2.sys.country;
        });
    });
  }
});
