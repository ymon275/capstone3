import React, { Component } from "react";
import Movie from "./movie";

class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [{id: 0}],
      url: "",
    };
  }

  getMovies() {
    fetch("https://imdb-api.com/en/API/MostPopularMovies/k_73lbxs1j")
        .then(responce => responce.json())
        .then(result => {this.setState({movies: result})})
        .catch(err => {return <h1>Sorry, there was an error</h1>})
    
  }

  render() {
    return (
      <div>
        {this.getMovies()}
        {this.state.movies.map((movie) => (
          <Movie key={movie.id} id={movie.id} />
        ))}
      </div>
    );
  }
}

export default Movies;
