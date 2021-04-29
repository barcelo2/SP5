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
