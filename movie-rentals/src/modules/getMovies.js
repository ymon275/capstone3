const fetchDefault = require("node-fetch");
function getMovies(fetch = fetchDefault) {
  return fetch("https://imdb-api.com/en/API/MostPopularMovies/k_xa1iox8h", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));
}

module.exports = getMovies;