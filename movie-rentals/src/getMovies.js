export default async function getMovies() {
  let movies = [];
  movies = await fetch('https://imdb-api.com/en/API/MostPopularMovies/k_xa1iox8h',{
    method:'GET',
    headers:{
      'Content-Type':'application/json'
    },
    }).then(response => response.json()
    ).then(result => {movies=result;
      // console.log('movies', movies);
      return movies;
    }
    ).catch(err => console.log(err));
  // console.log('movies again', movies)
  return movies;
};