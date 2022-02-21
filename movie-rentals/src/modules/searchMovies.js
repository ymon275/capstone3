const fetchDefault = require("node-fetch");

export default function searchMovies(search, fetch = fetchDefault) {
  if (search) {
    return fetch(
      `https://imdb-api.com/en/API/SearchMovie/k_xa1iox8h/${search}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .catch((err) => console.log(err));
  }
}
