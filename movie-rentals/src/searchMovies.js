export default async function searchMovies(search) {
    let movies = [];
    movies = await fetch(`https://imdb-api.com/en/API/SearchMovie/k_xa1iox8h/${search}`,{
      method:'GET',
      headers:{
        'Content-Type':'application/json'
      },
      }).then(response=>response.json()
      ).then(result => console.log('placeholder', result)
        ).catch(err => console.log(err));
    return movies;
  };