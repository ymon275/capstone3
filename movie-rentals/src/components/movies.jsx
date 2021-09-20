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
      await fetch("https://imdb-api.com/en/API/MostPopularMovies/k_73lbxs1j")
        .then(responce => {console.log(responce); responce.json();})
        .then(result => this.state({ movies: result.items }))
        .catch(err => err);
      console.log('movies', this.state.movies);
      let movies = [];

    }
  }

  render() {
    this.getMovies();
    const { movies } = this.state;
    return (
      <div>
        {console.log(this.state.movies)}
        {movies.map((movie, index) => {
          <Movie key={index} id={movie.id} movie={movie}/>
        })}
      </div>
    );
  }
}

export default Movies;
