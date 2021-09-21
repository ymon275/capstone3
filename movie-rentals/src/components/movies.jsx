import React, { Component } from "react";
import Movie from "./movie";

class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
    this.run = true;
  }

  async getMovies() {
    if(this.run) {
      this.run = false;
      fetch('https://imdb-api.com/en/API/MostPopularMovies/k_73lbxs1j',{
        method:'GET',
        headers:{
          'Content-Type':'application/json'
        },
        }).then(response=>{
          return response.json()
        }).then(result=> {
        // this is the data we get after putting our data,
          this.setState({ movies: result.items })
          console.log('movies', this.state.movies)
        });
      };
  };

  render() {
    this.getMovies();
    const { movies } = this.state;
    // let fakeMovies = [{rank: 1, fullTitle: "Dora", id: "sdfasgivbas"}, {rank: 2, id: "bsvigabrs"}]
    return (
      <div>
        {console.log(this.state.movies)}
        {movies.map((movie, index) => {
          return <Movie key={index} id={movie.id} movie={movie}/>
        })}

      </div>
    );
  }
}

export default Movies;
